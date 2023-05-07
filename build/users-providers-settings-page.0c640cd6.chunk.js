"use strict";(self.webpackChunkap_times=self.webpackChunkap_times||[]).push([[2282],{8971:(ee,w,t)=>{t.r(w),t.d(w,{ProvidersPage:()=>ze,default:()=>nt});var e=t(67294),m=t(97132),r=t(68547),C=t(18721),M=t.n(C),j=t(11700),U=t.n(j),T=t(17034),D=t(67838),R=t(49066),Z=t(185),A=t(14087),f=t(11057),P=t(63985),b=t(47144),O=t(18374),S=t(550),k=t(72735),V=t(63237),s=t(12028),c=t(4585),p=t(23724),n=t(53209),a=t(89031);const g={id:(0,a.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},E={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},h={id:(0,a.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},B={id:(0,a.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},W={id:(0,a.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},z={id:(0,a.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},Q={id:(0,a.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},te={id:(0,a.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:B,name:"enabled",type:"bool",description:h,size:6}]],schema:n.Ry().shape({enabled:n.Xg().required(r.translatedErrors.required)})},providers:{form:[[{intlLabel:B,name:"enabled",type:"bool",description:h,size:6,validations:{required:!0}}],[{intlLabel:W,name:"key",type:"text",placeholder:Q,size:12,validations:{required:!0}}],[{intlLabel:te,name:"secret",type:"text",placeholder:Q,size:12,validations:{required:!0}}],[{intlLabel:g,placeholder:E,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:z,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:n.Ry().shape({enabled:n.Xg().required(r.translatedErrors.required),key:n.Z_().when("enabled",{is:!0,then:n.Z_().required(r.translatedErrors.required),otherwise:n.Z_()}),secret:n.Z_().when("enabled",{is:!0,then:n.Z_().required(r.translatedErrors.required),otherwise:n.Z_()}),callback:n.Z_().when("enabled",{is:!0,then:n.Z_().required(r.translatedErrors.required),otherwise:n.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:B,name:"enabled",type:"bool",description:h,size:6,validations:{required:!0}}],[{intlLabel:W,name:"key",type:"text",placeholder:Q,size:12,validations:{required:!0}}],[{intlLabel:te,name:"secret",type:"text",placeholder:Q,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,a.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,a.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:g,placeholder:E,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:z,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:n.Ry().shape({enabled:n.Xg().required(r.translatedErrors.required),key:n.Z_().when("enabled",{is:!0,then:n.Z_().required(r.translatedErrors.required),otherwise:n.Z_()}),secret:n.Z_().when("enabled",{is:!0,then:n.Z_().required(r.translatedErrors.required),otherwise:n.Z_()}),subdomain:n.Z_().when("enabled",{is:!0,then:n.Z_().required(r.translatedErrors.required),otherwise:n.Z_()}),callback:n.Z_().when("enabled",{is:!0,then:n.Z_().required(r.translatedErrors.required),otherwise:n.Z_()})})}};var re=(l,o,i)=>new Promise(($,F)=>{var X=I=>{try{N(i.next(I))}catch(x){F(x)}},K=I=>{try{N(i.throw(I))}catch(x){F(x)}},N=I=>I.done?$(I.value):Promise.resolve(I.value).then(X,K);N((i=i.apply(l,o)).next())});const ye=l=>re(void 0,null,function*(){try{const{data:o}=yield a.be.get((0,a.Gc)("providers"));return o}catch(o){throw l({type:"warning",message:{id:"notification.error"}}),new Error("error")}}),be=l=>a.be.put((0,a.Gc)("providers"),l);var Me=t(96486);const Te=l=>(0,Me.sortBy)(Object.keys(l).reduce((o,i)=>{const{icon:$,enabled:F,subdomain:X}=l[i],K=$==="envelope"?["fas","envelope"]:["fab",$];return X!==void 0?o.push({name:i,icon:K,enabled:F,subdomain:X}):o.push({name:i,icon:K,enabled:F}),o},[]),"name");var Ee=t(81912),ae=t(29728),d=t(7681),u=t(2407),v=t(11276),L=t(74571),ve=t(42866),me=t(24969),le=t(59946),G=t(36856),J=t(45697),y=t.n(J),fe=t(80831),ie=t(20707),se=t(16364),ne=Object.defineProperty,de=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,ue=(l,o,i)=>o in l?ne(l,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[o]=i,Re=(l,o)=>{for(var i in o||(o={}))ce.call(o,i)&&ue(l,i,o[i]);if(de)for(var i of de(o))xe.call(o,i)&&ue(l,i,o[i]);return l};const Le=({description:l,disabled:o,intlLabel:i,error:$,name:F,onChange:X,placeholder:K,providerToEditName:N,type:I,value:x})=>{const{formatMessage:q}=(0,m.useIntl)(),oe=F==="noName"?`${strapi.backendURL}/api/connect/${N}/callback`:x,pe=q({id:i.id,defaultMessage:i.defaultMessage},Re({provider:N},i.values)),_=l?q({id:l.id,defaultMessage:l.defaultMessage},Re({provider:N},l.values)):"";if(I==="bool")return e.createElement(ie.s,{"aria-label":F,checked:x,disabled:o,hint:_,label:pe,name:F,offLabel:q({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:q({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:ge=>{X({target:{name:F,value:ge.target.checked}})}});const Ie=K?q({id:K.id,defaultMessage:K.defaultMessage},Re({},K.values)):"",De=$?q({id:$,defaultMessage:$}):"";return e.createElement(se.o,{"aria-label":F,disabled:o,error:De,label:pe,name:F,onChange:X,placeholder:Ie,type:I,value:oe})};Le.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},Le.propTypes={description:y().shape({id:y().string.isRequired,defaultMessage:y().string.isRequired,values:y().object}),disabled:y().bool,error:y().string,intlLabel:y().shape({id:y().string.isRequired,defaultMessage:y().string.isRequired,values:y().object}).isRequired,name:y().string.isRequired,onChange:y().func.isRequired,placeholder:y().shape({id:y().string.isRequired,defaultMessage:y().string.isRequired,values:y().object}),providerToEditName:y().string.isRequired,type:y().string.isRequired,value:y().oneOfType([y().bool,y().string])};const Ne=Le;var He=Object.defineProperty,ke=Object.defineProperties,Ve=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,we=(l,o,i)=>o in l?He(l,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[o]=i,Qe=(l,o)=>{for(var i in o||(o={}))Ge.call(o,i)&&we(l,i,o[i]);if(Se)for(var i of Se(o))Xe.call(o,i)&&we(l,i,o[i]);return l},Je=(l,o)=>ke(l,Ve(o));const Ce=({headerBreadcrumbs:l,initialData:o,isSubmiting:i,layout:$,isOpen:F,onSubmit:X,onToggle:K,providerToEditName:N})=>{const{formatMessage:I}=(0,m.useIntl)();return F?e.createElement(ve.P,{onClose:K,labelledBy:"title"},e.createElement(me.x,null,e.createElement(u.O,{label:l.join(", ")},l.map(x=>e.createElement(u.$,{key:x},x)))),e.createElement(fe.Formik,{onSubmit:x=>X(x),initialValues:o,validationSchema:$.schema,validateOnChange:!1},({errors:x,handleChange:q,values:oe})=>e.createElement(r.Form,null,e.createElement(le.f,null,e.createElement(d.K,{spacing:1},e.createElement(v.r,{gap:5},$.form.map(pe=>pe.map(_=>e.createElement(L.P,{key:_.name,col:_.size,xs:12},e.createElement(Ne,Je(Qe({},_),{error:x[_.name],onChange:q,value:oe[_.name],providerToEditName:N})))))))),e.createElement(G.m,{startActions:e.createElement(ae.z,{variant:"tertiary",onClick:K,type:"button"},I({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(ae.z,{type:"submit",loading:i},I({id:"global.save",defaultMessage:"Save"}))})))):null};Ce.defaultProps={initialData:null,providerToEditName:null},Ce.propTypes={headerBreadcrumbs:y().arrayOf(y().string).isRequired,initialData:y().object,layout:y().shape({form:y().arrayOf(y().array),schema:y().object}).isRequired,isOpen:y().bool.isRequired,isSubmiting:y().bool.isRequired,onSubmit:y().func.isRequired,onToggle:y().func.isRequired,providerToEditName:y().string};const Ye=Ce;var qe=Object.defineProperty,_e=Object.defineProperties,et=Object.getOwnPropertyDescriptors,Fe=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,Ze=(l,o,i)=>o in l?qe(l,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[o]=i,Be=(l,o)=>{for(var i in o||(o={}))tt.call(o,i)&&Ze(l,i,o[i]);if(Fe)for(var i of Fe(o))rt.call(o,i)&&Ze(l,i,o[i]);return l},at=(l,o)=>_e(l,et(o)),We=(l,o,i)=>new Promise(($,F)=>{var X=I=>{try{N(i.next(I))}catch(x){F(x)}},K=I=>{try{N(i.throw(I))}catch(x){F(x)}},N=I=>I.done?$(I.value):Promise.resolve(I.value).then(X,K);N((i=i.apply(l,o)).next())});const ze=()=>{const{formatMessage:l}=(0,m.useIntl)();(0,r.useFocusWhenNavigate)();const{notifyStatus:o}=(0,A.G)(),i=(0,p.useQueryClient)(),{trackUsage:$}=(0,r.useTracking)(),F=(0,e.useRef)($),[X,K]=(0,e.useState)(!1),[N,I]=(0,e.useState)(!1),[x,q]=(0,e.useState)(null),oe=(0,r.useNotification)(),{lockApp:pe,unlockApp:_}=(0,r.useOverlayBlocker)(),Ie=(0,e.useMemo)(()=>({update:Ee.Z.updateProviders}),[]),{isLoading:De,allowedActions:{canUpdate:ge}}=(0,r.useRBAC)(Ie),{isLoading:ot,data:Pe,isFetching:lt}=(0,p.useQuery)("get-providers",()=>ye(oe),{onSuccess(){o(l({id:(0,a.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),it=ot||lt,st=(0,p.useMutation)(be,{onSuccess(){return We(this,null,function*(){yield i.invalidateQueries("get-providers"),oe({type:"info",message:{id:(0,a.OB)("notification.success.submit")}}),F.current("didEditAuthenticationProvider"),I(!1),Ae(),_()})},onError(){oe({type:"warning",message:{id:"notification.error"}}),_(),I(!1)},refetchActive:!1}),Oe=(0,e.useMemo)(()=>Te(Pe),[Pe]),dt=Oe.length,Ke=(0,e.useMemo)(()=>{if(!x)return!1;const H=Oe.find(je=>je.name===x);return M()(H,"subdomain")},[Oe,x]),ct=l({id:(0,a.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),ut=(0,e.useMemo)(()=>x==="email"?Y.email:Ke?Y.providersWithSubdomain:Y.providers,[x,Ke]),Ae=()=>{K(H=>!H)},$e=H=>{ge&&(q(H.name),Ae())},pt=H=>We(void 0,null,function*(){I(!0),pe(),F.current("willEditAuthenticationProvider");const je=at(Be({},Pe),{[x]:H});st.mutate({providers:je})});return e.createElement(T.A,null,e.createElement(r.SettingsPageTitle,{name:ct}),e.createElement(Z.o,null,e.createElement(D.T,{title:l({id:(0,a.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),it||De?e.createElement(r.LoadingIndicatorPage,null):e.createElement(R.D,null,e.createElement(f.i,{colCount:3,rowCount:dt+1},e.createElement(P.h,null,e.createElement(b.Tr,null,e.createElement(O.Th,null,e.createElement(k.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(O.Th,null,e.createElement(k.Z,{variant:"sigma",textColor:"neutral600"},l({id:(0,a.OB)("Providers.status"),defaultMessage:"Status"}))),e.createElement(O.Th,null,e.createElement(k.Z,{variant:"sigma"},e.createElement(V.T,null,l({id:"global.settings",defaultMessage:"Settings"})))))),e.createElement(S.p,null,Oe.map(H=>e.createElement(b.Tr,Be({key:H.name},(0,r.onRowClick)({fn:()=>$e(H),condition:ge})),e.createElement(O.Td,{width:"45%"},e.createElement(k.Z,{fontWeight:"semiBold",textColor:"neutral800"},H.name)),e.createElement(O.Td,{width:"65%"},e.createElement(k.Z,{textColor:H.enabled?"success600":"danger600","data-testid":`enable-${H.name}`},H.enabled?l({id:"global.enabled",defaultMessage:"Enabled"}):l({id:"global.disabled",defaultMessage:"Disabled"}))),e.createElement(O.Td,Be({},r.stopPropagation),ge&&e.createElement(s.h,{onClick:()=>$e(H),noBorder:!0,icon:e.createElement(c.Z,null),label:"Edit"})))))))),e.createElement(Ye,{initialData:Pe[x],isOpen:X,isSubmiting:N,layout:ut,headerBreadcrumbs:[l({id:(0,a.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),U()(x)],onToggle:Ae,onSubmit:pt,providerToEditName:x}))},nt=()=>e.createElement(r.CheckPagePermissions,{permissions:Ee.Z.readProviders},e.createElement(ze,null))},46979:(ee,w,t)=>{t.d(w,{Z:()=>U});var e=t(78648),m=t(68547),r=t.n(m),C=(T,D,R)=>new Promise((Z,A)=>{var f=O=>{try{b(R.next(O))}catch(S){A(S)}},P=O=>{try{b(R.throw(O))}catch(S){A(S)}},b=O=>O.done?Z(O.value):Promise.resolve(O.value).then(f,P);b((R=R.apply(T,D)).next())});const M=e.Z.create({baseURL:""});M.interceptors.request.use(T=>C(void 0,null,function*(){return T.headers={Authorization:`Bearer ${m.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},T}),T=>{Promise.reject(T)}),M.interceptors.response.use(T=>T,T=>{var D;throw((D=T.response)==null?void 0:D.status)===401&&(m.auth.clearAppStorage(),window.location.reload()),T});const U=(0,m.wrapAxiosInstance)(M)},89031:(ee,w,t)=>{t.d(w,{be:()=>e.Z,YX:()=>C,Gc:()=>U,OB:()=>T.Z});var e=t(46979),m=t(96486);const C=D=>Object.keys(D).reduce((R,Z)=>{const A=D[Z].controllers,f=Object.keys(A).reduce((P,b)=>((0,m.isEmpty)(A[b])||(P[b]=A[b]),P),{});return(0,m.isEmpty)(f)||(R[Z]={controllers:f}),R},{});var M=t(31498);const U=D=>`/${M.Z}/${D}`;var T=t(84757)},2407:(ee,w,t)=>{t.d(w,{$:()=>S,O:()=>V});var e=t(67294),m=t(45697),r=t(27821),C=t(16405),M=t(72735),j=t(35961),U=t(46273),T=t(63237),D=Object.defineProperty,R=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,f=(s,c,p)=>c in s?D(s,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):s[c]=p,P=(s,c)=>{for(var p in c||(c={}))Z.call(c,p)&&f(s,p,c[p]);if(R)for(var p of R(c))A.call(c,p)&&f(s,p,c[p]);return s},b=(s,c)=>{var p={};for(var n in s)Z.call(s,n)&&c.indexOf(n)<0&&(p[n]=s[n]);if(s!=null&&R)for(var n of R(s))c.indexOf(n)<0&&A.call(s,n)&&(p[n]=s[n]);return p};const O=(0,r.default)(U.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }
  :last-of-type ${j.x} {
    display: none;
  }
  :last-of-type ${M.Z} {
    color: ${({theme:s})=>s.colors.neutral800};
    font-weight: ${({theme:s})=>s.fontWeights.bold};
  }
`,S=({children:s})=>e.createElement(O,{inline:!0,as:"li"},e.createElement(M.Z,{variant:"pi",textColor:"neutral600"},s),e.createElement(j.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},e.createElement(C.default,null)));S.displayName="Crumb",S.propTypes={children:m.node.isRequired};const k=m.shape({type:m.oneOf([S])}),V=s=>{var c=s,{children:p,label:n}=c,a=b(c,["children","label"]);return e.createElement(U.k,P({},a),e.createElement(T.T,null,n),e.createElement("ol",{"aria-hidden":!0},p))};V.displayName="Breadcrumbs",V.propTypes={children:m.oneOfType([m.arrayOf(k),k]).isRequired,label:m.string.isRequired}},49066:(ee,w,t)=>{t.d(w,{D:()=>C});var e=t(67294),m=t(45697),r=t(35961);const C=({children:M})=>e.createElement(r.x,{paddingLeft:10,paddingRight:10},M);C.propTypes={children:m.node.isRequired}},67838:(ee,w,t)=>{t.d(w,{T:()=>c});var e=t(67294),m=t(27821),r=t(45697),C=t(72735),M=t(35961),j=t(46273);const U=a=>{const g=(0,e.useRef)(null),[E,h]=(0,e.useState)(!0),B=([W])=>{h(W.isIntersecting)};return(0,e.useEffect)(()=>{const W=g.current,z=new IntersectionObserver(B,a);return W&&z.observe(g.current),()=>{W&&z.disconnect()}},[g,a]),[g,E]};var T=t(98402);const D=(a,g)=>{const E=(0,T.useCallbackRef)(g);(0,e.useLayoutEffect)(()=>{const h=new ResizeObserver(E);return Array.isArray(a)?a.forEach(B=>{B.current&&h.observe(B.current)}):a.current&&h.observe(a.current),()=>{h.disconnect()}},[a,E])};var R=Object.defineProperty,Z=Object.defineProperties,A=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,O=(a,g,E)=>g in a?R(a,g,{enumerable:!0,configurable:!0,writable:!0,value:E}):a[g]=E,S=(a,g)=>{for(var E in g||(g={}))P.call(g,E)&&O(a,E,g[E]);if(f)for(var E of f(g))b.call(g,E)&&O(a,E,g[E]);return a},k=(a,g)=>Z(a,A(g)),V=(a,g)=>{var E={};for(var h in a)P.call(a,h)&&g.indexOf(h)<0&&(E[h]=a[h]);if(a!=null&&f)for(var h of f(a))g.indexOf(h)<0&&b.call(a,h)&&(E[h]=a[h]);return E};const s=()=>{const a=(0,e.useRef)(null),[g,E]=(0,e.useState)(null),[h,B]=U({root:null,rootMargin:"0px",threshold:0});return D(h,()=>{h.current&&E(h.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{a.current&&E(a.current.getBoundingClientRect())},[a]),{containerRef:h,isVisible:B,baseHeaderLayoutRef:a,headerSize:g}},c=a=>{const{containerRef:g,isVisible:E,baseHeaderLayoutRef:h,headerSize:B}=s();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:B==null?void 0:B.height},ref:g},E&&e.createElement(n,S({ref:h},a))),!E&&e.createElement(n,k(S({},a),{sticky:!0,width:B==null?void 0:B.width})))};c.displayName="HeaderLayout";const p=(0,m.default)(M.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${a=>a.width}px;
  z-index: 4;
  box-shadow: ${({theme:a})=>a.shadows.tableShadow};
`,n=e.forwardRef((a,g)=>{var E=a,{navigationAction:h,primaryAction:B,secondaryAction:W,subtitle:z,title:Q,sticky:te,width:he}=E,Y=V(E,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const re=typeof z=="string";return te?e.createElement(p,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:he,"data-strapi-header-sticky":!0},e.createElement(j.k,{justifyContent:"space-between"},e.createElement(j.k,null,h&&e.createElement(M.x,{paddingRight:3},h),e.createElement(M.x,null,e.createElement(C.Z,S({variant:"beta",as:"h1"},Y),Q),re?e.createElement(C.Z,{variant:"pi",textColor:"neutral600"},z):z),W?e.createElement(M.x,{paddingLeft:4},W):null),e.createElement(j.k,null,B?e.createElement(M.x,{paddingLeft:2},B):void 0))):e.createElement(M.x,{ref:g,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:h?6:8,background:"neutral100","data-strapi-header":!0},h?e.createElement(M.x,{paddingBottom:2},h):null,e.createElement(j.k,{justifyContent:"space-between"},e.createElement(j.k,null,e.createElement(C.Z,S({as:"h1",variant:"alpha"},Y),Q),W?e.createElement(M.x,{paddingLeft:4},W):null),B),re?e.createElement(C.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},z):z)});n.displayName="BaseHeaderLayout",n.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},n.propTypes={navigationAction:r.node,primaryAction:r.node,secondaryAction:r.node,sticky:r.bool,subtitle:r.oneOfType([r.string,r.node]),title:r.string.isRequired,width:r.number},c.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},c.propTypes={navigationAction:r.node,primaryAction:r.node,secondaryAction:r.node,subtitle:r.oneOfType([r.string,r.node]),title:r.string.isRequired}},17034:(ee,w,t)=>{t.d(w,{A:()=>U});var e=t(67294),m=t(45697),r=t(27821),C=t(35961);const M=(0,r.default)(C.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:T})=>T?"auto 1fr":"1fr"};
`,j=(0,r.default)(C.x)`
  overflow-x: hidden;
`,U=({sideNav:T,children:D})=>e.createElement(M,{hasSideNav:Boolean(T)},T,e.createElement(j,{paddingBottom:10},D));U.defaultProps={sideNav:void 0},U.propTypes={children:m.node.isRequired,sideNav:m.node}},185:(ee,w,t)=>{t.d(w,{o:()=>A});var e=t(67294),m=t(45697),r=t(27821),C=Object.defineProperty,M=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,T=(f,P,b)=>P in f?C(f,P,{enumerable:!0,configurable:!0,writable:!0,value:b}):f[P]=b,D=(f,P)=>{for(var b in P||(P={}))j.call(P,b)&&T(f,b,P[b]);if(M)for(var b of M(P))U.call(P,b)&&T(f,b,P[b]);return f},R=(f,P)=>{var b={};for(var O in f)j.call(f,O)&&P.indexOf(O)<0&&(b[O]=f[O]);if(f!=null&&M)for(var O of M(f))P.indexOf(O)<0&&U.call(f,O)&&(b[O]=f[O]);return b};const Z=r.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,A=f=>{var P=f,{labelledBy:b}=P,O=R(P,["labelledBy"]);const S=b||"main-content-title";return e.createElement(Z,D({"aria-labelledby":S,id:"main-content",tabIndex:-1},O))};A.defaultProps={labelledBy:void 0},A.propTypes={labelledBy:m.string}},39785:(ee,w,t)=>{t.d(w,{A:()=>V});var e=t(67294),m=t(45697),r=t(27821),C=t(86647),M=t(35961),j=t(72735),U=t(46273),T=t(15585),D=Object.defineProperty,R=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,f=(s,c,p)=>c in s?D(s,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):s[c]=p,P=(s,c)=>{for(var p in c||(c={}))Z.call(c,p)&&f(s,p,c[p]);if(R)for(var p of R(c))A.call(c,p)&&f(s,p,c[p]);return s},b=(s,c)=>{var p={};for(var n in s)Z.call(s,n)&&c.indexOf(n)<0&&(p[n]=s[n]);if(s!=null&&R)for(var n of R(s))c.indexOf(n)<0&&A.call(s,n)&&(p[n]=s[n]);return p};const O=r.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,S=r.default.div`
  animation: ${O} 2s infinite linear;
  will-change: transform;
`,k=(0,r.default)(U.k)`
  background: transparent;
  border: none;

  &[aria-disabled='true'] {
    pointer-events: none;
    svg path {
      fill: ${({theme:s})=>s.colors.neutral600};
    }
  }

  svg {
    display: flex;
    font-size: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:s})=>s.colors.primary600};
  }

  ${T.BF}
`,V=e.forwardRef((s,c)=>{var p=s,{children:n,startIcon:a,endIcon:g,onClick:E,disabled:h,loading:B}=p,W=b(p,["children","startIcon","endIcon","onClick","disabled","loading"]);const z=E&&!h?E:void 0,Q=h||B;return e.createElement(k,P({ref:c,"aria-disabled":Q,onClick:z,as:"button",type:"button"},W),(a||B)&&e.createElement(M.x,{as:"span",paddingRight:2,"aria-hidden":!0},B?e.createElement(S,null,e.createElement(C.default,null)):a),e.createElement(j.Z,{variant:"pi",textColor:Q?"neutral600":"primary600"},n),g&&e.createElement(M.x,{as:"span",paddingLeft:2,"aria-hidden":!0},g))});V.displayName="TextButton",V.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,loading:!1,onClick:void 0},V.propTypes={children:m.node.isRequired,disabled:m.bool,endIcon:m.element,loading:m.bool,onClick:m.func,startIcon:m.element}},20707:(ee,w,t)=>{t.d(w,{s:()=>ae});var e=t(67294),m=t(27821),r=t(45697),C=t(75228),M=t(41762),j=t(54574),U=t(64777),T=t(63428),D=t(96404),R=t(7681),Z=t(46273),A=t(39785),f=t(15585),P=t(72735),b=t(63237),O=t(35961),S=t(88262),k=Object.defineProperty,V=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(d,u,v)=>u in d?k(d,u,{enumerable:!0,configurable:!0,writable:!0,value:v}):d[u]=v,g=(d,u)=>{for(var v in u||(u={}))p.call(u,v)&&a(d,v,u[v]);if(c)for(var v of c(u))n.call(u,v)&&a(d,v,u[v]);return d},E=(d,u)=>V(d,s(u)),h=(d,u)=>{var v={};for(var L in d)p.call(d,L)&&u.indexOf(L)<0&&(v[L]=d[L]);if(d!=null&&c)for(var L of c(d))u.indexOf(L)<0&&n.call(d,L)&&(v[L]=d[L]);return v};const B=m.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,W=(0,m.default)(O.x)`
  cursor: ${({disabled:d})=>d?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${(0,f.k3)()}
`,z=(0,m.default)(Z.k).attrs({hasRadius:!0})`
  background-color: ${({theme:d,checked:u,disabled:v})=>u?v?d.colors.neutral200:d.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:d,checked:u,disabled:v})=>u&&u!==null?v?d.colors.neutral300:d.colors.neutral200:v?d.colors.neutral150:d.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:d})=>`${d==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:d})=>`${d==="S"?"2px":"6px"}`};
`,Q=m.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,te=e.forwardRef((d,u)=>{var v=d,{size:L,onLabel:ve,offLabel:me,children:le,checked:G,disabled:J,onChange:y}=v,fe=h(v,["size","onLabel","offLabel","children","checked","disabled","onChange"]);const{name:ie,required:se}=(0,S.U)(),ne="neutral600";let de=!G&&G!==null?"danger700":ne,ce=G?"primary600":ne;const xe=ue=>{J||y(ue)};return e.createElement(B,null,e.createElement(b.T,null,le),e.createElement(W,{hasRadius:!0,disabled:J,padding:1,display:"flex",background:J?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},e.createElement(z,{size:L,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:G===null?!1:!G,disabled:J},e.createElement(P.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:J?"neutral700":de},me)),e.createElement(z,{size:L,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:G===null?!1:G,disabled:J},e.createElement(P.Z,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:J?"neutral700":ce},ve)),e.createElement(Q,E(g({type:"checkbox","aria-disabled":J,onChange:ue=>xe(ue),name:ie,ref:u,"aria-required":se},fe),{checked:!(G===null||!G)}))))});te.displayName="ToggleCheckbox",te.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},te.propTypes={checked:r.bool,children:r.string.isRequired,disabled:r.bool,offLabel:r.string.isRequired,onChange:r.func,onLabel:r.string.isRequired,size:r.oneOf(Object.keys(C.J.input))};var he=Object.defineProperty,Y=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,be=(d,u,v)=>u in d?he(d,u,{enumerable:!0,configurable:!0,writable:!0,value:v}):d[u]=v,Me=(d,u)=>{for(var v in u||(u={}))re.call(u,v)&&be(d,v,u[v]);if(Y)for(var v of Y(u))ye.call(u,v)&&be(d,v,u[v]);return d},Ue=(d,u)=>{var v={};for(var L in d)re.call(d,L)&&u.indexOf(L)<0&&(v[L]=d[L]);if(d!=null&&Y)for(var L of Y(d))u.indexOf(L)<0&&ye.call(d,L)&&(v[L]=d[L]);return v};const Te=(0,m.default)(j.g)`
  max-width: 320px;
`,Ee=(0,m.default)(A.A)`
  align-self: flex-end;
  margin-left: auto;
`,ae=d=>{var u=d,{disabled:v,size:L,error:ve,hint:me,label:le,name:G,labelAction:J,required:y,id:fe,onClear:ie,clearLabel:se,checked:ne}=u,de=Ue(u,["disabled","size","error","hint","label","name","labelAction","required","id","onClear","clearLabel","checked"]);const ce=(0,M.M)("toggleinput",fe);return e.createElement(Te,{name:G,hint:me,error:ve,id:ce,required:y},e.createElement(R.K,{spacing:1},e.createElement(Z.k,null,e.createElement(U.Q,{action:J},le),se&&ie&&ne!==null&&!v&&e.createElement(Ee,{onClick:ie},se)),e.createElement(te,Me({id:ce,size:L,checked:ne,disabled:v},de),le),e.createElement(T.J,null),e.createElement(D.c,null)))};ae.displayName="ToggleInput",ae.defaultProps={checked:!1,clearLabel:void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},ae.propTypes={checked:r.bool,clearLabel:r.string,disabled:r.bool,error:r.string,hint:r.oneOfType([r.string,r.node,r.arrayOf(r.node)]),id:r.string,label:r.string,labelAction:r.node,name:r.string,onClear:r.func,required:r.bool,size:r.oneOf(Object.keys(C.J.input))}}}]);
