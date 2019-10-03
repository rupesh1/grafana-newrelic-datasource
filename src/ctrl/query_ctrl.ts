import { defaultsDeep } from 'lodash';
import { QueryCtrl } from 'grafana/app/plugins/sdk';

// @ts-ignore
export class NewRelicQueryCtrl extends QueryCtrl {
  static templateUrl = 'partials/query.editor.html';
  supportedServices = [{ text: 'Insights API', value: 'insights' }];
  supportedFormats = {
    insights: [{ text: 'Time Series', value: 'timeseries' }, { text: 'Table', value: 'table' }],
  };
  defaults = {
    queryType: 'insights',
    insights: {
      nrql: '',
      resultFormat: 'timeseries',
    },
  };

  /** @ngInject */
  constructor($scope: any, $injector: any) {
    super($scope, $injector);
    defaultsDeep(this.target, this.defaults);
  }
}
