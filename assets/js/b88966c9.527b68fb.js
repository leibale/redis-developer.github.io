"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3165],{85162:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(67294),n=a(86010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(87462),n=a(67294),r=a(86010),s=a(72389),l=a(67392),o=a(7094),u=a(12466);const d="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:a,block:s,defaultValue:p,values:c,groupId:h,className:g}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??v.map((e=>{let{props:{value:t,label:a,attributes:i}}=e;return{value:t,label:a,attributes:i}})),b=(0,l.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,o.U)(),[N,R]=(0,n.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&f.some((t=>t.value===e))&&R(e)}const _=e=>{const t=e.currentTarget,a=E.indexOf(t),i=f[a].value;i!==N&&(I(t),R(i),null!=h&&w(h,String(i)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},g)},f.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:x,onClick:_},s,{className:(0,r.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,n.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,s.Z)();return n.createElement(p,(0,i.Z)({key:String(t)},e))}},71131:(e,t,a)=>{a.d(t,{Z:()=>h});var i=a(67294),n=a(3905),r=a(52195);const s="riContainer_bco2",l="riDescriptionShort_E27B",o="riDetail_wzFs",u="riIcon_yDou",d="riTitle_x6vI",m="riDescription_RDnu",p="riMore_apRP";var c=a(86010);const h=e=>{const[t,a]=i.useState(!1);return i.createElement("a",{href:e.page,className:s},i.createElement("div",{className:l},i.createElement("div",{className:u},i.createElement("span",{className:"fe fe-zap"})),i.createElement("div",{className:o},i.createElement("div",{className:d},i.createElement("a",{href:e.page},e.title)),i.createElement("div",{className:m},e.description,i.Children.count(e.children)>0&&i.createElement("span",{className:(0,c.Z)(p,"fe","fe-more-horizontal"),onClick:()=>a(!t)})))),t&&i.createElement("div",{className:"ri-description-long"},i.createElement(n.Zo,{components:r.Z},e.children)))}},6134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=a(87462),n=(a(67294),a(3905));a(65488),a(85162),a(44996),a(71131);const r={id:"index-java-rate-limiting",title:"How to implement Rate Limiting in Spring Applications using Redis",sidebar_label:"How to implement Rate Limiting in Spring Applications using Redis",slug:"/develop/java/spring/rate-limiting/getting-started",authors:["bsb"]},s=void 0,l={unversionedId:"develop/java/spring/rate-limiting/getting-started/index-java-rate-limiting",id:"develop/java/spring/rate-limiting/getting-started/index-java-rate-limiting",title:"How to implement Rate Limiting in Spring Applications using Redis",description:"In this series of mini-tutorials we'll explore several approaches to implement rate limiting in Spring applications using Redis. We\u2019ll start with the most basic of Redis recipes and we\u2019ll slowly increase the complexity of our implementations.",source:"@site/docs/develop/java/spring/rate-limiting/getting-started/getting-started.mdx",sourceDirName:"develop/java/spring/rate-limiting/getting-started",slug:"/develop/java/spring/rate-limiting/getting-started",permalink:"/develop/java/spring/rate-limiting/getting-started",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/rate-limiting/getting-started/getting-started.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-java-rate-limiting",title:"How to implement Rate Limiting in Spring Applications using Redis",sidebar_label:"How to implement Rate Limiting in Spring Applications using Redis",slug:"/develop/java/spring/rate-limiting/getting-started",authors:["bsb"]}},o={},u=[{value:"What is Rate Limiting?",id:"what-is-rate-limiting",level:2},{value:"Why do we need Rate Limiting?",id:"why-do-we-need-rate-limiting",level:2},{value:"Why Redis for Rate Limiting?",id:"why-redis-for-rate-limiting",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this series of mini-tutorials we'll explore several approaches to implement rate limiting in Spring applications using Redis. We\u2019ll start with the most basic of Redis recipes and we\u2019ll slowly increase the complexity of our implementations."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"my image",src:a(38779).Z,width:"2424",height:"1543"})),(0,n.kt)("h2",{id:"what-is-rate-limiting"},"What is Rate Limiting?"),(0,n.kt)("p",null,"Rate Limiting entails techniques to regulate the number of requests a particular client can make against a networked service. It caps the total number and/or the frequency of requests."),(0,n.kt)("h2",{id:"why-do-we-need-rate-limiting"},"Why do we need Rate Limiting?"),(0,n.kt)("p",null,"There are many reasons why you would want to add a rate limiter to your APIs, whether it is to prevent intentional or accidental API abuse, a rate limiter can stop the invaders at the gate. Let\u2019s think of some scenarios where a rate limiter could save your bacon:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you ever worked at an API-based startup, you know that to get anywhere you need a \u201cfree\u201d tier. A free tier will get potential customers to try your service and spread the word. But without limiting the free tier users you could risk losing the few paid customers your startup has."),(0,n.kt)("li",{parentName:"ul"},"Programmatic integrations with your API could have bugs. Sometimes resource starvation is not caused by a malicious attack. These FFDoS (Friendly-Fire Denial of Service) attacks happen more often than you can imagine."),(0,n.kt)("li",{parentName:"ul"},"Finally, there are malicious players recruiting bots on a daily basis to make API providers\u2019 lives miserable. Being able to detect and curtail those attacks before they impact your users could mean the life of our business.")),(0,n.kt)("p",null,"Rate limiting is typically implemented on the server-side but if you have control of the clients you can also preempt certain types of access at that point. It relies on three particular pieces of information:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Who\u2019s making the request"),": Identifying the source of the attack or abuse is the most important part of the equation. If the offending requests cannot be grouped and associated with a single entity you\u2019ll be fighting in the dark."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"What\u2019s the cost of the request"),": Not all requests are created equal, for example, a request that\u2019s bound to a single account\u2019s data, likely can only cause localized havoc, while a requests that spans multiple accounts, and/or broad spans of time (like multiple years) are much more expensive"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"What is their allotted quota"),': How many total requests and/or what\u2019s the rate of requests permitted for the user. For example, in the case of the "free tier" you might have a smaller allotment/bucket of requests they can make, or you migth reduce them during certain peek times.')),(0,n.kt)("h2",{id:"why-redis-for-rate-limiting"},"Why Redis for Rate Limiting?"),(0,n.kt)("p",null,"Redis is especially positioned as a platform to implement rate limiting for several reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Speed"),": The checks and calculations required by a rate limiting implementation will add the total request-response times of your API, you want those operations to happen as fast as possible."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Centralization and distribution"),": Redis can seamlessly scale your single server/instance setup to hundreds of nodes without sacrificing performance or reliability."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"The Right Abstractions"),": Redis provides optimized data structures to support several of the most common rate limiter implementations and with i\u2019s built-in TTL (time-to-live controls) it allows for efficient management of memory. Counting things is a built-in feature in Redis and one of the many areas where Redis shines above the competition.")),(0,n.kt)("p",null,"Now, let\u2019s get started with our first implementation; the simple ",(0,n.kt)("a",{parentName:"p",href:"/develop/java/spring/rate-limiting/fixed-window"},"\u201cFixed Window\u201d implementation"),"."),(0,n.kt)("h2",{id:"further-reading"},"Further Reading"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/develop/java/redis-and-spring-course/"},"Getting Started with Spring Boot and Redis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/develop/java/redis-and-spring-course/lesson_2"},"Introducing Spring Data Redis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/develop/java/redis-and-spring-course/lesson_7"},"Full-text search and Auto-complete using Redis"))))}m.isMDXComponent=!0},38779:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ratelimiting_speed-32d761529e363f77c23d125159555e38.png"}}]);