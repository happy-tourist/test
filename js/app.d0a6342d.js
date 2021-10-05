(()=>{"use strict";var e={119:(e,t,r)=>{r(7280),r(5363),r(71);var s=r(8880),n=r(6866),o=r(3673);function a(e,t,r,s,n,a){const i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(i)}const i=(0,o.aZ)({name:"App"});i.render=a;const c=i;var u=r(8764),l=r(7083),d=r(9582),g=r(3507);const f=[{path:"/",name:g.Z.INDEX,component:()=>Promise.all([r.e(736),r.e(454)]).then(r.bind(r,9454)),redirect:{name:g.Z.INDEX_INDEX},children:[{path:"",name:g.Z.INDEX_INDEX,component:()=>Promise.all([r.e(736),r.e(847)]).then(r.bind(r,4847))}]},{path:"/new",name:g.Z.NEW,component:()=>Promise.all([r.e(736),r.e(454)]).then(r.bind(r,9454)),redirect:{name:g.Z.NEW_INDEX},children:[{path:"",name:g.Z.NEW_INDEX,component:()=>Promise.all([r.e(736),r.e(942)]).then(r.bind(r,6942))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(434)]).then(r.bind(r,6434))}],h=f,p=(0,l.BC)((()=>{const e=d.PO,t=(0,d.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("/")});return t}));async function m(e,t){const s="function"===typeof u["default"]?await(0,u["default"])({}):u["default"],{storeKey:o}=await Promise.resolve().then(r.bind(r,8764)),a="function"===typeof p?await p({store:s}):p;s.$router=a;const i=e(c);return i.use(n.Z,t),{app:i,store:s,storeKey:o,router:a}}var v=r(6395);const E={config:{},plugins:{LocalStorage:v.Z}},N="/";async function b({app:e,router:t,store:r,storeKey:s},n){let o=!1;const a=e=>{o=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},i=window.location.href.replace(window.location.origin,"");for(let u=0;!1===o&&u<n.length;u++)try{await n[u]({app:e,router:t,store:r,ssrContext:null,redirect:a,urlPath:i,publicPath:N})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&(e.use(t),e.use(r,s),e.mount("#q-app"))}m(s.ri,E).then((e=>Promise.all([Promise.resolve().then(r.bind(r,5474))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));b(e,r)}))))},5474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i,api:()=>a});var s=r(7083),n=r(52),o=r.n(n);const a=o().create({baseURL:"https://api.example.com"}),i=(0,s.xr)((({app:e})=>{e.config.globalProperties.$axios=o(),e.config.globalProperties.$api=a}))},3507:(e,t,r)=>{r.d(t,{Z:()=>s});const s={INDEX:"index",INDEX_INDEX:"index.index",NEW:"new",NEW_INDEX:"new.index"}},9150:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(3507);const n={[s.Z.NEW_INDEX]:{text:"Привет! Я буду помогать тебе в этой игре.",caption:"Приветствие",next:`${s.Z.NEW_INDEX}-1`,storage:!0,route:s.Z.NEW_INDEX,avatar:"cheshire_cat.png",message:s.Z.NEW_INDEX},[`${s.Z.NEW_INDEX}-1`]:{text:"Ты можешь вызвать меня в любой момент, нажав кнопку вопроса.",route:s.Z.NEW_INDEX,avatar:"cheshire_cat.png",message:`${s.Z.NEW_INDEX}-1`,next:`${s.Z.NEW_INDEX}-2`,last:!0},[`${s.Z.NEW_INDEX}-2`]:{text:"Нажимай на поле и впиши своё имя.",route:s.Z.NEW_INDEX,caption:"Куда вводить имя?",avatar:"cheshire_cat.png",storage:!0,message:`${s.Z.NEW_INDEX}-2`,last:!0},[`${s.Z.NEW_INDEX}-3`]:{text:"Отлично! Осталось выбрать персонажа, либо оставить текущего и начинать играть!",route:s.Z.NEW_INDEX,caption:"Имя ввел, что дальше?",avatar:"cheshire_cat.png",storage:!0,message:`${s.Z.NEW_INDEX}-3`,last:!0}}},8764:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var s={};r.r(s),r.d(s,{curMessages:()=>p,message:()=>l,reMessage:()=>d,reShowMessages:()=>h,showedInnerMessages:()=>f,showedMessages:()=>g});var n={};r.r(n),r.d(n,{addShowedMessage:()=>b,setCurMessage:()=>I,setCurMessages:()=>M,setMessage:()=>N,setReMessages:()=>y,setShowedMessages:()=>w});var o={};r.r(o),r.d(o,{addShowedMessage:()=>D,setCurMessage:()=>O,setCurMessages:()=>X,setMessage:()=>_,setReMessage:()=>C,setShowedMessages:()=>Z});var a=r(7083),i=r(7874);function c(){return{message:"",reMessage:"",curMessages:{},showedMessages:[],showedInnerMessages:[]}}var u=r(9150);function l(e){return e.message}function d(e){return e.reMessage}function g(e){return e.showedMessages}function f(e){return e.showedInnerMessages}function h(e){return t=>{const r=Object.values(u.Z).filter((e=>e.route===t));return r.length?r.filter((t=>Object.values(e.showedMessages).includes(t.message))):[]}}function p(e){return e.curMessages}var m=r(515),v=r.n(m);const E={isEquil(e,t){const r=JSON.stringify(e),s=JSON.stringify(t);return r===s},clone(e){return JSON.parse(JSON.stringify(e))}};function N(e,t){e.message=e.curMessages[t]||t}function b(e,t){const r=e.showedMessages.find((e=>e===t)),s=e.showedInnerMessages.find((e=>e===t));r||e.showedMessages.push(t),s||e.showedInnerMessages.push(t)}function w(e,t){e.showedMessages=E.clone(t),e.showedInnerMessages=E.clone(t)}function M(e,t){e.curMessages=t}function y(e,t){e.reMessage=t}function I(e,t){e.curMessages=v()(v()({},e.curMessages),{},{[t.route]:t.message})}function _({commit:e},t){e("setMessage",t)}function D({commit:e},t){e("addShowedMessage",t)}function Z({commit:e},t){e("setShowedMessages",t)}function X({commit:e},t){e("setCurMessages",t)}function O({commit:e},t){e("setCurMessage",t)}function C({commit:e},t){e("setReMessages",t)}const P={namespaced:!0,getters:s,mutations:n,actions:o,state:c},S=(0,a.h)((()=>{const e=(0,i.MT)({modules:{"dialog-top":P},strict:!1});return e}))}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}r.m=e,(()=>{var e=[];r.O=(t,s,n,o)=>{if(!s){var a=1/0;for(l=0;l<e.length;l++){for(var[s,n,o]=e[l],i=!0,c=0;c<s.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](s[c])))?s.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[s,n,o]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,s)=>(r.f[s](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{434:"f76865dc",454:"00cee652",847:"5405bfa8",942:"bc0e88cd"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",454:"5de3fa63",736:"45b96d46",942:"9c839c33"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="ht:";r.l=(s,n,o,a)=>{if(e[s])e[s].push(n);else{var i,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=s),e[s]=[n];var g=(t,r)=>{i.onerror=i.onload=null,clearTimeout(f);var n=e[s];if(delete e[s],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,s)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,n.parentNode.removeChild(n),s(c)}};return n.onerror=n.onload=o,n.href=t,document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var n=r[s],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var a=document.getElementsByTagName("style");for(s=0;s<a.length;s++){n=a[s],o=n.getAttribute("data-href");if(o===e||o===t)return n}},s=s=>new Promise(((n,o)=>{var a=r.miniCssF(s),i=r.p+a;if(t(a,i))return n();e(s,i,n,o)})),n={143:0};r.f.miniCss=(e,t)=>{var r={454:1,942:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=s(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,s)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)s.push(n[2]);else{var o=new Promise(((r,s)=>n=e[t]=[r,s]));s.push(n[2]=o);var a=r.p+r.u(t),i=new Error,c=s=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}};r.l(a,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,s)=>{var n,o,[a,i,c]=s,u=0;if(a.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var l=c(r)}for(t&&t(s);u<a.length;u++)o=a[u],r.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0;return r.O(l)},s=self["webpackChunkht"]=self["webpackChunkht"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=r.O(void 0,[736],(()=>r(119)));s=r.O(s)})();