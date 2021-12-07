"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6648],{"./public/app/features/datasources/state/actions.ts":(a,e,t)=>{t.d(e,{J_:()=>D,xU:()=>$,M9:()=>y,gv:()=>w,Kj:()=>x,bZ:()=>S,kY:()=>v,oe:()=>U});var i=t("./.yarn/cache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js"),n=t("./packages/grafana-data/src/index.ts"),s=t("./packages/grafana-runtime/src/index.ts"),r=t("./public/app/core/actions/index.ts"),o=t("./public/app/core/services/backend_srv.ts"),c=t("./public/app/features/plugins/datasource_srv.ts"),u=t("./public/app/features/plugins/plugin_loader.ts"),d=t("./public/app/features/plugins/pluginSettings.ts"),l=t("./public/app/core/config.ts");function g(a){const e=[{id:"tsdb",title:"Time series databases",plugins:[]},{id:"logging",title:"Logging & document databases",plugins:[]},{id:"tracing",title:"Distributed tracing",plugins:[]},{id:"sql",title:"SQL",plugins:[]},{id:"cloud",title:"Cloud",plugins:[]},{id:"enterprise",title:"Enterprise plugins",plugins:[]},{id:"iot",title:"Industrial & IoT",plugins:[]},{id:"other",title:"Others",plugins:[]}].filter((a=>a)),t={},i={},s=[f({id:"grafana-splunk-datasource",name:"Splunk",description:"Visualize and explore Splunk logs",imgUrl:"public/img/plugins/splunk_logo_128.png"}),f({id:"grafana-oracle-datasource",name:"Oracle",description:"Visualize and explore Oracle SQL",imgUrl:"public/img/plugins/oracle.png"}),f({id:"grafana-dynatrace-datasource",name:"Dynatrace",description:"Visualize and explore Dynatrace data",imgUrl:"public/img/plugins/dynatrace.png"}),f({id:"grafana-servicenow-datasource",description:"ServiceNow integration and data source",name:"ServiceNow",imgUrl:"public/img/plugins/servicenow.svg"}),f({id:"grafana-datadog-datasource",description:"DataDog integration and data source",name:"DataDog",imgUrl:"public/img/plugins/datadog.png"}),f({id:"grafana-newrelic-datasource",description:"New Relic integration and data source",name:"New Relic",imgUrl:"public/img/plugins/newrelic.svg"}),f({id:"grafana-mongodb-datasource",description:"MongoDB integration and data source",name:"MongoDB",imgUrl:"public/img/plugins/mongodb.svg"}),f({id:"grafana-snowflake-datasource",description:"Snowflake integration and data source",name:"Snowflake",imgUrl:"public/img/plugins/snowflake.svg"}),f({id:"grafana-wavefront-datasource",description:"Wavefront integration and data source",name:"Wavefront",imgUrl:"public/img/plugins/wavefront.svg"}),f({id:"dlopes7-appdynamics-datasource",description:"AppDynamics integration and data source",name:"AppDynamics",imgUrl:"public/img/plugins/appdynamics.svg"}),f({id:"grafana-saphana-datasource",description:"SAP HANA® integration and data source",name:"SAP HANA®",imgUrl:"public/img/plugins/sap_hana.png"}),f({id:"grafana-honeycomb-datasource",description:"Honeycomb integration and datasource",name:"Honeycomb",imgUrl:"public/img/plugins/honeycomb.png"}),f({id:"grafana-salesforce-datasource",description:"Salesforce integration and datasource",name:"Salesforce",imgUrl:"public/img/plugins/salesforce.svg"}),f({id:"grafana-jira-datasource",description:"Jira integration and datasource",name:"Jira",imgUrl:"public/img/plugins/jira_logo.png"}),f({id:"grafana-gitlab-datasource",description:"GitLab integration and datasource",name:"GitLab",imgUrl:"public/img/plugins/gitlab.svg"}),f({id:"grafana-splunk-monitoring-datasource",description:"SignalFx integration and datasource",name:"Splunk Infrastructure Monitoring",imgUrl:"public/img/plugins/signalfx-logo.svg"})];for(const a of e)t[a.id]=a;const{edition:r,hasValidLicense:o}=l.vc.licenseInfo;for(const n of a){const a=s.find((a=>a.id===n.id));var c;if(n.enterprise||a)n.category="enterprise",n.unlicensed="Open Source"!==r&&!o,n.info.links=(null==a||null===(c=a.info)||void 0===c?void 0:c.links)||n.info.links;if(n.info.links)for(const a of n.info.links)a.name="Learn more";(e.find((a=>a.id===n.category))||t.other).plugins.push(n),i[n.id]=n}for(const a of e){if("cloud"===a.id&&a.plugins.push({id:"gcloud",name:"Grafana Cloud",type:n.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:"Hosted Graphite, Prometheus, and Loki",logos:{small:"public/img/grafana_icon.svg",large:"asd"},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/products/cloud/",name:"Learn more"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}),"enterprise"===a.id)for(const e of s)i[e.id]||a.plugins.push(e);p(a.plugins)}return e.filter((a=>a.plugins.length>0))}function p(a){const e={prometheus:100,graphite:95,loki:90,mysql:80,jaeger:100,postgres:79,gcloud:-1};a.sort(((a,t)=>{const i=e[a.id]||0,n=e[t.id]||0;return i>n?-1:i<n?1:a.name>t.name?-1:1}))}function f(a){return{id:a.id,name:a.name,type:n.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:a.description,logos:{small:a.imgUrl,large:a.imgUrl},author:{name:"Grafana Labs"},links:[{url:l.vc.pluginCatalogURL+a.id,name:"Install now"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}}var m=t("./public/app/features/datasources/state/navModel.ts"),h=t("./public/app/features/datasources/state/reducers.ts"),b=t("./public/app/features/datasources/state/selectors.ts");const y=function(a){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{loadDataSource:w,loadDataSourceMeta:k,getDataSource:b.f6,getDataSourceMeta:b.G4,importDataSourcePlugin:u.nL};return async(t,i)=>{if(a)try{const n=await t(e.loadDataSource(a));if(await t(e.loadDataSourceMeta(n)),i().dataSourceSettings.plugin)return;const s=e.getDataSource(i().dataSources,a),r=e.getDataSourceMeta(i().dataSources,s.type),o=await e.importDataSourcePlugin(r);t((0,h.iZ)(o))}catch(a){t((0,h.CT)(a))}else t((0,h.CT)(new Error("Invalid ID")))}},v=function(a){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{getDatasourceSrv:c.ak,getBackendSrv:o.i};return async(t,i)=>{const n=await e.getDatasourceSrv().get(a);n.testDatasource&&(t((0,h.j_)()),e.getBackendSrv().withNoBackendCache((async()=>{try{const a=await n.testDatasource();t((0,h.ng)(a))}catch(a){const{statusText:e,message:i,details:n,data:s}=a,r=i||(null==s?void 0:s.message)||"HTTP error "+e;t((0,h.Aq)({message:r,details:n}))}})))}};function S(){return async a=>{const e=await(0,o.i)().get("/api/datasources");a((0,h.be)(e))}}function w(a){return async e=>{const t=await async function(a){try{const e=await(0,i.n)((0,o.i)().fetch({method:"GET",url:`/api/datasources/uid/${a}`,showErrorAlert:!1}));if(e.ok)return e.data}catch(a){console.log("Failed to lookup data source by uid",a)}const e="string"==typeof a?parseInt(a,10):a;if(!Number.isNaN(e)){const t=await(0,i.n)((0,o.i)().fetch({method:"GET",url:`/api/datasources/${e}`,showErrorAlert:!1}));if(t.ok&&"number"==typeof a&&t.data.id===a)return t.data;if(t.ok&&t.data.id.toString()===a)return window.location.href=n.locationUtil.assureBaseUrl(`/datasources/edit/${t.data.uid}`),{}}throw Error("Could not find data source")}(a);return e((0,h.rl)(t)),t}}function k(a){return async e=>{const t=await(0,d.a)(a.type),i=await(0,u.nL)(t),n=i.DataSourceClass.prototype instanceof s.DataSourceWithBackend,o=Object.assign({},t,{isBackend:t.backend||n});e((0,h.jS)(o)),i.meta=o,e((0,r.RL)((0,m.B1)(a,i)))}}function D(a){return async(e,t)=>{await e(S());const i=t().dataSources.dataSources,n={name:a.name,type:a.id,access:"proxy",isDefault:0===i.length};P(i,n.name)&&(n.name=function(a,e){for(;P(a,e);)e=T(e)?`${I(e)}${A(C(e))}`:`${e}-1`;return e}(i,n.name));const r=await(0,o.i)().post("/api/datasources",n);await L(),s.locationService.push(`/datasources/edit/${r.datasource.uid}`)}}function x(){return async a=>{a((0,h.Ww)());const e=await(0,o.i)().get("/api/plugins",{enabled:1,type:"datasource"}),t=g(e);a((0,h.wZ)({plugins:e,categories:t}))}}function U(a){return async e=>(await(0,o.i)().put(`/api/datasources/${a.id}`,a),await L(),e(w(a.uid)))}function $(){return async(a,e)=>{const t=e().dataSources.dataSource;await(0,o.i)().delete(`/api/datasources/${t.id}`),await L(),s.locationService.push("/datasources")}}function P(a,e){return a.filter((a=>a.name.toLowerCase()===e.toLowerCase())).length>0}function L(){return(0,o.i)().get("/api/frontend/settings").then((a=>{l.ZP.datasources=a.datasources,l.ZP.defaultDatasource=a.defaultDatasource,(0,c.ak)().init(l.ZP.datasources,a.defaultDatasource)}))}function T(a){return a.endsWith("-",a.length-1)}function C(a){return parseInt(a.slice(-1),10)}function A(a){return isNaN(a)?1:a+1}function I(a){return a.slice(0,a.length-1)}},"./public/app/features/datasources/state/navModel.ts":(a,e,t)=>{t.d(e,{B1:()=>o,nI:()=>c,xG:()=>u});var i=t("./packages/grafana-data/src/index.ts"),n=t("./public/app/core/config.ts"),s=t("./public/app/core/core.ts"),r=t("./public/app/types/index.ts");function o(a,e){const t=e.meta,i={img:t.info.logos.large,id:"datasource-"+a.uid,subTitle:`Type: ${t.name}`,url:"",text:a.name,breadcrumbs:[{title:"Data Sources",url:"datasources"}],children:[{active:!1,icon:"sliders-v-alt",id:`datasource-settings-${a.uid}`,text:"Settings",url:`datasources/edit/${a.uid}/`}]};if(e.configPages)for(const t of e.configPages)i.children.push({active:!1,text:t.title,icon:t.icon,url:`datasources/edit/${a.uid}/?page=${t.id}`,id:`datasource-page-${t.id}`});return t.includes&&void 0!==t.includes.find((a=>"dashboard"===a.type))&&i.children.push({active:!1,icon:"apps",id:`datasource-dashboards-${a.uid}`,text:"Dashboards",url:`datasources/edit/${a.uid}/dashboards`}),n.ZP.licenseInfo.hasLicense&&(s.Vt.hasPermission(r.bW.DataSourcesPermissionsRead)&&i.children.push({active:!1,icon:"lock",id:`datasource-permissions-${a.id}`,text:"Permissions",url:`datasources/edit/${a.id}/permissions`}),i.children.push({active:!1,icon:"info-circle",id:`datasource-insights-${a.id}`,text:"Insights",url:`datasources/edit/${a.id}/insights`}),i.children.push({active:!1,icon:"database",id:`datasource-cache-${a.uid}`,text:"Cache",url:`datasources/edit/${a.uid}/cache`,hideFromTabs:!t.isBackend||!n.ZP.caching.enabled})),i}function c(a,e){let t;for(const i of a.children)if(i.id.indexOf(e)>0){i.active=!0,t=i;break}return{main:a,node:t}}function u(a){return c(o({access:"",basicAuth:!1,basicAuthUser:"",basicAuthPassword:"",withCredentials:!1,database:"",id:1,uid:"x",isDefault:!1,jsonData:{authType:"credentials",defaultRegion:"eu-west-2"},name:"Loading",orgId:1,password:"",readOnly:!1,type:"Loading",typeName:"Loading",typeLogoUrl:"public/img/icn-datasource.svg",url:"",user:"",secureJsonFields:{}},{meta:{id:"1",type:i.PluginType.datasource,name:"",info:{author:{name:"",url:""},description:"",links:[{name:"",url:""}],logos:{large:"",small:""},screenshots:[],updated:"",version:""},includes:[],module:"",baseUrl:""}}),a)}},"./public/app/features/datasources/state/selectors.ts":(a,e,t)=>{t.d(e,{mt:()=>i,xo:()=>n,f6:()=>s,G4:()=>r,IO:()=>o,pc:()=>c,r7:()=>u});const i=a=>{const e=new RegExp(a.searchQuery,"i");return a.dataSources.filter((a=>e.test(a.name)||e.test(a.database)||e.test(a.type)))},n=a=>{const e=new RegExp(a.dataSourceTypeSearchQuery,"i");return a.plugins.filter((a=>e.test(a.name)))},s=(a,e)=>a.dataSource.uid===e?a.dataSource:{},r=(a,e)=>a.dataSourceMeta.id===e?a.dataSourceMeta:{},o=a=>a.searchQuery,c=a=>a.layoutMode,u=a=>a.dataSourcesCount},"./public/app/features/plugins/pluginSettings.ts":(a,e,t)=>{t.d(e,{a:()=>s});var i=t("./packages/grafana-runtime/src/index.ts");const n={};function s(a){const e=n[a];return e?Promise.resolve(e):(0,i.getBackendSrv)().get(`/api/plugins/${a}/settings`).then((e=>(n[a]=e,e))).catch((a=>Promise.reject(new Error("Unknown Plugin"))))}}}]);
//# sourceMappingURL=6648.07a78e2e5dfa22b54847.js.map