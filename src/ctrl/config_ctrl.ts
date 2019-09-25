///<reference path="../../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import _ from 'lodash';

export class NewRelicConfigCtrl {

    public static templateUrl = 'partials/config.html';
    public current: any;

    /** @ngInject **/
    constructor() {
        if (this.current.id) {
            this.current.url = '/api/datasources/proxy/' + this.current.id;
        }
    }

}
