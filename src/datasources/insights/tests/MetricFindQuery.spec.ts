import { ctx, CONFIG } from './index';

const query = `Insights(SELECT uniques(appName) FROM Mobile)`;

const response = {
  results: [
    {
      members: ['APP iOS', 'APP Android'],
    },
  ],
  performanceStats: {
    inspectedCount: 7524630,
    omittedCount: 0,
    matchCount: 7397803,
    wallClockTime: 88,
  },
  metadata: {
    eventTypes: ['Mobile'],
    eventType: 'Mobile',
    openEnded: false,
    beginTime: '2019-10-07T02:31:10Z',
    endTime: '2019-10-08T02:31:10Z',
    beginTimeMillis: 1570415470635,
    endTimeMillis: 1570501870635,
    rawSince: '1570415470635',
    rawUntil: '1570501870635',
    rawCompareWith: '',
    guid: CONFIG.dummy_guid,
    routerGuid: CONFIG.dummy_guid,
    messages: [],
    contents: [
      {
        function: 'uniques',
        attribute: 'appName',
        memberLimit: 1000,
      },
    ],
  },
};

describe('Query with MetricFindQuery', () => {
  beforeEach(() => {
    ctx.backendSrv.datasourceRequest = () => {
      return ctx.$q.when({ data: response, status: 200 });
    };
  });
  it('Basic  Check', () => {
    return ctx.ds.metricFindQuery(query).then((results: any) => {
      expect(typeof results).toBe('object');
      expect(results.length).toBe(2);
      expect(results[0].text).toBe('APP iOS');
      expect(results[1].value).toBe('APP Android');
    });
  });
});
