// @ts-ignore
import Q from 'q';
import { NewrelicInsightsDataSource } from './InsightsDataSource';

const ctx: any = {
  backendSrv: {},
  $q: Q,
  instanceSettings: {
    jsonData: {
      insightsAccountID: '111111',
    },
  },
};
ctx.ds = new NewrelicInsightsDataSource(ctx.instanceSettings, ctx.backendSrv, ctx.$q);
const getInsightsQueryOptions = (queries: string[], resultFormat: string) => {
  const o: any = {
    range: {
      from: '',
      to: '',
    },
    targets: [],
  };
  queries.forEach(query => {
    o.targets.push({
      insights: {
        nrql: query,
        resultFormat: resultFormat || 'timeseries',
      },
    });
  });
  return o;
};

describe('Query with single series', () => {
  const query = `SELECT count(*) as 'Number of orders' from MobileEvent where EventName = 'CreateOrder' TIMESERIES`;
  const response: any = {
    total: { results: [{ count: 347 }], beginTimeSeconds: 1569087221, endTimeSeconds: 1569087521, inspectedCount: 347 },
    timeSeries: [
      { results: [{ count: 11 }], beginTimeSeconds: 1569087221, endTimeSeconds: 1569087231, inspectedCount: 11 },
      { results: [{ count: 15 }], beginTimeSeconds: 1569087231, endTimeSeconds: 1569087241, inspectedCount: 15 },
      { results: [{ count: 15 }], beginTimeSeconds: 1569087241, endTimeSeconds: 1569087251, inspectedCount: 15 },
      { results: [{ count: 19 }], beginTimeSeconds: 1569087251, endTimeSeconds: 1569087261, inspectedCount: 19 },
      { results: [{ count: 18 }], beginTimeSeconds: 1569087261, endTimeSeconds: 1569087271, inspectedCount: 18 },
      { results: [{ count: 12 }], beginTimeSeconds: 1569087271, endTimeSeconds: 1569087281, inspectedCount: 12 },
      { results: [{ count: 12 }], beginTimeSeconds: 1569087281, endTimeSeconds: 1569087291, inspectedCount: 12 },
      { results: [{ count: 14 }], beginTimeSeconds: 1569087291, endTimeSeconds: 1569087301, inspectedCount: 14 },
      { results: [{ count: 15 }], beginTimeSeconds: 1569087301, endTimeSeconds: 1569087311, inspectedCount: 15 },
      { results: [{ count: 8 }], beginTimeSeconds: 1569087311, endTimeSeconds: 1569087321, inspectedCount: 8 },
      { results: [{ count: 14 }], beginTimeSeconds: 1569087321, endTimeSeconds: 1569087331, inspectedCount: 14 },
      { results: [{ count: 13 }], beginTimeSeconds: 1569087331, endTimeSeconds: 1569087341, inspectedCount: 13 },
      { results: [{ count: 12 }], beginTimeSeconds: 1569087341, endTimeSeconds: 1569087351, inspectedCount: 12 },
      { results: [{ count: 19 }], beginTimeSeconds: 1569087351, endTimeSeconds: 1569087361, inspectedCount: 19 },
      { results: [{ count: 13 }], beginTimeSeconds: 1569087361, endTimeSeconds: 1569087371, inspectedCount: 13 },
      { results: [{ count: 12 }], beginTimeSeconds: 1569087371, endTimeSeconds: 1569087381, inspectedCount: 12 },
      { results: [{ count: 11 }], beginTimeSeconds: 1569087381, endTimeSeconds: 1569087391, inspectedCount: 11 },
      { results: [{ count: 11 }], beginTimeSeconds: 1569087391, endTimeSeconds: 1569087401, inspectedCount: 11 },
      { results: [{ count: 10 }], beginTimeSeconds: 1569087401, endTimeSeconds: 1569087411, inspectedCount: 10 },
      { results: [{ count: 12 }], beginTimeSeconds: 1569087411, endTimeSeconds: 1569087421, inspectedCount: 12 },
      { results: [{ count: 11 }], beginTimeSeconds: 1569087421, endTimeSeconds: 1569087431, inspectedCount: 11 },
      { results: [{ count: 10 }], beginTimeSeconds: 1569087431, endTimeSeconds: 1569087441, inspectedCount: 10 },
      { results: [{ count: 12 }], beginTimeSeconds: 1569087441, endTimeSeconds: 1569087451, inspectedCount: 12 },
      { results: [{ count: 7 }], beginTimeSeconds: 1569087451, endTimeSeconds: 1569087461, inspectedCount: 7 },
      { results: [{ count: 14 }], beginTimeSeconds: 1569087461, endTimeSeconds: 1569087471, inspectedCount: 14 },
      { results: [{ count: 6 }], beginTimeSeconds: 1569087471, endTimeSeconds: 1569087481, inspectedCount: 6 },
      { results: [{ count: 6 }], beginTimeSeconds: 1569087481, endTimeSeconds: 1569087491, inspectedCount: 6 },
      { results: [{ count: 9 }], beginTimeSeconds: 1569087491, endTimeSeconds: 1569087501, inspectedCount: 9 },
      { results: [{ count: 4 }], beginTimeSeconds: 1569087501, endTimeSeconds: 1569087511, inspectedCount: 4 },
      { results: [{ count: 2 }], beginTimeSeconds: 1569087511, endTimeSeconds: 1569087521, inspectedCount: 2 },
    ],
    performanceStats: { inspectedCount: 69858, omittedCount: 0, matchCount: 347, wallClockTime: 43 },
    metadata: {
      eventTypes: ['MobileEvent'],
      eventType: 'MobileEvent',
      openEnded: false,
      beginTime: '2019-09-21T17:33:41Z',
      endTime: '2019-09-21T17:38:41Z',
      beginTimeMillis: 1569087221457,
      endTimeMillis: 1569087521457,
      rawSince: '1569087221457',
      rawUntil: '1569087521457',
      rawCompareWith: '',
      bucketSizeMillis: 10000,
      guid: '11111111-1111-1111-1111-11111111',
      routerGuid: '11111111-1111-1111-1111-1111',
      messages: [],
      timeSeries: {
        messages: [],
        contents: [{ function: 'alias', alias: 'Number of orders', contents: { function: 'count', simple: true } }],
      },
    },
  };
  beforeEach(() => {
    ctx.backendSrv.datasourceRequest = () => {
      return ctx.$q.when({ data: response, status: 200 });
    };
  });
  it('Basic Timeseries Check', () => {
    return ctx.ds.query(getInsightsQueryOptions([query], 'timeseries')).then((results: any) => {
      expect(typeof results).toBe('object');
      expect(results.length).toBe(1);
      expect(typeof results[0].target).toBe('string');
      expect(results[0].target).toBe('Number of orders');
      expect(typeof results[0].datapoints).toBe('object');
      expect(results[0].datapoints.length).toBe(response.timeSeries.length);
      expect(results[0].datapoints[0].length).toBe(2);
      expect(results[0].datapoints[0][0]).toBe(response.timeSeries[0].results[0].count);
      expect(results[0].datapoints[0][1]).toBe(response.timeSeries[0].beginTimeSeconds * 1000);
      expect(results[0].datapoints[results[0].datapoints.length - 1][0]).toBe(2);
      expect(results[0].datapoints[results[0].datapoints.length - 1][1]).toBe(
        response.timeSeries[response.timeSeries.length - 1].beginTimeSeconds * 1000
      );
    });
  });
});
describe('Query with multiple series', () => {
  const query = `
        SELECT
          filter(count(*), where requestUrl like '%/api/commerce/bag/v%') as 'Bag API',
          filter(count(*), where requestUrl like '%/api/customer/v%') as 'Customer Profile API',
          filter(count(*), where requestUrl like '%/commerce/voucher/v%') as 'Voucher API',
          filter(count(*), where requestUrl like '%/api/commerce/order/v%') as 'Orders API'
        FROM
          AjaxRequest
        WHERE
          appId = '1111111'
        TIMESERIES 10 minutes`;
  const response: any = {
    total: {
      results: [{ count: 11547 }, { count: 0 }, { count: 0 }, { count: 1908 }],
      beginTimeSeconds: 1569101498,
      endTimeSeconds: 1569103298,
      inspectedCount: 61238,
    },
    timeSeries: [
      {
        results: [{ count: 3786 }, { count: 0 }, { count: 0 }, { count: 645 }],
        beginTimeSeconds: 1569101498,
        endTimeSeconds: 1569102098,
        inspectedCount: 20085,
      },
      {
        results: [{ count: 4052 }, { count: 0 }, { count: 0 }, { count: 652 }],
        beginTimeSeconds: 1569102098,
        endTimeSeconds: 1569102698,
        inspectedCount: 21137,
      },
      {
        results: [{ count: 3709 }, { count: 0 }, { count: 0 }, { count: 611 }],
        beginTimeSeconds: 1569102698,
        endTimeSeconds: 1569103298,
        inspectedCount: 20016,
      },
    ],
    performanceStats: {
      inspectedCount: 1341673,
      omittedCount: 0,
      matchCount: 61238,
      wallClockTime: 87,
    },
    metadata: {
      eventTypes: ['AjaxRequest'],
      eventType: 'AjaxRequest',
      openEnded: false,
      beginTime: '2019-09-21T21:31:38Z',
      endTime: '2019-09-21T22:01:38Z',
      beginTimeMillis: 1569101498656,
      endTimeMillis: 1569103298656,
      rawSince: '1569101498656',
      rawUntil: '1569103298656',
      rawCompareWith: '',
      bucketSizeMillis: 600000,
      guid: '11111111-1111-1111-1111-11111111',
      routerGuid: '11111111-1111-1111-1111-11111111',
      messages: [],
      timeSeries: {
        messages: [],
        contents: [
          {
            function: 'alias',
            alias: 'Bag API',
            contents: { function: 'filter', alias: "requestUrl LIKE '%/api/commerce/bag/v%'", contents: { function: 'count', simple: true } },
          },
          {
            function: 'alias',
            alias: 'Customer Profile API',
            contents: { function: 'filter', alias: "requestUrl LIKE '%/api/customer/v%'", contents: { function: 'count', simple: true } },
          },
          {
            function: 'alias',
            alias: 'Voucher API',
            contents: { function: 'filter', alias: "requestUrl LIKE '%/commerce/voucher/v%'", contents: { function: 'count', simple: true } },
          },
          {
            function: 'alias',
            alias: 'Orders API',
            contents: { function: 'filter', alias: "requestUrl LIKE '%/api/commerce/order/v%'", contents: { function: 'count', simple: true } },
          },
        ],
      },
    },
  };
  beforeEach(() => {
    ctx.backendSrv.datasourceRequest = () => {
      return ctx.$q.when({ data: response, status: 200 });
    };
  });
  it('Basic Timeseries Check', () => {
    return ctx.ds.query(getInsightsQueryOptions([query], 'timeseries')).then((results: any) => {
      expect(typeof results).toBe('object');
      expect(results.length).toBe(4);
      expect(typeof results[0].target).toBe('string');
      expect(results[0].target).toBe('Bag API');
      expect(typeof results[0].datapoints).toBe('object');
      expect(results[0].datapoints.length).toBe(response.timeSeries.length);
      expect(results[0].datapoints[0].length).toBe(2);
      expect(results[0].datapoints[0][0]).toBe(response.timeSeries[0].results[0].count);
      expect(results[0].datapoints[0][1]).toBe(response.timeSeries[0].beginTimeSeconds * 1000);
      expect(results[0].datapoints[results[0].datapoints.length - 1][0]).toBe(3709);
      expect(results[0].datapoints[results[0].datapoints.length - 1][1]).toBe(
        response.timeSeries[response.timeSeries.length - 1].beginTimeSeconds * 1000
      );
      expect(typeof results[3].target).toBe('string');
      expect(results[3].target).toBe('Orders API');
      expect(typeof results[3].datapoints).toBe('object');
      expect(results[3].datapoints.length).toBe(response.timeSeries.length);
      expect(results[3].datapoints[0].length).toBe(2);
      expect(results[3].datapoints[0][0]).toBe(response.timeSeries[0].results[3].count);
      expect(results[3].datapoints[0][1]).toBe(response.timeSeries[0].beginTimeSeconds * 1000);
      expect(results[3].datapoints[results[0].datapoints.length - 1][0]).toBe(611);
      expect(results[3].datapoints[results[0].datapoints.length - 1][1]).toBe(
        response.timeSeries[response.timeSeries.length - 1].beginTimeSeconds * 1000
      );
    });
  });
});
describe('Query with multiple series Funnel', () => {
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
      appId = '111111'`;
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
      guid: '11111111-1111-1111-1111-11111111',
      routerGuid: '11111111-1111-1111-1111-11111111',
      messages: [],
      timeSeries: {
        messages: [],
        contents: [{ function: 'funnel', attribute: 'session', steps: ['Enter Checkout', 'Payment', 'Orders'] }],
      },
    },
  };
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
describe('Query with single series and compare with type', () => {
  const query = `
    SELECT count(*) as 'Number of orders'
    FROM MobileEvent
    WHERE EventName = 'CreateOrder'
    TIMESERIES since today
    COMPARE WITH 1 week ago
  `;
  const response: any = {
    current: {
      total: { results: [{ count: 78665 }], beginTimeSeconds: 1569024073, endTimeSeconds: 1569105073, inspectedCount: 78665 },
      timeSeries: [
        { results: [{ count: 790 }], beginTimeSeconds: 1569024073, endTimeSeconds: 1569025873, inspectedCount: 790 },
        { results: [{ count: 665 }], beginTimeSeconds: 1569025873, endTimeSeconds: 1569027673, inspectedCount: 665 },
        { results: [{ count: 594 }], beginTimeSeconds: 1569027673, endTimeSeconds: 1569029473, inspectedCount: 594 },
        { results: [{ count: 592 }], beginTimeSeconds: 1569029473, endTimeSeconds: 1569031273, inspectedCount: 592 },
        { results: [{ count: 539 }], beginTimeSeconds: 1569031273, endTimeSeconds: 1569033073, inspectedCount: 539 },
        { results: [{ count: 477 }], beginTimeSeconds: 1569033073, endTimeSeconds: 1569034873, inspectedCount: 477 },
        { results: [{ count: 472 }], beginTimeSeconds: 1569034873, endTimeSeconds: 1569036673, inspectedCount: 472 },
        { results: [{ count: 521 }], beginTimeSeconds: 1569036673, endTimeSeconds: 1569038473, inspectedCount: 521 },
        { results: [{ count: 520 }], beginTimeSeconds: 1569038473, endTimeSeconds: 1569040273, inspectedCount: 520 },
        { results: [{ count: 566 }], beginTimeSeconds: 1569040273, endTimeSeconds: 1569042073, inspectedCount: 566 },
        { results: [{ count: 635 }], beginTimeSeconds: 1569042073, endTimeSeconds: 1569043873, inspectedCount: 635 },
        { results: [{ count: 936 }], beginTimeSeconds: 1569043873, endTimeSeconds: 1569045673, inspectedCount: 936 },
        { results: [{ count: 1176 }], beginTimeSeconds: 1569045673, endTimeSeconds: 1569047473, inspectedCount: 1176 },
        { results: [{ count: 1486 }], beginTimeSeconds: 1569047473, endTimeSeconds: 1569049273, inspectedCount: 1486 },
        { results: [{ count: 1614 }], beginTimeSeconds: 1569049273, endTimeSeconds: 1569051073, inspectedCount: 1614 },
        { results: [{ count: 1692 }], beginTimeSeconds: 1569051073, endTimeSeconds: 1569052873, inspectedCount: 1692 },
        { results: [{ count: 1897 }], beginTimeSeconds: 1569052873, endTimeSeconds: 1569054673, inspectedCount: 1897 },
        { results: [{ count: 2092 }], beginTimeSeconds: 1569054673, endTimeSeconds: 1569056473, inspectedCount: 2092 },
        { results: [{ count: 2066 }], beginTimeSeconds: 1569056473, endTimeSeconds: 1569058273, inspectedCount: 2066 },
        { results: [{ count: 2114 }], beginTimeSeconds: 1569058273, endTimeSeconds: 1569060073, inspectedCount: 2114 },
        { results: [{ count: 2181 }], beginTimeSeconds: 1569060073, endTimeSeconds: 1569061873, inspectedCount: 2181 },
        { results: [{ count: 2279 }], beginTimeSeconds: 1569061873, endTimeSeconds: 1569063673, inspectedCount: 2279 },
        { results: [{ count: 2328 }], beginTimeSeconds: 1569063673, endTimeSeconds: 1569065473, inspectedCount: 2328 },
        { results: [{ count: 2288 }], beginTimeSeconds: 1569065473, endTimeSeconds: 1569067273, inspectedCount: 2288 },
        { results: [{ count: 2279 }], beginTimeSeconds: 1569067273, endTimeSeconds: 1569069073, inspectedCount: 2279 },
        { results: [{ count: 2278 }], beginTimeSeconds: 1569069073, endTimeSeconds: 1569070873, inspectedCount: 2278 },
        { results: [{ count: 2263 }], beginTimeSeconds: 1569070873, endTimeSeconds: 1569072673, inspectedCount: 2263 },
        { results: [{ count: 2179 }], beginTimeSeconds: 1569072673, endTimeSeconds: 1569074473, inspectedCount: 2179 },
        { results: [{ count: 2168 }], beginTimeSeconds: 1569074473, endTimeSeconds: 1569076273, inspectedCount: 2168 },
        { results: [{ count: 2303 }], beginTimeSeconds: 1569076273, endTimeSeconds: 1569078073, inspectedCount: 2303 },
        { results: [{ count: 2358 }], beginTimeSeconds: 1569078073, endTimeSeconds: 1569079873, inspectedCount: 2358 },
        { results: [{ count: 2335 }], beginTimeSeconds: 1569079873, endTimeSeconds: 1569081673, inspectedCount: 2335 },
        { results: [{ count: 2443 }], beginTimeSeconds: 1569081673, endTimeSeconds: 1569083473, inspectedCount: 2443 },
        { results: [{ count: 2325 }], beginTimeSeconds: 1569083473, endTimeSeconds: 1569085273, inspectedCount: 2325 },
        { results: [{ count: 2310 }], beginTimeSeconds: 1569085273, endTimeSeconds: 1569087073, inspectedCount: 2310 },
        { results: [{ count: 2368 }], beginTimeSeconds: 1569087073, endTimeSeconds: 1569088873, inspectedCount: 2368 },
        { results: [{ count: 2246 }], beginTimeSeconds: 1569088873, endTimeSeconds: 1569090673, inspectedCount: 2246 },
        { results: [{ count: 2286 }], beginTimeSeconds: 1569090673, endTimeSeconds: 1569092473, inspectedCount: 2286 },
        { results: [{ count: 2553 }], beginTimeSeconds: 1569092473, endTimeSeconds: 1569094273, inspectedCount: 2553 },
        { results: [{ count: 2507 }], beginTimeSeconds: 1569094273, endTimeSeconds: 1569096073, inspectedCount: 2507 },
        { results: [{ count: 2535 }], beginTimeSeconds: 1569096073, endTimeSeconds: 1569097873, inspectedCount: 2535 },
        { results: [{ count: 2400 }], beginTimeSeconds: 1569097873, endTimeSeconds: 1569099673, inspectedCount: 2400 },
        { results: [{ count: 2264 }], beginTimeSeconds: 1569099673, endTimeSeconds: 1569101473, inspectedCount: 2264 },
        { results: [{ count: 2087 }], beginTimeSeconds: 1569101473, endTimeSeconds: 1569103273, inspectedCount: 2087 },
        { results: [{ count: 1658 }], beginTimeSeconds: 1569103273, endTimeSeconds: 1569105073, inspectedCount: 1658 },
      ],
    },
    previous: {
      total: { results: [{ count: 83434 }], beginTimeSeconds: 1568419273, endTimeSeconds: 1568500273, inspectedCount: 83434 },
      timeSeries: [
        { results: [{ count: 826 }], beginTimeSeconds: 1568419273, endTimeSeconds: 1568421073, inspectedCount: 826 },
        { results: [{ count: 752 }], beginTimeSeconds: 1568421073, endTimeSeconds: 1568422873, inspectedCount: 752 },
        { results: [{ count: 615 }], beginTimeSeconds: 1568422873, endTimeSeconds: 1568424673, inspectedCount: 615 },
        { results: [{ count: 577 }], beginTimeSeconds: 1568424673, endTimeSeconds: 1568426473, inspectedCount: 577 },
        { results: [{ count: 516 }], beginTimeSeconds: 1568426473, endTimeSeconds: 1568428273, inspectedCount: 516 },
        { results: [{ count: 503 }], beginTimeSeconds: 1568428273, endTimeSeconds: 1568430073, inspectedCount: 503 },
        { results: [{ count: 502 }], beginTimeSeconds: 1568430073, endTimeSeconds: 1568431873, inspectedCount: 502 },
        { results: [{ count: 447 }], beginTimeSeconds: 1568431873, endTimeSeconds: 1568433673, inspectedCount: 447 },
        { results: [{ count: 552 }], beginTimeSeconds: 1568433673, endTimeSeconds: 1568435473, inspectedCount: 552 },
        { results: [{ count: 565 }], beginTimeSeconds: 1568435473, endTimeSeconds: 1568437273, inspectedCount: 565 },
        { results: [{ count: 697 }], beginTimeSeconds: 1568437273, endTimeSeconds: 1568439073, inspectedCount: 697 },
        { results: [{ count: 867 }], beginTimeSeconds: 1568439073, endTimeSeconds: 1568440873, inspectedCount: 867 },
        { results: [{ count: 1061 }], beginTimeSeconds: 1568440873, endTimeSeconds: 1568442673, inspectedCount: 1061 },
        { results: [{ count: 1322 }], beginTimeSeconds: 1568442673, endTimeSeconds: 1568444473, inspectedCount: 1322 },
        { results: [{ count: 1539 }], beginTimeSeconds: 1568444473, endTimeSeconds: 1568446273, inspectedCount: 1539 },
        { results: [{ count: 1746 }], beginTimeSeconds: 1568446273, endTimeSeconds: 1568448073, inspectedCount: 1746 },
        { results: [{ count: 1897 }], beginTimeSeconds: 1568448073, endTimeSeconds: 1568449873, inspectedCount: 1897 },
        { results: [{ count: 2117 }], beginTimeSeconds: 1568449873, endTimeSeconds: 1568451673, inspectedCount: 2117 },
        { results: [{ count: 2267 }], beginTimeSeconds: 1568451673, endTimeSeconds: 1568453473, inspectedCount: 2267 },
        { results: [{ count: 2353 }], beginTimeSeconds: 1568453473, endTimeSeconds: 1568455273, inspectedCount: 2353 },
        { results: [{ count: 2619 }], beginTimeSeconds: 1568455273, endTimeSeconds: 1568457073, inspectedCount: 2619 },
        { results: [{ count: 2536 }], beginTimeSeconds: 1568457073, endTimeSeconds: 1568458873, inspectedCount: 2536 },
        { results: [{ count: 2419 }], beginTimeSeconds: 1568458873, endTimeSeconds: 1568460673, inspectedCount: 2419 },
        { results: [{ count: 2480 }], beginTimeSeconds: 1568460673, endTimeSeconds: 1568462473, inspectedCount: 2480 },
        { results: [{ count: 2512 }], beginTimeSeconds: 1568462473, endTimeSeconds: 1568464273, inspectedCount: 2512 },
        { results: [{ count: 2532 }], beginTimeSeconds: 1568464273, endTimeSeconds: 1568466073, inspectedCount: 2532 },
        { results: [{ count: 2459 }], beginTimeSeconds: 1568466073, endTimeSeconds: 1568467873, inspectedCount: 2459 },
        { results: [{ count: 2382 }], beginTimeSeconds: 1568467873, endTimeSeconds: 1568469673, inspectedCount: 2382 },
        { results: [{ count: 2371 }], beginTimeSeconds: 1568469673, endTimeSeconds: 1568471473, inspectedCount: 2371 },
        { results: [{ count: 2372 }], beginTimeSeconds: 1568471473, endTimeSeconds: 1568473273, inspectedCount: 2372 },
        { results: [{ count: 2342 }], beginTimeSeconds: 1568473273, endTimeSeconds: 1568475073, inspectedCount: 2342 },
        { results: [{ count: 2569 }], beginTimeSeconds: 1568475073, endTimeSeconds: 1568476873, inspectedCount: 2569 },
        { results: [{ count: 2591 }], beginTimeSeconds: 1568476873, endTimeSeconds: 1568478673, inspectedCount: 2591 },
        { results: [{ count: 2599 }], beginTimeSeconds: 1568478673, endTimeSeconds: 1568480473, inspectedCount: 2599 },
        { results: [{ count: 2466 }], beginTimeSeconds: 1568480473, endTimeSeconds: 1568482273, inspectedCount: 2466 },
        { results: [{ count: 2489 }], beginTimeSeconds: 1568482273, endTimeSeconds: 1568484073, inspectedCount: 2489 },
        { results: [{ count: 2479 }], beginTimeSeconds: 1568484073, endTimeSeconds: 1568485873, inspectedCount: 2479 },
        { results: [{ count: 2520 }], beginTimeSeconds: 1568485873, endTimeSeconds: 1568487673, inspectedCount: 2520 },
        { results: [{ count: 2520 }], beginTimeSeconds: 1568487673, endTimeSeconds: 1568489473, inspectedCount: 2520 },
        { results: [{ count: 2677 }], beginTimeSeconds: 1568489473, endTimeSeconds: 1568491273, inspectedCount: 2677 },
        { results: [{ count: 2591 }], beginTimeSeconds: 1568491273, endTimeSeconds: 1568493073, inspectedCount: 2591 },
        { results: [{ count: 2754 }], beginTimeSeconds: 1568493073, endTimeSeconds: 1568494873, inspectedCount: 2754 },
        { results: [{ count: 2503 }], beginTimeSeconds: 1568494873, endTimeSeconds: 1568496673, inspectedCount: 2503 },
        { results: [{ count: 2188 }], beginTimeSeconds: 1568496673, endTimeSeconds: 1568498473, inspectedCount: 2188 },
        { results: [{ count: 1743 }], beginTimeSeconds: 1568498473, endTimeSeconds: 1568500273, inspectedCount: 1743 },
      ],
    },
    performanceStats: { inspectedCount: 1218966, omittedCount: 0, matchCount: 162099, wallClockTime: 141 },
    metadata: {
      eventTypes: ['MobileEvent'],
      eventType: 'MobileEvent',
      openEnded: true,
      beginTime: '2019-09-21T00:01:13Z',
      endTime: '2019-09-21T22:31:13Z',
      beginTimeMillis: 1569024073190,
      endTimeMillis: 1569105073190,
      rawSince: 'TODAY',
      rawUntil: 'NOW',
      rawCompareWith: '1 WEEKS AGO',
      bucketSizeMillis: 1800000,
      guid: '11111111-1111-1111-1111-11111111',
      routerGuid: '1111-1111-1111-1111-11111111',
      messages: [],
      compareWith: 604800000,
      contents: {
        messages: [],
        timeSeries: {
          messages: [],
          contents: [{ function: 'alias', alias: 'Number of orders', contents: { function: 'count', simple: true } }],
        },
      },
    },
  };
  beforeEach(() => {
    ctx.backendSrv.datasourceRequest = () => {
      return ctx.$q.when({ data: response, status: 200 });
    };
  });
  it('Basic Timeseries Check', () => {
    return ctx.ds.query(getInsightsQueryOptions([query], 'timeseries')).then((results: any) => {
      expect(typeof results).toBe('object');
      expect(results.length).toBe(2);
      expect(typeof results[0].target).toBe('string');
      expect(results[0].target).toBe('Number of orders');
      expect(typeof results[0].datapoints).toBe('object');
      expect(results[0].datapoints.length).toBe(response.current.timeSeries.length);
      expect(results[0].datapoints[0].length).toBe(2);
      expect(results[0].datapoints[0][0]).toBe(response.current.timeSeries[0].results[0].count);
      expect(results[0].datapoints[0][1]).toBe(response.current.timeSeries[0].beginTimeSeconds * 1000);
      expect(results[0].datapoints[results[0].datapoints.length - 1][0]).toBe(1658);
      expect(results[0].datapoints[results[0].datapoints.length - 1][1]).toBe(
        response.current.timeSeries[response.current.timeSeries.length - 1].beginTimeSeconds * 1000
      );
      expect(typeof results[1].target).toBe('string');
      expect(results[1].target).toBe('Number of orders ( 1 weeks ago )');
      expect(typeof results[0].datapoints).toBe('object');
      expect(results[1].datapoints.length).toBe(response.previous.timeSeries.length);
      expect(results[1].datapoints[0].length).toBe(2);
      expect(results[1].datapoints[0][0]).toBe(response.previous.timeSeries[0].results[0].count);
      expect(results[1].datapoints[0][1]).toBe(response.previous.timeSeries[0].beginTimeSeconds * 1000 + response.metadata.compareWith);
      expect(results[1].datapoints[results[1].datapoints.length - 1][0]).toBe(1743);
      expect(results[1].datapoints[results[1].datapoints.length - 1][1]).toBe(
        response.previous.timeSeries[response.previous.timeSeries.length - 1].beginTimeSeconds * 1000 + response.metadata.compareWith
      );
    });
  });
});
