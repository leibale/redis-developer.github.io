"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9103],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={id:"index-from-source",title:"Create Redis database from Source",sidebar_label:"Redis from Source",slug:"/create/from-source/",authors:["ajeet"]},o=void 0,s={unversionedId:"create/from-source/index-from-source",id:"create/from-source/index-from-source",title:"Create Redis database from Source",description:"Step 1: Download, extract and compile Redis",source:"@site/docs/create/from-source/index-from-source.mdx",sourceDirName:"create/from-source",slug:"/create/from-source/",permalink:"/create/from-source/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/from-source/index-from-source.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-from-source",title:"Create Redis database from Source",sidebar_label:"Redis from Source",slug:"/create/from-source/",authors:["ajeet"]},sidebar:"docs",previous:{title:"Redis on Windows",permalink:"/create/windows"},next:{title:"Redis using Jenkins",permalink:"/create/jenkins"}},l={},d=[{value:"Step 1: Download, extract and compile Redis",id:"step-1-download-extract-and-compile-redis",level:3},{value:"Step 2: Running Redis Server",id:"step-2-running-redis-server",level:3},{value:"Step 3: Interacting with Redis Client",id:"step-3-interacting-with-redis-client",level:3},{value:"Next Steps",id:"next-steps",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"step-1-download-extract-and-compile-redis"},"Step 1: Download, extract and compile Redis"),(0,a.kt)("p",null,"Redis stands for REmote DIctionary Server. Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and queue. Redis cache delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT."),(0,a.kt)("p",null,"In order to install Redis from source, first you need to download the latest Redis source code.\nThe Redis source code is available to download ",(0,a.kt)("a",{parentName:"p",href:"https://download.redis.io/redis-stable.tar.gz"},"here"),". You can verify the integrity of these downloads by checking them against the digests in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redis/redis-hashes"},"redis-hashes git repository")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget https://download.redis.io/redis-stable.tar.gz\ntar xvzf redis-stable.tar.gz\ncd redis-stable\nmake\n")),(0,a.kt)("p",null,"It is a good idea to copy both the Redis server and the command line interface into the proper places, either manually using the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo cp src/redis-server /usr/local/bin/\nsudo cp src/redis-cli /usr/local/bin/\n")),(0,a.kt)("p",null,"Or just using ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo make install.")),(0,a.kt)("p",null,"The binaries that are now compiled are available in the src directory."),(0,a.kt)("h3",{id:"step-2-running-redis-server"},"Step 2: Running Redis Server"),(0,a.kt)("p",null,"Install the Redis server by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ redis-server\n")),(0,a.kt)("p",null,"Please note that you don't need to restart the Redis service."),(0,a.kt)("h3",{id:"step-3-interacting-with-redis-client"},"Step 3: Interacting with Redis Client"),(0,a.kt)("p",null,"Once the Redis installation has completed, you can use the Redis client to connect to the Redis server.\nUse the following commands to store and retrieve a string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ src/redis-cli\nredis> set foo bar\nOK\nredis> get foo\n"bar"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redis.conf")," is the Redis configuration file, used to configure the behavior of the Redis Server. For more information on the available configuration options, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://redis.io/docs/manual/config/"},"documentation on redis.io"),"."),(0,a.kt)("h3",{id:"next-steps"},"Next Steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight"},"Connect to a Redis database using RedisInsight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/java"},"Develop with Java and Redis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.io/docs/manual/sentinel/"},"High availability with Redis Sentinel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/python"},"Develop with Python and Redis"))))}p.isMDXComponent=!0}}]);