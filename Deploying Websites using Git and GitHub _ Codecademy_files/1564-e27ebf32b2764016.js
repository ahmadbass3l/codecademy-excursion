"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1564],{30957:function(e,r,t){t.d(r,{p:function(){return eD}});var n=t(89426),o=t(82269),i=t(2784),l=t(11906),a=t(2131),c=t(62695),s=t(7558),u=t(62253),d=t(58070),p=t(52322);let b=["type"];function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let j={left:"flex-start",center:"center",right:"flex-end",stretch:"stretch"},y={cta:d.m3,fill:d.Vm},h=e=>{let{type:r="fill"}=e,t=(0,o.Z)(e,b);return(0,p.jsx)(c.s,{size:t.size,children:(0,p.jsxs)(u.zc,{mb:8,alignSelf:"center",justifySelf:j[t.position||"left"],gridTemplateColumns:t.cancel?"auto auto":void 0,children:[t.cancel&&(0,p.jsx)(d.Av,O(O({},t.cancel),{},{mr:32,"data-testid":"cancel-button"})),(0,p.jsx)(l.Mm,{as:y[r],mode:t.mode,disabled:t.disabled,loading:t.loading,children:t.contents})]})})};var g=t(96707),m=t(92952),v=t(43274),w=t(55610),P=t(7806),x=t(64676),D=t(69318),S=t(63955);let E=e=>{let{className:r,field:t,required:n,disabled:o,error:i}=e;return(0,p.jsx)(S.Qr,{defaultValue:!!t.defaultValue,name:t.name,render:e=>{let{field:{value:l,onBlur:a,onChange:c,name:s}}=e;return(0,p.jsx)(P.XZ,{"aria-invalid":i,"aria-required":n,checked:l,className:r,disabled:o,htmlFor:s,id:t.id,label:t.description,multiline:t.multiline,name:s,onBlur:a,onChange:e=>{var r;null===(r=t.onUpdate)||void 0===r||r.call(t,e.target.checked),null==c||c(e.target.checked)},spacing:null==t?void 0:t.spacing})},rules:t.validation})},k=e=>{let{className:r,error:t,field:n,register:o,setValue:i}=e;return(0,p.jsx)(p.Fragment,{children:n.render({className:r,error:t,field:n,register:o,setValue:e=>i(n.name,e)})})},Z=["onChange"];function F(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?F(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let C=e=>{let{className:r,disabled:t,error:n,field:i,register:l,required:a}=e,c=q({},l(i.name,q({},i.validation))),{onChange:s}=c,u=(0,o.Z)(c,Z);return(0,p.jsx)(P.II,q(q({},u),{},{"aria-invalid":n,"aria-required":a,className:r,disabled:t,error:n,htmlFor:i.name,id:i.id,name:i.name,onChange:async e=>{var r;null===(r=i.onUpdate)||void 0===r||r.call(i,e.target.files),await s(e)},type:"file"}))};function z(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function V(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?z(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let N=e=>{let{field:r,register:t}=e;return(0,p.jsx)(P.II,V(V({},t(r.name)),{},{type:r.type}))};var U=t(85505),I=t.n(U);let _=["label","value"];function B(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?B(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let A=e=>{var r;let{className:t,disabled:n,field:l,register:a,setValue:c,required:s,error:u}=e,d=null!==(r=l.ariaLabel)&&void 0!==r?r:I()(l.label)?l.label:void 0;return(0,p.jsx)(P.Ee,{"aria-invalid":u,"aria-label":d,"aria-required":s,className:t,htmlForPrefix:l.name,name:l.name,onChange:e=>{var r;let{value:t}=e.target;c(l.name,t),null===(r=l.onUpdate)||void 0===r||r.call(l,t)},role:"radiogroup",children:l.options.map(e=>{let{label:r,value:t}=e,c=(0,o.Z)(e,_);return(0,i.createElement)(P.Y8,T(T({},a(l.name,l.validation)),{},{disabled:n,key:t,label:r,value:t,id:l.id,error:u},c))})})},G=["onChange"];function M(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function Q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?M(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let R=e=>{let{className:r,disabled:t,error:n,field:i,register:l,required:a}=e,c=Q({},l(i.name,Q({},i.validation))),{onChange:s}=c,u=(0,o.Z)(c,G);return(0,p.jsx)(P.Ph,Q(Q({},u),{},{"aria-invalid":n,"aria-required":a,className:r,defaultValue:i.defaultValue,disabled:t,error:n,htmlFor:i.name,id:i.id,name:i.name,onChange:async e=>{var r;null==i||null===(r=i.onUpdate)||void 0===r||r.call(i,e.target.value),await s(e)},options:i.options}))};function X(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function L(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?X(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let $=e=>{let{register:r,field:{name:t},label:n}=e;return(0,p.jsxs)(u.xu,{height:"1px",left:"100vw",overflow:"hidden",position:"fixed",top:"0",width:"1px",children:[(0,p.jsx)("label",{htmlFor:t,children:n}),(0,p.jsx)(P.II,L(L({},r(t)),{},{type:"checkbox",id:t}))]})},J=["onChange"];function K(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function Y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?K(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let H=e=>{let{className:r,disabled:t,error:n,field:i,register:l,required:a}=e,c=Y({},l(i.name,Y({},i.validation))),{onChange:s}=c,u=(0,o.Z)(c,J);return(0,p.jsx)(P.Kx,Y(Y({},u),{},{"aria-invalid":n,"aria-required":a,className:r,disabled:t,error:n,htmlFor:i.name,id:i.id,name:i.name,onChange:async e=>{var r;null==i||null===(r=i.onUpdate)||void 0===r||r.call(i,e.target.value),await s(e)},placeholder:i.placeholder,rows:i.rows}))},W=["onChange"];function ee(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function er(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ee(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let et=e=>{let{className:r,error:t,field:n,register:i,required:l,disabled:a}=e,c=er({},i(n.name,er({},n.validation))),{onChange:s}=c,u=(0,o.Z)(c,W);return(0,p.jsx)(P.II,er(er({},u),{},{"aria-invalid":t,"aria-required":l,className:r,disabled:a,error:t,htmlFor:n.name,id:n.id,name:n.name,onChange:async e=>{var r;null==n||null===(r=n.onUpdate)||void 0===r||r.call(n,e.target.value),await s(e)},placeholder:n.placeholder,type:n.type}))},en=["error","field","isFirstError","isDisabled"];function eo(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function ei(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?eo(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):eo(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let el=(0,m.Z)(w.e,{target:"esxmdo30",label:"ErrorAnchor"})((0,v.iv)({color:"feedback-error"}),""),ea=e=>{var r,t;let{error:n,field:i,isFirstError:l,isDisabled:a}=e,s=(0,o.Z)(e,en),u=a||i.disabled,d=n||i.customError,b=ei({disabled:u},s),f="checkbox"===i.type&&(null==i?void 0:i.spacing)==="tight",O=()=>{switch(i.type){case"checkbox":return(0,p.jsx)(E,ei({field:i},b));case"custom":case"custom-group":return(0,p.jsx)(k,ei({error:d,field:i},b));case"radio-group":return(0,p.jsx)(A,ei({error:!!d,field:i},b));case"select":return(0,p.jsx)(R,ei({error:!!d,field:i},b));case"file":return(0,p.jsx)(C,ei({error:!!d,field:i},b));case"textarea":return(0,p.jsx)(H,ei({error:!!d,field:i},b));case"hidden":return(0,p.jsx)(N,ei({field:i},b));case"sweet-container":return(0,p.jsx)($,ei({field:i,label:i.label},b));default:return(0,p.jsx)(et,ei({error:!!d,field:i},b))}};if(["hidden","sweet-container"].includes(i.type))return O();if("custom-group"===i.type)return(0,p.jsx)(c.s,{size:null==i?void 0:i.size,rowspan:null!==(t=null==i?void 0:i.rowspan)&&void 0!==t?t:1,children:O()});let j=(0,p.jsx)(P.uP,{disabled:u,htmlFor:i.id||i.name,infotip:i.infotip,required:null==s?void 0:s.required,isSoloField:(null==s?void 0:s.isSoloField)||(null==i?void 0:i.isSoloField),children:i.label});return(0,p.jsx)(c.s,{size:null==i?void 0:i.size,rowspan:null!==(r=null==i?void 0:i.rowspan)&&void 0!==r?r:1,children:(0,p.jsxs)(P.cw,{spacing:f?"tight":"padded",children:[i.hideLabel?(0,p.jsx)(x.M,{children:j}):j,O(),d&&(0,p.jsx)(P.Xq,{role:l?"alert":"status","aria-live":l?"assertive":"off",variant:f?"initial":"absolute",children:(0,p.jsx)(D.U,{overrides:{a:{allowedAttributes:["href","target"],component:el,processNode:(e,r)=>(0,p.jsx)(el,ei({},r))}},skipDefaultOverrides:{a:!0},inline:!0,text:d,spacing:"none"})})]})})},ec=e=>{var r;let{field:t}=e,{error:n,isFirstError:o,register:i,setValue:l,isDisabled:a,isSoloField:c}=(0,g.U$)({name:t.name,disabled:t.disabled}),s=!!("hidden"!==t.type&&"sweet-container"!==t.type&&null!==(r=t.validation)&&void 0!==r&&r.required),u=(0,g.e$)(n);return(0,p.jsx)(ea,{error:u,isFirstError:o,isDisabled:a,field:t,register:i,isSoloField:c,setValue:l,required:s},t.name)},es=e=>{let{fields:r}=e;return(0,p.jsx)(p.Fragment,{children:r.map(e=>(0,p.jsx)(ec,{field:e},e.name))})};var eu=t(58290);function ed(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function ep(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ed(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ed(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let eb=e=>{let{as:r="h2","data-testid":t,showRequired:n,layout:o="center",numberOfFields:i,requiredTextProps:l,title:a,titleWrapperProps:s,variant:d}=e;return(0,p.jsx)(c.s,{size:{_:12,md:"center"===o?12:3},gridRowEnd:{_:"span 1",md:"span ".concat("center"===o?1:i)},"data-testid":t,children:(0,p.jsxs)(u.xu,ep(ep({},s),{},{children:[(0,p.jsx)(eu.x,{as:r,variant:d,children:a}),n&&(0,p.jsx)(P.Qc,ep({},l))]}))})},ef=t(91437).CA.compose(v.By.border,v.By.color,v.By.layout),eO=(0,m.Z)("hr",{target:"evz4fju0",label:"SectionBreak"})(ef,""),ej=()=>(0,p.jsx)(c.s,{size:12,"aria-hidden":!0,children:(0,p.jsx)(eO,{borderTop:"none",borderX:"none",border:1,borderColorBottom:"border-primary","data-testid":"form-section-break",width:"100%"})});var ey=t(86152),eh=t.n(ey);let eg=e=>{switch(e.type){case"checkbox":case"radio-group":return!1;case"select":return eh()(e.options)?e.options[0]:Object.keys(e.options)[0];case"text":case"textarea":return""}},em=["cancel","children","columnGap","fields","hasSoloField","hideRequiredText","requiredTextProps","rowGap","submit","validation"];function ev(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function ew(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ev(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ev(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let eP={_:8,sm:32},ex=e=>(null==e?void 0:e.title)!==void 0;function eD(e){let{cancel:r,children:t,columnGap:n=eP,fields:u=[],hasSoloField:d=!1,hideRequiredText:b=!1,requiredTextProps:f,rowGap:O=16,submit:j,validation:y="onSubmit"}=e,g=(0,o.Z)(e,em),m=u.flatMap(e=>ex(e)?e.fields:e),v=m.reduce((e,r)=>ew(ew({},e),{},{[r.name]:void 0===r.defaultValue?eg(r):r.defaultValue}),{}),w=(0,i.useMemo)(()=>m.filter(e=>"hidden"===e.type||"sweet-container"===e.type),[m]),P=m.length-w.length==1||!0===d,x=!b&&!P;return(0,p.jsx)(l.U2,ew(ew({validation:y,defaultValues:v,display:"flex",flexDirection:"column",isSoloField:P},g),{},{children:(0,p.jsxs)(s.J,{columnGap:n,rowGap:O,children:[(0,p.jsxs)(p.Fragment,{children:[x&&!ex(u[0])&&(0,p.jsx)(c.s,{size:12,children:(0,p.jsx)(a.Q,ew({},f))}),u.map((e,r)=>{let t=u.length;if(ex(e)){let{title:n,as:o,layout:l,fields:a,variant:c}=e;return(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)(eb,{title:n,as:o,layout:l,numberOfFields:a.length,variant:c,showRequired:0===r&&x,requiredTextProps:0===r&&x?f:void 0}),(0,p.jsx)(es,{fields:a}),r+1===t?null:(0,p.jsx)(ej,{})]},n)}return(0,p.jsx)(ec,{field:e},e.name)})]}),(0,p.jsx)(h,ew({cancel:r},j)),t]})}))}}}]);
//# sourceMappingURL=1564-e27ebf32b2764016.js.map