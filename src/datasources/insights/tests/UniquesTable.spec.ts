import { ctx, getInsightsQueryOptions, CONFIG } from './index';

const query = `SELECT uniques(appName) FROM Mobile`;

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

describe('Query with Uniques and Table format', () => {
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
      expect(results.columns.length).toBe(1);
      expect(typeof results.columns[0]).toBe('object');
      expect(results.columns[0].type).toBe('string');
      expect(results.columns[0].text).toBe('appName');
      expect(results.rows.length).toBe(response.results[0].members.length);
      expect(results.rows[0].length).toBe(1);
      expect(results.rows[0][0]).toBe(response.results[0].members[0]);
    });
  });
});
