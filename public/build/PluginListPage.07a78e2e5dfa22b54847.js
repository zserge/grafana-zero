"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[94],{"./public/app/features/plugins/admin/components/Badges/index.ts":(e,a,s)=>{s.d(a,{SX:()=>i,IF:()=>p,oZ:()=>c,xh:()=>g});s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var r=s("./packages/grafana-data/src/index.ts"),n=s("./packages/grafana-ui/src/index.ts"),t=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function i(e){let{error:a}=e;const s=function(e){switch(e){case r.PluginErrorCode.modifiedSignature:return"Plugin disabled due to modified content";case r.PluginErrorCode.invalidSignature:return"Plugin disabled due to invalid plugin signature";case r.PluginErrorCode.missingSignature:return"Plugin disabled due to missing plugin signature";default:return`Plugin disabled due to unkown error: ${e}`}}(a);return(0,t.jsx)(n.Badge,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:s})}var l=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");const o=e=>l.css`
  background: ${e.colors.background.primary};
  border-color: ${e.colors.border.strong};
  color: ${e.colors.text.secondary};
`;function c(){const e=(0,n.useStyles2)(o);return(0,t.jsx)(n.Badge,{text:"Installed",color:"orange",className:e})}var u,d=s("./packages/grafana-runtime/src/index.ts");function p(e){var a;let{plugin:s}=e;const r=(0,n.useStyles2)(o);return null!==(a=d.config.licenseInfo)&&void 0!==a&&a.hasValidLicense?u||(u=(0,t.jsx)(n.Badge,{text:"Enterprise",color:"blue"})):(0,t.jsxs)(n.HorizontalGroup,{children:[(0,t.jsx)(n.PluginSignatureBadge,{status:s.signature}),(0,t.jsx)(n.Badge,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:r}),(0,t.jsx)(n.Button,{size:"sm",fill:"text",icon:"external-link-alt",onClick:e=>{e.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${s.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")},children:"Learn more"})]})}function g(e){let{plugin:a}=e;const s=(0,n.useStyles2)(m);return a.hasUpdate&&!a.isCore&&a.type!==r.PluginType.renderer?(0,t.jsx)("p",{className:s.hasUpdate,children:"Update available!"}):null}const m=e=>({hasUpdate:l.css`
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},"./public/app/features/plugins/admin/components/Page.tsx":(e,a,s)=>{s.d(a,{T:()=>i});s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var r=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=s("./packages/grafana-ui/src/index.ts"),t=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i=e=>{let{children:a}=e;const s=(0,n.useStyles2)(l);return(0,t.jsx)("div",{className:"page-container",children:(0,t.jsx)("div",{className:s,children:a})})},l=e=>r.css`
    margin-bottom: ${e.spacing(3)};
  `},"./public/app/features/plugins/admin/components/PluginLogo.tsx":(e,a,s)=>{s.d(a,{E:()=>n});s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var r=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function n(e){let{alt:a,className:s,src:n,height:t}=e;return(0,r.jsx)("img",{src:n,className:s,alt:a,loading:"lazy",height:t})}},"./public/app/features/plugins/admin/pages/Browse.tsx":(e,a,s)=>{s.r(a),s.d(a,{default:()=>$});var r,n=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),t=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=s("./packages/grafana-ui/src/index.ts"),l=s("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js"),o=s("./packages/grafana-runtime/src/index.ts"),c=s("./public/app/features/plugins/admin/types.ts"),u=s("./public/app/features/plugins/admin/components/Badges/index.ts"),d=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function p(e){var a,s;let{plugin:n}=e;return n.isEnterprise?(0,d.jsxs)(i.HorizontalGroup,{height:"auto",wrap:!0,children:[a||(a=(0,d.jsx)(u.IF,{plugin:n})),n.isDisabled&&(0,d.jsx)(u.SX,{error:n.error}),s||(s=(0,d.jsx)(u.xh,{plugin:n}))]}):(0,d.jsxs)(i.HorizontalGroup,{height:"auto",wrap:!0,children:[(0,d.jsx)(i.PluginSignatureBadge,{status:n.signature}),n.isDisabled&&(0,d.jsx)(u.SX,{error:n.error}),n.isInstalled&&(r||(r=(0,d.jsx)(u.oZ,{}))),(0,d.jsx)(u.xh,{plugin:n})]})}var g=s("./public/app/features/plugins/admin/components/PluginLogo.tsx");const m="48px";function f(e){let{plugin:a,pathName:s,displayMode:r=c.lL.Grid}=e;const n=(0,i.useStyles2)(h),l=r===c.lL.List;return(0,d.jsxs)("a",{href:`${s}/${a.id}`,className:(0,t.cx)(n.container,{[n.list]:l}),children:[(0,d.jsx)(g.E,{src:a.info.logos.small,className:n.pluginLogo,height:m,alt:""}),(0,d.jsx)("h2",{className:(0,t.cx)(n.name,"plugin-name"),children:a.name}),(0,d.jsxs)("div",{className:(0,t.cx)(n.content,"plugin-content"),children:[(0,d.jsxs)("p",{children:["By ",a.orgName]}),(0,d.jsx)(p,{plugin:a})]}),(0,d.jsx)("div",{className:n.pluginType,children:a.type&&(0,d.jsx)(i.Icon,{name:c.Co[a.type],title:`${a.type} plugin`})})]})}const h=e=>({container:t.css`
      display: grid;
      grid-template-columns: ${m} 1fr ${e.spacing(3)};
      grid-template-rows: auto;
      gap: ${e.spacing(2)};
      grid-auto-flow: row;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
      padding: ${e.spacing(3)};
      transition: ${e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,list:t.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${e.spacing(0,0,.5,0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,pluginType:t.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${e.colors.text.secondary};
    `,pluginLogo:t.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,content:t.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${e.colors.text.secondary};
    `,name:t.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${e.typography.h4.fontSize};
      color: ${e.colors.text.primary};
      margin: 0;
    `}),x=e=>{let{plugins:a,displayMode:s}=e;const r=s===c.lL.List,n=(0,i.useStyles2)(y),o=(0,l.TH)();return(0,d.jsx)("div",{className:(0,t.cx)(n.container,{[n.list]:r}),"data-testid":"plugin-list",children:a.map((e=>(0,d.jsx)(f,{plugin:e,pathName:o.pathname,displayMode:s},e.id)))})},y=e=>({container:t.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${e.spacing(3)};
    `,list:t.css`
      grid-template-columns: 1fr;
    `});var b=s("./.yarn/__virtual__/react-use-virtual-ca2705900f/0/cache/react-use-npm-17.2.4-c702db5427-3c885c3798.zip/node_modules/react-use/esm/useDebounce.js");const v=e=>{let{value:a,onSearch:s}=e;const[r,t]=(0,n.useState)(a);return function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const r=(0,n.useRef)(!0),t=[...s,r];(0,b.Z)((()=>{if(!r.current)return e();r.current=!1}),a,t)}((()=>s(null!=r?r:"")),500,[r]),(0,d.jsx)(i.FilterInput,{value:r,onKeyDown:e=>{"Enter"!==e.key&&13!==e.keyCode||s(e.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:e=>{t(e)},width:46})};var j=s("./public/app/features/plugins/admin/components/Page.tsx");const S=e=>{let{children:a,wrap:s,className:r}=e;const n=(0,i.useTheme2)(),l=_(n,s);return(0,d.jsx)("div",{className:(0,t.cx)(l.container,r),children:a})},_=(e,a)=>({container:t.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${a?"wrap":"no-wrap"};
    & > * {
      margin-bottom: ${e.spacing()};
      margin-right: ${e.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `});var P=s("./public/app/core/components/Page/Page.tsx"),B=s("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),w=s("./public/app/core/selectors/navModel.ts"),z=s("./public/app/features/plugins/admin/state/hooks.ts"),N=s("./public/app/features/plugins/admin/helpers.ts");function $(e){let{route:a}=e;const s=(0,l.TH)(),r=(0,o.locationSearchToObject)(s.search),n=D(a.routeName),u=(0,B.useSelector)((e=>(0,w.h)(e.navIndex,n))),{displayMode:p,setDisplayMode:g}=(0,z.iY)(),m=(0,i.useStyles2)(k),f={push:e=>{let{query:a}=e;(0,o.getLocationSrv)().update({partial:!0,replace:!1,query:a})}},h=(0,z.y9)(),y=r.q||"",b=r.filterBy||"installed",_=r.filterByType||"all",$=r.sortBy||N.Nh.nameAsc,{isLoading:L,error:C,plugins:T}=(0,z.GE)({query:y,filterBy:b,filterByType:_,sortBy:$}),A=[{value:"all",label:"All"},{value:"installed",label:"Installed"}],E=e=>{f.push({query:{filterBy:e}})};return C?(console.error(C.message),null):(0,d.jsx)(P.T,{navModel:u,children:(0,d.jsx)(P.T.Contents,{children:(0,d.jsxs)(j.T,{children:[(0,d.jsxs)(S,{wrap:!0,children:[(0,d.jsx)(v,{value:y,onSearch:e=>{f.push({query:{filterBy:"all",filterByType:"all",q:e}})}}),(0,d.jsxs)(S,{wrap:!0,className:m.actionBar,children:[(0,d.jsx)("div",{children:(0,d.jsx)(i.RadioButtonGroup,{value:_,onChange:e=>{f.push({query:{filterByType:e}})},options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})}),h?(0,d.jsx)("div",{children:(0,d.jsx)(i.RadioButtonGroup,{value:b,onChange:E,options:A})}):(0,d.jsx)(i.Tooltip,{content:"This filter has been disabled because the Grafana server cannot access grafana.com",placement:"top",children:(0,d.jsx)("div",{children:(0,d.jsx)(i.RadioButtonGroup,{disabled:!0,value:b,onChange:E,options:A})})}),(0,d.jsx)("div",{children:(0,d.jsx)(i.Select,{menuShouldPortal:!0,"aria-label":"Sort Plugins List",width:24,value:$,onChange:e=>{f.push({query:{sortBy:e.value}})},options:[{value:"nameAsc",label:"Sort by name (A-Z)"},{value:"nameDesc",label:"Sort by name (Z-A)"},{value:"updated",label:"Sort by updated date"},{value:"published",label:"Sort by published date"},{value:"downloads",label:"Sort by downloads"}]})}),(0,d.jsx)("div",{children:(0,d.jsx)(i.RadioButtonGroup,{className:m.displayAs,value:p,onChange:g,options:[{value:c.lL.Grid,icon:"table",description:"Display plugins in a grid layout"},{value:c.lL.List,icon:"list-ul",description:"Display plugins in list"}]})})]})]}),(0,d.jsx)("div",{className:m.listWrap,children:L?(0,d.jsx)(i.LoadingPlaceholder,{className:t.css`
                  margin-bottom: 0;
                `,text:"Loading results"}):(0,d.jsx)(x,{plugins:T,displayMode:p})})]})})})}const k=e=>({actionBar:t.css`
    ${e.breakpoints.up("xl")} {
      margin-left: auto;
    }
  `,listWrap:t.css`
    margin-top: ${e.spacing(2)};
  `,displayAs:t.css`
    svg {
      margin-right: 0;
    }
  `}),D=e=>e===c.cd.HomeAdmin||e===c.cd.BrowseAdmin?"admin-plugins":"plugins"},"./public/app/features/plugins/admin/state/hooks.ts":(e,a,s)=>{s.d(a,{iY:()=>C,bt:()=>N,ZV:()=>z,GE:()=>j,UQ:()=>_,bJ:()=>S,x3:()=>P,IS:()=>$,y9:()=>w,S1:()=>B,wq:()=>k});var r=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),n=s("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),t=s("./public/app/features/plugins/admin/state/reducer.ts"),i=s("./public/app/features/plugins/admin/state/actions.ts"),l=s("./.yarn/cache/reselect-npm-4.1.0-69c7ae5e35-ef150c3ccc.zip/node_modules/reselect/es/index.js"),o=s("./public/app/features/plugins/admin/types.ts");const c=e=>e.plugins,u=(0,l.P1)(c,(e=>{let{items:a}=e;return a})),d=(0,l.P1)(c,(e=>{let{settings:a}=e;return a.displayMode})),{selectAll:p,selectById:g}=t.CD.getSelectors(u),m=(e,a)=>(0,l.P1)((e=>(0,l.P1)(p,(a=>a.filter((a=>"installed"===e?a.isInstalled:!a.isCore)))))(e),(e=>e.filter((e=>"all"===a||e.type===a)))),f=(e,a,s)=>(0,l.P1)(m(a,s),(e=>(0,l.P1)(p,(a=>""===e?[]:a.filter((a=>{const s=[];return a.name&&s.push(a.name.toLowerCase()),a.orgName&&s.push(a.orgName.toLowerCase()),s.some((a=>a.includes(e.toLowerCase())))})))))(e),((a,s)=>""===e?a:s)),h=(0,l.P1)(p,(e=>e?e.filter((e=>Boolean(e.error))).map((e=>({pluginId:e.id,errorCode:e.error}))):[])),x=e=>(0,l.P1)(c,(a=>{let{requests:s={}}=a;return s[e]})),y=e=>(0,l.P1)(x(e),(e=>(null==e?void 0:e.status)===o.eE.Pending)),b=e=>(0,l.P1)(x(e),(e=>(null==e?void 0:e.status)===o.eE.Rejected?null==e?void 0:e.error:null));var v=s("./public/app/features/plugins/admin/helpers.ts");const j=e=>{let{query:a="",filterBy:s="installed",filterByType:r="all",sortBy:t=v.Nh.nameAsc}=e;D();const i=(0,n.useSelector)(f(a,s,r)),{isLoading:l,error:o}=z();return{isLoading:l,error:o,plugins:(0,v.AA)(i,t)}},S=e=>(D(),L(e),(0,n.useSelector)((a=>g(a,e)))),_=()=>(D(),(0,n.useSelector)(h)),P=()=>{const e=(0,n.useDispatch)();return(a,s,r)=>e((0,i.N9)({id:a,version:s,isUpdating:r}))},B=()=>{const e=(0,n.useDispatch)();return a=>e((0,i.Tz)(a))},w=()=>null===(0,n.useSelector)(b(i.tQ.typePrefix)),z=()=>({isLoading:(0,n.useSelector)(y(i.Qd.typePrefix)),error:(0,n.useSelector)(b(i.Qd.typePrefix))}),N=()=>({isLoading:(0,n.useSelector)(y(i.DD.typePrefix)),error:(0,n.useSelector)(b(i.DD.typePrefix))}),$=()=>({isInstalling:(0,n.useSelector)(y(i.N9.typePrefix)),error:(0,n.useSelector)(b(i.N9.typePrefix))}),k=()=>({isUninstalling:(0,n.useSelector)(y(i.Tz.typePrefix)),error:(0,n.useSelector)(b(i.Tz.typePrefix))}),D=()=>{const e=(0,n.useDispatch)(),a=(0,n.useSelector)((s=i.Qd.typePrefix,(0,l.P1)(x(s),(e=>void 0===e))));var s;(0,r.useEffect)((()=>{a&&e((0,i.Qd)())}),[])},L=e=>{const a=(0,n.useDispatch)(),s=(0,n.useSelector)((a=>g(a,e))),t=!(0,n.useSelector)(y(i.DD.typePrefix))&&s&&!s.details;(0,r.useEffect)((()=>{t&&a((0,i.DD)(e))}),[s])},C=()=>{const e=(0,n.useDispatch)();return{displayMode:(0,n.useSelector)(d),setDisplayMode:a=>e((0,t.UC)(a))}}}}]);
//# sourceMappingURL=PluginListPage.07a78e2e5dfa22b54847.js.map