"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[8464],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(i),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return i?n.createElement(h,o(o({ref:t},p),{},{components:i})):n.createElement(h,o({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},6517:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=i(87462),r=(i(67294),i(3905));const a={id:"sliding-window-rate-limiting",title:"How to implement Sliding Window Rate Limiting app using ASP.NET Core & Redis",sidebar_label:"Sliding Window Rate Limiting app  using ASP.NET",slug:"/develop/dotnet/aspnetcore/rate-limiting/sliding-window",authors:["steve"]},o=void 0,l={unversionedId:"develop/dotnet/aspnetcore/rate-limiting/sliding-window/sliding-window-rate-limiting",id:"develop/dotnet/aspnetcore/rate-limiting/sliding-window/sliding-window-rate-limiting",title:"How to implement Sliding Window Rate Limiting app using ASP.NET Core & Redis",description:"In this tutorial, we'll learn how to build a sliding window rate limiter for ASP.NET Core using Redis.",source:"@site/docs/develop/dotnet/aspnetcore/rate-limiting/sliding-window/index-sliding-rate-limiter.md",sourceDirName:"develop/dotnet/aspnetcore/rate-limiting/sliding-window",slug:"/develop/dotnet/aspnetcore/rate-limiting/sliding-window",permalink:"/develop/dotnet/aspnetcore/rate-limiting/sliding-window",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/aspnetcore/rate-limiting/sliding-window/index-sliding-rate-limiter.md",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"sliding-window-rate-limiting",title:"How to implement Sliding Window Rate Limiting app using ASP.NET Core & Redis",sidebar_label:"Sliding Window Rate Limiting app  using ASP.NET",slug:"/develop/dotnet/aspnetcore/rate-limiting/sliding-window",authors:["steve"]},sidebar:"docs",previous:{title:"Fixed Window Rate Limiting app using ASP.NET",permalink:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window"},next:{title:"Rate Limiting Middleware",permalink:"/develop/dotnet/aspnetcore/rate-limiting/middleware"}},s={},d=[{value:"What is A Sliding Window Rate Limiter",id:"what-is-a-sliding-window-rate-limiter",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Startup Redis",id:"startup-redis",level:2},{value:"Create Project",id:"create-project",level:2},{value:"Initialize The Multiplexer",id:"initialize-the-multiplexer",level:2},{value:"Inject the ConnectionMultiplexer",id:"inject-the-connectionmultiplexer",level:2},{value:"Add a Simple Route",id:"add-a-simple-route",level:2},{value:"Sliding Window Rate Limiter Lua Script",id:"sliding-window-rate-limiter-lua-script",level:2},{value:"Update the Controller for rate limiting",id:"update-the-controller-for-rate-limiting",level:2},{value:"Resources",id:"resources",level:2}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, we'll learn how to build a sliding window rate limiter for ASP.NET Core using Redis."),(0,r.kt)("h2",{id:"what-is-a-sliding-window-rate-limiter"},"What is A Sliding Window Rate Limiter"),(0,r.kt)("p",null,"The pattern that we are implementing here is a sliding window rate limiter. A sliding window rate limiter, unlike a fixed window, restricts requests for a discrete window prior to the current request under evaluation. As opposed to a fixed window rate limiter which groups the requests into a bucket based on a very definitive time window. For example, if you have a 10 req/minute rate limiter, on a fixed window, you could encounter a case where the rate-limiter allows 20 requests inside of a minute. That's because if first 10 requests are on the left hand side of the current window, and the next 20 requests are on the right hand side of the window, both have enough space in their respective buckets to be allowed through. If you sent those same 20 requests through a sliding window limited rate limiter on the other hand, if they are all sent within 60 seconds of each other, only 10 will make it through. Using Sorted Sets and Lua scripts, implementing one of these rate limiters is a breeze."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Must have the ",(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/download/dotnet/5.0"},".NET 5+ SDK")," installed"),(0,r.kt)("li",{parentName:"ul"},"Some way of running Redis, for this tutorial we'll use ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop")),(0,r.kt)("li",{parentName:"ul"},"IDE for writing C# ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"VS Code"),", ",(0,r.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/"},"Visual Studio"),", or ",(0,r.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/rider/"},"Rider"))),(0,r.kt)("h2",{id:"startup-redis"},"Startup Redis"),(0,r.kt)("p",null,"Before we begin, startup Redis. For this example, we'll use the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/redis"},"Redis docker image"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 6379:6379 redis\n")),(0,r.kt)("h2",{id:"create-project"},"Create Project"),(0,r.kt)("p",null,"In your terminal, navigate to where you want the app to live and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new webapi -n SlidingWindowRateLimiter --no-https\n")),(0,r.kt)("p",null,"Cd into the ",(0,r.kt)("inlineCode",{parentName:"p"},"SlidingWindowRateLimiter")," folder and run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet add package StackExchange.Redis"),"."),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"SlidingWindowRateLimiter.csproj")," in Rider, Visual Studio, or open the folder in VS Code. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Controllers")," folder, add an API controller called ",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimitedController"),", when all this is complete, ",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimitedController.cs")," should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace SlidingWindowRateLimiter.Controllers\n{\n    [ApiController]\n    [Route("api/[controller]")]\n    public class RateLimitedController : ControllerBase\n    {\n    }\n}\n')),(0,r.kt)("h2",{id:"initialize-the-multiplexer"},"Initialize The Multiplexer"),(0,r.kt)("p",null,"To use Redis, we're going to initialize an instance of the ConnectionMultiplexer from ",(0,r.kt)("inlineCode",{parentName:"p"},"StackExchange.Redis"),", to do so, go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," method inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," and add the following line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'services.AddSingleton<IConnectionMultiplexer>(ConnectionMultiplexer.Connect("localhost"));\n')),(0,r.kt)("h2",{id:"inject-the-connectionmultiplexer"},"Inject the ConnectionMultiplexer"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimitedController.cs")," inject the ConnectionMultiplexer into the controller and pull out an ",(0,r.kt)("inlineCode",{parentName:"p"},"IDatabase")," object from it with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"private readonly IDatabase _db;\npublic RateLimitedController(IConnectionMultiplexer mux)\n{\n    _db = mux.GetDatabase();\n}\n")),(0,r.kt)("h2",{id:"add-a-simple-route"},"Add a Simple Route"),(0,r.kt)("p",null,"We will add a simple route that we will Rate Limit; it will be a POST request route on our controller. This POST request will use ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"Basic auth")," - this means that each request is going to expect a header of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Basic <base64encoded>")," where the ",(0,r.kt)("inlineCode",{parentName:"p"},"base64encoded")," will be a string of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"apiKey:apiSecret")," base64 encoded, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=="),". This route will parse the key out of the header and return an OK result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"[HttpPost]\n[HttpGet]\n[Route(\"sliding\")]\npublic async Task<IActionResult> Sliding([FromHeader]string authorization)\n{\n    var encoded = string.Empty;\n    if(!string.IsNullOrEmpty(authorization)) encoded = AuthenticationHeaderValue.Parse(authorization).Parameter;\n    if (string.IsNullOrEmpty(encoded)) return new UnauthorizedResult();\n    var apiKey = Encoding.UTF8.GetString(Convert.FromBase64String(encoded)).Split(':')[0];\n    return Ok();\n}\n")),(0,r.kt)("p",null,"With that setup, you should run the project with a ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet run"),", and if you issue a POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:5001/api/RateLimited/sliding")," - with apiKey ",(0,r.kt)("inlineCode",{parentName:"p"},"foobar")," and password ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),", you will get a 200 OK response back."),(0,r.kt)("p",null,"You can use this cURL request to elicit that response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Length: 0" --user "foobar:password" http://localhost:5000/api/RateLimited/single\n')),(0,r.kt)("h2",{id:"sliding-window-rate-limiter-lua-script"},"Sliding Window Rate Limiter Lua Script"),(0,r.kt)("p",null,"To implement this pattern we will need to do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The client will create a key for the server to check, this key will be of the format ",(0,r.kt)("inlineCode",{parentName:"li"},"route:apikey")),(0,r.kt)("li",{parentName:"ol"},"That key will map to a sorted set in Redis, we will check the current time, and shave off any requests in the sorted set that are outside of our window"),(0,r.kt)("li",{parentName:"ol"},"We will then check the cardinality of the sorted set"),(0,r.kt)("li",{parentName:"ol"},"If the cardinality is less than our limit, we will",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Add a new member to our sorted set with a score of the current time in seconds, and a member of the current time in microseconds"),(0,r.kt)("li",{parentName:"ol"},"Set the expiration for our sorted set to the window length"),(0,r.kt)("li",{parentName:"ol"},"return 0"))),(0,r.kt)("li",{parentName:"ol"},"If the cardinality is greater than or equal to our limit we will return 1")),(0,r.kt)("p",null,"The trick here is that everything needs to happen atomically, we want to be able to trim the set, check its cardinality, add an item to it, and set it's expiration, all without anything changing in the interim. Fortunately this is a perfect place to use a ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/commands/eval"},"Lua Script"),". Specifically we are going to be using the StackExchange script preparation engine to drive our lua script, meaning we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"@variable_name")," in place of a particular position in ",(0,r.kt)("inlineCode",{parentName:"p"},"ARGV")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYS")," in the script. Our Lua script will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"local current_time = redis.call('TIME')\nlocal trim_time = tonumber(current_time[1]) - @window\nredis.call('ZREMRANGEBYSCORE', @key, 0, trim_time)\nlocal request_count = redis.call('ZCARD',@key)\n\nif request_count < tonumber(@max_requests) then\n    redis.call('ZADD', @key, current_time[1], current_time[1] .. current_time[2])\n    redis.call('EXPIRE', @key, @window)\n    return 0\nend\nreturn 1\n")),(0,r.kt)("p",null,"In order to use that in our app, we will create a new static class called ",(0,r.kt)("inlineCode",{parentName:"p"},"Scripts")," which will hold the text of the script, and prepare the script to run with ",(0,r.kt)("inlineCode",{parentName:"p"},"StackExchange.Redis"),". Create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Scripts.cs")," and add the following to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using StackExchange.Redis;\n\nnamespace SlidingWindowRateLimiter\n{\n    public static class Scripts\n    {\n        public static LuaScript SlidingRateLimiterScript => LuaScript.Prepare(SlidingRateLimiter);\n        private const string SlidingRateLimiter = @\"\n            local current_time = redis.call('TIME')\n            local trim_time = tonumber(current_time[1]) - @window\n            redis.call('ZREMRANGEBYSCORE', @key, 0, trim_time)\n            local request_count = redis.call('ZCARD',@key)\n\n            if request_count < tonumber(@max_requests) then\n                redis.call('ZADD', @key, current_time[1], current_time[1] .. current_time[2])\n                redis.call('EXPIRE', @key, @window)\n                return 0\n            end\n            return 1\n            \";\n    }\n}\n")),(0,r.kt)("h2",{id:"update-the-controller-for-rate-limiting"},"Update the Controller for rate limiting"),(0,r.kt)("p",null,"Back in our ",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimitedController")," Sliding method, we will add a few lines of code to check if we should throttle the API request, replace the return statement with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var limited = ((int) await _db.ScriptEvaluateAsync(Scripts.SlidingRateLimiterScript,\n    new {key = new RedisKey($"{Request.Path}:{apiKey}"), window = 30, max_requests = 10})) == 1;\nreturn limited ? new StatusCodeResult(429) : Ok();\n')),(0,r.kt)("p",null,"The whole method should look like this now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[HttpPost]\n[HttpGet]\n[Route("sliding")]\npublic async Task<IActionResult> Sliding([FromHeader] string authorization)\n{\n    var encoded = string.Empty;\n    if(!string.IsNullOrEmpty(authorization)) encoded = AuthenticationHeaderValue.Parse(authorization).Parameter;\n    if (string.IsNullOrEmpty(encoded)) return new UnauthorizedResult();\n    var apiKey = Encoding.UTF8.GetString(Convert.FromBase64String(encoded)).Split(\':\')[0];\n    var limited = ((int) await _db.ScriptEvaluateAsync(Scripts.SlidingRateLimiterScript,\n        new {key = new RedisKey($"{Request.Path}:{apiKey}"), window = 30, max_requests = 10})) == 1;\n    return limited ? new StatusCodeResult(429) : Ok();\n}\n')),(0,r.kt)("p",null,"Now, if we start our server back up with ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet run")," and try running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'for n in {1..20}; do echo $(curl -s -w " HTTP %{http_code}, %{time_total} s" -X POST -H "Content-Length: 0" --user "foobar:password" http://localhost:5000/api/ratelimited/sliding); sleep 0.5; done\n')),(0,r.kt)("p",null,"You will see some of your requests return a ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),", and 10 will return a ",(0,r.kt)("inlineCode",{parentName:"p"},"429"),". If you wait for some and run the above command again you may see some behavior where every other request goes through. That's because the window slides every second and only the previous 30 seconds requests are considered when determining whether to throttle the request. The above command the first time will produce an output something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'HTTP 200, 0.081806 s\nHTTP 200, 0.003170 s\nHTTP 200, 0.002217 s\nHTTP 200, 0.001632 s\nHTTP 200, 0.001508 s\nHTTP 200, 0.001928 s\nHTTP 200, 0.001647 s\nHTTP 200, 0.001656 s\nHTTP 200, 0.001699 s\nHTTP 200, 0.001667 s\n{"status":429,"traceId":"00-4af32d651483394292e35258d94ec4be-6c174cc42ca1164c-00"} HTTP 429, 0.012612 s\n{"status":429,"traceId":"00-7b24da2422f5b144a1345769e210b78a-75cc1deb1f260f46-00"} HTTP 429, 0.001688 s\n{"status":429,"traceId":"00-0462c9d489ce4740860ae4798e6c4869-2382f37f7e112741-00"} HTTP 429, 0.001578 s\n{"status":429,"traceId":"00-127f5493caf8e044a9f29757fbf91f0a-62187f6cf2833640-00"} HTTP 429, 0.001722 s\n{"status":429,"traceId":"00-89a4c2f7e2021a4d90264f9d040d250c-34443a5fdb2cff4f-00"} HTTP 429, 0.001718 s\n{"status":429,"traceId":"00-f1505b800f30da4b993bebb89f902401-dfbadcb1bc3b8e45-00"} HTTP 429, 0.001663 s\n{"status":429,"traceId":"00-621cf2b2f32c184fb08d0d483788897d-1c01af67cf88d440-00"} HTTP 429, 0.001601 s\n{"status":429,"traceId":"00-e310ba5214d7874dbd653a8565f38df4-216f1a4b8c4b574a-00"} HTTP 429, 0.001456 s\n{"status":429,"traceId":"00-52a7074239a5e84c9ded96166c0ef042-4dfedf1d60e3fd46-00"} HTTP 429, 0.001550 s\n{"status":429,"traceId":"00-5e03e785895f2f459c85ade852664703-c9ad961397284643-00"} HTTP 429, 0.001535 s\n{"status":429,"traceId":"00-ba2ac0f8fd902947a4789786b0f683a8-be89b14fa88d954c-00"} HTTP 429, 0.001451 s\n')),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can find the code used for this tutorial in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/sliding-window-rate-limiter-aspnet"},"GitHub"))))}c.isMDXComponent=!0}}]);