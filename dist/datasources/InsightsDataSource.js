System.register(["lodash"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var lodash_1, InsightsResultsParser, NewrelicInsightsDataSource;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }
        ],
        execute: function () {
            InsightsResultsParser = (function () {
                function InsightsResultsParser(results) {
                    var _this = this;
                    this.output = {
                        columns: [],
                        rows: [],
                        type: 'table',
                    };
                    lodash_1.default.each(results, function (res) {
                        var response = res.result;
                        if (response && response.data && response.data.metadata) {
                            if (response.data.timeSeries || (response.data.current && response.data.current.timeSeries)) {
                                console.log("Received results in timeseries format");
                                if (_this.output.columns && _this.output.rows) {
                                    _this.output = [];
                                }
                                if (response.data.timeSeries) {
                                    _this.handleTimeseriesResult(response.data.metadata, response.data.timeSeries, "", 0);
                                }
                                else {
                                    if (response.data.current) {
                                        _this.handleTimeseriesResult(response.data.metadata, response.data.current.timeSeries, "", 0);
                                    }
                                    if (response.data.previous) {
                                        _this.handleTimeseriesResult(response.data.metadata, response.data.previous.timeSeries, (response.data.metadata.rawCompareWith || "Previous"), response.data.metadata.compareWith || 0);
                                    }
                                }
                            }
                            else if (response.data.facets && response.data.facets[0] && response.data.facets[0].timeSeries) {
                                console.log("Received results in table with timeseries format");
                                if (_this.output.columns && _this.output.rows) {
                                    _this.output = [];
                                }
                                var metadata_1 = response.data.metadata;
                                lodash_1.default.each(response.data.facets, function (facet, index) {
                                    if (metadata_1.contents.timeSeries.contents.length === 0) {
                                        var key_1 = metadata_1.contents.timeSeries.contents[0].contents.function || "count";
                                        var title = facet.name || index;
                                        var o = {
                                            target: title,
                                            datapoints: facet.timeSeries.map(function (item) { return [item.results[0][key_1], item.beginTimeSeconds * 1000]; })
                                        };
                                        _this.output.push(o);
                                    }
                                    else {
                                        lodash_1.default.each(metadata_1.contents.timeSeries.contents, function (c, cindex) {
                                            var key = c.simple ? c.function : (c.contents.function || "count");
                                            var title = (facet.name || index) + " " + (c.alias || key);
                                            var o = {
                                                target: title,
                                                datapoints: facet.timeSeries.map(function (item) { return [item.results[cindex][key], item.beginTimeSeconds * 1000]; })
                                            };
                                            _this.output.push(o);
                                        });
                                    }
                                });
                            }
                            else if (response.data.facets) {
                                var total_results_1 = [];
                                console.log("Received results in table format");
                                var facets = res.result.data.facets;
                                var metadata_2 = res.result.data.metadata;
                                var title_1 = metadata_2.facet;
                                lodash_1.default.each(facets, function (facet) {
                                    var output = {};
                                    output[title_1] = facet.name;
                                    lodash_1.default.each(metadata_2.contents.contents, function (content, index) {
                                        output[content.alias || content.function] = facet.results[index][content.simple ? content.function : content.contents.function];
                                    });
                                    total_results_1.push(output);
                                });
                                if (_this.output.columns.length === 0) {
                                    lodash_1.default.each(total_results_1[0], function (v, k) {
                                        _this.output.columns.push({
                                            text: k,
                                            type: typeof v
                                        });
                                    });
                                }
                                lodash_1.default.each(total_results_1, function (temp_res) {
                                    var row = [];
                                    lodash_1.default.each(temp_res, function (v, k) {
                                        row.push(v);
                                        if (!k) {
                                            if (1 !== 1) {
                                                console.log("Do Nothing");
                                            }
                                        }
                                    });
                                    _this.output.rows.push(row);
                                });
                            }
                            else if (response.data.results) {
                                if (response.data.metadata.contents && response.data.metadata.contents[0] && response.data.metadata.contents[0].function === "funnel") {
                                    console.log("funnel Type");
                                    _this.output.columns.push({
                                        text: response.data.metadata.contents[0].attribute,
                                        type: "string"
                                    }, {
                                        text: "value",
                                        type: typeof response.data.results[0].steps[0]
                                    });
                                    lodash_1.default.each(response.data.metadata.contents[0].steps, function (step, stepIndex) {
                                        _this.output.rows.push([step, response.data.results[0].steps[stepIndex]]);
                                    });
                                }
                                else if (response.data.metadata.contents && response.data.metadata.contents[0] && response.data.metadata.contents[0].function === "events") {
                                    console.log("events Type");
                                    _this.output = {
                                        columns: [],
                                        rows: [],
                                        type: 'table',
                                    };
                                    var rows_1 = [];
                                    var cols_1 = [];
                                    lodash_1.default.each(response.data.results[0].events, function (event) {
                                        cols_1 = [];
                                        var curr_row = [];
                                        lodash_1.default.each(event, function (v, k) {
                                            if (k === "timestamp") {
                                                cols_1.push({
                                                    text: k,
                                                    type: typeof v
                                                });
                                                curr_row.push(v);
                                            }
                                        });
                                        lodash_1.default.each(event, function (v, k) {
                                            if (k !== "timestamp") {
                                                cols_1.push({
                                                    text: k,
                                                    type: (k === "appId") ? "string" : (typeof v)
                                                });
                                                curr_row.push(v);
                                            }
                                        });
                                        rows_1.push(curr_row);
                                    });
                                    _this.output.columns = cols_1;
                                    _this.output.rows = rows_1;
                                }
                                else {
                                    console.log("Results Type");
                                    _this.output = {
                                        columns: [],
                                        rows: [],
                                        type: 'table',
                                    };
                                    lodash_1.default.each(response.data.metadata.contents, function (content) {
                                        _this.output.columns = [];
                                        if (content.columns) {
                                            lodash_1.default.each(content.columns, function (col) {
                                                _this.output.columns.push({
                                                    text: col,
                                                    type: typeof response.data.results[0].events[0][col]
                                                });
                                            });
                                        }
                                        else if (content.constant) {
                                            _this.output.columns.push({
                                                text: content.alias || "constant"
                                            });
                                        }
                                    });
                                    lodash_1.default.each(response.data.results[0].events, function (row) {
                                        var o = [];
                                        lodash_1.default.each(response.data.metadata.contents[0].columns, function (col) {
                                            o.push(row[col]);
                                        });
                                        _this.output.rows.push(o);
                                    });
                                }
                            }
                        }
                    });
                }
                InsightsResultsParser.prototype.handleTimeseriesResult = function (metadata, timeseries_data, suffix, timeshift) {
                    var _this = this;
                    var timeseries_metadata = metadata.timeSeries || metadata.contents.timeSeries;
                    lodash_1.default.each(timeseries_metadata.contents, function (content, index) {
                        if (content && content.function === "percentage" && content.simple) {
                            console.log("percentage results");
                            var o = {
                                target: (content.function || "") + " (" + content.of.function + (" of " + content.filter + ")"),
                                datapoints: timeseries_data.map(function (item) { return [item.results[0].result, (item.beginTimeSeconds * 1000) + timeshift]; })
                            };
                            _this.output.push(o);
                        }
                        else if (content && content.function === "percentile") {
                            console.log("percentile results");
                            lodash_1.default.each(content.thresholds, function (threshold) {
                                var o = {
                                    target: (content.attribute || "") + " (" + threshold + " %)",
                                    datapoints: timeseries_data.map(function (item) { return [item.results[index].percentiles[threshold.toString()], (item.beginTimeSeconds * 1000) + timeshift]; })
                                };
                                _this.output.push(o);
                            });
                        }
                        else if (content && content.function === "histogram") {
                            console.log("Received Timeseries histogram");
                            lodash_1.default.each(timeseries_data[0].results[0].histogram, function (v, k) {
                                if (v !== v) {
                                    throw "Error";
                                }
                                var o = {
                                    target: k.toString(),
                                    datapoints: timeseries_data.map(function (item) { return [item.results[index].histogram[k.toString()], (item.beginTimeSeconds * 1000) + timeshift]; })
                                };
                                _this.output.push(o);
                            });
                        }
                        else if (content.steps) {
                            console.log("Step results");
                            lodash_1.default.each(content.steps, function (step, stepIndex) {
                                var o = {
                                    target: step,
                                    datapoints: timeseries_data.map(function (item) { return [item.results[index].steps[stepIndex], (item.beginTimeSeconds * 1000) + timeshift]; })
                                };
                                _this.output.push(o);
                            });
                        }
                        else {
                            console.log("Regular Timeseries");
                            var title = ((content.alias || (content.contents ? (content.contents.alias || content.contents.function) : content.function)) + (suffix ? " ( " + suffix.toLowerCase() + " )" : '')).trim();
                            var key_2 = content.contents ? (content.contents.contents ? content.contents.contents.function : content.contents.function) : (content.alias || content.function);
                            var o = {
                                target: title,
                                datapoints: timeseries_data.map(function (item) { return [(item.results[index][key_2] || item.results[index].result), (item.beginTimeSeconds * 1000) + timeshift]; })
                            };
                            _this.output.push(o);
                        }
                    });
                };
                return InsightsResultsParser;
            }());
            exports_1("InsightsResultsParser", InsightsResultsParser);
            NewrelicInsightsDataSource = (function () {
                function NewrelicInsightsDataSource(instanceSettings, backendSrv, $q) {
                    this.instanceSettings = instanceSettings;
                    this.backendSrv = backendSrv;
                    this.$q = $q;
                    this.url = this.instanceSettings.url + "/insights";
                    this.insightsAccountID = this.instanceSettings.jsonData.insightsAccountID;
                }
                NewrelicInsightsDataSource.prototype.doInsightsRequest = function (options, maxRetries) {
                    if (maxRetries === void 0) { maxRetries = 1; }
                    return __awaiter(this, void 0, void 0, function () {
                        var query_params;
                        var _this = this;
                        return __generator(this, function (_a) {
                            query_params = Object.keys(options).filter(function (k) { return ["nrql"].indexOf(k) > -1; }).map(function (k) { return k + "=" + encodeURI(options[k]); }).join('&');
                            return [2, this.backendSrv
                                    .datasourceRequest({
                                    method: 'GET',
                                    url: this.url + ("/" + this.insightsAccountID + "/query?" + query_params)
                                })
                                    .catch(function (error) {
                                    if (maxRetries > 0) {
                                        return _this.doInsightsRequest(options, maxRetries - 1);
                                    }
                                    throw error;
                                })];
                        });
                    });
                };
                NewrelicInsightsDataSource.prototype.doQueries = function (queries) {
                    var _this = this;
                    return lodash_1.default.map(queries, function (query) {
                        return _this.doInsightsRequest(query)
                            .then(function (result) {
                            return { result: result, query: query };
                        })
                            .catch(function (error) {
                            throw { error: error, query: query };
                        });
                    });
                };
                NewrelicInsightsDataSource.prototype.query = function (options) {
                    return __awaiter(this, void 0, void 0, function () {
                        var queries, promises;
                        return __generator(this, function (_a) {
                            queries = lodash_1.default.filter(options.targets, function (item) {
                                return item.hide !== true && item.insights && item.insights.nrql;
                            }).map(function (target) {
                                var item = target.insights;
                                var rangeConfig = " SINCE " + options.range.from + " UNTIL " + options.range.to + " ";
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
                                return [2];
                            }
                            promises = this.doQueries(queries);
                            return [2, this.$q.all(promises).then(function (results) {
                                    var responseParser = new InsightsResultsParser(results);
                                    return responseParser.output;
                                })];
                        });
                    });
                };
                return NewrelicInsightsDataSource;
            }());
            exports_1("NewrelicInsightsDataSource", NewrelicInsightsDataSource);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zaWdodHNEYXRhU291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGFzb3VyY2VzL0luc2lnaHRzRGF0YVNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQXlESSwrQkFBWSxPQUFjO29CQUExQixpQkE2SkM7b0JBck5NLFdBQU0sR0FBUTt3QkFDakIsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsSUFBSSxFQUFFLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLE9BQU87cUJBQ2hCLENBQUM7b0JBcURFLGdCQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFBLEdBQUc7d0JBQ2YsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQzt3QkFDMUIsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTs0QkFDckQsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dDQUN6RixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7Z0NBQ3JELElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7b0NBQ3pDLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2lDQUNwQjtnQ0FDRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO29DQUMxQixLQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxFQUFF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QUMsQ0FBQztvQ0FDMUQsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDO2dDQUNqQyxDQUFDLENBQUMsRUFBQzs7O2lCQUNOO2dCQUVMLGlDQUFDO1lBQUQsQ0FBQyxBQWhFRCxJQWdFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnNpZ2h0c1Jlc3VsdHNQYXJzZXIge1xyXG4gICAgcHVibGljIG91dHB1dDogYW55ID0ge1xyXG4gICAgICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgICAgIHJvd3M6IFtdLFxyXG4gICAgICAgIHR5cGU6ICd0YWJsZScsXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVUaW1lc2VyaWVzUmVzdWx0KG1ldGFkYXRhLCB0aW1lc2VyaWVzX2RhdGEsIHN1ZmZpeCwgdGltZXNoaWZ0KSB7XHJcbiAgICAgICAgbGV0IHRpbWVzZXJpZXNfbWV0YWRhdGEgPSBtZXRhZGF0YS50aW1lU2VyaWVzIHx8IG1ldGFkYXRhLmNvbnRlbnRzLnRpbWVTZXJpZXM7XHJcbiAgICAgICAgXy5lYWNoKHRpbWVzZXJpZXNfbWV0YWRhdGEuY29udGVudHMsIChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29udGVudCAmJiBjb250ZW50LmZ1bmN0aW9uID09PSBcInBlcmNlbnRhZ2VcIiAmJiBjb250ZW50LnNpbXBsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwZXJjZW50YWdlIHJlc3VsdHNcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IChjb250ZW50LmZ1bmN0aW9uIHx8IFwiXCIpICsgXCIgKFwiICsgY29udGVudC5vZi5mdW5jdGlvbiArIGAgb2YgJHtjb250ZW50LmZpbHRlcn0pYCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhcG9pbnRzOiB0aW1lc2VyaWVzX2RhdGEubWFwKGl0ZW0gPT4gW2l0ZW0ucmVzdWx0c1swXS5yZXN1bHQsIChpdGVtLmJlZ2luVGltZVNlY29uZHMgKiAxMDAwKSArIHRpbWVzaGlmdF0pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaChvKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ZW50ICYmIGNvbnRlbnQuZnVuY3Rpb24gPT09IFwicGVyY2VudGlsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBlcmNlbnRpbGUgcmVzdWx0c1wiKTtcclxuICAgICAgICAgICAgICAgIF8uZWFjaChjb250ZW50LnRocmVzaG9sZHMsIHRocmVzaG9sZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogKGNvbnRlbnQuYXR0cmlidXRlIHx8IFwiXCIpICsgXCIgKFwiICsgdGhyZXNob2xkICsgXCIgJSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXBvaW50czogdGltZXNlcmllc19kYXRhLm1hcChpdGVtID0+IFtpdGVtLnJlc3VsdHNbaW5kZXhdLnBlcmNlbnRpbGVzW3RocmVzaG9sZC50b1N0cmluZygpXSwgKGl0ZW0uYmVnaW5UaW1lU2Vjb25kcyAqIDEwMDApICsgdGltZXNoaWZ0XSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2gobyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb250ZW50ICYmIGNvbnRlbnQuZnVuY3Rpb24gPT09IFwiaGlzdG9ncmFtXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgVGltZXNlcmllcyBoaXN0b2dyYW1cIik7XHJcbiAgICAgICAgICAgICAgICBfLmVhY2godGltZXNlcmllc19kYXRhWzBdLnJlc3VsdHNbMF0uaGlzdG9ncmFtLCAodiwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2ICE9PSB2KSB7IHRocm93IFwiRXJyb3JcIjsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGsudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXBvaW50czogdGltZXNlcmllc19kYXRhLm1hcChpdGVtID0+IFtpdGVtLnJlc3VsdHNbaW5kZXhdLmhpc3RvZ3JhbVtrLnRvU3RyaW5nKCldLCAoaXRlbS5iZWdpblRpbWVTZWNvbmRzICogMTAwMCkgKyB0aW1lc2hpZnRdKVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaChvKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQuc3RlcHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RlcCByZXN1bHRzXCIpO1xyXG4gICAgICAgICAgICAgICAgXy5lYWNoKGNvbnRlbnQuc3RlcHMsIChzdGVwLCBzdGVwSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBzdGVwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcG9pbnRzOiB0aW1lc2VyaWVzX2RhdGEubWFwKGl0ZW0gPT4gW2l0ZW0ucmVzdWx0c1tpbmRleF0uc3RlcHNbc3RlcEluZGV4XSwgKGl0ZW0uYmVnaW5UaW1lU2Vjb25kcyAqIDEwMDApICsgdGltZXNoaWZ0XSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2gobyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVndWxhciBUaW1lc2VyaWVzXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gKChjb250ZW50LmFsaWFzIHx8IChjb250ZW50LmNvbnRlbnRzID8gKGNvbnRlbnQuY29udGVudHMuYWxpYXMgfHwgY29udGVudC5jb250ZW50cy5mdW5jdGlvbikgOiBjb250ZW50LmZ1bmN0aW9uKSkgKyAoc3VmZml4ID8gYCAoICR7c3VmZml4LnRvTG93ZXJDYXNlKCl9IClgIDogJycpKS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gY29udGVudC5jb250ZW50cyA/IChjb250ZW50LmNvbnRlbnRzLmNvbnRlbnRzID8gY29udGVudC5jb250ZW50cy5jb250ZW50cy5mdW5jdGlvbiA6IGNvbnRlbnQuY29udGVudHMuZnVuY3Rpb24pIDogKGNvbnRlbnQuYWxpYXMgfHwgY29udGVudC5mdW5jdGlvbik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFwb2ludHM6IHRpbWVzZXJpZXNfZGF0YS5tYXAoaXRlbSA9PiBbKGl0ZW0ucmVzdWx0c1tpbmRleF1ba2V5XSB8fCBpdGVtLnJlc3VsdHNbaW5kZXhdLnJlc3VsdCksIChpdGVtLmJlZ2luVGltZVNlY29uZHMgKiAxMDAwKSArIHRpbWVzaGlmdF0pXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaChvKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHJlc3VsdHM6IGFueVtdKSB7XHJcbiAgICAgICAgXy5lYWNoKHJlc3VsdHMsIHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcy5yZXN1bHQ7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEubWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnRpbWVTZXJpZXMgfHwgKHJlc3BvbnNlLmRhdGEuY3VycmVudCAmJiByZXNwb25zZS5kYXRhLmN1cnJlbnQudGltZVNlcmllcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgcmVzdWx0cyBpbiB0aW1lc2VyaWVzIGZvcm1hdGApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dHB1dC5jb2x1bW5zICYmIHRoaXMub3V0cHV0LnJvd3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEudGltZVNlcmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRpbWVzZXJpZXNSZXN1bHQocmVzcG9uc2UuZGF0YS5tZXRhZGF0YSwgcmVzcG9uc2UuZGF0YS50aW1lU2VyaWVzLCBcIlwiLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRpbWVzZXJpZXNSZXN1bHQocmVzcG9uc2UuZGF0YS5tZXRhZGF0YSwgcmVzcG9uc2UuZGF0YS5jdXJyZW50LnRpbWVTZXJpZXMsIFwiXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnByZXZpb3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVRpbWVzZXJpZXNSZXN1bHQocmVzcG9uc2UuZGF0YS5tZXRhZGF0YSwgcmVzcG9uc2UuZGF0YS5wcmV2aW91cy50aW1lU2VyaWVzLCAocmVzcG9uc2UuZGF0YS5tZXRhZGF0YS5yYXdDb21wYXJlV2l0aCB8fCBcIlByZXZpb3VzXCIpLCByZXNwb25zZS5kYXRhLm1ldGFkYXRhLmNvbXBhcmVXaXRoIHx8IDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLmZhY2V0cyAmJiByZXNwb25zZS5kYXRhLmZhY2V0c1swXSAmJiByZXNwb25zZS5kYXRhLmZhY2V0c1swXS50aW1lU2VyaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlY2VpdmVkIHJlc3VsdHMgaW4gdGFibGUgd2l0aCB0aW1lc2VyaWVzIGZvcm1hdGApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dHB1dC5jb2x1bW5zICYmIHRoaXMub3V0cHV0LnJvd3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1ldGFkYXRhID0gcmVzcG9uc2UuZGF0YS5tZXRhZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBfLmVhY2gocmVzcG9uc2UuZGF0YS5mYWNldHMsIChmYWNldCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGFkYXRhLmNvbnRlbnRzLnRpbWVTZXJpZXMuY29udGVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0gbWV0YWRhdGEuY29udGVudHMudGltZVNlcmllcy5jb250ZW50c1swXS5jb250ZW50cy5mdW5jdGlvbiB8fCBcImNvdW50XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBmYWNldC5uYW1lIHx8IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhcG9pbnRzOiBmYWNldC50aW1lU2VyaWVzLm1hcChpdGVtID0+IFtpdGVtLnJlc3VsdHNbMF1ba2V5XSwgaXRlbS5iZWdpblRpbWVTZWNvbmRzICogMTAwMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQucHVzaChvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChtZXRhZGF0YS5jb250ZW50cy50aW1lU2VyaWVzLmNvbnRlbnRzLCAoYywgY2luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IGMuc2ltcGxlID8gYy5mdW5jdGlvbiA6IChjLmNvbnRlbnRzLmZ1bmN0aW9uIHx8IFwiY291bnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gKGZhY2V0Lm5hbWUgfHwgaW5kZXgpICsgXCIgXCIgKyAoYy5hbGlhcyB8fCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhcG9pbnRzOiBmYWNldC50aW1lU2VyaWVzLm1hcChpdGVtID0+IFtpdGVtLnJlc3VsdHNbY2luZGV4XVtrZXldLCBpdGVtLmJlZ2luVGltZVNlY29uZHMgKiAxMDAwXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0LnB1c2gobyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YS5mYWNldHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxfcmVzdWx0czogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVjZWl2ZWQgcmVzdWx0cyBpbiB0YWJsZSBmb3JtYXRgKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmFjZXRzID0gcmVzLnJlc3VsdC5kYXRhLmZhY2V0cztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWV0YWRhdGEgPSByZXMucmVzdWx0LmRhdGEubWV0YWRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gbWV0YWRhdGEuZmFjZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGZhY2V0cywgZmFjZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3V0cHV0ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFt0aXRsZV0gPSBmYWNldC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2gobWV0YWRhdGEuY29udGVudHMuY29udGVudHMsIChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2NvbnRlbnQuYWxpYXMgfHwgY29udGVudC5mdW5jdGlvbl0gPSBmYWNldC5yZXN1bHRzW2luZGV4XVtjb250ZW50LnNpbXBsZSA/IGNvbnRlbnQuZnVuY3Rpb24gOiBjb250ZW50LmNvbnRlbnRzLmZ1bmN0aW9uXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsX3Jlc3VsdHMucHVzaChvdXRwdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm91dHB1dC5jb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2godG90YWxfcmVzdWx0c1swXSwgKHYsIGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0LmNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlb2YgdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfLmVhY2godG90YWxfcmVzdWx0cywgdGVtcF9yZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm93OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2godGVtcF9yZXMsICh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cucHVzaCh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaykgeyBpZiAoMSAhPT0gMSkgeyBjb25zb2xlLmxvZyhcIkRvIE5vdGhpbmdcIik7IH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQucm93cy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLm1ldGFkYXRhLmNvbnRlbnRzICYmIHJlc3BvbnNlLmRhdGEubWV0YWRhdGEuY29udGVudHNbMF0gJiYgcmVzcG9uc2UuZGF0YS5tZXRhZGF0YS5jb250ZW50c1swXS5mdW5jdGlvbiA9PT0gXCJmdW5uZWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZ1bm5lbCBUeXBlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dC5jb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5tZXRhZGF0YS5jb250ZW50c1swXS5hdHRyaWJ1dGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwidmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVvZiByZXNwb25zZS5kYXRhLnJlc3VsdHNbMF0uc3RlcHNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChyZXNwb25zZS5kYXRhLm1ldGFkYXRhLmNvbnRlbnRzWzBdLnN0ZXBzLCAoc3RlcCwgc3RlcEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dC5yb3dzLnB1c2goW3N0ZXAsIHJlc3BvbnNlLmRhdGEucmVzdWx0c1swXS5zdGVwc1tzdGVwSW5kZXhdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YS5tZXRhZGF0YS5jb250ZW50cyAmJiByZXNwb25zZS5kYXRhLm1ldGFkYXRhLmNvbnRlbnRzWzBdICYmIHJlc3BvbnNlLmRhdGEubWV0YWRhdGEuY29udGVudHNbMF0uZnVuY3Rpb24gPT09IFwiZXZlbnRzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudHMgVHlwZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RhYmxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvd3M6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2gocmVzcG9uc2UuZGF0YS5yZXN1bHRzWzBdLmV2ZW50cywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJfcm93OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGV2ZW50LCAodiwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrID09PSBcInRpbWVzdGFtcFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZW9mIHZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJfcm93LnB1c2godik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2goZXZlbnQsICh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGsgIT09IFwidGltZXN0YW1wXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAoayA9PT0gXCJhcHBJZFwiKSA/IFwic3RyaW5nXCIgOiAodHlwZW9mIHYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyX3Jvdy5wdXNoKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKGN1cnJfcm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3V0cHV0LmNvbHVtbnMgPSBjb2xzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dC5yb3dzID0gcm93cztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdHMgVHlwZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RhYmxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHJlc3BvbnNlLmRhdGEubWV0YWRhdGEuY29udGVudHMsIGNvbnRlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQuY29sdW1ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQuY29sdW1ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChjb250ZW50LmNvbHVtbnMsIChjb2wpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXQuY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGNvbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVvZiByZXNwb25zZS5kYXRhLnJlc3VsdHNbMF0uZXZlbnRzWzBdW2NvbF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnQuY29uc3RhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dC5jb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjb250ZW50LmFsaWFzIHx8IFwiY29uc3RhbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHJlc3BvbnNlLmRhdGEucmVzdWx0c1swXS5ldmVudHMsIHJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbzogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChyZXNwb25zZS5kYXRhLm1ldGFkYXRhLmNvbnRlbnRzWzBdLmNvbHVtbnMsIChjb2wpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLnB1c2gocm93W2NvbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dC5yb3dzLnB1c2gobyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQG5nSW5qZWN0ICovXHJcbmV4cG9ydCBjbGFzcyBOZXdyZWxpY0luc2lnaHRzRGF0YVNvdXJjZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZztcclxuICAgIHByaXZhdGUgaW5zaWdodHNBY2NvdW50SUQ6IHN0cmluZztcclxuXHJcbiAgICAvKiogQG5nSW5qZWN0ICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc3RhbmNlU2V0dGluZ3M6IGFueSwgcHJpdmF0ZSBiYWNrZW5kU3J2LCBwcml2YXRlICRxKSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLmluc3RhbmNlU2V0dGluZ3MudXJsICsgXCIvaW5zaWdodHNcIjtcclxuICAgICAgICB0aGlzLmluc2lnaHRzQWNjb3VudElEID0gdGhpcy5pbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLmluc2lnaHRzQWNjb3VudElEO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZG9JbnNpZ2h0c1JlcXVlc3Qob3B0aW9uczogYW55LCBtYXhSZXRyaWVzID0gMSkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5X3BhcmFtcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihrID0+IFtcIm5ycWxcIl0uaW5kZXhPZihrKSA+IC0xKS5tYXAoayA9PiBgJHtrfT0ke2VuY29kZVVSSShvcHRpb25zW2tdKX1gKS5qb2luKCcmJyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFja2VuZFNydlxyXG4gICAgICAgICAgICAuZGF0YXNvdXJjZVJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyBgLyR7dGhpcy5pbnNpZ2h0c0FjY291bnRJRH0vcXVlcnk/JHtxdWVyeV9wYXJhbXN9YFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtYXhSZXRyaWVzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRvSW5zaWdodHNSZXF1ZXN0KG9wdGlvbnMsIG1heFJldHJpZXMgLSAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvUXVlcmllcyhxdWVyaWVzOiBhbnlbXSkge1xyXG4gICAgICAgIHJldHVybiBfLm1hcChxdWVyaWVzLCBxdWVyeSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvSW5zaWdodHNSZXF1ZXN0KHF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0LCBxdWVyeSB9O1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IHsgZXJyb3IsIHF1ZXJ5IH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgcXVlcnkob3B0aW9uczogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcXVlcmllczogYW55W10gPSBfLmZpbHRlcihvcHRpb25zLnRhcmdldHMsIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5oaWRlICE9PSB0cnVlICYmIGl0ZW0uaW5zaWdodHMgJiYgaXRlbS5pbnNpZ2h0cy5ucnFsO1xyXG4gICAgICAgIH0pLm1hcCgodGFyZ2V0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbTogYW55ID0gdGFyZ2V0Lmluc2lnaHRzO1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZUNvbmZpZyA9IGAgU0lOQ0UgJHtvcHRpb25zLnJhbmdlLmZyb219IFVOVElMICR7b3B0aW9ucy5yYW5nZS50b30gYDtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLm5ycWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnIHNpbmNlICcpICYmICFpdGVtLm5ycWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnIHVudGlsICcpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5ycWwgKz0gJyAnICsgcmFuZ2VDb25maWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0ucmVzdWx0Rm9ybWF0ICE9PSBcInRhYmxlXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXRlbS5ucnFsLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJ3RpbWVzZXJpZXMnKSAmJiAhaXRlbS5ucnFsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJyB0aW1lc2VyaWVzICcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5ucnFsICs9ICcgdGltZXNlcmllcyBhdXRvICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFxdWVyaWVzIHx8IHF1ZXJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSB0aGlzLmRvUXVlcmllcyhxdWVyaWVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcS5hbGwocHJvbWlzZXMpLnRoZW4ocmVzdWx0cyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUGFyc2VyID0gbmV3IEluc2lnaHRzUmVzdWx0c1BhcnNlcihyZXN1bHRzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlUGFyc2VyLm91dHB1dDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19