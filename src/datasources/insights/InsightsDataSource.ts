import { InsightsResultsParser } from './InsightsResultsParser';

/** @ngInject */
export class NewrelicInsightsDataSource {
  private url: string;
  private insightsAccountID: string;

  /** @ngInject */
  constructor(private instanceSettings: any, private backendSrv: any, private templateSrv: any, private $q: any) {
    this.url = this.instanceSettings.url + '/insights';
    this.insightsAccountID = this.instanceSettings.jsonData.insightsAccountID;
  }

  private doInsightsRequest(options: any, maxRetries = 1) {
    const queryParams = Object.keys(options)
      .filter(k => ['nrql'].indexOf(k) > -1)
      .map(k => `${k}=${encodeURIComponent(options[k])}`)
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
    return queries.map((query: any) => {
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
    const queries: any[] = options.targets
      .filter((item: any) => {
        return item.hide !== true && item.insights && item.insights.nrql;
      })
      .map((target: any) => {
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
        item.nrql = this.templateSrv.replace(item.nrql, options.scopedVars);
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

  metricFindQuery(query: string) {
    if (query.startsWith(`Insights(`) && query.endsWith(`)`)) {
      const insightsQuery = query.replace(`Insights(`, ``).slice(0, -1);
      const queryOption = {
        nrql: this.templateSrv.replace(insightsQuery),
        format: 'table',
      };
      const promises = this.doQueries([queryOption]);
      return this.$q.all(promises).then((results: any) => {
        const responseParser = new InsightsResultsParser(results);
        return responseParser.getResultsAsVariablesList();
      });
    }
    return undefined;
  }
}
