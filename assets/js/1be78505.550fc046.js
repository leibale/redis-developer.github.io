"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9514,486],{19963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Se});var a=n(67294),l=n(86010),r=n(1944),c=n(35281),o=n(43320),i=n(53438),s=n(74477),d=n(1116),m=n(44859),u=n(95999),b=n(12466),p=n(85936);const E="backToTopButton_sjWU",h="backToTopButtonShow_xfvO";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:c,cancelScroll:o}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const c=null==n?void 0:n.scrollY;c&&(r.current?r.current=!1:a>=c?(o(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>c(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",c.k.common.backToTopButton,E,e&&h),type:"button",onClick:t})}var v=n(76775),g=n(87524),_=n(86668),k=n(87846),C=n(87462);function S(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_PEFL",N="collapseSidebarButtonIcon_kv0_";function Z(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",I),onClick:t},a.createElement(S,{className:N}))}var y=n(59689),x=n(902);const T=Symbol("EmptyContext"),w=a.createContext(T);function L(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(w.Provider,{value:r},t)}var F=n(86043),B=n(48596),M=n(39960),A=n(72389);function H(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:r,level:o,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:E}=t,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,_.L)(),f=function(e){const t=(0,A.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),v=(0,i._F)(t,r),g=(0,B.Mg)(E,r),{collapsed:k,setCollapsed:S}=(0,F.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(w);if(e===T)throw new x.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!k),N(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,x.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:v,collapsed:k,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&null!=I&&I!==s&&h&&S(!0)}),[b,I,s,S,h]),a.createElement("li",{className:(0,l.Z)(c.k.docs.docSidebarItemCategory,c.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":k},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(M.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!E&&b,"menu__link--active":v}),onClick:b?e=>{null==n||n(t),E?Z(!1):(e.preventDefault(),Z())}:()=>{null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!k:void 0,href:b?f??"#":f},d),u),E&&b&&a.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(F.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(q,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:r,level:o+1})))}var D=n(13919),W=n(39471);const R="menuExternalLink_NmtK";function z(e){let{item:t,onItemClick:n,activePath:r,level:o,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,E=(0,i._F)(t,r),h=(0,D.Z)(m);return a.createElement("li",{className:(0,l.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",b),key:u},a.createElement(M.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!h&&R,{"menu__link--active":E}),autoAddBaseUrl:p,"aria-current":E?"page":void 0,to:m},h&&{onClick:n?()=>n(t):void 0},d),u,!h&&a.createElement(W.Z,null)))}const U="menuHtmlItem_M9Kj";function V(e){let{item:t,level:n,index:r}=e;const{value:o,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(n),i&&[U,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:o}})}function K(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(P,(0,C.Z)({item:t},n));case"html":return a.createElement(V,(0,C.Z)({item:t},n));default:return a.createElement(z,(0,C.Z)({item:t},n))}}function j(e){let{items:t,...n}=e;return a.createElement(L,null,t.map(((e,t)=>a.createElement(K,(0,C.Z)({key:t,item:e,index:t},n)))))}const q=(0,a.memo)(j),G="menu_SIkG",Y="menuWithAnnouncementBar_GW3s";function O(e){let{path:t,sidebar:n,className:r}=e;const o=function(){const{isActive:e}=(0,y.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",G,o&&Y,r)},a.createElement("ul",{className:(0,l.Z)(c.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:n,activePath:t,level:1})))}const X="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:n,onCollapse:r,isHidden:c}=e;const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:i}}}=(0,_.L)();return a.createElement("div",{className:(0,l.Z)(X,o&&J,c&&Q)},o&&a.createElement(k.Z,{tabIndex:-1,className:$}),a.createElement(O,{path:t,sidebar:n}),i&&a.createElement(Z,{onClick:r}))}const te=a.memo(ee);var ne=n(13102),ae=n(72961);const le=e=>{let{sidebar:t,path:n}=e;const r=(0,ae.e)();return a.createElement("ul",{className:(0,l.Z)(c.k.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function re(e){return a.createElement(ne.Zo,{component:le,props:e})}const ce=a.memo(re);function oe(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(te,e),l&&a.createElement(ce,e))}const ie="expandButton_m80_",se="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ie,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(S,{className:se}))}const me="docSidebarContainer_b6E3",ue="docSidebarContainerHidden_b3ry";function be(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:(null==n?void 0:n.name)??"noSidebar"},t)}function pe(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:o}=(0,v.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),r((e=>!e))}),[r,i]);return a.createElement("aside",{className:(0,l.Z)(c.k.docs.docSidebarContainer,me,n&&ue),onTransitionEnd:e=>{e.currentTarget.classList.contains(me)&&n&&s(!0)}},a.createElement(be,null,a.createElement(oe,{sidebar:t,path:o,onCollapse:d,isHidden:i})),i&&a.createElement(de,{toggleSidebar:d}))}const Ee={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function he(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(Ee.docMainContainer,(t||!r)&&Ee.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",Ee.docItemWrapper,t&&Ee.docItemWrapperEnhanced)},n))}const fe="docPage__5DB",ve="docsWrapper_BCFX";function ge(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:ve},a.createElement(f,null),a.createElement("div",{className:fe},n&&a.createElement(pe,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(he,{hiddenSidebarContainer:l},t)))}var _e=n(20486),ke=n(90197);function Ce(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(ke.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Se(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(_e.default,null);const{docElement:o,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(Ce,e),a.createElement(r.FG,{className:(0,l.Z)(c.k.wrapper.docsPages,c.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(ge,null,o)))))}},74477:(e,t,n)=>{n.d(t,{E:()=>o,q:()=>c});var a=n(67294),l=n(902);const r=a.createContext(null);function c(e){let{children:t,version:n}=e;return a.createElement(r.Provider,{value:n},t)}function o(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},18009:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(87462),l=n(67294);const r=e=>{let{color:t,...n}=e;return l.createElement("svg",(0,a.Z)({width:"90",height:"90",xmlns:"http://www.w3.org/2000/svg"},n),l.createElement("g",{fill:"none",fillRule:"evenodd"},l.createElement("circle",{fill:t||"#CF5815",cx:"5.5",cy:"5.5",r:"5.5"}),l.createElement("circle",{fill:t||"#5961FF",cx:"23.5",cy:"5.5",r:"5.5"}),l.createElement("circle",{fill:t||"#14708D",cx:"41.5",cy:"5.5",r:"5.5"})))}},20486:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294),l=n(44859),r=n(44996),c=n(18009),o=n(2670);const i=function(){return a.createElement(l.Z,null,a.createElement("main",{className:"rds-404"},a.createElement("img",{src:(0,r.Z)("/img/code-3.png"),className:"code",alt:""}),a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--8 col--offset-2"},a.createElement("div",{className:"terminal"},a.createElement("div",{className:"terminal-header"},a.createElement(c.Z,{color:"#FFFFFF"})),a.createElement("div",{className:"terminal-body"},"404")),a.createElement("h1",{className:"title"},a.createElement(o.Z,{strings:[">_ Page not found"],typeSpeed:75})),a.createElement("a",{href:"/",className:"link"},"Back to homepage"))))))}},2670:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),l=n(13614),r=n.n(l);const c=e=>{const t=(0,a.useRef)(null),{strings:n,typeSpeed:l}=e;return(0,a.useEffect)((()=>{if(!t.current)return;const e=new(r())(t.current,{strings:n,typeSpeed:l??40});return()=>{e.destroy()}}),[]),a.createElement("span",{ref:t})}}}]);