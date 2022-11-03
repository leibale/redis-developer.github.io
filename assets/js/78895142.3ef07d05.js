"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7919],{85162:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294),s=r(86010);const l="tabItem_Ymn6";function n(e){let{children:t,hidden:r,className:n}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(l,n),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),s=r(67294),l=r(86010),n=r(72389),i=r(67392),o=r(7094),u=r(12466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:r,block:n,defaultValue:p,values:m,groupId:h,className:v}=e,f=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),b=(0,i.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:R}=(0,o.U)(),[N,w]=(0,s.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&g.some((t=>t.value===e))&&w(e)}const _=e=>{const t=e.currentTarget,r=E.indexOf(t),a=g[r].value;a!==N&&(S(t),w(a),null!=h&&R(h,String(a)))},x=e=>{var t;let r=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return s.createElement("div",{className:(0,l.Z)("tabs-container",d)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},v)},g.map((e=>{let{value:t,label:r,attributes:n}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:x,onClick:_},n,{className:(0,l.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,s.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,n.Z)();return s.createElement(p,(0,a.Z)({key:String(t)},e))}},71131:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(67294),s=r(3905),l=r(52195);const n="riContainer_bco2",i="riDescriptionShort_E27B",o="riDetail_wzFs",u="riIcon_yDou",d="riTitle_x6vI",c="riDescription_RDnu",p="riMore_apRP";var m=r(86010);const h=e=>{const[t,r]=a.useState(!1);return a.createElement("a",{href:e.page,className:n},a.createElement("div",{className:i},a.createElement("div",{className:u},a.createElement("span",{className:"fe fe-zap"})),a.createElement("div",{className:o},a.createElement("div",{className:d},a.createElement("a",{href:e.page},e.title)),a.createElement("div",{className:c},e.description,a.Children.count(e.children)>0&&a.createElement("span",{className:(0,m.Z)(p,"fe","fe-more-horizontal"),onClick:()=>r(!t)})))),t&&a.createElement("div",{className:"ri-description-long"},a.createElement(s.Zo,{components:l.Z},e.children)))}},22801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=r(87462),s=(r(67294),r(3905)),l=r(65488),n=r(85162);r(44996),r(71131);const i={id:"index-rust",title:"Rust and Redis",sidebar_label:"Rust",slug:"/develop/rust/"},o=void 0,u={unversionedId:"develop/rust/index-rust",id:"develop/rust/index-rust",title:"Rust and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Rust.",source:"@site/docs/develop/rust/index-rust.mdx",sourceDirName:"develop/rust",slug:"/develop/rust/",permalink:"/develop/rust/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/rust/index-rust.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-rust",title:"Rust and Redis",sidebar_label:"Rust",slug:"/develop/rust/"}},d={},c=[{value:"Getting Started",id:"getting-started",level:3},{value:"Step 1. Install Rust",id:"step-1-install-rust",level:3},{value:"Step 2. Configure your current shell:",id:"step-2-configure-your-current-shell",level:3},{value:"Step 3. Verify Rust compiler:",id:"step-3-verify-rust-compiler",level:3},{value:"Step 4. Creating Cargo.toml with Redis dependency:",id:"step-4-creating-cargotoml-with-redis-dependency",level:3},{value:"Step 5. Clone the repository",id:"step-5-clone-the-repository",level:3},{value:"Step 6. Run the application",id:"step-6-run-the-application",level:3},{value:"Further References",id:"further-references",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Rust."),(0,s.kt)("h3",{id:"getting-started"},"Getting Started"),(0,s.kt)("p",null,"Rust community has built many client libraries that you can find here. For your first steps with Java and Rust, this article will show how to use a popula library: redis-rs\nThe web page \u201cRedis Enterprise and Rust\u201d will help you to get started with Redis Enterprise and Rust in a much easier manner.\nredis-rs is a rust implementation of a Redis client library.\nIt exposes a general purpose interface to Redis and also provides specific helpers for commonly used functionality."),(0,s.kt)(l.Z,{defaultValue:"redis-rs",values:[{label:"Redis-rs",value:"redis-rs"}],mdxType:"Tabs"},(0,s.kt)(n.Z,{value:"redis-rs",mdxType:"TabItem"},(0,s.kt)("h3",{id:"step-1-install-rust"},"Step 1. Install Rust"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,s.kt)("h3",{id:"step-2-configure-your-current-shell"},"Step 2. Configure your current shell:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," source $HOME/.cargo/env\n")),(0,s.kt)("h3",{id:"step-3-verify-rust-compiler"},"Step 3. Verify Rust compiler:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," rustc --version\n rustc 1.49.0\n")),(0,s.kt)("h3",{id:"step-4-creating-cargotoml-with-redis-dependency"},"Step 4. Creating Cargo.toml with Redis dependency:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},' [dependencies]\n redis = "0.8.0"\n')),(0,s.kt)("h3",{id:"step-5-clone-the-repository"},"Step 5. Clone the repository"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/redis-rust-getting-started\n")),(0,s.kt)("h3",{id:"step-6-run-the-application"},"Step 6. Run the application"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," cargo run\n")),(0,s.kt)("h3",{id:"further-references"},"Further References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.com/lp/redis-enterprise-rust/"},"Redis Enterprise and Rust")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/redis-rust-getting-started"},"Getting Started with Redis & Rust"))))))}m.isMDXComponent=!0}}]);