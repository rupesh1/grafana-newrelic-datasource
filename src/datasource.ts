import * as _ from 'lodash';
import { NewrelicInsightsDataSource } from './datasources/InsightsDataSource';

export class Datasource {
  private insightsDataSource: NewrelicInsightsDataSource;

  /** @ngInject */
  constructor(private instanceSettings: any, private backendSrv: any, private $q: any) {
    this.insightsDataSource = new NewrelicInsightsDataSource(this.instanceSettings, this.backendSrv, this.$q);
  }

  public query(options: any) {
    const promises: any[] = [];
    const insightsOptions = _.cloneDeep(options);
    insightsOptions.targets = _.filter(insightsOptions.targets, ['queryType', 'insights']);
    if (insightsOptions.targets.length > 0) {
      const insightsPromise = this.insightsDataSource.query(insightsOptions);
      if (insightsPromise) {
        promises.push(insightsPromise);
      }
    }
    return Promise.all(promises).then(results => {
      return { data: _.flatten(results) };
    });
  }

  public testDatasource() {
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
          .then(result => {
            if (result) {
              resolve({ message: 'Successfully Queried from Newrelic', status: 'success' });
            } else {
              reject({ message: 'Failed to Connect', status: 'error' });
            }
          })
          .catch(ex => {
            console.log(ex);
            reject({ message: 'Failed to Connect', status: 'error' });
          });
      } catch (error) {
        console.log(error);
        reject({ message: 'Failed to Connect', status: 'error' });
      }
    });
  }

  public metricFindQuery(query: string) {
    if (!query) {
      return Promise.resolve([]);
    }
    return Promise.resolve([]);
  }
}
