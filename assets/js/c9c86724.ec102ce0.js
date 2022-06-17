"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9966],{1203:function(e,t,i){i.d(t,{Z:function(){return y}});var o=i(67294),n=i(3905),a=i(48811),l="riContainer_bco2",s="riDescriptionShort_E27B",r="riDetail_wzFs",u="riIcon_yDou",c="riTitle_x6vI",p="riDescription_RDnu",d="riMore_apRP",f=i(86010),y=function(e){var t=o.useState(!1),i=t[0],y=t[1];return o.createElement("a",{href:e.page,className:l},o.createElement("div",{className:s},o.createElement("div",{className:u},o.createElement("span",{className:"fe fe-zap"})),o.createElement("div",{className:r},o.createElement("div",{className:c},o.createElement("a",{href:e.page},e.title)),o.createElement("div",{className:p},e.description,o.Children.count(e.children)>0&&o.createElement("span",{className:(0,f.Z)(d,"fe","fe-more-horizontal"),onClick:function(){return y(!i)}})))),i&&o.createElement("div",{className:"ri-description-long"},o.createElement(n.Zo,{components:a.Z},e.children)))}},77707:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var o=i(87462),n=i(63366),a=(i(67294),i(3905)),l=i(1203),s=["components"],r={id:"index-deploy-docusaurus-to-netlify",title:"How to Deploy Docusaurus to Netlify in 5 Minutes",sidebar_label:"Deploy Docusaurus to Netlify in 5 Minutes",slug:"/create/netlify/deploy-docusaurus-to-netlify",authors:["ajeet"]},u=void 0,c={unversionedId:"create/netlify/deploy-docusaurus-to-netlify/index-deploy-docusaurus-to-netlify",id:"create/netlify/deploy-docusaurus-to-netlify/index-deploy-docusaurus-to-netlify",title:"How to Deploy Docusaurus to Netlify in 5 Minutes",description:"Millions of developers use Netlify to instantly build, deploy and scale their modern web applications. The platform comes with the first class-support for every popular framework like JAMstack, React, VueJS, NextJS, Gatsby, AngularJS, Nuxt, Eleventy, Svelte, Hugo, Astro and so on.",source:"@site/docs/create/netlify/deploy-docusaurus-to-netlify/index-deploy-docusaurus-to-netlify.mdx",sourceDirName:"create/netlify/deploy-docusaurus-to-netlify",slug:"/create/netlify/deploy-docusaurus-to-netlify",permalink:"/create/netlify/deploy-docusaurus-to-netlify",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/netlify/deploy-docusaurus-to-netlify/index-deploy-docusaurus-to-netlify.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-deploy-docusaurus-to-netlify",title:"How to Deploy Docusaurus to Netlify in 5 Minutes",sidebar_label:"Deploy Docusaurus to Netlify in 5 Minutes",slug:"/create/netlify/deploy-docusaurus-to-netlify",authors:["ajeet"]},sidebar:"docs",previous:{title:"Getting Started with Netlify and Redis",permalink:"/create/netlify/getting-started-with-netlify"},next:{title:"Getting Started with Vercel and Redis",permalink:"/create/vercel"}},p={},d=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Step 1. Sign-in for a new Netlify Account",id:"step-1-sign-in-for-a-new-netlify-account",level:3},{value:"Step 2. Connect your Netlify account to your Git Provider",id:"step-2-connect-your-netlify-account-to-your-git-provider",level:3},{value:"Step 3. Import the project files to your GitHub account",id:"step-3-import-the-project-files-to-your-github-account",level:3},{value:"Step 4. Allow Netlify to access the GitHub repository",id:"step-4-allow-netlify-to-access-the-github-repository",level:3},{value:"Step 5. Configure site settings for Netlify",id:"step-5-configure-site-settings-for-netlify",level:3},{value:"Step 6. Deploy your static website",id:"step-6-deploy-your-static-website",level:3},{value:"Step 7. Visit your new Docusaurus site on Netlify",id:"step-7-visit-your-new-docusaurus-site-on-netlify",level:3},{value:"References",id:"references",level:3}],f={toc:d};function y(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Millions of developers use Netlify to instantly build, deploy and scale their modern web applications. The platform comes with the first class-support for every popular framework like JAMstack, React, VueJS, NextJS, Gatsby, AngularJS, Nuxt, Eleventy, Svelte, Hugo, Astro and so on."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MyImage",src:i(96822).Z,width:"1456",height:"884"})),(0,a.kt)("p",null,"The Netlify platform allows developers to build and deploy their website to the global network (CDN) from Git in a convenient way. It delivers out-of-the-box continuous integration and continuous deployment. Developers love Netlify because it allows them to focus on building and deploying apps by abstracting all the maintenance work away from them. Features like free SSL, Custom Domain, deploy previews, functions and workflows etc makes Netlify the most comprehensive platform for web projects."),(0,a.kt)("p",null,"Netlify CMS is an open source tool that allows non-technical users to easily manage and update content generated by a static site generator.\n",(0,a.kt)("a",{parentName:"p",href:"https://www.netlifycms.org/docs/intro/"},"Here's a documentation link")," for Netlify CMS if you're interested to learn more."),(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"col"},(0,a.kt)(l.Z,{title:"How to get started with Netlify",description:"Learn how to deploy and host a Next.js app using Netlify ",page:"/create/netlify/getting-started-with-netlify",mdxType:"RedisCard"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/create/netlify/getting-started-with-netlify"},"In the last blog post"),", we leveraged ",(0,a.kt)("a",{parentName:"p",href:"https://docs.netlify.com/cli/get-started/"},"Netlify CLI")," to build a simple Next.js application built using TailwindCSS and Redis.\nIn this blog, you will see how to deploy a Docusaurus website to Netlify Dashboard UI in 5 minutes."),(0,a.kt)("p",null,"Let's get started.."),(0,a.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1. Sign-in for a new Netlify Account"),(0,a.kt)("li",{parentName:"ul"},"Step 2. Connect Netlify to a Git Provider"),(0,a.kt)("li",{parentName:"ul"},"Step 3. Import the GitHub repo to your GitHub account"),(0,a.kt)("li",{parentName:"ul"},"Step 4. Provide Netlify access to your GitHub repo"),(0,a.kt)("li",{parentName:"ul"},"Step 5. Configure site settings for Netlify"),(0,a.kt)("li",{parentName:"ul"},"Step 6. Deploy your static website"),(0,a.kt)("li",{parentName:"ul"},"Step 7. Visit your new Docusaurus site on Netlify")),(0,a.kt)("h3",{id:"step-1-sign-in-for-a-new-netlify-account"},"Step 1. Sign-in for a new Netlify Account"),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://app.netlify.com/"},"https://app.netlify.com/")," and sign up for a Netlify account."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MyImage",src:i(22694).Z,width:"1232",height:"1086"})),(0,a.kt)("h3",{id:"step-2-connect-your-netlify-account-to-your-git-provider"},"Step 2. Connect your Netlify account to your Git Provider"),(0,a.kt)("p",null,"Netlify allows you to sign-in using various authentication services, including GitHub, GitLab, Bitbucket, Email and SSO.\nFor this demo we'll use GitHub. Sign into GitHub to connect it to Netlify."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MyImage",src:i(99442).Z,width:"1224",height:"908"})),(0,a.kt)("h3",{id:"step-3-import-the-project-files-to-your-github-account"},"Step 3. Import the project files to your GitHub account"),(0,a.kt)("p",null,"Once you connect your Netlify account to GitHub, you can start collaborating with your other team members.\nBefore we do that, let's push a sample Docusaurus site to our Git repository. You can use a generic Docusaurus site if you want. The Redis Developer Hub is built on Docusaurus, so we are using that instead."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MyImage",src:i(64993).Z,width:"493",height:"339"})),(0,a.kt)("h3",{id:"step-4-allow-netlify-to-access-the-github-repository"},"Step 4. Allow Netlify to access the GitHub repository"),(0,a.kt)("p",null,"Next, Netlify will allow you to import an existing project from a GitHub repository as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MyImage",src:i(96725).Z,width:"1344",height:"972"})),(0,a.kt)("h3",{id:"step-5-configure-site-settings-for-netlify"},"Step 5. Configure site settings for Netlify"),(0,a.kt)("p",null,"There are two essential settings/changes that need to be configured.\nFirst, change the URL under ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to any other random URL as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"....\nmodule.exports = {\n  title: 'Redis Developer Hub',\n  tagline: 'The Home of Redis Developers',\n  url: 'https://docusaurus-2.netlify.app',\n  baseUrl: '/',\n  onBrokenLinks: 'throw',\n...\n...\n")),(0,a.kt)("p",null,"Secondly, you will need to add a build command as shown below:\n",(0,a.kt)("img",{alt:"MyImage",src:i(8132).Z,width:"1244",height:"1012"})),(0,a.kt)("h3",{id:"step-6-deploy-your-static-website"},"Step 6. Deploy your static website"),(0,a.kt)("p",null,'Click "Deploys" on the top navigation, you will see an option "Trigger Deploy" on the right-side.\nChoose "Deploy site". If you are performing it for the second time, then choose "Clear cache and deploy site" option.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MyImage",src:i(16937).Z,width:"1236",height:"996"})),(0,a.kt)("p",null,'Monitor the "Deploy Log" carefully to see if any error messages appear in the log.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MyImage",src:i(98585).Z,width:"1242",height:"1090"})),(0,a.kt)("p",null,"You should now be able to see your Docusaurus site hosted on port 3000.\n",(0,a.kt)("img",{alt:"MyImage",src:i(40285).Z,width:"1242",height:"1104"})),(0,a.kt)("h3",{id:"step-7-visit-your-new-docusaurus-site-on-netlify"},"Step 7. Visit your new Docusaurus site on Netlify"),(0,a.kt)("p",null,'Go to "Sites" on the top navigation menu and click on the latest preview build.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MyImage",src:i(39766).Z,width:"1236",height:"602"})),(0,a.kt)("p",null,"You will able to see that Netlify uploads site assets to a content delivery network and makes your site available.\n",(0,a.kt)("img",{alt:"MyImage",src:i(28338).Z,width:"1318",height:"828"})),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/redis-developer.github.io"},"Redis Developer Hub Source Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.netlify.com/products/build/"},"Netlify Build - A Modern CI-CD Infrastructure for Frontend Teams")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.netlify.com/products/functions/"},"Netlify Functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.netlify.com/products/edge/"},"Netlify Edge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.netlify.com/products/workflow/"},"Netlify WorkFlow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.netlify.com/products/analytics/"},"Netlify Analytics"))))}y.isMDXComponent=!0},98585:function(e,t,i){t.Z=i.p+"assets/images/netlify-deploylog-60710548a922b57140d4cc7fc041af50.png"},96725:function(e,t,i){t.Z=i.p+"assets/images/netlify-importcode-76c7c587d1d67ad5647c4591a06420ef.png"},64993:function(e,t,i){t.Z=i.p+"assets/images/netlify-importexisting-ff6887a0192f83fa151dfe5abbae342d.png"},22694:function(e,t,i){t.Z=i.p+"assets/images/netlify-signin-4505afbb47a776baf56d46ef3052e056.png"},40285:function(e,t,i){t.Z=i.p+"assets/images/netlify-success-205684c92f4fd7dbcc942f89c2c03fd6.png"},8132:function(e,t,i){t.Z=i.p+"assets/images/netlify_buildenviron-9b7b68155aced05f8482661710c15f7b.png"},39766:function(e,t,i){t.Z=i.p+"assets/images/netlify_clickpreview-fc45e6940cbbfca3aa16a6eb6eab1397.png"},28338:function(e,t,i){t.Z=i.p+"assets/images/netlify_devhub-e9a64d88208aa325f9492b109924ddb1.png"},99442:function(e,t,i){t.Z=i.p+"assets/images/netlify_git-05f789a882ad6e982ab1dc8ca67d6708.png"},16937:function(e,t,i){t.Z=i.p+"assets/images/netlify_sitedeploy-inprogress-f162411a67ad904bfc52814395b6a845.png"},96822:function(e,t,i){t.Z=i.p+"assets/images/preview-c0dfb454759a8a27e0eec0002ed05843.png"}}]);