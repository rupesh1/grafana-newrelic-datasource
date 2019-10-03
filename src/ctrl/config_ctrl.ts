export class NewRelicConfigCtrl {
  static templateUrl = 'partials/config.html';
  current: any;

  /** @ngInject */
  constructor() {
    if (this.current.id) {
      this.current.url = '/api/datasources/proxy/' + this.current.id;
    }
  }
}
