define(["lodash","app/plugins/sdk"],(function(t,e){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=2)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";n.r(e);var s=n(0);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(){function t(t){var e=this;this.output={columns:[],rows:[],type:"table"};try{t.forEach((function(t){var n=t.result;if(n&&n.data&&n.data.metadata)if(n.data.timeSeries||n.data.current&&n.data.current.timeSeries)console.log("Received results in timeseries format"),n.data.timeSeries?e.handleTimeseriesResult(n.data.metadata,n.data.timeSeries,"",0):(n.data.current&&e.handleTimeseriesResult(n.data.metadata,n.data.current.timeSeries,"",0),n.data.previous&&e.handleTimeseriesResult(n.data.metadata,n.data.previous.timeSeries,n.data.metadata.rawCompareWith||"Previous",n.data.metadata.compareWith||0));else if(n.data.facets&&n.data.facets[0]&&n.data.facets[0].timeSeries){console.log("Received results in table with timeseries format"),e.output.columns&&e.output.rows&&(e.output=[]);var o=n.data.metadata;Object(s.each)(n.data.facets,(function(t,n){if(0===o.contents.timeSeries.contents.length){var r=o.contents.timeSeries.contents[0].contents.function||"count";r="uniquecount"===r?"uniqueCount":r;var i=t.name||n,u=t.timeSeries.map((function(t){return[t.results[0][r],1e3*t.beginTimeSeconds]}));e.pushTimeSeriesResult(i,u)}else Object(s.each)(o.contents.timeSeries.contents,(function(s,r){var o=s.simple?s.function:s.contents.function||"count";o="uniquecount"===o?"uniqueCount":o;var i=(t.name||n)+" "+(s.alias||o),u=t.timeSeries.map((function(t){return[t.results[r][o],1e3*t.beginTimeSeconds]}));e.pushTimeSeriesResult(i,u)}))}))}else if(n.data.facets){var i=[];console.log("Received results in table format");var u=t.result.data.facets,a=t.result.data.metadata,c=a.facet;Object(s.each)(u,(function(t){var e={};e[c]=t.name,Object(s.each)(a.contents.contents,(function(n,s){var r=n.simple?n.function:n.contents.contents?n.contents.contents.function:n.contents.function;r="uniquecount"===r?"uniqueCount":r,e[n.alias||n.function]=t.results[s][r]})),i.push(e)})),0===e.output.columns.length&&Object(s.each)(i[0],(function(t,n){e.output.columns.push({text:n,type:r(t)})})),Object(s.each)(i,(function(t){var n=[];Object(s.each)(t,(function(t,e){n.push(t)})),e.output.rows.push(n)}))}else if(n.data.results)if(n.data.metadata.contents&&n.data.metadata.contents[0]&&"funnel"===n.data.metadata.contents[0].function)console.log("funnel Type"),e.output.columns.push({text:n.data.metadata.contents[0].attribute,type:"string"},{text:"value",type:r(n.data.results[0].steps[0])}),Object(s.each)(n.data.metadata.contents[0].steps,(function(t,s){e.output.rows.push([t,n.data.results[0].steps[s]])}));else if(n.data.metadata.contents&&n.data.metadata.contents[0]&&"events"===n.data.metadata.contents[0].function){console.log("events Type"),e.output={columns:[],rows:[],type:"table"};var l=[],f=[];Object(s.each)(n.data.results[0].events,(function(t){f=[];var e=[];Object(s.each)(t,(function(t,n){"timestamp"===n&&(f.push({text:"Time",type:r(t)}),e.push(t))})),Object(s.each)(t,(function(t,n){"timestamp"!==n&&(f.push({text:n,type:"appId"===n?"string":r(t)}),e.push(t))})),l.push(e)})),e.output.columns=f,e.output.rows=l}else console.log("Results Type"),e.output={columns:[],rows:[],type:"table"},Object(s.each)(n.data.metadata.contents,(function(t){e.output.columns=[],t.columns?Object(s.each)(t.columns,(function(t){e.output.columns.push({text:t,type:r(n.data.results[0].events[0][t])})})):t.constant&&e.output.columns.push({text:t.alias||"constant"})})),Object(s.each)(n.data.results[0].events,(function(t){var r=[];Object(s.each)(n.data.metadata.contents[0].columns,(function(e){r.push(t[e])})),e.output.rows.push(r)}))}))}catch(t){console.log("Error while parsing the results",t)}}return t.prototype.pushTimeSeriesResult=function(t,e){this.output.columns&&this.output.rows&&(this.output=[]);var n={target:t,datapoints:e};this.output.push(n)},t.prototype.handleTimeseriesResult=function(t,e,n,r){var o=this,i=t.timeSeries||t.contents.timeSeries;try{i.contents.forEach((function(t,i){if(t&&"percentage"===t.function&&t.simple){console.log("percentage results");var u=(t.function||"")+" ("+t.of.function+" of "+t.filter+")",a=e.map((function(t){return[t.results[0].result,1e3*t.beginTimeSeconds+r]}));o.pushTimeSeriesResult(u,a)}else if(t&&"percentile"===t.function)console.log("percentile results"),t.thresholds.forEach((function(n){var s=(t.attribute||"")+" ("+n+" %)",u=e.map((function(t){return[t.results[i].percentiles[n.toString()],1e3*t.beginTimeSeconds+r]}));o.pushTimeSeriesResult(s,u)}));else if(t&&"histogram"===t.function)console.log("Received Timeseries histogram"),Object(s.each)(e[0].results[0].histogram,(function(t,n){var s=n.toString(),u=e.map((function(t){return[t.results[i].histogram[n.toString()],1e3*t.beginTimeSeconds+r]}));o.pushTimeSeriesResult(s,u)}));else if(t.steps)console.log("Step results"),t.steps.forEach((function(t,n){var s=t,u=e.map((function(t){return[t.results[i].steps[n],1e3*t.beginTimeSeconds+r]}));o.pushTimeSeriesResult(s,u)}));else{console.log("Regular Timeseries");var c=((t.alias||(t.contents?t.contents.alias||t.contents.function:t.function))+(n?" ( "+n.toLowerCase()+" )":"")).trim(),l=t.contents?t.contents.contents?t.contents.contents.function:t.contents.function:t.alias||t.function;u=c,a=e.map((function(t){return[t.results[i][l]||t.results[i].result,1e3*t.beginTimeSeconds+r]}));o.pushTimeSeriesResult(u,a)}}))}catch(t){console.log("Error while parsing timeseries results")}},t}(),i=function(){function t(t,e,n){this.instanceSettings=t,this.backendSrv=e,this.$q=n,this.url=this.instanceSettings.url+"/insights",this.insightsAccountID=this.instanceSettings.jsonData.insightsAccountID}return t.$inject=["instanceSettings","backendSrv","$q"],t.prototype.doInsightsRequest=function(t,e){var n=this;void 0===e&&(e=1);var s=Object.keys(t).filter((function(t){return["nrql"].indexOf(t)>-1})).map((function(e){return e+"="+encodeURI(t[e])})).join("&");return this.backendSrv.datasourceRequest({method:"GET",url:this.url+"/"+this.insightsAccountID+"/query?"+s}).catch((function(s){if(e>0)return n.doInsightsRequest(t,e-1);throw s}))},t.prototype.doQueries=function(t){var e=this;return t.map((function(t){return e.doInsightsRequest(t).then((function(e){return{result:e,query:t}})).catch((function(e){throw{error:e,query:t}}))}))},t.prototype.query=function(t){var e=t.targets.filter((function(t){return!0!==t.hide&&t.insights&&t.insights.nrql})).map((function(e){var n=e.insights,s=" SINCE "+t.range.from+" UNTIL "+t.range.to+" ";return n.nrql.toLowerCase().includes(" since ")||n.nrql.toLowerCase().includes(" until ")||(n.nrql+=" "+s),"table"!==n.resultFormat&&(n.nrql.toLowerCase().endsWith("timeseries")||n.nrql.toLowerCase().includes(" timeseries ")||(n.nrql+=" timeseries auto ")),n}));if(e&&0!==e.length){var n=this.doQueries(e);return this.$q.all(n).then((function(t){return new o(t).output}))}},t}(),u=function(){function t(t,e,n){this.instanceSettings=t,this.backendSrv=e,this.$q=n,this.insightsDataSource=new i(this.instanceSettings,this.backendSrv,this.$q)}return t.$inject=["instanceSettings","backendSrv","$q"],t.prototype.query=function(t){var e=[],n=Object(s.cloneDeep)(t);if(n.targets=Object(s.filter)(n.targets,["queryType","insights"]),n.targets.length>0){var r=this.insightsDataSource.query(n);r&&e.push(r)}return Promise.all(e).then((function(t){return{data:Object(s.flatten)(t)}}))},t.prototype.testDatasource=function(){var t=this;return new Promise((function(e,n){try{t.insightsDataSource.query({range:{from:"",to:""},targets:[{insights:{nrql:"SELECT 1 FROM Mobile SINCE TODAY",resultFormat:"table"}}]}).then((function(t){t?e({message:"Successfully Queried from Newrelic",status:"success"}):n({message:"Failed to Connect",status:"error"})})).catch((function(t){console.log(t),n({message:"Failed to Connect",status:"error"})}))}catch(t){console.log(t),n({message:"Failed to Connect",status:"error"})}}))},t.prototype.metricFindQuery=function(t){return Promise.resolve([])},t}(),a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var c=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.supportedServices=[{text:"Insights API",value:"insights"}],r.supportedFormats={insights:[{text:"Time Series",value:"timeseries"},{text:"Table",value:"table"}]},r.defaults={queryType:"insights",insights:{nrql:"",resultFormat:"timeseries"}},Object(s.defaultsDeep)(r.target,r.defaults),r}return e.$inject=["$scope","$injector"],function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.templateUrl="partials/query.editor.html",e}(n(1).QueryCtrl),l=function(){function t(){this.current.id&&(this.current.url="/api/datasources/proxy/"+this.current.id)}return t.templateUrl="partials/config.html",t}();n.d(e,"Datasource",(function(){return u})),n.d(e,"QueryCtrl",(function(){return c})),n.d(e,"ConfigCtrl",(function(){return l}))}])}));