import { ctx, getInsightsQueryOptions, CONFIG } from './index';

const query = `
    SELECT 
        uniqueCount(customerIdentifier) 
    from 
        AjaxRequest 
    where 
        appName like '%-prod%' and 
        requestUrl like '%/api/orders' and 
        httpResponseCode not in (0, 200, 201) 
    facet 
        httpResponseCode
`;

const response: any = {
  facets: [
    { name: '419', results: [{ uniqueCount: 148 }] },
    { name: '400', results: [{ uniqueCount: 99 }] },
    { name: '500', results: [{ uniqueCount: 6 }] },
    { name: '503', results: [{ uniqueCount: 3 }] },
    { name: '403', results: [{ uniqueCount: 1 }] },
    { name: '401', results: [{ uniqueCount: 1 }] },
  ],
  totalResult: { results: [{ uniqueCount: 254 }] },
  unknownGroup: { results: [{ uniqueCount: 0 }] },
  performanceStats: { inspectedCount: 71662361, omittedCount: 0, matchCount: 1822, wallClockTime: 356 },
  metadata: {
    eventTypes: ['AjaxRequest'],
    eventType: 'AjaxRequest',
    openEnded: false,
    beginTime: '2019-10-05T10:51:06Z',
    endTime: '2019-10-07T10:51:06Z',
    beginTimeMillis: 1570272666758,
    endTimeMillis: 1570445466758,
    rawSince: '1570272666758',
    rawUntil: '1570445466758',
    rawCompareWith: '',
    guid: CONFIG.dummy_guid,
    routerGuid: CONFIG.dummy_guid,
    messages: [],
    facet: 'httpResponseCode',
    offset: 0,
    limit: 10,
    contents: {
      messages: [],
      contents: [
        {
          function: 'uniquecount',
          attribute: 'customerIdentifier',
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
  it('Basic  Check', () => {
    return ctx.ds.query(getInsightsQueryOptions([query], 'table')).then((results: any) => {
      expect(typeof results).toBe('object');
      expect(results.type).toBe('table');
      expect(typeof results.columns).toBe('object');
      expect(typeof results.rows).toBe('object');
      expect(results.columns.length).toBe(2);
      expect(typeof results.columns[0]).toBe('object');
      expect(results.columns[0].type).toBe('string');
      expect(results.columns[0].text).toBe('httpResponseCode');
      expect(results.columns[1].type).toBe('number');
      expect(results.columns[1].text).toBe('uniquecount');
      expect(results.rows.length).toBe(response.facets.length);
      expect(results.rows[0].length).toBe(2);
      expect(results.rows[0][0]).toBe('419');
      expect(results.rows[0][1]).toBe(148);
    });
  });
});
