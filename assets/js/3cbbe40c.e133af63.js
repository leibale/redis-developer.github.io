"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1261],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var s=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=s.createContext({}),l=function(e){var t=s.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=l(e.components);return s.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(a),h=r,c=p["".concat(d,".").concat(h)]||p[h]||u[h]||i;return a?s.createElement(c,n(n({ref:t},m),{},{components:a})):s.createElement(c,n({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var l=2;l<i;l++)n[l]=a[l];return s.createElement.apply(null,n)}return s.createElement.apply(null,a)}p.displayName="MDXCreateElement"},12282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=a(87462),r=(a(67294),a(3905));const i={id:"index-usingprometheus",title:"How to monitor Redis with Prometheus and Grafana for Real-Time Analytics",sidebar_label:"Using RedisTimeSeries with Prometheus and Grafana",slug:"/howtos/redistimeseries/using-prometheus",authors:["ajeet"]},n=void 0,o={unversionedId:"howtos/redistimeseries/using-prometheus/index-usingprometheus",id:"howtos/redistimeseries/using-prometheus/index-usingprometheus",title:"How to monitor Redis with Prometheus and Grafana for Real-Time Analytics",description:"My Image",source:"@site/docs/howtos/redistimeseries/using-prometheus/index-usingprometheus.mdx",sourceDirName:"howtos/redistimeseries/using-prometheus",slug:"/howtos/redistimeseries/using-prometheus",permalink:"/howtos/redistimeseries/using-prometheus",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redistimeseries/using-prometheus/index-usingprometheus.mdx",tags:[],version:"current",lastUpdatedAt:1655488379,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-usingprometheus",title:"How to monitor Redis with Prometheus and Grafana for Real-Time Analytics",sidebar_label:"Using RedisTimeSeries with Prometheus and Grafana",slug:"/howtos/redistimeseries/using-prometheus",authors:["ajeet"]},sidebar:"docs",previous:{title:"RedisTimeSeries and Go",permalink:"/howtos/redistimeseries/using-go"},next:{title:"Overview",permalink:"/howtos/redisgraph/"}},d={},l=[{value:"When do you use a time-series database?",id:"when-do-you-use-a-time-series-database",level:3},{value:"Challenges with the existing traditional databases",id:"challenges-with-the-existing-traditional-databases",level:3},{value:"What is RedisTimeSeries?",id:"what-is-redistimeseries",level:3},{value:"Notables features of RedisTimeseries includes:",id:"notables-features-of-redistimeseries-includes",level:3},{value:"Why Prometheus?",id:"why-prometheus",level:3},{value:"Prometheus remote storage adapter for RedisTimeSeries",id:"prometheus-remote-storage-adapter-for-redistimeseries",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Prerequisite:",id:"prerequisite",level:3},{value:"Step 1. Clone the repository",id:"step-1-clone-the-repository",level:3},{value:"Step 2. Examining the Docker Compose File",id:"step-2-examining-the-docker-compose-file",level:3},{value:"Prometheus",id:"prometheus",level:4},{value:"Storage Adapter",id:"storage-adapter",level:4},{value:"Redis",id:"redis",level:4},{value:"Grafana",id:"grafana",level:4},{value:"Step 3. Run the Docker Compose",id:"step-3-run-the-docker-compose",level:3},{value:"Step 4. Accessing the Grafana",id:"step-4-accessing-the-grafana",level:3},{value:"Step 5. Add Prometheus Data Source",id:"step-5-add-prometheus-data-source",level:3},{value:"Step 6. Importing Prometheus Data Source",id:"step-6-importing-prometheus-data-source",level:3},{value:"Step 7. Adding Redis Datasource",id:"step-7-adding-redis-datasource",level:3},{value:"Step 8. Running the Sensor Script",id:"step-8-running-the-sensor-script",level:3},{value:"Step 9. Accessing Prometheus Dashboard",id:"step-9-accessing-prometheus-dashboard",level:3},{value:"Further References:",id:"further-references",level:3}],m={toc:l};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,s.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"My Image",src:a(55689).Z,width:"1246",height:"682"})),(0,r.kt)("p",null,"Time-series data is basically a series of data stored in time order and produced continuously over a long period of time. These measurements and events are tracked, monitored, downsampled, and aggregated over time. The events could be, for example, IoT sensor data. Every sensor is a source of time-series data. Each data point in the series stores the source information and other sensor measurements as labels. Data labels from every source may not conform to the same structure or order."),(0,r.kt)("p",null,"A time-series database is a database system designed to store and retrieve such data for each point in time. Timestamped data can include data generated at regular intervals as well as data generated at unpredictable intervals."),(0,r.kt)("h3",{id:"when-do-you-use-a-time-series-database"},"When do you use a time-series database?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When your application needs data that accumulates quickly and your other databases aren\u2019t designed to handle that scale."),(0,r.kt)("li",{parentName:"ul"},"For financial or industrial applications."),(0,r.kt)("li",{parentName:"ul"},"When your application needs to perform real-time analysis of billions of records."),(0,r.kt)("li",{parentName:"ul"},"When your application needs to perform online queries at millisecond timescales, and support CPU-efficient ad-hoc queries.")),(0,r.kt)("h3",{id:"challenges-with-the-existing-traditional-databases"},"Challenges with the existing traditional databases"),(0,r.kt)("p",null,"You might find numerous solutions that still store time-series data in a relational database, but they\u2019re quite inefficient and come with their own set of drawbacks. A typical time-series database is usually built to only manage time-series data, hence one of the challenges it faces is with use cases that involve some sort of computation on top of time-series data. One good example could be capturing a live video feed in a time-series database. If you want to run an AI model for face recognition, you would have to extract the time-series data, apply some sort of data transformation and then do computation.\nRelational databases carry the overhead of locking and synchronization that aren\u2019t required for the immutable time-series data. This results in slower-than-required performance for both ingest and queries. When scaling out, it also means investing in additional compute resources. These databases enforce a rigid structure for labels and can\u2019t accommodate unstructured data. They also require scheduled jobs for cleaning up old data. Beyond the time-series use case, these databases are also used for other use cases, which means overuse of running time-series queries may affect other workloads."),(0,r.kt)("h3",{id:"what-is-redistimeseries"},"What is RedisTimeSeries?"),(0,r.kt)("p",null,"RedisTimeSeries is a purpose-built time-series database that addresses the needs of handling time-series data. It removes the limitations enforced by relational databases and enables you to collect, manage, and deliver time-series data at scale. As an in-memory database, RedisTimeSeries can ingest over 500,000 records per second on a standard node. Our benchmarks show that you can ingest over 11.5 million records per second with a cluster of 16 Redis shards."),(0,r.kt)("p",null,"RedisTimeSeries is resource-efficient. With RedisTimeSeries, you can add rules to compact data by downsampling. For example, if you\u2019ve collected more than one billion data points in a day, you could aggregate the data by every minute in order to downsample it, thereby reducing the dataset size to 1,440 data points (24 ","*"," 60 = 1,440). You can also set data retention policies and expire the data by time when you don\u2019t need them anymore. RedisTimeSeries allows you to aggregate data by average, minimum, maximum, sum, count, range, first, and last. You can run over 100,000 aggregation queries per second with sub-millisecond latency. You can also perform reverse lookups on the labels in a specific time range."),(0,r.kt)("h3",{id:"notables-features-of-redistimeseries-includes"},"Notables features of RedisTimeseries includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"High volume inserts, low latency reads"),(0,r.kt)("li",{parentName:"ul"},"Query by start time and end-time"),(0,r.kt)("li",{parentName:"ul"},"Aggregated queries (Min, Max, Avg, Sum, Range, Count, First, Last, STD.P, STD.S, Var.P, Var.S) for any time bucket"),(0,r.kt)("li",{parentName:"ul"},"Configurable maximum retention period"),(0,r.kt)("li",{parentName:"ul"},"Downsampling/Compaction - automatically updated aggregate time series"),(0,r.kt)("li",{parentName:"ul"},"Secondary index - each time series has labels (field value pairs) which will allows to query by labels")),(0,r.kt)("h3",{id:"why-prometheus"},"Why Prometheus?"),(0,r.kt)("p",null,"Prometheus is an open-source systems monitoring and alerting toolkit. It collects and stores its metrics as time series data, i.e. metrics information. The metrics are numeric measurements in a time series, meaning changes recorded over time. These metrics are stored with the timestamp at which it was recorded, alongside optional key-value pairs called labels. Metrics play an important role in understanding why your application is working in a certain way."),(0,r.kt)("h3",{id:"prometheus-remote-storage-adapter-for-redistimeseries"},"Prometheus remote storage adapter for RedisTimeSeries"),(0,r.kt)("p",null,"In the RedisTimeSeries organization you can find projects that help you integrate RedisTimeSeries with other tools, including Prometheus and Grafana. The Prometheus remote storage adapter for RedisTimeSeries is available and the project is hosted over at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RedisTimeSeries/prometheus-redistimeseries-adapter"},"https://github.com/RedisTimeSeries/prometheus-redistimeseries-adapter"),". It\u2019s basically a read/write adapter to use RedisTimeSeries as a backend database. RedisTimeSeries Adapter receives Prometheus metrics via the remote write, and writes to Redis with the RedisTimeSeries module."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install GIT"),(0,r.kt)("li",{parentName:"ul"},"Install Docker"),(0,r.kt)("li",{parentName:"ul"},"Install Docker Compose")),(0,r.kt)("h3",{id:"step-1-clone-the-repository"},"Step 1. Clone the repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," git clone https://github.com/RedisTimeSeries/prometheus-redistimeseries-adapter\n")),(0,r.kt)("h3",{id:"step-2-examining-the-docker-compose-file"},"Step 2. Examining the Docker Compose File"),(0,r.kt)("p",null,"This Docker compose defines 4 services -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prometheus"),(0,r.kt)("li",{parentName:"ol"},"Adapter"),(0,r.kt)("li",{parentName:"ol"},"Grafana"),(0,r.kt)("li",{parentName:"ol"},"Redis")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},' version: \'3\'\n services:\n   prometheus:\n     image: "prom/prometheus:v2.8.0"\n     command: ["--config.file=/prometheus.yml"]\n     volumes:\n       - ./prometheus.yaml:/prometheus.yml\n     ports:\n       - 9090:9090\n  adapter:\n    image: "redislabs/prometheus-redistimeseries-adapter:master"\n    command: ["-redis-address", "redis:6379", "-web.listen-address", "0.0.0.0:9201"]\n  redis:\n    image: "redislabs/redistimeseries:edge"\n    ports:\n      - "6379:6379"\n  grafana:\n    build: ./grafana/\n    ports:\n      - "3000:3000"\n')),(0,r.kt)("h4",{id:"prometheus"},"Prometheus"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," service directly uses an image \u201cprom/prometheus\u201d that\u2019s pulled from Docker Hub. It then binds the container and the host machine to the exposed port, 9090. The prometheus configuration file is accessed by mounting the volume on the host and container."),(0,r.kt)("h4",{id:"storage-adapter"},"Storage Adapter"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"adapter")," service uses an image \u201c",(0,r.kt)("inlineCode",{parentName:"p"},"redislabs/prometheus-redistimeseries-adapter:master"),"\u201d that\u2019s pulled from Docker Hub. Sets the default command for the container: ",(0,r.kt)("inlineCode",{parentName:"p"},'-redis-address", "redis:6379 and listen to the address 0.0.0.0:9201. ')),(0,r.kt)("h4",{id:"redis"},"Redis"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Redis")," service directly uses an image \u201c",(0,r.kt)("inlineCode",{parentName:"p"},"redislabs/redistimeseries:edge"),"\u201d that\u2019s pulled from Docker Hub. It then binds the container and the host machine to the exposed port, ",(0,r.kt)("inlineCode",{parentName:"p"},"6379")),(0,r.kt)("h4",{id:"grafana"},"Grafana"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"grafana")," service uses an image that\u2019s built from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the current directory. It then binds the container and the host machine to the exposed port, ",(0,r.kt)("inlineCode",{parentName:"p"},"3000"),"."),(0,r.kt)("h3",{id:"step-3-run-the-docker-compose"},"Step 3. Run the Docker Compose"),(0,r.kt)("p",null,"Change directory to compose and execute the below CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," docker-compose up -d\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' ajeetraina@Ajeets-MacBook-Pro compose % docker-compose ps\n NAME                   COMMAND                  SERVICE             STATUS              PORTS\n compose-adapter-1      "/adapter/redis-ts-a\u2026"   adapter             running\n compose-grafana-1      "/run.sh"                grafana             running             0.0.0.0:3000->3000/tcp\n compose-prometheus-1   "/bin/prometheus --c\u2026"   prometheus          running             0.0.0.0:9090->9090/tcp\n compose-redis-1        "docker-entrypoint.s\u2026"   redis               running             0.0.0.0:6379->6379/tcp\n')),(0,r.kt)("h3",{id:"step-4-accessing-the-grafana"},"Step 4. Accessing the Grafana"),(0,r.kt)("p",null,"Open http://hostIP:3000 to access the Grafana dashboard. The default username and password is admin/admin."),(0,r.kt)("h3",{id:"step-5-add-prometheus-data-source"},"Step 5. Add Prometheus Data Source"),(0,r.kt)("p",null,"In the left sidebar, you will see the \u201cConfiguration\u201d option. Select \u201cData Source\u201d and choose Prometheus."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:a(6388).Z,width:"1234",height:"954"})),(0,r.kt)("p",null,"Click \u201cSave and Test\u201d."),(0,r.kt)("h3",{id:"step-6-importing-prometheus-data-source"},"Step 6. Importing Prometheus Data Source"),(0,r.kt)("p",null,"Click on \u201cImport\u201d for all the Prometheus dashboards."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:a(22514).Z,width:"1238",height:"332"})),(0,r.kt)("h3",{id:"step-7-adding-redis-datasource"},"Step 7. Adding Redis Datasource"),(0,r.kt)("p",null,"Again, click on \u201cData Sources\u201d and add Redis."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:a(10048).Z,width:"1228",height:"1468"})),(0,r.kt)("p",null,'Click "Import".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:a(64313).Z,width:"1248",height:"334"})),(0,r.kt)("h3",{id:"step-8-running-the-sensor-script"},"Step 8. Running the Sensor Script"),(0,r.kt)("p",null,"It\u2019s time to test drive a few demo scripts built by the Redis team. To start with, clone the below repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," git clone https://github.com/RedisTimeSeries/prometheus-demos\n")),(0,r.kt)("p",null,"This repo contains a set of basic demoes showcasing the integration of RedisTimeSeries with Prometheus and Grafana. Let\u2019s pick up a sensor script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," python3 weather_station/sensors.py\n")),(0,r.kt)("p",null,"This script will add random measurements for temperature and humidity for a number of sensors."),(0,r.kt)("p",null,"Go to \u201cAdd Panel\u201d on the top right corner of the Grafana dashboard and start adding temperature and humidity values."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:a(83965).Z,width:"1240",height:"914"})),(0,r.kt)("h3",{id:"step-9-accessing-prometheus-dashboard"},"Step 9. Accessing Prometheus Dashboard"),(0,r.kt)("p",null,"Open up ",(0,r.kt)("a",{parentName:"p",href:"https://HOSTIP:9090"},"https://HOSTIP:9090")," to access Prometheus dashboard for the sensor values without any further configuration."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:a(25462).Z,width:"1248",height:"478"})),(0,r.kt)("h3",{id:"further-references"},"Further References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RedisTimeSeries/prometheus-redistimeseries-adapter"},"Prometheus remote storage adapter for RedisTimeSeries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/storage/#remote-storage-integrations"},"Remote Storage Integration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RedisTimeSeries/prometheus-demos"},"RedisTimeSeries Demos"))),(0,r.kt)("h2",{id:""}),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}u.isMDXComponent=!0},6388:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/image1-bab05659cae640beaeb6f604dabf4e44.png"},22514:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/image2-10a9b72a6b3597691a220205dcf18595.png"},10048:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/image_3-285fc4cfb3bfcccb558dc455c5850105.png"},64313:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/image_4-60b4ccc9309bb344408ba935aa028d08.png"},83965:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/image_7-2e061ed4b7ecd857a48684b321033656.png"},25462:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/image_8-50413c6d320fe3eca173d75db7c84e11.png"},55689:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/prometheus-aa354720e8c5c1f6c3bf1efc0f66661f.png"}}]);