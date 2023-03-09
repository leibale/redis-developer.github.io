"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[250,3325,1947,7297,9570],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=o.createContext({}),c=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,h=m["".concat(d,".").concat(u)]||m[u]||p[u]||n;return r?o.createElement(h,i(i({ref:t},l),{},{components:r})):o.createElement(h,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50358:(e,t,r)=>{r.d(t,{Z:()=>d});var o=r(67294),a=r(52263);const n="authorByline_VoxI",i="authorLabel_a70t",s="authorProfileImage_URwT";const d=function(e){let{frontMatter:t}=e;const{siteConfig:r}=(0,a.Z)(),d=r.customFields.authors;return o.createElement(o.Fragment,null,t.authors&&o.createElement("div",{className:"docAuthors"},o.createElement("hr",null),t.authors.map((e=>o.createElement("div",{key:e,className:n},o.createElement("img",{className:s,src:`/img/${d[e].image?d[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${d[e].name}`}),o.createElement("div",null,o.createElement("div",{className:i},"Author:"),o.createElement("div",null,o.createElement("a",{href:d[e].link,target:"_blank"},d[e].name),", ",d[e].title))))),o.createElement("hr",null)))}},38658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={},i=void 0,s={unversionedId:"howtos/solutions/common-data/microservices-arch",id:"howtos/solutions/common-data/microservices-arch",title:"microservices-arch",description:"You eventually land on the following architecture:",source:"@site/docs/howtos/solutions/common-data/microservices-arch.mdx",sourceDirName:"howtos/solutions/common-data",slug:"/howtos/solutions/common-data/microservices-arch",permalink:"/howtos/solutions/common-data/microservices-arch",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/common-data/microservices-arch.mdx",tags:[],version:"current",lastUpdatedAt:1678312435,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{}},d={},c=[],l={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You eventually land on the following architecture:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"products service")," - handles querying products from the database and returning them to the frontend"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"orders service")," - handles validating and creating orders"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"order history service")," - handles querying a customer's order history"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"payments service")," - handles processing orders for payment"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"api gateway")," - unifies the services under a single endpoint"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"mongodb")," - serves as the write-optimized database, storing orders, order history, products, etc.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You do not need to use MongoDB as your write-optimized database, you can use other databases such as a SQL database as well.")))}p.isMDXComponent=!0},95995:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=r(87462),a=(r(67294),r(3905)),n=r(29621);const i={},s=void 0,d={unversionedId:"howtos/solutions/common-data/microservices-ecommerce",id:"howtos/solutions/common-data/microservices-ecommerce",title:"microservices-ecommerce",description:"The e-commerce microservices application consists of a frontend, built using Next.js with TailwindCSS. The application backend uses Node.js. The data is stored in MongoDB and Redis. Below you will find screenshots of the frontend of the e-commerce app:",source:"@site/docs/howtos/solutions/common-data/microservices-ecommerce.mdx",sourceDirName:"howtos/solutions/common-data",slug:"/howtos/solutions/common-data/microservices-ecommerce",permalink:"/howtos/solutions/common-data/microservices-ecommerce",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/common-data/microservices-ecommerce.mdx",tags:[],version:"current",lastUpdatedAt:1678131735,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{}},c={},l=[],p={toc:l};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The e-commerce microservices application consists of a frontend, built using ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," with ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"TailwindCSS"),". The application backend uses ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js"),". The data is stored in ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB")," and ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/try-free/"},"Redis"),". Below you will find screenshots of the frontend of the e-commerce app:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Dashboard"),": Shows the list of products with search functionality"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"redis microservices e-commerce app frontend products page",src:r(98920).Z,width:"2475",height:"1873"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Shopping Cart"),': Add products to the cart, then checkout using the "Buy Now" button.\n',(0,a.kt)("img",{alt:"redis microservices e-commerce app frontend shopping cart",src:r(53296).Z,width:"2772",height:"1942"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Order history"),": Once an order is placed, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Orders")," link in the top navigation bar will show you the order status and history"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"redis microservices e-commerce app frontend order history page",src:r(28125).Z,width:"2511",height:"1351"})))),(0,a.kt)(n.default,{mdxType:"SourceCode"}))}m.isMDXComponent=!0},29621:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={},i=void 0,s={unversionedId:"howtos/solutions/common-data/microservices-source-code-tip",id:"howtos/solutions/common-data/microservices-source-code-tip",title:"microservices-source-code-tip",description:"Below is a link to the source code for the application used in this tutorial",source:"@site/docs/howtos/solutions/common-data/microservices-source-code-tip.mdx",sourceDirName:"howtos/solutions/common-data",slug:"/howtos/solutions/common-data/microservices-source-code-tip",permalink:"/howtos/solutions/common-data/microservices-source-code-tip",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/common-data/microservices-source-code-tip.mdx",tags:[],version:"current",lastUpdatedAt:1678131735,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{}},d={},c=[],l={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"GITHUB CODE",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Below is a link to the source code for the application used in this tutorial"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/redis-microservices-ecommerce-solutions"},"https://github.com/redis-developer/redis-microservices-ecommerce-solutions"))))}p.isMDXComponent=!0},25384:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={},i=void 0,s={unversionedId:"howtos/solutions/common-data/redis-enterprise",id:"howtos/solutions/common-data/redis-enterprise",title:"redis-enterprise",description:"You can use Redis Enterprise as a multi-model primary database. Redis Enterprise is a fully managed, highly available, secure, and real-time data platform. It can store data on both RAM or Flash. It also supports Active-Active (multi-zone read and write replicas) on different cloud vendors, providing extreme high availability and scalability. Active-Active offers global scalability while maintaining local speed for database reads and writes.",source:"@site/docs/howtos/solutions/common-data/redis-enterprise.mdx",sourceDirName:"howtos/solutions/common-data",slug:"/howtos/solutions/common-data/redis-enterprise",permalink:"/howtos/solutions/common-data/redis-enterprise",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/common-data/redis-enterprise.mdx",tags:[],version:"current",lastUpdatedAt:1678145567,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{}},d={},c=[],l={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use ",(0,a.kt)("strong",{parentName:"p"},"Redis Enterprise")," as a multi-model primary database. Redis Enterprise is a fully managed, highly available, secure, and real-time data platform. It can store data on both RAM or ",(0,a.kt)("strong",{parentName:"p"},"Flash"),". It also supports ",(0,a.kt)("strong",{parentName:"p"},"Active-Active")," (multi-zone read and write replicas) on different cloud vendors, providing extreme high availability and scalability. Active-Active offers global scalability while maintaining local speed for database reads and writes."),(0,a.kt)("p",null,"Redis Enterprise has many built-in modular capabilities, making it a unified, real-time data platform. Redis Enterprise is far more than a document database."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RedisJSON"),": Persists JSON documents"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RediSearch"),": Indexes and searches JSON documents"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RedisGraph"),": A fast and easy-to-use graph database"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RedisBloom:")," Provides bloom filters and other probabilistic data structures"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RedisTimeSeries"),": Supports time series data structures"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RedisGears"),": Syncs data to external databases via different pattern (write-behind/ write-through) or executes custom logic.")),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/"},"RedisInsight")," to view your Redis data or to play with raw Redis commands in the workbench."),(0,a.kt)("p",null,"If you're interested in diving deeper, try ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Redis Enterprise")," today for free!"))}p.isMDXComponent=!0},97355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>m,toc:()=>h});var o=r(87462),a=(r(67294),r(3905)),n=r(50358),i=r(95995),s=r(38658),d=r(29621);r(25384);r.p;const c=r.p+"assets/images/cqrs-architecture-with-cdc-e7323ac92248e51c75bfcb7fe32c0b88.png",l={id:"index-solutions-cqrs",title:"How to build an e-commerce app using Redis with the CQRS Pattern",sidebar_label:"How to build an e-commerce app using Redis with the CQRS Pattern",slug:"/howtos/solutions/cqrs",authors:["prasan","will"]},p=void 0,m={unversionedId:"howtos/solutions/cqrs/index-solutions-cqrs",id:"howtos/solutions/cqrs/index-solutions-cqrs",title:"How to build an e-commerce app using Redis with the CQRS Pattern",description:"What is Command and Query Responsibility Segregation (CQRS)?",source:"@site/docs/howtos/solutions/cqrs/index-cqrs.mdx",sourceDirName:"howtos/solutions/cqrs",slug:"/howtos/solutions/cqrs",permalink:"/howtos/solutions/cqrs",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/cqrs/index-cqrs.mdx",tags:[],version:"current",lastUpdatedAt:1678318016,formattedLastUpdatedAt:"Mar 8, 2023",frontMatter:{id:"index-solutions-cqrs",title:"How to build an e-commerce app using Redis with the CQRS Pattern",sidebar_label:"How to build an e-commerce app using Redis with the CQRS Pattern",slug:"/howtos/solutions/cqrs",authors:["prasan","will"]},sidebar:"docs",previous:{title:"RediSearch Tutorial",permalink:"/howtos/redisearch"},next:{title:"Microservices Communication with Redis streams",permalink:"/howtos/solutions/interservice-communication"}},u={},h=[{value:"What is Command and Query Responsibility Segregation (CQRS)?",id:"what-is-command-and-query-responsibility-segregation-cqrs",level:2},{value:"Why You Might Use CQRS",id:"why-you-might-use-cqrs",level:2},{value:"Microservices CQRS Architecture for an E-commerce Application",id:"microservices-cqrs-architecture-for-an-e-commerce-application",level:2},{value:"Using CQRS in a Microservices Architecture",id:"using-cqrs-in-a-microservices-architecture",level:2},{value:"E-commerce Application Frontend using Next.js and Tailwind",id:"e-commerce-application-frontend-using-nextjs-and-tailwind",level:2},{value:"Building a CQRS Microservices Application with Redis and MongoDB",id:"building-a-cqrs-microservices-application-with-redis-and-mongodb",level:2},{value:"Create Order Command API",id:"create-order-command-api",level:3},{value:"Create Order Request",id:"create-order-request",level:4},{value:"Create Order Response",id:"create-order-response",level:4},{value:"Order History API",id:"order-history-api",level:3},{value:"Order History Request",id:"order-history-request",level:4},{value:"Order History Response",id:"order-history-response",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Additional Resources",id:"additional-resources",level:3}],g={toc:h};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{frontMatter:l,mdxType:"Authors"}),(0,a.kt)(d.default,{mdxType:"SourceCode"}),(0,a.kt)("h2",{id:"what-is-command-and-query-responsibility-segregation-cqrs"},"What is Command and Query Responsibility Segregation (CQRS)?"),(0,a.kt)("p",null,'CQRS is a common pattern used in microservices applications in part to allow for scaling read and write workloads independently. The idea is simple: you separate commands such as "Order this product" (write operation) from queries such as "Show me my order history" (read operation). CQRS applications are often messaging-based and rely on eventual consistency. Below you will find a sample data architecture that demonstrates how Redis is used with CQRS.'),(0,a.kt)("img",{src:c,alt:"CQRS architecture with Redis",width:"500",className:"margin-bottom--md"}),(0,a.kt)("p",null,'The architecture above uses the Change Data Capture (noted as "Integrated CDC") pattern to track the changed state on the command database and replicate it to the query database (Redis). This is a common pattern used with CQRS, and implementing CDC requires:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Taking the data snapshot from the system of record"),(0,a.kt)("li",{parentName:"ol"},"Performing an ETL operation finalized to load the data on the target cache database"),(0,a.kt)("li",{parentName:"ol"},"Setting up a mechanism to stream the changes in the system of record to the cache, continuously")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"While you can implement your own CDC mechanism with Redis using RedisGears, Redis Enterprise comes with its own integrated CDC mechanism to solve this problem for you.")),(0,a.kt)("h2",{id:"why-you-might-use-cqrs"},"Why You Might Use CQRS"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"To improve application performance, scale your read and write operations separately."))),(0,a.kt)("p",null,'Consider the following scenario. You have an e-commerce application that allows a customer to populate a shopping cart with products, and has a "Buy Now" button to facilitate ordering the products. When you first start out, you might set up a database (perhaps a SQL database) and populate it with products. Then you might write a backend API to handle creating the order, creating an invoice, processing payment, handling fulfillment, and updating the customer\'s order history all in one go.'),(0,a.kt)("p",null,"This method of synchronous order processing seems like a good idea, but you quickly find out that your database slows down as you gain more customers and have a higher sales volume. The reality is, most applications have significantly more reads than writes, and you want to be able to scale those operations separately. You decide that you need to process orders quickly so the customer doesn't have to wait. Then, when you have time you can create an invoice, process payment, handle fulfillment, etc. So you decide to separate each of these steps and use a microservices approach with CQRS to allow you to scale your reads and writes independently as well as aid in decoupling your microservices. With a CQRS model, a single service is responsible for handling an entire command from end to end. Once service should not depend on another service in order to complete a command."),(0,a.kt)("h2",{id:"microservices-cqrs-architecture-for-an-e-commerce-application"},"Microservices CQRS Architecture for an E-commerce Application"),(0,a.kt)(s.default,{mdxType:"InitialMicroservicesArchitecture"}),(0,a.kt)("h2",{id:"using-cqrs-in-a-microservices-architecture"},"Using CQRS in a Microservices Architecture"),(0,a.kt)("p",null,"Note that in the current architecture all the services use the same underlying database. Even though we are technically separating reads and writes, we can't scale our write-optimized database independently. This is where Redis comes in. If we put Redis in front of our write-optimized database, we can use it for reads while writing to the write-optimized database. The benefit of Redis is that it is fast for reads and writes, which is why it is the de facto choice for caching and CQRS."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For the purposes of this tutorial we are not highlighting how communication is coordinated between our services, such as how new orders are processed for payment. This is handled using Redis Streams, and is outlined futher in our ",(0,a.kt)("a",{parentName:"p",href:"/howtos/solutions/interservice-communication"},"interservice communication guide"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When your e-commerce app eventually needs to scale across the globe, Redis Enterprise provides Active-Active geo-replication for reads and writes at local latencies as well as availability for 99.999% uptime.")),(0,a.kt)("p",null,"Let's look at some sample code that helps facilitate the CQRS pattern with Redis and MongoDB."),(0,a.kt)("h2",{id:"e-commerce-application-frontend-using-nextjs-and-tailwind"},"E-commerce Application Frontend using Next.js and Tailwind"),(0,a.kt)(i.default,{mdxType:"MicroservicesEcommerceDesign"}),(0,a.kt)("h2",{id:"building-a-cqrs-microservices-application-with-redis-and-mongodb"},"Building a CQRS Microservices Application with Redis and MongoDB"),(0,a.kt)("p",null,"Let's look at the sample code for the ",(0,a.kt)("inlineCode",{parentName:"p"},"order service")," and see the ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateOrder")," command (a write operation). Then we'll look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"order history service")," to see the ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewOrderHistory")," command (a read operation)."),(0,a.kt)("h3",{id:"create-order-command-api"},"Create Order Command API"),(0,a.kt)("p",null,"Below you will find an example API request and response to create an order."),(0,a.kt)("h4",{id:"create-order-request"},"Create Order Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// POST http://api-gateway/orders/createOrder\n{\n  "products": [\n    {\n      "productId": 11000,\n      "qty": 2,\n      "productPrice": 3995\n    },\n    {\n      "productId": 11001,\n      "qty": 1,\n      "productPrice": 5450\n    }\n  ]\n}\n')),(0,a.kt)("h4",{id:"create-order-response"},"Create Order Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": "63f5f8dc3696d145a45775a6", // orderId\n  "error": null\n}\n')),(0,a.kt)("p",null,"When you make a request, it goes through the API gateway to the ",(0,a.kt)("inlineCode",{parentName:"p"},"orders service"),". Ultimately it ends up calling a ",(0,a.kt)("inlineCode",{parentName:"p"},"createOrder")," function which looks as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async function createOrder(order: IOrder) {\n  if (!order) {\n    throw 'Order data is mandatory!';\n  }\n\n  order.orderStatusCode = ORDER_STATUS.CREATED;\n  order.userId = USERS.DEFAULT; // Used as a shortcut, in a real app you would use customer session data to fetch user details\n  order.createdOn = new Date();\n  order.createdBy = order.userId;\n  order.lastUpdatedOn = null;\n  order.lastUpdatedBy = null;\n  order.statusCode = DB_ROW_STATUS.ACTIVE;\n\n  order = await validateOrder(order);\n\n  const orderId = await addOrderToRedis(order);\n  order.orderId = orderId;\n\n  await addOrderToMongoDB(order);\n\n  return orderId;\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For simplicity, we are adding data to both MongoDB and Redis in the same service (double-write). As mentioned earlier, a common pattern is to have your services write to one database, and then separately use a CDC mechanism to update the other database. For example, you could write directly to Redis, then use ",(0,a.kt)("strong",{parentName:"p"},"RedisGears")," to handle synchronizing Redis and MongoDB in the background. For the purposes of this tutorial we are not going to outline exactly how you might handle synchronization, but instead focus on how the data is stored and accessed in Redis.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you're using ",(0,a.kt)("strong",{parentName:"p"},"Redis Enterprise"),", you can take advantage of the ",(0,a.kt)("strong",{parentName:"p"},"integrated CDC")," mechanism to avoid having to roll your own.")),(0,a.kt)("p",null,"Note above that we are calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"addOrderToRedis")," function to store orders in Redis. We're using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redis/redis-om-node"},"Redis OM for Node.js")," to store the order entities in Redis. Below is what that function looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="server/src/services/orders"',title:'"server/src/services/orders"'},"import { Entity, Schema } from 'redis-om';\nimport { getRedisOmClient } from '../utils/redis/redis-wrapper';\n\nclass OrderEntity extends Entity {}\n\nconst schema = new Schema(OrderEntity, {\n  orderId: { type: 'string' },\n  userId: { type: 'string' },\n  orderStatusCode: { type: 'number' },\n\n  productsStr: { type: 'string' },\n\n  createdOn: { type: 'date' },\n  createdBy: { type: 'string' },\n  lastUpdatedOn: { type: 'date' },\n  lastUpdatedBy: { type: 'string' },\n  statusCode: { type: 'number' },\n});\n\nasync function addOrderToRedis(order: IOrder) {\n  let orderId = '';\n\n  const redisOmClient = getRedisOmClient();\n  const repository = redisOmClient.fetchRepository(schema);\n  const entity = repository.createEntity(order);\n\n  orderId = entity.entityId;\n  entity.orderId = orderId;\n\n  await repository.save(entity);\n\n  return orderId;\n}\n")),(0,a.kt)("h3",{id:"order-history-api"},"Order History API"),(0,a.kt)("p",null,"Below you will find an example API request and response to get a customer's order history."),(0,a.kt)("h4",{id:"order-history-request"},"Order History Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"// GET http://api-gateway/orderHistory/viewOrderHistory\n")),(0,a.kt)("h4",{id:"order-history-response"},"Order History Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "orderId": "01GTH7JTQWP5QSEY32NNKT6B88",\n      "userId": "ADMIN",\n      "orderStatusCode": 1,\n      "products": [\n        {\n          "productId": 11000,\n          "qty": 10,\n          "productPrice": 3995,\n          "productData": {\n            "id": 11000,\n            "price": 3995,\n            "productDisplayName": "Puma Men Slick 3HD Yellow Black Watches",\n            "variantName": "Slick 3HD Yellow",\n            "brandName": "Puma",\n            "ageGroup": "Adults-Men",\n            "gender": "Men",\n            "displayCategories": "Accessories",\n            "styleImages": {\n              "default": {\n                "imageURL": "http://cdn_service/images/11000.jpg"\n              }\n            },\n            "productDescriptors": {\n              "description": {\n                "value": "Stylish and comfortable, this motor sport inspired wrist watch from puma is designed with a plastic case and ..."\n              }\n            }\n          }\n        },\n        {\n          "productId": 11001,\n          "qty": 19,\n          "productPrice": 5450,\n          "productData": {\n            "id": 11001,\n            "price": 5450,\n            "productDisplayName": "Puma Men Top Fluctuation Red Black Watches",\n            "variantName": "Top Fluctuation Red",\n            "brandName": "Puma",\n            "ageGroup": "Adults-Men",\n            "gender": "Men",\n            "displayCategories": "Accessories",\n            "styleImages": {\n              "default": {\n                "imageURL": "http://cdn_service/images/11001.jpg"\n              }\n            },\n            "productDescriptors": {\n              "description": {\n                "value": "This watch from puma comes in a clean sleek design. This active watch is perfect for urban wear and ..."\n              }\n            }\n          }\n        }\n      ],\n      "createdOn": "2023-03-02T13:18:31.657Z",\n      "createdBy": "ADMIN",\n      "lastUpdatedOn": null,\n      "lastUpdatedBy": null\n    }\n    //...\n  ],\n  "error": null\n}\n')),(0,a.kt)("p",null,"When you make a request, it goes through the API gateway to the ",(0,a.kt)("inlineCode",{parentName:"p"},"order history service"),". Ultimately it ends up calling a ",(0,a.kt)("inlineCode",{parentName:"p"},"viewOrderHistory")," function which looks as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="server/src/services/order-history"',title:'"server/src/services/order-history"'},"async function viewOrderHistory(userId: string) {\n  const repository = OrderRepo.getRepository();\n  let orders: IOrder[] = [];\n\n  const result = repository\n    .search()\n    .where('createdBy')\n    .eq(userId)\n    .and('orderStatusCode')\n    .gte(ORDER_STATUS.CREATED) //gte returns CREATED and PAYMENT_SUCCESS\n    .and('statusCode')\n    .eq(DB_ROW_STATUS.ACTIVE)\n    .return.all();\n\n  orders = result.map((elm) => {\n    return {\n      orderId: elm.orderId,\n      userId: elm.userId,\n      orderStatusCode: elm.orderStatusCode,\n      createdOn: elm.createdOn,\n      createdBy: elm.createdBy,\n      lastUpdatedOn: elm.lastUpdatedOn,\n      lastUpdatedBy: elm.lastUpdatedBy,\n    } as IOrder;\n  });\n\n  return orders;\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"order history service")," only needs to go to Redis for all orders. This is because we are handling storage and synchronization between Redis and MongoDB within the ",(0,a.kt)("inlineCode",{parentName:"p"},"orders service"),".")),(0,a.kt)("p",null,"You might be used to using Redis as a cache and both storing and retrieving stringified JSON values or perhaps hashed values. However, if you look closely at the code above we are storing orders as JSON documents, and then using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redis/redis-om-node"},"Redis OM")," to search for the orders belonging to a specific user. So in reality Redis is operating like a search engine and providing the ability to speed up queries and scale independently from the primary database (MongoDB in this case)."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Hopefully this tutorial has helped you visualize how you might use Redis with the CQRS pattern to help reduce the load on your primary database while still allowing you to store and search JSON documents. See below for some additional resources around this topic."),(0,a.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/solutions/interservice-communication"},"Interservice communication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/solutions/caching"},"Query caching")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/solutions/api-gateway-caching"},"API gateway caching")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/c/Redisinc"},"Redis YouTube channel")),(0,a.kt)("li",{parentName:"ul"},"Clients like ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/redis/node-redis"},"Node Redis")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/redis/redis-om-node"},"Redis om Node")," help you to use Redis in Node.js applications.")))}y.isMDXComponent=!0},53296:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/design-cart-2-2a3b76656f26a754bed6a6c63ad8beef.png"},98920:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/design-dashboard-6a34137ca4862561cc2f065ed55ae081.png"},28125:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/design-order-history-16fc808f70b63d91a37a3ea76baa232d.png"}}]);