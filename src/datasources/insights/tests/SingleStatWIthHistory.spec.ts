import { ctx, getInsightsQueryOptions, CONFIG } from './index';

const query = `
    SELECT count(*)
    from AjaxRequest
    where appName = 'app.something.checkout.web-prod' and
        requestUrl like '%/api/commerce/bag/v%/bags/%/coupons%' and
        httpMethod = 'GET' and
        httpResponseCode = 200
    COMPARE WITH 1 day ago
`;

const response: any = {
  current: {
    results: [
      {
        count: 5857,
      },
    ],
  },
  previous: {
    results: [
      {
        count: 6856,
      },
    ],
  },
  performanceStats: {
    inspectedCount: 14602703,
    omittedCount: 0,
    matchCount: 12713,
    wallClockTime: 102,
  },
  metadata: {
    eventTypes: ['AjaxRequest'],
    eventType: 'AjaxRequest',
    openEnded: false,
    beginTime: '2019-10-08T03:30:36Z',
    endTime: '2019-10-08T09:30:36Z',
    beginTimeMillis: 1570505436310,
    endTimeMillis: 1570527036311,
    rawSince: '1570505436310',
    rawUntil: '1570527036311',
    rawCompareWith: '1 DAYS AGO',
    guid: CONFIG.dummy_guid,
    routerGuid: CONFIG.dummy_guid,
    messages: [],
    compareWith: 86400000,
    contents: {
      messages: [],
      contents: [
        {
          function: 'count',
          simple: true,
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
  it('Basic Check', () => {
    return ctx.ds.query(getInsightsQueryOptions([query], 'table')).then((results: any) => {
      expect(typeof results).toBe('object');
      expect(results.type).toBe('table');
      expect(typeof results.columns).toBe('object');
      expect(typeof results.rows).toBe('object');
      expect(results.columns.length).toBe(2);
      expect(typeof results.columns[0]).toBe('object');
      expect(results.columns[0].type).toBe('string');
      expect(results.columns[0].text).toBe('stat');
      expect(results.rows.length).toBe(2);
      expect(results.rows[0].length).toBe(2);
      expect(results.rows[0][0]).toBe('Current');
      expect(results.rows[0][1]).toBe(5857);
      expect(results.rows[1][0]).toBe('1 DAYS AGO');
      expect(results.rows[1][1]).toBe(6856);
    });
  });
});
