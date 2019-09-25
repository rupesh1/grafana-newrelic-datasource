Grafana NewRelic DataSource
===========================

Grafana DataSource Plugin to connect with NewRelic APM.

**Note:** This is not official plugin from Grafana / NewRelic. For full support use [official plugin from Grafana](https://grafana.com/grafana/plugins/grafana-newrelic-datasource)

# Screnshots

![image](https://user-images.githubusercontent.com/153843/65573268-48a3e380-df62-11e9-887a-98a940f4479d.png)

![image](https://user-images.githubusercontent.com/153843/65573477-ded80980-df62-11e9-9534-0c07f445fdcc.png)

![image](https://user-images.githubusercontent.com/153843/65573650-41c9a080-df63-11e9-8102-181a36b23eab.png)

![image](https://user-images.githubusercontent.com/153843/65573670-4ee68f80-df63-11e9-825a-5ee469153a7d.png)

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

# Known Issues

* This is not official plugin from Grafana / NewRelic. For full support use [official plugin from Grafana](https://grafana.com/grafana/plugins/grafana-newrelic-datasource)

* NewRelic API does have overload protection. If that happens, you’ll see an error 429 (“Too Many Requests”) in the API response. Read more details [here](https://docs.newrelic.com/docs/apis/rest-api-v2/requirements/api-overload-protection-handling-429-errors)

* Differnet format of insights query results were tested. But still there can be formats unhandled. If you see such unhandled result format, Create a bug [here](https://github.com/yesoreyeram/grafana-newrelic-datasource/issues/new) and let us know about it.