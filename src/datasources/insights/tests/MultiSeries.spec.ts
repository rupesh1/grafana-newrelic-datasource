import { ctx, getInsightsQueryOptions, CONFIG } from './index';

const query = `
    SELECT
        filter(count(*), where requestUrl like '%/api/commerce/bag/v%') as 'Bag API',
        filter(count(*), where requestUrl like '%/api/customer/v%') as 'Customer Profile API',
        filter(count(*), where requestUrl like '%/commerce/voucher/v%') as 'Voucher API',
        filter(count(*), where requestUrl like '%/api/commerce/order/v%') as 'Orders API'
    FROM
        AjaxRequest
    WHERE
        appId = '${CONFIG.appId}'
    TIMESERIES
        10 minutes
`;
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
    guid: CONFIG.dummy_guid,
    routerGuid: CONFIG.dummy_guid,
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
describe('Query with multiple series', () => {
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
