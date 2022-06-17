"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56426:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],p={id:"index-sampleapp",title:"10. Sample Application",sidebar_label:"10. Sample Application",slug:"/howtos/moviesdatabase/sampleapp"},l="Application Development",s={unversionedId:"howtos/moviesdatabase/sampleapp/index-sampleapp",id:"howtos/moviesdatabase/sampleapp/index-sampleapp",title:"10. Sample Application",description:"It is time now to see how to use RediSearch in your application.",source:"@site/docs/howtos/moviesdatabase/sampleapp/index-sampleapp.mdx",sourceDirName:"howtos/moviesdatabase/sampleapp",slug:"/howtos/moviesdatabase/sampleapp",permalink:"/howtos/moviesdatabase/sampleapp",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/moviesdatabase/sampleapp/index-sampleapp.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-sampleapp",title:"10. Sample Application",sidebar_label:"10. Sample Application",slug:"/howtos/moviesdatabase/sampleapp"},sidebar:"docs",previous:{title:"9. Advanced Option",permalink:"/howtos/moviesdatabase/advancedoption"},next:{title:"How to build a Chat application using Redis",permalink:"/howtos/chatapp"}},c={},d=[{value:"Run the Sample Application",id:"run-the-sample-application",level:2},{value:"Stop and Delete Everything",id:"stop-and-delete-everything",level:4}],u={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-development"},"Application Development"),(0,r.kt)("p",null,"It is time now to see how to use RediSearch in your application."),(0,r.kt)("h2",{id:"run-the-sample-application"},"Run the Sample Application"),(0,r.kt)("p",null,"The application and all the services, including RediSearch, are available as a Docker Compose application."),(0,r.kt)("p",null,"If you have not already downloaded the project, clone it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> git clone https://github.com/RediSearch/redisearch-getting-started.git\n\n> cd redisearch-getting-started\n")),(0,r.kt)("p",null,"To run the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> cd sample-app\n\n> docker-compose up --force-recreate --build\n\n")),(0,r.kt)("p",null,"This Docker Compose will start:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"RediSearch instance on port 6380, and import all movies, actors and create indexes"),(0,r.kt)("li",{parentName:"ol"},"The Java, Node and Python REST Services available on port 8085, 8086, 8087"),(0,r.kt)("li",{parentName:"ol"},"The frontend on port 8084")),(0,r.kt)("p",null,"Once started you can access the application and its services using the following URLs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"http://localhost:8084"),(0,r.kt)("li",{parentName:"ul"},"http://localhost:8085/api/1.0/movies/search?q=star&offset=0&limit=10"),(0,r.kt)("li",{parentName:"ul"},"http://localhost:8086/api/1.0/movies/search?q=star&offset=0&limit=10"),(0,r.kt)("li",{parentName:"ul"},"http://localhost:8087/api/1.0/movies/search?q=star&offset=0&limit=10")),(0,r.kt)("h4",{id:"stop-and-delete-everything"},"Stop and Delete Everything"),(0,r.kt)("p",null,"Run the following command to delete the containers & images:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> docker-compose down -v --rmi local --remove-orphans\n")))}m.isMDXComponent=!0}}]);