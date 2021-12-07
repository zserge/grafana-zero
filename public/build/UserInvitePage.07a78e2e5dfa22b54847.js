"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7707],{"./public/app/features/org/UserInvitePage.tsx":(e,a,r)=>{r.r(a),r.d(a,{UserInvitePage:()=>b,default:()=>f});r("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var n,i=r("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),s=r("./packages/grafana-ui/src/index.ts"),t=r("./public/app/core/config.ts"),l=r("./public/app/types/index.ts"),c=r("./packages/grafana-runtime/src/index.ts"),o=r("./public/app/core/core.ts"),d=r("./packages/grafana-data/src/index.ts"),u=r("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const p=["ref"];const m=[{label:"Viewer",value:l.B5.Viewer},{label:"Editor",value:l.B5.Editor},{label:"Admin",value:l.B5.Admin}],g=e=>{let{}=e;const a={name:"",email:"",role:l.B5.Editor,sendEmail:!0};return(0,u.jsx)(s.Form,{defaultValues:a,onSubmit:async e=>{try{await(0,c.getBackendSrv)().post("/api/org/invites",e)}catch(e){o.h$.emit(d.AppEvents.alertError,["Failed to send invitation.",e.message])}c.locationService.push("/org/users/")},children:e=>{let{register:a,control:r,errors:i}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Field,{invalid:!!i.loginOrEmail,error:i.loginOrEmail?"Email or username is required":void 0,label:"Email or username",children:(0,u.jsx)(s.Input,Object.assign({},a("loginOrEmail",{required:!0}),{placeholder:"email@example.com"}))}),(0,u.jsx)(s.Field,{invalid:!!i.name,label:"Name",children:(0,u.jsx)(s.Input,Object.assign({},a("name"),{placeholder:"(optional)"}))}),(0,u.jsx)(s.Field,{invalid:!!i.role,label:"Role",children:(0,u.jsx)(s.InputControl,{render:e=>{let{}=e,a=function(e,a){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||(i[r]=e[r]);return i}(e.field,p);return(0,u.jsx)(s.RadioButtonGroup,Object.assign({},a,{options:m}))},control:r,name:"role"})}),(0,u.jsx)(s.Field,{label:"Send invite email",children:(0,u.jsx)(s.Switch,Object.assign({id:"send-email-switch"},a("sendEmail")))}),(0,u.jsxs)(s.HorizontalGroup,{children:[n||(n=(0,u.jsx)(s.Button,{type:"submit",children:"Submit"})),(0,u.jsx)(s.LinkButton,{href:d.locationUtil.assureBaseUrl((0,t.iE)().appSubUrl+"/org/users"),variant:"secondary",children:"Back"})]})]})}})};var h,x,j=r("./public/app/core/selectors/navModel.ts"),v=r("./public/app/core/components/Page/Page.tsx");const b=e=>{let{navModel:a}=e;return(0,u.jsx)(v.Z,{navModel:a,children:(0,u.jsxs)(v.Z.Contents,{children:[h||(h=(0,u.jsx)("h3",{className:"page-sub-heading",children:"Invite user"})),(0,u.jsxs)("div",{className:"p-b-2",children:["Send invitation or add existing Grafana user to the organization.",(0,u.jsxs)("span",{className:"highlight-word",children:[" ",o.Vt.user.orgName]})]}),x||(x=(0,u.jsx)(g,{}))]})})},f=(0,i.connect)((e=>({navModel:(0,j.h)(e.navIndex,"users")})))(b)}}]);
//# sourceMappingURL=UserInvitePage.07a78e2e5dfa22b54847.js.map