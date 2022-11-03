"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9012],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),h=l(n),c=a,g=h["".concat(o,".").concat(c)]||h[c]||u[c]||s;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={id:"index-usingpython",title:"How to query Graph data in Redis using Python",sidebar_label:"RedisGraph and Python",slug:"/howtos/redisgraph/using-python",authors:["ajeet"]},i=void 0,p={unversionedId:"howtos/redisgraph/using-python/index-usingpython",id:"howtos/redisgraph/using-python/index-usingpython",title:"How to query Graph data in Redis using Python",description:"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code.",source:"@site/docs/howtos/redisgraph/using-python/index-usingpython.mdx",sourceDirName:"howtos/redisgraph/using-python",slug:"/howtos/redisgraph/using-python",permalink:"/howtos/redisgraph/using-python",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/using-python/index-usingpython.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-usingpython",title:"How to query Graph data in Redis using Python",sidebar_label:"RedisGraph and Python",slug:"/howtos/redisgraph/using-python",authors:["ajeet"]},sidebar:"docs",previous:{title:"RedisGraph and .NET",permalink:"/howtos/redisgraph/using-dotnet"},next:{title:"RedisGraph and Ruby",permalink:"/howtos/redisgraph/using-ruby"}},o={},l=[{value:"RedisGraph Python Client",id:"redisgraph-python-client",level:2},{value:"Step 1. Run RedisMod Docker container",id:"step-1-run-redismod-docker-container",level:3},{value:"Step 2. Verify if RedisGraph module is loaded",id:"step-2-verify-if-redisgraph-module-is-loaded",level:3},{value:"Step 3. Loading the Python Module",id:"step-3-loading-the-python-module",level:3},{value:"Step 4. Write a python code",id:"step-4-write-a-python-code",level:3},{value:"Step 5. Execute the Python Script",id:"step-5-execute-the-python-script",level:3},{value:"Step 6. Monitor the Graph query",id:"step-6-monitor-the-graph-query",level:3},{value:"Step 7. Install RedisInsight",id:"step-7-install-redisinsight",level:3},{value:"Step 8. Accessing RedisInsight",id:"step-8-accessing-redisinsight",level:3},{value:"Step 9. Run the Graph Query",id:"step-9-run-the-graph-query",level:3},{value:"Step 10. Run the Graph Query with no LIMIT",id:"step-10-run-the-graph-query-with-no-limit",level:3},{value:"References",id:"references",level:3}],d={toc:l};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"RedisGraph is the fastest graph database that processes complex graph operations in real time, 10x \u2013 600x faster than any other graph database. Show how your data is connected through multiple visualization integrations including RedisInsight, Linkurious, and Graphileon. Query graphs using the industry-standard Cypher query language and easily use graph capabilities from application code."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:n(90619).Z,width:"1730",height:"1176"})),(0,a.kt)("h2",{id:"redisgraph-python-client"},"RedisGraph Python Client"),(0,a.kt)("p",null,"The 'redisgraph-py' is a package that allows querying Graph data in a Redis database that is extended with the RedisGraph module. The package extends redisgraph-py's interface with RedisGraph's API"),(0,a.kt)("p",null,"Follow the steps below to get started with RedisGraph with Python:"),(0,a.kt)("h3",{id:"step-1-run-redismod-docker-container"},"Step 1. Run RedisMod Docker container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -p 6379:6379 --name redislabs/redismodCopy\n")),(0,a.kt)("h3",{id:"step-2-verify-if-redisgraph-module-is-loaded"},"Step 2. Verify if RedisGraph module is loaded"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," info modules\n # Modules\n module:name=graph,ver=20405,api=1,filters=0,usedby=[],using=[],options=[]\n")),(0,a.kt)("h3",{id:"step-3-loading-the-python-module"},"Step 3. Loading the Python Module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pip install redisgraph\n")),(0,a.kt)("h3",{id:"step-4-write-a-python-code"},"Step 4. Write a python code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"}," import redis\n from redisgraph import Node, Edge, Graph, Path\n\n r = redis.Redis(host='localhost', port=6379)\n\n redis_graph = Graph('social', r)\n\n john = Node(label='person', properties={'name': 'John Doe', 'age': 33, 'gender': 'male', 'status': 'single'})\n redis_graph.add_node(john)\n\n japan = Node(label='country', properties={'name': 'Japan'})\n redis_graph.add_node(japan)\n\n edge = Edge(john, 'visited', japan, properties={'purpose': 'pleasure'})\n redis_graph.add_edge(edge)\n\n redis_graph.commit()\n\n query = \"\"\"MATCH (p:person)-[v:visited {purpose:\"pleasure\"}]->(c:country)\n           RETURN p.name, p.age, v.purpose, c.name\"\"\"\n\n result = redis_graph.query(query)\n\n # Print resultset\n result.pretty_print()\n\n # Use parameters\n params = {'purpose':\"pleasure\"}\n query = \"\"\"MATCH (p:person)-[v:visited {purpose:$purpose}]->(c:country)\n           RETURN p.name, p.age, v.purpose, c.name\"\"\"\n\n result = redis_graph.query(query, params)\n\n # Print resultset\n result.pretty_print()\n\n # Use query timeout to raise an exception if the query takes over 10 milliseconds\n result = redis_graph.query(query, params, timeout=10)\n\n # Iterate through resultset\n for record in result.result_set:\n    person_name = record[0]\n    person_age = record[1]\n    visit_purpose = record[2]\n    country_name = record[3]\n\n query = \"\"\"MATCH p = (:person)-[:visited {purpose:\"pleasure\"}]->(:country) RETURN p\"\"\"\n\n result = redis_graph.query(query)\n\n # Iterate through resultset\n for record in result.result_set:\n   path = record[0]\n   print(path)\n\n\n # All done, remove graph.\n redis_graph.delete()\n")),(0,a.kt)("h3",{id:"step-5-execute-the-python-script"},"Step 5. Execute the Python Script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"  python3 test.py\n +-----------+----------+--------------+-----------+\n | b'p.name' | b'p.age' | b'v.purpose' | b'c.name' |\n +-----------+----------+--------------+-----------+\n |  John Doe |    33    |   pleasure   |   Japan   |\n +-----------+----------+--------------+-----------+\n\n Cached execution 0.0\n internal execution time 3.3023\n +-----------+----------+--------------+-----------+\n | b'p.name' | b'p.age' | b'v.purpose' | b'c.name' |\n +-----------+----------+--------------+-----------+\n |    John Doe |    33    |   pleasure   |   Japan   |\n +-----------+----------+--------------+-----------+\n\n Cached execution 0.0\n internal execution time 0.2475\n <(0)-[0]->(1)>\n")),(0,a.kt)("h3",{id:"step-6-monitor-the-graph-query"},"Step 6. Monitor the Graph query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' 127.0.0.1:6379> monitor\n OK\n 1632661901.024018 [0 172.17.0.1:61908] "GRAPH.QUERY" "social" "CREATE (youkjweasb:person{age:33,gender:\\"male\\",name:\\"John Doe\\",status:\\"single\\"}),(jilbktlmgw:country{name:\\"Japan\\"}),(youkjweasb:person{age:33,gender:\\"male\\",name:\\"John Doe\\",status:\\"single\\"})-[:visited{purpose:\\"pleasure\\"}]->(jilbktlmgw:country{name:\\"Japan\\"})" "--compact"\n 1632661901.025810 [0 172.17.0.1:61908] "GRAPH.QUERY" "social" "MATCH (p:person)-[v:visited {purpose:\\"pleasure\\"}]->(c:country)\\n\\t\\t   RETURN p.name, p.age, v.purpose, c.name" "--compact"\n 1632661901.027485 [0 172.17.0.1:61908] "GRAPH.QUERY" "social" "CYPHER purpose=\\"pleasure\\" MATCH (p:person)-[v:visited {purpose:$purpose}]->(c:country)\\n\\t\\t   RETURN p.name, p.age, v.purpose, c.name" "--compact"\n 1632661901.029539 [0 172.17.0.1:61908] "GRAPH.QUERY" "social" "CYPHER purpose=\\"pleasure\\" MATCH (p:person)-[v:visited {purpose:$purpose}]->(c:country)\\n\\t\\t   RETURN p.name, p.age, v.purpose, c.name" "--compact" "timeout" "10"\n 1632661901.030965 [0 172.17.0.1:61908] "GRAPH.QUERY" "social" "MATCH p = (:person)-[:visited {purpose:\\"pleasure\\"}]->(:country) RETURN p" "--compact"\n 1632661901.032250 [0 172.17.0.1:61908] "GRAPH.RO_QUERY" "social" "CALL db.labels()" "--compact"\n 1632661901.033323 [0 172.17.0.1:61908] "GRAPH.RO_QUERY" "social" "CALL db.propertyKeys()" "--compact"\n 1632661901.034589 [0 172.17.0.1:61908] "GRAPH.RO_QUERY" "social" "CALL db.relationshipTypes()" "--compact"\n 1632661901.035625 [0 172.17.0.1:61908] "GRAPH.DELETE" "social"\n')),(0,a.kt)("p",null,"Let us comment out the last line. Try to query Graph data over over RedisInsight."),(0,a.kt)("h3",{id:"step-7-install-redisinsight"},"Step 7. Install RedisInsight"),(0,a.kt)("p",null,"Run the RedisInsight container. The easiest way is to run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),(0,a.kt)("h3",{id:"step-8-accessing-redisinsight"},"Step 8. Accessing RedisInsight"),(0,a.kt)("p",null,"Next, point your browser to http://localhost:8001."),(0,a.kt)("h3",{id:"step-9-run-the-graph-query"},"Step 9. Run the Graph Query"),(0,a.kt)("p",null,"You can use the limit clause to limit the number of records returned by a query:"),(0,a.kt)("p",null,"MATCH (n) RETURN n LIMIT 1"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:n(77780).Z,width:"1252",height:"656"})),(0,a.kt)("h3",{id:"step-10-run-the-graph-query-with-no-limit"},"Step 10. Run the Graph Query with no LIMIT"),(0,a.kt)("p",null,"MATCH (n) RETURN n"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:n(47439).Z,width:"1248",height:"650"})),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/redisgraphmovies/"},"Building Movies database app using RedisGraph and NodeJS")),(0,a.kt)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",(0,a.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisgraph/"},"Quickstart")," tutorial."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/explore/redisinsight/redisgraph"},"Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool"))),(0,a.kt)("h2",{id:""}),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}u.isMDXComponent=!0},90619:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/redisgraph_python-b0de555be6299cf2ab450150845ae405.png"},77780:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/redisgraph_redisinsight_1-a150b80ff2498134be318e1036aa5604.png"},47439:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/redisgraph_redisinsight_2-d7f9e5aa68f559b9c2e20ccb29dc2d48.png"}}]);