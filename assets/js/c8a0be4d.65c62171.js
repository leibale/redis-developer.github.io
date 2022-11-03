"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[2600],{71131:(e,t,o)=>{o.d(t,{Z:()=>m});var a=o(67294),r=o(3905),n=o(52195);const i="riContainer_bco2",s="riDescriptionShort_E27B",l="riDetail_wzFs",p="riIcon_yDou",u="riTitle_x6vI",d="riDescription_RDnu",c="riMore_apRP";var h=o(86010);const m=e=>{const[t,o]=a.useState(!1);return a.createElement("a",{href:e.page,className:i},a.createElement("div",{className:s},a.createElement("div",{className:p},a.createElement("span",{className:"fe fe-zap"})),a.createElement("div",{className:l},a.createElement("div",{className:u},a.createElement("a",{href:e.page},e.title)),a.createElement("div",{className:d},e.description,a.Children.count(e.children)>0&&a.createElement("span",{className:(0,h.Z)(c,"fe","fe-more-horizontal"),onClick:()=>o(!t)})))),t&&a.createElement("div",{className:"ri-description-long"},a.createElement(r.Zo,{components:n.Z},e.children)))}},75636:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=o(87462),r=(o(67294),o(3905));o(71131);const n={id:"index-herokupython",title:"Deploy a Python app on Heroku using Redis",sidebar_label:"How to deploy a Python based application on Heroku using Redis",slug:"/create/heroku/herokupython",authors:["ajeet"]},i=void 0,s={unversionedId:"create/heroku/herokupython/index-herokupython",id:"create/heroku/herokupython/index-herokupython",title:"Deploy a Python app on Heroku using Redis",description:"Heroku is a container-based cloud Platform as a Service (PaaS). It is a new way of building and deploying web apps. Heroku lets app developers spend 100% of their time on their application code, not managing servers, deployment, ongoing operations, or scaling. Developers use Heroku to deploy, manage, and scale modern apps. The Heroku platform is elegant, flexible, and easy to use, offering developers the simplest path to getting their apps to market.",source:"@site/docs/create/heroku/herokupython/index-herokupython.mdx",sourceDirName:"create/heroku/herokupython",slug:"/create/heroku/herokupython",permalink:"/create/heroku/herokupython",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/heroku/herokupython/index-herokupython.mdx",tags:[],version:"current",lastUpdatedAt:1655485898,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-herokupython",title:"Deploy a Python app on Heroku using Redis",sidebar_label:"How to deploy a Python based application on Heroku using Redis",slug:"/create/heroku/herokupython",authors:["ajeet"]},sidebar:"docs",previous:{title:"How to deploy a NodeJS based application on Heroku using Redis",permalink:"/create/heroku/herokunodejs"},next:{title:"How to deploy a Redis Rate Limiting application on Heroku",permalink:"/create/heroku/ratelimiting-go"}},l={},p=[{value:"Step 1. Create Redis Enterprise Cloud",id:"step-1-create-redis-enterprise-cloud",level:4},{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",level:3},{value:"Step 3. Install Heroku CLI on your system",id:"step-3-install-heroku-cli-on-your-system",level:3},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",level:3},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",level:3},{value:"Clone the repository",id:"clone-the-repository",level:4},{value:"Step 6. Setting up Environment Variables",id:"step-6-setting-up-environment-variables",level:3},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",level:3},{value:"Step 8. Accessing the application",id:"step-8-accessing-the-application",level:3},{value:"Next Steps",id:"next-steps",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Heroku is a container-based cloud Platform as a Service (PaaS). It is a new way of building and deploying web apps. Heroku lets app developers spend 100% of their time on their application code, not managing servers, deployment, ongoing operations, or scaling. Developers use Heroku to deploy, manage, and scale modern apps. The Heroku platform is elegant, flexible, and easy to use, offering developers the simplest path to getting their apps to market."),(0,r.kt)("p",null,"Some of the notable features offered by Heroku are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Agile deployment for Node.js, Java, Python, Ruby, Go and Scala"),(0,r.kt)("li",{parentName:"ul"},"Run and scale any type of app"),(0,r.kt)("li",{parentName:"ul"},"Flexibility to customize and support unique DevOps workflow needs"),(0,r.kt)("li",{parentName:"ul"},"Total visibility across your entire app"),(0,r.kt)("li",{parentName:"ul"},"Offers a powerful dashboard and CLI")),(0,r.kt)("h4",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),(0,r.kt)("p",null,"Redis Enterprise Cloud is a fully managed cloud service by Redis. Built for modern distributed applications, Redis Enterprise Cloud enables you to run any query, simple or complex, at sub-millisecond performance at virtually infinite scale without worrying about operational complexity or service availability. With modern probabilistic data structures and extensible data models, including Search, JSON, Graph, and Time Series, you can rely on Redis as your data-platform for all your real-time needs."),(0,r.kt)("p",null,"Create your free Redis Enterprise Cloud account by visiting ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"this link")),(0,r.kt)("admonition",{title:"TIP",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For a limited time, use ",(0,r.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,r.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,r.kt)("p",{parentName:"admonition"},"\ud83c\udf89 ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"recloud",src:o(80721).Z,width:"2486",height:"1804"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/create/rediscloud"},"Follow this link to create a Redis Enterprise Cloud")," subscription and database. Once you create the database, you will be provisioned with a unique database endpoint URL, port and password. Save these for future reference."),(0,r.kt)("p",null,"You can use the Redis CLI to quickly verify the connection to the Redis instance URL and access the database."),(0,r.kt)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),(0,r.kt)("p",null,"If you are using the Heroku platform for the first time, create your new Heroku account ",(0,r.kt)("a",{parentName:"p",href:"https://signup.heroku.com/login"},"through this link"),".\nYou can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://devcenter.heroku.com/categories/reference"},"Heroku documentation")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"heroku",src:o(43911).Z,width:"900",height:"1156"})),(0,r.kt)("h3",{id:"step-3-install-heroku-cli-on-your-system"},"Step 3. Install Heroku CLI on your system"),(0,r.kt)("p",null,"Run the following command to install the Heroku CLI on your system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-macos"}," brew install heroku\n")),(0,r.kt)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),(0,r.kt)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),(0,r.kt)("p",null,"For this demonstration, we will be using a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/basic-rate-limiting-demo-python"},"Sample Rate Limiting application"),"."),(0,r.kt)("h4",{id:"clone-the-repository"},"Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/basic-rate-limiting-demo-python\n")),(0,r.kt)("p",null,"Run the commands below to get a functioning Git repository that contains a simple application as well as a package.json file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ heroku create\nCreating app... done, \u2b22 fast-reef-76278\nhttps://fast-reef-76278.herokuapp.com/ | https://git.heroku.com/fast-reef-76278.git\n")),(0,r.kt)("h3",{id:"step-6-setting-up-environment-variables"},"Step 6. Setting up Environment Variables"),(0,r.kt)("p",null,'Go to the Heroku dashboard, click "Settings" and set REDIS_ENDPOINT_URI and REDIS_PASSWORD under the Config Vars.\nRefer to Step 1 for the correct values to use.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"heroku",src:o(40689).Z,width:"1452",height:"318"})),(0,r.kt)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),(0,r.kt)("p",null,"Heroku generates a random name (in this case fast-reef-76278) for your app, or you can pass a parameter to specify your own app name.\nNow deploy your code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git push heroku\nEnumerating objects: 512, done.\nCounting objects: 100% (512/512), done.\nDelta compression using up to 12 threads\nCompressing objects: 100% (256/256), done.\nWriting objects: 100% (512/512), 1.52 MiB | 660.00 KiB/s, done.\nTotal 512 (delta 244), reused 512 (delta 244)\nremote: Compressing source files... done.\nremote: Building source:\nremote:\nremote: -----\x3e Building on the Heroku-20 stack\nremote: -----\x3e Determining which buildpack to use for this app\nremote: -----\x3e Python app detected\n\u2026\n\nemote: -----\x3e Compressing...\nremote:        Done: 59.3M\nremote: -----\x3e Launching...\nremote:        Released v5\nremote:        https://fast-reef-76278.herokuapp.com/ deployed to Heroku\nremote:\nremote: Verifying deploy... done.\nTo https://git.heroku.com/fast-reef-76278.git\n * [new branch]      master -> master\n")),(0,r.kt)("h3",{id:"step-8-accessing-the-application"},"Step 8. Accessing the application"),(0,r.kt)("p",null,"Open ",(0,r.kt)("a",{parentName:"p",href:"https://fast-reef-76278.herokuapp.com/"},"https://fast-reef-76278.herokuapp.com/")," to see your application"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"heroku",src:o(14759).Z,width:"3164",height:"1110"})),(0,r.kt)("h3",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/explore/redisinsight/"},"Connecting to the database using RedisInsight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/moviesdatabase/getting-started/"},"How to list & search Movies database using Redisearch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://elements.heroku.com/buildpacks/django/django"},"Django Buildpacks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/deploying-python"},"Deploying Python and Django Apps on Heroku")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/securing-heroku-redis"},"Securing Heroku Redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/heroku-connect"},"Heroku Connect"))))}d.isMDXComponent=!0},43911:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},40689:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/heroku_app1_env-8d491cfd2c8859db457a5821eb59f94a.png"},14759:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/heroku_ratelimiter-536e63f33448af8ad5c84987300831e4.png"},80721:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/try-free-52c2cec515e5862b2f5021faf0fbbe53.png"}}]);