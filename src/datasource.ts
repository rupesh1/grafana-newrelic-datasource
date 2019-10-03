import { cloneDeep, flatten, filter } from 'lodash';
import { NewrelicInsightsDataSource } from './datasources/insights/InsightsDataSource';

export class Datasource {
  private insightsDataSource: NewrelicInsightsDataSource;

  /** @ngInject */
  constructor(private instanceSettings: any, private backendSrv: any, private $q: any) {
    this.insightsDataSource = new NewrelicInsightsDataSource(this.instanceSettings, this.backendSrv, this.$q);
  }

  query(options: any) {
    const promises: any[] = [];
    const insightsOptions = cloneDeep(options);
    insightsOptions.targets = filter(insightsOptions.targets, ['queryType', 'insights']);
    if (insightsOptions.targets.length > 0) {
      const insightsPromise = this.insightsDataSource.query(insightsOptions);
      if (insightsPromise) {
        promises.push(insightsPromise);
      }
    }
    return Promise.all(promises).then(results => {
      return { data: flatten(results) };
    });
  }

  testDatasource() {
    return new Promise((resolve, reject) => {
      try {
        this.insightsDataSource
          .query({
            range: {
              from: '',
              to: '',
            },
            targets: [
              {
                insights: {
                  nrql: `SELECT 1 FROM Mobile SINCE TODAY`,
                  resultFormat: `table`,
                },
              },
            ],
          })
          .then((result: any) => {
            if (result) {
              resolve({ message: 'Successfully Queried from Newrelic', status: 'success' });
            } else {
              reject({ message: 'Failed to Connect', status: 'error' });
            }
          })
          .catch((ex: any) => {
            console.log(ex);
            reject({ message: 'Failed to Connect', status: 'error' });
          });
      } catch (error) {
        console.log(error);
        reject({ message: 'Failed to Connect', status: 'error' });
      }
    });
  }

  metricFindQuery(query: string) {
    if (!query) {
      return Promise.resolve([]);
    }
    return Promise.resolve([]);
  }
}
