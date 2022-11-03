"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1672],{85162:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(67294),s=a(86010);const n="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,s.Z)(n,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(87462),s=a(67294),n=a(86010),l=a(72389),r=a(67392),o=a(7094),d=a(12466);const p="tabList__CuJ",h="tabItem_LNqP";function u(e){var t;const{lazy:a,block:l,defaultValue:u,values:c,groupId:g,className:m}=e,k=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??k.map((e=>{let{props:{value:t,label:a,attributes:i}}=e;return{value:t,label:a,attributes:i}})),w=(0,r.l)(b,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,o.U)(),[R,N]=(0,s.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=g){const e=f[g];null!=e&&e!==R&&b.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,a=x.indexOf(t),i=b[a].value;i!==R&&(T(t),N(i),null!=g&&y(g,String(i)))},Z=e=>{var t;let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:(0,n.Z)("tabs-container",p)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},m)},b.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,i.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:e=>x.push(e),onKeyDown:Z,onClick:S},l,{className:(0,n.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":R===t})}),a??t)}))),a?(0,s.cloneElement)(k.filter((e=>e.props.value===R))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==R})))))}function c(e){const t=(0,l.Z)();return s.createElement(u,(0,i.Z)({key:String(t)},e))}},71131:(e,t,a)=>{a.d(t,{Z:()=>g});var i=a(67294),s=a(3905),n=a(52195);const l="riContainer_bco2",r="riDescriptionShort_E27B",o="riDetail_wzFs",d="riIcon_yDou",p="riTitle_x6vI",h="riDescription_RDnu",u="riMore_apRP";var c=a(86010);const g=e=>{const[t,a]=i.useState(!1);return i.createElement("a",{href:e.page,className:l},i.createElement("div",{className:r},i.createElement("div",{className:d},i.createElement("span",{className:"fe fe-zap"})),i.createElement("div",{className:o},i.createElement("div",{className:p},i.createElement("a",{href:e.page},e.title)),i.createElement("div",{className:h},e.description,i.Children.count(e.children)>0&&i.createElement("span",{className:(0,c.Z)(u,"fe","fe-more-horizontal"),onClick:()=>a(!t)})))),t&&i.createElement("div",{className:"ri-description-long"},i.createElement(s.Zo,{components:n.Z},e.children)))}},18959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var i=a(87462),s=(a(67294),a(3905));a(65488),a(85162),a(44996),a(71131);const n={id:"index-redisgraph",title:"Query, Visualize and Manipulate Graphs using RedisGraph Browser Visualization Tool",sidebar_label:"Query, Visualize and Manipulate Graphs using RedisGraph Browser Visualization Tool",slug:"/explore/redisinsight/redisgraph",authors:["ajeet"]},l=void 0,r={unversionedId:"explore/redisinsight/redisgraph/index-redisgraph",id:"explore/redisinsight/redisgraph/index-redisgraph",title:"Query, Visualize and Manipulate Graphs using RedisGraph Browser Visualization Tool",description:"If you\u2019re a Redis user who prefers to use a Graphical User Interface(GUI) for graph queries, then RedisInsight is a right tool for you. It\u2019s 100% free pure desktop Redis GUI that provides easy-to-use browser tools to query, visualize and interactively manipulate graphs. You can add new graphs, run queries and explore the results over the GUI tool.",source:"@site/docs/explore/redisinsight/redisgraph/index-redisgraph.mdx",sourceDirName:"explore/redisinsight/redisgraph",slug:"/explore/redisinsight/redisgraph",permalink:"/explore/redisinsight/redisgraph",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/redisgraph/index-redisgraph.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-redisgraph",title:"Query, Visualize and Manipulate Graphs using RedisGraph Browser Visualization Tool",sidebar_label:"Query, Visualize and Manipulate Graphs using RedisGraph Browser Visualization Tool",slug:"/explore/redisinsight/redisgraph",authors:["ajeet"]},sidebar:"docs",previous:{title:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",permalink:"/explore/redisinsight/profiler"},next:{title:"Write Your Serverless Redis function using RedisGears Browser Tool",permalink:"/explore/redisinsight/redisgears"}},o={},d=[{value:"Step 1. Create Redis database",id:"step-1-create-redis-database",level:2},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",level:2},{value:"Step 3: Click \u201cRedisGraph\u201d and then \u201cAdd Graph\u201d",id:"step-3-click-redisgraph-and-then-add-graph",level:2},{value:"Step 4. Create a new Graph called \u201cFriends\u201d",id:"step-4-create-a-new-graph-called-friends",level:2},{value:"Step 5. Add new nodes(individuals) and links",id:"step-5-add-new-nodesindividuals-and-links",level:2},{value:"Step 6: View all the individuals (nodes)",id:"step-6-view-all-the-individuals-nodes",level:2},{value:"Step 7. Viewing just one individual(node)",id:"step-7-viewing-just-one-individualnode",level:2},{value:"Step 8: Visualize the relationship between the individuals",id:"step-8-visualize-the-relationship-between-the-individuals",level:2},{value:"Step 9. Create and visualize the multiple relationships",id:"step-9-create-and-visualize-the-multiple-relationships",level:2},{value:"Step 10. Create and visualize the relationship between two individuals (Susan and Bill)",id:"step-10-create-and-visualize-the-relationship-between-two-individuals-susan-and-bill",level:2},{value:"Step 11. Create and visualize the relationship between two indiviual (Bill and Jane)",id:"step-11-create-and-visualize-the-relationship-between-two-indiviual-bill-and-jane",level:2},{value:"Step 12. Building a social networking",id:"step-12-building-a-social-networking",level:2},{value:"Step 13. Cleaning up the Graph",id:"step-13-cleaning-up-the-graph",level:2},{value:"Importing the Bulk Graph data",id:"importing-the-bulk-graph-data",level:2},{value:"Step 14. Cloning the repository**",id:"step-14-cloning-the-repository",level:2},{value:"Step 15. Execute the script",id:"step-15-execute-the-script",level:2},{value:"Step 16. Run the cypher query",id:"step-16-run-the-cypher-query",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],p={toc:d};function h(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you\u2019re a Redis user who prefers to use a Graphical User Interface(GUI) for graph queries, then RedisInsight is a right tool for you. It\u2019s 100% free pure desktop Redis GUI that provides easy-to-use browser tools to query, visualize and interactively manipulate graphs. You can add new graphs, run queries and explore the results over the GUI tool."),(0,s.kt)("p",null,"RedisInsight supports ",(0,s.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisgraph/"},"RedisGraph")," and allows you to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Build and execute queries"),(0,s.kt)("li",{parentName:"ul"},"Navigate your graphs"),(0,s.kt)("li",{parentName:"ul"},"Browse, analyze, and export results"),(0,s.kt)("li",{parentName:"ul"},"Keyboard shortcuts to zoom"),(0,s.kt)("li",{parentName:"ul"},"Button to reset view; center entire graph"),(0,s.kt)("li",{parentName:"ul"},"Zoom capability via mouse wheel(Double right-click to zoom out, Double right-click to zoom out.)"),(0,s.kt)("li",{parentName:"ul"},"Ability to copy commands with a button click"),(0,s.kt)("li",{parentName:"ul"},"Ability to persist nodes display choices between queries")),(0,s.kt)("p",null,"As a benefit, you get faster turnarounds when building your application using Redis and RedisGraph."),(0,s.kt)("p",null,"Follow the below steps to see how your data is connected via the RedisInsight Browser tool."),(0,s.kt)("h2",{id:"step-1-create-redis-database"},"Step 1. Create Redis database"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developer.redis.com/howtos/redisgraph"},"Follow this link to create a Redis database")," using Redis Enterprise Cloud with RedisGraph module enabled"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(46683).Z,width:"1342",height:"1036"})),(0,s.kt)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),(0,s.kt)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"Click this link ")," to access a form that allows you to select the operating system of your choice."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:a(3789).Z,width:"1464",height:"1256"})),(0,s.kt)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),(0,s.kt)("p",null,'Select "Connect to a Redis database"\n',(0,s.kt)("img",{alt:"My Image",src:a(29708).Z,width:"1790",height:"838"})),(0,s.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password. Then click \u201cADD REDIS DATABASE\u201d."),(0,s.kt)("h2",{id:"step-3-click-redisgraph-and-then-add-graph"},"Step 3: Click \u201cRedisGraph\u201d and then \u201cAdd Graph\u201d"),(0,s.kt)("p",null,"Select RedisGraph from the menu."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(11401).Z,width:"1278",height:"398"})),(0,s.kt)("h2",{id:"step-4-create-a-new-graph-called-friends"},"Step 4. Create a new Graph called \u201cFriends\u201d"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(51889).Z,width:"1290",height:"498"})),(0,s.kt)("h2",{id:"step-5-add-new-nodesindividuals-and-links"},"Step 5. Add new nodes(individuals) and links"),(0,s.kt)("p",null,"Let us add individuals to the graph. CREATE is used to introduce new nodes and relationships.Run the below cypher query on RedisInsight GUI to add a label called person and property called \u201cname\u201d."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'CREATE (:Person{name:"Tom" }),  (:Person{name:"Alex" }), (:Person{name:"Susan" }), (:Person{name:"Bill" }), (:Person{name:"Jane" })\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(73169).Z,width:"1358",height:"534"})),(0,s.kt)("p",null,"As we see that \u201c1\u201d label is added and that refers to a person label. It\u2019s the same for every node and hence created once. Overall there are 5 nodes created. The five \u201cname\u201d properties refer to 5 name properties that have been added."),(0,s.kt)("h2",{id:"step-6-view-all-the-individuals-nodes"},"Step 6: View all the individuals (nodes)"),(0,s.kt)("p",null,"Match describes the relationship between queried entities, using ascii art to represent pattern(s) to match against. Nodes are represented by parentheses () , and Relationships are represented by brackets [] ."),(0,s.kt)("p",null,"As shown below, we have added lowercase \u201cp\u201d in front of our label and is a variable we can make a reference to. It returns all the nodes with a label called \u201cPerson\u201d."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"MATCH (p:Person) RETURN p\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(30844).Z,width:"1348",height:"518"})),(0,s.kt)("p",null,'You can select "Graph View" on the right menu to display the graphical representation as shown below:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(42034).Z,width:"1606",height:"1202"})),(0,s.kt)("h2",{id:"step-7-viewing-just-one-individualnode"},"Step 7. Viewing just one individual(node)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'MATCH (p:Person {name:"Tom"}) RETURN p\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(66039).Z,width:"1600",height:"1172"})),(0,s.kt)("h2",{id:"step-8-visualize-the-relationship-between-the-individuals"},"Step 8: Visualize the relationship between the individuals"),(0,s.kt)("p",null,"Run the below query to build a relationship between two nodes and how the relationship flows from one node(\u201cTom\u201d) to the another node(\u201cAlex\u201d)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'MATCH (p1:Person {name: "Tom" }), (p2:Person {name: "Alex" }) CREATE (p1)-[:Knows]->(p2)\n')),(0,s.kt)("p",null,"The symbol \u201c>\u201d (greater than) shows which way the relationship flows."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(41497).Z,width:"1596",height:"726"})),(0,s.kt)("p",null,"You can view the relationship in the form of graph as shown below:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(74023).Z,width:"1594",height:"866"})),(0,s.kt)("h2",{id:"step-9-create-and-visualize-the-multiple-relationships"},"Step 9. Create and visualize the multiple relationships"),(0,s.kt)("p",null,"Run the below query to create and visualize relationsship between the multiple individuals"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'MATCH (p1:Person {name: "Tom" }), (p2:Person {name: "Susan" }), (p3:Person {name: "Bill" }) CREATE (p1)-[:Knows]->(p2), (p1)-[:Knows]->(p3)\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(59647).Z,width:"1590",height:"1042"})),(0,s.kt)("h2",{id:"step-10-create-and-visualize-the-relationship-between-two-individuals-susan-and-bill"},"Step 10. Create and visualize the relationship between two individuals (Susan and Bill)"),(0,s.kt)("p",null,"Let us look at how to generate graph showcasing the relationship between two individuals - Susan and Bill"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'MATCH (p1:Person {name: "Susan"}), (p2:Person {name: "Bill"}) CREATE (p1)-[:Knows]->(p2)\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(32759).Z,width:"1598",height:"970"})),(0,s.kt)("h2",{id:"step-11-create-and-visualize-the-relationship-between-two-indiviual-bill-and-jane"},"Step 11. Create and visualize the relationship between two indiviual (Bill and Jane)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'MATCH (p1:Person {name: "Bill"}), (p2:Person {name: "Jane"}) CREATE (p1)-[:Knows]->(p2)\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(51118).Z,width:"1622",height:"804"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(45673).Z,width:"1594",height:"830"})),(0,s.kt)("h2",{id:"step-12-building-a-social-networking"},"Step 12. Building a social networking"),(0,s.kt)("p",null,"This can be achieved by \u201cfriend of friends\u201d kind of relationship. Say, If Tom wanted to social network with Jane. He has two contacts that know Jane - one is Susan and the other person is Bill."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(71960).Z,width:"1588",height:"854"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'MATCH p = (p1:Person {name: "Tom" })-[:Knows*1..3]-(p2:Person {name: "Jane"}) RETURN p\n')),(0,s.kt)("p",null,"In this query, we assign a variable \u201cp\u201d to a node graph path. We search for \u201cTom\u201d as p1 and \u201cJane\u201d as \u201cp2\u201d. We say interested in knows link with 1..3 degree of separation."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(42488).Z,width:"1516",height:"1350"})),(0,s.kt)("h2",{id:"step-13-cleaning-up-the-graph"},"Step 13. Cleaning up the Graph"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(15290).Z,width:"1600",height:"514"})),(0,s.kt)("h2",{id:"importing-the-bulk-graph-data"},"Importing the Bulk Graph data"),(0,s.kt)("p",null,"Let us try to insert bulk data using Python and then extrapolate it in the form of nodes and relationships."),(0,s.kt)("h2",{id:"step-14-cloning-the-repository"},"Step 14. Cloning the repository","*","*"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ git clone https://github.com/redis-developer/redis-datasets\ncd redis-datasets/redisgraph/datasets/iceandfire\n")),(0,s.kt)("h2",{id:"step-15-execute-the-script"},"Step 15. Execute the script"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ python3 bulk_insert.py GOT_DEMO -n data/character.csv -n data/house.csv -n data/book.csv -n data/writer.csv -r data/wrote.csv -r data/belongs.csv -h 192.168.1.9 -p 6379\n\n\n\n2124 nodes created with label 'b'character''\n438 nodes created with label 'b'house''\n12 nodes created with label 'b'book''\n3 nodes created with label 'b'writer''\n14 relations created for type 'b'wrote''\n2208 relations created for type 'b'belongs''\nConstruction of graph 'GOT_DEMO' complete: 2577 nodes created, 2222 relations created in 0.169954 seconds\n\n\n")),(0,s.kt)("h2",{id:"step-16-run-the-cypher-query"},"Step 16. Run the cypher query"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'GRAPH.QUERY GOT_DEMO "MATCH (w:writer)-[wrote]->(b:book) return w,b"\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:a(98769).Z,width:"1288",height:"844"})),(0,s.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisgraph/"},"RedisGraph Project")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/slowlog"},"Slowlog Configuration using RedisInsight")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/memoryanalyzer"},"Memory Analysis using RedisInsight")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/browser"},"Visualize Redis database keys using RedisInsight Browser Tool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/explore/redisinsight/streams"},"Using Redis Streams with RedisInsight"))),(0,s.kt)("h2",{id:""}),(0,s.kt)("div",null,(0,s.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}h.isMDXComponent=!0},46683:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image1-8ccadde629dc83ed97e4e37fd5edbd2b.png"},59647:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image10-cb537995ea5d6e70fe9df801653afa0a.png"},32759:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image11-6f72ffdaca55d21bfddac84b0208d614.png"},51118:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image12-4f1da6836c81f84d8067ddb5476c23fb.png"},45673:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image13-34185b149fe10c4a64544d9e035bab29.png"},71960:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image14-438d336c9b7e5f6e6af50f8095b1ed58.png"},42488:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image15-90817153bafdcf49dbde6976de8a7b4b.png"},15290:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image16-8e4918edea321878451a27838413af9c.png"},98769:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image18-afc25856e123b89be0e4328ef7afefb8.png"},11401:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image2-9406fbdcc2540cf595dcbeb643b7fbc0.png"},51889:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image3-8817a729063371a8c5ceb28f44aadd59.png"},73169:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image4-15e2444ead8acf721a8cdb2df504fff1.png"},30844:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image5-a7e57251d836cddd6c3bffc52913c1dc.png"},42034:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image6-90c445e979bc0d634742c7d6e156b329.png"},66039:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image7-9ae241d8f23188ee367aa6b385ee89f4.png"},41497:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image8-8e3481df7cb9ed181c0f3f6472ada32e.png"},74023:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image9-2889ccb2378455113ff832bc3163e959.png"},29708:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},3789:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"}}]);