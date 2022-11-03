"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},81708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(44996);const l={id:"index-data-points-in-redis",title:"5.1 Data points in Redis",sidebar_label:"5.1 Data points in Redis",slug:"/operate/redis-at-scale/observability/data-points-in-redis",custom_edit_url:null},r=void 0,o={unversionedId:"operate/redis-at-scale/observability/data-points-in-redis/index-data-points-in-redis",id:"operate/redis-at-scale/observability/data-points-in-redis/index-data-points-in-redis",title:"5.1 Data points in Redis",description:"There are several Redis metrics that can be viewed through redis-cli.",source:"@site/docs/operate/redis-at-scale/observability/data-points-in-redis/index-data-points-in-redis.mdx",sourceDirName:"operate/redis-at-scale/observability/data-points-in-redis",slug:"/operate/redis-at-scale/observability/data-points-in-redis",permalink:"/operate/redis-at-scale/observability/data-points-in-redis",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"Jun 17, 2022",frontMatter:{id:"index-data-points-in-redis",title:"5.1 Data points in Redis",sidebar_label:"5.1 Data points in Redis",slug:"/operate/redis-at-scale/observability/data-points-in-redis",custom_edit_url:null},sidebar:"docs",previous:{title:"5.0 Introduction to Observability",permalink:"/operate/redis-at-scale/observability/introduction"},next:{title:"5.2 Getting Redis Statistics",permalink:"/operate/redis-at-scale/observability/exercise-1"}},s={},d=[{value:"Redis INFO command",id:"redis-info-command",level:2},{value:"Sections",id:"sections",level:2},{value:"Latency and stats data via redis-cli options",id:"latency-and-stats-data-via-redis-cli-options",level:2},{value:"Memory stats",id:"memory-stats",level:2},{value:"Latency Monitoring",id:"latency-monitoring",level:2},{value:"Monitoring Tools",id:"monitoring-tools",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are several Redis metrics that can be viewed through ",(0,i.kt)("inlineCode",{parentName:"p"},"redis-cli"),"."),(0,i.kt)("h2",{id:"redis-info-command"},"Redis INFO command"),(0,i.kt)("p",null,"Running the ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO")," command provides many of the metrics available in a single view."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> INFO\n# Server\nredis_version:6.0.1\nredis_git_sha1:00000000\nredis_git_dirty:0\nredis_build_id:e02d1d807e41d65\nredis_mode:standalone\nos:Linux 4.19.121-linuxkit x86_64\n\u2026\n")),(0,i.kt)("p",null,"There are several sections that can be pulled individually. For example, if you wanted to just get the ",(0,i.kt)("inlineCode",{parentName:"p"},"CLIENTS")," section you can pass that section as an argument to the ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> INFO CLIENTS\n# Clients\nconnected_clients:1\nclient_recent_max_input_buffer:2\nclient_recent_max_output_buffer:0\nblocked_clients:0\ntracking_clients:0\nclients_in_timeout_table:0\n")),(0,i.kt)("h2",{id:"sections"},"Sections"),(0,i.kt)("strong",null,"Server"),": the current Redis server info.",(0,i.kt)("p",null,"Metrics of note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"redis_version")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"process_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config_file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uptime_in_seconds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uptime_in_days"))),(0,i.kt)("hr",null),(0,i.kt)("strong",null,"Clients"),": available data on clients connected or failed connections.",(0,i.kt)("p",null,"Metrics of note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connected_clients")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blocked_clients"))),(0,i.kt)("hr",null),(0,i.kt)("strong",null,"Memory"),": memory usage and stats",(0,i.kt)("p",null,"Metrics of note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"used_memory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mem_fragmentation_ratio"))),(0,i.kt)("hr",null),(0,i.kt)("strong",null,"Persistence"),": RDB or AOF metrics",(0,i.kt)("p",null,"Metrics of note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rdb_last_save_time")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rdb_changes_since_last_save")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aof_rewrite_in_progress"))),(0,i.kt)("hr",null),(0,i.kt)("strong",null,"Stats"),": some general statistics",(0,i.kt)("p",null,"Metrics of note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyspace_hits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyspace_misses")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expired_keys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"evicted_keys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"instantaneous_ops_per_sec"))),(0,i.kt)("hr",null),(0,i.kt)("strong",null,"Replication"),": replication data including primary/replica identifiers and offsets",(0,i.kt)("p",null,"Metrics of note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"master_link_down_since")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connected_slaves")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"master_last_io_seconds_ago"))),(0,i.kt)("hr",null),(0,i.kt)("strong",null,"CPU"),": compute consumption stats",(0,i.kt)("p",null,"Metrics of note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"used_cpu_sys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"used_cpu_user"))),(0,i.kt)("hr",null),(0,i.kt)("strong",null,"Modules"),": data from any loaded modules",(0,i.kt)("p",null,"Metrics of note (per module):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"))),(0,i.kt)("hr",null),(0,i.kt)("strong",null,"Cluster"),": whether cluster is enabled",(0,i.kt)("p",null,"Metric of note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster_enabled"))),(0,i.kt)("hr",null),(0,i.kt)("strong",null,"Keyspace"),": keys and expiration data",(0,i.kt)("p",null,"Metrics of note (per db):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expires")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"avg_ttl"))),(0,i.kt)("p",null,"The output can be read from the results or piped into a file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> redis-cli INFO STATS > redis-info-stats\n")),(0,i.kt)("p",null,"This could be done at intervals and consumed by a local or third party monitoring service."),(0,i.kt)("p",null,"Some of the data returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO")," are going to be static.\xa0 For example the Redis version which won't change until an update is made.\xa0 Other data is dynamic, for ",(0,i.kt)("inlineCode",{parentName:"p"},"keyspace_hits \xf7 keyspace_misses"),". The latter could be taken to compute a hit ratio and observed as a long term metric. The replication section field ",(0,i.kt)("inlineCode",{parentName:"p"},"master_link_down_since")," could be a metric to connect an alert."),(0,i.kt)("p",null,"Some examples of possible alerts that could be setup for a given metric:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Metric"),(0,i.kt)("th",{parentName:"tr",align:null},"Example Alert"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"uptime_in_seconds")),(0,i.kt)("td",{parentName:"tr",align:null},"<"," 300 seconds: to ensure the server is staying up")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connected_clients")),(0,i.kt)("td",{parentName:"tr",align:null},"<"," minimum number of expected application connections")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"master_link_down_since")),(0,i.kt)("td",{parentName:"tr",align:null},"> 30 seconds: replication should be operational")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rdb_last_save_time")),(0,i.kt)("td",{parentName:"tr",align:null},"> maximum acceptable interval without taking a snapshot")))),(0,i.kt)("strong",null,"NOTE: This is not an exhaustive list, but just to give you an idea of how the metrics in INFO could be used."),(0,i.kt)("h2",{id:"latency-and-stats-data-via-redis-cli-options"},"Latency and stats data via redis-cli options"),(0,i.kt)("p",null,"The redis-cli client has some built-in options that allow you to pull some real-time latency and stats data."),(0,i.kt)("p",null,"Note: these are not available as commands from Redis but as options in redis-cli."),(0,i.kt)("strong",null,"Latency options:"),(0,i.kt)("p",null,"Continuously sample latency:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli --latency\nmin: 1, max: 17, avg: 4.03 (927 samples)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"raw")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," output flag can be added:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli --latency --csv\n1,4,1.94,78\n")),(0,i.kt)("p",null,"In order to sample for longer than one second you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"latency-history")," which has a default interval of 15 seconds but can be specified using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-i")," param."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli --latency-history -i 60\nmin: 1, max: 30, avg: 4.84 (328 samples)\n")),(0,i.kt)("p",null,"This can also be combined with the ",(0,i.kt)("inlineCode",{parentName:"p"},"csv")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"raw")," output format flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli --latency-history -i 60 --csv\n13,13,13.00,1\n5,13,9.00,2\n3,13,7.00,3\n3,13,6.00,4\n3,13,5.60,5\n2,13,5.00,6\n2,13,5.43,7\n2,13,5.62,8\n2,13,5.22,9\n2,13,5.00,10\n1,13,4.64,11\n\u2026\n")),(0,i.kt)("p",null,"Both of these could be piped to a file as well."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"latency-dist")," option shows latency as a spectrum. The default interval is one second but can be changed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-i")," param."),(0,i.kt)("img",{height:"50%",width:"50%",src:"https://s3.us-east-2.amazonaws.com/assets-university.redislabs.com/ru301/5.2/image2.png",alt:"Latency Distribution diagram"}),(0,i.kt)("strong",null,"Stats option:"),(0,i.kt)("p",null,"Get rolling stats from the server using the ",(0,i.kt)("inlineCode",{parentName:"p"},"stat")," flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli --stat\n------- data ------ --------------------- load -------------------- - child -\nkeys       mem      clients blocked requests            connections\n4          9.98M    51      0       8168035 (+0)        4132\n4          9.98M    51      0       8181542 (+13507)    4132\n4          9.98M    51      0       8196100 (+14558)    4132\n4          9.98M    51      0       8209794 (+13694)    4132\n4          9.98M    51      0       8223420 (+13626)    4132\n4          9.98M    51      0       8236624 (+13204)    4132\n4          9.98M    51      0       8251376 (+14752)    4132\n4          9.98M    51      0       8263417 (+12041)    4182\n4          9.98M    51      0       8276781 (+13364)    4182\n4          9.90M    51      0       8289693 (+12912)    4182\n")),(0,i.kt)("h2",{id:"memory-stats"},"Memory stats"),(0,i.kt)("p",null,"Redis includes a ",(0,i.kt)("inlineCode",{parentName:"p"},"MEMORY")," command that includes a subcommand to get stats."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> memory stats\n 1) "peak.allocated"\n 2) (integer) 11912984\n 3) "total.allocated"\n 4) (integer) 8379168\n 5) "startup.allocated"\n 6) (integer) 5292168\n 7) "replication.backlog"\n 8) (integer) 0\n 9) "clients.slaves"\n10) (integer) 0\n11) "clients.normal"\n12) (integer) 16986\n13) "aof.buffer"\n14) (integer) 0\n')),(0,i.kt)("p",null,"These values are available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO MEMORY")," command as well, but here they are returned in a typical Redis ",(0,i.kt)("inlineCode",{parentName:"p"},"RESP")," Array reply."),(0,i.kt)("p",null,"There is also a ",(0,i.kt)("inlineCode",{parentName:"p"},"LATENCY DOCTOR")," subcommand with an analysis report of the current memory metrics."),(0,i.kt)("h2",{id:"latency-monitoring"},"Latency Monitoring"),(0,i.kt)("p",null,"As we know Redis is fast and as a result is often used in very extreme scenarios where low latency is a must. Redis has a feature called Latency Monitoring which allows you to dig into possible latency issues. Latency monitoring is composed of the following conceptual parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Latency hooks that sample different latency sensitive code paths."),(0,i.kt)("li",{parentName:"ul"},"Time series recording of latency spikes split by different events."),(0,i.kt)("li",{parentName:"ul"},"A reporting engine to fetch raw data from the time series."),(0,i.kt)("li",{parentName:"ul"},"Analysis engine to provide human readable reports and hints according to the measurements.")),(0,i.kt)("p",null,"By default this feature is disabled because most of the time it is not needed. In order to enable it you can update the threshold time in milliseconds that you want to monitor in your Redis configuration. Events that take longer than the threshold will be logged as latency spikes. The threshold configuration should be set accordingly if the requirement is to identify all events blocking the server for a time of 10 milliseconds or more."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"latency-monitor-threshold 10\n")),(0,i.kt)("p",null,"If the debugging session is intended to be temporary the threshold can be set via redis-cli."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> CONFIG SET latency-monitor-threshold 10\n")),(0,i.kt)("p",null,"To disable the latency framework the threshold should be set back to 0."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> CONFIG SET latency-monitor-threshold 0\n")),(0,i.kt)("p",null,"The latency data can be viewed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"LATENCY")," command with it's subcommands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LATENCY LATEST")," - latest samples for all events"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LATENCY HISTORY")," - latest time series for a given event"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LATENCY RESET")," - resets the time series data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LATENCY GRAPH")," - renders an ASCII-art graph"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LATENCY DOCTOR")," - analysis report")),(0,i.kt)("p",null,"In order to make use of these commands you need to make yourself familiar with the different events that the latency monitoring framework is tracking. (taken from ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/topics/latency-monitor"},"https://redis.io/topics/latency-monitor"),'" )'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"command")),(0,i.kt)("td",{parentName:"tr",align:null},"regular commands")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fast-command")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"O(1)")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"O(log N)")," commands")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fork")),(0,i.kt)("td",{parentName:"tr",align:null},"the ",(0,i.kt)("inlineCode",{parentName:"td"},"fork(2)")," system call")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"comrdb-unlink-temp-file")),(0,i.kt)("td",{parentName:"tr",align:null},"the ",(0,i.kt)("inlineCode",{parentName:"td"},"unlink(2)")," system call")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"aof-write")),(0,i.kt)("td",{parentName:"tr",align:null},"writing to the AOF - a catchall event ",(0,i.kt)("inlineCode",{parentName:"td"},"fsync(2)")," system calls")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"aof-fsync-always")),(0,i.kt)("td",{parentName:"tr",align:null},"the ",(0,i.kt)("inlineCode",{parentName:"td"},"fsync(2)")," system call when invoked by the appendfsync allways policy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"aof-write-pending-fsync")),(0,i.kt)("td",{parentName:"tr",align:null},"the ",(0,i.kt)("inlineCode",{parentName:"td"},"fsync(2)")," system call when there are pending writes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"aof-write-active-child")),(0,i.kt)("td",{parentName:"tr",align:null},"the ",(0,i.kt)("inlineCode",{parentName:"td"},"fsync(2)")," system call when performed by a child process")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"aof-write-alone")),(0,i.kt)("td",{parentName:"tr",align:null},"the ",(0,i.kt)("inlineCode",{parentName:"td"},"fsync(2)")," system call when performed by the main process")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"aof-fstat")),(0,i.kt)("td",{parentName:"tr",align:null},"the ",(0,i.kt)("inlineCode",{parentName:"td"},"fstat(2)")," system call")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"aof-rename")),(0,i.kt)("td",{parentName:"tr",align:null},"the ",(0,i.kt)("inlineCode",{parentName:"td"},"rename(2)")," system call for renaming the temporary file after completing ",(0,i.kt)("inlineCode",{parentName:"td"},"BGREWRITEAOF"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"aof-rewrite-diff-write")),(0,i.kt)("td",{parentName:"tr",align:null},"writing the differences accumulated while performing ",(0,i.kt)("inlineCode",{parentName:"td"},"BGREWRITEAOF"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"active-defrag-cycle")),(0,i.kt)("td",{parentName:"tr",align:null},"the active defragmentation cycle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"expire-cycle")),(0,i.kt)("td",{parentName:"tr",align:null},"the expiration cycle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"eviction-cycle")),(0,i.kt)("td",{parentName:"tr",align:null},"the eviction cycle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"eviction-del")),(0,i.kt)("td",{parentName:"tr",align:null},"deletes during the eviction cycle")))),(0,i.kt)("p",null,"For example, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"LATENCY LATEST")," subcommand and you may see some data like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> latency latest\n1) 1) "command"\n   2) (integer) 1616372606\n   3) (integer) 600\n   4) (integer) 600\n2) 1) "fast-command"\n   2) (integer) 1616372434\n   3) (integer) 12\n   4) (integer) 12\n')),(0,i.kt)("p",null,"The results of this command provide the timestamp, latency and max latency for this event. Utilizing the events table above I can see we had latency spikes for a regular command with the latest and max latency of 600 MS while a O(1) or O(log N) command had a latency spike of 12 MS."),(0,i.kt)("p",null,"Some of the latency commands require a specific event be passed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> latency graph command\ncommand - high 600 ms, low 100 ms (all time high 600 ms)\n--------------------------------------------------------------------------------\n    _##\n   o|||\n  o||||\n_#|||||\n\n3222184\n05308ss\nsssss\n")),(0,i.kt)("p",null,"While the cost of enabling latency monitoring is near zero and memory requirements are very small it will raise your baseline memory usage so if you are getting the required performance out of Redis there is no need to leave this enabled."),(0,i.kt)("h2",{id:"monitoring-tools"},"Monitoring Tools"),(0,i.kt)("p",null,"There are many open source monitoring tools and services to visualize your Redis metrics - some of which also provide alerting capabilities."),(0,i.kt)("p",null,"One example of this is the ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/plugins/redis-datasource/"},"Redis Data Source for Grafana"),". It is a ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," plug-in that allows users to connect to the Redis database and build dashboards to easily observe Redis data. It provides an out-of-the-box predefined dashboard but also lets you build customized dashboards tuned to your specific needs."))}m.isMDXComponent=!0}}]);