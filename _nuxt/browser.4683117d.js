import{N as g}from"./entry.30ff268b.js";function m(s,t){for(var u=0;u<t.length;u++){const r=t[u];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in s)){const o=Object.getOwnPropertyDescriptor(r,e);o&&Object.defineProperty(s,e,o.get?o:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}function h(s,t){return t=t||{},new Promise(function(u,r){var e=new XMLHttpRequest,o=[],f=[],a={},l=function(){return{ok:(e.status/100|0)==2,statusText:e.statusText,status:e.status,url:e.responseURL,text:function(){return Promise.resolve(e.responseText)},json:function(){return Promise.resolve(e.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([e.response]))},clone:l,headers:{keys:function(){return o},entries:function(){return f},get:function(i){return a[i.toLowerCase()]},has:function(i){return i.toLowerCase()in a}}}};for(var d in e.open(t.method||"get",s,!0),e.onload=function(){e.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(i,n,c){o.push(n=n.toLowerCase()),f.push([n,c]),a[n]=a[n]?a[n]+","+c:c}),u(l())},e.onerror=r,e.withCredentials=t.credentials=="include",t.headers)e.setRequestHeader(d,t.headers[d]);e.send(t.body||null)})}const y=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),p=g(y);var b=self.fetch||(self.fetch=p.default||p);const w=m({__proto__:null,default:b},[b]);export{w as b};
