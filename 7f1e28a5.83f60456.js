(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var o=a(3),n=a(7),r=(a(0),a(208)),i=(a(210),{id:"index-herokujava",title:"Java based application on Heroku using Redis",sidebar_label:"How to build Java based application on Heroku using Redis",slug:"/howtos/herokujava"}),s={unversionedId:"howtos/herokujava/index-herokujava",id:"howtos/herokujava/index-herokujava",isDocsHomePage:!1,title:"Java based application on Heroku using Redis",description:"Step 1. Create Redis Enterprise Cloud",source:"@site/docs/howtos/herokujava/index-herokujava.mdx",slug:"/howtos/herokujava",permalink:"/howtos/herokujava",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/herokujava/index-herokujava.mdx",version:"current",sidebar_label:"How to build Java based application on Heroku using Redis",sidebar:"docs",previous:{title:"Python based application on Heroku using Redis",permalink:"/howtos/herokupython"},next:{title:"Get Involved with Redis Community",permalink:"/get-involved/"}},c=[{value:"Step 1. Create Redis Enterprise Cloud",id:"step-1-create-redis-enterprise-cloud",children:[]},{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",children:[]},{value:"Step 3. Install Heroku CLI on your system",id:"step-3-install-heroku-cli-on-your-system",children:[]},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",children:[]},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",children:[]},{value:"Step 6. Setting up Environmental variable",id:"step-6-setting-up-environmental-variable",children:[]},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",children:[]},{value:"Step 8. Accessing the application",id:"step-8-accessing-the-application",children:[]},{value:"Next Step",id:"next-step",children:[]}],l={toc:c};function p(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),Object(r.b)("p",null,"Create your free Redis Enterprise Cloud account. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/create/rediscloud"}),"Follow this link to create Redis Enterprise Cloud")," subscription and database as shown below:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:a(504).default})),Object(r.b)("p",null,"Save the database endpoint URL and password for future reference."),Object(r.b)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),Object(r.b)("p",null,"If you are using Heroku for the first time, create your new Heroku account ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://signup.heroku.com/login"}),"through this link")),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:a(505).default})),Object(r.b)("h3",{id:"step-3-install-heroku-cli-on-your-system"},"Step 3. Install Heroku CLI on your system"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-macos"})," brew install heroku\n")),Object(r.b)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),Object(r.b)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),Object(r.b)("p",null,"For this demonstration, we will be using a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/redis-developer/basic-rate-limiting-demo-java"}),"Sample Rate Limiting application")),Object(r.b)("h4",{id:"clone-the-repository"},"Clone the repository"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/basic-rate-limiting-demo-java\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"heroku create\nCreating app... done, \u2b22 hidden-woodland-03996\nhttps://hidden-woodland-03996.herokuapp.com/ | https://git.heroku.com/hidden-woodland-03996.git\n")),Object(r.b)("h3",{id:"step-6-setting-up-environmental-variable"},"Step 6. Setting up Environmental variable"),Object(r.b)("p",null,'Go to Heroku dashboard, click "Settings" and set REDIS_ENDPOINT_URI and REDIS_PASSWORD under the Config Vars.\nRefer to Step 1 for the reference.'),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:a(506).default})),Object(r.b)("p",null,"You now have a functioning Git repository that contains a simple application as well as a package.json file, which is used by Node\u2019s dependency manager."),Object(r.b)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),Object(r.b)("p",null,"Heroku generates a random name (in this case hidden-woodland-03996) for your app, or you can pass a parameter to specify your own app name.\nNow deploy your code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"$ git push heroku                        \nremote:        BUILD SUCCESSFUL in 1m 5s\nremote:        12 actionable tasks: 12 executed\nremote: -----\x3e Discovering process types\nremote:        Procfile declares types -> web\nremote: \nremote: -----\x3e Compressing...\nremote:        Done: 298.9M\nremote: -----\x3e Launching...\nremote:        Released v3\nremote:        https://hidden-woodland-03996.herokuapp.com/ deployed to Heroku\nremote: \nremote: Verifying deploy... done.\nTo https://git.heroku.com/hidden-woodland-03996.git\n * [new branch]      master -> master\n")),Object(r.b)("h3",{id:"step-8-accessing-the-application"},"Step 8. Accessing the application"),Object(r.b)("p",null,"Open ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://hidden-woodland-03996.herokuapp.com/"}),"https://hidden-woodland-03996.herokuapp.com/")," to see your application"),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:a(507).default})),Object(r.b)("h3",{id:"next-step"},"Next Step"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/explore/redisinsight/"}),"Connecting to the database using RedisInsight")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"/howtos/moviesdatabase/getting-started/"}),"How to list & search Movies database using Redisearch"))))}p.isMDXComponent=!0},210:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(208),i=a(216);a(209),a(55);t.a=function(e){var t=n.a.useState(!1),a=t[0],o=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return o(!a)}})))),a&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(r.a,{components:i.a},e.children)))}},504:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rediscloud-d61184b5afea31c7297d7eeba25a71ec.png"},505:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},506:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heroku_app1_env-8d491cfd2c8859db457a5821eb59f94a.png"},507:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heroku_ratelimiter-536e63f33448af8ad5c84987300831e4.png"}}]);