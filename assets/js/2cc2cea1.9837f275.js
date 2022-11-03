"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4788],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(i),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||n;return i?a.createElement(h,s(s({ref:t},p),{},{components:i})):a.createElement(h,s({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,s=new Array(n);s[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<n;l++)s[l]=i[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},67342:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=i(87462),r=(i(67294),i(3905));const n={id:"index-usingpython",title:"How to collect and process time-series data using Redis and Python",sidebar_label:"RedisTimeSeries and Python",slug:"/howtos/redistimeseries/using-python",authors:["ajeet"]},s=void 0,o={unversionedId:"howtos/redistimeseries/using-python/index-usingpython",id:"howtos/redistimeseries/using-python/index-usingpython",title:"How to collect and process time-series data using Redis and Python",description:"My Image",source:"@site/docs/howtos/redistimeseries/using-python/index-usingpython.mdx",sourceDirName:"howtos/redistimeseries/using-python",slug:"/howtos/redistimeseries/using-python",permalink:"/howtos/redistimeseries/using-python",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redistimeseries/using-python/index-usingpython.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-usingpython",title:"How to collect and process time-series data using Redis and Python",sidebar_label:"RedisTimeSeries and Python",slug:"/howtos/redistimeseries/using-python",authors:["ajeet"]},sidebar:"docs",previous:{title:"Storing and Querying Time Series data",permalink:"/howtos/redistimeseries/getting-started"},next:{title:"Using RedisTimeSeries with .NET",permalink:"/howtos/redistimeseries/using-dotnet"}},d={},l=[{value:"Python Client for RedisTimeSeries",id:"python-client-for-redistimeseries",level:2},{value:"Step 1. Create a free Cloud account",id:"step-1-create-a-free-cloud-account",level:3},{value:"Step 2. Create Your database",id:"step-2-create-your-database",level:3},{value:"Step 3. Verify the database details",id:"step-3-verify-the-database-details",level:3},{value:"Step 4.Installation",id:"step-4installation",level:3},{value:"Step 5. Create a script file",id:"step-5-create-a-script-file",level:3},{value:"Step 6. Executing the python script",id:"step-6-executing-the-python-script",level:3},{value:"Step 7. Monitor the Redis database",id:"step-7-monitor-the-redis-database",level:3},{value:"References",id:"references",level:2}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"My Image",src:i(41232).Z,width:"1196",height:"766"})),(0,r.kt)("p",null,"Time series data is a series of data stored in the time order (Example: Stock performance over time). Industries today are collecting and analyzing time-based data more than ever before. Traditional databases that rely on relational or document data models are designed neither for storing and indexing data based on time, nor for running time-bucketed aggregation queries. Time-series databases fill this void by providing a data model that optimizes data indexing and querying by time."),(0,r.kt)("p",null,"RedisTimeSeries is a Redis module that allows Redis to be used as a fast in-memory time series database designed to collect, manage, and deliver time series data at scale. The RedisTimeSeries module shares the performance and simplicity aspects of Redis. Under the hood, it uses efficient data structures such as Radix tree to index data by timestamp, which makes it extremely fast and efficient to run time-aggregate queries."),(0,r.kt)("h2",{id:"python-client-for-redistimeseries"},"Python Client for RedisTimeSeries"),(0,r.kt)("admonition",{title:"TIP",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"As of redis-py 4.0.0, the redistimeseries-py library is deprecated. It's features have been merged into redis-py. Please either install it from pypy or the repo.")),(0,r.kt)("p",null,"Follow the steps below to get started with RedisTimeSeries with Python:"),(0,r.kt)("h3",{id:"step-1-create-a-free-cloud-account"},"Step 1. Create a free Cloud account"),(0,r.kt)("p",null,"Create your free ",(0,r.kt)("a",{href:"https://redis.com/try-free/",target:"_blank",rel:"noopener"},"Redis Enterprise Cloud account"),". Once you click on \u201cGet Started\u201d, you will receive an email with a link to activate your account and complete your signup process."),(0,r.kt)("admonition",{title:"TIP",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For a limited time, use ",(0,r.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,r.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,r.kt)("p",{parentName:"admonition"},"\ud83c\udf89 ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up"))),(0,r.kt)("h3",{id:"step-2-create-your-database"},"Step 2. Create Your database"),(0,r.kt)("p",null,'Choose your preferred cloud vendor. Select the region and then click "Let\'s start free" to create your free database automatically.'),(0,r.kt)("admonition",{title:"TIP",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'If you want to create a custom database with your preferred name and type of redis,\nclick "Create a custom database" option shown in the image.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create database ",src:i(52519).Z,width:"1676",height:"1010"})),(0,r.kt)("h3",{id:"step-3-verify-the-database-details"},"Step 3. Verify the database details"),(0,r.kt)("p",null,'You will be provided with Public endpoint URL and "Redis Stack" as the type of database with the list of modules that comes by default.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"verify database",src:i(33904).Z,width:"1346",height:"881"})),(0,r.kt)("h3",{id:"step-4installation"},"Step 4.Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ pip install redis\n")),(0,r.kt)("h3",{id:"step-5-create-a-script-file"},"Step 5. Create a script file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," import redis\n r = redis.Redis(host='redis-18386.c110.qa.us-east-1-1.ec2.qa-cloud.redislabs.com', port=<add port>, password=<add password>)\n r.ts().create(2, retension_msecs=5)\n")),(0,r.kt)("p",null,'Save the above file with a name "ts.py".'),(0,r.kt)("h3",{id:"step-6-executing-the-python-script"},"Step 6. Executing the python script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," python3 ts.py\n")),(0,r.kt)("h3",{id:"step-7-monitor-the-redis-database"},"Step 7. Monitor the Redis database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  1648389303.557366 [0 20.127.62.215:59768] "TS.CREATE" "2"\n')),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/redistimeseries/getting-started/"},"Getting Started with RedisTimeSeries")),(0,r.kt)("li",{parentName:"ul"},"Learn more about RedisTimeSeries in the ",(0,r.kt)("a",{parentName:"li",href:"https://oss.redis.com/redistimeseries/"},"Quickstart")," tutorial."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/blog/build-your-financial-application-on-redistimeseries/"},"Build Your Financial Application on RedisTimeSeries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"},"How to Manage Real-Time IoT Sensor Data in Redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=rXynFOrrd-Q"},"Introduction to RedisTimeSeries - Video"))),(0,r.kt)("h2",{id:""}),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}c.isMDXComponent=!0},33904:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/details_database-471fa25198e8a549638e2fc8710b96c0.png"},41232:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/redistimeseries-python-46b664cc5faa36bb37ff7bfef8efbd61.png"},52519:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/select_cloud_vendor-1ad229a2effb7aad2f19495d0cea18fb.png"}}]);