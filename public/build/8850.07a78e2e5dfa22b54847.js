"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8850,7641],{"./public/app/features/admin/ServerStats.tsx":(e,s,t)=>{t.r(s),t.d(s,{ServerStats:()=>m});var a=t("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),i=t("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=t("./packages/grafana-ui/src/index.ts"),r=t("./public/app/types/index.ts"),c=t("./packages/grafana-runtime/src/index.ts");var l,o,d,p,u,x=t("./public/app/core/services/context_srv.ts"),h=t("./public/app/features/plugins/admin/components/Loader.tsx"),g=t("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const m=()=>{const[e,s]=(0,a.useState)(null),[t,i]=(0,a.useState)(!1),m=(0,n.useStyles2)(j);return(0,a.useEffect)((()=>{x.Vt.hasAccess(r.bW.ActionServerStatsRead,x.Vt.isGrafanaAdmin)&&(i(!0),(async()=>(0,c.getBackendSrv)().get("api/admin/stats").catch((e=>(console.error(e),null))))().then((e=>{s(e),i(!1)})))}),[]),x.Vt.hasAccess(r.bW.ActionServerStatsRead,x.Vt.isGrafanaAdmin)?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{className:m.title,children:"Instance statistics"}),t?(0,g.jsx)("div",{className:m.loader,children:l||(l=(0,g.jsx)(h.a,{text:"Loading instance stats..."}))}):e?(0,g.jsxs)("div",{className:m.row,children:[(0,g.jsx)(f,{content:[{name:"Dashboards (starred)",value:`${e.dashboards} (${e.stars})`},{name:"Tags",value:e.tags},{name:"Playlists",value:e.playlists},{name:"Snapshots",value:e.snapshots}],footer:o||(o=(0,g.jsx)(n.LinkButton,{href:"/dashboards",variant:"secondary",children:"Manage dashboards"}))}),(0,g.jsxs)("div",{className:m.doubleRow,children:[(0,g.jsx)(f,{content:[{name:"Data sources",value:e.datasources}],footer:d||(d=(0,g.jsx)(n.LinkButton,{href:"/datasources",variant:"secondary",children:"Manage data sources"}))}),(0,g.jsx)(f,{content:[{name:"Alerts",value:e.alerts}],footer:p||(p=(0,g.jsx)(n.LinkButton,{href:"/alerting/list",variant:"secondary",children:"Alerts"}))})]}),(0,g.jsx)(f,{content:[{name:"Organisations",value:e.orgs},{name:"Users total",value:e.users},{name:"Active users in last 30 days",value:e.activeUsers},{name:"Active sessions",value:e.activeSessions}],footer:u||(u=(0,g.jsx)(n.LinkButton,{href:"/admin/users",variant:"secondary",children:"Manage users"}))})]}):(0,g.jsx)("p",{className:m.notFound,children:"No stats found."})]}):null},j=e=>({title:i.css`
      margin-bottom: ${e.spacing(4)};
    `,row:i.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${e.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:i.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${e.spacing(2)};
      }
    `,loader:i.css`
      height: 290px;
    `,notFound:i.css`
      font-size: ${e.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),f=e=>{let{content:s,footer:t}=e;const a=(0,n.useStyles2)(v);return(0,g.jsx)(n.CardContainer,{className:a.container,disableHover:!0,children:(0,g.jsxs)("div",{className:a.inner,children:[(0,g.jsx)("div",{className:a.content,children:s.map((e=>(0,g.jsxs)("div",{className:a.row,children:[(0,g.jsx)("span",{children:e.name}),(0,g.jsx)("span",{children:e.value})]},e.name)))}),t&&(0,g.jsx)("div",{children:t})]})})},v=e=>({container:i.css`
      padding: ${e.spacing(2)};
    `,inner:i.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:i.css`
      flex: 1 0 auto;
    `,row:i.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${e.spacing(2)};
      align-items: center;
    `})},"./public/app/features/admin/UpgradePage.tsx":(e,s,t)=>{t.r(s),t.d(s,{UpgradeInfo:()=>P,UpgradePage:()=>z,default:()=>T});t("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var a=t("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),i=t("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=t("./packages/grafana-ui/src/index.ts"),r=t("./public/app/core/components/Page/Page.tsx"),c=t("./public/app/core/selectors/navModel.ts"),l=t("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const o={fontWeight:500,fontSize:"26px",lineHeight:"123%"},d=(0,n.stylesFactory)((e=>{const s=e.isDark?"public/img/licensing/header_dark.svg":"public/img/licensing/header_light.svg",t=e.isDark?e.palette.dark9:e.palette.gray6;return{container:i.css`
      padding: 36px 79px;
      background: ${e.colors.panelBg};
    `,footer:i.css`
      text-align: center;
      padding: 16px;
      background: ${t};
    `,header:i.css`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${s}') right;
    `}})),p=e=>{let{header:s,editionNotice:t,subheader:a,children:i}=e;const r=(0,n.useTheme)(),c=d(r);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:c.header,children:[(0,l.jsx)("h2",{style:o,children:s}),a&&(0,l.jsx)("h3",{children:a}),(0,l.jsx)(u,{size:"128px",style:{boxShadow:"0px 0px 24px rgba(24, 58, 110, 0.45)",background:"#0A1C36",position:"absolute",top:"19px",left:"71%"},children:(0,l.jsx)("img",{src:"public/img/grafana_icon.svg",alt:"Grafana",width:"80px",style:{position:"absolute",left:"23px",top:"20px"}})})]}),(0,l.jsx)("div",{className:c.container,children:i}),t&&(0,l.jsx)("div",{className:c.footer,children:t})]})},u=e=>{let{size:s,style:t,children:a}=e;return(0,l.jsx)("div",{style:Object.assign({width:s,height:s,position:"absolute",bottom:0,right:0,borderRadius:"50%"},t),children:a})};var x,h,g,m,j,f,v,b,y,S,_,k,w,N,A=t("./public/app/features/admin/ServerStats.tsx");const z=e=>{let{navModel:s}=e;return(0,l.jsx)(r.Z,{navModel:s,children:x||(x=(0,l.jsxs)(r.Z.Contents,{children:[(0,l.jsx)(A.ServerStats,{}),(0,l.jsx)(P,{editionNotice:"You are running the open-source version of Grafana. You have to install the Enterprise edition in order enable Enterprise features."})]}))})},L={fontWeight:500,fontSize:"26px",lineHeight:"123%"},P=e=>{let{editionNotice:s}=e;const t=(0,n.useStyles2)(D);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:t.title,children:"Enterprise license"}),(0,l.jsx)(p,{header:"Grafana Enterprise",subheader:"Get your free trial",editionNotice:s,children:(0,l.jsxs)("div",{className:t.column,children:[h||(h=(0,l.jsx)(B,{})),g||(g=(0,l.jsx)(E,{}))]})})]})},D=e=>({column:i.css`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,title:i.css`
      margin: ${e.spacing(4)} 0;
    `}),$=()=>(0,l.jsxs)("div",{style:{marginTop:"40px",marginBottom:"30px"},children:[m||(m=(0,l.jsx)("h2",{style:L,children:"Get Grafana Enterprise"})),j||(j=(0,l.jsx)(G,{})),(0,l.jsx)("p",{style:{paddingTop:"12px"},children:"You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends."})]}),G=()=>f||(f=(0,l.jsx)(n.LinkButton,{variant:"primary",size:"lg",href:"https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page",children:"Contact us and get a free trial"})),E=()=>(0,l.jsxs)("div",{children:[v||(v=(0,l.jsx)("h4",{children:"At your service"})),b||(b=(0,l.jsxs)(C,{children:[(0,l.jsx)(R,{title:"Enterprise Plugins",image:"public/img/licensing/plugin_enterprise.svg"}),(0,l.jsx)(R,{title:"Critical SLA: 2 hours",image:"public/img/licensing/sla.svg"}),(0,l.jsxs)(R,{title:"Unlimited Expert Support",image:"public/img/licensing/customer_support.svg",children:["24 x 7 x 365 support via",(0,l.jsxs)(C,{nested:!0,children:[(0,l.jsx)(R,{title:"Email"}),(0,l.jsx)(R,{title:"Private Slack channel"}),(0,l.jsx)(R,{title:"Phone"})]})]}),(0,l.jsx)(R,{title:"Hand-in-hand support",image:"public/img/licensing/handinhand_support.svg",children:"in the upgrade process"})]})),(0,l.jsxs)("div",{style:{marginTop:"20px"},children:[y||(y=(0,l.jsx)("strong",{children:"Also included:"})),S||(S=(0,l.jsx)("br",{})),"Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."]}),_||(_=(0,l.jsx)($,{}))]}),B=()=>(0,l.jsxs)("div",{style:{paddingRight:"11px"},children:[k||(k=(0,l.jsx)("h4",{children:"Enhanced functionality"})),w||(w=(0,l.jsx)(M,{}))]}),M=()=>N||(N=(0,l.jsxs)(C,{children:[(0,l.jsx)(R,{title:"Data source permissions"}),(0,l.jsx)(R,{title:"Reporting"}),(0,l.jsx)(R,{title:"SAML authentication"}),(0,l.jsx)(R,{title:"Enhanced LDAP integration"}),(0,l.jsx)(R,{title:"Team Sync",children:"LDAP, GitHub OAuth, Auth Proxy, Okta"}),(0,l.jsx)(R,{title:"White labeling"}),(0,l.jsx)(R,{title:"Auditing"}),(0,l.jsx)(R,{title:"Settings updates at runtime"}),(0,l.jsx)(R,{title:"Grafana usage insights",children:(0,l.jsxs)(C,{nested:!0,children:[(0,l.jsx)(R,{title:"Sort dashboards by popularity in search"}),(0,l.jsx)(R,{title:"Find unused dashboards"}),(0,l.jsx)(R,{title:"Dashboard usage stats drawer"}),(0,l.jsx)(R,{title:"Dashboard presence indicators"})]})}),(0,l.jsx)(R,{title:"Enterprise plugins",children:(0,l.jsxs)(C,{nested:!0,children:[(0,l.jsx)(R,{title:"Oracle"}),(0,l.jsx)(R,{title:"Splunk"}),(0,l.jsx)(R,{title:"Service Now"}),(0,l.jsx)(R,{title:"Dynatrace"}),(0,l.jsx)(R,{title:"New Relic"}),(0,l.jsx)(R,{title:"DataDog"}),(0,l.jsx)(R,{title:"AppDynamics"}),(0,l.jsx)(R,{title:"SAP HANA®"}),(0,l.jsx)(R,{title:"Gitlab"}),(0,l.jsx)(R,{title:"Honeycomb"}),(0,l.jsx)(R,{title:"Jira"}),(0,l.jsx)(R,{title:"MongoDB"}),(0,l.jsx)(R,{title:"Salesforce"}),(0,l.jsx)(R,{title:"Snowflake"}),(0,l.jsx)(R,{title:"Wavefront"})]})})]})),C=e=>{let{children:s,nested:t}=e;const a=i.css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${t?0:8}px;
    }
  `;return(0,l.jsx)("div",{className:a,children:s})},R=e=>{let{children:s,title:t,image:a}=e;const n=a||"public/img/licensing/checkmark.svg",r=i.css`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `,c=i.css`
    font-weight: 500;
    line-height: 1.7;
  `;return(0,l.jsxs)("div",{className:r,children:[(0,l.jsx)("img",{src:n,alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:c,children:t}),s]})]})},T=(0,a.connect)((e=>({navModel:(0,c.h)(e.navIndex,"upgrading")})))(z)},"./public/app/features/plugins/admin/components/Loader.tsx":(e,s,t)=>{t.d(s,{a:()=>r});t("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var a=t("./packages/grafana-ui/src/index.ts"),i=t("./public/app/features/plugins/admin/components/Page.tsx"),n=t("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const r=e=>{let{text:s="Loading..."}=e;return(0,n.jsx)(i.T,{children:(0,n.jsx)("div",{className:"page-loader-wrapper",children:(0,n.jsx)(a.LoadingPlaceholder,{text:s})})})}},"./public/app/features/plugins/admin/components/Page.tsx":(e,s,t)=>{t.d(s,{T:()=>r});t("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var a=t("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=t("./packages/grafana-ui/src/index.ts"),n=t("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const r=e=>{let{children:s}=e;const t=(0,i.useStyles2)(c);return(0,n.jsx)("div",{className:"page-container",children:(0,n.jsx)("div",{className:t,children:s})})},c=e=>a.css`
    margin-bottom: ${e.spacing(3)};
  `}}]);
//# sourceMappingURL=8850.07a78e2e5dfa22b54847.js.map