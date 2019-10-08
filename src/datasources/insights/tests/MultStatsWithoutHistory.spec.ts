import { ctx, getInsightsQueryOptions, CONFIG } from './index';

const query = `
    SELECT
        filter(count(*), where appName like '%product.web%') as 'Product page',
        filter(count(*), where appName like '%category.web%') as 'Category page',
        filter(count(*), where appName like '%saveditems.web%') as 'Saved Items page',
        filter(count(*), where appName like '%bag.web%') as 'Bag page',
        filter(count(*), where appName like '%checkout.web%') as 'Checkout web page',
        filter(count(*), where appName like '%voucherpurchase%') as 'Voucher purchase page',
        filter(count(*), where appName like '%account.web%') as 'My Account page',
        filter(count(*), where appName like '%rewards.web%') as 'Rewards page',
        filter(count(*), where appName like '%search.web%') as 'Voucher purchase page'
    from
        PageView
    where
        appId in (1,2,3,4,5,6,7)
`;

const response: any = {
  results: [
    {
      count: 1742051,
    },
    {
      count: 898003,
    },
    {
      count: 0,
    },
    {
      count: 93939,
    },
    {
      count: 38347,
    },
    {
      count: 0,
    },
    {
      count: 51473,
    },
    {
      count: 0,
    },
    {
      count: 420791,
    },
  ],
  performanceStats: {
    inspectedCount: 4468229,
    omittedCount: 0,
    matchCount: 3244604,
    wallClockTime: 251,
  },
  metadata: {
    eventTypes: ['PageView'],
    eventType: 'PageView',
    openEnded: false,
    beginTime: '2019-10-08T03:46:34Z',
    endTime: '2019-10-08T09:46:34Z',
    beginTimeMillis: 1570506394639,
    endTimeMillis: 1570527994639,
    rawSince: '1570506394639',
    rawUntil: '1570527994639',
    rawCompareWith: '',
    guid: CONFIG.dummy_guid,
    routerGuid: CONFIG.dummy_guid,
    messages: [],
    contents: [
      {
        function: 'alias',
        alias: 'Product page',
        contents: {
          function: 'filter',
          alias: "appName LIKE '%product.web%'",
          contents: {
            function: 'count',
            simple: true,
          },
        },
      },
      {
        function: 'alias',
        alias: 'Category page',
        contents: {
          function: 'filter',
          alias: "appName LIKE '%category.web%'",
          contents: {
            function: 'count',
            simple: true,
          },
        },
      },
      {
        function: 'alias',
        alias: 'Saved Items page',
        contents: {
          function: 'filter',
          alias: "appName LIKE '%saveditems.web%'",
          contents: {
            function: 'count',
            simple: true,
          },
        },
      },
      {
        function: 'alias',
        alias: 'Bag page',
        contents: {
          function: 'filter',
          alias: "appName LIKE '%bag.web%'",
          contents: {
            function: 'count',
            simple: true,
          },
        },
      },
      {
        function: 'alias',
        alias: 'Checkout web page',
        contents: {
          function: 'filter',
          alias: "appName LIKE '%checkout.web%'",
          contents: {
            function: 'count',
            simple: true,
          },
        },
      },
      {
        function: 'alias',
        alias: 'Voucher purchase page',
        contents: {
          function: 'filter',
          alias: "appName LIKE '%voucherpurchase%'",
          contents: {
            function: 'count',
            simple: true,
          },
        },
      },
      {
        function: 'alias',
        alias: 'My Account page',
        contents: {
          function: 'filter',
          alias: "appName LIKE '%account.web%'",
          contents: {
            function: 'count',
            simple: true,
          },
        },
      },
      {
        function: 'alias',
        alias: 'Rewards page',
        contents: {
          function: 'filter',
          alias: "appName LIKE '%rewards.web%'",
          contents: {
            function: 'count',
            simple: true,
          },
        },
      },
      {
        function: 'alias',
        alias: 'Voucher purchase page',
        contents: {
          function: 'filter',
          alias: "appName LIKE '%search.web%'",
          contents: {
            function: 'count',
            simple: true,
          },
        },
      },
    ],
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
      expect(results.rows.length).toBe(response.results.length);
      expect(results.rows[0].length).toBe(2);
      expect(results.rows[0][0]).toBe('Product page');
      expect(results.rows[0][1]).toBe(1742051);
    });
  });
});
