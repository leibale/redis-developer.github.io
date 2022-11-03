"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9156],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(o),m=i,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||n;return o?r.createElement(h,a(a({ref:t},u),{},{components:o})):r.createElement(h,a({ref:t},u))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<n;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},37870:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=o(87462),i=(o(67294),o(3905));o(44996);const n={id:"index-introductiontomodules",title:"Introduction to Redis Modules",sidebar_label:"Introduction to Modules",slug:"/develop/node/nodecrashcourse/introductiontomodules",authors:["simon"]},a=void 0,s={unversionedId:"develop/node/node-crash-course/introductiontomodules/index-introductiontomodules",id:"develop/node/node-crash-course/introductiontomodules/index-introductiontomodules",title:"Introduction to Redis Modules",description:"Redis Modules",source:"@site/docs/develop/node/node-crash-course/introductiontomodules/index-introductiontomodules.mdx",sourceDirName:"develop/node/node-crash-course/introductiontomodules",slug:"/develop/node/nodecrashcourse/introductiontomodules",permalink:"/develop/node/nodecrashcourse/introductiontomodules",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/introductiontomodules/index-introductiontomodules.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-introductiontomodules",title:"Introduction to Redis Modules",sidebar_label:"Introduction to Modules",slug:"/develop/node/nodecrashcourse/introductiontomodules",authors:["simon"]},sidebar:"docs",previous:{title:"Domain Objects with Hashes",permalink:"/develop/node/nodecrashcourse/domainobjectswithhashes"},next:{title:"RedisJSON",permalink:"/develop/node/nodecrashcourse/redisjson"}},l={},d=[{value:"What are Redis Modules?",id:"what-are-redis-modules",level:2},{value:"Where to Find Modules?",id:"where-to-find-modules",level:2},{value:"Using Modules in our Application",id:"using-modules-in-our-application",level:2},{value:"External Resources",id:"external-resources",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Redis Modules",src:o(41124).Z,width:"600",height:"400"})),(0,i.kt)("h2",{id:"what-are-redis-modules"},"What are Redis Modules?"),(0,i.kt)("p",null,"Redis has a Modules API that allows developers to extend its core functionality with new capabilities. Redis Modules are libraries that can be written in C or other languages (including Rust and Zig). Modules can add new commands and/or data structures to Redis. For example, through the addition of modules, Redis can be extended to become a Timeseries or Graph database, while retaining all of its original key/value store functionality."),(0,i.kt)("p",null,"Modules are loaded into the Redis server at startup by modifying the redis.conf configuration file. Application developers then make use of the extra functionality provided by a module simply by calling the module's commands in the same way they would any other Redis command. We'll see how to do this using the ioredis client for Node.js shortly."),(0,i.kt)("h2",{id:"where-to-find-modules"},"Where to Find Modules?"),(0,i.kt)("p",null,"The redis.io website has a ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/modules"},"catalog of available modules"),". Redis has developed a number of these that extend Redis in different ways, and we'll use some of them in our sample application."),(0,i.kt)("p",null,"One way to get started with Redis modules is to use the ",(0,i.kt)("a",{parentName:"p",href:"https://registry.hub.docker.com/r/redislabs/redismod"},"redismod Docker container")," from Docker Hub. This is the container that you're using on this course, and it includes all of the following modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redisearch.io/"},"RediSearch")," - a full-featured search engine."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redisgraph.io/"},"RedisGraph")," - a powerful graph database that uses the Cypher query language."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redistimeseries.io/"},"RedisTimeSeries")," - a timeseries database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redisai.io/"},"RedisAI")," - a tensor storage and AI model server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redisjson.io/"},"RedisJSON")," - adds a native JSON data type to Redis."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redisbloom.io/"},"RedisBloom")," - adds native Bloom and Cuckoo filter data types to Redis, plus other probabilistic data structures."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redisgears.io/"},"RedisGears")," - a dynamic execution framework for running code on the Redis server.")),(0,i.kt)("p",null,"Redis offers Redis Enterprise Cloud, a fully managed service for running and scaling Redis and Redis modules. ",(0,i.kt)("a",{parentName:"p",href:"https://redis.com/try-free/"},"Sign up for Redis Enterprise Cloud")," and use the full-featured free tier to try it out!"),(0,i.kt)("h2",{id:"using-modules-in-our-application"},"Using Modules in our Application"),(0,i.kt)("p",null,"Our social checkin application uses three Redis modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We'll use ",(0,i.kt)("strong",{parentName:"li"},"RediSearch")," to index our user and location Hashes, giving us the ability to perform queries such as:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"Which user is associated with the email address ',(0,i.kt)("inlineCode",{parentName:"li"},"sara.olsen@example.com"),'?"'),(0,i.kt)("li",{parentName:"ul"},'"Find me the users with the most recent checkins".'),(0,i.kt)("li",{parentName:"ul"},'"Find all restaurants within a 3 mile radius of my location that have at least a 3 star rating"'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RedisJSON")," adds commands to store and manipulate JSON documents. We'll use those to retrieve extra detail about each of our locations."),(0,i.kt)("li",{parentName:"ul"},"And finally, we'll take advantage of ",(0,i.kt)("strong",{parentName:"li"},"RedisBloom"),"'s space efficient Bloom filter to stop users from posting duplicate checkins.")),(0,i.kt)("p",null,"In the next section, we'll get to grips with RedisJSON..."),(0,i.kt)("h2",{id:"external-resources"},"External Resources"),(0,i.kt)("p",null,"Check out these links to learn more about which modules are available for Redis and how to use the modules API to create you own:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redis.com/redis-enterprise/modules/"},"Modules in Redis Enterprise")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redis.io/modules"},"List of Redis Modules at redis.io")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redis.io/topics/modules-intro"},"Introduction to the Redis Modules API at redis.io"))))}c.isMDXComponent=!0},41124:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/redis_modules-da5f0215ebe04b5b5bbf99de3688f1cf.png"}}]);