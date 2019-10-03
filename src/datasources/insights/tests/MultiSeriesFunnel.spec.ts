import { ctx, getInsightsQueryOptions, CONFIG } from './index';

const query = `
      SELECT
        funnel(
          session,
          where requestUrl like '%/api/commerce/bag/v%/%/checkout' as 'Enter Checkout',
          where requestUrl like '%/api/finance/paymentoptions/v%/paymentmethods%' as 'Payment',
          where requestUrl like '%/api/commerce/order/v%/orders/createorder%' and httpResponseCode >= 200 and httpResponseCode < 300 as 'Orders'
        )
      FROM
        AjaxRequest
      WHERE
        appId = '${CONFIG.appId}'
`;

const response: any = {
  total: {
    results: [{ steps: [1360, 1261, 718] }],
    beginTimeSeconds: 1569181443,
    endTimeSeconds: 1569182343,
    inspectedCount: 55925,
  },
  timeSeries: [
    { results: [{ steps: [112, 94, 8] }], beginTimeSeconds: 1569181443, endTimeSeconds: 1569181503, inspectedCount: 3597 },
    { results: [{ steps: [112, 84, 5] }], beginTimeSeconds: 1569181503, endTimeSeconds: 1569181563, inspectedCount: 3860 },
    { results: [{ steps: [113, 92, 4] }], beginTimeSeconds: 1569181563, endTimeSeconds: 1569181623, inspectedCount: 4205 },
    { results: [{ steps: [109, 84, 7] }], beginTimeSeconds: 1569181623, endTimeSeconds: 1569181683, inspectedCount: 3506 },
    { results: [{ steps: [133, 104, 6] }], beginTimeSeconds: 1569181683, endTimeSeconds: 1569181743, inspectedCount: 3622 },
    { results: [{ steps: [108, 89, 5] }], beginTimeSeconds: 1569181743, endTimeSeconds: 1569181803, inspectedCount: 3524 },
    { results: [{ steps: [104, 80, 4] }], beginTimeSeconds: 1569181803, endTimeSeconds: 1569181863, inspectedCount: 3602 },
    { results: [{ steps: [120, 102, 5] }], beginTimeSeconds: 1569181863, endTimeSeconds: 1569181923, inspectedCount: 3611 },
    { results: [{ steps: [108, 90, 9] }], beginTimeSeconds: 1569181923, endTimeSeconds: 1569181983, inspectedCount: 3471 },
    { results: [{ steps: [106, 89, 5] }], beginTimeSeconds: 1569181983, endTimeSeconds: 1569182043, inspectedCount: 3706 },
    { results: [{ steps: [122, 93, 6] }], beginTimeSeconds: 1569182043, endTimeSeconds: 1569182103, inspectedCount: 4024 },
    { results: [{ steps: [113, 88, 6] }], beginTimeSeconds: 1569182103, endTimeSeconds: 1569182163, inspectedCount: 4008 },
    { results: [{ steps: [116, 89, 8] }], beginTimeSeconds: 1569182163, endTimeSeconds: 1569182223, inspectedCount: 3821 },
    { results: [{ steps: [105, 77, 7] }], beginTimeSeconds: 1569182223, endTimeSeconds: 1569182283, inspectedCount: 3776 },
    { results: [{ steps: [95, 81, 3] }], beginTimeSeconds: 1569182283, endTimeSeconds: 1569182343, inspectedCount: 3592 },
  ],
  performanceStats: {
    inspectedCount: 1071506,
    omittedCount: 0,
    matchCount: 55925,
    wallClockTime: 74,
  },
  metadata: {
    eventTypes: ['AjaxRequest'],
    eventType: 'AjaxRequest',
    openEnded: false,
    beginTime: '2019-09-22T19:44:03Z',
    endTime: '2019-09-22T19:59:03Z',
    beginTimeMillis: 1569181443718,
    endTimeMillis: 1569182343718,
    rawSince: '1569181443718',
    rawUntil: '1569182343718',
    rawCompareWith: '',
    bucketSizeMillis: 60000,
    guid: CONFIG.dummy_guid,
    routerGuid: CONFIG.dummy_guid,
    messages: [],
    timeSeries: {
      messages: [],
      contents: [{ function: 'funnel', attribute: 'session', steps: ['Enter Checkout', 'Payment', 'Orders'] }],
    },
  },
};

describe('Query with multiple series Funnel', () => {
  beforeEach(() => {
    ctx.backendSrv.datasourceRequest = () => {
      return ctx.$q.when({ data: response, status: 200 });
    };
  });
  it('Basic Timeseries Check', () => {
    return ctx.ds.query(getInsightsQueryOptions([query], 'timeseries')).then((results: any) => {
      expect(typeof results).toBe('object');
    });
  });
});
