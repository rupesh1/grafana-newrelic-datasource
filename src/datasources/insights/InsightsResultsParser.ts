import { each } from 'lodash';

const getKey = (content: any): string => {
  let key = '';
  key = content.simple ? content.function : content.contents.contents ? content.contents.contents.function : content.contents.function;
  key = key === 'uniquecount' ? 'uniqueCount' : key;
  key = key === 'binop' ? 'result' : key;
  return key;
};

export class InsightsResultsParser {
  output: any = {
    columns: [],
    rows: [],
    type: 'table',
  };
  private pushTimeSeriesResult(target: any, datapoints: any) {
    if (this.output.columns && this.output.rows) {
      this.output = [];
    }
    const o = { target, datapoints };
    this.output.push(o);
  }
  private handlePercentageResults(content: any, timeseriesData: any, timeshift: number, index: number) {
    console.log('percentage results');
    const t = (content.function || '') + ' (' + content.of.function + ` of ${content.filter})`;
    const d = timeseriesData.map((item: any) => [item.results[index].result, item.beginTimeSeconds * 1000 + timeshift]);
    this.pushTimeSeriesResult(t, d);
  }
  private handlePercentileResults(content: any, timeseriesData: any, timeshift: number, index: number) {
    console.log('percentile results');
    content.thresholds.forEach((threshold: any) => {
      const t = (content.attribute || '') + ' (' + threshold + ' %)';
      const d = timeseriesData.map((item: any) => [item.results[index].percentiles[threshold.toString()], item.beginTimeSeconds * 1000 + timeshift]);
      this.pushTimeSeriesResult(t, d);
    });
  }
  private handleHistogramResults(timeseriesData: any, timeshift: number, index: number) {
    console.log('Received Timeseries histogram');
    each(timeseriesData[0].results[0].histogram, (v: any, k: any) => {
      const t = k.toString();
      const d = timeseriesData.map((item: any) => [item.results[index].histogram[k.toString()], item.beginTimeSeconds * 1000 + timeshift]);
      this.pushTimeSeriesResult(t, d);
    });
  }
  private handleStepResults(content: any, timeseriesData: any, timeshift: number, index: number) {
    console.log('Step results');
    content.steps.forEach((step: any, stepIndex: number) => {
      const t = step;
      const d = timeseriesData.map((item: any) => [item.results[index].steps[stepIndex], item.beginTimeSeconds * 1000 + timeshift]);
      this.pushTimeSeriesResult(t, d);
    });
  }
  private handleSingleColumnFacetResults(metadata: any, facet: any, index: number) {
    let key = metadata.contents.timeSeries.contents[0].contents.function || 'count';
    key = key === 'uniquecount' ? 'uniqueCount' : key;
    const t = facet.name || index;
    const d = facet.timeSeries.map((item: any) => [item.results[0][key], item.beginTimeSeconds * 1000]);
    this.pushTimeSeriesResult(t, d);
  }
  private handleMultiColumnFacetResults(metadata: any, facet: any, index: number) {
    each(metadata.contents.timeSeries.contents, (content: any, cindex: number) => {
      let key = getKey(content);
      // hack for rate(sum(...)...) queries
      if (key === 'rate') {
        key = 'result';
      }
      const t = (facet.name || index) + ' ' + (content.alias || key);
      const d = facet.timeSeries.map((item: any) => [item.results[cindex][key], item.beginTimeSeconds * 1000]);
      this.pushTimeSeriesResult(t, d);
    });
  }
  private handleRegularTimeseriesResutls(content: any, timeseriesData: any, timeshift: number, index: number, suffix: string) {
    console.log('Regular Timeseries');
    const title1 = content.alias || (content.contents ? content.contents.alias || content.contents.function : content.function);
    const title2 = suffix ? ` ( ${suffix.toLowerCase()} )` : '';
    const title = (title1 + title2).trim();
    let key = content.contents
      ? content.contents.contents
        ? content.contents.contents.function
        : content.contents.function
      : content.alias || content.function;
    key = key === 'uniquecount' ? 'uniqueCount' : key;
    const t = title;
    const d = timeseriesData.map((item: any) => [item.results[index][key] || item.results[index].result, item.beginTimeSeconds * 1000 + timeshift]);
    this.pushTimeSeriesResult(t, d);
  }
  private handleTimeseriesResult(metadata: any, timeseriesData: any, suffix: string, timeshift: number) {
    const timeseriesMetadata = metadata.timeSeries || metadata.contents.timeSeries;
    try {
      timeseriesMetadata.contents.forEach((content: any, index: number) => {
        {
          if (content && content.function === 'percentage' && content.simple) {
            this.handlePercentageResults(content, timeseriesData, timeshift, index);
          } else if (content && content.function === 'percentile') {
            this.handlePercentileResults(content, timeseriesData, timeshift, index);
          } else if (content && content.function === 'histogram') {
            this.handleHistogramResults(timeseriesData, timeshift, index);
          } else if (content.steps) {
            this.handleStepResults(content, timeseriesData, timeshift, index);
          } else {
            this.handleRegularTimeseriesResutls(content, timeseriesData, timeshift, index, suffix);
          }
        }
      });
    } catch (ex) {
      console.log('Error while parsing timeseries results');
    }
  }
  private handleFunnelTypeResults(responseData: any) {
    console.log('funnel Type');
    this.output.columns.push(
      {
        text: responseData.metadata.contents[0].attribute,
        type: 'string',
      },
      {
        text: 'value',
        type: typeof responseData.results[0].steps[0],
      }
    );
    each(responseData.metadata.contents[0].steps, (step: any, stepIndex: number) => {
      this.output.rows.push([step, responseData.results[0].steps[stepIndex]]);
    });
  }
  private handleEventsTypeResults(responseData: any) {
    console.log('events Type');
    this.output = {
      columns: [],
      rows: [],
      type: 'table',
    };
    const rows: any[] = [];
    const cols: any[] = [];
    const colKeys = new Set();
    // construct cols
    each(responseData.results[0].events, (event: any) => {
      each(event, (v: any, k: any) => {
        if (!colKeys.has(k) && k === 'timestamp') {
          colKeys.add(k);
          cols.push({
            text: 'Time',
            type: typeof new Date(0),
          });
        }
      });
      each(event, (v: any, k: any) => {
        if (!colKeys.has(k)) {
          colKeys.add(k);
          cols.push({
            text: k,
            type: k === 'appId' ? 'string' : typeof v,
          });
        }
      });
    });
    // process rows
    each(responseData.results[0].events, (event: any) => {
      const currRow: any[] = [];
      cols.forEach(col => {
        if (col.text === 'Time') {
          currRow.push(new Date(event['timestamp']));
        } else {
          currRow.push(event[col.text]);
        }
      });
      rows.push(currRow);
    });
    this.output.columns = cols;
    this.output.rows = rows;
  }
  private handleResultsTypeResults(responseData: any) {
    console.log('Results Type');
    this.output = {
      columns: [],
      rows: [],
      type: 'table',
    };
    each(responseData.metadata.contents, (content: any) => {
      this.output.columns = [];
      if (content.columns) {
        each(content.columns, (col: any) => {
          this.output.columns.push({
            text: col,
            type: typeof responseData.results[0].events[0][col],
          });
        });
      } else if (content.constant) {
        this.output.columns.push({
          text: content.alias || 'constant',
        });
      }
    });
    each(responseData.results[0].events, (row: any) => {
      const o: any[] = [];
      each(responseData.metadata.contents[0].columns, (col: any) => {
        o.push(row[col]);
      });
      this.output.rows.push(o);
    });
  }
  private handleUniquesTypeResults(responseData: any) {
    console.log('Uniques Type');
    this.output = {
      columns: [],
      rows: [],
      type: 'table',
    };
    each(responseData.metadata.contents, (content: any) => {
      this.output.columns = [];
      this.output.columns.push({
        text: content.attribute,
        type: 'string',
      });
    });
    each(responseData.results[0].members, (row: any) => {
      const o: any[] = [];
      o.push(row);
      this.output.rows.push(o);
    });
  }
  private handleSingleStateWithHistory(responseData: any) {
    console.log('Single stat with history');
    this.output = {
      columns: [],
      rows: [],
      type: 'table',
    };
    this.output.columns.push({
      text: 'stat',
      type: 'string',
    });
    each(responseData.metadata.contents.contents, content => {
      this.output.columns.push({
        type: 'string',
        text: content.function,
      });
    });
    each(responseData.current.results, result => {
      const row: any[] = [];
      row.push('Current');
      each(responseData.metadata.contents.contents, content => {
        row.push(result[content.function]);
      });
      this.output.rows.push(row);
    });
    each(responseData.previous.results, result => {
      const row: any[] = [];
      row.push(responseData.metadata.rawCompareWith || 'Previous');
      each(responseData.metadata.contents.contents, content => {
        row.push(result[content.function]);
      });
      this.output.rows.push(row);
    });
  }
  private handleMultiStatWithoutHistory(responseData: any) {
    console.log('Multiple stats without history');
    this.output = {
      columns: [],
      rows: [],
      type: 'table',
    };
    this.output.columns.push({
      text: 'stat',
      type: 'string',
    });
    this.output.columns.push({
      text: 'value',
      type: 'number',
    });
    each(responseData.metadata.contents, (content, cindex) => {
      const row: any[] = [];
      row.push(content.alias || content.contents.alias);
      let key = 'count';
      if (content.contents) {
        if (content.contents.contents) {
          key = content.contents.contents.function;
        } else {
          key = content.contents.function;
        }
      } else {
        key = content.function || 'count';
      }
      key = key === 'uniquecount' ? 'uniqueCount' : key;
      row.push(responseData.results[cindex][key]);
      this.output.rows.push(row);
    });
  }
  private handleTableResults(res: any) {
    console.log(`Received results in table format`);
    const totalResults: any[] = [];
    const facets = res.result.data.facets;
    const metadata = res.result.data.metadata;
    const title = metadata.facet;
    each(facets, (facet: any) => {
      const output: any = {};
      output[title] = facet.name;
      each(metadata.contents.contents, (content: any, index: number) => {
        let key = content.simple ? content.function : content.contents.contents ? content.contents.contents.function : content.contents.function;
        key = key === 'uniquecount' ? 'uniqueCount' : key;
        output[content.alias || content.function] = facet.results[index][key];
      });
      totalResults.push(output);
    });
    if (this.output.columns.length === 0) {
      if (metadata.facet) {
        each(totalResults[0], (v: any, k: any) => {
          if (k === metadata.facet) {
            this.output.columns.push({
              text: k,
              type: typeof v,
            });
          }
        });
        each(totalResults[0], (v: any, k: any) => {
          if (k !== metadata.facet) {
            this.output.columns.push({
              text: k,
              type: typeof v,
            });
          }
        });
      } else {
        each(totalResults[0], (v: any, k: any) => {
          this.output.columns.push({
            text: k,
            type: typeof v,
          });
        });
      }
    }
    each(totalResults, (tempRes: any) => {
      if (metadata.facet) {
        const row: any[] = [];
        each(tempRes, (v: any, k: any) => {
          if (k === metadata.facet) {
            row.push(v);
          }
        });
        each(tempRes, (v: any, k: any) => {
          if (k !== metadata.facet) {
            row.push(v);
          }
        });
        this.output.rows.push(row);
      } else {
        const row: any[] = [];
        each(tempRes, (v: any, k: any) => {
          row.push(v);
        });
        this.output.rows.push(row);
      }
    });
  }
  constructor(results: any[]) {
    try {
      results.forEach((res: any) => {
        const response = res.result;
        if (response && response.data && response.data.metadata) {
          const responseData = response.data;
          if (responseData.timeSeries || (responseData.current && responseData.current.timeSeries)) {
            console.log(`Received results in timeseries format`);
            if (responseData.timeSeries) {
              this.handleTimeseriesResult(responseData.metadata, responseData.timeSeries, '', 0);
            } else {
              if (responseData.current) {
                this.handleTimeseriesResult(responseData.metadata, responseData.current.timeSeries, '', 0);
              }
              if (responseData.previous) {
                const suffix = responseData.metadata.rawCompareWith || 'Previous';
                this.handleTimeseriesResult(responseData.metadata, responseData.previous.timeSeries, suffix, responseData.metadata.compareWith || 0);
              }
            }
          } else if (responseData.facets && responseData.facets[0] && responseData.facets[0].timeSeries) {
            console.log(`Received results in table with timeseries format`);
            if (this.output.columns && this.output.rows) {
              this.output = [];
            }
            const metadata = responseData.metadata;
            each(responseData.facets, (facet: any, index: number) => {
              if (metadata.contents.timeSeries.contents.length === 0) {
                this.handleSingleColumnFacetResults(metadata, facet, index);
              } else {
                this.handleMultiColumnFacetResults(metadata, facet, index);
              }
            });
          } else if (responseData.facets) {
            this.handleTableResults(res);
          } else if (responseData.results) {
            if (responseData.metadata.contents && responseData.metadata.contents[0]) {
              if (responseData.metadata.contents[0].function === 'funnel') {
                this.handleFunnelTypeResults(responseData);
              } else if (responseData.metadata.contents[0].function === 'events') {
                this.handleEventsTypeResults(responseData);
              } else if (responseData.metadata.contents[0].function === 'uniques') {
                this.handleUniquesTypeResults(responseData);
              } else if (responseData.metadata.contents.length > 0) {
                this.handleMultiStatWithoutHistory(responseData);
              } else {
                console.log('Result type not handled');
              }
            } else {
              this.handleResultsTypeResults(responseData);
            }
          } else if (responseData.current && responseData.previous) {
            this.handleSingleStateWithHistory(responseData);
          } else {
            console.log('This format of result is not handled yet');
          }
        }
      });
    } catch (ex) {
      console.log('Error while parsing the results', ex);
    }
  }
  getResultsAsVariablesList() {
    const returnvalues: any[] = [];
    each(this.output.rows, row => {
      each(row, col => {
        returnvalues.push({
          text: col,
          value: col,
        });
      });
    });
    return returnvalues;
  }
}
