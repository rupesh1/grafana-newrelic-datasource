import { each, map, filter } from 'lodash';

export class InsightsResultsParser {
  output: any = {
    columns: [],
    rows: [],
    type: 'table',
  };
  private handleTimeseriesResult(metadata: any, timeseriesData: any, suffix: string, timeshift: number) {
    const timeseriesMetadata = metadata.timeSeries || metadata.contents.timeSeries;
    each(timeseriesMetadata.contents, (content: any, index: number) => {
      if (content && content.function === 'percentage' && content.simple) {
        console.log('percentage results');
        const o = {
          target: (content.function || '') + ' (' + content.of.function + ` of ${content.filter})`,
          datapoints: timeseriesData.map((item: any) => [item.results[0].result, item.beginTimeSeconds * 1000 + timeshift]),
        };
        this.output.push(o);
      } else if (content && content.function === 'percentile') {
        console.log('percentile results');
        each(content.thresholds, (threshold: any) => {
          const o = {
            target: (content.attribute || '') + ' (' + threshold + ' %)',
            datapoints: timeseriesData.map((item: any) => [
              item.results[index].percentiles[threshold.toString()],
              item.beginTimeSeconds * 1000 + timeshift,
            ]),
          };
          this.output.push(o);
        });
      } else if (content && content.function === 'histogram') {
        console.log('Received Timeseries histogram');
        each(timeseriesData[0].results[0].histogram, (v: any, k: any) => {
          if (v !== v) {
            throw new Error('Error');
          }
          const o = {
            target: k.toString(),
            datapoints: timeseriesData.map((item: any) => [item.results[index].histogram[k.toString()], item.beginTimeSeconds * 1000 + timeshift]),
          };
          this.output.push(o);
        });
      } else if (content.steps) {
        console.log('Step results');
        each(content.steps, (step: any, stepIndex: number) => {
          const o = {
            target: step,
            datapoints: timeseriesData.map((item: any) => [item.results[index].steps[stepIndex], item.beginTimeSeconds * 1000 + timeshift]),
          };
          this.output.push(o);
        });
      } else {
        console.log('Regular Timeseries');
        const title = (
          (content.alias || (content.contents ? content.contents.alias || content.contents.function : content.function)) +
          (suffix ? ` ( ${suffix.toLowerCase()} )` : '')
        ).trim();
        const key = content.contents
          ? content.contents.contents
            ? content.contents.contents.function
            : content.contents.function
          : content.alias || content.function;
        const o = {
          target: title,
          datapoints: timeseriesData.map((item: any) => [
            item.results[index][key] || item.results[index].result,
            item.beginTimeSeconds * 1000 + timeshift,
          ]),
        };
        this.output.push(o);
      }
    });
  }
  constructor(results: any[]) {
    each(results, (res: any) => {
      const response = res.result;
      if (response && response.data && response.data.metadata) {
        if (response.data.timeSeries || (response.data.current && response.data.current.timeSeries)) {
          console.log(`Received results in timeseries format`);
          if (this.output.columns && this.output.rows) {
            this.output = [];
          }
          if (response.data.timeSeries) {
            this.handleTimeseriesResult(response.data.metadata, response.data.timeSeries, '', 0);
          } else {
            if (response.data.current) {
              this.handleTimeseriesResult(response.data.metadata, response.data.current.timeSeries, '', 0);
            }
            if (response.data.previous) {
              this.handleTimeseriesResult(
                response.data.metadata,
                response.data.previous.timeSeries,
                response.data.metadata.rawCompareWith || 'Previous',
                response.data.metadata.compareWith || 0
              );
            }
          }
        } else if (response.data.facets && response.data.facets[0] && response.data.facets[0].timeSeries) {
          console.log(`Received results in table with timeseries format`);
          if (this.output.columns && this.output.rows) {
            this.output = [];
          }
          const metadata = response.data.metadata;
          each(response.data.facets, (facet: any, index: number) => {
            if (metadata.contents.timeSeries.contents.length === 0) {
              const key = metadata.contents.timeSeries.contents[0].contents.function || 'count';
              const title = facet.name || index;
              const o = {
                target: title,
                datapoints: facet.timeSeries.map((item: any) => [item.results[0][key], item.beginTimeSeconds * 1000]),
              };
              this.output.push(o);
            } else {
              each(metadata.contents.timeSeries.contents, (c: any, cindex: number) => {
                const key = c.simple ? c.function : c.contents.function || 'count';
                const title = (facet.name || index) + ' ' + (c.alias || key);
                const o = {
                  target: title,
                  datapoints: facet.timeSeries.map((item: any) => [item.results[cindex][key], item.beginTimeSeconds * 1000]),
                };
                this.output.push(o);
              });
            }
          });
        } else if (response.data.facets) {
          const totalResults: any[] = [];
          console.log(`Received results in table format`);
          const facets = res.result.data.facets;
          const metadata = res.result.data.metadata;
          const title = metadata.facet;
          each(facets, (facet: any) => {
            const output: any = {};
            output[title] = facet.name;
            each(metadata.contents.contents, (content: any, index: number) => {
              output[content.alias || content.function] = facet.results[index][content.simple ? content.function : content.contents.function];
            });
            totalResults.push(output);
          });
          if (this.output.columns.length === 0) {
            each(totalResults[0], (v: any, k: any) => {
              this.output.columns.push({
                text: k,
                type: typeof v,
              });
            });
          }
          each(totalResults, (tempRes: any) => {
            const row: any[] = [];
            each(tempRes, (v: any, k: any) => {
              row.push(v);
              if (!k) {
                if (1 !== 1) {
                  console.log('Do Nothing');
                }
              }
            });
            this.output.rows.push(row);
          });
        } else if (response.data.results) {
          if (response.data.metadata.contents && response.data.metadata.contents[0] && response.data.metadata.contents[0].function === 'funnel') {
            console.log('funnel Type');
            this.output.columns.push(
              {
                text: response.data.metadata.contents[0].attribute,
                type: 'string',
              },
              {
                text: 'value',
                type: typeof response.data.results[0].steps[0],
              }
            );
            each(response.data.metadata.contents[0].steps, (step: any, stepIndex: number) => {
              this.output.rows.push([step, response.data.results[0].steps[stepIndex]]);
            });
          } else if (
            response.data.metadata.contents &&
            response.data.metadata.contents[0] &&
            response.data.metadata.contents[0].function === 'events'
          ) {
            console.log('events Type');
            this.output = {
              columns: [],
              rows: [],
              type: 'table',
            };
            const rows: any[] = [];
            let cols: any[] = [];
            each(response.data.results[0].events, (event: any) => {
              cols = [];
              const currRow: any[] = [];
              each(event, (v: any, k: any) => {
                if (k === 'timestamp') {
                  cols.push({
                    text: k,
                    type: typeof v,
                  });
                  currRow.push(v);
                }
              });
              each(event, (v: any, k: any) => {
                if (k !== 'timestamp') {
                  cols.push({
                    text: k,
                    type: k === 'appId' ? 'string' : typeof v,
                  });
                  currRow.push(v);
                }
              });
              rows.push(currRow);
            });
            this.output.columns = cols;
            this.output.rows = rows;
          } else {
            console.log('Results Type');
            this.output = {
              columns: [],
              rows: [],
              type: 'table',
            };
            each(response.data.metadata.contents, (content: any) => {
              this.output.columns = [];
              if (content.columns) {
                each(content.columns, (col: any) => {
                  this.output.columns.push({
                    text: col,
                    type: typeof response.data.results[0].events[0][col],
                  });
                });
              } else if (content.constant) {
                this.output.columns.push({
                  text: content.alias || 'constant',
                });
              }
            });
            each(response.data.results[0].events, (row: any) => {
              const o: any[] = [];
              each(response.data.metadata.contents[0].columns, (col: any) => {
                o.push(row[col]);
              });
              this.output.rows.push(o);
            });
          }
        }
      }
    });
  }
}

