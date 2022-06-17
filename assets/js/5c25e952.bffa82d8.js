"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4497],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?i.createElement(g,s(s({ref:n},p),{},{components:t})):i.createElement(g,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var d=2;d<o;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45801:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return c}});var i=t(87462),r=t(63366),o=(t(67294),t(3905)),s=["components"],a={id:"index-nodejs-nginx-redis",title:"How to build and run a Node.js application using Nginx, Docker and Redis",sidebar_label:"Node.js, Nginx, Redis and Docker",slug:"/operate/docker/nodejs-nginx-redis",authors:["ajeet"]},l=void 0,d={unversionedId:"operate/orchestration/nodejs-nginx-redis/index-nodejs-nginx-redis",id:"operate/orchestration/nodejs-nginx-redis/index-nodejs-nginx-redis",title:"How to build and run a Node.js application using Nginx, Docker and Redis",description:"Thanks to Node.js - Millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language. Node.js is a free, open-sourced, cross-platform JavaScript run-time environment. It is capable to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.",source:"@site/docs/operate/orchestration/nodejs-nginx-redis/index-nodejs-nginx-redis.mdx",sourceDirName:"operate/orchestration/nodejs-nginx-redis",slug:"/operate/docker/nodejs-nginx-redis",permalink:"/operate/docker/nodejs-nginx-redis",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/orchestration/nodejs-nginx-redis/index-nodejs-nginx-redis.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-nodejs-nginx-redis",title:"How to build and run a Node.js application using Nginx, Docker and Redis",sidebar_label:"Node.js, Nginx, Redis and Docker",slug:"/operate/docker/nodejs-nginx-redis",authors:["ajeet"]},sidebar:"docs",previous:{title:"Redis on Docker",permalink:"/operate/orchestration/docker/"},next:{title:"Redis on Kubernetes",permalink:"/operate/orchestration/kubernetes/kubernetes-gke"}},p={},c=[{value:"What do you need?",id:"what-do-you-need",level:3},{value:"Project structure",id:"project-structure",level:3},{value:"Prerequisites:",id:"prerequisites",level:3},{value:"Step 1. Create a Docker compose file",id:"step-1-create-a-docker-compose-file",level:3},{value:"Step 2. Create an nginx directory and add the following files:",id:"step-2-create-an-nginx-directory-and-add-the-following-files",level:3},{value:"File: nginx/nginx.conf",id:"file-nginxnginxconf",level:4},{value:"File: Dockerfile",id:"file-dockerfile",level:4},{value:"Step 3. Create a web directory and add the following files:",id:"step-3-create-a-web-directory-and-add-the-following-files",level:3},{value:"File: web/Dockerfile",id:"file-webdockerfile",level:4},{value:"File: web/package.json",id:"file-webpackagejson",level:4},{value:"File: web/server.js",id:"file-webserverjs",level:4},{value:"Step 4. Deploy the application",id:"step-4-deploy-the-application",level:3},{value:"Expected result",id:"expected-result",level:4},{value:"Step 5. Testing the app",id:"step-5-testing-the-app",level:3},{value:"Step 6. Monitoring Redis keys",id:"step-6-monitoring-redis-keys",level:3},{value:"Further References",id:"further-references",level:3}],u={toc:c};function m(e){var n=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.dev/"},"Node.js")," - Millions of frontend developers that write JavaScript for the browser are now able to write the server-side code in addition to the client-side code without the need to learn a completely different language. Node.js is a free, open-sourced, cross-platform JavaScript run-time environment. It is capable to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Nginx-node",src:t(59329).Z,width:"1890",height:"1422"})),(0,o.kt)("p",null,"In this quickstart guide, you will see how to build a Node.js application (visitor counter) using Nginx, Redis and Docker."),(0,o.kt)("h3",{id:"what-do-you-need"},"What do you need?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Node.js"),": An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nginx"),": An open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker"),": a containerization platform for developing, shipping, and running applications."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker Compose"),": A tool for defining and running multi-container Docker applications.")),(0,o.kt)("h3",{id:"project-structure"},"Project structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 docker-compose.yml\n\u251c\u2500\u2500 redis\n\u251c\u2500\u2500 nginx\n\u2502\xa0\xa0 \u251c\u2500\u2500 Dockerfile\n\u2502\xa0\xa0 \u2514\u2500\u2500 nginx.conf\n\u251c\u2500\u2500 web1\n\u2502\xa0\xa0 \u251c\u2500\u2500 Dockerfile\n\u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 server.js\n\u2514\u2500\u2500 web2\n    \u251c\u2500\u2500 Dockerfile\n    \u251c\u2500\u2500 package.json\n    \u2514\u2500\u2500 server.js\n\n")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites:"),(0,o.kt)("p",null,"\u2013 Install Docker Desktop"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/mac/install/"},"Docker's install guide")," to setup Docker Desktop for Mac or Windows on your local system."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docker Deskto",src:t(21544).Z,width:"1514",height:"1016"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Docker Desktop comes with Docker compose installed by default, hence you don't need to install it separately."))),(0,o.kt)("h3",{id:"step-1-create-a-docker-compose-file"},"Step 1. Create a Docker compose file"),(0,o.kt)("p",null,'Create an empty file with the below content and save it by name - "docker-compose.yml"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"version: '3.9'\nservices:\n  redis:\n    image: 'redis:alpine'\n    ports:\n      - '6379:6379'\n  web1:\n    restart: on-failure\n    build: ./web\n    hostname: web1\n    ports:\n      - '81:5000'\n  web2:\n    restart: on-failure\n    build: ./web\n    hostname: web2\n    ports:\n      - '82:5000'\n  nginx:\n    build: ./nginx\n    ports:\n    - '80:80'\n    depends_on:\n    - web1\n    - web2\n")),(0,o.kt)("p",null,"The compose file defines an application with four services ",(0,o.kt)("inlineCode",{parentName:"p"},"redis"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"web1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"web2")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx"),".\nWhen deploying the application, docker-compose maps port 80 of the web service container to port 80 of the host as specified in the file."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By default, Redis runs on port 6379. Make sure you don't run another instance of Redis on your system or port 6379 on the host is not being used by another container, otherwise the port should be changed."))),(0,o.kt)("h3",{id:"step-2-create-an-nginx-directory-and-add-the-following-files"},"Step 2. Create an nginx directory and add the following files:"),(0,o.kt)("h4",{id:"file-nginxnginxconf"},"File: nginx/nginx.conf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"upstream loadbalancer {\n  server web1:5000;\n  server web2:5000;\n}\n\nserver {\n  listen 80;\n  server_name localhost;\n  location / {\n    proxy_pass http://loadbalancer;\n  }\n}\n")),(0,o.kt)("h4",{id:"file-dockerfile"},"File: Dockerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FROM nginx:1.21.6\nRUN rm /etc/nginx/conf.d/default.conf\nCOPY nginx.conf /etc/nginx/conf.d/default.conf\n")),(0,o.kt)("h3",{id:"step-3-create-a-web-directory-and-add-the-following-files"},"Step 3. Create a web directory and add the following files:"),(0,o.kt)("h4",{id:"file-webdockerfile"},"File: web/Dockerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'FROM node:14.17.3-alpine3.14\n\nWORKDIR /usr/src/app\n\nCOPY ./package.json ./\nRUN npm install\nCOPY ./server.js ./\n\nCMD ["npm","start"]\n')),(0,o.kt)("h4",{id:"file-webpackagejson"},"File: web/package.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\n  "name": "web",\n  "version": "1.0.0",\n  "description": "Running Node.js and Express.js on Docker",\n  "main": "server.js",\n  "scripts": {\n    "start": "node server.js"\n  },\n  "dependencies": {\n    "express": "^4.17.2",\n    "redis": "3.1.2"\n  },\n  "author": "",\n  "license": "MIT"\n}\n')),(0,o.kt)("h4",{id:"file-webserverjs"},"File: web/server.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const express = require('express');\nconst redis = require('redis');\nconst app = express();\nconst redisClient = redis.createClient({\n  host: 'redis',\n  port: 6379\n});\n\napp.get('/', function(req, res) {\n    redisClient.get('numVisits', function(err, numVisits) {\n        numVisitsToDisplay = parseInt(numVisits) + 1;\n        if (isNaN(numVisitsToDisplay)) {\n            numVisitsToDisplay = 1;\n        }\n        res.send('Number of visits is: ' + numVisitsToDisplay);\n        numVisits++;\n        redisClient.set('numVisits', numVisits);\n    });\n});\n\napp.listen(5000, function() {\n    console.log('Web application is listening on port 5000');\n});\n")),(0,o.kt)("h3",{id:"step-4-deploy-the-application"},"Step 4. Deploy the application"),(0,o.kt)("p",null,"Let us deploy the full-fledged app using docker-compose:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker-compose up -d\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Creating nginx-nodejs-redis_redis_1 ... done\nCreating nginx-nodejs-redis_web1_1  ... done\nCreating nginx-nodejs-redis_web2_1  ... done\nCreating nginx-nodejs-redis_nginx_1 ... done\n")),(0,o.kt)("h4",{id:"expected-result"},"Expected result"),(0,o.kt)("p",null,"Listing the running containers. You should see three containers running and the port mapping as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose ps\n           Name                        Command              State           Ports\n------------------------------------------------------------------------------------------\nnginx-nodejs-redis_nginx_1   /docker-entrypoint.sh ngin     Up      0.0.0.0:80->80/tcp\n                             ...\nnginx-nodejs-redis_redis_1   docker-entrypoint.sh redis     Up      0.0.0.0:6379->6379/tcp\n                             ...\nnginx-nodejs-redis_web1_1    docker-entrypoint.sh npm       Up      0.0.0.0:81->5000/tcp\n                             start\nnginx-nodejs-redis_web2_1    docker-entrypoint.sh npm       Up      0.0.0.0:82->5000/tcp\n                             start\n")),(0,o.kt)("h3",{id:"step-5-testing-the-app"},"Step 5. Testing the app"),(0,o.kt)("p",null,"After the application starts, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost")," in your web browser or run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl localhost:80\ncurl localhost:80\nweb1: Total number of visits is: 1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl localhost:80\nweb1: Total number of visits is: 2\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ curl localhost:80\nweb2: Total number of visits is: 3\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ curl localhost:80\nweb2: Total number of visits is: 4\n")),(0,o.kt)("h3",{id:"step-6-monitoring-redis-keys"},"Step 6. Monitoring Redis keys"),(0,o.kt)("p",null,"If you want to monitor the Redis keys, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"MONITOR")," command. Install ",(0,o.kt)("inlineCode",{parentName:"p"},"redis-cli")," on your Mac system using ",(0,o.kt)("inlineCode",{parentName:"p"},"brew install redis")," and then directly connect to Redis container by issuing the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'% redis-cli\n127.0.0.1:6379> monitor\nOK\n1646485507.290868 [0 172.24.0.2:34330] "get" "numVisits"\n1646485507.309070 [0 172.24.0.2:34330] "set" "numVisits" "5"\n1646485509.228084 [0 172.24.0.2:34330] "get" "numVisits"\n1646485509.241762 [0 172.24.0.2:34330] "set" "numVisits" "6"\n1646485509.619369 [0 172.24.0.4:52082] "get" "numVisits"\n1646485509.629739 [0 172.24.0.4:52082] "set" "numVisits" "7"\n1646485509.990926 [0 172.24.0.2:34330] "get" "numVisits"\n1646485509.999947 [0 172.24.0.2:34330] "set" "numVisits" "8"\n1646485510.270934 [0 172.24.0.4:52082] "get" "numVisits"\n1646485510.286785 [0 172.24.0.4:52082] "set" "numVisits" "9"\n1646485510.469613 [0 172.24.0.2:34330] "get" "numVisits"\n1646485510.480849 [0 172.24.0.2:34330] "set" "numVisits" "10"\n1646485510.622615 [0 172.24.0.4:52082] "get" "numVisits"\n1646485510.632720 [0 172.24.0.4:52082] "set" "numVisits" "11"\n')),(0,o.kt)("h3",{id:"further-references"},"Further References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/ajeetraina/awesome-compose/tree/master/nginx-nodejs-redis"}," Complete Source Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.redis.com/create/docker/"},"How to Deploy and Run Redis in a Docker container"))))}m.isMDXComponent=!0},21544:function(e,n,t){n.Z=t.p+"assets/images/desktop-2039d30abbfa6f7a833ad8fc10cd95b4.png"},59329:function(e,n,t){n.Z=t.p+"assets/images/docker_nginx-4bdad5f42822101967723d4b04c363aa.png"}}]);