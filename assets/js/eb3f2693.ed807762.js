"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6106],{85162:function(e,t,i){i.d(t,{Z:function(){return l}});var n=i(67294),s=i(86010),a="tabItem_Ymn6";function l(e){var t=e.children,i=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(a,l),hidden:i},t)}},65488:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(87462),s=i(67294),a=i(86010),l=i(72389),r=i(67392),o=i(7094),d=i(12466),h="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,i,l=e.lazy,p=e.block,c=e.defaultValue,m=e.values,g=e.groupId,k=e.className,f=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,r.l)(v,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(i=f.find((function(e){return e.props.default})))?void 0:i.props.value)?t:f[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.U)(),I=y.tabGroupChoices,R=y.setTabGroupChoices,S=(0,s.useState)(b),N=S[0],T=S[1],C=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=I[g];null!=E&&E!==N&&v.some((function(e){return e.value===E}))&&T(E)}var D=function(e){var t=e.currentTarget,i=C.indexOf(t),n=v[i].value;n!==N&&(x(t),T(n),null!=g&&R(g,String(n)))},Z=function(e){var t,i=null;switch(e.key){case"ArrowRight":var n,s=C.indexOf(e.currentTarget)+1;i=null!=(n=C[s])?n:C[0];break;case"ArrowLeft":var a,l=C.indexOf(e.currentTarget)-1;i=null!=(a=C[l])?a:C[C.length-1]}null==(t=i)||t.focus()};return s.createElement("div",{className:(0,a.Z)("tabs-container",h)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},k)},v.map((function(e){var t=e.value,i=e.label,l=e.attributes;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return C.push(e)},onKeyDown:Z,onFocus:D,onClick:D},l,{className:(0,a.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=i?i:t)}))),l?(0,s.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,l.Z)();return s.createElement(p,(0,n.Z)({key:String(t)},e))}},1203:function(e,t,i){i.d(t,{Z:function(){return m}});var n=i(67294),s=i(3905),a=i(48811),l="riContainer_bco2",r="riDescriptionShort_E27B",o="riDetail_wzFs",d="riIcon_yDou",h="riTitle_x6vI",u="riDescription_RDnu",p="riMore_apRP",c=i(86010),m=function(e){var t=n.useState(!1),i=t[0],m=t[1];return n.createElement("a",{href:e.page,className:l},n.createElement("div",{className:r},n.createElement("div",{className:d},n.createElement("span",{className:"fe fe-zap"})),n.createElement("div",{className:o},n.createElement("div",{className:h},n.createElement("a",{href:e.page},e.title)),n.createElement("div",{className:u},e.description,n.Children.count(e.children)>0&&n.createElement("span",{className:(0,c.Z)(p,"fe","fe-more-horizontal"),onClick:function(){return m(!i)}})))),i&&n.createElement("div",{className:"ri-description-long"},n.createElement(s.Zo,{components:a.Z},e.children)))}},68147:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return c}});var n=i(87462),s=i(63366),a=(i(67294),i(3905)),l=i(65488),r=i(85162),o=(i(44996),i(1203),["components"]),d={id:"index-gettingstarted",title:"Getting Started with RedisInsight",sidebar_label:"Getting Started with RedisInsight",slug:"/explore/redisinsight/getting-started",authors:["ajeet"]},h=void 0,u={unversionedId:"explore/redisinsight/getting-started/index-gettingstarted",id:"explore/redisinsight/getting-started/index-gettingstarted",title:"Getting Started with RedisInsight",description:"RedisInsight is an intuitive and efficient GUI for Redis, allowing you to interact with your databases and manage your data\u2014with built-in support for most popular Redis modules. It is a 100% free Redis GUI tool that allows you to visualise, monitor, and optimize while developing your applications with Redis",source:"@site/docs/explore/redisinsight/getting-started/index-gettingstarted.mdx",sourceDirName:"explore/redisinsight/getting-started",slug:"/explore/redisinsight/getting-started",permalink:"/explore/redisinsight/getting-started",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/getting-started/index-gettingstarted.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-gettingstarted",title:"Getting Started with RedisInsight",sidebar_label:"Getting Started with RedisInsight",slug:"/explore/redisinsight/getting-started",authors:["ajeet"]},sidebar:"docs",previous:{title:"Overview",permalink:"/explore/redisinsight"},next:{title:"Visualize Redis database keys using RedisInsight Browser Tool",permalink:"/explore/redisinsight/browser"}},p={},c=[{value:"Getting Started with RedisInsight",id:"getting-started-with-redisinsight",level:3},{value:"Using MacOS",id:"using-macos",level:4},{value:"Step 1. Download RedisInsight",id:"step-1-download-redisinsight",level:4},{value:"Step 2. Install RedisInsight",id:"step-2-install-redisinsight",level:4},{value:"Step 3. Connect to Redis database",id:"step-3-connect-to-redis-database",level:4},{value:"Step 4. Add Redis Database",id:"step-4-add-redis-database",level:4},{value:"Step 5. Run the Redis CLI",id:"step-5-run-the-redis-cli",level:4},{value:"Using Linux",id:"using-linux",level:4},{value:"Step 1. Download RedisInsight",id:"step-1-download-redisinsight-1",level:4},{value:"Step 2. Install RedisInsight",id:"step-2-install-redisinsight-1",level:4},{value:"Step 3. Start RedisInsight.",id:"step-3-start-redisinsight",level:4},{value:"Step 4. Connect to Redis database",id:"step-4-connect-to-redis-database",level:4},{value:"Step 5. Run the Redis CLI",id:"step-5-run-the-redis-cli-1",level:4},{value:"Using Windows",id:"using-windows",level:4},{value:"Step 1. Download RedisInsight",id:"step-1-download-redisinsight-2",level:4},{value:"Step 2. Install RedisInsight",id:"step-2-install-redisinsight-2",level:4},{value:"Step 3. Accessing RedisInsight",id:"step-3-accessing-redisinsight",level:4},{value:"Step 4. Connect to a Redis database",id:"step-4-connect-to-a-redis-database",level:4},{value:"Step 5. Run the Redis CLI",id:"step-5-run-the-redis-cli-2",level:4},{value:"Using Docker",id:"using-docker",level:4},{value:"Step 1. Install Docker",id:"step-1-install-docker",level:4},{value:"Step 2. Run RedisInsight Docker image",id:"step-2-run-redisinsight-docker-image",level:4},{value:"Step 3. Accessing RedisInsight",id:"step-3-accessing-redisinsight-1",level:4},{value:"Step 4. Connect to a Redis database",id:"step-4-connect-to-a-redis-database-1",level:4},{value:"Step 5. Run the Redis CLI",id:"step-5-run-the-redis-cli-3",level:4},{value:"Using Kubernetes",id:"using-kubernetes",level:4},{value:"Step 1. Create the RedisInsight deployment and service",id:"step-1-create-the-redisinsight-deployment-and-service",level:4},{value:"Step 2. Create a new file redisinsight.yaml with the content below",id:"step-2-create-a-new-file-redisinsightyaml-with-the-content-below",level:4},{value:"Step 3. Create the RedisInsight deployment and service",id:"step-3-create-the-redisinsight-deployment-and-service",level:4},{value:"Step 4. Accessing RedisInsight",id:"step-4-accessing-redisinsight",level:4},{value:"Step 5. Create the RedisInsight deployment without a service.",id:"step-5-create-the-redisinsight-deployment-without-a-service",level:4},{value:"Create a new file redisinsight.yaml with the content below",id:"create-a-new-file-redisinsightyaml-with-the-content-below",level:4},{value:"Step 6. Create the RedisInsight deployment",id:"step-6-create-the-redisinsight-deployment",level:4},{value:"Step 7. Run the Redis CLI",id:"step-7-run-the-redis-cli",level:4},{value:"RedisInsight Overview (RedisConf&#39;21)",id:"redisinsight-overview-redisconf21",level:3},{value:"Further References",id:"further-references",level:3}],m={toc:c};function g(e){var t=e.components,d=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"RedisInsight is an intuitive and efficient GUI for Redis, allowing you to interact with your databases and manage your data\u2014with built-in support for most popular Redis modules. It is a 100% free Redis GUI tool that allows you to visualise, monitor, and optimize while developing your applications with Redis"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"my image",src:i(21274).Z,width:"1361",height:"619"})),(0,a.kt)("p",null,"RedisInsight provides built-in support for the RedisJSON, RediSearch, RedisGraph, Redis Streams, and RedisTimeSeries modules to make it even easier to query, visualize, and interactively manipulate search indexes, graphs, streams, and time-series data."),(0,a.kt)("p",null,"A full-featured pure desktop GUI client, RedisInsight is available for Windows, macOS, and Linux and is fully compatible with Redis Enterprise. It works with any cloud provider as long as you run it on a host with network access to your cloud-based Redis server. RedisInsight makes it easy to discover cloud databases and configure connection details with a single click. It allows you to automatically add Redis Enterprise Software and Redis Enterprise Cloud databases."),(0,a.kt)("h3",{id:"getting-started-with-redisinsight"},"Getting Started with RedisInsight"),(0,a.kt)(l.Z,{defaultValue:"MacOS",values:[{label:"MacOS",value:"MacOS"},{label:"Linux",value:"Linux"},{label:"Windows",value:"Windows"},{label:"Docker",value:"Docker"},{label:"Kubernetes",value:"Kubernetes"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"MacOS",mdxType:"TabItem"},(0,a.kt)("h4",{id:"using-macos"},"Using MacOS"),(0,a.kt)("h4",{id:"step-1-download-redisinsight"},"Step 1. Download RedisInsight"),(0,a.kt)("p",null,"To use RedisInsight on Mac OS, download it from the RedisInsight page on the Redis website:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"Click this link ")," to access a form that allows you to select the operating system of your choice."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(36689).Z,width:"1574",height:"1402"})),(0,a.kt)("p",null,"Fill out the rest of the form and click \u201cDownload.\u201d Please note that the package name is the combination of the platform and version as shown here:"),(0,a.kt)("p",null,"redisinsight-platform-version"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TIP")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you're using Redis Stack, you don't really need to install RedisInsight separately.\nRedis Stack includes RedisInsight, a visualization tool for understanding and optimizing Redis data."))),(0,a.kt)("h4",{id:"step-2-install-redisinsight"},"Step 2. Install RedisInsight"),(0,a.kt)("p",null,"Click on the RedisInsight executable and install it in your system."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(2211).Z,width:"1198",height:"622"})),(0,a.kt)("p",null,"Head over to your web browser and go to http://localhost:8001"),(0,a.kt)("p",null,"Congratulations! You have successfully installed RedisInsight and are now ready to inspect your Redis data, monitor database health, and perform runtime server configuration with this browser-based management interface for your Redis deployment."),(0,a.kt)("h4",{id:"step-3-connect-to-redis-database"},"Step 3. Connect to Redis database"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(52087).Z,width:"1822",height:"636"})),(0,a.kt)("p",null,'Assuming that you already have Redis database up and running, select "Connect to a Redis database"\n',(0,a.kt)("img",{alt:"My Image",src:i(16546).Z,width:"1790",height:"838"})),(0,a.kt)("h4",{id:"step-4-add-redis-database"},"Step 4. Add Redis Database"),(0,a.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password in the form, as shown below. You can skip username for now. Then click \u201cADD REDIS DATABASE\u201d:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(73620).Z,width:"1206",height:"860"})),(0,a.kt)("h4",{id:"step-5-run-the-redis-cli"},"Step 5. Run the Redis CLI"),(0,a.kt)("p",null,"Finally, although RedisInsight is a great GUI, sometimes you want to work directly in the command-line interface (CLI). To do so, click \u201cCLI\u201d in the menu on the left side of the RedisInsight UI:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(75870).Z,width:"1810",height:"1082"})),(0,a.kt)("p",null,"Then paste the appropriate Redis commands in the command section, marked with \u201c>>\u201d as shown below, and press Enter."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(34490).Z,width:"1634",height:"1436"})),(0,a.kt)("p",null,"You can see the output displayed at the top of the screen. If it says \u201cOK,\u201d the command was executed successfully.")),(0,a.kt)(r.Z,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("h4",{id:"using-linux"},"Using Linux"),(0,a.kt)("h4",{id:"step-1-download-redisinsight-1"},"Step 1. Download RedisInsight"),(0,a.kt)("p",null,"To use RedisInsight on your Linux machine, you can download from the RedisInsight page on the RedisLabs website:"),(0,a.kt)("p",null,"Open ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"this")," link to open up a form that allows you to select the operating system of your choice."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(37777).Z,width:"715",height:"505"})),(0,a.kt)("p",null,"Fill out the rest of the form and click \u201cDownload.\u201d Please note that the package name is the combination of the platform and version as shown here:"),(0,a.kt)("p",null,"redisinsight-linux64"),(0,a.kt)("h4",{id:"step-2-install-redisinsight-1"},"Step 2. Install RedisInsight"),(0,a.kt)("p",null,"Open a terminal and navigate to the folder containing the downloaded file."),(0,a.kt)("p",null,"Make your downloaded file into an executable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"chmod +x redisinsight-linux64-<version>\n")),(0,a.kt)("h4",{id:"step-3-start-redisinsight"},"Step 3. Start RedisInsight."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./redisinsight-linux64-version\n")),(0,a.kt)("p",null,"To access your RedisInsight GUI, open a web browser and navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8001"},"http://127.0.0.1:8001"),"."),(0,a.kt)("p",null,"Congratulations! You have successfully installed RedisInsight and are now ready to inspect your Redis data, monitor database health, and perform runtime server configuration with this browser-based management interface for your Redis deployment."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(52087).Z,width:"1822",height:"636"})),(0,a.kt)("h4",{id:"step-4-connect-to-redis-database"},"Step 4. Connect to Redis database"),(0,a.kt)("p",null,'Assuming that you already have Redis database up and running, select "Connect to a Redis database"\n',(0,a.kt)("img",{alt:"My Image",src:i(16546).Z,width:"1790",height:"838"})),(0,a.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password in the form, as shown below. You can skip username for now. Then click \u201cADD REDIS DATABASE\u201d:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(73620).Z,width:"1206",height:"860"})),(0,a.kt)("h4",{id:"step-5-run-the-redis-cli-1"},"Step 5. Run the Redis CLI"),(0,a.kt)("p",null,"Finally, although RedisInsight is a great GUI, sometimes you want to work directly in the command-line interface (CLI). To do so, click \u201cCLI\u201d in the menu on the left side of the RedisInsight UI:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(75870).Z,width:"1810",height:"1082"})),(0,a.kt)("p",null,"Then paste the appropriate Redis commands in the command section, marked with \u201c>>\u201d as shown below, and press Enter."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(34490).Z,width:"1634",height:"1436"})),(0,a.kt)("p",null,"You can see the output displayed at the top of the screen. If it says \u201cOK,\u201d the command was executed successfully.")),(0,a.kt)(r.Z,{value:"Windows",mdxType:"TabItem"},(0,a.kt)("h4",{id:"using-windows"},"Using Windows"),(0,a.kt)("h4",{id:"step-1-download-redisinsight-2"},"Step 1. Download RedisInsight"),(0,a.kt)("p",null,"To install RedisInsight on Windows, there is no need to install any .NET framework. RedisInsight should install and run on a fresh Windows system."),(0,a.kt)("p",null,"To use RedisInsight on your Windows machine, you can download from the RedisInsight page on the RedisLabs website:"),(0,a.kt)("p",null,"Open ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"this")," link to open up a form that allows you to select the operating system of your choice."),(0,a.kt)("h4",{id:"step-2-install-redisinsight-2"},"Step 2. Install RedisInsight"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(56927).Z,width:"700",height:"502"})),(0,a.kt)("p",null,"Fill out the rest of the form and click \u201cDownload.\u201d Please note that the package name is the combination of the platform and version as shown here:"),(0,a.kt)("p",null,"redisinsight-win-msi"),(0,a.kt)("h4",{id:"step-3-accessing-redisinsight"},"Step 3. Accessing RedisInsight"),(0,a.kt)("p",null,"After the web server starts, open ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8001"},"http://127.0.0.1:8001")," and add a Redis database connection."),(0,a.kt)("p",null,"Congratulations! You have successfully installed RedisInsight and are now ready to inspect your Redis data, monitor database health, and perform runtime server configuration with this browser-based management interface for your Redis deployment."),(0,a.kt)("h4",{id:"step-4-connect-to-a-redis-database"},"Step 4. Connect to a Redis database"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(52087).Z,width:"1822",height:"636"})),(0,a.kt)("p",null,'Assuming that you already have Redis database up and running, select "Connect to a Redis database"\n',(0,a.kt)("img",{alt:"My Image",src:i(16546).Z,width:"1790",height:"838"})),(0,a.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password in the form, as shown below. You can skip username for now. Then click \u201cADD REDIS DATABASE\u201d:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(73620).Z,width:"1206",height:"860"})),(0,a.kt)("h4",{id:"step-5-run-the-redis-cli-2"},"Step 5. Run the Redis CLI"),(0,a.kt)("p",null,"Finally, although RedisInsight is a great GUI, sometimes you want to work directly in the command-line interface (CLI). To do so, click \u201cCLI\u201d in the menu on the left side of the RedisInsight UI:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(75870).Z,width:"1810",height:"1082"})),(0,a.kt)("p",null,"Then paste the appropriate Redis commands in the command section, marked with \u201c>>\u201d as shown below, and press Enter."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(34490).Z,width:"1634",height:"1436"})),(0,a.kt)("p",null,"You can see the output displayed at the top of the screen. If it says \u201cOK,\u201d the command was executed successfully.")),(0,a.kt)(r.Z,{value:"Docker",mdxType:"TabItem"},(0,a.kt)("h4",{id:"using-docker"},"Using Docker"),(0,a.kt)("h4",{id:"step-1-install-docker"},"Step 1. Install Docker"),(0,a.kt)("p",null,"The first step is to install docker for your operating system. Run the docker version command in a terminal window to make sure that docker is installed correctly."),(0,a.kt)("p",null,"Note - On Windows and Mac, install docker version 18.03 or higher. You can run docker version to find out your docker version."),(0,a.kt)("h4",{id:"step-2-run-redisinsight-docker-image"},"Step 2. Run RedisInsight Docker image"),(0,a.kt)("p",null,"Next, run the RedisInsight container. The easiest way is to run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),(0,a.kt)("h4",{id:"step-3-accessing-redisinsight-1"},"Step 3. Accessing RedisInsight"),(0,a.kt)("p",null,"Next, point your browser to http://localhost:8001."),(0,a.kt)("p",null,"RedisInsight also provides a health check endpoint at http://localhost:8001/healthcheck/ to monitor the health of the running container."),(0,a.kt)("p",null,"Note: Make sure the directory you pass as a volume to the container has necessary permissions for the container to access it. For example, if the previous command returns a permissions error, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," chown -R 1001 redisinsight\n")),(0,a.kt)("p",null,"In addition, you can add some additional flags to the docker run command:"),(0,a.kt)("p",null,"You can add the -it flag to see the logs and view the progress."),(0,a.kt)("p",null,"On Linux, you can add --network host. This makes it easy to work with redis running on your local machine."),(0,a.kt)("p",null,"To analyze RDB files stored in S3, you can add the access key and secret access key as environment variables using the -e flag."),(0,a.kt)("p",null,"For example: -e AWS_ACCESS_KEY=aws_access_key -e AWS_SECRET_KEY=aws_secret_access_key"),(0,a.kt)("p",null,"If everything worked, you should see the following output in the terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," Starting webserver...\n Visit http://0.0.0.0:8001 in your web browser.\n Press CTRL-C to exit.\n")),(0,a.kt)("p",null,"Head over to your web browser and go to http://localhost:8001"),(0,a.kt)("p",null,"Congratulations! You have successfully installed RedisInsight and are now ready to inspect your Redis data, monitor database health, and perform runtime server configuration with this browser-based management interface for your Redis deployment."),(0,a.kt)("h4",{id:"step-4-connect-to-a-redis-database-1"},"Step 4. Connect to a Redis database"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(52087).Z,width:"1822",height:"636"})),(0,a.kt)("p",null,'Assuming that you already have Redis database up and running, select "Connect to a Redis database"\n',(0,a.kt)("img",{alt:"My Image",src:i(16546).Z,width:"1790",height:"838"})),(0,a.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password in the form, as shown below. You can skip username for now. Then click \u201cADD REDIS DATABASE\u201d:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(73620).Z,width:"1206",height:"860"})),(0,a.kt)("h4",{id:"step-5-run-the-redis-cli-3"},"Step 5. Run the Redis CLI"),(0,a.kt)("p",null,"Finally, although RedisInsight is a great GUI, sometimes you want to work directly in the command-line interface (CLI). To do so, click \u201cCLI\u201d in the menu on the left side of the RedisInsight UI:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(75870).Z,width:"1810",height:"1082"})),(0,a.kt)("p",null,"Then paste the appropriate Redis commands in the command section, marked with \u201c>>\u201d as shown below, and press Enter."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(34490).Z,width:"1634",height:"1436"})),(0,a.kt)("p",null,"You can see the output displayed at the top of the screen. If it says \u201cOK,\u201d the command was executed successfully.")),(0,a.kt)(r.Z,{value:"Kubernetes",mdxType:"TabItem"},(0,a.kt)("h4",{id:"using-kubernetes"},"Using Kubernetes"),(0,a.kt)("h4",{id:"step-1-create-the-redisinsight-deployment-and-service"},"Step 1. Create the RedisInsight deployment and service"),(0,a.kt)("p",null,"Below is an annotated YAML file that will create a RedisInsight deployment and a service in a k8s cluster."),(0,a.kt)("h4",{id:"step-2-create-a-new-file-redisinsightyaml-with-the-content-below"},"Step 2. Create a new file redisinsight.yaml with the content below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," # RedisInsight service with name 'redisinsight-service'\n apiVersion: v1\n kind: Service\n metadata:\n   name: redisinsight-service       # name should not be 'redisinsight'\n                                   # since the service creates\n                                   # environment variables that\n                                   # conflicts with redisinsight\n                                   # application's environment\n                                   # variables `REDISINSIGHT_HOST` and\n                                   # `REDISINSIGHT_PORT`\n spec:\n   type: LoadBalancer\n   ports:\n     - port: 80\n       targetPort: 8001\n   selector:\n     app: redisinsight\n---\n ###  RedisInsight deployment with name 'redisinsight'\n\n apiVersion: apps/v1\n kind: Deployment\n metadata:\n   name: redisinsight #deployment name\n   labels:\n     app: redisinsight #deployment label\n spec:\n   replicas: 1 #a single replica pod\n   selector:\n     matchLabels:\n       app: redisinsight #which pods is the deployment managing, as defined by the pod template\n   template: #pod template\n     metadata:\n       labels:\n         app: redisinsight #label for pod/s\n     spec:\n       containers:\n\n       - name:  redisinsight #Container name (DNS_LABEL, unique)\n         image: redislabs/redisinsight:1.7.0 #repo/image\n         imagePullPolicy: IfNotPresent #Always pull image\n         volumeMounts:\n         - name: db #Pod volumes to mount into the container's filesystem. Cannot be updated.\n           mountPath: /db\n         ports:\n         - containerPort: 8001 #exposed conainer port and protocol\n           protocol: TCP\n       volumes:\n       - name: db\n         emptyDir: {} # node-ephemeral volume https://kubernetes.io/docs/concepts/storage/volumes/#emptydir\n")),(0,a.kt)("h4",{id:"step-3-create-the-redisinsight-deployment-and-service"},"Step 3. Create the RedisInsight deployment and service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f redisinsight.yaml\n")),(0,a.kt)("h4",{id:"step-4-accessing-redisinsight"},"Step 4. Accessing RedisInsight"),(0,a.kt)("p",null,"Once the deployment and service are successfully applied and complete, you shoould be able to access RedisInsight.\nThis can be accomplished by listing the using the External IP address of the service we created to reach redisinsight."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get svc redisinsight-service\nNAME                   CLUSTER-IP       EXTERNAL-IP      PORT(S)         AGE\nredisinsight-service   <cluster-ip>     <external-ip>    80:32143/TCP    1m\n")),(0,a.kt)("p",null,"If you are using minikube, run minikube list to list the service and access RedisInsight at http://minikube-ip:minikube-service-port."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ minikube list\n|-------------|----------------------|--------------|---------------------------------------------|\n|  NAMESPACE  |         NAME         | TARGET PORT  |           URL                               |\n|-------------|----------------------|--------------|---------------------------------------------|\n| default     | kubernetes           | No node port |                                             |\n| default     | redisinsight-service |           80 | http://minikube-ip:minikubeservice-port |\n| kube-system | kube-dns             | No node port |                                             |\n|-------------|----------------------|--------------|---------------------------------------------|\n")),(0,a.kt)("h4",{id:"step-5-create-the-redisinsight-deployment-without-a-service"},"Step 5. Create the RedisInsight deployment without a service."),(0,a.kt)("p",null,"Below is an annotated YAML file that will create a RedisInsight deployment in a K8s cluster."),(0,a.kt)("h4",{id:"create-a-new-file-redisinsightyaml-with-the-content-below"},"Create a new file redisinsight.yaml with the content below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: redisinsight #deployment name\n  labels:\n    app: redisinsight #deployment label\nspec:\n  replicas: 1 #a single replica pod\n  selector:\n    matchLabels:\n      app: redisinsight #which pods is the deployment managing, as defined by the pod template\n  template: #pod template\n    metadata:\n      labels:\n        app: redisinsight #label for pod/s\n    spec:\n      containers:\n      - name:  redisinsight #Container name (DNS_LABEL, unique)\n        image: redislabs/redisinsight:1.7.0 #repo/image\n        imagePullPolicy: IfNotPresent #Always pull image\n        env:\n          # If there's a service named 'redisinsight' that exposes the\n          # deployment, we manually set `REDISINSIGHT_HOST` and\n          # `REDISINSIGHT_PORT` to override the service environment\n          # variables.\n          - name: REDISINSIGHT_HOST\n            value: \"0.0.0.0\"\n          - name: REDISINSIGHT_PORT\n            value: \"8001\"\n        volumeMounts:\n        - name: db #Pod volumes to mount into the container's filesystem. Cannot be updated.\n          mountPath: /db\n        ports:\n        - containerPort: 8001 #exposed conainer port and protocol\n          protocol: TCP\n        livenessProbe:\n           httpGet:\n              path : /healthcheck/ # exposed RI endpoint for healthcheck\n              port: 8001 # exposed container port\n           initialDelaySeconds: 5 # number of seconds to wait after the container starts to perform liveness probe\n           periodSeconds: 5 # period in seconds after which liveness probe is performed\n           failureThreshold: 1 # number of liveness probe failures after which container restarts\n      volumes:\n      - name: db\n        emptyDir: {} # node-ephemeral volume https://kubernetes.io/docs/concepts/storage/volumes/#emptydir\n")),(0,a.kt)("h4",{id:"step-6-create-the-redisinsight-deployment"},"Step 6. Create the RedisInsight deployment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl apply -f redisinsight.yaml\n")),(0,a.kt)("p",null,"Note - If the deployment will be exposed by a service whose name is \u2018redisinsight\u2019, set REDISINSIGHT_HOST and REDISINSIGHT_PORT environment variables to override the environment variables created by the service."),(0,a.kt)("p",null,"Once the deployment has been successfully applied and the deployment complete, access RedisInsight. This can be accomplished by exposing the deployment as a K8s Service or by using port forwarding, as in the example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl port-forward deployment/redisinsight 8001\n")),(0,a.kt)("p",null,"Open your browser and point to http://localhost:8001"),(0,a.kt)("p",null,"Congratulations! You have successfully installed RedisInsight and are now ready to inspect your Redis data, monitor database health, and perform runtime server configuration with this browser-based management interface for your Redis deployment."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(52087).Z,width:"1822",height:"636"})),(0,a.kt)("p",null,'Assuming that you already have Redis database up and running, select "Connect to a Redis database"\n',(0,a.kt)("img",{alt:"My Image",src:i(16546).Z,width:"1790",height:"838"})),(0,a.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password in the form, as shown below. You can skip username for now. Then click \u201cADD REDIS DATABASE\u201d:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(73620).Z,width:"1206",height:"860"})),(0,a.kt)("h4",{id:"step-7-run-the-redis-cli"},"Step 7. Run the Redis CLI"),(0,a.kt)("p",null,"Finally, although RedisInsight is a great GUI, sometimes you want to work directly in the command-line interface (CLI). To do so, click \u201cCLI\u201d in the menu on the left side of the RedisInsight UI:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(75870).Z,width:"1810",height:"1082"})),(0,a.kt)("p",null,"Then paste the appropriate Redis commands in the command section, marked with \u201c>>\u201d as shown below, and press Enter."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(34490).Z,width:"1634",height:"1436"})),(0,a.kt)("p",null,"You can see the output displayed at the top of the screen. If it says \u201cOK,\u201d the command was executed successfully."))),(0,a.kt)("h3",{id:"redisinsight-overview-redisconf21"},"RedisInsight Overview (RedisConf'21)"),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("iframe",{width:"760",height:"315",src:"https://www.youtube.com/embed/ppYSS6opUiQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("h3",{id:"further-references"},"Further References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/slowlog"},"Debugging Redis using Slowlog Configuration under RedisInsight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/browser"},"Explore Redis keys using RedisInsight browser tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/memoryanalyzer"},"Memory Analysis using RedisInsight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/cluster"},"Manage Your Redis Cluster using RedisInsight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/streams"},"Using Redis Streams with RedisInsight"))),(0,a.kt)("h2",{id:""}),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",(0,a.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}g.isMDXComponent=!0},37777:function(e,t,i){t.Z=i.p+"assets/images/redisinsight-linux-c340e87bb1a0afed26cdb7c764852137.png"},56927:function(e,t,i){t.Z=i.p+"assets/images/redisinsight-windows-9a7640a5b909fab7aba6389b1dab7bb8.png"},21274:function(e,t,i){t.Z=i.p+"assets/images/redisinsight-4706da2cc5e4d215bdcbfb2b2127f375.gif"},2211:function(e,t,i){t.Z=i.p+"assets/images/redisinsight2-35586fb0645458771c3542f7c5ac1cbd.png"},52087:function(e,t,i){t.Z=i.p+"assets/images/redisinsight3-b7487abfb769161e093e149939461700.png"},16546:function(e,t,i){t.Z=i.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},73620:function(e,t,i){t.Z=i.p+"assets/images/redisinsight5-de27ff4b9c4b7133a6f89b1c5399021c.png"},75870:function(e,t,i){t.Z=i.p+"assets/images/redisinsight7-7efad92cb939b55c999f1c8b0abb685e.png"},34490:function(e,t,i){t.Z=i.p+"assets/images/redisinsight9-22f32c79736c5b68eaf83cb0adc41707.png"},36689:function(e,t,i){t.Z=i.p+"assets/images/redisinsightmac-579275ef93eeacefb6fcb8cf041d07ec.png"}}]);