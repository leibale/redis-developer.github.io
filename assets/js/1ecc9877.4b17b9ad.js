"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4226],{85162:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(67294),n=a(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var i=a(87462),n=a(67294),r=a(86010),l=a(72389),s=a(67392),o=a(7094),d=a(12466);const u="tabList__CuJ",h="tabItem_LNqP";function p(e){var t;const{lazy:a,block:l,defaultValue:p,values:m,groupId:c,className:k}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:a,attributes:i}}=e;return{value:t,label:a,attributes:i}})),y=(0,s.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,o.U)(),[R,w]=(0,n.useState)(f),S=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=c){const e=b[c];null!=e&&e!==R&&v.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=S.indexOf(t),i=v[a].value;i!==R&&(E(t),w(i),null!=c&&N(c,String(i)))},_=e=>{var t;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=S[t]??S[S.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:e=>S.push(e),onKeyDown:_,onClick:T},l,{className:(0,r.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":R===t})}),a??t)}))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===R))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==R})))))}function m(e){const t=(0,l.Z)();return n.createElement(p,(0,i.Z)({key:String(t)},e))}},71131:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(67294),n=a(3905),r=a(52195);const l="riContainer_bco2",s="riDescriptionShort_E27B",o="riDetail_wzFs",d="riIcon_yDou",u="riTitle_x6vI",h="riDescription_RDnu",p="riMore_apRP";var m=a(86010);const c=e=>{const[t,a]=i.useState(!1);return i.createElement("a",{href:e.page,className:l},i.createElement("div",{className:s},i.createElement("div",{className:d},i.createElement("span",{className:"fe fe-zap"})),i.createElement("div",{className:o},i.createElement("div",{className:u},i.createElement("a",{href:e.page},e.title)),i.createElement("div",{className:h},e.description,i.Children.count(e.children)>0&&i.createElement("span",{className:(0,m.Z)(p,"fe","fe-more-horizontal"),onClick:()=>a(!t)})))),t&&i.createElement("div",{className:"ri-description-long"},i.createElement(n.Zo,{components:r.Z},e.children)))}},31838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));a(65488),a(85162),a(44996),a(71131);const r={id:"index-redisearch",title:"Perform Database Search and Analytics using the RediSearch Plugin in RedisInsight v2.0",sidebar_label:"Perform Database Search and Analytics using the RediSearch Plugin in RedisInsight v2.0",slug:"/explore/redisinsightv2/redisearch",authors:["ajeet"]},l=void 0,s={unversionedId:"explore/redisinsightv2/redisearch/index-redisearch",id:"explore/redisinsightv2/redisearch/index-redisearch",title:"Perform Database Search and Analytics using the RediSearch Plugin in RedisInsight v2.0",description:"A full-featured pure desktop GUI client, RedisInsight supports RediSearch. RediSearch is a powerful indexing, querying, and full-text search engine for Redis. It is one of the most mature and feature-rich Redis modules. With RedisInsight, the following functionalities are possible:",source:"@site/docs/explore/redisinsightv2/redisearch/index-redisearch.mdx",sourceDirName:"explore/redisinsightv2/redisearch",slug:"/explore/redisinsightv2/redisearch",permalink:"/explore/redisinsightv2/redisearch",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsightv2/redisearch/index-redisearch.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-redisearch",title:"Perform Database Search and Analytics using the RediSearch Plugin in RedisInsight v2.0",sidebar_label:"Perform Database Search and Analytics using the RediSearch Plugin in RedisInsight v2.0",slug:"/explore/redisinsightv2/redisearch",authors:["ajeet"]},sidebar:"docs",previous:{title:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",permalink:"/explore/redisinsightv2/profiler"},next:{title:"Overview",permalink:"/explore/redisinsight"}},o={},d=[{value:"Step 1. Create a Redis Database",id:"step-1-create-a-redis-database",level:3},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",level:3},{value:"Step 3. Movie Sample Database",id:"step-3-movie-sample-database",level:3},{value:"Key and Data Structure",id:"key-and-data-structure",level:4},{value:"Step 4. Insert Movies",id:"step-4-insert-movies",level:3},{value:"Result:",id:"result",level:4},{value:"Increment the Movie Rating",id:"increment-the-movie-rating",level:4},{value:"Step 5. RediSearch &amp; Indexing",id:"step-5-redisearch--indexing",level:3},{value:"Step 6. Create the Index",id:"step-6-create-the-index",level:3},{value:"Query: All the movies that contains the string &quot;<code>war</code>&quot;",id:"query-all-the-movies-that-contains-the-string-war",level:4},{value:"Result:",id:"result-1",level:4},{value:"Query: Limit the list of fields returned by the query using the RETURN parameter",id:"query-limit-the-list-of-fields-returned-by-the-query-using-the-return-parameter",level:4},{value:"Result:",id:"result-2",level:4},{value:"Query: All the movies that contains the string &quot;war&quot; but NOT the &quot;jedi&quot; one",id:"query-all-the-movies-that-contains-the-string-war-but-not-the-jedi-one",level:4},{value:"Result:",id:"result-3",level:4},{value:"Step 7. Fuzzy Search",id:"step-7-fuzzy-search",level:3},{value:"Result:",id:"result-4",level:4},{value:"Query: All Thriller movies",id:"query-all-thriller-movies",level:4},{value:"Result:",id:"result-5",level:4},{value:"Query: All Thriller or Action movies",id:"query-all-thriller-or-action-movies",level:4},{value:"Result:",id:"result-6",level:4},{value:"Query : All the movies released between 1970 and 1980 (included)",id:"query--all-the-movies-released-between-1970-and-1980-included",level:4},{value:"Result:",id:"result-7",level:4},{value:"Step 8. Aggregation",id:"step-8-aggregation",level:3},{value:"Query: Number of movies by year",id:"query-number-of-movies-by-year",level:4},{value:"Result:",id:"result-8",level:4},{value:"Query: Number of movies by year from the most recent to the oldest",id:"query-number-of-movies-by-year-from-the-most-recent-to-the-oldest",level:4},{value:"Result:",id:"result-9",level:4},{value:"Additional Links",id:"additional-links",level:3}],u={toc:d};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A full-featured pure desktop GUI client, RedisInsight supports RediSearch. ",(0,n.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/"},"RediSearch")," is a powerful indexing, querying, and full-text search engine for Redis. It is one of the most mature and feature-rich Redis modules. With RedisInsight, the following functionalities are possible:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"MyImage",src:a(20975).Z,width:"3214",height:"1858"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Multi-line for building queries"),(0,n.kt)("li",{parentName:"ul"},"Ability to submit query with \u2018ctrl + enter\u2019 in single line mode"),(0,n.kt)("li",{parentName:"ul"},"Better handling of long index names in index selector dropdown"),(0,n.kt)("li",{parentName:"ul"},"Supports Aggregation"),(0,n.kt)("li",{parentName:"ul"},"Supports Fuzzy logic"),(0,n.kt)("li",{parentName:"ul"},"Supports simple and complex conditions"),(0,n.kt)("li",{parentName:"ul"},"Sorting"),(0,n.kt)("li",{parentName:"ul"},"Pagination"),(0,n.kt)("li",{parentName:"ul"},"Counting")),(0,n.kt)("p",null,"RediSearch allows you to quickly create indexes on datasets (stored as Redis Hashes or, with RedisJSON, as JSON documents), and uses an incremental indexing approach for rapid index creation and deletion. The indexes let you query your data at lightning speed, perform complex aggregations, and filter by properties, numeric ranges, and geographical distance."),(0,n.kt)("h3",{id:"step-1-create-a-redis-database"},"Step 1. Create a Redis Database"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/explore/redismod"},"Follow this link to create a Redis database using a Docker container")," that comes with the RediSearch module enabled."),(0,n.kt)("h3",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),(0,n.kt)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"Click this link")," to access a form that allows you to select the operating system of your choice."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"My Image",src:a(98955).Z,width:"1254",height:"1296"})),(0,n.kt)("p",null,"Run the installer.\nOnce the installation completes, you should be able to connect to a Redis database."),(0,n.kt)("p",null,'Select "Connect to a Redis database".'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"My Image",src:a(70152).Z,width:"2736",height:"1816"})),(0,n.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password. Then click \u201cADD REDIS DATABASE\u201d."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"alt_text",src:a(40051).Z,width:"2586",height:"1132"})),(0,n.kt)("h3",{id:"step-3-movie-sample-database"},"Step 3. Movie Sample Database"),(0,n.kt)("p",null,"In this section, you will use a simple dataset describing movies, for now, all records are in English. You will learn more about other languages in another tutorial."),(0,n.kt)("p",null,"A movie is represented by the following attributes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"movie_id"))," : The unique ID of the movie, internal to this database"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"title"))," : The title of the movie."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"plot"))," : A summary of the movie."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"genre"))," : The genre of the movie, for now a movie will only have a single genre."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"release_year"))," : The year the movie was released as a numerical value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"rating"))," : A numeric value representing the public's rating for this movie."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"votes"))," : Number of votes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"poster"))," : Link to the movie poster."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"imdb_id"))," : id of the movie in the ",(0,n.kt)("a",{parentName:"li",href:"https://imdb.com"},"IMDB")," database.")),(0,n.kt)("h4",{id:"key-and-data-structure"},"Key and Data Structure"),(0,n.kt)("p",null,"As a Redis developer, one of the first things to look at when building your application is to define the structure of the key and data (data design/data modeling)."),(0,n.kt)("p",null,"A common strategy for Redis is to use specific patterns when naming keys. For example in this application where the database will probably deal with various business objects: movies, actors, theaters, users, ... we can use the following pattern:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"business_object:key"))),(0,n.kt)("p",null,"For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"movie:001")," for the movie with the id 001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"user:001")," the user with the id 001")),(0,n.kt)("p",null,"and for the movie's information you should use a Redis ",(0,n.kt)("a",{parentName:"p",href:"https://redis.io/topics/data-types#hashes"},"Hash"),"."),(0,n.kt)("p",null,"A Redis Hash allows the application to structure all the movie attributes in individual fields; also RediSearch will index the fields based on the index definition."),(0,n.kt)("h3",{id:"step-4-insert-movies"},"Step 4. Insert Movies"),(0,n.kt)("p",null,"It is time now to add some data into your database, let's insert a few movies, using ",(0,n.kt)("inlineCode",{parentName:"p"},"redis-cli")," or ",(0,n.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/"},"RedisInsight"),"."),(0,n.kt)("p",null,"Once you are connected to your Redis instance run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'HSET movie:11002 title "Star Wars: Episode V - The Empire Strikes Back" plot "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy." release_year 1980 genre "Action" rating 8.7 votes 1127635 imdb_id tt0080684\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'HSET movie:11003 title "The Godfather" plot "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." release_year 1972 genre "Drama" rating 9.2 votes 1563839 imdb_id tt0068646\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'HSET movie:11004 title "Heat" plot "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist." release_year 1995 genre "Thriller" rating 8.2 votes 559490 imdb_id tt0113277\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'HSET "movie:11005" title "Star Wars: Episode VI - Return of the Jedi" genre "Action" votes 906260 rating 8.3 release_year 1983  plot "The Rebels dispatch to Endor to destroy the second Empire\'s Death Star." ibmdb_id "tt0086190"\n')),(0,n.kt)("p",null,"Now it is possible to get information from the hash using the movie ID. For example if you want to get the title, and rating execute the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},">> HMGET movie:11002 title rating\n")),(0,n.kt)("h4",{id:"result"},"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'1) "Star Wars: Episode V - The Empire Strikes Back"\n2) "8.7"\n')),(0,n.kt)("h4",{id:"increment-the-movie-rating"},"Increment the Movie Rating"),(0,n.kt)("p",null,"You can increment the rating of this movie using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"HINCRBYFLOAT movie:11002 rating 0.1\n")),(0,n.kt)("p",null,"Here's a quick screenshot of the results shown in RedisInsight:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"MyImage",src:a(50277).Z,width:"1456",height:"1072"})),(0,n.kt)("p",null,"But how do you get a movie or list of movies by year of release, rating or title?"),(0,n.kt)("p",null,"One option, would be to read all the movies, check all fields and then return only matching movies; no need to say that this is a really bad idea. Nevertheless this is where Redis developers often create custom secondary indexes using SET/SORTED SET structures that point back to the movie hash. This needs some heavy design and implementation."),(0,n.kt)("p",null,"This is where the RediSearch module can help, and why it was created."),(0,n.kt)("h3",{id:"step-5-redisearch--indexing"},"Step 5. RediSearch & Indexing"),(0,n.kt)("p",null,"RediSearch greatly simplifies this by offering a simple and automatic way to create secondary indices on Redis Hashes. (more datastructure will eventually come)"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/RediSearch/redisearch-getting-started/blob/master/docs/images/secondary-index.png?raw=true",alt:"Secondary Index"})),(0,n.kt)("p",null,"Using RediSearch if you want to query on a field, you must first index that field. Let's start by indexing the following fields for our movies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Title"),(0,n.kt)("li",{parentName:"ul"},"Release Year"),(0,n.kt)("li",{parentName:"ul"},"Rating"),(0,n.kt)("li",{parentName:"ul"},"Genre")),(0,n.kt)("p",null,"When creating an index you define:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"which data you want to index: all ",(0,n.kt)("em",{parentName:"li"},"hashes")," with a key starting with ",(0,n.kt)("inlineCode",{parentName:"li"},"movies")),(0,n.kt)("li",{parentName:"ul"},"which fields in the hashes you want to index using a Schema definition.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Warning: Do not index all fields"))),(0,n.kt)("p",{parentName:"blockquote"},"Indexes take space in memory, and must be updated when the primary data is updated. So create the index carefully and keep the definition up to date with your needs.")),(0,n.kt)("h3",{id:"step-6-create-the-index"},"Step 6. Create the Index"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},' FT.CREATE idx:movie ON hash PREFIX 1 "movie:" SCHEMA title TEXT SORTABLE release_year NUMERIC SORTABLE rating NUMERIC SORTABLE genre TAG SORTABLE\n')),(0,n.kt)("p",null,"The database contains a few movies, and an index, it is now possible to execute some queries."),(0,n.kt)("h4",{id:"query-all-the-movies-that-contains-the-string-war"},'Query: All the movies that contains the string "',(0,n.kt)("inlineCode",{parentName:"h4"},"war"),'"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FT.SEARCH idx:movie "war"\n')),(0,n.kt)("h4",{id:"result-1"},"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'1) 2\n2) "movie:11005"\n3) 1) "title"\n   2) "Star Wars: Episode VI - Return of the Jedi"\n   3) "votes"\n   4) "906260"\n   5) "plot"\n   6) "The Rebels dispatch to Endor to destroy the second Empire\'s Death Star."\n   7) "rating"\n   8) "8.3"\n   9) "release_year"\n   10) "1983"\n   11) "ibmdb_id"\n   12) "tt0086190"\n   13) "genre"\n   14) "Action"\n4) "movie:11002"\n5) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "votes"\n   4) "1127635"\n   5) "plot"\n   6) "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy."\n   7) "rating"\n   8) "8.8"\n   9) "release_year"\n   10) "1980"\n   11) "genre"\n   12) "Action"\n   13) "imdb_id"\n   14) "tt0080684"\n>\n')),(0,n.kt)("h4",{id:"query-limit-the-list-of-fields-returned-by-the-query-using-the-return-parameter"},"Query: Limit the list of fields returned by the query using the RETURN parameter"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"FT.SEARCH")," commands returns a list of results starting with the number of results, then the list of elements (keys & fields)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FT.SEARCH idx:movie "war" RETURN 2 title release_year\n')),(0,n.kt)("h4",{id:"result-2"},"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'1) 2\n2) "movie:11005"\n3) 1) "title"\n   2) "Star Wars: Episode VI - Return of the Jedi"\n   3) "release_year"\n   4) "1983"\n4) "movie:11002"\n5) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n>\n')),(0,n.kt)("p",null,"As you can see the movie ",(0,n.kt)("em",{parentName:"p"},"Star Wars: Episode V - The Empire Strikes Back")," is found, even though you used only the word \u201cwar\u201d to match \u201cWars\u201d in the title. This is because the title has been indexed as text, so the field is ",(0,n.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/Escaping/"},"tokenized")," and ",(0,n.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/Stemming/"},"stemmed"),"."),(0,n.kt)("p",null,"Later when looking at the query syntax in more detail you will learn more about the search capabilities."),(0,n.kt)("p",null,"It is also possible to limit the list of fields returned by the query using the ",(0,n.kt)("inlineCode",{parentName:"p"},"RETURN")," parameter, let's run the same query, and return only the title and release_year."),(0,n.kt)("h4",{id:"query-all-the-movies-that-contains-the-string-war-but-not-the-jedi-one"},'Query: All the movies that contains the string "war" but NOT the "jedi" one'),(0,n.kt)("p",null,"Adding the string ",(0,n.kt)("inlineCode",{parentName:"p"},"-Jedi")," (minus) will ask the query engine not to return values that contain ",(0,n.kt)("inlineCode",{parentName:"p"},"jedi"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FT.SEARCH idx:movie "war -Jedi" RETURN 2 title release_year\n')),(0,n.kt)("h4",{id:"result-3"},"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'1) 1\n2) "movie:11002"\n3) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),(0,n.kt)("h3",{id:"step-7-fuzzy-search"},"Step 7. Fuzzy Search"),(0,n.kt)("p",null,'All the movies that contains the string "gdfather using fuzzy search"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FT.SEARCH "idx:movie" " %gdfather% " RETURN 2 title release_year\n')),(0,n.kt)("h4",{id:"result-4"},"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'1) 1\n2) "movie:11003"\n3) 1) "title"\n   2) "The Godfather"\n   3) "release_year"\n   4) "1972"\n')),(0,n.kt)("h4",{id:"query-all-thriller-movies"},"Query: All Thriller movies"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FT.SEARCH "idx:movie" "@genre:{Thriller}" RETURN 2 title release_year\n')),(0,n.kt)("h4",{id:"result-5"},"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'1) 1\n2) "movie:11004"\n3) 1) "title"\n   2) "Heat"\n   3) "release_year"\n   4) "1995"\n')),(0,n.kt)("h4",{id:"query-all-thriller-or-action-movies"},"Query: All Thriller or Action movies"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FT.SEARCH "idx:movie" "@genre:{Thriller|Action}" RETURN 2 title release_year\n')),(0,n.kt)("h4",{id:"result-6"},"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'1) 3\n2) "movie:11004"\n3) 1) "title"\n   2) "Heat"\n   3) "release_year"\n   4) "1995"\n4) "movie:11005"\n5) 1) "title"\n   2) "Star Wars: Episode VI - Return of the Jedi"\n   3) "release_year"\n   4) "1983"\n6) "movie:11002"\n7) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),(0,n.kt)("h4",{id:"query--all-the-movies-released-between-1970-and-1980-included"},"Query : All the movies released between 1970 and 1980 (included)"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"FT.SEARCH")," syntax has two ways to query numeric fields:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"using the ",(0,n.kt)("inlineCode",{parentName:"li"},"FILTER")," parameter")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FT.SEARCH "idx:movie" "@genre:{Thriller|Action}" FILTER release_year 1970  1980 RETURN 2 title release_year\n')),(0,n.kt)("h4",{id:"result-7"},"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'1) 1\n2) "movie:11002"\n3) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),(0,n.kt)("h3",{id:"step-8-aggregation"},"Step 8. Aggregation"),(0,n.kt)("h4",{id:"query-number-of-movies-by-year"},"Query: Number of movies by year"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FT.AGGREGATE "idx:movie" "*" GROUPBY 1 @release_year REDUCE COUNT 0 AS nb_of_movies\n')),(0,n.kt)("h4",{id:"result-8"},"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'1) 4\n2) 1) "release_year"\n   2) "1983"\n   3) "nb_of_movies"\n   4) "1"\n3) 1) "release_year"\n   2) "1995"\n   3) "nb_of_movies"\n   4) "1"\n4) 1) "release_year"\n   2) "1980"\n   3) "nb_of_movies"\n   4) "1"\n5) 1) "release_year"\n   2) "1972"\n   3) "nb_of_movies"\n   4) "1"\n')),(0,n.kt)("h4",{id:"query-number-of-movies-by-year-from-the-most-recent-to-the-oldest"},"Query: Number of movies by year from the most recent to the oldest"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'FT.AGGREGATE "idx:movie" "*" GROUPBY 1 @release_year REDUCE COUNT 0 AS nb_of_movies SORTBY 2 @release_year DESC\n')),(0,n.kt)("h4",{id:"result-9"},"Result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'1) 4\n2) 1) "release_year"\n   2) "1995"\n   3) "nb_of_movies"\n   4) "1"\n3) 1) "release_year"\n   2) "1983"\n   3) "nb_of_movies"\n   4) "1"\n4) 1) "release_year"\n   2) "1980"\n   3) "nb_of_movies"\n   4) "1"\n5) 1) "release_year"\n   2) "1972"\n   3) "nb_of_movies"\n   4) "1"\n\n')),(0,n.kt)("h3",{id:"additional-links"},"Additional Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisearch/"},"RediSearch Project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/howtos/redisearch"},"RediSearch Tutorial")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/howtos/moviesdatabase/getting-started"},"Getting Started with Movie Database")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/explore/redisinsightv2/getting-started"},"Getting Started with RedisInsight v2.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/explore/redisinsightv2/browser"},"Visualize Redis Database keys using the RedisInsight Browser Tool"))),(0,n.kt)("h2",{id:""}),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}h.isMDXComponent=!0},70152:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/database-connection-d98dee54e3ef4b7672150a916d252b8a.png"},40051:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/database-4df29dfbac1e6bf612d5468cdff4784d.png"},50277:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/rating-964e0e2cee104d080b8a3779ab08bbc9.png"},20975:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/redisearch-da64b00be4ca7771a0067d876b34e42a.png"},98955:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/redisinsight-register-07e99cf0ec20dc07567c2935f64b2587.png"}}]);