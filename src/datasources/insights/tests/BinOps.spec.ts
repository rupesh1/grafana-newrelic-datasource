import { ctx, getInsightsQueryOptions, CONFIG } from './index';

const query = `
SELECT  (
    filter(count(*),WHERE result = 'SUCCESS')
    / filter(count(*), WHERE result IN ('SUCCESS','FAILED'))
    * 100
    ) as 'Success Rate'
FROM SyntheticCheck
WHERE monitorName like 'App Support%Checkout Journey'
FACET monitorName
TIMESERIES 60 minutes
`;

const response = {
  facets: [
    {
      name: 'App Support - APP .COM Checkout Journey',
      total: {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570366800,
        endTimeSeconds: 1570453200,
        inspectedCount: 289,
      },
      timeSeries: [
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570366800,
          endTimeSeconds: 1570370400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570370400,
          endTimeSeconds: 1570374000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570374000,
          endTimeSeconds: 1570377600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570377600,
          endTimeSeconds: 1570381200,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570381200,
          endTimeSeconds: 1570384800,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570384800,
          endTimeSeconds: 1570388400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570388400,
          endTimeSeconds: 1570392000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570392000,
          endTimeSeconds: 1570395600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570395600,
          endTimeSeconds: 1570399200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570399200,
          endTimeSeconds: 1570402800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570402800,
          endTimeSeconds: 1570406400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570406400,
          endTimeSeconds: 1570410000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570410000,
          endTimeSeconds: 1570413600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570413600,
          endTimeSeconds: 1570417200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570417200,
          endTimeSeconds: 1570420800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570420800,
          endTimeSeconds: 1570424400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570424400,
          endTimeSeconds: 1570428000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570428000,
          endTimeSeconds: 1570431600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570431600,
          endTimeSeconds: 1570435200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570435200,
          endTimeSeconds: 1570438800,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570438800,
          endTimeSeconds: 1570442400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570442400,
          endTimeSeconds: 1570446000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570446000,
          endTimeSeconds: 1570449600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570449600,
          endTimeSeconds: 1570453200,
          inspectedCount: 12,
        },
      ],
    },
    {
      name: 'App Support - APP RU Checkout Journey',
      total: {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570366800,
        endTimeSeconds: 1570453200,
        inspectedCount: 289,
      },
      timeSeries: [
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570366800,
          endTimeSeconds: 1570370400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570370400,
          endTimeSeconds: 1570374000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570374000,
          endTimeSeconds: 1570377600,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570377600,
          endTimeSeconds: 1570381200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570381200,
          endTimeSeconds: 1570384800,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570384800,
          endTimeSeconds: 1570388400,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570388400,
          endTimeSeconds: 1570392000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570392000,
          endTimeSeconds: 1570395600,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570395600,
          endTimeSeconds: 1570399200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570399200,
          endTimeSeconds: 1570402800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570402800,
          endTimeSeconds: 1570406400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570406400,
          endTimeSeconds: 1570410000,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570410000,
          endTimeSeconds: 1570413600,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570413600,
          endTimeSeconds: 1570417200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570417200,
          endTimeSeconds: 1570420800,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570420800,
          endTimeSeconds: 1570424400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570424400,
          endTimeSeconds: 1570428000,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570428000,
          endTimeSeconds: 1570431600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570431600,
          endTimeSeconds: 1570435200,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570435200,
          endTimeSeconds: 1570438800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570438800,
          endTimeSeconds: 1570442400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570442400,
          endTimeSeconds: 1570446000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570446000,
          endTimeSeconds: 1570449600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570449600,
          endTimeSeconds: 1570453200,
          inspectedCount: 12,
        },
      ],
    },
    {
      name: 'App Support - APP SE Checkout Journey',
      total: {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570366800,
        endTimeSeconds: 1570453200,
        inspectedCount: 288,
      },
      timeSeries: [
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570366800,
          endTimeSeconds: 1570370400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570370400,
          endTimeSeconds: 1570374000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570374000,
          endTimeSeconds: 1570377600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570377600,
          endTimeSeconds: 1570381200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570381200,
          endTimeSeconds: 1570384800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570384800,
          endTimeSeconds: 1570388400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570388400,
          endTimeSeconds: 1570392000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570392000,
          endTimeSeconds: 1570395600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570395600,
          endTimeSeconds: 1570399200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570399200,
          endTimeSeconds: 1570402800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570402800,
          endTimeSeconds: 1570406400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570406400,
          endTimeSeconds: 1570410000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570410000,
          endTimeSeconds: 1570413600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570413600,
          endTimeSeconds: 1570417200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570417200,
          endTimeSeconds: 1570420800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570420800,
          endTimeSeconds: 1570424400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570424400,
          endTimeSeconds: 1570428000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570428000,
          endTimeSeconds: 1570431600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570431600,
          endTimeSeconds: 1570435200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570435200,
          endTimeSeconds: 1570438800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570438800,
          endTimeSeconds: 1570442400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570442400,
          endTimeSeconds: 1570446000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570446000,
          endTimeSeconds: 1570449600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570449600,
          endTimeSeconds: 1570453200,
          inspectedCount: 12,
        },
      ],
    },
    {
      name: 'App Support - APP FR Checkout Journey',
      total: {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570366800,
        endTimeSeconds: 1570453200,
        inspectedCount: 289,
      },
      timeSeries: [
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570366800,
          endTimeSeconds: 1570370400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570370400,
          endTimeSeconds: 1570374000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570374000,
          endTimeSeconds: 1570377600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570377600,
          endTimeSeconds: 1570381200,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570381200,
          endTimeSeconds: 1570384800,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570384800,
          endTimeSeconds: 1570388400,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570388400,
          endTimeSeconds: 1570392000,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570392000,
          endTimeSeconds: 1570395600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570395600,
          endTimeSeconds: 1570399200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570399200,
          endTimeSeconds: 1570402800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570402800,
          endTimeSeconds: 1570406400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570406400,
          endTimeSeconds: 1570410000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570410000,
          endTimeSeconds: 1570413600,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570413600,
          endTimeSeconds: 1570417200,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570417200,
          endTimeSeconds: 1570420800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570420800,
          endTimeSeconds: 1570424400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570424400,
          endTimeSeconds: 1570428000,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570428000,
          endTimeSeconds: 1570431600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570431600,
          endTimeSeconds: 1570435200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570435200,
          endTimeSeconds: 1570438800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570438800,
          endTimeSeconds: 1570442400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570442400,
          endTimeSeconds: 1570446000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570446000,
          endTimeSeconds: 1570449600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570449600,
          endTimeSeconds: 1570453200,
          inspectedCount: 12,
        },
      ],
    },
    {
      name: 'App Support - APP ROE Checkout Journey',
      total: {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570366800,
        endTimeSeconds: 1570453200,
        inspectedCount: 288,
      },
      timeSeries: [
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570366800,
          endTimeSeconds: 1570370400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570370400,
          endTimeSeconds: 1570374000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570374000,
          endTimeSeconds: 1570377600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570377600,
          endTimeSeconds: 1570381200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570381200,
          endTimeSeconds: 1570384800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570384800,
          endTimeSeconds: 1570388400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570388400,
          endTimeSeconds: 1570392000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570392000,
          endTimeSeconds: 1570395600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570395600,
          endTimeSeconds: 1570399200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570399200,
          endTimeSeconds: 1570402800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570402800,
          endTimeSeconds: 1570406400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570406400,
          endTimeSeconds: 1570410000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570410000,
          endTimeSeconds: 1570413600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570413600,
          endTimeSeconds: 1570417200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570417200,
          endTimeSeconds: 1570420800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570420800,
          endTimeSeconds: 1570424400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570424400,
          endTimeSeconds: 1570428000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570428000,
          endTimeSeconds: 1570431600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570431600,
          endTimeSeconds: 1570435200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570435200,
          endTimeSeconds: 1570438800,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570438800,
          endTimeSeconds: 1570442400,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570442400,
          endTimeSeconds: 1570446000,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570446000,
          endTimeSeconds: 1570449600,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570449600,
          endTimeSeconds: 1570453200,
          inspectedCount: 12,
        },
      ],
    },
    {
      name: 'App Support - APP ES Checkout Journey',
      total: {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570366800,
        endTimeSeconds: 1570453200,
        inspectedCount: 288,
      },
      timeSeries: [
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570366800,
          endTimeSeconds: 1570370400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570370400,
          endTimeSeconds: 1570374000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570374000,
          endTimeSeconds: 1570377600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570377600,
          endTimeSeconds: 1570381200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570381200,
          endTimeSeconds: 1570384800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570384800,
          endTimeSeconds: 1570388400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570388400,
          endTimeSeconds: 1570392000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570392000,
          endTimeSeconds: 1570395600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570395600,
          endTimeSeconds: 1570399200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570399200,
          endTimeSeconds: 1570402800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570402800,
          endTimeSeconds: 1570406400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570406400,
          endTimeSeconds: 1570410000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570410000,
          endTimeSeconds: 1570413600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570413600,
          endTimeSeconds: 1570417200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570417200,
          endTimeSeconds: 1570420800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570420800,
          endTimeSeconds: 1570424400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570424400,
          endTimeSeconds: 1570428000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570428000,
          endTimeSeconds: 1570431600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570431600,
          endTimeSeconds: 1570435200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570435200,
          endTimeSeconds: 1570438800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570438800,
          endTimeSeconds: 1570442400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570442400,
          endTimeSeconds: 1570446000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570446000,
          endTimeSeconds: 1570449600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570449600,
          endTimeSeconds: 1570453200,
          inspectedCount: 12,
        },
      ],
    },
    {
      name: 'App Support - APP DK  Checkout Journey',
      total: {
        results: [
          {
            result: 99.65277777777779,
          },
        ],
        beginTimeSeconds: 1570366800,
        endTimeSeconds: 1570453200,
        inspectedCount: 288,
      },
      timeSeries: [
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570366800,
          endTimeSeconds: 1570370400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570370400,
          endTimeSeconds: 1570374000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570374000,
          endTimeSeconds: 1570377600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570377600,
          endTimeSeconds: 1570381200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570381200,
          endTimeSeconds: 1570384800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570384800,
          endTimeSeconds: 1570388400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570388400,
          endTimeSeconds: 1570392000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570392000,
          endTimeSeconds: 1570395600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570395600,
          endTimeSeconds: 1570399200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570399200,
          endTimeSeconds: 1570402800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570402800,
          endTimeSeconds: 1570406400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570406400,
          endTimeSeconds: 1570410000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570410000,
          endTimeSeconds: 1570413600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570413600,
          endTimeSeconds: 1570417200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570417200,
          endTimeSeconds: 1570420800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570420800,
          endTimeSeconds: 1570424400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570424400,
          endTimeSeconds: 1570428000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 91.66666666666666,
            },
          ],
          beginTimeSeconds: 1570428000,
          endTimeSeconds: 1570431600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570431600,
          endTimeSeconds: 1570435200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570435200,
          endTimeSeconds: 1570438800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570438800,
          endTimeSeconds: 1570442400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570442400,
          endTimeSeconds: 1570446000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570446000,
          endTimeSeconds: 1570449600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570449600,
          endTimeSeconds: 1570453200,
          inspectedCount: 12,
        },
      ],
    },
    {
      name: 'App Support - APP DE Checkout Journey',
      total: {
        results: [
          {
            result: 99.65277777777779,
          },
        ],
        beginTimeSeconds: 1570366800,
        endTimeSeconds: 1570453200,
        inspectedCount: 288,
      },
      timeSeries: [
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570366800,
          endTimeSeconds: 1570370400,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570370400,
          endTimeSeconds: 1570374000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570374000,
          endTimeSeconds: 1570377600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570377600,
          endTimeSeconds: 1570381200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570381200,
          endTimeSeconds: 1570384800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570384800,
          endTimeSeconds: 1570388400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570388400,
          endTimeSeconds: 1570392000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 91.66666666666666,
            },
          ],
          beginTimeSeconds: 1570392000,
          endTimeSeconds: 1570395600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570395600,
          endTimeSeconds: 1570399200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570399200,
          endTimeSeconds: 1570402800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570402800,
          endTimeSeconds: 1570406400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570406400,
          endTimeSeconds: 1570410000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570410000,
          endTimeSeconds: 1570413600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570413600,
          endTimeSeconds: 1570417200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570417200,
          endTimeSeconds: 1570420800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570420800,
          endTimeSeconds: 1570424400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570424400,
          endTimeSeconds: 1570428000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570428000,
          endTimeSeconds: 1570431600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570431600,
          endTimeSeconds: 1570435200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570435200,
          endTimeSeconds: 1570438800,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570438800,
          endTimeSeconds: 1570442400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570442400,
          endTimeSeconds: 1570446000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570446000,
          endTimeSeconds: 1570449600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570449600,
          endTimeSeconds: 1570453200,
          inspectedCount: 12,
        },
      ],
    },
    {
      name: 'App Support - APP IT Checkout Journey',
      total: {
        results: [
          {
            result: 99.65156794425087,
          },
        ],
        beginTimeSeconds: 1570366800,
        endTimeSeconds: 1570453200,
        inspectedCount: 287,
      },
      timeSeries: [
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570366800,
          endTimeSeconds: 1570370400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570370400,
          endTimeSeconds: 1570374000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570374000,
          endTimeSeconds: 1570377600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570377600,
          endTimeSeconds: 1570381200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570381200,
          endTimeSeconds: 1570384800,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570384800,
          endTimeSeconds: 1570388400,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570388400,
          endTimeSeconds: 1570392000,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570392000,
          endTimeSeconds: 1570395600,
          inspectedCount: 13,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570395600,
          endTimeSeconds: 1570399200,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 91.66666666666666,
            },
          ],
          beginTimeSeconds: 1570399200,
          endTimeSeconds: 1570402800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570402800,
          endTimeSeconds: 1570406400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570406400,
          endTimeSeconds: 1570410000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570410000,
          endTimeSeconds: 1570413600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570413600,
          endTimeSeconds: 1570417200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570417200,
          endTimeSeconds: 1570420800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570420800,
          endTimeSeconds: 1570424400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570424400,
          endTimeSeconds: 1570428000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570428000,
          endTimeSeconds: 1570431600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570431600,
          endTimeSeconds: 1570435200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570435200,
          endTimeSeconds: 1570438800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570438800,
          endTimeSeconds: 1570442400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570442400,
          endTimeSeconds: 1570446000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570446000,
          endTimeSeconds: 1570449600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570449600,
          endTimeSeconds: 1570453200,
          inspectedCount: 12,
        },
      ],
    },
    {
      name: 'App Support - APP NL Checkout Journey',
      total: {
        results: [
          {
            result: 99.65156794425087,
          },
        ],
        beginTimeSeconds: 1570366800,
        endTimeSeconds: 1570453200,
        inspectedCount: 287,
      },
      timeSeries: [
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570366800,
          endTimeSeconds: 1570370400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570370400,
          endTimeSeconds: 1570374000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570374000,
          endTimeSeconds: 1570377600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570377600,
          endTimeSeconds: 1570381200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570381200,
          endTimeSeconds: 1570384800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570384800,
          endTimeSeconds: 1570388400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 91.66666666666666,
            },
          ],
          beginTimeSeconds: 1570388400,
          endTimeSeconds: 1570392000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570392000,
          endTimeSeconds: 1570395600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570395600,
          endTimeSeconds: 1570399200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570399200,
          endTimeSeconds: 1570402800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570402800,
          endTimeSeconds: 1570406400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570406400,
          endTimeSeconds: 1570410000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570410000,
          endTimeSeconds: 1570413600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570413600,
          endTimeSeconds: 1570417200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570417200,
          endTimeSeconds: 1570420800,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570420800,
          endTimeSeconds: 1570424400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570424400,
          endTimeSeconds: 1570428000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570428000,
          endTimeSeconds: 1570431600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570431600,
          endTimeSeconds: 1570435200,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570435200,
          endTimeSeconds: 1570438800,
          inspectedCount: 11,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570438800,
          endTimeSeconds: 1570442400,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570442400,
          endTimeSeconds: 1570446000,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570446000,
          endTimeSeconds: 1570449600,
          inspectedCount: 12,
        },
        {
          results: [
            {
              result: 100.0,
            },
          ],
          beginTimeSeconds: 1570449600,
          endTimeSeconds: 1570453200,
          inspectedCount: 12,
        },
      ],
    },
  ],
  totalResult: {
    total: {
      results: [
        {
          result: 99.70230711982138,
        },
      ],
      beginTimeSeconds: 1570366800,
      endTimeSeconds: 1570453200,
      inspectedCount: 4031,
    },
    timeSeries: [
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570366800,
        endTimeSeconds: 1570370400,
        inspectedCount: 169,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570370400,
        endTimeSeconds: 1570374000,
        inspectedCount: 167,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570374000,
        endTimeSeconds: 1570377600,
        inspectedCount: 170,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570377600,
        endTimeSeconds: 1570381200,
        inspectedCount: 167,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570381200,
        endTimeSeconds: 1570384800,
        inspectedCount: 167,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570384800,
        endTimeSeconds: 1570388400,
        inspectedCount: 170,
      },
      {
        results: [
          {
            result: 99.40119760479041,
          },
        ],
        beginTimeSeconds: 1570388400,
        endTimeSeconds: 1570392000,
        inspectedCount: 167,
      },
      {
        results: [
          {
            result: 98.80952380952381,
          },
        ],
        beginTimeSeconds: 1570392000,
        endTimeSeconds: 1570395600,
        inspectedCount: 168,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570395600,
        endTimeSeconds: 1570399200,
        inspectedCount: 166,
      },
      {
        results: [
          {
            result: 99.40828402366864,
          },
        ],
        beginTimeSeconds: 1570399200,
        endTimeSeconds: 1570402800,
        inspectedCount: 169,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570402800,
        endTimeSeconds: 1570406400,
        inspectedCount: 168,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570406400,
        endTimeSeconds: 1570410000,
        inspectedCount: 169,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570410000,
        endTimeSeconds: 1570413600,
        inspectedCount: 168,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570413600,
        endTimeSeconds: 1570417200,
        inspectedCount: 167,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570417200,
        endTimeSeconds: 1570420800,
        inspectedCount: 169,
      },
      {
        results: [
          {
            result: 98.80952380952381,
          },
        ],
        beginTimeSeconds: 1570420800,
        endTimeSeconds: 1570424400,
        inspectedCount: 168,
      },
      {
        results: [
          {
            result: 99.40476190476191,
          },
        ],
        beginTimeSeconds: 1570424400,
        endTimeSeconds: 1570428000,
        inspectedCount: 168,
      },
      {
        results: [
          {
            result: 98.80952380952381,
          },
        ],
        beginTimeSeconds: 1570428000,
        endTimeSeconds: 1570431600,
        inspectedCount: 168,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570431600,
        endTimeSeconds: 1570435200,
        inspectedCount: 167,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570435200,
        endTimeSeconds: 1570438800,
        inspectedCount: 167,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570438800,
        endTimeSeconds: 1570442400,
        inspectedCount: 169,
      },
      {
        results: [
          {
            result: 99.40119760479041,
          },
        ],
        beginTimeSeconds: 1570442400,
        endTimeSeconds: 1570446000,
        inspectedCount: 167,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570446000,
        endTimeSeconds: 1570449600,
        inspectedCount: 169,
      },
      {
        results: [
          {
            result: 98.80239520958084,
          },
        ],
        beginTimeSeconds: 1570449600,
        endTimeSeconds: 1570453200,
        inspectedCount: 167,
      },
    ],
  },
  unknownGroup: {
    total: {
      results: [
        {
          result: 99.30434782608695,
        },
      ],
      beginTimeSeconds: 1570366800,
      endTimeSeconds: 1570453200,
      inspectedCount: 1150,
    },
    timeSeries: [
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570366800,
        endTimeSeconds: 1570370400,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570370400,
        endTimeSeconds: 1570374000,
        inspectedCount: 47,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570374000,
        endTimeSeconds: 1570377600,
        inspectedCount: 49,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570377600,
        endTimeSeconds: 1570381200,
        inspectedCount: 47,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570381200,
        endTimeSeconds: 1570384800,
        inspectedCount: 49,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570384800,
        endTimeSeconds: 1570388400,
        inspectedCount: 47,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570388400,
        endTimeSeconds: 1570392000,
        inspectedCount: 49,
      },
      {
        results: [
          {
            result: 97.91666666666666,
          },
        ],
        beginTimeSeconds: 1570392000,
        endTimeSeconds: 1570395600,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570395600,
        endTimeSeconds: 1570399200,
        inspectedCount: 47,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570399200,
        endTimeSeconds: 1570402800,
        inspectedCount: 49,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570402800,
        endTimeSeconds: 1570406400,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570406400,
        endTimeSeconds: 1570410000,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570410000,
        endTimeSeconds: 1570413600,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570413600,
        endTimeSeconds: 1570417200,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570417200,
        endTimeSeconds: 1570420800,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 95.83333333333334,
          },
        ],
        beginTimeSeconds: 1570420800,
        endTimeSeconds: 1570424400,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 97.91666666666666,
          },
        ],
        beginTimeSeconds: 1570424400,
        endTimeSeconds: 1570428000,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 97.91666666666666,
          },
        ],
        beginTimeSeconds: 1570428000,
        endTimeSeconds: 1570431600,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570431600,
        endTimeSeconds: 1570435200,
        inspectedCount: 46,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570435200,
        endTimeSeconds: 1570438800,
        inspectedCount: 49,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570438800,
        endTimeSeconds: 1570442400,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 97.91666666666666,
          },
        ],
        beginTimeSeconds: 1570442400,
        endTimeSeconds: 1570446000,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 100.0,
          },
        ],
        beginTimeSeconds: 1570446000,
        endTimeSeconds: 1570449600,
        inspectedCount: 48,
      },
      {
        results: [
          {
            result: 95.74468085106383,
          },
        ],
        beginTimeSeconds: 1570449600,
        endTimeSeconds: 1570453200,
        inspectedCount: 47,
      },
    ],
  },
  performanceStats: {
    inspectedCount: 170951,
    omittedCount: 0,
    matchCount: 4031,
    wallClockTime: 62,
  },
  metadata: {
    eventTypes: ['SyntheticCheck'],
    eventType: 'SyntheticCheck',
    openEnded: false,
    beginTime: '2019-10-06T13:00:00Z',
    endTime: '2019-10-07T13:00:00Z',
    beginTimeMillis: 1570366800000,
    endTimeMillis: 1570453200000,
    rawSince: '1570366800000',
    rawUntil: '1570453200000',
    rawCompareWith: '',
    bucketSizeMillis: 3600000,
    guid: CONFIG.dummy_guid,
    routerGuid: CONFIG.dummy_guid,
    messages: [],
    facet: 'monitorName',
    offset: 0,
    limit: 10,
    contents: {
      messages: [],
      timeSeries: {
        messages: [],
        contents: [
          {
            function: 'alias',
            alias: 'Success Rate',
            contents: {
              function: 'binop',
              simple: true,
              binop: '*',
              left: {
                function: 'binop',
                simple: true,
                binop: '/',
                left: {
                  function: 'filter',
                  alias: "result = 'SUCCESS'",
                  contents: {
                    function: 'count',
                    simple: true,
                  },
                },
                right: {
                  function: 'filter',
                  alias: "result IN ('SUCCESS', 'FAILED')",
                  contents: {
                    function: 'count',
                    simple: true,
                  },
                },
              },
              right: {
                constant: 100.0,
              },
            },
          },
        ],
      },
    },
  },
};

describe('Query with BinOps', () => {
  beforeEach(() => {
    ctx.backendSrv.datasourceRequest = () => {
      return ctx.$q.when({ data: response, status: 200 });
    };
  });
  it('Basic  Check', () => {
    return ctx.ds.query(getInsightsQueryOptions([query], 'timeseries')).then((results: any) => {
      expect(typeof results).toBe('object');
      expect(results.length).toBe(10);
      expect(results[6].target).toBe(response.facets[6].name + ' ' + response.metadata.contents.timeSeries.contents[0].alias);
      expect(results[6].datapoints.length).toBe(24);
      expect(results[6].datapoints[0].length).toBe(2);
      expect(Math.round(results[6].datapoints[17][0])).toBe(92);
    });
  });
});
