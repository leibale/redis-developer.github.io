"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7813],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,d=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),p=l(r),h=s,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=p;var n={};for(var d in t)hasOwnProperty.call(t,d)&&(n[d]=t[d]);n.originalType=e,n.mdxType="string"==typeof e?e:s,o[1]=n;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},90203:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var a=r(87462),s=(r(67294),r(3905));r(44996);const i={id:"index-whatisredis",title:"What is Redis?: An Overview",sidebar_label:"What is Redis?",slug:"/develop/node/nodecrashcourse/whatisredis",authors:["simon"]},o=void 0,n={unversionedId:"develop/node/node-crash-course/whatisredis/index-whatisredis",id:"develop/node/node-crash-course/whatisredis/index-whatisredis",title:"What is Redis?: An Overview",description:"<iframe",source:"@site/docs/develop/node/node-crash-course/whatisredis/index-whatisredis.mdx",sourceDirName:"develop/node/node-crash-course/whatisredis",slug:"/develop/node/nodecrashcourse/whatisredis",permalink:"/develop/node/nodecrashcourse/whatisredis",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/whatisredis/index-whatisredis.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-whatisredis",title:"What is Redis?: An Overview",sidebar_label:"What is Redis?",slug:"/develop/node/nodecrashcourse/whatisredis",authors:["simon"]},sidebar:"docs",previous:{title:"Welcome",permalink:"/develop/node/nodecrashcourse/welcome"},next:{title:"Redis and Node.js",permalink:"/develop/node/nodecrashcourse/redisandnodejs"}},d={},l=[{value:"External Resources",id:"external-resources",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{class:"text--center"},(0,s.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/3P2FDZVKqsA",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,s.kt)("p",null,"Redis is an open source data structure server. It belongs to the class of NoSQL databases known as key/value stores. Keys are unique identifiers, whose value can be one of the data types that Redis supports. These data types range from simple Strings, to Linked Lists, Sets and even Streams. Each data type has its own set of behaviours and commands associated with it."),(0,s.kt)("p",null,'For example, I can store my name in a Redis String and associate it with the key "myname" using a Redis ',(0,s.kt)("a",{parentName:"p",href:"https://redis.io/commands/set"},"SET command"),". I can then retrieve the value using a Redis ",(0,s.kt)("a",{parentName:"p",href:"https://redis.io/commands/get"},"GET command"),". Here's how that looks using redis-cli, a command line interface to Redis:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> set myname "Simon Prickett"\nOK\n127.0.0.1:6379> get myname\n"Simon Prickett"\n')),(0,s.kt)("p",null,"Keys in a Redis database are distributed in a flat keyspace. Redis does not enforce a schema or naming policy for keys. This provides great flexibility, with the organization of the keyspace being the responsibility of the developer. We'll look at ways of managing this later in the course."),(0,s.kt)("p",null,"Redis is famous for being an extremely fast database. This speed comes from the fact that it stores and serves all data from memory rather than disk. Redis is durable, so your data will be persisted, but all reads will be from a copy of the data held in memory. This makes Redis an excellent choice for applications that require real time data access."),(0,s.kt)("p",null,"Redis is also often used as a cache, and has specific functionality to support this. Redis can be extended with new functionality using plugin modules. We'll see how to use some of these as we make our way through the course."),(0,s.kt)("h2",{id:"external-resources"},"External Resources"),(0,s.kt)("p",null,"Here's some resources that we think will be useful to you as you discover Redis:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.io/"},"redis.io")," - the official website of open source Redis."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.com/redis-enterprise-cloud/overview/"},"Redis Enterprise Cloud")," - a fully managed cloud service from Redis - you can try it out using the full featured free tier."),(0,s.kt)("li",{parentName:"ul"},"The official ",(0,s.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/redis/"},"Redis Docker image"),"."),(0,s.kt)("li",{parentName:"ul"},"For a comprehensive introduction to Redis, we recommend taking a look at the ",(0,s.kt)("a",{parentName:"li",href:"https://university.redis.com/courses/ru101/"},"RU101, Introduction to Redis Data Structures")," course at Redis University. In this free online course, you\u2019ll learn about the data structures in Redis, and you\u2019ll see how to practically apply them in the real world.")))}u.isMDXComponent=!0}}]);