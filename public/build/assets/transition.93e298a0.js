import{r as o,R as y,f as oe,j as we}from"./app.387ff022.js";var Fe=Object.defineProperty,Ce=(e,t,r)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t,r)=>(Ce(e,typeof t!="symbol"?t+"":t,r),r);class Oe{constructor(){Q(this,"current",this.detect()),Q(this,"handoffState","pending"),Q(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let U=new Oe,L=(e,t)=>{U.isServer?o.exports.useEffect(e,t):o.exports.useLayoutEffect(e,t)};function R(e){let t=o.exports.useRef(e);return L(()=>{t.current=e},[e]),t}function Ne(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function k(){let e=[],t={addEventListener(r,n,s,d){return r.addEventListener(n,s,d),t.add(()=>r.removeEventListener(n,s,d))},requestAnimationFrame(...r){let n=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(n))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let n=setTimeout(...r);return t.add(()=>clearTimeout(n))},microTask(...r){let n={current:!0};return Ne(()=>{n.current&&r[0]()}),t.add(()=>{n.current=!1})},style(r,n,s){let d=r.style.getPropertyValue(n);return Object.assign(r.style,{[n]:s}),this.add(()=>{Object.assign(r.style,{[n]:d})})},group(r){let n=k();return r(n),this.add(()=>n.dispose())},add(r){return e.push(r),()=>{let n=e.indexOf(r);if(n>=0)for(let s of e.splice(n,1))s()}},dispose(){for(let r of e.splice(0))r()}};return t}function ae(){let[e]=o.exports.useState(k);return o.exports.useEffect(()=>()=>e.dispose(),[e]),e}let T=function(e){let t=R(e);return y.useCallback((...r)=>t.current(...r),[t])};function je(){let e=typeof document>"u";return"useSyncExternalStore"in oe?(t=>t.useSyncExternalStore)(oe)(()=>()=>{},()=>!1,()=>!e):!1}function ue(){let e=je(),[t,r]=o.exports.useState(U.isHandoffComplete);return t&&U.isHandoffComplete===!1&&r(!1),o.exports.useEffect(()=>{t!==!0&&r(!0)},[t]),o.exports.useEffect(()=>U.handoff(),[]),e?!1:t}function x(e,t,...r){if(e in t){let s=t[e];return typeof s=="function"?s(...r):s}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,x),n}let ce=Symbol();function Xe(e,t=!0){return Object.assign(e,{[ce]:t})}function fe(...e){let t=o.exports.useRef(e);o.exports.useEffect(()=>{t.current=e},[e]);let r=T(n=>{for(let s of t.current)s!=null&&(typeof s=="function"?s(n):s.current=n)});return e.every(n=>n==null||(n==null?void 0:n[ce]))?void 0:r}function I(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var de=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(de||{}),F=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(F||{});function pe({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:s,visible:d=!0,name:p}){let l=me(t,e);if(d)return q(l,r,n,p);let a=s!=null?s:0;if(a&2){let{static:i=!1,...f}=l;if(i)return q(f,r,n,p)}if(a&1){let{unmount:i=!0,...f}=l;return x(i?0:1,{[0](){return null},[1](){return q({...f,hidden:!0,style:{display:"none"}},r,n,p)}})}return q(l,r,n,p)}function q(e,t={},r,n){let{as:s=r,children:d,refName:p="ref",...l}=X(e,["unmount","static"]),a=e.ref!==void 0?{[p]:e.ref}:{},i=typeof d=="function"?d(t):d;"className"in l&&l.className&&typeof l.className=="function"&&(l.className=l.className(t));let f={};if(t){let m=!1,g=[];for(let[h,u]of Object.entries(t))typeof u=="boolean"&&(m=!0),u===!0&&g.push(h);m&&(f["data-headlessui-state"]=g.join(" "))}if(s===o.exports.Fragment&&Object.keys(ie(l)).length>0){if(!o.exports.isValidElement(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map(u=>`  - ${u}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(u=>`  - ${u}`).join(`
`)].join(`
`));let m=i.props,g=typeof(m==null?void 0:m.className)=="function"?(...u)=>I(m==null?void 0:m.className(...u),l.className):I(m==null?void 0:m.className,l.className),h=g?{className:g}:{};return o.exports.cloneElement(i,Object.assign({},me(i.props,ie(X(l,["ref"]))),f,a,$e(i.ref,a.ref),h))}return o.exports.createElement(s,Object.assign({},X(l,["ref"]),s!==o.exports.Fragment&&a,s!==o.exports.Fragment&&f),i)}function $e(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}}function me(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let s in n)s.startsWith("on")&&typeof n[s]=="function"?(r[s]!=null||(r[s]=[]),r[s].push(n[s])):t[s]=n[s];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](s,...d){let p=r[n];for(let l of p){if((s instanceof Event||(s==null?void 0:s.nativeEvent)instanceof Event)&&s.defaultPrevented)return;l(s,...d)}}});return t}function Z(e){var t;return Object.assign(o.exports.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function ie(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function X(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}let ee=o.exports.createContext(null);ee.displayName="OpenClosedContext";var E=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(E||{});function he(){return o.exports.useContext(ee)}function Re({value:e,children:t}){return y.createElement(ee.Provider,{value:e},t)}function te(){let e=o.exports.useRef(!1);return L(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Pe(e=0){let[t,r]=o.exports.useState(e),n=te(),s=o.exports.useCallback(a=>{n.current&&r(i=>i|a)},[t,n]),d=o.exports.useCallback(a=>Boolean(t&a),[t]),p=o.exports.useCallback(a=>{n.current&&r(i=>i&~a)},[r,n]),l=o.exports.useCallback(a=>{n.current&&r(i=>i^a)},[r]);return{flags:t,addFlag:s,hasFlag:d,removeFlag:p,toggleFlag:l}}function Le(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function Y(e,...t){e&&t.length>0&&e.classList.add(...t)}function _(e,...t){e&&t.length>0&&e.classList.remove(...t)}function ke(e,t){let r=k();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:s}=getComputedStyle(e),[d,p]=[n,s].map(a=>{let[i=0]=a.split(",").filter(Boolean).map(f=>f.includes("ms")?parseFloat(f):parseFloat(f)*1e3).sort((f,m)=>m-f);return i}),l=d+p;if(l!==0){r.group(i=>{i.setTimeout(()=>{t(),i.dispose()},l),i.addEventListener(e,"transitionrun",f=>{f.target===f.currentTarget&&i.dispose()})});let a=r.addEventListener(e,"transitionend",i=>{i.target===i.currentTarget&&(t(),a())})}else t();return r.add(()=>t()),r.dispose}function Ae(e,t,r,n){let s=r?"enter":"leave",d=k(),p=n!==void 0?Le(n):()=>{};s==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let l=x(s,{enter:()=>t.enter,leave:()=>t.leave}),a=x(s,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),i=x(s,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return _(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Y(e,...t.base,...l,...i),d.nextFrame(()=>{_(e,...t.base,...l,...i),Y(e,...t.base,...l,...a),ke(e,()=>(_(e,...t.base,...l),Y(e,...t.base,...t.entered),p()))}),d.dispose}function He({immediate:e,container:t,direction:r,classes:n,onStart:s,onStop:d}){let p=te(),l=ae(),a=R(r);L(()=>{e&&(a.current="enter")},[e]),L(()=>{let i=k();l.add(i.dispose);let f=t.current;if(f&&a.current!=="idle"&&p.current)return i.dispose(),s.current(a.current),i.add(Ae(f,n.current,a.current==="enter",()=>{i.dispose(),d.current(a.current)})),i.dispose},[r])}function w(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let B=o.exports.createContext(null);B.displayName="TransitionContext";var De=(e=>(e.Visible="visible",e.Hidden="hidden",e))(De||{});function Me(){let e=o.exports.useContext(B);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function qe(){let e=o.exports.useContext(V);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let V=o.exports.createContext(null);V.displayName="NestingContext";function W(e){return"children"in e?W(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ve(e,t){let r=R(e),n=o.exports.useRef([]),s=te(),d=ae(),p=T((h,u=F.Hidden)=>{let v=n.current.findIndex(({el:c})=>c===h);v!==-1&&(x(u,{[F.Unmount](){n.current.splice(v,1)},[F.Hidden](){n.current[v].state="hidden"}}),d.microTask(()=>{var c;!W(n)&&s.current&&((c=r.current)==null||c.call(r))}))}),l=T(h=>{let u=n.current.find(({el:v})=>v===h);return u?u.state!=="visible"&&(u.state="visible"):n.current.push({el:h,state:"visible"}),()=>p(h,F.Unmount)}),a=o.exports.useRef([]),i=o.exports.useRef(Promise.resolve()),f=o.exports.useRef({enter:[],leave:[],idle:[]}),m=T((h,u,v)=>{a.current.splice(0),t&&(t.chains.current[u]=t.chains.current[u].filter(([c])=>c!==h)),t==null||t.chains.current[u].push([h,new Promise(c=>{a.current.push(c)})]),t==null||t.chains.current[u].push([h,new Promise(c=>{Promise.all(f.current[u].map(([N,j])=>j)).then(()=>c())})]),u==="enter"?i.current=i.current.then(()=>t==null?void 0:t.wait.current).then(()=>v(u)):v(u)}),g=T((h,u,v)=>{Promise.all(f.current[u].splice(0).map(([c,N])=>N)).then(()=>{var c;(c=a.current.shift())==null||c()}).then(()=>v(u))});return o.exports.useMemo(()=>({children:n,register:l,unregister:p,onStart:m,onStop:g,wait:i,chains:f}),[l,p,n,m,g,f,i])}function Ue(){}let Ie=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function le(e){var t;let r={};for(let n of Ie)r[n]=(t=e[n])!=null?t:Ue;return r}function Be(e){let t=o.exports.useRef(le(e));return o.exports.useEffect(()=>{t.current=le(e)},[e]),t}let Ve="div",ge=de.RenderStrategy;function We(e,t){var r,n;let{beforeEnter:s,afterEnter:d,beforeLeave:p,afterLeave:l,enter:a,enterFrom:i,enterTo:f,entered:m,leave:g,leaveFrom:h,leaveTo:u,...v}=e,c=o.exports.useRef(null),N=fe(c,t),j=(r=v.unmount)==null||r?F.Unmount:F.Hidden,{show:b,appear:C,initial:re}=Me(),[O,z]=o.exports.useState(b?"visible":"hidden"),ne=qe(),{register:A,unregister:H}=ne;o.exports.useEffect(()=>A(c),[A,c]),o.exports.useEffect(()=>{if(j===F.Hidden&&c.current){if(b&&O!=="visible"){z("visible");return}return x(O,{hidden:()=>H(c),visible:()=>A(c)})}},[O,c,A,H,b,j]);let G=R({base:w(v.className),enter:w(a),enterFrom:w(i),enterTo:w(f),entered:w(m),leave:w(g),leaveFrom:w(h),leaveTo:w(u)}),D=Be({beforeEnter:s,afterEnter:d,beforeLeave:p,afterLeave:l}),K=ue();o.exports.useEffect(()=>{if(K&&O==="visible"&&c.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[c,O,K]);let xe=re&&!C,se=C&&b&&re,ye=(()=>!K||xe?"idle":b?"enter":"leave")(),P=Pe(0),Ee=T(S=>x(S,{enter:()=>{P.addFlag(E.Opening),D.current.beforeEnter()},leave:()=>{P.addFlag(E.Closing),D.current.beforeLeave()},idle:()=>{}})),Te=T(S=>x(S,{enter:()=>{P.removeFlag(E.Opening),D.current.afterEnter()},leave:()=>{P.removeFlag(E.Closing),D.current.afterLeave()},idle:()=>{}})),M=ve(()=>{z("hidden"),H(c)},ne);He({immediate:se,container:c,classes:G,direction:ye,onStart:R(S=>{M.onStart(c,S,Ee)}),onStop:R(S=>{M.onStop(c,S,Te),S==="leave"&&!W(M)&&(z("hidden"),H(c))})});let $=v,Se={ref:N};return se?$={...$,className:I(v.className,...G.current.enter,...G.current.enterFrom)}:($.className=I(v.className,(n=c.current)==null?void 0:n.className),$.className===""&&delete $.className),y.createElement(V.Provider,{value:M},y.createElement(Re,{value:x(O,{visible:E.Open,hidden:E.Closed})|P.flags},pe({ourProps:Se,theirProps:$,defaultTag:Ve,features:ge,visible:O==="visible",name:"Transition.Child"})))}function ze(e,t){let{show:r,appear:n=!1,unmount:s=!0,...d}=e,p=o.exports.useRef(null),l=fe(p,t);ue();let a=he();if(r===void 0&&a!==null&&(r=(a&E.Open)===E.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[i,f]=o.exports.useState(r?"visible":"hidden"),m=ve(()=>{f("hidden")}),[g,h]=o.exports.useState(!0),u=o.exports.useRef([r]);L(()=>{g!==!1&&u.current[u.current.length-1]!==r&&(u.current.push(r),h(!1))},[u,r]);let v=o.exports.useMemo(()=>({show:r,appear:n,initial:g}),[r,n,g]);o.exports.useEffect(()=>{if(r)f("visible");else if(!W(m))f("hidden");else{let b=p.current;if(!b)return;let C=b.getBoundingClientRect();C.x===0&&C.y===0&&C.width===0&&C.height===0&&f("hidden")}},[r,m]);let c={unmount:s},N=T(()=>{var b;g&&h(!1),(b=e.beforeEnter)==null||b.call(e)}),j=T(()=>{var b;g&&h(!1),(b=e.beforeLeave)==null||b.call(e)});return y.createElement(V.Provider,{value:m},y.createElement(B.Provider,{value:v},pe({ourProps:{...c,as:o.exports.Fragment,children:y.createElement(be,{ref:l,...c,...d,beforeEnter:N,beforeLeave:j})},theirProps:{},defaultTag:o.exports.Fragment,features:ge,visible:i==="visible",name:"Transition"})))}function Ge(e,t){let r=o.exports.useContext(B)!==null,n=he()!==null;return y.createElement(y.Fragment,null,!r&&n?we(J,{ref:t,...e}):y.createElement(be,{ref:t,...e}))}let J=Z(ze),be=Z(We),Ke=Z(Ge),Ye=Object.assign(J,{Child:Ke,Root:J});export{he as C,Z as D,de as S,Xe as T,pe as X,L as a,R as b,Ne as c,k as d,E as e,te as f,ue as l,T as o,ae as p,U as s,Ye as t,x as u,fe as y};