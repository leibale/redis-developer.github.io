"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6082],{85162:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(67294),i=a(86010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(87462),i=a(67294),r=a(86010),s=a(72389),n=a(67392),o=a(7094),d=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function u(e){var t;const{lazy:a,block:s,defaultValue:u,values:m,groupId:h,className:v}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),k=(0,n.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===u?u:u??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:C}=(0,o.U)(),[y,w]=(0,i.useState)(g),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=h){const e=N[h];null!=e&&e!==y&&f.some((t=>t.value===e))&&w(e)}const R=e=>{const t=e.currentTarget,a=E.indexOf(t),l=f[a].value;l!==y&&(x(t),w(l),null!=h&&C(h,String(l)))},I=e=>{var t;let a=null;switch(e.key){case"Enter":R(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},v)},f.map((e=>{let{value:t,label:a,attributes:s}=e;return i.createElement("li",(0,l.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>E.push(e),onKeyDown:I,onClick:R},s,{className:(0,r.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,i.cloneElement)(b.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function m(e){const t=(0,s.Z)();return i.createElement(u,(0,l.Z)({key:String(t)},e))}},71131:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(67294),i=a(3905),r=a(52195);const s="riContainer_bco2",n="riDescriptionShort_E27B",o="riDetail_wzFs",d="riIcon_yDou",c="riTitle_x6vI",p="riDescription_RDnu",u="riMore_apRP";var m=a(86010);const h=e=>{const[t,a]=l.useState(!1);return l.createElement("a",{href:e.page,className:s},l.createElement("div",{className:n},l.createElement("div",{className:d},l.createElement("span",{className:"fe fe-zap"})),l.createElement("div",{className:o},l.createElement("div",{className:c},l.createElement("a",{href:e.page},e.title)),l.createElement("div",{className:p},e.description,l.Children.count(e.children)>0&&l.createElement("span",{className:(0,m.Z)(u,"fe","fe-more-horizontal"),onClick:()=>a(!t)})))),t&&l.createElement("div",{className:"ri-description-long"},l.createElement(i.Zo,{components:r.Z},e.children)))}},92417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>d,toc:()=>p});var l=a(87462),i=(a(67294),a(3905)),r=a(65488),s=a(85162);a(44996),a(71131);const n={id:"index-c",title:"C and Redis",sidebar_label:"C",slug:"/develop/C/",authors:["ajeet"]},o=void 0,d={unversionedId:"develop/C/index-c",id:"develop/C/index-c",title:"C and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and C.",source:"@site/docs/develop/C/index-c.mdx",sourceDirName:"develop/C",slug:"/develop/C/",permalink:"/develop/C/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/C/index-c.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-c",title:"C and Redis",sidebar_label:"C",slug:"/develop/C/",authors:["ajeet"]},sidebar:"docs",previous:{title:"Atomicity with Gears",permalink:"/develop/java/spring/rate-limiting/fixed-window/reactive-gears"},next:{title:"Overview",permalink:"/develop/node"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1. Install the pre-requisites",id:"step-1-install-the-pre-requisites",level:3},{value:"Step 2. Install and compile hiredis",id:"step-2-install-and-compile-hiredis",level:3},{value:"Step 3. Copy the below C code:",id:"step-3-copy-the-below-c-code",level:3},{value:"Step 4. Compile the code",id:"step-4-compile-the-code",level:3},{value:"Step 5. Test the code",id:"step-5-test-the-code",level:3},{value:"More C Clients Resources",id:"more-c-clients-resources",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and C."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"In order to use Redis with C, you need a C Redis client.\nFor your first steps with C and Redis, this article will show how to use the recommended library: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/redis/hiredis"},"hiredis"),"."),(0,i.kt)(r.Z,{defaultValue:"hiredis",values:[{label:"hiredis",value:"hiredis"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"hiredis",mdxType:"TabItem"},(0,i.kt)("p",null,"Hiredis is a minimalistic C client library for the Redis database.It is minimalistic because it just adds minimal support for the protocol, but at the same time it uses a high level printf-alike API in order to make it much higher level than otherwise suggested by its minimal code base and the lack of explicit bindings for every Redis command."),(0,i.kt)("h3",{id:"step-1-install-the-pre-requisites"},"Step 1. Install the pre-requisites"),(0,i.kt)("p",null,"Version 1.0.0 marks the first stable release of Hiredis.\nFollow the below steps to install the pre-requisite packages in order to compile the latest version of hiredis."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," brew install gcc make\n")),(0,i.kt)("p",null,"Run the below command to run Redis server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," redis-server\n")),(0,i.kt)("h3",{id:"step-2-install-and-compile-hiredis"},"Step 2. Install and compile hiredis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," wget https://github.com/redis/hiredis/archive/master.zip\n make\n make install\n")),(0,i.kt)("h3",{id:"step-3-copy-the-below-c-code"},"Step 3. Copy the below C code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' #include <stdio.h>\n #include <stdlib.h>\n #include <string.h>\n #include <hiredis/hiredis.h>\n\n int main (int argc, char **argv) {\n   redisReply *reply;\n   redisContext *c;\n\n   c = redisConnect("127.0.0.1", 6381);\n   if (c->err) {\n       printf("error: %s\\n", c->errstr);\n       return 1;\n   }\n\n   /* PINGs */\n   reply = redisCommand(c,"PING %s", "Hello World");\n   printf("RESPONSE: %s\\n", reply->str);\n   freeReplyObject(reply);\n\n   redisFree(c);\n }\n')),(0,i.kt)("h3",{id:"step-4-compile-the-code"},"Step 4. Compile the code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," gcc redistest.c -o redistest -I /usr/local/include/hiredis -lhiredis\n")),(0,i.kt)("h3",{id:"step-5-test-the-code"},"Step 5. Test the code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," ./redistest\n RESPONSE: Hello World\n")))),(0,i.kt)("h2",{id:"more-c-clients-resources"},"More C Clients Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Nordix/hiredis-cluster"},"hiredis-cluster")," - C client library for Redis Cluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/toymachine/libredis"},"libredis")," - A C based general low-level PHP extension and client library for Redis, focusing on performance, generality and efficient parallel communication with multiple Redis servers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/aclisp/hiredispool"},"hiredispool")," - Provides connection pooling and auto-reconnect for hiredis. It is also minimalistic and easy to do customization."))))}m.isMDXComponent=!0}}]);