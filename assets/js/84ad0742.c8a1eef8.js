"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9047],{47708:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(35742),n=a(67294),i=a(72389);const o=["#redis-sitesearch",'.navbar__link[href*="rediscloud"]','.navbar__link[href*="launchpad"]',"footer.footer"];function s(e){let{hasForm:t=!0,children:a}=e;return function(e){let{skip:t=!1}=e;const a=(0,i.Z)();(0,n.useLayoutEffect)((()=>{if(!t&&a)try{o.forEach((e=>{document.querySelectorAll(e).forEach((e=>{e.remove()}))}));const e=document.querySelector("a.navbar__brand");if(!e)return;e.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation()}))}catch(e){}}),[t,a])}({skip:!t}),function(e){let{skip:t=!1}=e;const a=(0,i.Z)();(0,n.useLayoutEffect)((()=>{if(t||!a)return;const e=setInterval((()=>{"undefined"!=typeof MktoForms2&&(clearInterval(e),document.querySelectorAll(".m-form").forEach((async e=>{const t=e.id.split("_")[1];let a={};try{const e=await fetch("https://redis.com/wp-content/themes/wpx/partials/forms/mkto_lead.php");if(e.ok){const t=await e.json();t&&(a={Email:t.email})}}catch(r){}MktoForms2.loadForm("https://lp.redis.com","915-NFD-128",Number(t),(e=>{Object.keys(a).length>0&&e.vals(a)}))})))}),100);return()=>{clearInterval(e)}}),[t,a])}({skip:!t}),function(e){let{skip:t=!1}=e;const a=(0,i.Z)();(0,n.useLayoutEffect)((()=>{if(t||!a)return;let e=!1;function r(){!1===e&&(e=!0,Munchkin.init("915-NFD-128"))}const n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="//munchkin.marketo.net/munchkin.js",n.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||r()},n.onload=r,document.getElementsByTagName("head")[0].appendChild(n)}),[t,a])}({skip:!t}),n.createElement(n.Fragment,null,n.createElement(r.Z,null,n.createElement("meta",{name:"robots",content:"noindex, nofollow"}),t&&n.createElement("script",{src:"//lp.redis.com/js/forms2/js/forms2.min.js"})),n.createElement("main",{className:"lp-main"},a))}},69986:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var r=a(67294),n=a(44859),i=a(47708),o=a(72389);function s(e){let{img:t,heading:a,body:n,cta:i}=e;return r.createElement("a",{className:"card-link",href:i.url,target:"_blank"},r.createElement("div",{className:"card"},r.createElement("div",{className:"card__image"},r.createElement("img",{src:t.src,alt:t.alt,title:t.title})),r.createElement("div",{className:"card__body"},r.createElement("h4",null,a),r.createElement("small",null,n)),r.createElement("div",{className:"card__footer"},r.createElement("button",{className:"button button--primary button--block"},i.text))))}const l={jwt:[{img:{src:"https://redis.com/wp-content/uploads/2022/07/try-free-card-500x358-3.jpg?&auto=webp&quality=85,75&width=500",alt:"Try Redis Free",title:"Try Redis Free"},heading:"Try Redis for Free",body:"Get a free account to start building your next app.",cta:{text:"Get started",url:"https://redis.com/try-free/"}},{img:{src:"https://redis.com/wp-content/uploads/2022/07/redis-insight-card-500x358-1.jpg?&auto=webp&quality=85,75&width=500",alt:"Model your data in real time with RedisInsight",title:"Model your data in real time with RedisInsight"},heading:"Model your data in real time with RedisInsight",body:"RedisInsight provides an intuitive Redis admin GUI and helps optimize your use of Redis in your applications.",cta:{text:"Download now",url:"https://redis.com/redis-enterprise/redis-insight/"}},{img:{src:"/img/lp/heart.png",alt:"Why developers love Redis",title:"Why developers love Redis"},heading:"See why developers love Redis",body:"Developers worldwide love Redis because of its flexibility and ease-of-use. This video tells the story.",cta:{text:"Watch video",url:"https://www.youtube.com/watch?v=vyxdC1qK4NE"}}]};function c(){let e=-1;const t=document.querySelectorAll(".col-card .card");t.forEach((t=>{t.offsetHeight>e&&(e=t.offsetHeight)})),t.forEach((t=>{t.style.height=`${e}px`}))}function d(){const e=function(){const e=(0,o.Z)();return(0,r.useMemo)((()=>{if(e)return Object.fromEntries(new URLSearchParams(window.location.search))}),[e])}(),t=(0,o.Z)();(0,r.useLayoutEffect)((()=>{if(!t)return;const e=[setTimeout(c,50),setTimeout(c,100),setTimeout(c,200),setTimeout(c,300),setTimeout(c,500),setTimeout(c,600),setTimeout(c,700),setTimeout(c,800),setTimeout(c,900),setTimeout(c,1e3)];return()=>{e.forEach(clearTimeout)}}));const a=null==e?void 0:e.code;let d=l.jwt;return a&&(d=l[a]??l.jwt),r.createElement(i.Z,{hasForm:!1},r.createElement(n.Z,{title:"Learn and Earn with Redis!"},r.createElement("article",{className:"padding-top--md"},r.createElement("div",{className:"padding-vert--md"},r.createElement("header",null,r.createElement("h1",{style:{textAlign:"center"}},"Thank you!")),r.createElement("div",{style:{width:"70%",minWidth:"370px",margin:"auto",textAlign:"center"}},r.createElement("p",null,(null==e?void 0:e.m)??"Thank you for your submission!"))),!!d&&d.length>0&&r.createElement("div",{className:"padding-vert--md follow-up-section"},r.createElement("h2",{style:{textAlign:"center"}},"Continue your Redis journey"),r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},d.map((e=>r.createElement("div",{key:e.heading,className:"col col--4 col-card"},r.createElement(s,e))))))))))}}}]);