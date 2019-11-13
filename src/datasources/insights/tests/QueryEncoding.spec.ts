import { ctx, getInsightsQueryOptions, CONFIG } from './index';

const query = `SELECT count(*) + 1 - 1 * 100 / 2 as 'Number of orders' FROM MobileEvent WHERE EventName = 'CreateOrder' TIMESERIES`;

describe('Query Encoding', () => {
  beforeEach(() => {
    ctx.backendSrv.datasourceRequest = jest.fn().mockResolvedValue({});
    ctx.templateSrv.replace = arg => arg;
  });
  it('should URL Encode queries', () => {
    return ctx.ds.query(getInsightsQueryOptions([query], 'timeseries')).then(() => {
      expect(ctx.backendSrv.datasourceRequest).toBeCalledWith(
        expect.objectContaining({
          url: expect.stringContaining(encodeURIComponent(query)),
        })
      );
    });
  });
});
