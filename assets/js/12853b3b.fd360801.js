"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6047],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,k=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return n?s.createElement(k,i(i({ref:t},u),{},{components:n})):s.createElement(k,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var l=2;l<a;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return h}});var s=n(87462),o=n(63366),a=(n(67294),n(3905)),i=(n(44996),["components"]),r={id:"index-sessionstorage",title:"Scaling an Express Application with Redis as a Session Store",sidebar_label:"Session Storage",slug:"/develop/node/nodecrashcourse/sessionstorage",authors:["simon"]},c=void 0,l={unversionedId:"develop/node/node-crash-course/sessionstorage/index-sessionstorage",id:"develop/node/node-crash-course/sessionstorage/index-sessionstorage",title:"Scaling an Express Application with Redis as a Session Store",description:"<iframe",source:"@site/docs/develop/node/node-crash-course/sessionstorage/index-sessionstorage.mdx",sourceDirName:"develop/node/node-crash-course/sessionstorage",slug:"/develop/node/nodecrashcourse/sessionstorage",permalink:"/develop/node/nodecrashcourse/sessionstorage",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/sessionstorage/index-sessionstorage.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-sessionstorage",title:"Scaling an Express Application with Redis as a Session Store",sidebar_label:"Session Storage",slug:"/develop/node/nodecrashcourse/sessionstorage",authors:["simon"]},sidebar:"docs",previous:{title:"Caching",permalink:"/develop/node/nodecrashcourse/caching"},next:{title:"Advanced Streams",permalink:"/develop/node/nodecrashcourse/advancedstreams"}},u={},h=[{value:"Hands-on Exercise",id:"hands-on-exercise",level:2},{value:"External Resources",id:"external-resources",level:2}],d={toc:h};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/T8xay-l4HrM",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("p",null,"We're building our application as a series of components, with Redis as a data store and cache. Most of these components talk to the user via the HTTP request / response cycle, which is inherently stateless. However, we want to maintain state, or remember things about the user from one request to the next in some circumstances."),(0,a.kt)("p",null,"We can identify users by having the application set a cookie in the response that is returned to the user - their browser will then attach this cookie to future requests. This can then be used to store information about the user in a server-side session object that Express keeps track of by means of the ID in the cookie."),(0,a.kt)("p",null,"You can think of the cookie as a sort of key, and the session object as a value. We could store these in memory in our server, but this approach limits us to a single server instance that would lose all of session data if it were to crash and restart."),(0,a.kt)("p",null,"Fortunately, Redis makes an excellent store for session data - it's fast and durable, and allows us to scale system components horizontally by adding more instances of them. We've used the npm package \"connect-redis\" to add Redis as a session store for the Authentication and Checkin Receiver services, with minimal code required."),(0,a.kt)("h2",{id:"hands-on-exercise"},"Hands-on Exercise"),(0,a.kt)("p",null,"In this exercise, you'll enable the authentication functionality in the Checkin Receiver service, and use Postman to establish a session with the Authentication service in order to submit an authenticated checkin to the system."),(0,a.kt)("p",null,"First, stop the Checkin Receiver if you have it running. Press Ctrl-C in its terminal window."),(0,a.kt)("p",null,"Now, restart the Checkin Receiver with the optional authentication functionality enabled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ npm run checkinreceiver auth\n\n> js-crash-course@0.0.1 checkinreceiver\n> node ./src/checkinreceiver.js "auth"\n\ninfo: Authentication enabled, checkins require a valid user session.\ninfo: Checkin receiver listening on port 8082.\n')),(0,a.kt)("p",null,"Note that the Checkin Receiver reports that authentication is now enabled."),(0,a.kt)("p",null,"In a second terminal window, cd to the node-js-crash-course directory that you cloned the project repo into, and start the Authentication Service which will listen on port 8083:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run auth\n\n> js-crash-course@0.0.1 auth /Users/simonprickett/source/github/node-js-crash-course\n> node ./src/auth.js\n\ninfo: Authentication service listening on port 8083.\n")),(0,a.kt)("p",null,"Open up a new request in Postman, and make a POST request to perform a checkin as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Authenticated Checkin Attempt",src:n(1359).Z,width:"1854",height:"644"})),(0,a.kt)("p",null,'Click "Send" - this time, the Checkin Receiver service should reject the request as you haven\'t authenticated with the system. You should see a 401 Unauthorized response:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Checkin Attempt 401 Response",src:n(61078).Z,width:"1880",height:"962"})),(0,a.kt)("p",null,"And in the Checkin Receiver's terminal window, you should see that it rejected your request as it couldn't find your session:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"debug: Rejecting checkin - no valid user session found.\n")),(0,a.kt)("p",null,"The Checkin Receiver rejected your request because it couldn't find a value for 'user' in your request's session (check out the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/checkinreceiver.js"),")."),(0,a.kt)("p",null,"Let's try again, but this time we'll login first. This will establish a session and we'll be able to see how that gets stored in Redis\u2026"),(0,a.kt)("p",null,"Keep your checkin request tab in Postman, and open a new tab to create a POST request to the Authentication service."),(0,a.kt)("p",null,"Set the URL to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8083/login")," and the JSON body to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "email": "al.appelhof@example.com", "password": "secret123" }\n')),(0,a.kt)("p",null,"Your request should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Login Request",src:n(30366).Z,width:"1864",height:"644"})),(0,a.kt)("p",null,'Click "Send" to login. The Authentication Service will check the supplied credentials against what\'s stored in Redis at key ',(0,a.kt)("inlineCode",{parentName:"p"},"ncc:user:77"),' and create a session object for that user, adding the email address to the "user" property in the session. Postman should show a 200 (success) response code and the text "OK".'),(0,a.kt)("p",null,'Click the blue "Cookies" text in Postman, and you should see that a cookie was set for "checkinapp" on localhost. Click on the "checkinapp" text to see the contents of the cookie:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Local Cookies",src:n(4269).Z,width:"1720",height:"286"}),"\n",(0,a.kt)("img",{alt:"Cookie Detail",src:n(31358).Z,width:"1706",height:"722"})),(0,a.kt)("p",null,"Now flip back to your tab in Postman that has the checkin request for user 77. Send the request again, and this time it should succeed, as Postman will also send the cookie containing your session ID and the Checkin Receiver will then be able to validate you have an authenticated session. This time, you should get a 202 Accepted response:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Authenticated Checkin 202 Response",src:n(96208).Z,width:"1872",height:"922"})),(0,a.kt)("p",null,'When the Checkin Receiver got your request, it used the value in your cookie to look up and load your session from Redis (connect-redis does this for us), then checked that the session had a "user" property set. Any system component that\'s running on a localhost URL can now access your session and query and store information in it.'),(0,a.kt)("p",null,"Finally, let's see what the session looks like in Redis... using redis-cli or the RedisInsight browser, find all the session keys like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> keys ncc:session:*\n1) "ncc:session:Blvc-93k2TckafgwS0IDAHfW-MPGhqyl"\n')),(0,a.kt)("p",null,"Note that the key name contains the session ID that was in your cookie. connect-redis manages these keys for us as Redis Strings, all our application needs to do is manipulate the request's session object."),(0,a.kt)("p",null,"Let's see what's in our session and when it expires:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> get ncc:session:Blvc-93k2TckafgwS0IDAHfW-MPGhqyl\n"{\\"cookie\\":{\\"originalMaxAge\\":null,\\"expires\\":null,\\"httpOnly\\":true,\\"path\\":\\"/\\"},\\"user\\":\\"al.appelhof@example.com\\"}"\n127.0.0.1:6379> ttl ncc:session:Blvc-93k2TckafgwS0IDAHfW-MPGhqyl\n(integer) 85693\n')),(0,a.kt)("p",null,"We didn't specify a session length in our code when setting up connect-redis, so it's defaulted to expiring sessions after a day."),(0,a.kt)("p",null,"Finally, let's logout from the Authentication Service and ensure that our session data gets removed from Redis. In Postman, create a GET request as follows and click Send:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Logout Request",src:n(55666).Z,width:"1860",height:"522"})),(0,a.kt)("p",null,"The code in the logout handler destroys your session, which should then disappear from Redis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> get ncc:session:Blvc-93k2TckafgwS0IDAHfW-MPGhqyl\n(nil)\n")),(0,a.kt)("p",null,"Next, we'll move on to look at how to scale up our checkin processing to cope with all these new users!"),(0,a.kt)("h2",{id:"external-resources"},"External Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/connect-redis"},"connect-redis session store package on npm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.com/blog/cache-vs-session-store/"},"Cache vs Session Store")," - a blog article from Redis")))}p.isMDXComponent=!0},96208:function(e,t,n){t.Z=n.p+"assets/images/authenticated_checkin_202_response-2754620cf2dcf735a2340a7a9512ba55.png"},1359:function(e,t,n){t.Z=n.p+"assets/images/authenticated_checkin_attempt-dda7ba858a32459b5bf1036c3e8f7097.png"},61078:function(e,t,n){t.Z=n.p+"assets/images/checkin_attempt_401_response-43c38047e04e90c03f93dd66f9a87b21.png"},31358:function(e,t,n){t.Z=n.p+"assets/images/cookie_detail-7961ca9385ecd5fb2bfc45f2477c60ac.png"},4269:function(e,t,n){t.Z=n.p+"assets/images/local_cookie-ad2e6af0381765295e2406dfaae3c6be.png"},30366:function(e,t,n){t.Z=n.p+"assets/images/login_request-759155812731080875c661a227473961.png"},55666:function(e,t,n){t.Z=n.p+"assets/images/logout_request-ed887f48a08ba5b5f862e41b46d51a21.png"}}]);