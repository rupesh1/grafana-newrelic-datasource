Grafana NewRelic DataSource
===========================

Grafana DataSource Plugin to connect with NewRelic APM.

**Note:** This is not official plugin from Grafana / NewRelic. For full support use [official plugin from Grafana](https://grafana.com/grafana/plugins/grafana-newrelic-datasource)

[![CircleCI](https://circleci.com/gh/yesoreyeram/grafana-newrelic-datasource/tree/master.svg?style=svg)](https://circleci.com/gh/yesoreyeram/grafana-newrelic-datasource/tree/master)

![image](https://user-images.githubusercontent.com/153843/65573268-48a3e380-df62-11e9-887a-98a940f4479d.png)

![image](https://user-images.githubusercontent.com/153843/66305832-1a29ef00-e8f8-11e9-8c90-08cc7143619e.png)


# Configuration 

After installing New Relic plugin, go to Datasources in the menu, click on the Add datasource button and then choose New Relic from Type dropdown and fill in a name for the data source (for example My New Relic Account). 

Specify your Insights API key (Insights -> Manage Data -> API keys -> Query Keys) and Accounty ID (get it from page URL: https://insights.newrelic.com/accounts/<your_account_id>/manage/api_keys or from query example on the API keys page).

![image](https://user-images.githubusercontent.com/153843/65574481-87876880-df65-11e9-9cd5-6633b5a46e01.png)


# Query Editor

Query Editor has the following settings.

**Service Type** : Insights API

**Query** : Query in NRQL format.

**Result Format** : Timeseries / Table

![image](https://user-images.githubusercontent.com/153843/65573970-0aa7bf00-df64-11e9-8db1-6b9dfae60fae.png)

When choosing Timeseries Result format, your query will be updated with the following.

* ` SINCE ${options.range.from} UNTIL ${options.range.to} ` will be appended to your query , if you dont have **SINCE** / **UNTIL** keyword in your query. This means, you dont need to specify any time filter in queries if you want to use the Grafana's timefilter. Still if you need to hardcode any time filter, you can still use  **SINCE** / **UNTIL**  in your queries.

* ` TIMESERIES AUTO ` will be appended to your query, if you dont have **TIMESERIES** keyword in your query. This means, you dont need to specify **TIMESERIES** keyword in your query  unless you want specific timeseries granularity.


When choosing Table Result format, your query will be updated with the following.

* ` SINCE ${options.range.from} UNTIL ${options.range.to} ` will be appended to your query , if you dont have **SINCE** / **UNTIL** keyword in your query. This means, you dont need to specify any time filter in queries if you want to use the Grafana's timefilter. Still if you need to hardcode any time filter, you can still use  **SINCE** / **UNTIL**  in your queries.


**NOTE:** If your query returns uniqueCount, make sure you are using "Table format" instead "Timeseries" to get accurate results.

# Metric Find Query / Variable Query

Use the one of the following queries in the `Query` field in the Variable edit view.

| Name                               | Description                                                |
| ---------------------------------- | ---------------------------------------------------------- |
| _Insights(query)_                  | Returns results for the query .                            |

Examples:

- Gets distinct list of app names: `Insights(SELECT uniques(appName) FROM Mobile)`


# Known Issues

* This is not official plugin from Grafana / NewRelic. For full support use [official plugin from Grafana](https://grafana.com/grafana/plugins/grafana-newrelic-datasource)

* NewRelic API does have overload protection. If that happens, you’ll see an error 429 (“Too Many Requests”) in the API response. Read more details [here](https://docs.newrelic.com/docs/apis/rest-api-v2/requirements/api-overload-protection-handling-429-errors)

* Differnet format of insights query results were tested. But still there can be formats unhandled. If you see such unhandled result format, Create a bug [here](https://github.com/yesoreyeram/grafana-newrelic-datasource/issues/new) and so we can fixt its.


# Screnshots


![image](https://user-images.githubusercontent.com/153843/65573650-41c9a080-df63-11e9-8102-181a36b23eab.png)

![image](https://user-images.githubusercontent.com/153843/65573477-ded80980-df62-11e9-9534-0c07f445fdcc.png)

![image](https://user-images.githubusercontent.com/153843/65573670-4ee68f80-df63-11e9-825a-5ee469153a7d.png)

![Variable Query Support](https://user-images.githubusercontent.com/153843/66364629-4f7b1f00-e982-11e9-8daf-f92fe5bd71f5.png)

# Advance usecases - Funnel 

NewRelic funnel can be represented in grafana as table or funnel like visualization using panels such as [grafana vue html panel](https://github.com/westc/grafana-vuehtml-panel)

Below example shows the query behind the funnel and its setup using vue html panel.

in NewRelic

![image](https://user-images.githubusercontent.com/153843/66366461-691f6500-e988-11e9-8c25-f528816d55df.png)

in Grafana

![image](https://user-images.githubusercontent.com/153843/66366481-79cfdb00-e988-11e9-85ba-bf38b43a75b0.png)

NRQL

```
SELECT funnel(
    session, 
    where requestUrl like '%/api_commerce/bag/v%/%/checkout' as 'Enter Checkout', 
    where requestUrl like '%/api_finance/paymentoptions/v%/paymentmethods%' as 'Payment', 
    where requestUrl like '%/api_commerce/order/v%/orders/createorder%' and httpResponseCode >= 200 and httpResponseCode < 300 as 'Orders' 
)  
FROM AjaxRequest where appId = '111111'
```

VUE HTML

```
<table style="width:100%">
  <tr v-for="(row,index) in dataset[0].rows" v-bind:key="index" style="padding:20px;">
    <td style="padding:10px;">{{row.session}}</td>
    <td style="padding:10px 0px;"> {{row.value}}</td>
    <td style="width:50%;padding:10px 0px;text-align:center;">
      <div style="width:100%;background:red;">
        <div  v-bind:style="{ 'width': (Math.round(row.value / dataset[0].rows[0].value * 100)+'%') ,  'background': 'green'}">&nbsp;</div>
      </div>
    </td>
    <td style="padding:10px 0px;text-align:center;">{{ Math.round(row.value / dataset[0].rows[0].value * 100) }}%</td>
  </tr>
</table>
```

# Advance Usecases - Synthetic user journey

Synthetic user journey / healthecheck can be replicated in grafana using [Discrete panel plugin](https://github.com/NatelEnergy/grafana-discrete-panel/tree/v0.0.9) as shown below


NRQL Query

`
SELECT
     (
          filter(count(*),WHERE result = 'SUCCESS')
        / filter(count(*), WHERE result IN ('SUCCESS','FAILED'))
        * 100
    ) as 'Success Rate'
FROM SyntheticCheck
WHERE monitorName like 'App Support%Checkout Journey'
FACET monitorName
TIMESERIES 10 minutes
`

Output in discrete panel

![image](https://user-images.githubusercontent.com/153843/66565655-e3074800-eb5a-11e9-9f44-2588d7d5730d.png)

You can also represent the above output with regular graph panel . Example shown below

![image](https://user-images.githubusercontent.com/153843/66565866-6c1e7f00-eb5b-11e9-9451-cda7bb10011b.png)


# Develop Build Run

```
docker run --rm -it -p 3000:3000 -v "$(pwd)"/grafana-plugins:/var/lib/grafana/plugins --name=grafana grafana/grafana:7.5.12

yarn install
yarn build
```