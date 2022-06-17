"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1629],{85162:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(67294),a=n(86010),r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(87462),a=n(67294),r=n(86010),l=n(72389),s=n(67392),o=n(7094),d=n(12466),u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,m=e.defaultValue,h=e.values,b=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var R=(0,o.U)(),w=R.tabGroupChoices,N=R.setTabGroupChoices,S=(0,a.useState)(g),x=S[0],E=S[1],L=[],T=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var C=w[b];null!=C&&C!==x&&y.some((function(e){return e.value===C}))&&E(C)}var _=function(e){var t=e.currentTarget,n=L.indexOf(t),i=y[n].value;i!==x&&(T(t),E(i),null!=b&&N(b,String(i)))},G=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i,a=L.indexOf(e.currentTarget)+1;n=null!=(i=L[a])?i:L[0];break;case"ArrowLeft":var r,l=L.indexOf(e.currentTarget)-1;n=null!=(r=L[l])?r:L[L.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},f)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return L.push(e)},onKeyDown:G,onFocus:_,onClick:_},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,l.Z)();return a.createElement(p,(0,i.Z)({key:String(t)},e))}},1203:function(e,t,n){n.d(t,{Z:function(){return h}});var i=n(67294),a=n(3905),r=n(48811),l="riContainer_bco2",s="riDescriptionShort_E27B",o="riDetail_wzFs",d="riIcon_yDou",u="riTitle_x6vI",c="riDescription_RDnu",p="riMore_apRP",m=n(86010),h=function(e){var t=i.useState(!1),n=t[0],h=t[1];return i.createElement("a",{href:e.page,className:l},i.createElement("div",{className:s},i.createElement("div",{className:d},i.createElement("span",{className:"fe fe-zap"})),i.createElement("div",{className:o},i.createElement("div",{className:u},i.createElement("a",{href:e.page},e.title)),i.createElement("div",{className:c},e.description,i.Children.count(e.children)>0&&i.createElement("span",{className:(0,m.Z)(p,"fe","fe-more-horizontal"),onClick:function(){return h(!n)}})))),n&&i.createElement("div",{className:"ri-description-long"},i.createElement(a.Zo,{components:r.Z},e.children)))}},80024:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return m}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=n(65488),s=n(85162),o=(n(44996),n(1203),["components"]),d={id:"index-ruby",title:"Ruby and Redis",sidebar_label:"Ruby",slug:"/develop/ruby/"},u=void 0,c={unversionedId:"develop/ruby/index-ruby",id:"develop/ruby/index-ruby",title:"Ruby and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Ruby.",source:"@site/docs/develop/ruby/index-ruby.mdx",sourceDirName:"develop/ruby",slug:"/develop/ruby/",permalink:"/develop/ruby/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/ruby/index-ruby.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-ruby",title:"Ruby and Redis",sidebar_label:"Ruby",slug:"/develop/ruby/"},sidebar:"docs",previous:{title:"Go",permalink:"/develop/golang/"},next:{title:"Php",permalink:"/develop/php/"}},p={},m=[{value:"Getting Started",id:"getting-started",level:3},{value:"Step 1. Run a Redis server",id:"step-1-run-a-redis-server",level:4},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",level:3},{value:"Step 3. Install redis-rb:",id:"step-3-install-redis-rb",level:3},{value:"Step 4. Use Gemfile",id:"step-4-use-gemfile",level:3},{value:"Step 5. Execute",id:"step-5-execute",level:3},{value:"Step 6. Verifying",id:"step-6-verifying",level:3},{value:"Step 7. Opening a Connection to Redis Using redis-rb",id:"step-7-opening-a-connection-to-redis-using-redis-rb",level:3},{value:"Step 8. Verifying",id:"step-8-verifying",level:3},{value:"Redis Launchpad",id:"redis-launchpad",level:3},{value:"Rate-Limiting app in Ruby on Rails",id:"rate-limiting-app-in-ruby-on-rails",level:4},{value:"Leaderboard app in Ruby on Rails",id:"leaderboard-app-in-ruby-on-rails",level:4},{value:"Further References",id:"further-references",level:3}],h={toc:m};function b(e){var t=e.components,d=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Ruby."),(0,r.kt)("h3",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"In order to use Redis with Ruby you will need a Ruby Redis client. In the following sections, we will demonstrate the use of redis-rb, a Ruby client library for Redis.\nAdditional Ruby clients for Redis can be found under the Ruby section of the Redis Clients page."),(0,r.kt)(l.Z,{defaultValue:"redis-rb",values:[{label:"Redis-rb",value:"redis-rb"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"redis-rb",mdxType:"TabItem"},(0,r.kt)("p",null,"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and queue. Redis cache delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT."),(0,r.kt)("h4",{id:"step-1-run-a-redis-server"},"Step 1. Run a Redis server"),(0,r.kt)("p",null,"You can either run Redis in a Docker container or directly on your machine.\nFollow the below commands to setup a Redis server on Mac OS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," brew tap redis-stack/redis-stack\n brew install --cask redis-stack\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"INFO")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Redis Stack unifies and simplifies the developer experience of the leading Redis modules and the capabilities they provide. Redis Stack bundles five Redis modules: RedisJSON, RedisSearch, RedisGraph, RedisTimeSeries, and RedisBloom.\n",(0,r.kt)("a",{parentName:"p",href:"/create/redis-stack"},"Learn more")))),(0,r.kt)("p",null,"Ensure that you are able to use the following Redis command to connect to the Redis instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," redis-cli\n 127.0.0.1:6379>\n")),(0,r.kt)("p",null,"Now you should be able to perform CRUD operations with Redis commands. For example, you can insert data to Redis with the ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," command and the fetch it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," command. The above Redis client command might require a password if you have setup authentication in your Redis configuration file. By default, Redis listens on port 6379. This can be modified in the Redis configuration file."),(0,r.kt)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/redis-developer/redis-ruby-getting-started\n")),(0,r.kt)("h3",{id:"step-3-install-redis-rb"},"Step 3. Install redis-rb:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ gem install redis\n")),(0,r.kt)("p",null,"OR"),(0,r.kt)("h3",{id:"step-4-use-gemfile"},"Step 4. Use Gemfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$cat Gemfile\ngem 'redis'\n")),(0,r.kt)("h3",{id:"step-5-execute"},"Step 5. Execute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ bundle install\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Resolving dependencies...\nUsing bundler 2.2.6\nUsing redis 4.2.5\nFollowing files may not be writable, so sudo is needed:\n  /Library/Ruby/Gems/2.6.0\n  /Library/Ruby/Gems/2.6.0/build_info\n  /Library/Ruby/Gems/2.6.0/cache\n  /Library/Ruby/Gems/2.6.0/doc\n  /Library/Ruby/Gems/2.6.0/extensions\n  /Library/Ruby/Gems/2.6.0/gems\n  /Library/Ruby/Gems/2.6.0/specifications\nBundle complete! 1 Gemfile dependency, 2 gems now installed.\nUse `bundle info [gemname]` to see where a bundled gem is installed.\n")),(0,r.kt)("h3",{id:"step-6-verifying"},"Step 6. Verifying"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bundle info redis\n  * redis (4.2.5)\n    Summary: A Ruby client library for Redis\n    Homepage: https://github.com/redis/redis-rb\n    Documentation: https://www.rubydoc.info/gems/redis/4.2.5\n    Source Code: https://github.com/redis/redis-rb/tree/v4.2.5\n    Changelog: https://github.com/redis/redis-rb/blob/master/CHANGELOG.md\n    Bug Tracker: https://github.com/redis/redis-rb/issues\n    Path: /Library/Ruby/Gems/2.6.0/gems/redis-4.2.5\n")),(0,r.kt)("h3",{id:"step-7-opening-a-connection-to-redis-using-redis-rb"},"Step 7. Opening a Connection to Redis Using redis-rb"),(0,r.kt)("p",null,"The following code creates a connection to Redis using redis-rb:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'redis\'\nredis = Redis.new(host: "localhost", port: 6379, db: 11)\nredis.set("mykey", "hello world")\nredis.get("mykey")\n')),(0,r.kt)("p",null,"To adapt this example to your code, make sure that you replace the following values with those of your database:"),(0,r.kt)("p",null,"You can find connect.rb under this directory which you can directly use to test it."),(0,r.kt)("p",null,"Just execute the below command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ruby connect.rb\n")),(0,r.kt)("h3",{id:"step-8-verifying"},"Step 8. Verifying"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'127.0.0.1:6379> monitor\nOK\n1614684665.728109 [0 [::1]:50918] "select" "11"\n1614684665.728294 [11 [::1]:50918] "set" "mykey" "hello world"\n1614684665.728435 [11 [::1]:50918] "get" "mykey"\n\n')),(0,r.kt)("h3",{id:"redis-launchpad"},"Redis Launchpad"),(0,r.kt)("p",null,"Redis Launchpad is like an \u201cApp Store\u201d for Redis sample apps. You can easily find apps for your preferred frameworks and languages.\nCheck out a few of these apps below, or ",(0,r.kt)("a",{parentName:"p",href:"https://launchpad.redis.com"},"click here to access the complete list"),"."),(0,r.kt)("div",{class:"row text--center"},(0,r.kt)("div",{class:"col "},(0,r.kt)("div",{className:"ri-container"},(0,r.kt)("h4",{id:"rate-limiting-app-in-ruby-on-rails"},"Rate-Limiting app in Ruby on Rails"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Launchpad",src:n(84647).Z,width:"1228",height:"1102"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://Launchpad.redis.com/?id=project%3Abasic-redis-rate-limiting-demo-ruby"},"Rate Limiting app")," built in Ruby on Rails"))),(0,r.kt)("div",{class:"col"},(0,r.kt)("div",{className:"ri-container"},(0,r.kt)("h4",{id:"leaderboard-app-in-ruby-on-rails"},"Leaderboard app in Ruby on Rails"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Launchpad",src:n(822).Z,width:"1280",height:"1106"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://Launchpad.redis.com/?id=project%3Abasic-redis-leaderboard-demo-ruby"},"How to implement leaderboard app")," in Ruby on Rails")))),(0,r.kt)("h3",{id:"further-references"},"Further References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/redis/redis-rb/"},"A Ruby client library for Redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/socketry/async-redis"},"Async::Redis - An asynchronous client for Redis including TLS"))))))}b.isMDXComponent=!0},822:function(e,t,n){t.Z=n.p+"assets/images/leaderboardruby-070cf1e75c2970af026644beffa5e353.png"},84647:function(e,t,n){t.Z=n.p+"assets/images/ratelimitingruby-2d37889fc2a422cd656d35ed477138df.png"}}]);