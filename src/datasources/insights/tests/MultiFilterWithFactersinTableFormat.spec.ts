import { ctx, getInsightsQueryOptions, CONFIG } from './index';

const query = `
  SELECT
    filter(count(*), where httpResponseCode = 500) as '500',
    filter(count(*), where httpResponseCode = 501) as '501',
    filter(count(*), where httpResponseCode = 502) as '502',
    filter(count(*), where httpResponseCode = 503) as '503',
    filter(count(*), where httpResponseCode = 504) as '504'
  from
    AjaxRequest
  where
    (appName like '%-prod%' or appName like '%-Prod%') and httpResponseCode >= 500
  facet
    appName
`;

const response: any = {
  facets: [
    { name: 'app.commerce.checkout.web-prod', results: [{ count: 305 }, { count: 0 }, { count: 2 }, { count: 1650 }, { count: 5 }] },
    { name: 'app.customer.account.web.ui-production', results: [{ count: 274 }, { count: 0 }, { count: 0 }, { count: 1 }, { count: 0 }] },
    { name: 'app.commerce.bag.web-production', results: [{ count: 7 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }] },
    { name: 'app.browse.product.web-production', results: [{ count: 4 }, { count: 0 }, { count: 0 }, { count: 43 }, { count: 0 }] },
  ],
  totalResult: { results: [{ count: 590 }, { count: 0 }, { count: 2 }, { count: 1694 }, { count: 5 }] },
  unknownGroup: { results: [{ count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }] },
  performanceStats: { inspectedCount: 33166878, omittedCount: 0, matchCount: 2291, wallClockTime: 287 },
  metadata: {
    eventTypes: ['AjaxRequest'],
    eventType: 'AjaxRequest',
    openEnded: false,
    beginTime: '2019-10-06T13:19:14Z',
    endTime: '2019-10-07T13:19:14Z',
    beginTimeMillis: 1570367954894,
    endTimeMillis: 1570454354894,
    rawSince: '1570367954894',
    rawUntil: '1570454354894',
    rawCompareWith: '',
    guid: CONFIG.dummy_guid,
    routerGuid: CONFIG.dummy_guid,
    messages: [],
    facet: 'appName',
    offset: 0,
    limit: 10,
    contents: {
      messages: [],
      contents: [
        {
          function: 'alias',
          alias: '500',
          contents: { function: 'filter', alias: 'httpResponseCode = 500', contents: { function: 'count', simple: true } },
        },
        {
          function: 'alias',
          alias: '501',
          contents: { function: 'filter', alias: 'httpResponseCode = 501', contents: { function: 'count', simple: true } },
        },
        {
          function: 'alias',
          alias: '502',
          contents: { function: 'filter', alias: 'httpResponseCode = 502', contents: { function: 'count', simple: true } },
        },
        {
          function: 'alias',
          alias: '503',
          contents: { function: 'filter', alias: 'httpResponseCode = 503', contents: { function: 'count', simple: true } },
        },
        {
          function: 'alias',
          alias: '504',
          contents: { function: 'filter', alias: 'httpResponseCode = 504', contents: { function: 'count', simple: true } },
        },
      ],
    },
  },
};

describe('Query with UniqueCount and Table format', () => {
  beforeEach(() => {
    ctx.backendSrv.datasourceRequest = () => {
      return ctx.$q.when({ data: response, status: 200 });
    };
  });
  it('Basic  Check', () => {
    return ctx.ds.query(getInsightsQueryOptions([query], 'table')).then((results: any) => {
      expect(typeof results).toBe('object');
      expect(results.type).toBe('table');
      expect(typeof results.columns).toBe('object');
      expect(typeof results.rows).toBe('object');
      expect(results.columns.length).toBe(6);
      expect(typeof results.columns[0]).toBe('object');
      expect(results.columns[0].type).toBe('number');
      expect(results.columns[0].text).toBe('500');
      expect(results.columns[1].type).toBe('number');
      expect(results.columns[1].text).toBe('501');
      expect(results.rows.length).toBe(response.facets.length);
      expect(results.rows[0].length).toBe(6);
      expect(results.rows[0][0]).toBe(305);
      expect(results.rows[0][1]).toBe(0);
    });
  });
});
