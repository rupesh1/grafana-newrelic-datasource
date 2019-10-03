import _ from 'lodash';
import { QueryCtrl } from 'grafana/app/plugins/sdk';

export class NewRelicQueryCtrl extends QueryCtrl {
  public static templateUrl = 'partials/query.editor.html';
  public supported_services = [{ text: 'Insights API', value: 'insights' }];
  public supported_formats = {
    insights: [{ text: 'Time Series', value: 'timeseries' }, { text: 'Table', value: 'table' }],
  };
  public defaults = {
    queryType: 'insights',
    insights: {
      nrql: '',
      resultFormat: 'timeseries',
    },
  };

  /** @ngInject */
  constructor($scope: any, $injector: any) {
    super($scope, $injector);
    _.defaultsDeep(this.target, this.defaults);
  }
}
