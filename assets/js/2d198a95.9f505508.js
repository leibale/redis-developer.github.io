"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6365],{85162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(67294),i=n(86010),r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),i=n(67294),r=n(86010),l=n(72389),s=n(67392),o=n(7094),u=n(12466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,l=e.lazy,c=e.block,m=e.defaultValue,h=e.values,f=e.groupId,v=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.U)(),T=b.tabGroupChoices,y=b.setTabGroupChoices,C=(0,i.useState)(w),R=C[0],x=C[1],E=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var L=T[f];null!=L&&L!==R&&g.some((function(e){return e.value===L}))&&x(L)}var S=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==R&&(P(t),x(a),null!=f&&y(f,String(a)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=E.indexOf(e.currentTarget)+1;n=null!=(a=E[i])?a:E[0];break;case"ArrowLeft":var r,l=E.indexOf(e.currentTarget)-1;n=null!=(r=E[l])?r:E[E.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},v)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return E.push(e)},onKeyDown:_,onFocus:S,onClick:S},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":R===t})}),null!=n?n:t)}))),l?(0,i.cloneElement)(k.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function m(e){var t=(0,l.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},1203:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(67294),i=n(3905),r=n(48811),l="riContainer_bco2",s="riDescriptionShort_E27B",o="riDetail_wzFs",u="riIcon_yDou",p="riTitle_x6vI",d="riDescription_RDnu",c="riMore_apRP",m=n(86010),h=function(e){var t=a.useState(!1),n=t[0],h=t[1];return a.createElement("a",{href:e.page,className:l},a.createElement("div",{className:s},a.createElement("div",{className:u},a.createElement("span",{className:"fe fe-zap"})),a.createElement("div",{className:o},a.createElement("div",{className:p},a.createElement("a",{href:e.page},e.title)),a.createElement("div",{className:d},e.description,a.Children.count(e.children)>0&&a.createElement("span",{className:(0,m.Z)(c,"fe","fe-more-horizontal"),onClick:function(){return h(!n)}})))),n&&a.createElement("div",{className:"ri-description-long"},a.createElement(i.Zo,{components:r.Z},e.children)))}},16014:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=(n(65488),n(85162),n(44996),n(1203),["components"]),s={id:"index-spring-fixed-window-reactive-lua",title:"Atomicity with Lua",sidebar_label:"Atomicity with Lua",slug:"/develop/java/spring/rate-limiting/fixed-window/reactive-lua",authors:["bsb"]},o=void 0,u={unversionedId:"develop/java/spring/rate-limiting/fixed-window/index-spring-fixed-window-reactive-lua",id:"develop/java/spring/rate-limiting/fixed-window/index-spring-fixed-window-reactive-lua",title:"Atomicity with Lua",description:"Improving atomicity and performance with Lua",source:"@site/docs/develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive-lua.mdx",sourceDirName:"develop/java/spring/rate-limiting/fixed-window",slug:"/develop/java/spring/rate-limiting/fixed-window/reactive-lua",permalink:"/develop/java/spring/rate-limiting/fixed-window/reactive-lua",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive-lua.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-spring-fixed-window-reactive-lua",title:"Atomicity with Lua",sidebar_label:"Atomicity with Lua",slug:"/develop/java/spring/rate-limiting/fixed-window/reactive-lua",authors:["bsb"]},sidebar:"docs",previous:{title:"Reactive Implementation",permalink:"/develop/java/spring/rate-limiting/fixed-window/reactive"},next:{title:"Atomicity with Gears",permalink:"/develop/java/spring/rate-limiting/fixed-window/reactive-gears"}},p={},d=[{value:"Improving atomicity and performance with Lua",id:"improving-atomicity-and-performance-with-lua",level:2},{value:"Rate Limiting Lua Script",id:"rate-limiting-lua-script",level:2},{value:"Redis Lua Scripts in Spring Data Redis",id:"redis-lua-scripts-in-spring-data-redis",level:2},{value:"Modifying the Filter to use Lua",id:"modifying-the-filter-to-use-lua",level:2},{value:"Applying the filter",id:"applying-the-filter",level:2},{value:"Testing with curl",id:"testing-with-curl",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"improving-atomicity-and-performance-with-lua"},"Improving atomicity and performance with Lua"),(0,r.kt)("p",null,"One way to improve our implementation is by moving the responsibility of\nperforming the ",(0,r.kt)("inlineCode",{parentName:"p"},"INCR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPIRE")," operations from the ",(0,r.kt)("inlineCode",{parentName:"p"},"incrAndExpireKey"),"\nmethod, to a Lua script."),(0,r.kt)("h2",{id:"rate-limiting-lua-script"},"Rate Limiting Lua Script"),(0,r.kt)("p",null,"Redis has the ability to execute Lua scripts on the server side. Lua scripts\nare executed atomically, that is, no other script or command will run\nwhile a script is running, which gives us the same transactional semantics as ",(0,r.kt)("inlineCode",{parentName:"p"},"MULTI")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"EXEC"),"."),(0,r.kt)("p",null,"Below is a simple Lua script to encapsulate the rate limiting logic. The script returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\nif the request is to be rejected or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"-- rateLimiter.lua\nlocal key = KEYS[1]\nlocal requests = tonumber(redis.call('GET', key) or '-1')\nlocal max_requests = tonumber(ARGV[1])\nlocal expiry = tonumber(ARGV[2])\n\nif (requests == -1) or (requests < max_requests) then\n  redis.call('INCR', key)\n  redis.call('EXPIRE', key, expiry)\n  return false\nelse\n  return true\nend\n")),(0,r.kt)("p",null,"Place the script under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources/scripts"),". Now, Let's break it down:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Lua scripts in Redis work with keys (",(0,r.kt)("inlineCode",{parentName:"li"},"KEYS[]"),") and arguments (",(0,r.kt)("inlineCode",{parentName:"li"},"ARGV[]"),") in our case\nwe are expecting one ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"KEYS[1]")," (Lua arrays are 1-based)"),(0,r.kt)("li",{parentName:"ol"},"We retrieve the quota for the key in ",(0,r.kt)("inlineCode",{parentName:"li"},"requests")," by making a ",(0,r.kt)("inlineCode",{parentName:"li"},"call")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," command,\nreturning ",(0,r.kt)("inlineCode",{parentName:"li"},"-1")," if the key does not exist, and converting the value to a number."),(0,r.kt)("li",{parentName:"ol"},"The quota is passed as the first argument (",(0,r.kt)("inlineCode",{parentName:"li"},"ARGV[1]"),") and stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"max_requests"),", the\nexpiry in seconds is the second argument and stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"expiry")),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"if")," statement checks whether the request is the first request in the time window or\nif the number of requests have not exceeded the quota, in which case we run the ",(0,r.kt)("inlineCode",{parentName:"li"},"INCR"),"-",(0,r.kt)("inlineCode",{parentName:"li"},"EXPIRE"),"\ncommands and retunr ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," (meaning we are not rate limiting and allowing the request through)."),(0,r.kt)("li",{parentName:"ol"},"If they've exceeded the quote, then we rate limit by returning ",(0,r.kt)("inlineCode",{parentName:"li"},"true"))),(0,r.kt)("p",null,"If you want to learn more about Lua, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.lua.org/pil/contents.html"},"Programming in Lua"),"."),(0,r.kt)("h2",{id:"redis-lua-scripts-in-spring-data-redis"},"Redis Lua Scripts in Spring Data Redis"),(0,r.kt)("p",null,"Spring Data Redis supports Lua scripting via the class ",(0,r.kt)("inlineCode",{parentName:"p"},"RedisScript"),". It handles serialization and intelligently\nuses the Redis script cache. The cache is populated using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SCRIPT LOAD")," command. The default ",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptExecutor"),"\nuses ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/commands/evalsha"},(0,r.kt)("inlineCode",{parentName:"a"},"EVALSHA"))," using the SHA1 of the script and falling back to\n",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/commands/eval"},(0,r.kt)("inlineCode",{parentName:"a"},"EVAL"))," if the script has not yet been loaded into the cache."),(0,r.kt)("p",null,"Let's add the bean annotated method ",(0,r.kt)("inlineCode",{parentName:"p"},"script()")," to load our script from the classpath:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic RedisScript<Boolean> script() {\n  return RedisScript.of(new ClassPathResource("scripts/rateLimiter.lua"), Boolean.class);\n}\n')),(0,r.kt)("h2",{id:"modifying-the-filter-to-use-lua"},"Modifying the Filter to use Lua"),(0,r.kt)("p",null,"Next, we'll modify the filter to include the script as well as the quota; the value that we need to pass to the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class RateLimiterHandlerFilterFunction implements HandlerFilterFunction<ServerResponse, ServerResponse> {\n\n  private ReactiveRedisTemplate<String, Long> redisTemplate;\n  private RedisScript<Boolean> script;\n  private Long maxRequestPerMinute;\n\n  public RateLimiterHandlerFilterFunction(ReactiveRedisTemplate<String, Long> redisTemplate,\n      RedisScript<Boolean> script, Long maxRequestPerMinute) {\n    this.redisTemplate = redisTemplate;\n    this.script = script;\n    this.maxRequestPerMinute = maxRequestPerMinute;\n  }\n")),(0,r.kt)("p",null,"Now we can modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," method to use the script. Scripts are run using the execute methods of\n",(0,r.kt)("inlineCode",{parentName:"p"},"RedisTemplate")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactiveRedisTemplate"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," methods use a configurable ",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptExecutor"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"ReactiveScriptExecutor"),"\nthat inherits the key and value serialization setting of the template to run the scripts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Override\npublic Mono<ServerResponse> filter(ServerRequest request, HandlerFunction<ServerResponse> next) {\n  int currentMinute = LocalTime.now().getMinute();\n  String key = String.format("rl_%s:%s", requestAddress(request.remoteAddress()), currentMinute);\n\n  return redisTemplate //\n      .execute(script, List.of(key), List.of(maxRequestPerMinute, 59)) //\n      .single(false) //\n      .flatMap(value -> value ? //\n          ServerResponse.status(TOO_MANY_REQUESTS).build() : //\n          next.handle(request));\n}\n')),(0,r.kt)("p",null,"Let's break down the method additions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"filter")," method uses the template ",(0,r.kt)("inlineCode",{parentName:"li"},"execute")," method passing the script, keys and arguments."),(0,r.kt)("li",{parentName:"ol"},"We expect a ",(0,r.kt)("inlineCode",{parentName:"li"},"single")," result (",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"). The ",(0,r.kt)("inlineCode",{parentName:"li"},"single")," method takes a default value to\nbe returned in case we get an empty result."),(0,r.kt)("li",{parentName:"ol"},"Finally, we use the ",(0,r.kt)("inlineCode",{parentName:"li"},"flatMap")," method to grab the value:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If it is ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," we reject the request with an HTTP 429."),(0,r.kt)("li",{parentName:"ul"},"If it is ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," we handle the request")))),(0,r.kt)("h2",{id:"applying-the-filter"},"Applying the filter"),(0,r.kt)("p",null,"Let's add a configurable ",(0,r.kt)("inlineCode",{parentName:"p"},"@Value")," annotated ",(0,r.kt)("inlineCode",{parentName:"p"},"Long")," value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"FixedWindowRateLimiterApplication")," to\nhold the request quota."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Value("${MAX_REQUESTS_PER_MINUTE}")\nLong maxRequestPerMinute;\n')),(0,r.kt)("p",null,"In our ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," we'll set it to a max of 20 request per minute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"MAX_REQUESTS_PER_MINUTE=20\n")),(0,r.kt)("p",null,"To invoke the filter we use the newly modified constructor, passing the template, the script, and the\n",(0,r.kt)("inlineCode",{parentName:"p"},"maxRequestPerMinute")," value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\nRouterFunction<ServerResponse> routes() {\n  return route() //\n      .GET("/api/ping", r -> ok() //\n          .contentType(TEXT_PLAIN) //\n          .body(BodyInserters.fromValue("PONG")) //\n      ).filter(new RateLimiterHandlerFilterFunction(redisTemplate, script(), maxRequestPerMinute)).build();\n}\n')),(0,r.kt)("h2",{id:"testing-with-curl"},"Testing with curl"),(0,r.kt)("p",null,"Using our trusty curl loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'for n in {1..22}; do echo $(curl -s -w " :: HTTP %{http_code}, %{size_download} bytes, %{time_total} s" -X GET http://localhost:8080/api/ping); sleep 0.5; done\n')),(0,r.kt)("p",null,"You should see the 21st request being rejected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c for n in {1..22}; do echo $(curl -s -w " :: HTTP %{http_code}, %{size_download} bytes, %{time_total} s" -X GET http://localhost:8080/api/ping); sleep 0.5; done\nPONG :: HTTP 200, 4 bytes, 0.173759 s\nPONG :: HTTP 200, 4 bytes, 0.008903 s\nPONG :: HTTP 200, 4 bytes, 0.008796 s\nPONG :: HTTP 200, 4 bytes, 0.009625 s\nPONG :: HTTP 200, 4 bytes, 0.007604 s\nPONG :: HTTP 200, 4 bytes, 0.008052 s\nPONG :: HTTP 200, 4 bytes, 0.011364 s\nPONG :: HTTP 200, 4 bytes, 0.012158 s\nPONG :: HTTP 200, 4 bytes, 0.010415 s\nPONG :: HTTP 200, 4 bytes, 0.010373 s\nPONG :: HTTP 200, 4 bytes, 0.010009 s\nPONG :: HTTP 200, 4 bytes, 0.006587 s\nPONG :: HTTP 200, 4 bytes, 0.006807 s\nPONG :: HTTP 200, 4 bytes, 0.006970 s\nPONG :: HTTP 200, 4 bytes, 0.007948 s\nPONG :: HTTP 200, 4 bytes, 0.007949 s\nPONG :: HTTP 200, 4 bytes, 0.006606 s\nPONG :: HTTP 200, 4 bytes, 0.006336 s\nPONG :: HTTP 200, 4 bytes, 0.007855 s\nPONG :: HTTP 200, 4 bytes, 0.006515 s\n:: HTTP 429, 0 bytes, 0.006633 s\n:: HTTP 429, 0 bytes, 0.008264 s\n')),(0,r.kt)("p",null,"If we run Redis in monitor mode, we should see the Lua calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"EVALSHA"),", followed by the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," for a rejected\nrequest, and the same plus calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"INCR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPIRE")," for an allowed request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'1630342834.878972 [0 172.17.0.1:65008] "EVALSHA" "16832548450a4b1c5e23ffab55bddefe972fecd2" "1" "rl_localhost:0" "20" "59"\n1630342834.879044 [0 lua] "GET" "rl_localhost:0"\n1630342834.879091 [0 lua] "INCR" "rl_localhost:0"\n1630342834.879141 [0 lua] "EXPIRE" "rl_localhost:0" "59"\n1630342835.401937 [0 172.17.0.1:65008] "EVALSHA" "16832548450a4b1c5e23ffab55bddefe972fecd2" "1" "rl_localhost:0" "20" "59"\n1630342835.402009 [0 lua] "GET" "rl_localhost:0"\n')),(0,r.kt)("p",null,"The complete code for this implementation is under the branch ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/fixed-window-rate-limiter/tree/with_lua"},(0,r.kt)("inlineCode",{parentName:"a"},"with_lua")),"."))}m.isMDXComponent=!0}}]);