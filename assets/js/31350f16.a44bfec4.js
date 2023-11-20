"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5201],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(r),v=n,h=p["".concat(l,".").concat(v)]||p[v]||u[v]||o;return r?i.createElement(h,a(a({ref:t},c),{},{components:r})):i.createElement(h,a({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=r(87462),n=(r(67294),r(3905));const o={id:"index-redis-server-overview",title:"1.0 Redis Server Overview",sidebar_label:"1.0 Redis Server Overview",slug:"/operate/redis-at-scale/talking-to-redis/redis-server-overview",custom_edit_url:null},a=void 0,s={unversionedId:"operate/redis-at-scale/talking-to-redis/redis-server-overview/index-redis-server-overview",id:"operate/redis-at-scale/talking-to-redis/redis-server-overview/index-redis-server-overview",title:"1.0 Redis Server Overview",description:"<iframe",source:"@site/docs/operate/redis-at-scale/talking-to-redis/redis-server-overview/index-redis-server-overview.mdx",sourceDirName:"operate/redis-at-scale/talking-to-redis/redis-server-overview",slug:"/operate/redis-at-scale/talking-to-redis/redis-server-overview",permalink:"/operate/redis-at-scale/talking-to-redis/redis-server-overview",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1700152680,formattedLastUpdatedAt:"Nov 16, 2023",frontMatter:{id:"index-redis-server-overview",title:"1.0 Redis Server Overview",sidebar_label:"1.0 Redis Server Overview",slug:"/operate/redis-at-scale/talking-to-redis/redis-server-overview",custom_edit_url:null},sidebar:"docs",previous:{title:"Overview",permalink:"/operate/redis-at-scale"},next:{title:"1.1 The Command Line Tool: Redis-CLI",permalink:"/operate/redis-at-scale/talking-to-redis/command-line-tool"}},l={},d=[],c={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("iframe",{width:"896",height:"504",src:"https://www.youtube.com/embed/GnVvrLF7oeE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"As you might already know, Redis is an open source data structure server written in C. You can store multiple data types, like strings, hashes, and streams and access them by a unique key name."),(0,n.kt)("p",null,"For example, if you have a string value \u201cHello World\u201d saved under the key name \u201cgreeting\u201d, you can access it by running the ",(0,n.kt)("b",null,"GET")," command followed by the key name - greeting. All keys in a Redis database are stored in a flat keyspace. There is no enforced schema or naming policy, and the responsibility for organizing the keyspace is left to the developer."),(0,n.kt)("p",null,"The speed Redis is famous for is mostly due to the fact that Redis stores and serves data entirely from RAM instead of disk, as most other databases do. Another contributing factor is its predominantly single-threaded nature: single-threading avoids race conditions and CPU-heavy context switching associated with threads."),(0,n.kt)("p",null,"Indeed, this means that open source Redis can\u2019t take advantage of the processing power of multiple CPU cores, although CPU is rarely the bottleneck with Redis. You are more likely to bump up against memory or network limitations before hitting any CPU limitations. That said, Redis Cloud does let you take advantage of all of the cores on a single machine."),(0,n.kt)("p",null,"Let\u2019s now look at exactly what happens behind the scenes with every Redis request. When a client sends a request to a Redis server, the request is first read from the socket, then parsed and processed and finally, the response is written back to the socket and sent to the user. The reading and especially writing to a socket are expensive operations, so in Redis version 6.0 multi-threaded I/O was introduced. When this feature is enabled, Redis can delegate the time spent reading and writing to I/O sockets over to other threads, freeing up cycles for storing and retrieving data and boosting overall performance by up to a factor of two for some workloads."),(0,n.kt)("p",null,"Throughout the rest of the section, you\u2019ll learn how to use the Redis command-line interface, how to configure your Redis server, and how to choose and tune your Redis client library."))}u.isMDXComponent=!0}}]);