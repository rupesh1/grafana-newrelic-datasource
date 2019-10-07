// @ts-ignore
import Q from 'q';
import { NewrelicInsightsDataSource } from '../InsightsDataSource';

export const CONFIG = {
  appId: `1111111`,
  dummy_guid: '11111111-1111-1111-1111-11111111',
};

export const ctx: any = {
  backendSrv: {},
  templateSrv: {
    replace: () => {},
  },
  $q: Q,
  instanceSettings: {
    jsonData: {
      insightsAccountID: '111111',
    },
  },
};
ctx.ds = new NewrelicInsightsDataSource(ctx.instanceSettings, ctx.backendSrv, ctx.templateSrv, ctx.$q);

export const getInsightsQueryOptions = (queries: string[], resultFormat: string) => {
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
