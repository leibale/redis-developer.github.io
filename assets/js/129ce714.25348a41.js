"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=m(n),u=r,k=h["".concat(s,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},10500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={id:"index-import",title:"6. Import datasets",sidebar_label:"6. Import datasets",slug:"/howtos/moviesdatabase/import"},i="Sample Dataset",l={unversionedId:"howtos/moviesdatabase/import/index-import",id:"howtos/moviesdatabase/import/index-import",title:"6. Import datasets",description:"In the previous steps you used only a few movies, let's now import:",source:"@site/docs/howtos/moviesdatabase/import/index-import.mdx",sourceDirName:"howtos/moviesdatabase/import",slug:"/howtos/moviesdatabase/import",permalink:"/howtos/moviesdatabase/import",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/moviesdatabase/import/index-import.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-import",title:"6. Import datasets",sidebar_label:"6. Import datasets",slug:"/howtos/moviesdatabase/import"},sidebar:"docs",previous:{title:"5. Manage Index",permalink:"/howtos/moviesdatabase/manage"},next:{title:"7. Query Movies",permalink:"/howtos/moviesdatabase/querymovies"}},s={},m=[{value:"Dataset Description",id:"dataset-description",level:2},{value:"Movies",id:"movies",level:3},{value:"Theaters",id:"theaters",level:3},{value:"Users",id:"users",level:3},{value:"Importing the Movies, Theaters and Users",id:"importing-the-movies-theaters-and-users",level:2},{value:"Create Indexes",id:"create-indexes",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sample-dataset"},"Sample Dataset"),(0,r.kt)("p",null,"In the previous steps you used only a few movies, let's now import:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"More movies ",(0,r.kt)("em",{parentName:"li"},"to discover more queries"),"."),(0,r.kt)("li",{parentName:"ul"},"Theaters ",(0,r.kt)("em",{parentName:"li"},"to discover the geospatial capabilities"),"."),(0,r.kt)("li",{parentName:"ul"},"Users ",(0,r.kt)("em",{parentName:"li"},"to do some aggregations"),".")),(0,r.kt)("h2",{id:"dataset-description"},"Dataset Description"),(0,r.kt)("h3",{id:"movies"},"Movies"),(0,r.kt)("p",null,"The file ",(0,r.kt)("inlineCode",{parentName:"p"},"sample-app/redisearch-docker/dataset/import_movies.redis")," is a script that creates 922 Hashes."),(0,r.kt)("p",null,"The movie hashes contain the following fields."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"movie:id"))," : The unique ID of the movie, internal to this database (used as the key of the hash)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"title"))," : The title of the movie."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"plot"))," : A summary of the movie."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"genre"))," : The genre of the movie, for now a movie will only have a single genre."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"release_year"))," : The year the movie was released as a numerical value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"rating"))," : A numeric value representing the public's rating for this movie."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"votes"))," : Number of votes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"poster"))," : Link to the movie poster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"imdb_id"))," : id of the movie in the ",(0,r.kt)("a",{parentName:"li",href:"https://imdb.com"},"IMDB")," database.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<details>\n  <summary>Sample Data: <b>movie:343</b></summary>\n  <table>\n      <thead>\n        <tr>\n            <th>Field</th>\n            <th>Value</th>\n        </tr>\n    </thead>\n  <tbody>\n    <tr>\n        <th>title</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        Spider-Man\n        </td>\n    </tr>\n    <tr>\n        <th>plot</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    When bitten by a genetically modified spider a nerdy shy and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"        </td>\n    </tr>\n    <tr>\n        <th>genre</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        Action\n        </td>\n    </tr>\n    <tr>\n        <th>release_year</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        2002\n        </td>\n    </tr>\n    <tr>\n        <th>rating</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        7.3\n        </td>\n    </tr>\n    <tr>\n        <th>votes</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        662219\n        </td>\n    </tr>\n    <tr>\n        <th>poster</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg\n        </td>\n    </tr>\n    <tr>\n        <th>imdb_id</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        tt0145487\n        </td>\n    </tr>\n    <tbody>\n  </table>\n</details>\n")),(0,r.kt)("h3",{id:"theaters"},"Theaters"),(0,r.kt)("p",null,"The file ",(0,r.kt)("inlineCode",{parentName:"p"},"sample-app/redisearch-docker/dataset/import_theaters.redis")," is a script that creates 117 Hashes (used for Geospatial queries). ",(0,r.kt)("em",{parentName:"p"},"This dataset is a list of New York Theaters, and not movie theaters, but it is not that critical for this project ;).")),(0,r.kt)("p",null,"The theater hashes contain the following fields."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"theater:id"))," : The unique ID of the theater, internal to this database (used as the key of the hash)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"name"))," : The name of the theater"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"address"))," : The street address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"city"))," : The city, in this sample dataset all the theaters are in New York"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"zip"))," : The zip code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"phone"))," : The phone number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"url"))," : The URL of the theater"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"location"))," : Contains the ",(0,r.kt)("inlineCode",{parentName:"li"},"longitude,latitude")," used to create the Geo-indexed field")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<details>\n <summary>Sample Data: <b>theater:20</b></summary>\n  <table>\n      <thead>\n        <tr>\n            <th>Field</th>\n            <th>Value</th>\n        </tr>\n    </thead>\n  <tbody>\n    <tr>\n        <th>name</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        Broadway Theatre\n        </td>\n    </tr>\n    <tr>\n        <th>address</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        1681 Broadway\n        </td>\n    </tr>\n    <tr>\n        <th>city</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        New York\n        </td>\n    </tr>\n    <tr>\n        <th>zip</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        10019\n        </td>\n    </tr>\n    <tr>\n        <th>phone</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        212 944-3700\n        </td>\n    </tr>\n    <tr>\n        <th>url</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        http://www.shubertorganization.com/theatres/broadway.asp\n        </td>\n    </tr>\n    <tr>\n        <th>location</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        -73.98335054631019,40.763270202723625\n        </td>\n    </tr>\n    <tbody>\n  </table>\n</details>\n")),(0,r.kt)("h3",{id:"users"},"Users"),(0,r.kt)("p",null,"The file ",(0,r.kt)("inlineCode",{parentName:"p"},"sample-app/redisearch-docker/dataset/import_users.redis")," is a script that creates 5996 Hashes."),(0,r.kt)("p",null,"The user hashes contain the following fields."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"user:id"))," : The unique ID of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"first_name"))," : The first name of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"last_name"))," : The last name of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"email"))," : The email of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"gender"))," : The gender of the user (",(0,r.kt)("inlineCode",{parentName:"li"},"female"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"male"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"country"))," : The country name of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"country_code"))," : The country code of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"city"))," : The city of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"longitude"))," : The longitude of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"latitude"))," : The latitude of the user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"last_login"))," : The last login time for the user, as EPOC time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ip_address"))," : The IP address of the user.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<details>\n <summary>Sample Data: <b>user:3233</b></summary>\n  <table>\n      <thead>\n        <tr>\n            <th>Field</th>\n            <th>Value</th>\n        </tr>\n    </thead>\n  <tbody>\n    <tr>\n        <th>first_name</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        Rosetta\n        </td>\n    </tr>\n    <tr>\n        <th>last_name</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        Olyff\n        </td>\n    </tr>\n    <tr>\n        <th>email</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        rolyff6g@163.com\n        </td>\n    </tr>\n    <tr>\n        <th>gender</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        female\n        </td>\n    </tr>\n    <tr>\n        <th>country</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        China\n        </td>\n    </tr>\n    <tr>\n        <th>country_code</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        CN\n        </td>\n    </tr>\n    <tr>\n        <th>city</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        Huangdao\n        </td>\n    </tr>\n    <tr>\n        <th>longitude</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        120.04619\n        </td>\n    </tr>\n    <tr>\n        <th>latitude</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        35.872664\n        </td>\n    </tr>\n    <tr>\n        <th>last_login</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        1570386621\n        </td>\n    </tr>\n    <tr>\n        <th>ip_address</th>\n        <td style='font-family:monospace; font-size: 0.875em; \"'>\n        218.47.90.79\n        </td>\n    </tr>\n    <tbody>\n  </table>\n</details>\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"importing-the-movies-theaters-and-users"},"Importing the Movies, Theaters and Users"),(0,r.kt)("p",null,"Before importing the data, flush the database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> FLUSHALL\n")),(0,r.kt)("p",null,"The easiest way to import the file is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli"),", using the following terminal command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ redis-cli -h localhost -p 6379 < ./sample-app/redisearch-docker/dataset/import_movies.redis\n\n$ redis-cli -h localhost -p 6379 < ./sample-app/redisearch-docker/dataset/import_theaters.redis\n\n\n$ redis-cli -h localhost -p 6379 < ./sample-app/redisearch-docker/dataset/import_users.redis\n\n")),(0,r.kt)("p",null,"Using Redis Insight or the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli")," you can look at the dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'> HMGET "movie:343" title release_year genre\n\n1) "Spider-Man"\n2) "2002"\n3) "Action"\n\n\n>  HMGET "theater:20" name location\n1) "Broadway Theatre"\n2) "-73.98335054631019,40.763270202723625"\n\n\n\n> HMGET "user:343" first_name last_name last_login\n1) "Umeko"\n2) "Castagno"\n3) "1574769122"\n\n')),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"DBSIZE")," command to see how many keys you have in your database."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"create-indexes"},"Create Indexes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create the ",(0,r.kt)("inlineCode",{parentName:"strong"},"idx:movie")," index:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'> FT.CREATE idx:movie ON hash PREFIX 1 "movie:" SCHEMA title TEXT SORTABLE plot TEXT WEIGHT 0.5 release_year NUMERIC SORTABLE rating NUMERIC SORTABLE votes NUMERIC SORTABLE genre TAG SORTABLE\n\n"OK"\n')),(0,r.kt)("p",null,"The movies have now been indexed, you can run the ",(0,r.kt)("inlineCode",{parentName:"p"},'FT.INFO "idx:movie"')," command and look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"num_docs")," returned value. (should be 922)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create the ",(0,r.kt)("inlineCode",{parentName:"strong"},"idx:theater")," index:")),(0,r.kt)("p",null,"This index will mostly be used to show the geospatial capabilties of RediSearch."),(0,r.kt)("p",null,"In the previous examples we have created indexes with 3 types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Text")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Numeric")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tag"))),(0,r.kt)("p",null,"You will now discover a new type of field: ",(0,r.kt)("inlineCode",{parentName:"p"},"Geo"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"theater")," hashes contains a field ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," with the longitude and latitude, that will be used in the index as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'> FT.CREATE idx:theater ON hash PREFIX 1 "theater:" SCHEMA name TEXT SORTABLE location GEO\n\n"OK"\n')),(0,r.kt)("p",null,"The theaters have been indexed, you can run the ",(0,r.kt)("inlineCode",{parentName:"p"},'FT.INFO "idx:theater"')," command and look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"num_docs")," returned value. (should be 117)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create the ",(0,r.kt)("inlineCode",{parentName:"strong"},"idx:user")," index:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'> FT.CREATE idx:user ON hash PREFIX 1 "user:" SCHEMA gender TAG country TAG SORTABLE last_login NUMERIC SORTABLE location GEO\n\n"OK"\n')))}d.isMDXComponent=!0}}]);