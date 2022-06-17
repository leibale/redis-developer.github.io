"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4850],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39293:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"index-ratelimitinggo",title:"Deploy a Redis Rate Limiting app on Heroku",sidebar_label:"How to deploy a Redis Rate Limiting application on Heroku",slug:"/create/heroku/ratelimiting-go",authors:["ajeet"]},l=void 0,p={unversionedId:"create/heroku/ratelimiting-go/index-ratelimitinggo",id:"create/heroku/ratelimiting-go/index-ratelimitinggo",title:"Deploy a Redis Rate Limiting app on Heroku",description:"Rate limiting is a mechanism that many developers may have to deal with at some point in their life. It\u2019s useful for a variety of purposes like sharing access to limited resources or limiting the number of requests made to an API endpoint and responding with a 429 status code. Building a rate limiter with Redis is easy because of two commands INCR and EXPIRE. The basic concept is that you want to limit requests to a particular service in a given time period. Let\u2019s say we have a service that has users identified by an API key. This service states that it is limited to 20 requests in any given minute.",source:"@site/docs/create/heroku/ratelimiting-go/index-ratelimitinggo.mdx",sourceDirName:"create/heroku/ratelimiting-go",slug:"/create/heroku/ratelimiting-go",permalink:"/create/heroku/ratelimiting-go",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/heroku/ratelimiting-go/index-ratelimitinggo.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-ratelimitinggo",title:"Deploy a Redis Rate Limiting app on Heroku",sidebar_label:"How to deploy a Redis Rate Limiting application on Heroku",slug:"/create/heroku/ratelimiting-go",authors:["ajeet"]},sidebar:"docs",previous:{title:"How to deploy a Python based application on Heroku using Redis",permalink:"/create/heroku/herokupython"},next:{title:"How to deploy a Ruby based application on Heroku using Redis",permalink:"/create/heroku/herokuruby"}},u={},c=[{value:"Step 1. Create Redis Enterprise Cloud",id:"step-1-create-redis-enterprise-cloud",level:4},{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",level:3},{value:"Step 3. Install Heroku CLI on your system",id:"step-3-install-heroku-cli-on-your-system",level:3},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",level:3},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",level:3},{value:"Clone the repository",id:"clone-the-repository",level:4},{value:"Step 6. Setting up Environment Variables",id:"step-6-setting-up-environment-variables",level:3},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",level:3},{value:"Step 8. Accessing the app",id:"step-8-accessing-the-app",level:3},{value:"How it works",id:"how-it-works",level:2},{value:"Cookies",id:"cookies",level:3},{value:"Redis Commands",id:"redis-commands",level:3},{value:"Code for Rate Limiting",id:"code-for-rate-limiting",level:3},{value:"Response",id:"response",level:3},{value:"Status codes",id:"status-codes",level:4},{value:"Headers",id:"headers",level:4},{value:"Available commands",id:"available-commands",level:3},{value:"References",id:"references",level:3}],d={toc:c};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rate limiting is a mechanism that many developers may have to deal with at some point in their life. It\u2019s useful for a variety of purposes like sharing access to limited resources or limiting the number of requests made to an API endpoint and responding with a 429 status code. Building a rate limiter with Redis is easy because of two commands ",(0,a.kt)("a",{parentName:"p",href:"https://redis.io/commands/incr"},"INCR")," and ",(0,a.kt)("a",{parentName:"p",href:"https://redis.io/commands/expire"},"EXPIRE"),". The basic concept is that you want to limit requests to a particular service in a given time period. Let\u2019s say we have a service that has users identified by an API key. This service states that it is limited to 20 requests in any given minute."),(0,a.kt)("p",null,"In this tutorial, we will see how to deploy Rate Limiting using Redis and Go."),(0,a.kt)("h4",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),(0,a.kt)("p",null,"Create your free Redis Enterprise Cloud account by visiting ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"this link")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TIP")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For a limited time, use ",(0,a.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,a.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,a.kt)("p",{parentName:"div"},"\ud83c\udf89 ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"recloud",src:r(93273).Z,width:"2486",height:"1804"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/create/rediscloud"},"Follow this link to create a Redis Enterprise Cloud")," subscription and database. Once you create the database, you will be provisioned with a unique database endpoint URL, port and password. Save these for future reference."),(0,a.kt)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),(0,a.kt)("p",null,"If you are using Heroku for the first time, create your new Heroku account ",(0,a.kt)("a",{parentName:"p",href:"https://signup.heroku.com/login"},"through this link"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:r(81916).Z,width:"1212",height:"1546"})),(0,a.kt)("h3",{id:"step-3-install-heroku-cli-on-your-system"},"Step 3. Install Heroku CLI on your system"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," brew install heroku\n")),(0,a.kt)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," heroku login\n")),(0,a.kt)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),(0,a.kt)("p",null,"For this demonstration, we will be using a Simple Rate Limiting application using Go."),(0,a.kt)("h4",{id:"clone-the-repository"},"Clone the repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/basic-redis-rate-limiting-demo-go-lang\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," heroku create\n\n Creating app... done, \u2b22 powerful-fortress-83061\n\n https://powerful-fortress-83061.herokuapp.com/ | https://git.heroku.com/powerful-fortress-83061.git\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:r(34700).Z,width:"1266",height:"952"})),(0,a.kt)("h3",{id:"step-6-setting-up-environment-variables"},"Step 6. Setting up Environment Variables"),(0,a.kt)("p",null,'Go to the Heroku dashboard, click "Settings" and set REDIS_HOST, REDIS_PORT and REDIS_PASSWORD under the Config Vars. Refer to Step 1 for the correct values to use.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:r(93916).Z,width:"1198",height:"786"})),(0,a.kt)("p",null,"You now have a functioning Git repository that contains a simple application as well as a package.json file, which is used by Node\u2019s dependency manager."),(0,a.kt)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),(0,a.kt)("p",null,"Heroku generates a random name (in this case ",(0,a.kt)("a",{parentName:"p",href:"https://powerful-fortress-83061.herokuapp.com/"},"powerful-fortress-83061"),") for your app, or you can pass a parameter to specify your own app name. Now deploy your code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," git push heroku\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," Enumerating objects: 171, done.\n Counting objects: 100% (171/171), done.\n Delta compression using up to 12 threads\n Compressing objects: 100% (86/86), done.\n Writing objects: 100% (171/171), 5.65 MiB | 2.18 MiB/s, done.\n Total 171 (delta 74), reused 171 (delta 74), pack-reused 0\n remote: Compressing source files... done.\n remote: Building source:\n remote: **       **\n remote: **       Installed the following binaries:**\n remote: **             ./bin/basic-redis-rate-limiting-demo-go-lang**\n remote: **       **\n remote: **       Created a Procfile with the following entries:**\n remote: **             web: bin/basic-redis-rate-limiting-demo-go-lang**\n remote: **       **\n remote: **       If these entries look incomplete or incorrect please create a Procfile with the required entries.**\n remote: **       See https://devcenter.heroku.com/articles/procfile for more details about Procfiles**\n remote: **       **\n remote: -----\x3e Discovering process types\n remote:        Procfile declares types -> web\n remote:\n remote: -----\x3e Compressing...\n remote:        Done: 9.6M\n remote: -----\x3e Launching...\n remote:        Released v7\n remote:        https://powerful-fortress-83061.herokuapp.com/ deployed to Heroku\n remote:\n remote: Verifying deploy... done.\nTo https://git.heroku.com/powerful-fortress-83061.git\n\n * [new branch]      master -> master\n\nIf your app doesn point to the right repository, you can manually add it:\n\n```bash\n heroku git:remote -a powerful-fortress-83061\n")),(0,a.kt)("h3",{id:"step-8-accessing-the-app"},"Step 8. Accessing the app"),(0,a.kt)("p",null,"Open ",(0,a.kt)("a",{parentName:"p",href:"https://powerful-fortress-83061.herokuapp.com/"},"https://powerful-fortress-83061.herokuapp.com/")," to see your application."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:r(84649).Z,width:"1266",height:"528"})),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"This app will block connections from a client after surpassing certain amount of requests (default: 10) per time period (default: 10 sec). The application returns the following headers in response to each request. The values of these headers tell the user how many requests they have remaining before they reach the limit. On the 10th run the server should return an HTTP status code of ",(0,a.kt)("strong",{parentName:"p"},"429 Too Many Requests")),(0,a.kt)("h3",{id:"cookies"},"Cookies"),(0,a.kt)("p",null,"The application uses cookies to identify users. On the first request, the user will receive a cookie back from the server if one didn't previously exist.\n",(0,a.kt)("inlineCode",{parentName:"p"},"CookieName: user-limiter"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"CookieValue: md5(<current time>)"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"<current time>")," - request time in a format: ",(0,a.kt)("inlineCode",{parentName:"p"},"2006-01-02 15:04:05.999999999 -0700 MST")),(0,a.kt)("h3",{id:"redis-commands"},"Redis Commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read requests for user by ",(0,a.kt)("inlineCode",{parentName:"li"},"user-limiter")," cookie: ",(0,a.kt)("inlineCode",{parentName:"li"},"GET requests.<USER_IDENTIFIER>")," - get ",(0,a.kt)("inlineCode",{parentName:"li"},"USER_IDENTIFIER")," from request cookie",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"E.g ",(0,a.kt)("inlineCode",{parentName:"li"},"GET requests.0cbc6611f5540bd0809a388dc95a615b")))),(0,a.kt)("li",{parentName:"ul"},"Set request counter with expired 10 sec if not exist in ",(0,a.kt)("inlineCode",{parentName:"li"},"requests.<USER_IDENTIFIER>"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"SETEX requests.<USER_IDENTIFIER> 10 0"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"E.g ",(0,a.kt)("inlineCode",{parentName:"li"},"SETEX requests.0cbc6611f5540bd0809a388dc95a615b 10 0")))),(0,a.kt)("li",{parentName:"ul"},"Increment requests counter for each of user request: ",(0,a.kt)("inlineCode",{parentName:"li"},"INC requests.<USER_IDENTIFIER>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"E.g ",(0,a.kt)("inlineCode",{parentName:"li"},"INC requests.0cbc6611f5540bd0809a388dc95a615b")))),(0,a.kt)("li",{parentName:"ul"},"Get requests number for user: ",(0,a.kt)("inlineCode",{parentName:"li"},"GET requests.<USER_IDENTIFIER>"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"E.g ",(0,a.kt)("inlineCode",{parentName:"li"},"GET requests.0cbc6611f5540bd0809a388dc95a615b"))))),(0,a.kt)("h3",{id:"code-for-rate-limiting"},"Code for Rate Limiting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Go"},'func (c Controller) AcceptedRequest(user string, limit int) (int, bool) {\n    key := c.key(user)\n\n    if _, err := c.r.Get(key); err == redis.Nil {\n        err := c.r.Set(key, "0", time.Second * time.Duration(limit))\n        if err != nil {\n            log.Println(err)\n            return 0, false\n        }\n    }\n\n    if err := c.r.Inc(key); err != nil {\n        log.Println(err)\n        return 0, false\n    }\n\n    requests, err := c.r.Get(key)\n    if err != nil {\n        log.Println(err)\n        return 0,false\n    }\n    requestsNum, err := strconv.Atoi(requests)\n    if err != nil {\n        log.Println(err)\n        return 0, false\n    }\n\n    if requestsNum > limit {\n        return requestsNum, false\n    }\n\n    return requestsNum, true\n }\n')),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"c")," corresponds to the active controller and ",(0,a.kt)("inlineCode",{parentName:"p"},"c.r")," is a Redis client."),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("h4",{id:"status-codes"},"Status codes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"200 - OK")," - responded ",(0,a.kt)("inlineCode",{parentName:"li"},"PONG")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"406 - Not Acceptable")," - could not read cookie from request, returned when cookies are not allowed on the client side"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"429 - Too Many Requests")," - user send more than 10 requests / 10sec")),(0,a.kt)("h4",{id:"headers"},"Headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-RateLimit-Limit: 10")," - allowed number of limits per 10sec"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X-RateLimit-Remaining: 9")," - number of left request in 10sec window")),(0,a.kt)("h3",{id:"available-commands"},"Available commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.io/commands/setex"},"SETEX")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.io/commands/get"},"GET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.io/commands/del"},"DEL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.io/commands/incr"},"INCR"))),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/create/heroku/herokujava"},"Deploy a Java app on Heroku using Redis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/create/heroku/herokunodejs"},"Deploy a NodeJS app on Heroku using Redis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/create/heroku/herokupython"},"Deploy a Python app on Heroku using Redis"))))}m.isMDXComponent=!0},81916:function(e,t,r){t.Z=r.p+"assets/images/image2-f3a6222e54a918c05530ff96edcacebd.png"},34700:function(e,t,r){t.Z=r.p+"assets/images/image3-919d7475ee20ee46df4b3143ad960dd4.png"},93916:function(e,t,r){t.Z=r.p+"assets/images/image4-e69bf12df47612c5ccbcc0511297d1f1.png"},84649:function(e,t,r){t.Z=r.p+"assets/images/image5-f6fb2ce7888f516ffb8bc4ba21bb498f.png"},93273:function(e,t,r){t.Z=r.p+"assets/images/try-free-52c2cec515e5862b2f5021faf0fbbe53.png"}}]);