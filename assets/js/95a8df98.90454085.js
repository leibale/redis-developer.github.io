"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9589],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),c=r,g=h["".concat(p,".").concat(c)]||h[c]||d[c]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"index-using-dotnet",title:"How to query Graph data in Redis using .NET",sidebar_label:"RedisGraph and .NET",slug:"/howtos/redisgraph/using-dotnet",authors:["steve"]},p=void 0,l={unversionedId:"howtos/redisgraph/using-dotnet/index-using-dotnet",id:"howtos/redisgraph/using-dotnet/index-using-dotnet",title:"How to query Graph data in Redis using .NET",description:"RedisGraph enables you to store and query graph data in Redis using the Cypher Query Language. In this article, we will discuss the usage of RedisGraph with .NET.",source:"@site/docs/howtos/redisgraph/using-dotnet/index-usingdotnet.md",sourceDirName:"howtos/redisgraph/using-dotnet",slug:"/howtos/redisgraph/using-dotnet",permalink:"/howtos/redisgraph/using-dotnet",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-dotnet/index-usingdotnet.md",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-using-dotnet",title:"How to query Graph data in Redis using .NET",sidebar_label:"RedisGraph and .NET",slug:"/howtos/redisgraph/using-dotnet",authors:["steve"]},sidebar:"docs",previous:{title:"RedisGraph using RedisInsight",permalink:"/howtos/redisgraph/using-redisinsight"},next:{title:"RedisGraph and Python",permalink:"/howtos/redisgraph/using-python"}},u={},d=[{value:"NRedisGraph",id:"nredisgraph",level:2},{value:"Running RedisGraph",id:"running-redisgraph",level:2},{value:"Connecting",id:"connecting",level:2},{value:"Sending a Query",id:"sending-a-query",level:2},{value:"Creating a Node",id:"creating-a-node",level:3},{value:"Creating Relationships",id:"creating-relationships",level:3},{value:"Querying Relationships",id:"querying-relationships",level:3},{value:"Resources",id:"resources",level:2}],h={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"RedisGraph enables you to store and query graph data in Redis using the ",(0,i.kt)("a",{parentName:"p",href:"https://opencypher.org/"},"Cypher Query Language"),". In this article, we will discuss the usage of RedisGraph with .NET."),(0,i.kt)("h2",{id:"nredisgraph"},"NRedisGraph"),(0,i.kt)("p",null,"We'll use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/NRedisGraph/"},"NRedisGraph")," package in this tutorial. To install the package in your project, use ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet add package NRedisGraph"),"."),(0,i.kt)("h2",{id:"running-redisgraph"},"Running RedisGraph"),(0,i.kt)("p",null,"The easiest way to get up and running with RedisGraph locally is to use the RedisGraph docker image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 6379:6379 redis/redis-stack-server:latest\n")),(0,i.kt)("p",null,"The above command will start an instance of Redis locally with the RedisGraph module loaded, and you will be able to connect to it on ",(0,i.kt)("strong",{parentName:"p"},"localhost:6379")),(0,i.kt)("h2",{id:"connecting"},"Connecting"),(0,i.kt)("p",null,"NRedisGraph makes use of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/StackExchange/StackExchange.Redis"},"StackExchange.Redis")," project which is installed along with ",(0,i.kt)("inlineCode",{parentName:"p"},"NRedisGraph"),". To create the ",(0,i.kt)("inlineCode",{parentName:"p"},"RedisGraph")," object you'll first create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionMultiplexer"),", and pull a reference to an ",(0,i.kt)("inlineCode",{parentName:"p"},"IDatabase")," object from it, and then initialize the ",(0,i.kt)("inlineCode",{parentName:"p"},"RedisGraph")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"IDatabase")," object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var muxer = ConnectionMultiplexer.Connect("localhost");\nvar db = muxer.GetDatabase();\nvar graph = new RedisGraph(db);\n')),(0,i.kt)("h2",{id:"sending-a-query"},"Sending a Query"),(0,i.kt)("p",null,"Querying in RedisGraph applies to a wide array of operations, but fundamentally when executing queries with NRedisGraph, all you need to do is execute ",(0,i.kt)("inlineCode",{parentName:"p"},"graph.Query")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"graph.QueryAsync")," passing in the name of the graph you want to query and the query you want to run. For example, we'll be using the graph ",(0,i.kt)("inlineCode",{parentName:"p"},"pets")," for the remainder of this tutorial, ",(0,i.kt)("inlineCode",{parentName:"p"},"pets")," is the name of the key the graph will be stored at. Hence any call to ",(0,i.kt)("inlineCode",{parentName:"p"},"graph.Query")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"graph.QueryAsync")," will first pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"pets")," to indicate the graph to work with."),(0,i.kt)("h3",{id:"creating-a-node"},"Creating a Node"),(0,i.kt)("p",null,"To create a node in RedisGraph, you'll use the Create Operation. Let's start by making 2 Humans, Alice and Bob:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var createBobResult = await graph.QueryAsync("pets", "CREATE(:human{name:\'Bob\',age:32})");\nawait graph.QueryAsync("pets", "CREATE(:human{name:\'Alice\',age:30})");\n')),(0,i.kt)("p",null,"Running a Query against RedisGraph will result in a ",(0,i.kt)("inlineCode",{parentName:"p"},"ResultSet"),". This result will contain some metadata about the result of the query in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Statistics")," section and any results generated by the query. In the above case, the only thing returned is the statistics for the query, which you can print out directly from the results object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'Console.WriteLine($"Nodes Created:{createBobResult.Statistics.NodesCreated}");\nConsole.WriteLine($"Properties Set:{createBobResult.Statistics.PropertiesSet}");\nConsole.WriteLine($"Labels Created:{createBobResult.Statistics.LabelsAdded}");\nConsole.WriteLine($"Operation took:{createBobResult.Statistics.QueryInternalExecutionTime}");\n')),(0,i.kt)("p",null,"You can create nodes with other labels by simply executing another CREATE statement. For example, if we wanted to create a 'pet' named 'Honey' who is a 5-year-old greyhound, we would run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await graph.QueryAsync(\"pets\", \"CREATE(:pet{name:'Honey',age:5,species:'canine',breed:'Greyhound'})\");\n")),(0,i.kt)("h3",{id:"creating-relationships"},"Creating Relationships"),(0,i.kt)("p",null,"Like creating nodes, you can also create relationships in RedisGraph using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"QueryAsync")," commands to create relationships between nodes in RedisGraph. For example, to establish the owner relationship between Bob and the Greyhound Honey, you would use the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await graph.QueryAsync(\"pets\",\n    \"MATCH(a:human),(p:pet) WHERE(a.name='Bob' and p.name='Honey') CREATE (a)-[:OWNS]->(p)\");\n")),(0,i.kt)("p",null,"You could establish other relationships as well between nodes, say, for example, both Bob and Alice both walk Honey you could add the connections:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await graph.QueryAsync(\"pets\",\n    \"MATCH(a:human),(p:pet) WHERE(a.name='Alice' and p.name='Honey') CREATE (a)-[:WALKS]->(p)\");\nawait graph.QueryAsync(\"pets\",\n    \"MATCH(a:human),(p:pet) WHERE(a.name='Bob' and p.name='Honey') CREATE (a)-[:WALKS]->(p)\");\n")),(0,i.kt)("h3",{id:"querying-relationships"},"Querying Relationships"),(0,i.kt)("p",null,"Now that we've created a few Nodes and Relationships between nodes, we can query things in the Graph, again using ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"QueryAsync"),". So, for example, if we wanted to find all of Honey's owners, we would issue the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var matches = await graph.QueryAsync("pets", "MATCH(a:human),(p:pet) where (a)-[:OWNS]->(p) and p.name=\'Honey\' return a");\n')),(0,i.kt)("p",null,"We can then iterate over the resultant matches, which is the same ",(0,i.kt)("inlineCode",{parentName:"p"},"ResultSet")," class we were using before, but it will have actual results we can access this time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'foreach (var match in matches)\n{\n    Console.WriteLine(((Node) match.Values.First()).PropertyMap["name"].Value);\n}\n')),(0,i.kt)("p",null,"We can also find all the walkers of Honey by finding all the human's who have a ",(0,i.kt)("inlineCode",{parentName:"p"},"WALKS")," relationship with Honey:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'matches = await graph.QueryAsync("pets", "MATCH(a:human),(p:pet) where (a)-[:WALKS]->(p) and p.name=\'Honey\' return a");\n')),(0,i.kt)("p",null,"Then if we wanted to find all of Bob's dogs, we would query the graph and find all the canines who have an OWNS relationship with a human named Bob:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"matches = await graph.QueryAsync(\"pets\", \"MATCH(a:human),(p:pet) where (a)-[:OWNS]->(p) and p.species='canine' and a.name='Bob' return p\");\n")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Code for this demo is available in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/redis-graph-dotnet-basic-app"},"GitHub")),(0,i.kt)("li",{parentName:"ul"},"To learn more about RedisGraph, check out the ",(0,i.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisgraph/"},"docs site")),(0,i.kt)("li",{parentName:"ul"},"To learn more about The Cypher Query Language, check out ",(0,i.kt)("a",{parentName:"li",href:"http://opencypher.org/"},"opencypher.org"))))}c.isMDXComponent=!0}}]);