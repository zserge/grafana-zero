"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4089],{"./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx":(e,a,s)=>{s.d(a,{j:()=>c});var n,t=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=s("./public/app/features/panel/state/util.ts"),i=s("./packages/grafana-ui/src/index.ts"),o=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=e=>{let{onChange:a,maxMenuHeight:s}=e;const o=(0,t.useMemo)((()=>(0,r.x)()),[]),c=(0,t.useMemo)((()=>o.map((e=>({label:e.name,imgUrl:e.info.logos.small,value:e}))).sort(((e,a)=>{var s;return null===(s=e.label)||void 0===s?void 0:s.localeCompare(a.label)}))),[o]),[p,u]=(0,t.useState)([]),m=(0,t.useCallback)((e=>{const s=[];for(const a of e)a.value&&s.push(a.value);a(s),u(e)}),[a]),g=(0,i.useStyles2)(d),h={defaultOptions:!0,getOptionLabel:e=>e.label,getOptionValue:e=>e.value,noOptionsMessage:"No Panel types found",placeholder:"Filter by type",styles:(0,i.resetSelectStyles)(),maxMenuHeight:s,options:c,value:p,onChange:m};return(0,l.jsxs)("div",{className:g.container,children:[p.length>0&&(0,l.jsx)("span",{className:g.clear,onClick:()=>m([]),children:"Clear types"}),(0,l.jsx)(i.MultiSelect,Object.assign({menuShouldPortal:!0},h,{prefix:n||(n=(0,l.jsx)(i.Icon,{name:"filter"})),"aria-label":"Panel Type filter"}))]})};function d(e){return{container:o.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:o.css`
      label: clear;
      text-decoration: underline;
      font-size: ${e.spacing(1.5)};
      position: absolute;
      top: -${e.spacing(2.75)};
      right: 0;
      cursor: pointer;
      color: ${e.colors.text.link};

      &:hover {
        color: ${e.colors.text.maxContrast};
      }
    `}}},"./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx":(e,a,s)=>{s.d(a,{p:()=>z});var n=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),t=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=s("./packages/grafana-ui/src/index.ts"),i=s("./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx"),o=s("./packages/grafana-data/src/index.ts"),l=s("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts"),c=s("./.yarn/__virtual__/@reduxjs-toolkit-virtual-5e60bdbc91/0/cache/@reduxjs-toolkit-npm-1.6.1-a0999c8262-487e340036.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");const d={loadingState:o.LoadingState.Loading,dashboardTitles:[]},p=(0,c.PH)("libraryPanels/delete/searchCompleted"),u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;return p.match(a)?Object.assign({},e,{dashboardTitles:a.payload.dashboards.map((e=>e.title)),loadingState:o.LoadingState.Done}):e};var m=s("./public/app/features/library-panels/state/api.ts");var g,h,b,x,f=s("./public/app/features/library-panels/styles.ts"),y=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const j=e=>{let{libraryPanel:a,onDismiss:s,onConfirm:t}=e;const i=(0,r.useStyles)(f.J),[{dashboardTitles:c,loadingState:b},x]=(0,n.useReducer)(u,d),j=(0,n.useMemo)((()=>(0,l.tb)(x)),[x]);(0,n.useEffect)((()=>{j(function(e){return async function(a){const s=await(0,m.E8)(e.uid);a(p({dashboards:s}))}}(a))}),[j,a]);const S=Boolean(c.length),_=b===o.LoadingState.Done;return(0,y.jsxs)(r.Modal,{className:i.modal,title:"Delete library panel",icon:"trash-alt",onDismiss:s,isOpen:!0,children:[_?null:g||(g=(0,y.jsx)(P,{})),_?(0,y.jsxs)("div",{children:[S?(0,y.jsx)(w,{dashboardTitles:c}):null,S?null:h||(h=(0,y.jsx)(v,{})),(0,y.jsxs)(r.Modal.ButtonRow,{children:[(0,y.jsx)(r.Button,{variant:"secondary",onClick:s,fill:"outline",children:"Cancel"}),(0,y.jsx)(r.Button,{variant:"destructive",onClick:t,disabled:S,children:"Delete"})]})]}):null]})},P=()=>b||(b=(0,y.jsx)("span",{children:"Loading library panel..."})),v=()=>{const e=(0,r.useStyles)(f.J);return(0,y.jsx)("div",{className:e.modalText,children:"Do you want to delete this panel?"})},w=e=>{let{dashboardTitles:a}=e;const s=(0,r.useStyles)(f.J),n=1===a.length?"dashboard.":"dashboards.",t=`${a.length} ${n}`;return 0===a.length?null:(0,y.jsxs)("div",{children:[(0,y.jsxs)("p",{className:s.textInfo,children:["This library panel can not be deleted because it is connected to ",(0,y.jsx)("strong",{children:t})," Remove the library panel from the dashboards listed below and retry."]}),(0,y.jsxs)("table",{className:s.myTable,children:[x||(x=(0,y.jsx)("thead",{children:(0,y.jsx)("tr",{children:(0,y.jsx)("th",{children:"Dashboard name"})})})),(0,y.jsx)("tbody",{children:a.map(((e,a)=>(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:e})},`dash-title-${a}`)))})]})]})};var S,_,k=s("./packages/grafana-runtime/src/index.ts"),C=s("./public/app/features/panel/components/PanelPluginError.tsx");const z=e=>{var a;let{libraryPanel:s,onClick:t,onDelete:r,showSecondaryActions:o}=e;const[l,c]=(0,n.useState)(!1),d=null!==(a=k.config.panels[s.model.type])&&void 0!==a?a:(0,C.X)(s.model.type).meta;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.X,{isCurrent:!1,title:s.name,description:s.description,plugin:d,onClick:()=>null==t?void 0:t(s),onDelete:o?()=>c(!0):void 0,children:(0,y.jsx)($,{libraryPanel:s})}),l&&(0,y.jsx)(j,{libraryPanel:s,onConfirm:()=>{null==r||r(s),c(!1)},onDismiss:()=>c(!1)})]})};function $(e){let{libraryPanel:a}=e;const s=(0,r.useStyles2)(F);return a.meta.folderUid||a.meta.folderName?a.meta.folderUid?(0,y.jsx)("span",{className:s.metaContainer,children:(0,y.jsxs)(r.Link,{href:`/dashboards/f/${a.meta.folderUid}`,children:[_||(_=(0,y.jsx)(r.Icon,{name:"folder-upload",size:"sm"})),(0,y.jsx)("span",{children:a.meta.folderName})]})}):(0,y.jsxs)("span",{className:s.metaContainer,children:[S||(S=(0,y.jsx)(r.Icon,{name:"folder",size:"sm"})),(0,y.jsx)("span",{children:a.meta.folderName})]}):null}function F(e){return{metaContainer:t.css`
      display: flex;
      align-items: center;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      padding-top: ${e.spacing(.5)};

      svg {
        margin-right: ${e.spacing(.5)};
        margin-bottom: 3px;
      }
    `}}},"./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx":(e,a,s)=>{s.d(a,{N:()=>k,e:()=>_});var n,t=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=s("./packages/grafana-ui/src/index.ts"),i=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=s("./public/app/core/components/Select/SortPicker.tsx"),l=s("./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx"),c=s("./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx"),d=s("./public/app/core/constants.ts"),p=s("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js"),u=s.n(p),m=s("./public/app/types/index.ts"),g=s("./public/app/core/services/backend_srv.ts"),h=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function b(e){let{onChange:a,maxMenuHeight:s}=e;const i=(0,r.useStyles2)(x),[o,l]=(0,t.useState)(!1),c=(0,t.useCallback)((e=>async function(e,a){a(!0);const s={query:e,type:"dash-folder",permission:m.bf.View},n=(await(0,g.i)().search(s)).map((e=>({label:e.title,value:{id:e.id,title:e.title}})));e&&!"general".includes(e.toLowerCase())||n.unshift({label:"General",value:{id:0,title:"General"}});return a(!1),n}(e,l)),[]),d=(0,t.useMemo)((()=>u()(c,300)),[c]),[p,b]=(0,t.useState)([]),f=(0,t.useCallback)((e=>{const s=[];for(const a of e)a.value&&s.push(a.value);a(s),b(e)}),[a]),y={defaultOptions:!0,isMulti:!0,noOptionsMessage:"No folders found",placeholder:"Filter by folder",styles:(0,r.resetSelectStyles)(),maxMenuHeight:s,value:p,onChange:f};return(0,h.jsxs)("div",{className:i.container,children:[p.length>0&&(0,h.jsx)("span",{className:i.clear,onClick:()=>f([]),children:"Clear folders"}),(0,h.jsx)(r.AsyncMultiSelect,Object.assign({menuShouldPortal:!0},y,{isLoading:o,loadOptions:d,prefix:n||(n=(0,h.jsx)(r.Icon,{name:"filter"})),"aria-label":"Folder filter"}))]})}function x(e){return{container:i.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:i.css`
      label: clear;
      text-decoration: underline;
      font-size: ${e.spacing(1.5)};
      position: absolute;
      top: -${e.spacing(2.75)};
      right: 0;
      cursor: pointer;
      color: ${e.colors.text.link};

      &:hover {
        color: ${e.colors.text.maxContrast};
      }
    `}}var f=s("./.yarn/__virtual__/@reduxjs-toolkit-virtual-5e60bdbc91/0/cache/@reduxjs-toolkit-npm-1.6.1-a0999c8262-487e340036.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");const y={searchQuery:"",panelFilter:[],folderFilter:[],sortDirection:void 0},j=(0,f.PH)("libraryPanels/search/searchChanged"),P=(0,f.PH)("libraryPanels/search/sortChanged"),v=(0,f.PH)("libraryPanels/search/panelFilterChanged"),w=(0,f.PH)("libraryPanels/search/folderFilterChanged"),S=(e,a)=>j.match(a)?Object.assign({},e,{searchQuery:a.payload}):P.match(a)?Object.assign({},e,{sortDirection:a.payload.value}):v.match(a)?Object.assign({},e,{panelFilter:a.payload.map((e=>e.id))}):w.match(a)?Object.assign({},e,{folderFilter:a.payload.map((e=>String(e.id)))}):e;let _;!function(e){e.Tight="tight",e.Spacious="spacious"}(_||(_={}));const k=e=>{var a,s;let{onClick:n,variant:i=_.Spacious,currentPanelId:p,currentFolderId:u,perPage:m=d.gN,showPanelFilter:g=!1,showFolderFilter:x=!1,showSort:f=!1,showSecondaryActions:k=!1}=e;const z=(0,r.useStyles2)(C),[{sortDirection:$,panelFilter:F,folderFilter:L,searchQuery:N},O]=(0,t.useReducer)(S,Object.assign({},y,{folderFilter:u?[u.toString(10)]:[]})),D=e=>O(j(e)),T=e=>O(P(e)),I=e=>O(w(e)),M=e=>O(v(e));return i===_.Spacious?(0,h.jsx)("div",{className:z.container,children:(0,h.jsxs)(r.VerticalGroup,{spacing:"lg",children:[a||(a=(0,h.jsx)(r.FilterInput,{value:N,onChange:D,placeholder:"Search by name or description",width:0})),(0,h.jsxs)(r.HorizontalGroup,{spacing:"sm",justify:f&&g||x?"space-between":"flex-end",children:[f&&(0,h.jsx)(o.P,{value:$,onChange:T,filter:["alpha-asc","alpha-desc"]}),(0,h.jsxs)(r.HorizontalGroup,{spacing:"sm",justify:x&&g?"space-between":"flex-end",children:[x&&(0,h.jsx)(b,{onChange:I}),g&&(0,h.jsx)(l.j,{onChange:M})]})]}),(0,h.jsx)("div",{className:z.libraryPanelsView,children:s||(s=(0,h.jsx)(c.u,{onClickCard:n,searchString:N,sortDirection:$,panelFilter:F,folderFilter:L,currentPanelId:p,showSecondaryActions:k,perPage:m}))})]})}):(0,h.jsx)("div",{className:z.container,children:(0,h.jsxs)(r.VerticalGroup,{spacing:"xs",children:[(0,h.jsxs)("div",{className:z.buttonRow,children:[(0,h.jsx)("div",{className:z.tightFilter,children:(0,h.jsx)(r.FilterInput,{value:N,onChange:D,placeholder:"Search by name",width:0})}),(0,h.jsxs)("div",{className:z.tightSortFilter,children:[f&&(0,h.jsx)(o.P,{value:$,onChange:T}),x&&(0,h.jsx)(b,{onChange:I,maxMenuHeight:200}),g&&(0,h.jsx)(l.j,{onChange:M,maxMenuHeight:200})]})]}),(0,h.jsx)("div",{className:z.libraryPanelsView,children:(0,h.jsx)(c.u,{onClickCard:n,searchString:N,sortDirection:$,panelFilter:F,folderFilter:L,currentPanelId:p,showSecondaryActions:k,perPage:m})})]})})};function C(e){return{container:i.css`
      width: 100%;
      overflow-y: auto;
      padding: ${e.spacing(1)};
    `,buttonRow:i.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${e.spacing(1.5)}; // Clear types link
    `,tightFilter:i.css`
      flex-grow: 1;
    `,tightSortFilter:i.css`
      flex-grow: 1;
      padding: ${e.spacing(0,0,0,.5)};
    `,libraryPanelsView:i.css`
      width: 100%;
    `}}},"./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx":(e,a,s)=>{s.d(a,{u:()=>m});var n,t=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=s("./.yarn/__virtual__/react-use-virtual-ca2705900f/0/cache/react-use-npm-17.2.4-c702db5427-3c885c3798.zip/node_modules/react-use/esm/useDebounce.js"),i=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=s("./packages/grafana-ui/src/index.ts"),l=s("./packages/grafana-data/src/index.ts"),c=s("./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx"),d=s("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts"),p=s("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts"),u=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const m=e=>{let{className:a,onClickCard:s,searchString:m,sortDirection:h,panelFilter:b,folderFilter:x,showSecondaryActions:f,currentPanelId:y,perPage:j=40}=e;const P=(0,o.useStyles)(g),[{libraryPanels:v,page:w,perPage:S,numberOfPages:_,loadingState:k,currentPanelId:C},z]=(0,t.useReducer)(d._p,Object.assign({},d.p$,{currentPanelId:y,perPage:j})),$=(0,t.useMemo)((()=>(0,p.tb)(z)),[z]);(0,r.Z)((()=>$((0,p.Xu)({searchString:m,sortDirection:h,panelFilter:b,folderFilter:x,page:w,perPage:S,currentPanelId:C}))),300,[m,h,b,x,w,$]);const F=e=>{let{uid:a}=e;return $((0,p.UO)(a,{searchString:m,page:w,perPage:S}))};return(0,u.jsxs)("div",{className:(0,i.cx)(P.container,a),children:[(0,u.jsx)("div",{className:P.libraryPanelList,children:k===l.LoadingState.Loading?n||(n=(0,u.jsx)("p",{children:"Loading library panels..."})):v.length<1?(0,u.jsx)("p",{className:P.noPanelsFound,children:"No library panels found."}):null==v?void 0:v.map(((e,a)=>(0,u.jsx)(c.p,{libraryPanel:e,onDelete:F,onClick:s,showSecondaryActions:f},`library-panel=${a}`)))}),v.length?(0,u.jsx)("div",{className:P.pagination,children:(0,u.jsx)(o.Pagination,{currentPage:w,numberOfPages:_,onNavigate:e=>$((0,d.oO)({page:e})),hideWhenSinglePage:!0})}):null]})},g=e=>({container:i.css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `,libraryPanelList:i.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${e.spacing.sm};
    `,searchHeader:i.css`
      display: flex;
    `,newPanelButton:i.css`
      margin-top: 10px;
      align-self: flex-start;
    `,pagination:i.css`
      align-self: center;
      margin-top: ${e.spacing.sm};
    `,noPanelsFound:i.css`
      label: noPanelsFound;
      min-height: 200px;
    `})},"./public/app/features/library-panels/components/LibraryPanelsView/actions.ts":(e,a,s)=>{s.d(a,{Xu:()=>b,UO:()=>x,tb:()=>f});var n=s("./.yarn/cache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js"),t=s("./.yarn/cache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js"),r=s("./.yarn/cache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js"),i=s("./.yarn/cache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js"),o=s("./.yarn/cache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/observable/timer.js"),l=s("./.yarn/cache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),c=s("./.yarn/cache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js"),d=s("./.yarn/cache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/finalize.js"),p=s("./.yarn/cache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js"),u=s("./.yarn/cache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js"),m=s("./.yarn/cache/rxjs-npm-7.3.0-8a14d1c3d9-e63adb8808.zip/node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),g=s("./public/app/features/library-panels/state/api.ts"),h=s("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts");function b(e){return function(a){const s=new n.w0,b=(0,t.Dp)((0,g.Pq)({searchString:e.searchString,perPage:e.perPage,page:e.page,excludeUid:e.currentPanelId,sortDirection:e.sortDirection,typeFilter:e.panelFilter,folderFilter:e.folderFilter})).pipe((0,l.z)((e=>{let{perPage:a,elements:s,page:n,totalCount:t}=e;return(0,r.of)((0,h.zK)({libraryPanels:s,page:n,perPage:a,totalCount:t}))})),(0,c.K)((a=>(console.error(a),(0,r.of)((0,h.zK)(Object.assign({},h.p$,{page:e.page,perPage:e.perPage})))))),(0,d.x)((()=>s.unsubscribe())),(0,p.B)());s.add((0,i.T)((0,o.H)(50).pipe((0,u.h)((0,h.xU)()),(0,m.R)(b)),b).subscribe(a))}}function x(e,a){return async function(s){try{await(0,g.UO)(e),b(a)(s)}catch(e){console.error(e)}}}function f(e){return function(a){return a instanceof Function?a(e):e(a)}}},"./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts":(e,a,s)=>{s.d(a,{p$:()=>r,xU:()=>i,zK:()=>o,oO:()=>l,_p:()=>c});var n=s("./.yarn/__virtual__/@reduxjs-toolkit-virtual-5e60bdbc91/0/cache/@reduxjs-toolkit-npm-1.6.1-a0999c8262-487e340036.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),t=s("./packages/grafana-data/src/index.ts");const r={loadingState:t.LoadingState.Loading,libraryPanels:[],totalCount:0,perPage:40,page:1,numberOfPages:0,currentPanelId:void 0},i=(0,n.PH)("libraryPanels/view/initSearch"),o=(0,n.PH)("libraryPanels/view/searchCompleted"),l=(0,n.PH)("libraryPanels/view/changePage"),c=(e,a)=>{if(i.match(a))return Object.assign({},e,{loadingState:t.LoadingState.Loading});if(o.match(a)){const{libraryPanels:s,page:n,perPage:r,totalCount:i}=a.payload,o=Math.ceil(i/r);return Object.assign({},e,{libraryPanels:s,perPage:r,totalCount:i,loadingState:t.LoadingState.Done,numberOfPages:o,page:n>o?n-1:n})}return l.match(a)?Object.assign({},e,{page:a.payload.page}):e}},"./public/app/features/library-panels/styles.ts":(e,a,s)=>{s.d(a,{J:()=>t});var n=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");function t(e){return{myTable:n.css`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${e.border.radius.sm};
      border: 1px solid ${e.colors.bg3};
      background: ${e.colors.bg1};
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.md};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${e.typography.size.sm};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${e.spacing.xl};
      }

      tbody > tr:nth-child(odd) {
        background: ${e.colors.bg2};
      }
    `,noteTextbox:n.css`
      margin-bottom: ${e.spacing.xl};
    `,textInfo:n.css`
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.sm};
    `,dashboardSearch:n.css`
      margin-top: ${e.spacing.md};
    `,modal:n.css`
      width: 500px;
    `,modalText:n.css`
      font-size: ${e.typography.heading.h4};
      color: ${e.colors.link};
      margin-bottom: calc(${e.spacing.d} * 2);
      padding-top: ${e.spacing.d};
    `}}},"./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx":(e,a,s)=>{s.d(a,{X:()=>c});s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var n=s("./packages/grafana-data/src/index.ts"),t=s("./packages/grafana-ui/src/index.ts"),r=s("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=s("./packages/grafana-e2e-selectors/src/index.ts"),o=s("./public/app/features/plugins/components/PluginStateInfo.tsx"),l=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=e=>{let{isCurrent:a,title:s,plugin:o,onClick:c,onDelete:u,disabled:m,showBadge:g,description:h,children:b}=e;const x=(0,t.useStyles2)(d),f=(0,r.cx)({[x.item]:!0,[x.disabled]:m||o.state===n.PluginState.deprecated,[x.current]:a});return(0,l.jsxs)("div",{className:f,"aria-label":i.wl.components.PluginVisualization.item(o.name),onClick:m?void 0:c,title:a?"Click again to close this section":o.name,children:[(0,l.jsx)("img",{className:x.img,src:o.info.logos.small,alt:""}),(0,l.jsxs)("div",{className:x.itemContent,children:[(0,l.jsx)("div",{className:x.name,children:s}),h?(0,l.jsx)("span",{className:x.description,children:h}):null,b]}),g&&(0,l.jsx)("div",{className:(0,r.cx)(x.badge,m&&x.disabled),children:(0,l.jsx)(p,{plugin:o})}),u&&(0,l.jsx)(t.IconButton,{name:"trash-alt",onClick:e=>{e.stopPropagation(),u()},"aria-label":"Delete button on panel type card"})]})};c.displayName="PanelTypeCard";const d=e=>({item:r.css`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
      box-shadow: ${e.shadows.z1};
      border: 1px solid ${e.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${e.transitions.create(["background"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,itemContent:r.css`
      position: relative;
      width: 100%;
      padding: ${e.spacing(0,1)};
    `,current:r.css`
      label: currentVisualizationItem;
      border: 1px solid ${e.colors.primary.border};
      background: ${e.colors.action.selected};
    `,disabled:r.css`
      opacity: 0.2;
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,name:r.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightMedium};
      width: 100%;
    `,description:r.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightLight};
      width: 100%;
    `,img:r.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,badge:r.css`
      background: ${e.colors.background.primary};
    `}),p=e=>{let{plugin:a}=e;return(0,n.isUnsignedPluginSignature)(a.signature)?(0,l.jsx)(t.PluginSignatureBadge,{status:a.signature}):(0,l.jsx)(o.u,{state:a.state})};p.displayName="PanelPluginBadge"},"./public/app/features/panel/state/util.ts":(e,a,s)=>{s.d(a,{x:()=>r,r:()=>i});var n=s("./packages/grafana-data/src/index.ts"),t=s("./public/app/core/config.ts");function r(){const e=t.vc.panels;return Object.keys(e).filter((a=>!1===e[a].hideFromList)).map((a=>e[a])).sort(((e,a)=>e.sort-a.sort))}function i(e,a,s){if(!a.length)return e.filter((e=>e.state!==n.PluginState.deprecated||s.id===e.id));const t=a.toLowerCase(),r=[],i=[],o="graph".startsWith(t);for(const a of e){if(a.state===n.PluginState.deprecated&&s.id!==a.id)continue;const e=a.name.toLowerCase().indexOf(t);0===e?r.push(a):e>0?i.push(a):o&&"timeseries"===a.id&&r.push(a)}return r.concat(i)}},"./public/app/features/plugins/components/PluginStateInfo.tsx":(e,a,s)=>{s.d(a,{u:()=>i});s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var n=s("./packages/grafana-ui/src/index.ts"),t=s("./packages/grafana-data/src/index.ts"),r=s("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i=e=>{const a=function(e){switch(e){case t.PluginState.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case t.PluginState.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case t.PluginState.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}(e.state);return a?(0,r.jsx)(n.Badge,{color:a.color,title:a.tooltip,text:a.text,icon:a.icon}):null}}}]);
//# sourceMappingURL=4089.07a78e2e5dfa22b54847.js.map