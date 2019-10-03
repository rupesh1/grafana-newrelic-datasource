import { ctx, getInsightsQueryOptions, CONFIG } from './index';

const query = `
    SELECT
        count(*) as 'Number of orders'
    FROM
        MobileEvent
    WHERE
        EventName = 'CreateOrder'
    TIMESERIES
`;
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
    guid: CONFIG.dummy_guid,
    routerGuid: CONFIG.dummy_guid,
    messages: [],
    timeSeries: {
      messages: [],
      contents: [{ function: 'alias', alias: 'Number of orders', contents: { function: 'count', simple: true } }],
    },
  },
};

describe('Query with single series', () => {
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
