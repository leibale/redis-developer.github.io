"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7918],{74477:function(e,t,a){a.d(t,{E:function(){return s},q:function(){return i}});var n=a(67294),r=a(69688),l=n.createContext(null);function i(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function s(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},64230:function(e,t,a){a.r(t),a.d(t,{default:function(){return Me}});var n=a(67294),r=a(52263),l=a(86010),i=a(1944),s=a(87524),c=a(35281),o=a(87462),m=a(95999),d=a(39960);function u(e){var t=e.permalink,a=e.title,r=e.subLabel,i=e.isNext;return n.createElement(d.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&n.createElement("div",{className:"pagination-nav__sublabel"},r),n.createElement("div",{className:"pagination-nav__label"},a))}function v(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(u,(0,o.Z)({},t,{subLabel:n.createElement(m.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(u,(0,o.Z)({},a,{subLabel:n.createElement(m.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var b=a(80143),h=a(60373),f=a(74477);var p={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(m.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(m.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){var t=p[e.versionMetadata.banner];return n.createElement(t,e)}function E(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(m.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:r},n.createElement(m.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function L(e){var t,a=e.className,i=e.versionMetadata,s=(0,r.Z)().siteConfig.title,o=(0,b.gA)({failfast:!0}).pluginId,m=(0,h.J)(o).savePreferredVersionName,d=(0,b.Jo)(o),u=d.latestDocSuggestion,v=d.latestVersionSuggestion,f=null!=u?u:(t=v).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:s,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(E,{versionLabel:v.label,to:f.path,onClick:function(){return m(v.name)}})))}function N(e){var t=e.className,a=(0,f.E)();return a.banner?n.createElement(L,{className:t,versionMetadata:a}):null}function _(e){var t=e.className,a=(0,f.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(m.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(m.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function Z(e){var t=e.lastUpdatedBy;return n.createElement(m.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function C(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:c.k.common.lastUpdated},n.createElement(m.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(k,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(Z,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var T=a(63366),x="iconEdit_eYIM",H=["className"];function A(e){var t=e.className,a=(0,T.Z)(e,H);return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(x,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function U(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.k.common.editThisPage},n.createElement(A,null),n.createElement(m.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y="tag_zVej",w="tagRegular_sFm0",I="tagWithCount_h2kH";function M(e){var t=e.permalink,a=e.label,r=e.count;return n.createElement(d.Z,{href:t,className:(0,l.Z)(y,r?I:w)},a,r&&n.createElement("span",null,r))}var B="tags_jXut",O="tag_QGVx";function V(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(m.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(B,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:O},n.createElement(M,{label:t,permalink:a}))}))))}var P="lastUpdated_vbeJ";function S(e){return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(V,e)))}function D(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(c.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(U,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",P)},(a||r)&&n.createElement(C,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function R(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,m=o.length>0,d=!!(a||r||s);return m||d?n.createElement("footer",{className:(0,l.Z)(c.k.docs.docFooter,"docusaurus-mt-lg")},m&&n.createElement(S,{tags:o}),d&&n.createElement(D,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var F=a(86668),z=["parentIndex"];function j(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,r=(0,T.Z)(e,z);a>=0?t[a].children.push(r):n.push(r)})),n}function q(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=q({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function G(e){var t=e.getBoundingClientRect();return t.top===t.bottom?G(e.parentNode):t}function J(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return G(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(G(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function Y(){var e=(0,n.useRef)(0),t=(0,F.L)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Q(e){var t=(0,n.useRef)(void 0),a=Y();(0,n.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=J(s,{anchorTopOffset:a.current}),o=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}function W(e){var t=e.toc,a=e.className,r=e.linkClassName,l=e.isChild;return t.length?n.createElement("ul",{className:l?void 0:a},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(W,{isChild:!0,toc:e.children,className:a,linkClassName:r}))}))):null}var X=n.memo(W),K=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function $(e){var t=e.toc,a=e.className,r=void 0===a?"table-of-contents table-of-contents__left-border":a,l=e.linkClassName,i=void 0===l?"table-of-contents__link":l,s=e.linkActiveClassName,c=void 0===s?void 0:s,m=e.minHeadingLevel,d=e.maxHeadingLevel,u=(0,T.Z)(e,K),v=(0,F.L)(),b=null!=m?m:v.tableOfContents.minHeadingLevel,h=null!=d?d:v.tableOfContents.maxHeadingLevel,f=function(e){var t=e.toc,a=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,n.useMemo)((function(){return q({toc:j(t),minHeadingLevel:a,maxHeadingLevel:r})}),[t,a,r])}({toc:t,minHeadingLevel:b,maxHeadingLevel:h});return Q((0,n.useMemo)((function(){if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:h}}),[i,c,b,h])),n.createElement(X,(0,o.Z)({toc:f,className:r,linkClassName:i},u))}var ee="tableOfContents_bqdL",te=["className"];function ae(e){var t=e.className,a=(0,T.Z)(e,te);return n.createElement("div",{className:(0,l.Z)(ee,"thin-scrollbar",t)},n.createElement($,(0,o.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var ne=a(86043),re="tocCollapsibleButton_TO0P",le="tocCollapsibleButtonExpanded_MG3E",ie=["collapsed"];function se(e){var t=e.collapsed,a=(0,T.Z)(e,ie);return n.createElement("button",(0,o.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",re,!t&&le,a.className)}),n.createElement(m.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var ce="tocCollapsible_ETCw",oe="tocCollapsibleContent_vkbj",me="tocCollapsibleExpanded_sAul";function de(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,ne.u)({initialState:!0}),c=s.collapsed,o=s.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(ce,!c&&me,a)},n.createElement(se,{collapsed:c,onClick:o}),n.createElement(ne.z,{lazy:!0,className:oe,collapsed:c},n.createElement($,{toc:t,minHeadingLevel:r,maxHeadingLevel:i})))}var ue=a(92503),ve=a(53791),be=a(48596),he=a(44996);function fe(e){return n.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var pe={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function ge(e){var t=e.children,a=e.href,r="breadcrumbs__link";return e.isLast?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(d.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function Ee(e){var t=e.children,a=e.active,r=e.index,i=e.addMicrodata;return n.createElement("li",(0,o.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function Le(){var e=(0,he.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(d.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",pe.breadcrumbsItemLink),href:e},n.createElement(fe,{className:pe.breadcrumbHomeIcon})))}function Ne(){var e=(0,ve.s1)(),t=(0,be.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(c.k.docs.docBreadcrumbs,pe.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(Le,null),e.map((function(t,a){var r=a===e.length-1;return n.createElement(Ee,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(ge,{href:t.href,isLast:r},t.label))})))):null}var _e=a(3905),ke=a(48811);function Ze(e){var t=e.children;return n.createElement(_e.Zo,{components:ke.Z},t)}var Ce="docItemContainer_Adtb",Te="docItemCol_GujU",xe="tocMobile_aoJ5";function He(e){var t,a=e.content,r=a.metadata,l=a.frontMatter,s=a.assets,c=l.keywords,o=r.description,m=r.title,d=null!=(t=s.image)?t:l.image;return n.createElement(i.d,{title:m,description:o,keywords:c,image:d})}function Ae(e){var t=e.content,a=t.metadata,r=t.frontMatter,i=r.hide_title,o=r.hide_table_of_contents,m=r.toc_min_heading_level,d=r.toc_max_heading_level,u=a.title,b=!i&&void 0===t.contentTitle,h=(0,s.i)(),f=!o&&t.toc&&t.toc.length>0,p=f&&("desktop"===h||"ssr"===h);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!o&&Te)},n.createElement(N,null),n.createElement("div",{className:Ce},n.createElement("article",null,n.createElement(Ne,null),n.createElement(_,null),f&&n.createElement(de,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d,className:(0,l.Z)(c.k.docs.docTocMobile,xe)}),n.createElement("div",{className:(0,l.Z)(c.k.docs.docMarkdown,"markdown")},b&&n.createElement("header",null,n.createElement(ue.Z,{as:"h1"},u)),n.createElement(Ze,null,n.createElement(t,null))),n.createElement(R,e)),n.createElement(v,{previous:a.previous,next:a.next}))),p&&n.createElement("div",{className:"col col--3"},n.createElement(ae,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:d,className:c.k.docs.docTocDesktop})))}function Ue(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(i.FG,{className:t},n.createElement(He,e),n.createElement(Ae,e))}var ye="authorByline_dte6",we="authorLabel_lTDc",Ie="authorProfileImage_YT8L";var Me=function(e){var t=(0,r.Z)().siteConfig,a=e.content,l=t.customFields.authors;return n.createElement(n.Fragment,null,a.frontMatter.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),a.frontMatter.authors.map((function(e){return n.createElement("div",{className:ye},n.createElement("img",{className:Ie,src:"/img/"+(l[e].image?l[e].image:"default_author_profile_pic.png"),alt:"Profile picture for "+l[e].name}),n.createElement("div",null,n.createElement("div",{className:we},"Author:"),n.createElement("div",null,n.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title)))})),n.createElement("hr",null)),n.createElement(Ue,e))}}}]);