/** @ngInject */
export class NewrelicInsightsDataSource {
  private url: string;
  private insightsAccountID: string;

  /** @ngInject */
  constructor(private instanceSettings: any, private backendSrv: any, private $q: any) {
    this.url = this.instanceSettings.url + '/insights';
    this.insightsAccountID = this.instanceSettings.jsonData.insightsAccountID;
  }

  private doInsightsRequest(options: any, maxRetries = 1) {
    const queryParams = Object.keys(options)
      .filter(k => ['nrql'].indexOf(k) > -1)
      .map(k => `${k}=${encodeURI(options[k])}`)
      .join('&');
    return this.backendSrv
      .datasourceRequest({
        method: 'GET',
        url: this.url + `/${this.insightsAccountID}/query?${queryParams}`,
      })
      .catch((error: any) => {
        if (maxRetries > 0) {
          return this.doInsightsRequest(options, maxRetries - 1);
        }
        throw error;
      });
  }

  private doQueries(queries: any[]) {
    return map(queries, (query: any) => {
      return this.doInsightsRequest(query)
        .then((result: any) => {
          return { result, query };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }

  query(options: any) {
    const queries: any[] = filter(options.targets, (item: any) => {
      return item.hide !== true && item.insights && item.insights.nrql;
    }).map((target: any) => {
      const item: any = target.insights;
      const rangeConfig = ` SINCE ${options.range.from} UNTIL ${options.range.to} `;
      if (!item.nrql.toLowerCase().includes(' since ') && !item.nrql.toLowerCase().includes(' until ')) {
        item.nrql += ' ' + rangeConfig;
      }
      if (item.resultFormat !== 'table') {
        if (!item.nrql.toLowerCase().endsWith('timeseries') && !item.nrql.toLowerCase().includes(' timeseries ')) {
          item.nrql += ' timeseries auto ';
        }
      }
      return item;
    });
    if (!queries || queries.length === 0) {
      return;
    }
    const promises = this.doQueries(queries);
    return this.$q.all(promises).then((results: any) => {
      const responseParser = new InsightsResultsParser(results);
      return responseParser.output;
    });
  }
}
