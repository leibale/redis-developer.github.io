"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={id:"index-cloudrun",title:"Getting Started with Google Cloud Run and Redis",sidebar_label:"Getting Started with Google Cloud Run and Redis",slug:"/create/cloudrun",authors:["ajeet"]},i=void 0,l={unversionedId:"create/cloudrun/index-cloudrun",id:"create/cloudrun/index-cloudrun",title:"Getting Started with Google Cloud Run and Redis",description:"alttext",source:"@site/docs/create/cloudrun/index-cloudrun.mdx",sourceDirName:"create/cloudrun",slug:"/create/cloudrun",permalink:"/create/cloudrun",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/cloudrun/index-cloudrun.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-cloudrun",title:"Getting Started with Google Cloud Run and Redis",sidebar_label:"Getting Started with Google Cloud Run and Redis",slug:"/create/cloudrun",authors:["ajeet"]},sidebar:"docs",previous:{title:"Getting Started with Vercel and Redis",permalink:"/create/vercel"},next:{title:"Getting Started with Azure Functions and Redis",permalink:"/create/azurefunctions"}},s={},u=[{value:"Compelling features of Google Cloud Run",id:"compelling-features-of-google-cloud-run",level:3},{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Step 1. Set up a free Redis Enterprise Cloud account",id:"step-1-set-up-a-free-redis-enterprise-cloud-account",level:3},{value:"Step 2. Install Google Cloud CLI",id:"step-2-install-google-cloud-cli",level:3},{value:"Step 3. Authenticate your GCP account",id:"step-3-authenticate-your-gcp-account",level:3},{value:"Step 4. Enable Google Services",id:"step-4-enable-google-services",level:3},{value:"Step 5 . Deploy to Google Cloud Run from source",id:"step-5--deploy-to-google-cloud-run-from-source",level:3},{value:"Step 6. Verify if the service is listed under Cloud Run dashboard",id:"step-6-verify-if-the-service-is-listed-under-cloud-run-dashboard",level:3},{value:"Verifying the service via terminal UI",id:"verifying-the-service-via-terminal-ui",level:4},{value:"Step 7. Set up environment variables",id:"step-7-set-up-environment-variables",level:3},{value:"Step 8. Access your app",id:"step-8-access-your-app",level:3},{value:"Additional references:",id:"additional-references",level:3}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"alt_text",src:n(20963).Z,width:"2336",height:"1274"})),(0,a.kt)("p",null,"If you\u2019re looking for a solution that lets you go from container to URL within seconds, check out Google Cloud Run. ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/run"},"Cloud Run")," is Google\u2019s fully managed compute platform for running stateless, HTTP-driven containers. By using a single command (\u201c",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/gcloud/reference/run/deploy"},"gcloud run deploy\u201d"),") you can convert a container image to a fully managed web application and run it in a production environment with auto-scalability, high availability, and security."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/run/docs"},"Google Cloud Run")," allows you to deploy and scale serverless HTTP containers without worrying about provisioning servers, scaling servers up and down to meet demands, or overpaying by consuming more resources than necessary. It makes container deployment much easier. It is good for developing software in cloud applications, hence delivering web apps, ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/run/docs/reference/rest"},"APIs"),", background jobs, etc."),(0,a.kt)("p",null,"Cloud Run is ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/knative"},"powered and built on Knative"),". Knative is an open source community project which adds components for deploying, running, and managing serverless, cloud-native applications to Kubernetes. It allows you to easily run your containers either in your ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/"},"https://cloud.google.com/kubernetes-engine")," (GKE) cluster with Cloud Run on GKE or fully managed with Cloud Run. Cloud Run helps developers focus on writing high-value code, regardless of where their organizations are on the path to the cloud."),(0,a.kt)("h3",{id:"compelling-features-of-google-cloud-run"},"Compelling features of Google Cloud Run"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cloud Run provides you with the option to write your code in your preferred programming languages such as ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/run/helloworld/"},"NodeJS"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/python-docs-samples/blob/master/run/"},"Python"),", ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/golang-samples/tree/master/run/"},"Go"),", and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/GoogleCloudPlatform/java-docs-samples/tree/master/run/"},"Java"),"."),(0,a.kt)("li",{parentName:"ul"},"Cloud Run provides you a better ROI as you get charged only for the resources used."),(0,a.kt)("li",{parentName:"ul"},"Cloud Run offers a",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/run/docs/configuring/request-timeout"}," longer request timeout duration of up to 60 minutes"),"."),(0,a.kt)("li",{parentName:"ul"},"Cloud Run is configured to ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/run/docs/configuring/concurrency"},"send multiple concurrent requests on each container instance. "),"This is helpful to improve latency and reduce costs if you\u2019re expecting large volumes."),(0,a.kt)("li",{parentName:"ul"},"Cloud Run lets you ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/blog/products/serverless/build-event-driven-applications-in-cloud-run"},"create microservice-based applications that are scalable and extensible"),".")),(0,a.kt)("p",null,"In this tutorial, you will learn how to deploy a simple Redis rate limiting application to Google Cloud Run in just 5 minutes."),(0,a.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1. Set up a free Redis Enterprise Cloud account"),(0,a.kt)("li",{parentName:"ul"},"Step 2. Install Google Cloud CLI"),(0,a.kt)("li",{parentName:"ul"},"Step 3. Authenticate your GCP account"),(0,a.kt)("li",{parentName:"ul"},"Step 4. Enable Google Services"),(0,a.kt)("li",{parentName:"ul"},"Step 5. Deploy to Google Cloud Run from source"),(0,a.kt)("li",{parentName:"ul"},"Step 6. Verify if service is listed"),(0,a.kt)("li",{parentName:"ul"},"Step 7. Set up environment variables"),(0,a.kt)("li",{parentName:"ul"},"Step 8. Access your app")),(0,a.kt)("h3",{id:"step-1-set-up-a-free-redis-enterprise-cloud-account"},"Step 1. Set up a free Redis Enterprise Cloud account"),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://developer.redis.com/create/rediscloud/"},"developer.redis.com/create/rediscloud/")," and create ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/try-free/"},"a free Redis Enterprise Cloud account"),". Once you complete the signup tutorial, you will be provided with the database endpoint URL, port and password. Save these for future reference."),(0,a.kt)("admonition",{title:"TIP",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For a limited time, use ",(0,a.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,a.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,a.kt)("p",{parentName:"admonition"},"\ud83c\udf89 ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up"))),(0,a.kt)("h3",{id:"step-2-install-google-cloud-cli"},"Step 2. Install Google Cloud CLI"),(0,a.kt)("p",null,"Run the following command to install Google Cloud CLI Core Libraries and dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install --cask google-cloud-sdk\n\n")),(0,a.kt)("h3",{id:"step-3-authenticate-your-gcp-account"},"Step 3. Authenticate your GCP account"),(0,a.kt)("p",null,"To deploy your app you must first download, install, and initialize the ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs"},"gcloud CLI"),"."),(0,a.kt)("p",null,"Download and install gcloud SDK via ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs"},"https://cloud.google.com/sdk/docs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gcloud auth login\n")),(0,a.kt)("p",null,"Allow Google Cloud SDK access to your Google Account:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Authenticating with Google Cloud",src:n(23954).Z,width:"970",height:"1732"})),(0,a.kt)("h3",{id:"step-4-enable-google-services"},"Step 4. Enable Google Services"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'gcloud services enable \\\n  artifactregistry.googleapis.com \\\n  cloudbuild.googleapis.com \\\n  run.googleapis.com\nOperation "operations/acat.p2-406459833831-88327c08-1fe9-4d9a-a6b9-db8c8b007863" finished successfully.\n\n\n')),(0,a.kt)("h3",{id:"step-5--deploy-to-google-cloud-run-from-source"},"Step 5 . Deploy to Google Cloud Run from source"),(0,a.kt)("p",null,"Deploying from source automatically builds a container image from source code and deploys it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"gcloud run deploy\nDeploying from source. To deploy a container use [--image]. See https://cloud.google.com/run/docs/deploying-source-code for more details.\nSource code location (/Users/ajeetraina/projects/googlecloud/basic-rate-limiting-demo-python/google-cloud-run):\nNext time, use `gcloud run deploy --source .` to deploy the current directory.\n\nService name (google-cloud-run):\nPlease specify a region:\n [1] asia-east1\n [2] asia-east2\n [3] asia-northeast1\n [4] asia-northeast2\n [5] asia-northeast3\n [6] asia-south1\n [7] asia-south2\n [8] asia-southeast1\n [9] asia-southeast2\n [10] australia-southeast1\n [11] australia-southeast2\n [12] europe-central2\n [13] europe-north1\n [14] europe-west1\n [15] europe-west2\n [16] europe-west3\n [17] europe-west4\n [18] europe-west6\n [19] northamerica-northeast1\n [20] northamerica-northeast2\n [21] southamerica-east1\n [22] southamerica-west1\n [23] us-central1\n [24] us-east1\n [25] us-east4\n [26] us-west1\n [27] us-west2\n [28] us-west3\n [29] us-west4\n [30] cancel\nPlease enter your numeric choice:  1\n\nTo make this the default region, run `gcloud config set run/region asia-east1`.\n\nDeploying from source requires an Artifact Registry Docker repository to store built containers. A repository named\n[cloud-run-source-deploy] in region [asia-east1] will be created.\n\nDo you want to continue (Y/n)?  Y\n\nThis command is equivalent to running `gcloud builds submit --tag [IMAGE] /Users/ajeetraina/projects/googlecloud/basic-rate-limiting-demo-python/google-cloud-run` and `gcloud run deploy google-cloud-run --image [IMAGE]`\n\nAllow unauthenticated invocations to [google-cloud-run] (y/N)?  y\n\nBuilding using Dockerfile and deploying container to Cloud Run service [google-cloud-run] in project [redislabs-marketing-project] region [asia-east1]\n\u283c Building and deploying new service... Uploading sources.\n  \u2713 Creating Container Repository...\n  \u2713 Uploading sources...\n  . Building Container...\n  . Creating Revision...\n  . Routing traffic...\n  . Setting IAM Policy\u2026\n\nPlease enter your numeric choice:  1\n\nTo make this the default region, run `gcloud config set run/region asia-east1`.\n\nAllow unauthenticated invocations to [django-redis-rate-limiting-example] (y/N)?  y\n\nDeploying container to Cloud Run service [django-redis-rate-limiting-example] in project [redislabs-marketing-project] region [asia-east1]\n\u2713 Deploying new service... Done.\n  \u2713 Creating Revision... Revision deployment finished. Waiting for health check to begin.\n  \u2713 Routing traffic...\n  \u2713 Setting IAM Policy...\nDone.\nService [django-redis-rate-limiting-example] revision [django-redis-rate-limiting-example-00001-mog] has been deployed and is serving 100 percent of traffic.\nService URL: https://django-redis-rate-limiting-example-opcboau66a-de.a.run.app\n\n\n")),(0,a.kt)("h3",{id:"step-6-verify-if-the-service-is-listed-under-cloud-run-dashboard"},"Step 6. Verify if the service is listed under Cloud Run dashboard"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Verifying if the service is listed",src:n(30341).Z,width:"1406",height:"276"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Verifying if the service is listed",src:n(8330).Z,width:"1434",height:"600"})),(0,a.kt)("h4",{id:"verifying-the-service-via-terminal-ui"},"Verifying the service via terminal UI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ gcloud run services describe django-redis-rate-limiting-example\n\n\u2714 Service django-redis-rate-limiting-example in region asia-east1\n\nURL:     https://django-redis-rate-limiting-example-opcboau66a-de.a.run.app\nIngress: all\nTraffic:\n  100% LATEST (currently django-redis-rate-limiting-example-00001-mog)\n\nLast updated on 2022-02-19T02:50:03.100357Z by ajeet.raina@redis.com:\n  Revision django-redis-rate-limiting-example-00001-mog\n  Image:           gcr.io/redislabs-marketing-project/django-redis-rate-limiting-example@sha256:95bf8d5705c4ab52d2c9ba07d7dcf0c651431d8d5d38ad8806487aaa8a8a870d at 95bf8d57...\n  Port:            8080\n  Memory:          512Mi\n  CPU:             1000m\n  Service account: 406459833831-compute@developer.gserviceaccount.com\n  Concurrency:     80\n  Max Instances:   100\n  Timeout:         300s\n\n")),(0,a.kt)("h3",{id:"step-7-set-up-environment-variables"},"Step 7. Set up environment variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Adding Redis URL to point to Redis Enterprise Cloud")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setting up environment variables",src:n(2261).Z,width:"1426",height:"902"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable HTTPS")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Enabling HTTPS",src:n(25287).Z,width:"1282",height:"1134"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensuring the VPC connector shows as \u201cnone\u201d")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Configuring the VPC connector",src:n(62976).Z,width:"1274",height:"1232"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allowing all traffic")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Allowing all traffic",src:n(92618).Z,width:"1424",height:"888"})),(0,a.kt)("h3",{id:"step-8-access-your-app"},"Step 8. Access your app"),(0,a.kt)("p",null,"Wait for the build and deploy to complete. When finished, a message with unique URL will be displayed.\nPlease note that the URL shown in your case will be different from the one shown below:"),(0,a.kt)("p",null,"Open ",(0,a.kt)("a",{parentName:"p",href:"https://django-redis-rate-limiting-example-opcboau66a-de.a.run.app/"},"https://django-redis-rate-limiting-example-opcboau66a-de.a.run.app/")," and access your app."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Running the application",src:n(82277).Z,width:"1252",height:"970"})),(0,a.kt)("p",null,"This app allows you to choose the desired number of requests in each 10 second period. The app blocks connections from a client after surpassing a certain amount of requests (default: 10) in the time window (default: 10 sec). That will let the user know how many requests they have remaining before they run over the limit. On the tenth run, the server should return an HTTP status code of 429 (\u201cToo Many Requests\u201d)."),(0,a.kt)("h3",{id:"additional-references"},"Additional references:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/run"},"Google Cloud Run")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/run#section-13"},"Features of Google Run")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.redis.com/create/gcp"},"Create Redis Database using Google Cloud"))))}d.isMDXComponent=!0},23954:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/authenticate_gcloud-7914dc38a38dc2d4a8de9b6f225e85a9.png"},20963:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cloudrun_logo-009a0744da9f57c52be59d03b8d394bc.png"},30341:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gcloud1-98be15f4c89a53e924e11b80872f2847.png"},8330:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gcloud2-d91119d595935dcd8fe5ddac2d4a61c1.png"},2261:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gcloud3-49c200f4f84b6e971d04b90cb6d3a7cb.png"},25287:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gcloud4-c4e5617b11e47a85a55d5306efa86c68.png"},62976:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gcloud5-647fcf020ae76a6dc89df5dbdfbf77f0.png"},92618:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gcloud6-1d63ad969754b9a1dddcae1ad76378f0.png"},82277:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ratelimit-f4547fd925bc984b20fc697840ff367b.png"}}]);