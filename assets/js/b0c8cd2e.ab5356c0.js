"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(n),p=a,g=h["".concat(o,".").concat(p)]||h[p]||u[p]||r;return n?i.createElement(g,l(l({ref:t},c),{},{components:n})):i.createElement(g,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));n(44996);const r={id:"index-understanding-sentinels",title:"3.3 Understanding Sentinels",sidebar_label:"3.3 Understanding Sentinels",slug:"/operate/redis-at-scale/high-availability/understanding-sentinels",custom_edit_url:null},l=void 0,s={unversionedId:"operate/redis-at-scale/high-availability/understanding-sentinels/index-understanding-sentinels",id:"operate/redis-at-scale/high-availability/understanding-sentinels/index-understanding-sentinels",title:"3.3 Understanding Sentinels",description:"In the beginning of this unit, we learned that we can\u2019t have high availability without replication and automatic failover. We covered replication in the previous two chapters, and now we\u2019ll explain Sentinel - a tool that provides the automatic failover.",source:"@site/docs/operate/redis-at-scale/high-availability/understanding-sentinels/index-understanding-sentinels.mdx",sourceDirName:"operate/redis-at-scale/high-availability/understanding-sentinels",slug:"/operate/redis-at-scale/high-availability/understanding-sentinels",permalink:"/operate/redis-at-scale/high-availability/understanding-sentinels",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-understanding-sentinels",title:"3.3 Understanding Sentinels",sidebar_label:"3.3 Understanding Sentinels",slug:"/operate/redis-at-scale/high-availability/understanding-sentinels",custom_edit_url:null},sidebar:"docs",previous:{title:"3.2 Exercise - Enabling Basic Replication",permalink:"/operate/redis-at-scale/high-availability/exercise-1"},next:{title:"3.4 Exercise - Sentinel Hands-on",permalink:"/operate/redis-at-scale/high-availability/exercise-2"}},o={},d=[{value:"Deciding that a primary instance is down",id:"deciding-that-a-primary-instance-is-down",level:2},{value:"Triggering a failover",id:"triggering-a-failover",level:2},{value:"Sentinel and Client Libraries",id:"sentinel-and-client-libraries",level:2},{value:"Further Reading",id:"further-reading",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the beginning of this unit, we learned that we can\u2019t have high availability without replication and automatic failover. We covered replication in the previous two chapters, and now we\u2019ll explain Sentinel - a tool that provides the automatic failover."),(0,a.kt)("p",null,"Redis Sentinel is a distributed system consisting of multiple Redis instances started in sentinel mode. We call these instances ",(0,a.kt)("strong",null,"Sentinels"),"."),(0,a.kt)("p",null,"The group of Sentinels monitors a primary Redis instance and its replicas. If the sentinels detect that the primary instance has failed, the sentinel processes will look for the replica that has the latest data and will promote that replica to be the new primary. This way, the clients talking to the database will be able to reconnect to the new primary and continue functioning as usual, with minimal disruption to the users."),(0,a.kt)("br",null),(0,a.kt)("img",{height:"75%",width:"75%",src:"https://s3.us-east-2.amazonaws.com/assets-university.redislabs.com/ru301/3.4/image1.png",alt:"Sentinel Quorum Diagram"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"deciding-that-a-primary-instance-is-down"},"Deciding that a primary instance is down"),(0,a.kt)("p",null,"In order for the Sentinels to be able to decide that a primary instance is down we need to have enough Sentinels agree that the server is unreachable from their point of view."),(0,a.kt)("p",null,"Having a number of Sentinels agreeing that they need to take an action is called ",(0,a.kt)("strong",null,"reaching a quorum"),". If the Sentinels can\u2019t reach quorum, they cannot decide that the primary has failed. The exact number of Sentinels needed for quorum is configurable."),(0,a.kt)("h2",{id:"triggering-a-failover"},"Triggering a failover"),(0,a.kt)("p",null,"Once the Sentinels have decided that a primary instance is down, they need to elect and authorize a leader (a Sentinel instance) that will do the failover. A leader can only be chosen if the majority of the Sentinels agree on it."),(0,a.kt)("p",null,"In the final step, the leader will reconfigure the chosen replica to become a primary by sending the command ",(0,a.kt)("inlineCode",{parentName:"p"},"REPLICAOF NO ONE")," and it will reconfigure the other replicas to follow the newly promoted primary."),(0,a.kt)("h2",{id:"sentinel-and-client-libraries"},"Sentinel and Client Libraries"),(0,a.kt)("p",null,"If you have a system that uses Sentinel for high availability, then you need to have a client that supports Sentinel. Not all libraries have this feature, but most of the popular ones do, so make sure you add it to your list of requirements when choosing your library."),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("p",null,"For more information on Redis Sentinel, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://redis.io/topics/sentinel"},"documentation")," on redis.io."))}u.isMDXComponent=!0}}]);