"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[8969],{85162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),o=a(67294),i=a(86010),r=a(72389),s=a(67392),l=a(7094),d=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:a,block:r,defaultValue:c,values:h,groupId:k,className:m}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=h??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,s.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,l.U)(),[C,S]=(0,o.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:R}=(0,d.o5)();if(null!=k){const e=y[k];null!=e&&e!==C&&b.some((t=>t.value===e))&&S(e)}const E=e=>{const t=e.currentTarget,a=N.indexOf(t),n=b[a].value;n!==C&&(R(t),S(n),null!=k&&w(k,String(n)))},H=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},b.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>N.push(e),onKeyDown:H,onClick:E},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":C===t})}),a??t)}))),a?(0,o.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,r.Z)();return o.createElement(c,(0,n.Z)({key:String(t)},e))}},71131:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(67294),o=a(3905),i=a(52195);const r="riContainer_bco2",s="riDescriptionShort_E27B",l="riDetail_wzFs",d="riIcon_yDou",u="riTitle_x6vI",p="riDescription_RDnu",c="riMore_apRP";var h=a(86010);const k=e=>{const[t,a]=n.useState(!1);return n.createElement("a",{href:e.page,className:r},n.createElement("div",{className:s},n.createElement("div",{className:d},n.createElement("span",{className:"fe fe-zap"})),n.createElement("div",{className:l},n.createElement("div",{className:u},n.createElement("a",{href:e.page},e.title)),n.createElement("div",{className:p},e.description,n.Children.count(e.children)>0&&n.createElement("span",{className:(0,h.Z)(c,"fe","fe-more-horizontal"),onClick:()=>a(!t)})))),t&&n.createElement("div",{className:"ri-description-long"},n.createElement(o.Zo,{components:i.Z},e.children)))}},27394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),i=a(65488),r=a(85162);a(44996),a(71131);const s={id:"index-heroku-portal",title:"Create a Redis database on Heroku",sidebar_label:"Redis on Heroku",slug:"/create/heroku/portal",authors:["ajeet"]},l=void 0,d={unversionedId:"create/heroku/portal/index-heroku-portal",id:"create/heroku/portal/index-heroku-portal",title:"Create a Redis database on Heroku",description:"Heroku is a cloud Platform as a Service (PaaS) supporting multiple programming languages that is used as a web application deployment model. Heroku lets the developer build, run and scale applications in a similar manner across all the languages(Java, Node.js, Scala, Clojure, Python, PHP, Ruby and Go).",source:"@site/docs/create/heroku/portal/index-heroku.mdx",sourceDirName:"create/heroku/portal",slug:"/create/heroku/portal",permalink:"/create/heroku/portal",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/heroku/portal/index-heroku.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-heroku-portal",title:"Create a Redis database on Heroku",sidebar_label:"Redis on Heroku",slug:"/create/heroku/portal",authors:["ajeet"]},sidebar:"docs",previous:{title:"Overview",permalink:"/create/heroku"},next:{title:"How to deploy a Java based application on Heroku using Redis",permalink:"/create/heroku/herokujava"}},u={},p=[{value:"Using Redis Enterprise Cloud directly",id:"using-redis-enterprise-cloud-directly",level:3},{value:"Step 1. Create Redis Enterprise Cloud",id:"step-1-create-redis-enterprise-cloud",level:4},{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",level:4},{value:"Step 3. Install Heroku CLI on your system",id:"step-3-install-heroku-cli-on-your-system",level:4},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",level:4},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",level:4},{value:"Clone the repository",id:"clone-the-repository",level:4},{value:"Step 6. Setting up environment variables",id:"step-6-setting-up-environment-variables",level:4},{value:"Step 7. Pushing the code to Git",id:"step-7-pushing-the-code-to-git",level:4},{value:"Step 8. Accessing the app",id:"step-8-accessing-the-app",level:4},{value:"Using Heroku CLI",id:"using-heroku-cli",level:4},{value:"Step 1: Install Heroku",id:"step-1-install-heroku",level:4},{value:"Step 2: Cloning the application",id:"step-2-cloning-the-application",level:4},{value:"Step 3. Create a heroku app",id:"step-3-create-a-heroku-app",level:4},{value:"Step 4. Start by installing the add-on:",id:"step-4-start-by-installing-the-add-on",level:4},{value:"Step 5. Accessing the Redis Enterprise Cloud dashboard",id:"step-5-accessing-the-redis-enterprise-cloud-dashboard",level:4},{value:"Step 6. Pushing the code to Heroku",id:"step-6-pushing-the-code-to-heroku",level:4},{value:"Step 7. Accessing the app",id:"step-7-accessing-the-app",level:4},{value:"Using Heroku Dashboard",id:"using-heroku-dashboard",level:4},{value:"Step 1: Sign up for a Heroku account",id:"step-1-sign-up-for-a-heroku-account",level:4},{value:"Step 2. Create a new Heroku app",id:"step-2-create-a-new-heroku-app",level:4},{value:"Step 3. Choose GitHub",id:"step-3-choose-github",level:4},{value:"Step 4. Connect to GitHub",id:"step-4-connect-to-github",level:4},{value:"Step 5. Install Redis Enteprise Cloud as an add-on",id:"step-5-install-redis-enteprise-cloud-as-an-add-on",level:4},{value:"Step 6. Fill up order online form",id:"step-6-fill-up-order-online-form",level:4},{value:"Step 7. Deploy the app",id:"step-7-deploy-the-app",level:4},{value:"Step 8. Accessing the app",id:"step-8-accessing-the-app-1",level:4},{value:"Next Steps",id:"next-steps",level:3}],c={toc:p};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Heroku is a cloud Platform as a Service (PaaS) supporting multiple programming languages that is used as a web application deployment model. Heroku lets the developer build, run and scale applications in a similar manner across all the languages(Java, Node.js, Scala, Clojure, Python, PHP, Ruby and Go)."),(0,o.kt)(i.Z,{defaultValue:"direct",values:[{label:"Direct via Redis Enterprise Cloud",value:"direct"},{label:"Addons using Heroku CLI",value:"CLI"},{label:"Addons using Heroku Dashboard",value:"dashboardui"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"direct",mdxType:"TabItem"},(0,o.kt)("h3",{id:"using-redis-enterprise-cloud-directly"},"Using Redis Enterprise Cloud directly"),(0,o.kt)("p",null,"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and queue. Redis cache delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT."),(0,o.kt)("p",null,"Redis Cloud is a fully-managed cloud service for hosting and running your Redis dataset in a highly-available and scalable manner, with predictable and stable top performance. Redis Enterprise cloud allows you to run Redis server over the Cloud and access instance via multiple ways like RedisInsight, redis command line as well as client tools. You can quickly and easily get your apps up and running with Redis Cloud through its Redis Heroku addons , just tell us how much memory you need and get started instantly with your first Redis database. You can then add more Redis databases (each running in a dedicated process, in a non-blocking manner) and increase or decrease the memory size of your plan without affecting your existing data."),(0,o.kt)("p",null,"::tip INFO\nHeroku addons are set of tools and services for developing, extending, and operating your app.\n:::"),(0,o.kt)("p",null,"You can quickly and easily get your apps up and running with Redis Enterprise Cloud directly. Follow the below steps:"),(0,o.kt)("h4",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),(0,o.kt)("p",null,"Create your free Redis Enterprise Cloud account by visiting ",(0,o.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"this link")),(0,o.kt)("admonition",{title:"TIP",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For a limited time, use ",(0,o.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,o.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,o.kt)("p",{parentName:"admonition"},"\ud83c\udf89 ",(0,o.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"recloud",src:a(15659).Z,width:"2344",height:"1662"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/create/rediscloud"},"Follow this link to create a Redis Enterprise Cloud")," subscription and database. Once you create the database, you will be provisioned with a unique database endpoint URL, port and password. Save these for future reference."),(0,o.kt)("p",null,"Before you proceed with heroku redis, ensure that you can connect to Redis instance and verify if it is accessible via redis-cli command. You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," command that is available in redis client software to see the version, memory usage, stats, and modules enabled in the Redis cloud database."),(0,o.kt)("h4",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),(0,o.kt)("p",null,"If you are using Heroku for the first time, create your new Heroku account ",(0,o.kt)("a",{parentName:"p",href:"https://signup.heroku.com/login"},"through this link"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(71972).Z,width:"900",height:"1156"})),(0,o.kt)("h4",{id:"step-3-install-heroku-cli-on-your-system"},"Step 3. Install Heroku CLI on your system"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-macos"}," brew install heroku\n")),(0,o.kt)("h4",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),(0,o.kt)("h4",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),(0,o.kt)("p",null,"For this demonstration, we will be using a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/basic-rate-limiting-demo-python"},"Sample Rate Limiting application"),"."),(0,o.kt)("h4",{id:"clone-the-repository"},"Clone the repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/basic-rate-limiting-demo-python\n")),(0,o.kt)("p",null,"Run the commands below to get a functioning Git repository that contains a simple application as well as a package.json file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," heroku create\n Creating app... done, \u2b22 lit-bayou-75670\n https://lit-bayou-75670.herokuapp.com/ | https://git.heroku.com/lit-bayou-75670.git\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(34494).Z,width:"1240",height:"484"})),(0,o.kt)("h4",{id:"step-6-setting-up-environment-variables"},"Step 6. Setting up environment variables"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/create/rediscloud"},"Follow this link to create a Redis Enterprise Cloud"),' subscription and database connection as shown below: Go to the Heroku dashboard, click "Settings" and set ',(0,o.kt)("inlineCode",{parentName:"p"},"REDIS_URL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"REDIS_PASSWORD")," under the Config Vars. (Please note that the Redis URL endpoint is unique and might be different in your case. Please enter the values accordingly)"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/create/heroku/portal#step-1-create-redis-enterprise-cloud"},"Step 1")," for the correct values to use."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(49945).Z,width:"2204",height:"1224"})),(0,o.kt)("h4",{id:"step-7-pushing-the-code-to-git"},"Step 7. Pushing the code to Git"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," git push heroku\n remote: -----\x3e Build succeeded!\n remote: -----\x3e Discovering process types\n remote:        Procfile declares types -> web\n remote:\n remote: -----\x3e Compressing...\n remote:        Done: 32.9M\n remote: -----\x3e Launching...\n remote:        Released v5\n remote:        https://lit-bayou-75670.herokuapp.com/ deployed to Heroku\n remote:\n remote: Verifying deploy... done.\n To https://git.heroku.com/lit-bayou-75670.git\n * [new branch]      main -> main\n")),(0,o.kt)("p",null,"Check the logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," heroku logs --tail\n 2021-03-27T03:48:30.000000+00:00 app[api]: Build succeeded\n 2021-03-27T03:48:33.956884+00:00 heroku[web.1]: Starting process with command `node server/index.js`\n 2021-03-27T03:48:36.196827+00:00 app[web.1]: App listening on port 11893\n")),(0,o.kt)("h4",{id:"step-8-accessing-the-app"},"Step 8. Accessing the app"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(11611).Z,width:"1518",height:"1016"}))),(0,o.kt)(r.Z,{value:"CLI",mdxType:"TabItem"},(0,o.kt)("h4",{id:"using-heroku-cli"},"Using Heroku CLI"),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Please note that this method won't allow you to choose Redis Modules while creating your Redis database. Also, it doesn't provide you with the flexibility to choose the Cloud platform of your choice. It is recommended to use Redis Enterprise Cloud directly. ",(0,o.kt)("a",{parentName:"p",href:"/create/rediscloud"},"Click here to learn more"),".")),(0,o.kt)("p",null,"In this section, we will create a Heroku account, use the Heroku CLI to login and add Redis Enterprise Cloud as an add-on."),(0,o.kt)("h4",{id:"step-1-install-heroku"},"Step 1: Install Heroku"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," $ brew tap heroku/brew && brew install heroku\n")),(0,o.kt)("p",null,"Assuming that you have already created a Heroku, run the command to below login into Heroku:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," $ heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/4788f936-3557-439f-ab37-95338b735cf2?requestor=XXXXXXXXXXXA.vhF7XtVTtsp9xliwwrHG5ytuirrmn9EfT6Ef3WuzXFE\n Logging in... done\n Logged in as your_email_address\n")),(0,o.kt)("h4",{id:"step-2-cloning-the-application"},"Step 2: Cloning the application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," $ git clone https://github.com/redis-developer/basic-redis-rate-limiting-demo-nodejs\n")),(0,o.kt)("h4",{id:"step-3-create-a-heroku-app"},"Step 3. Create a heroku app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," $ heroku create\n Creating app... done, \u2b22 lit-island-48230\n https://lit-island-48230.herokuapp.com/ | https://git.heroku.com/lit-island-48230.git\n")),(0,o.kt)("h4",{id:"step-4-start-by-installing-the-add-on"},"Step 4. Start by installing the add-on:"),(0,o.kt)("p",null,"Ensure that you don\u2019t have existing add-ons added in your account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," $ heroku addons:create rediscloud -a lit-island-48230\n Creating rediscloud on \u2b22 lit-island-48230... free\n Created rediscloud-asymmetrical-85190 as REDISCLOUD_URL\n Use heroku addons:docs rediscloud to view documentation\n")),(0,o.kt)("p",null,"Once Redis Cloud has been added, you will notice a REDISCLOUD_URL config var in your Heroku config containing the username, password, hostname and port of your first Redis Cloud database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," heroku config:get REDISCLOUD_URL -a lit-island-48230\n redis://default:ajSE7DuqhmGG7u2ZbSU0HTuEqTx1FuEQ@redis-17268.c256.us-east-1-2.ec2.cloud.redislabs.com:17268\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," $ heroku addons:info rediscloud\n === rediscloud-asymmetrical-85190\n Attachments:  lit-island-48230::REDISCLOUD\n Installed at: Fri Mar 26 2021 07:52:43 GMT+0530 (India Standard Time)\n Owning app:   lit-island-48230\n Plan:         rediscloud:30\n Price:        free\n State:        created\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," heroku config -a lit-island-48230\n === lit-island-48230 Config Vars\n REDISCLOUD_URL: redis://default:ajSE7DuqhmGG7u2ZbSU0HTuEqTx1FuEQ@redis-17268.c256.us-east-1-2.ec2.cloud.redislabs.com:17268\n")),(0,o.kt)("h4",{id:"step-5-accessing-the-redis-enterprise-cloud-dashboard"},"Step 5. Accessing the Redis Enterprise Cloud dashboard"),(0,o.kt)("p",null,"Go to Heroku and click on \u201cInstalled add-ons\u201d:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(63019).Z,width:"1248",height:"654"})),(0,o.kt)("p",null,"Click on \u201cRedis Enterprise Cloud\u201d and you will be redirected to the Redis Enterprise Cloud Dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(51828).Z,width:"1210",height:"840"})),(0,o.kt)("h4",{id:"step-6-pushing-the-code-to-heroku"},"Step 6. Pushing the code to Heroku"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," $ git push heroku\n\n\n remote: -----\x3e Launching...\n remote:        Released v8\n remote:        https://lit-island-48230.herokuapp.com/ deployed to Heroku\n remote:\n remote: Verifying deploy... done.\n To https://git.heroku.com/lit-island-48230.git\n * [new branch]      master -> master\n")),(0,o.kt)("h4",{id:"step-7-accessing-the-app"},"Step 7. Accessing the app"),(0,o.kt)("p",null,"Open ",(0,o.kt)("a",{parentName:"p",href:"https://lit-island-48230.herokuapp.com/"},"https://lit-island-48230.herokuapp.com/")," and access the rate limiting app."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(31229).Z,width:"3164",height:"1110"}))),(0,o.kt)(r.Z,{value:"dashboardui",mdxType:"TabItem"},(0,o.kt)("h4",{id:"using-heroku-dashboard"},"Using Heroku Dashboard"),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Please note that this method won't allow you to choose Redis Modules while creating a Redis database. Also, it doesn't provide you with the flexibility to choose the Cloud platform of your choice. It is recommended to use Redis Enterprise Cloud directly. ",(0,o.kt)("a",{parentName:"p",href:"/create/rediscloud"},"Click here to learn more"),".")),(0,o.kt)("h4",{id:"step-1-sign-up-for-a-heroku-account"},"Step 1: Sign up for a Heroku account"),(0,o.kt)("p",null,"Create a Heroku account and sign-in to the dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(71972).Z,width:"900",height:"1156"})),(0,o.kt)("h4",{id:"step-2-create-a-new-heroku-app"},"Step 2. Create a new Heroku app"),(0,o.kt)("p",null,'Create a new app called "redislabs":'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(23834).Z,width:"1732",height:"970"})),(0,o.kt)("h4",{id:"step-3-choose-github"},"Step 3. Choose GitHub"),(0,o.kt)("p",null,'Select "GitHub" as a deployment method:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(73643).Z,width:"2336",height:"1546"})),(0,o.kt)("h4",{id:"step-4-connect-to-github"},"Step 4. Connect to GitHub"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(47763).Z,width:"2384",height:"1404"})),(0,o.kt)("h4",{id:"step-5-install-redis-enteprise-cloud-as-an-add-on"},"Step 5. Install Redis Enteprise Cloud as an add-on"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(21239).Z,width:"2244",height:"1402"})),(0,o.kt)("h4",{id:"step-6-fill-up-order-online-form"},"Step 6. Fill up order online form"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(15322).Z,width:"1200",height:"1196"})),(0,o.kt)("h4",{id:"step-7-deploy-the-app"},"Step 7. Deploy the app"),(0,o.kt)("p",null,"Before deploying the app, modify the environment variables as per your application:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(65641).Z,width:"2526",height:"1010"})),(0,o.kt)("p",null,'Go to the "Deploy" section of the application dashboard and click on "Deploy Branch":'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(32527).Z,width:"2310",height:"1382"})),(0,o.kt)("p",null,'Click "Open App" on the top right corner.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(75270).Z,width:"2250",height:"776"})),(0,o.kt)("h4",{id:"step-8-accessing-the-app-1"},"Step 8. Accessing the app"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:a(23839).Z,width:"1458",height:"1260"})))),(0,o.kt)("h3",{id:"next-steps"},"Next Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/howtos/herokujava"},"How to build a Java based Rate Limiting application on Heroku using Redis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/howtos/herokunodejs"},"How to build a NodeJS based Rate Limiting application on Heroku using Redis"))),(0,o.kt)("h2",{id:""}),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}h.isMDXComponent=!0},71972:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},75270:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_access2-6525dd8ed268d1171be38fb9a0ba5297.png"},63019:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_addons-516dc4153d01654e6c394343a104abae.png"},34494:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_app01-8d9f92a6758e08bfeb54d474cf68002c.png"},49945:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_app01_env-46c06e6a07f920ca138d4a678a4181a1.png"},23834:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_appname-82828489a5964ce2650a1a2e26235b99.png"},65641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_env1-436dbe359ecbcb973accb329a3873f5f.png"},32527:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_finaldeploy-aa34e94d216228ec49b16bb103128a28.png"},23839:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_finalratelimit-45a120bc198e8c961a01c13fb1c3dc0b.png"},47763:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_gitconnect-e2f559cd6f31b66db8db98bc91e7d107.png"},15322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_orderform-dfb2482215965b783d10495c8e76ad83.png"},31229:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_ratelimiting1-536e63f33448af8ad5c84987300831e4.png"},21239:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_recloudinstall1-b3308edc29da48ebaf44b6c50a7b614e.png"},51828:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_rediscloud1-57b647021feaaa9b517a1076c7ff72f7.png"},73643:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/heroku_selectgit-832a6200b6461f5a86904f06800d8f2f.png"},11611:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ratelimiting-0a76b60e4b3861e1190062d5029b86d9.png"},15659:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tryfree-66b6db6824895fafae395464150190f8.png"}}]);