import _ from "lodash";

export class InsightsResultsParser {
    public output: any = {
        columns: [],
        rows: [],
        type: 'table',
    };
    private handleTimeseriesResult(metadata, timeseries_data, suffix, timeshift) {
        let timeseries_metadata = metadata.timeSeries || metadata.contents.timeSeries;
        _.each(timeseries_metadata.contents, (content, index) => {
            if (content && content.function === "percentage" && content.simple) {
                console.log("percentage results");
                let o = {
                    target: (content.function || "") + " (" + content.of.function + ` of ${content.filter})`,
                    datapoints: timeseries_data.map(item => [item.results[0].result, (item.beginTimeSeconds * 1000) + timeshift])
                };
                this.output.push(o);
            } else if (content && content.function === "percentile") {
                console.log("percentile results");
                _.each(content.thresholds, threshold => {
                    let o = {
                        target: (content.attribute || "") + " (" + threshold + " %)",
                        datapoints: timeseries_data.map(item => [item.results[index].percentiles[threshold.toString()], (item.beginTimeSeconds * 1000) + timeshift])
                    };
                    this.output.push(o);
                });
            } else if (content && content.function === "histogram") {
                console.log("Received Timeseries histogram");
                _.each(timeseries_data[0].results[0].histogram, (v, k) => {
                    if (v !== v) { throw "Error"; }
                    let o = {
                        target: k.toString(),
                        datapoints: timeseries_data.map(item => [item.results[index].histogram[k.toString()], (item.beginTimeSeconds * 1000) + timeshift])
                    };
                    this.output.push(o);
                });
            } else if (content.steps) {
                console.log("Step results");
                _.each(content.steps, (step, stepIndex) => {
                    let o = {
                        target: step,
                        datapoints: timeseries_data.map(item => [item.results[index].steps[stepIndex], (item.beginTimeSeconds * 1000) + timeshift])
                    };
                    this.output.push(o);
                });
            } else {
                console.log("Regular Timeseries");
                let title = ((content.alias || (content.contents ? (content.contents.alias || content.contents.function) : content.function)) + (suffix ? ` ( ${suffix.toLowerCase()} )` : '')).trim();
                let key = content.contents ? (content.contents.contents ? content.contents.contents.function : content.contents.function) : (content.alias || content.function);
                let o = {
                    target: title,
                    datapoints: timeseries_data.map(item => [(item.results[index][key] || item.results[index].result), (item.beginTimeSeconds * 1000) + timeshift])
                };
                this.output.push(o);
            }

        });
    }
    constructor(results: any[]) {
        _.each(results, res => {
            let response = res.result;
            if (response && response.data && response.data.metadata) {
                if (response.data.timeSeries || (response.data.current && response.data.current.timeSeries)) {
                    console.log(`Received results in timeseries format`);
                    if (this.output.columns && this.output.rows) {
                        this.output = [];
                    }
                    if (response.data.timeSeries) {
                        this.handleTimeseriesResult(response.data.metadata, response.data.timeSeries, "", 0);
                    } else {
                        if (response.data.current) {
                            this.handleTimeseriesResult(response.data.metadata, response.data.current.timeSeries, "", 0);
                        }
                        if (response.data.previous) {
                            this.handleTimeseriesResult(response.data.metadata, response.data.previous.timeSeries, (response.data.metadata.rawCompareWith || "Previous"), response.data.metadata.compareWith || 0);
                        }
                    }
                } else if (response.data.facets && response.data.facets[0] && response.data.facets[0].timeSeries) {
                    console.log(`Received results in table with timeseries format`);
                    if (this.output.columns && this.output.rows) {
                        this.output = [];
                    }
                    let metadata = response.data.metadata;
                    _.each(response.data.facets, (facet, index) => {
                        if (metadata.contents.timeSeries.contents.length === 0) {
                            let key = metadata.contents.timeSeries.contents[0].contents.function || "count";
                            let title = facet.name || index;
                            let o = {
                                target: title,
                                datapoints: facet.timeSeries.map(item => [item.results[0][key], item.beginTimeSeconds * 1000])
                            };
                            this.output.push(o);
                        } else {
                            _.each(metadata.contents.timeSeries.contents, (c, cindex) => {
                                let key = c.simple ? c.function : (c.contents.function || "count");
                                let title = (facet.name || index) + " " + (c.alias || key);
                                let o = {
                                    target: title,
                                    datapoints: facet.timeSeries.map(item => [item.results[cindex][key], item.beginTimeSeconds * 1000])
                                };
                                this.output.push(o);
                            });
                        }
                    });

                } else if (response.data.facets) {
                    let total_results: any[] = [];
                    console.log(`Received results in table format`);
                    let facets = res.result.data.facets;
                    let metadata = res.result.data.metadata;
                    let title = metadata.facet;
                    _.each(facets, facet => {
                        let output = {};
                        output[title] = facet.name;
                        _.each(metadata.contents.contents, (content, index) => {
                            output[content.alias || content.function] = facet.results[index][content.simple ? content.function : content.contents.function];
                        });
                        total_results.push(output);
                    });
                    if (this.output.columns.length === 0) {
                        _.each(total_results[0], (v, k) => {
                            this.output.columns.push({
                                text: k,
                                type: typeof v
                            });
                        });
                    }
                    _.each(total_results, temp_res => {
                        let row: any[] = [];
                        _.each(temp_res, (v, k) => {
                            row.push(v);
                            if (!k) { if (1 !== 1) { console.log("Do Nothing"); } }
                        });
                        this.output.rows.push(row);
                    });
                } else if (response.data.results) {
                    if (response.data.metadata.contents && response.data.metadata.contents[0] && response.data.metadata.contents[0].function === "funnel") {
                        console.log("funnel Type");
                        this.output.columns.push({
                            text: response.data.metadata.contents[0].attribute,
                            type: "string"
                        }, {
                            text: "value",
                            type: typeof response.data.results[0].steps[0]
                        });
                        _.each(response.data.metadata.contents[0].steps, (step, stepIndex) => {
                            this.output.rows.push([step, response.data.results[0].steps[stepIndex]]);
                        });
                    } else if (response.data.metadata.contents && response.data.metadata.contents[0] && response.data.metadata.contents[0].function === "events") {
                        console.log("events Type");
                        this.output = {
                            columns: [],
                            rows: [],
                            type: 'table',
                        };
                        let rows: any[] = [];
                        let cols: any[] = [];
                        _.each(response.data.results[0].events, event => {
                            cols = [];
                            let curr_row: any[] = [];
                            _.each(event, (v, k) => {
                                if (k === "timestamp") {
                                    cols.push({
                                        text: k,
                                        type: typeof v
                                    });
                                    curr_row.push(v);
                                }
                            });
                            _.each(event, (v, k) => {
                                if (k !== "timestamp") {
                                    cols.push({
                                        text: k,
                                        type: (k === "appId") ? "string" : (typeof v)
                                    });
                                    curr_row.push(v);
                                }
                            });
                            rows.push(curr_row);
                        });
                        this.output.columns = cols;
                        this.output.rows = rows;
                    } else {
                        console.log("Results Type");
                        this.output = {
                            columns: [],
                            rows: [],
                            type: 'table',
                        };
                        _.each(response.data.metadata.contents, content => {
                            this.output.columns = [];
                            if (content.columns) {
                                _.each(content.columns, (col) => {
                                    this.output.columns.push({
                                        text: col,
                                        type: typeof response.data.results[0].events[0][col]
                                    });
                                });
                            } else if (content.constant) {
                                this.output.columns.push({
                                    text: content.alias || "constant"
                                });
                            }
                        });
                        _.each(response.data.results[0].events, row => {
                            let o: any[] = [];
                            _.each(response.data.metadata.contents[0].columns, (col) => {
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
    constructor(private instanceSettings: any, private backendSrv, private $q) {
        this.url = this.instanceSettings.url + "/insights";
        this.insightsAccountID = this.instanceSettings.jsonData.insightsAccountID;
    }

    private async doInsightsRequest(options: any, maxRetries = 1) {
        const query_params = Object.keys(options).filter(k => ["nrql"].indexOf(k) > -1).map(k => `${k}=${encodeURI(options[k])}`).join('&');
        return this.backendSrv
            .datasourceRequest({
                method: 'GET',
                url: this.url + `/${this.insightsAccountID}/query?${query_params}`
            })
            .catch((error: any) => {
                if (maxRetries > 0) {
                    return this.doInsightsRequest(options, maxRetries - 1);
                }
                throw error;
            });
    }

    private doQueries(queries: any[]) {
        return _.map(queries, query => {
            return this.doInsightsRequest(query)
                .then((result: any) => {
                    return { result, query };
                })
                .catch((error: any) => {
                    throw { error, query };
                });
        });
    }

    public async query(options: any) {
        const queries: any[] = _.filter(options.targets, item => {
            return item.hide !== true && item.insights && item.insights.nrql;
        }).map((target: any) => {
            const item: any = target.insights;
            const rangeConfig = ` SINCE ${options.range.from} UNTIL ${options.range.to} `;
            if (!item.nrql.toLowerCase().includes(' since ') && !item.nrql.toLowerCase().includes(' until ')) {
                item.nrql += ' ' + rangeConfig;
            }
            if (item.resultFormat !== "table") {
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
        return this.$q.all(promises).then(results => {
            const responseParser = new InsightsResultsParser(results);
            return responseParser.output;
        });
    }

}
