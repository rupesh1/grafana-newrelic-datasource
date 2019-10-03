import { ctx, getInsightsQueryOptions, CONFIG } from './index';

const query = `
    SELECT
      count(*) as 'Number of orders'
    FROM
      MobileEvent
    WHERE
      EventName = 'CreateOrder'
    TIMESERIES
      since today
    COMPARE WITH
      1 week ago
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
    guid: CONFIG.dummy_guid,
    routerGuid: CONFIG.dummy_guid,
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

describe('Query with single series and compare with type', () => {
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
