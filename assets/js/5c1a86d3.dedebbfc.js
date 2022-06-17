"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1298],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return t?a.createElement(h,o(o({ref:r},c),{},{components:t})):a.createElement(h,o({ref:r},c))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,o=new Array(n);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<n;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28759:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=t(87462),i=t(63366),n=(t(67294),t(3905)),o=["components"],s={id:"index-azure-cache-terraform",title:"Azure Cache for Redis Enterprise using Terraform",sidebar_label:"Azure Cache for Redis Enterprise using Terraform",slug:"/operate/provisioning/azure-cache-terraform"},l=void 0,p={unversionedId:"operate/provisioning/azure-cache-terraform/index-azure-cache-terraform",id:"operate/provisioning/azure-cache-terraform/index-azure-cache-terraform",title:"Azure Cache for Redis Enterprise using Terraform",description:"The Enterprise Tiers of Azure Cache for Redis are generally available as a native fully managed service on Microsoft Azure. This offering combines Azure\u2019s global presence, flexibility, security, and compliance with Redis Enterprise\u2019s unmatched availability, performance, and extended data structure functionality to create the best experience for enterprises. Enterprise features include:",source:"@site/docs/operate/provisioning/azure-cache-terraform/index-azure-cache-terraform.mdx",sourceDirName:"operate/provisioning/azure-cache-terraform",slug:"/operate/provisioning/azure-cache-terraform",permalink:"/operate/provisioning/azure-cache-terraform",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/provisioning/azure-cache-terraform/index-azure-cache-terraform.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-azure-cache-terraform",title:"Azure Cache for Redis Enterprise using Terraform",sidebar_label:"Azure Cache for Redis Enterprise using Terraform",slug:"/operate/provisioning/azure-cache-terraform"},sidebar:"docs",previous:{title:"Deploy and Manage Redis Database on AWS using Terraform",permalink:"/operate/provisioning/terraform"},next:{title:"Azure Cache for Redis Enterprise using Terraform with Private Link",permalink:"/operate/provisioning/azure-cache-terraform-private"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1. Getting Started",id:"step-1-getting-started",level:3},{value:"Step 2: Clone the repository",id:"step-2-clone-the-repository",level:3},{value:"Step 3: Initialize the repository",id:"step-3-initialize-the-repository",level:3},{value:"Step 4: Modify the variables(optional)",id:"step-4-modify-the-variablesoptional",level:3},{value:"Step 5: Verify the plan",id:"step-5-verify-the-plan",level:3},{value:"Step 6: Apply the plan",id:"step-6-apply-the-plan",level:3},{value:"Step 7: Connect using generated output",id:"step-7-connect-using-generated-output",level:3},{value:"Resources",id:"resources",level:3},{value:"How to use Redis Cache for Redis like a Pro",id:"how-to-use-redis-cache-for-redis-like-a-pro",level:5},{value:"Do More with Azure Cache for Redis, Enterprise Tiers",id:"do-more-with-azure-cache-for-redis-enterprise-tiers",level:5},{value:"References",id:"references",level:3}],d={toc:u};function m(e){var r=e.components,t=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Enterprise Tiers of Azure Cache for Redis are generally available as a native fully managed service on Microsoft Azure. This offering combines Azure\u2019s global presence, flexibility, security, and compliance with Redis Enterprise\u2019s unmatched availability, performance, and extended data structure functionality to create the best experience for enterprises. Enterprise features include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.com/blog/diving-into-redis-6/"},"Open source Redis 6.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-high-availability#zone-redundancy"},"Zone redundancy, with up to 99.99% availability")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.com/redis-enterprise/technology/active-active-geo-distribution/"},"Active geo-replication, with up to 99.999% availability")," - Preview"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.com/redis-enterprise/technology/redis-on-flash/"},"Redis on Flash (RoF)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.com/redis-enterprise/technology/durable-redis/"},"Disk persistence with recovery")," - Preview"),(0,n.kt)("li",{parentName:"ul"},"Redis Enterprise modules:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.com/blog/redisearch-2-build-modern-applications-interactive-search/"},"RediSearch 2.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.com/modules/redis-timeseries/"},"RedisTimeSeries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://redis.com/modules/redis-bloom/"},"RedisBloom")))),(0,n.kt)("li",{parentName:"ul"},"Scaling",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Datasets up to 13TB"),(0,n.kt)("li",{parentName:"ul"},"Up to 2M concurrent client connections"),(0,n.kt)("li",{parentName:"ul"},"Over 1M ops/second"))),(0,n.kt)("li",{parentName:"ul"},"Security",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/cache-private-link"},"Private Link support")),(0,n.kt)("li",{parentName:"ul"},"TLS connectivity"))),(0,n.kt)("li",{parentName:"ul"},"Integrated billing and the ability to apply Azure-commitment spend")),(0,n.kt)("p",null,"Azure Resource Manager (a.k.a AzureRM) is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account. You use management features, like access control, locks, and tags, to secure and organize your resources after deployment."),(0,n.kt)("p",null,"The \"azurerm_redis_enterprise_cluster\" is a resource that manages a Redis Enterprise cluster. This is a template to get started with the 'azurerm_redis_enterprise_cluster' resource available in the 'azurerm' provider with Terraform."),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://terraform.io"},"Terraform CLI")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"},"Azure CLI"))),(0,n.kt)("h3",{id:"step-1-getting-started"},"Step 1. Getting Started"),(0,n.kt)("p",null,"Login in to Azure using the Azure CLI"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"az login\n")),(0,n.kt)("h3",{id:"step-2-clone-the-repository"},"Step 2: Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/redis-developer/acre-terraform-simple\n")),(0,n.kt)("h3",{id:"step-3-initialize-the-repository"},"Step 3: Initialize the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd acre-terraform-simple\nterraform init\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The output should include: ",(0,n.kt)("inlineCode",{parentName:"p"},"Terraform has been successfully initialized"))),(0,n.kt)("h3",{id:"step-4-modify-the-variablesoptional"},"Step 4: Modify the variables(optional)"),(0,n.kt)("p",null,"The default variables are setup to deploy the smallest 'E10' instance into the 'East US' region.\nChanges can be made by updating the ",(0,n.kt)("inlineCode",{parentName:"p"},"variables.tf")," file."),(0,n.kt)("h3",{id:"step-5-verify-the-plan"},"Step 5: Verify the plan"),(0,n.kt)("p",null,"The 'plan' output will show you everything being created by the template."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform plan\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The plan step does not make any changes in Azure")),(0,n.kt)("h3",{id:"step-6-apply-the-plan"},"Step 6: Apply the plan"),(0,n.kt)("p",null,"When the plan looks good, 'apply' the template."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,n.kt)("h3",{id:"step-7-connect-using-generated-output"},"Step 7: Connect using generated output"),(0,n.kt)("p",null,"The access key is sensitive, so viewing the outputs must be requested specifically.\nThe output is also in JSON format."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform output redisgeek_config\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Example output:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n"hostname" = "redisgeek-8jy4.eastus.redisenterprise.cache.azure.net"\n"access_key" = "DQYABC3uRMyDguEXXXXXXXXXXWTRkfgOPjs82Y="\n"port" = "10000"\n}\n')),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("h5",{id:"how-to-use-redis-cache-for-redis-like-a-pro"},"How to use Redis Cache for Redis like a Pro"),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/eThj-jwViZw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("h5",{id:"do-more-with-azure-cache-for-redis-enterprise-tiers"},"Do More with Azure Cache for Redis, Enterprise Tiers"),(0,n.kt)("div",{class:"text--center"},(0,n.kt)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/t6XQHsKFMKQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/garantiadata.redis_enterprise_1sp_public_preview?ocid=redisga_redislabs_cloudpartner_cta1"},"Azure Cache for Redis Enterprise")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://query.prod.cms.rt.microsoft.com/cms/api/am/binary/RWGGx3"},"Accelerate Modern Application Delivery with Redis Enterprise on Microsoft Azure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/develop/dotnet/"},".Net and Redis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-cache-for-redis/quickstart-create-redis-enterprise"},"Quickstart: Create a Redis Enterprise cache"))))}m.isMDXComponent=!0}}]);