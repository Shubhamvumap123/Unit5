(()=>{var e,t,r={375:e=>{e.exports={add:function(e,t){return e+t},mult:function(e,t){return e*t}}},353:(e,t,r)=>{"use strict";e.exports=r.p+"589d8674c3823f86ca4b.png"}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={id:e,exports:{}};return r[e](a,a.exports,n),a.exports}n.m=r,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>e+".bundle.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="day1:",n.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var l,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var s=u[d];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+a){l=s;break}}l||(c=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[o];var p=(t,o)=>{l.onerror=l.onload=null,clearTimeout(m);var n=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),c&&document.head.appendChild(l)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=a);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,a,[i,l,c]=r,u=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);c&&c(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkday1=self.webpackChunkday1||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";var e=n(375),t=n(353);n.e(548).then(n.bind(n,548)),console.log((0,e.add)(5,2)),console.log((0,e.mult)(5,2));const r=document.getElementById("display"),o=document.createElement("div");r.appendChild(o);const a=document.getElementById("text"),i=document.createElement("textarea");document.querySelector("#button").addEventListener("click",(()=>{o.innerHTML=i.value,console.log("k")})),a.append(i);const l=document.querySelector("#logo");console.log("shubha");const c=document.createElement("img");c.setAttribute("src",t),c.setAttribute("class","imglogo"),l.append(c)})()})();