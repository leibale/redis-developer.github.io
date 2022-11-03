"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[149],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(h,s(s({ref:t},l),{},{components:r})):a.createElement(h,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},72656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={id:"index-azure-portal",title:"Create Redis database on Azure Cache",sidebar_label:"Redis on Azure Cache",slug:"/create/azure/portal"},s=void 0,o={unversionedId:"create/azure/portal/index-azure-portal",id:"create/azure/portal/index-azure-portal",title:"Create Redis database on Azure Cache",description:"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and queue. Redis cache delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT. Developers love Redis due to its speed, simplicity and performance.",source:"@site/docs/create/azure/portal/index-azure-portal.mdx",sourceDirName:"create/azure/portal",slug:"/create/azure/portal",permalink:"/create/azure/portal",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/azure/portal/index-azure-portal.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-azure-portal",title:"Create Redis database on Azure Cache",sidebar_label:"Redis on Azure Cache",slug:"/create/azure/portal"},sidebar:"docs",previous:{title:"Overview",permalink:"/create/azure"},next:{title:"Redis Enterprise with Terraform",permalink:"/create/azure/terraform-simple"}},c={},d=[{value:"Step 1. Getting Started",id:"step-1-getting-started",level:3},{value:"Step 2: Setup &amp; Subscribe",id:"step-2-setup--subscribe",level:3},{value:"Step 3: Configuring New Redis Cache Instance",id:"step-3-configuring-new-redis-cache-instance",level:3},{value:"Step 4: Connecting to Redis database",id:"step-4-connecting-to-redis-database",level:3},{value:"Resources",id:"resources",level:3},{value:"Next Steps",id:"next-steps",level:3}],l={toc:d};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and queue. Redis cache delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT. Developers love Redis due to its speed, simplicity and performance."),(0,n.kt)("p",null,"The Azure cloud platform has more than 200+ products and cloud services designed to help you bring new solutions to life-to solve today's challenges and create the future. Azure services help you to build, run, and manage applications across multiple clouds, on-premises, and at the edge, with the tools and frameworks of your choice."),(0,n.kt)("p",null,"Azure Cache for Redis is a native fully-managed service on Microsoft Azure. Azure Cache for Redis offers both the Redis open-source (OSS Redis) and a commercial product from Redis (Redis Enterprise) as a managed service. It provides secure and dedicated Redis server instances and full Redis API compatibility. The service is operated by Microsoft, hosted on Azure, and accessible to any application within or outside of Microsoft Azure."),(0,n.kt)("p",null,"Azure Cache for Redis dashboard uses Azure Monitor to provide several options for monitoring your cache instances.",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-monitor/insights/redis-cache-insights-overview"},"Learn more"),"\nUse Azure Monitor to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"View metrics"),(0,n.kt)("li",{parentName:"ul"},"Pin metrics charts to the Startboard"),(0,n.kt)("li",{parentName:"ul"},"Customize the date and time range of monitoring charts"),(0,n.kt)("li",{parentName:"ul"},"Add and remove metrics from the charts"),(0,n.kt)("li",{parentName:"ul"},"Set alerts when certain conditions are met")),(0,n.kt)("h3",{id:"step-1-getting-started"},"Step 1. Getting Started"),(0,n.kt)("p",null,'Search for "azure redis cache " in the search dashboard and launch ',(0,n.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure Cache for Redis Enterprise")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"RedisLabs Azure Page",src:r(2692).Z,width:"1968",height:"1206"})),(0,n.kt)("h3",{id:"step-2-setup--subscribe"},"Step 2: Setup & Subscribe"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"RedisLabs Azure Page",src:r(78704).Z,width:"2418",height:"1532"})),(0,n.kt)("h3",{id:"step-3-configuring-new-redis-cache-instance"},"Step 3: Configuring New Redis Cache Instance"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"RedisLabs Azure Page",src:r(96942).Z,width:"1744",height:"1078"})),(0,n.kt)("h3",{id:"step-4-connecting-to-redis-database"},"Step 4: Connecting to Redis database"),(0,n.kt)("p",null,"You can directly connect to the Redis cache instances using the Redis CLI command (",(0,n.kt)("inlineCode",{parentName:"p"},"redis-cli"),") as shown:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo redis-cli -h demos.redis.cache.windows.net -p 6379\ndemos.redis.cache.windows.net:6379>\n")),(0,n.kt)("p",null,"Please note that you can have multiple clients connected to a Redis database at the same time. The above Redis client command might require a password if you have setup authentication in your Redis configuration file. You can insert data to Redis using the ",(0,n.kt)("inlineCode",{parentName:"p"},"SET")," command and then fetch it back with the ",(0,n.kt)("inlineCode",{parentName:"p"},"GET")," command. You can also run the Redis ",(0,n.kt)("inlineCode",{parentName:"p"},"INFO")," command to get the statistics about the health of the Redis server (for example, memory usage, Redis server load etc)."),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/t6XQHsKFMKQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("h3",{id:"next-steps"},"Next Steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/develop/dotnet/"},"Getting Started with .Net and Redis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-in/azure/azure-cache-for-redis/cache-best-practices"},"Best Practices for Azure Cache for Redis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-dotnet-how-to-use-azure-redis-cache"},"Quickstart: Use Azure Cache for Redis in .NET Framework"))),(0,n.kt)("h2",{id:""}),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}u.isMDXComponent=!0},96942:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azure5-8984c1bb0210d6b6de210ad8c7fb3dbf.png"},78704:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azure6-073644091c09c764532b06bc28d6c60b.png"},2692:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/azure7-eeafe873b8466c74fc21f0527e99b7cb.png"}}]);