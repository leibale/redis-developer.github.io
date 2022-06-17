"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1381],{1203:function(e,t,a){a.d(t,{Z:function(){return k}});var o=a(67294),n=a(3905),r=a(48811),i="riContainer_bco2",s="riDescriptionShort_E27B",l="riDetail_wzFs",p="riIcon_yDou",d="riTitle_x6vI",u="riDescription_RDnu",c="riMore_apRP",h=a(86010),k=function(e){var t=o.useState(!1),a=t[0],k=t[1];return o.createElement("a",{href:e.page,className:i},o.createElement("div",{className:s},o.createElement("div",{className:p},o.createElement("span",{className:"fe fe-zap"})),o.createElement("div",{className:l},o.createElement("div",{className:d},o.createElement("a",{href:e.page},e.title)),o.createElement("div",{className:u},e.description,o.Children.count(e.children)>0&&o.createElement("span",{className:(0,h.Z)(c,"fe","fe-more-horizontal"),onClick:function(){return k(!a)}})))),a&&o.createElement("div",{className:"ri-description-long"},o.createElement(n.Zo,{components:r.Z},e.children)))}},17835:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=a(87462),n=a(63366),r=(a(67294),a(3905)),i=(a(1203),["components"]),s={id:"index-herokujava",title:"Deploy Java app on Heroku using Redis",sidebar_label:"How to deploy a Java based application on Heroku using Redis",slug:"/create/heroku/herokujava",authors:["ajeet"]},l=void 0,p={unversionedId:"create/heroku/herokujava/index-herokujava",id:"create/heroku/herokujava/index-herokujava",title:"Deploy Java app on Heroku using Redis",description:"Heroku is a cloud service provider and software development platform which facilitates fast and effective building, deploying and scaling of web applications. It offers you a ready-to-use environment that allows you to deploy your code fast.",source:"@site/docs/create/heroku/herokujava/index-herokujava.mdx",sourceDirName:"create/heroku/herokujava",slug:"/create/heroku/herokujava",permalink:"/create/heroku/herokujava",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/heroku/herokujava/index-herokujava.mdx",tags:[],version:"current",lastUpdatedAt:1655485898,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-herokujava",title:"Deploy Java app on Heroku using Redis",sidebar_label:"How to deploy a Java based application on Heroku using Redis",slug:"/create/heroku/herokujava",authors:["ajeet"]},sidebar:"docs",previous:{title:"Redis on Heroku",permalink:"/create/heroku/portal"},next:{title:"How to deploy a NodeJS based application on Heroku using Redis",permalink:"/create/heroku/herokunodejs"}},d={},u=[{value:"Step 1. Create Redis Enterprise Cloud",id:"step-1-create-redis-enterprise-cloud",level:4},{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",level:3},{value:"Step 3. Install Heroku CLI on your system",id:"step-3-install-heroku-cli-on-your-system",level:3},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",level:3},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",level:3},{value:"Clone the repository",id:"clone-the-repository",level:4},{value:"Step 6. Setting up Environment Variables",id:"step-6-setting-up-environment-variables",level:3},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",level:3},{value:"Step 8. Accessing the application",id:"step-8-accessing-the-application",level:3},{value:"Next Steps",id:"next-steps",level:3}],c={toc:u};function h(e){var t=e.components,s=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Heroku is a cloud service provider and software development platform which facilitates fast and effective building, deploying and scaling of web applications. It offers you a ready-to-use environment that allows you to deploy your code fast."),(0,r.kt)("p",null,"Some of the notable benefits of Heroku include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users can get started with the free tier of Heroku"),(0,r.kt)("li",{parentName:"ul"},"Let developers concentrate on coding and not server management"),(0,r.kt)("li",{parentName:"ul"},"Integrates with familiar developer workflows"),(0,r.kt)("li",{parentName:"ul"},"Enhance the productivity of cloud app development teams"),(0,r.kt)("li",{parentName:"ul"},"Helps your development, QA, and business stakeholders create a unified dashboard"),(0,r.kt)("li",{parentName:"ul"},"Support for Modern Open Source Languages")),(0,r.kt)("h4",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),(0,r.kt)("p",null,"Create your free Redis Enterprise Cloud account by visiting ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"this link")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TIP")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For a limited time, use ",(0,r.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,r.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,r.kt)("p",{parentName:"div"},"\ud83c\udf89 ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"recloud",src:a(4545).Z,width:"2486",height:"1804"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/create/rediscloud"},"Follow this link to create a Redis Enterprise Cloud")," subscription and database. Once you create the database, you will be provisioned with a unique database endpoint URL, port and password. Save these for future reference."),(0,r.kt)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),(0,r.kt)("p",null,"If you are using Heroku for the first time, create your new Heroku account ",(0,r.kt)("a",{parentName:"p",href:"https://signup.heroku.com/login"},"through this link")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"heroku",src:a(18840).Z,width:"900",height:"1156"})),(0,r.kt)("h3",{id:"step-3-install-heroku-cli-on-your-system"},"Step 3. Install Heroku CLI on your system"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-macos"}," brew install heroku\n")),(0,r.kt)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),(0,r.kt)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),(0,r.kt)("p",null,"For this demonstration, we will be using a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/basic-rate-limiting-demo-java"},"Sample Rate Limiting application"),"."),(0,r.kt)("h4",{id:"clone-the-repository"},"Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/basic-rate-limiting-demo-java\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"heroku create\nCreating app... done, \u2b22 hidden-woodland-03996\nhttps://hidden-woodland-03996.herokuapp.com/ | https://git.heroku.com/hidden-woodland-03996.git\n")),(0,r.kt)("h3",{id:"step-6-setting-up-environment-variables"},"Step 6. Setting up Environment Variables"),(0,r.kt)("p",null,'Go to Heroku dashboard, click "Settings" and set REDIS_ENDPOINT_URI and REDIS_PASSWORD under the Config Vars.\nRefer to Step 1 for the correct values to use.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"heroku",src:a(13722).Z,width:"1452",height:"318"})),(0,r.kt)("p",null,"You now have a functioning Git repository that contains a simple application as well as a package.json file, which is used by Node\u2019s dependency manager."),(0,r.kt)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),(0,r.kt)("p",null,"Heroku generates a random name (in this case hidden-woodland-03996) for your app, or you can pass a parameter to specify your own app name.\nNow deploy your code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git push heroku\nremote:        BUILD SUCCESSFUL in 1m 5s\nremote:        12 actionable tasks: 12 executed\nremote: -----\x3e Discovering process types\nremote:        Procfile declares types -> web\nremote:\nremote: -----\x3e Compressing...\nremote:        Done: 298.9M\nremote: -----\x3e Launching...\nremote:        Released v3\nremote:        https://hidden-woodland-03996.herokuapp.com/ deployed to Heroku\nremote:\nremote: Verifying deploy... done.\nTo https://git.heroku.com/hidden-woodland-03996.git\n * [new branch]      master -> master\n")),(0,r.kt)("h3",{id:"step-8-accessing-the-application"},"Step 8. Accessing the application"),(0,r.kt)("p",null,"Open ",(0,r.kt)("a",{parentName:"p",href:"https://hidden-woodland-03996.herokuapp.com/"},"https://hidden-woodland-03996.herokuapp.com/")," to see your application"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"heroku",src:a(36195).Z,width:"3164",height:"1110"})),(0,r.kt)("h3",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/explore/redisinsight/"},"Connecting to the database using RedisInsight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/moviesdatabase/getting-started/"},"How to list & search Movies database using Redisearch"))))}h.isMDXComponent=!0},18840:function(e,t,a){t.Z=a.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},13722:function(e,t,a){t.Z=a.p+"assets/images/heroku_app1_env-8d491cfd2c8859db457a5821eb59f94a.png"},36195:function(e,t,a){t.Z=a.p+"assets/images/heroku_ratelimiter-536e63f33448af8ad5c84987300831e4.png"},4545:function(e,t,a){t.Z=a.p+"assets/images/try-free-52c2cec515e5862b2f5021faf0fbbe53.png"}}]);