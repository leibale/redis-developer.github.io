"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4968],{85162:function(e,t,n){n.d(t,{Z:function(){return l}});var s=n(67294),a=n(86010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return s.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var s=n(87462),a=n(67294),i=n(86010),l=n(72389),r=n(67392),o=n(7094),c=n(12466),d="tabList__CuJ",u="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,h=e.defaultValue,g=e.values,m=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,r.l)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),_=w.tabGroupChoices,N=w.setTabGroupChoices,R=(0,a.useState)(y),S=R[0],Z=R[1],C=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var M=_[m];null!=M&&M!==S&&k.some((function(e){return e.value===M}))&&Z(M)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),s=k[n].value;s!==S&&(I(t),Z(s),null!=m&&N(m,String(s)))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var s,a=C.indexOf(e.currentTarget)+1;n=null!=(s=C[a])?s:C[0];break;case"ArrowLeft":var i,l=C.indexOf(e.currentTarget)-1;n=null!=(i=C[l])?i:C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,s.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return C.push(e)},onKeyDown:T,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function h(e){var t=(0,l.Z)();return a.createElement(p,(0,s.Z)({key:String(t)},e))}},1203:function(e,t,n){n.d(t,{Z:function(){return g}});var s=n(67294),a=n(3905),i=n(48811),l="riContainer_bco2",r="riDescriptionShort_E27B",o="riDetail_wzFs",c="riIcon_yDou",d="riTitle_x6vI",u="riDescription_RDnu",p="riMore_apRP",h=n(86010),g=function(e){var t=s.useState(!1),n=t[0],g=t[1];return s.createElement("a",{href:e.page,className:l},s.createElement("div",{className:r},s.createElement("div",{className:c},s.createElement("span",{className:"fe fe-zap"})),s.createElement("div",{className:o},s.createElement("div",{className:d},s.createElement("a",{href:e.page},e.title)),s.createElement("div",{className:u},e.description,s.Children.count(e.children)>0&&s.createElement("span",{className:(0,h.Z)(p,"fe","fe-more-horizontal"),onClick:function(){return g(!n)}})))),n&&s.createElement("div",{className:"ri-description-long"},s.createElement(a.Zo,{components:i.Z},e.children)))}},23089:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var s=n(87462),a=n(63366),i=(n(67294),n(3905)),l=(n(65488),n(85162),n(44996),n(1203),["components"]),r={id:"index-cluster",title:"Manage Your Redis Cluster using RedisInsight Cluster Management Tool",sidebar_label:"Manage Your Redis Cluster using RedisInsight Cluster Management Tool",slug:"/explore/redisinsight/cluster",authors:["ajeet"]},o=void 0,c={unversionedId:"explore/redisinsight/cluster/index-cluster",id:"explore/redisinsight/cluster/index-cluster",title:"Manage Your Redis Cluster using RedisInsight Cluster Management Tool",description:"A full-featured desktop GUI client, RedisInsight is an essential tool for Redis developers. It is a lightweight multi-platform management visualization tool that helps you design, develop, and optimize your application capabilities in a single easy-to-use environment. RedisInsight not just makes it easier to interact with your databases and manage your data, but also helps in managing Redis Cluster with ease.",source:"@site/docs/explore/redisinsight/cluster/index-cluster.mdx",sourceDirName:"explore/redisinsight/cluster",slug:"/explore/redisinsight/cluster",permalink:"/explore/redisinsight/cluster",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/cluster/index-cluster.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-cluster",title:"Manage Your Redis Cluster using RedisInsight Cluster Management Tool",sidebar_label:"Manage Your Redis Cluster using RedisInsight Cluster Management Tool",slug:"/explore/redisinsight/cluster",authors:["ajeet"]},sidebar:"docs",previous:{title:"Optimize & Analyze Redis using RedisInsight Memory Analyzer Tool",permalink:"/explore/redisinsight/memoryanalyzer"},next:{title:"Use Redis Streams Consumer Groups with RedisInsight",permalink:"/explore/redisinsight/streams"}},d={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1. Install Redis from source",id:"step-1-install-redis-from-source",level:2},{value:"Step 2: Executing the create-cluster script",id:"step-2-executing-the-create-cluster-script",level:2},{value:"Step 3. Access Redis Instance",id:"step-3-access-redis-instance",level:2},{value:"Step 4. Verify the cluster nodes",id:"step-4-verify-the-cluster-nodes",level:2},{value:"Step 5. Set Protected mode off",id:"step-5-set-protected-mode-off",level:2},{value:"Step 6: Download RedisInsight",id:"step-6-download-redisinsight",level:2},{value:"Step 7. Select the seed nodes of your cluster",id:"step-7-select-the-seed-nodes-of-your-cluster",level:2},{value:"Step 8. Choose the database",id:"step-8-choose-the-database",level:2},{value:"Step 9. Click &quot;Cluster Management&quot;",id:"step-9-click-cluster-management",level:2},{value:"Step 10. Choose &quot;Master Layout View&quot;",id:"step-10-choose-master-layout-view",level:2},{value:"Step 11. Resharding",id:"step-11-resharding",level:2},{value:"Step 12. Viewing Physical Layout",id:"step-12-viewing-physical-layout",level:2},{value:"Step 13. Adding keys Manually",id:"step-13-adding-keys-manually",level:2},{value:"Step 14. Cyclic redundancy checkpoint",id:"step-14-cyclic-redundancy-checkpoint",level:2},{value:"Step 15. Adding a New Node",id:"step-15-adding-a-new-node",level:2},{value:"Step 16. Make Replica Of",id:"step-16-make-replica-of",level:2},{value:"Step 17. Deleting a Node",id:"step-17-deleting-a-node",level:2},{value:"Step 18. Removing the node from the Cluster",id:"step-18-removing-the-node-from-the-cluster",level:2},{value:"Step 19. Failover",id:"step-19-failover",level:2},{value:"Addition Links",id:"addition-links",level:2}],p={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A full-featured desktop GUI client, RedisInsight is an essential tool for Redis developers. It is a lightweight multi-platform management visualization tool that helps you design, develop, and optimize your application capabilities in a single easy-to-use environment. RedisInsight not just makes it easier to interact with your databases and manage your data, but also helps in managing Redis Cluster with ease."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Redis Cluster is an active-passive cluster implementation that consists of master and replicas nodes.\nThere are two kinds of nodes: master and replicas nodes. To get started with Redis Cluster, follow the below steps to build 3 Master and 3 Replicas."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please Note: In Redis, slave nodes are generally called replicas as they hold the replicated slots that their masters have."))),(0,i.kt)("h2",{id:"step-1-install-redis-from-source"},"Step 1. Install Redis from source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/create/from-source/"},"Follow this link")," to build Redis from source in your local system."),(0,i.kt)("h2",{id:"step-2-executing-the-create-cluster-script"},"Step 2: Executing the create-cluster script"),(0,i.kt)("p",null,"By default, if you compile Redis from source, you will find a simple bash script called create-cluster under /utils/ directory.\nIn order to start a 6 nodes cluster with 3 masters and 3 replicas, just type the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," cd /utils/create-cluster\n ./create-cluster start\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," Starting 30001\n Starting 30002\n Starting 30003\n Starting 30004\n Starting 30005\n Starting 30006\n")),(0,i.kt)("h2",{id:"step-3-access-redis-instance"},"Step 3. Access Redis Instance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," redis-cli -c -p 30001\n 127.0.0.1:30001> set foo bar\n -> Redirected to slot [12182] located at 127.0.0.1:30003\n OK\n 127.0.0.1:30003>\n")),(0,i.kt)("h2",{id:"step-4-verify-the-cluster-nodes"},"Step 4. Verify the cluster nodes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," cluster nodes\n b37c153b7cb63a863b51fa08bdde46bfda9c6a98 127.0.0.1:30005@40005 slave 3e85f061bebd9b566e1cbf7f03cbe3e1859babbc 0 1620304753134 3 connected\n 8a1a0ba49e1845feff5314fbb8b73a2ec99e3647 127.0.0.1:30001@40001 master - 0 1620304753033 1 connected 0-5460\n bd7326d7b907a04214372fe41189e41763a1e1df 127.0.0.1:30006@40006 slave 8a1a0ba49e1845feff5314fbb8b73a2ec99e3647 0 1620304753033 1 connected\n 3e85f061bebd9b566e1cbf7f03cbe3e1859babbc 127.0.0.1:30003@40003 myself,master - 0 1620304753000 3 connected 10923-16383\n 67bbe43901031fa4bfe4cee6105d284f4fe7733b 127.0.0.1:30002@40002 master - 0 1620304753033 2 connected 5461-10922\n 0e3fb1de10b722458c959b35f1468275c34ba49f 127.0.0.1:30004@40004 slave 67bbe43901031fa4bfe4cee6105d284f4fe7733b 0 1620304753134 2 connected\n")),(0,i.kt)("h2",{id:"step-5-set-protected-mode-off"},"Step 5. Set Protected mode off"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," redis-cli -c -p 30001\n 127.0.0.1:30001> CONFIG SET protected-mode no\n OK\n 127.0.0.1:30001> exit\n")),(0,i.kt)("h2",{id:"step-6-download-redisinsight"},"Step 6: Download RedisInsight"),(0,i.kt)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"Click this link ")," to access a form that allows you to select the operating system of your choice."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"My Image",src:n(54892).Z,width:"1464",height:"1256"})),(0,i.kt)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),(0,i.kt)("p",null,'Select "Connect to a Redis database"\n',(0,i.kt)("img",{alt:"My Image",src:n(64383).Z,width:"1790",height:"838"})),(0,i.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password. Then click \u201cADD REDIS DATABASE\u201d."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(45480).Z,width:"512",height:"286"})),(0,i.kt)("p",null,"Enter the details - host IP, port and name of the database of your choice."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(31346).Z,width:"1360",height:"976"})),(0,i.kt)("h2",{id:"step-7-select-the-seed-nodes-of-your-cluster"},"Step 7. Select the seed nodes of your cluster"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(46995).Z,width:"1370",height:"690"})),(0,i.kt)("h2",{id:"step-8-choose-the-database"},"Step 8. Choose the database"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(52470).Z,width:"1600",height:"907"})),(0,i.kt)("h2",{id:"step-9-click-cluster-management"},'Step 9. Click "Cluster Management"'),(0,i.kt)("p",null,"On the left menu of the RedisInsight, click 'Cluster Management' option to check the cluster health and cluster nodes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(93071).Z,width:"1600",height:"985"})),(0,i.kt)("h2",{id:"step-10-choose-master-layout-view"},'Step 10. Choose "Master Layout View"'),(0,i.kt)("p",null,"This view only contains information about the masters present in the Redis Cluster. The information present is - slot ranges, host, port and few metrics gathered from redis INFO Command."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(65607).Z,width:"1600",height:"1164"})),(0,i.kt)("p",null,"Cluster Management comes with three different views to analyze your cluster architecture(as shown above)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Master Layout - This view only contains information about the masters present in the Redis Cluster. The information present is - slot ranges, host, port and few metrics gathered from redis INFO Command."),(0,i.kt)("li",{parentName:"ul"},"Master-Replica Layout - This view contains masters along with their replicas. This view contains information about slots ranges, host, port, etc for both master and replicas."),(0,i.kt)("li",{parentName:"ul"},"Physical Layout - This view gives you a representation of your server i.e. it groups all nodes according to the physical server they reside in.")),(0,i.kt)("h2",{id:"step-11-resharding"},"Step 11. Resharding"),(0,i.kt)("p",null,"Resharding basically means to move hash slots from a set of nodes to another set of nodes, and like cluster creation it is accomplished using the redis-cli utility."),(0,i.kt)("p",null,"Typically, to start a resharding, you pass \u201c--cluster reshard\u201d option to the redis client CLI as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," redis-cli --cluster reshard 127.0.0.1:7000\n")),(0,i.kt)("p",null,"You only need to specify a single node, redis-cli will find the other nodes automatically."),(0,i.kt)("p",null,"With RedisInsight, it can be performed over the GUI. Open Cluster Management > Manual Resharding option > Destination node > Source Nodes and enter the slot range.\nBefore we perform resharding, let us try to insert real-time keys into the cluster. You need to have ruby installed on your system"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'\n require \'./cluster\'\n\n if ARGV.length != 2\n   startup_nodes = [\n       {:host => "127.0.0.1", :port => 30001},\n       {:host => "127.0.0.1", :port => 30003}\n    ]\n  else\n   startup_nodes = [\n       {:host => ARGV[0], :port => ARGV[1].to_i}\n   ]\n  end\n\n rc = RedisCluster.new(startup_nodes,32,:timeout => 0.1)\n\n last = false\n\n while not last\n   begin\n       last = rc.get("__last__")\n       last = 0 if !last\n   rescue => e\n       puts "error #{e.to_s}"\n       sleep 1\n   end\n end\n\n ((last.to_i+1)..1000000000).each{|x|\n   begin\n       rc.set("foo#{x}",x)\n       puts rc.get("foo#{x}")\n       rc.set("__last__",x)\n   rescue => e\n       puts "error #{e.to_s}"\n   end\n   sleep 0.1\n }\n')),(0,i.kt)("p",null,"Save the above content in a file called testing.rb as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," ruby testing.rb\n")),(0,i.kt)("p",null,"The above script will insert keys into the Redis cluster."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(45414).Z,width:"1594",height:"824"})),(0,i.kt)("p",null,"You can check the real-time logs via MONITOR command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\n 1620718356.267791 [0 127.0.0.1:56056] "set" "foo2124" "2124"\n 1620718356.268153 [0 127.0.0.1:56056] "get" "foo2124"\n 1620718356.683092 [0 127.0.0.1:56056] "set" "foo2128" "2128"\n 1620718356.683403 [0 127.0.0.1:56056] "get" "foo2128"\n 1620718357.208191 [0 127.0.0.1:56056] "set" "foo2133" "2133"\n 1620718357.208636 [0 127.0.0.1:56056] "get" "foo2133"\n 1620718357.625524 [0 127.0.0.1:56056] "set" "foo2137" "2137"\n 1620718357.625961 [0 127.0.0.1:56056] "get" "foo2137"\n 1620718358.248578 [0 127.0.0.1:56056] "set" "foo2143" "2143"\n')),(0,i.kt)("p",null,'Let us perform a manual sharding. Select "Manual Sharding" under Actions tab.\nIt will ask to select destination and source nodes. It allows to enter slot range too as shown below.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(58346).Z,width:"1208",height:"740"})),(0,i.kt)("p",null,'Click "Next".'),(0,i.kt)("p",null,"The resharding process begins instantly."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(69394).Z,width:"1600",height:"759"})),(0,i.kt)("p",null,"Finally, you can view the changes under the Cluster Management section as shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(30989).Z,width:"1518",height:"1600"})),(0,i.kt)("h2",{id:"step-12-viewing-physical-layout"},"Step 12. Viewing Physical Layout"),(0,i.kt)("p",null,"This view gives you a representation of your Cluster nodes i.e. it groups all nodes according to the physical server they reside in."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(54149).Z,width:"1558",height:"1108"})),(0,i.kt)("h2",{id:"step-13-adding-keys-manually"},"Step 13. Adding keys Manually"),(0,i.kt)("p",null,"Let us try to add a key against the cluster nodes"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(69566).Z,width:"1138",height:"1486"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\n Connecting...\n\n Pinging Redis server on 127.0.0.1:30003...\n Connected.\n Ready to execute commands.\n\n >> set hello world\n\n -> Redirected to slot [866] located at 127.0.0.1:30001\n"OK"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\n >> set lang python\n\n 127.0.0.1:30001 [master]\n "OK"\n\n 127.0.0.1:30003 [master]\n (error) MOVED 3807 127.0.0.1:30001\n\n 127.0.0.1:30002 [master]\n (error) MOVED 3807 127.0.0.1:30001\n')),(0,i.kt)("p",null,"Once you set up a cluster, a cluster will have a sharding."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," > set a1 100\n")),(0,i.kt)("p",null,"Once you add a key to Redis, hashes slot is calculated.Redis calculates the slot where the key is going to land by taking CRC16 of the key modulo 16384."),(0,i.kt)("h2",{id:"step-14-cyclic-redundancy-checkpoint"},"Step 14. Cyclic redundancy checkpoint"),(0,i.kt)("p",null,"By Finding the hashes slot for the keys, your data will automatically be spread across the nodes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(56303).Z,width:"1320",height:"1600"})),(0,i.kt)("p",null,"In a Redis cluster, there are 16,384 slots available. The first master node in a cluster contain 0 to 5500, 5501 to 11000 and 3rd 11001 to 16,385"),(0,i.kt)("h2",{id:"step-15-adding-a-new-node"},"Step 15. Adding a New Node"),(0,i.kt)("p",null,"Let us add a new node in the Redis configuration file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  % tree\n .\n \u251c\u2500\u2500 30010\n \u2502   \u251c\u2500\u2500 appendonly.aof\n \u2502   \u251c\u2500\u2500 dump.rdb\n \u2502   \u251c\u2500\u2500 nodes.conf\n \u2502   \u2514\u2500\u2500 redis.conf\n \u2514\u2500\u2500 redis.conf\n\n 1 directory, 5 files\n\n % cat 30010/redis.conf\n port 30011\n cluster-enabled yes\n cluster-config-file nodes.conf\n cluster-node-timeout 5000\n appendonly yes\n")),(0,i.kt)("p",null,"It's time to run the new Redis instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," redis-server ./redis.conf\n 34168:C 10 May 2021 15:49:04.251 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo\n 34168:C 10 May 2021 15:49:04.251 # Redis version=6.1.241, bits=64, commit=00000000, modified=0, pid=34168, just started\n 34168:C 10 May 2021 15:49:04.251 # Configuration loaded\n 34168:M 10 May 2021 15:49:04.252 * Increased maximum number of open files to 10032 (it was originally set to 2560).\n 34168:M 10 May 2021 15:49:04.252 * monotonic clock: POSIX clock_gettime\n 34168:M 10 May 2021 15:49:04.253 * No cluster configuration found, I'm d3c15d55a60a4cdf9c1f4de8b0c637dda3500ca0\n                _._\n           _.-``__ ''-._\n      _.-``    `.  `_.  ''-._           Redis 6.1.241 (00000000/0) 64 bit\n  .-`` .-```.  ```\\/    _.,_ ''-._\n (    '      ,       .-`  | `,    )     Running in cluster mode\n |`-._`-...-` __...-.``-._|'` _.-'|     Port: 30010\n |    `-._   `._    /     _.-'    |     PID: 34168\n  `-._    `-._  `-./  _.-'    _.-'\n |`-._`-._    `-.__.-'    _.-'_.-'|\n |    `-._`-._        _.-'_.-'    |           http://redis.io\n  `-._    `-._`-.__.-'_.-'    _.-'\n |`-._`-._    `-.__.-'    _.-'_.-'|\n |    `-._`-._        _.-'_.-'    |\n  `-._    `-._`-.__.-'_.-'    _.-'\n      `-._    `-.__.-'    _.-'\n          `-._        _.-'\n              `-.__.-'\n\n 34168:M 10 May 2021 15:49:04.254 # Server initialized\n 34168:M 10 May 2021 15:49:04.254 * Ready to accept connections\n")),(0,i.kt)("p",null,"Enter the host and port details of the new node:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(34851).Z,width:"1218",height:"582"})),(0,i.kt)("p",null,"Now, you can view the nodes layout as shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(34851).Z,width:"1218",height:"582"})),(0,i.kt)("p",null,"You can also view it via CLI on your local system if you want to verify the new node entry."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," redis-cli -p 30001\n127.0.0.1:30001> cluster nodes\n1a959116fb6c32726b8513668149c8a27dc61613 127.0.0.1:30006@40006 replicas 7ac14c8345df91640bc7174de903f0dd8683a1d2 0 1620642235140 7 connected\n5d2ce263fb025d38c2d7626d48422d0e28280aa7 127.0.0.1:30004@40004 replicas 6f0096be6248834c0f3237192020d12ff6496f74 0 1620642235343 1 connected\n7ac14c8345df91640bc7174de903f0dd8683a1d2 127.0.0.1:30003@40003 master - 0 1620642235039 7 connected 0-1000 10923-16383\ne0daeb42432323b587b281f26b26b90e9e6f2482 127.0.0.1:30005@40005 replicas 011209ddc3577e8ec15efbcb12e38a405bda20f9 0 1620642235241 2 connected\n6f0096be6248834c0f3237192020d12ff6496f74 127.0.0.1:30001@40001 myself,master - 0 1620642235000 1 connected 1001-5460\n011209ddc3577e8ec15efbcb12e38a405bda20f9 127.0.0.1:30002@40002 master - 0 1620642235039 2 connected 5461-10922\nd3c15d55a60a4cdf9c1f4de8b0c637dda3500ca0 127.0.0.1:30010@40010 master - 0 1620642235140 0 connected\n127.0.0.1:30001>\n")),(0,i.kt)("h2",{id:"step-16-make-replica-of"},"Step 16. Make Replica Of"),(0,i.kt)("p",null,"Whenever you add a new node, Redis allows you to rebalance your cluster as shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(58519).Z,width:"1216",height:"306"})),(0,i.kt)("p",null,"You can select the master that will be replicas of the specific node:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(94371).Z,width:"1600",height:"437"})),(0,i.kt)("p",null,'Choose the right master node of your choice and click "Proceed".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(57120).Z,width:"1212",height:"728"}),"\n",(0,i.kt)("img",{alt:"cluster",src:n(28674).Z,width:"1208",height:"346"})),(0,i.kt)("h2",{id:"step-17-deleting-a-node"},"Step 17. Deleting a Node"),(0,i.kt)("p",null,"To delete a node, select \u201cMaster-Replica Nodes\u201d option and you will see all the replicas nodes"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(82125).Z,width:"1600",height:"745"}),"\n",(0,i.kt)("img",{alt:"cluster",src:n(64099).Z,width:"1474",height:"1096"}),"\n",(0,i.kt)("img",{alt:"cluster",src:n(87870).Z,width:"1460",height:"864"})),(0,i.kt)("h2",{id:"step-18-removing-the-node-from-the-cluster"},"Step 18. Removing the node from the Cluster"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(55542).Z,width:"1218",height:"296"})),(0,i.kt)("h2",{id:"step-19-failover"},"Step 19. Failover"),(0,i.kt)("p",null,"In order to upgrade the Redis process of one of the master nodes it is a good idea to failover it in order to turn it into a replicas with minimal impact on availability."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(78043).Z,width:"1600",height:"1307"})),(0,i.kt)("p",null,"Also, RedisInsight Cluster Management tool allows you to rebalance your cluster by manually defining the slot coverage as shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(6043).Z,width:"1212",height:"696"}),"\n",(0,i.kt)("img",{alt:"cluster",src:n(81732).Z,width:"1600",height:"1187"})),(0,i.kt)("h2",{id:"addition-links"},"Addition Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisinsight/slowlog"},"Slowlog Configuration using RedisInsight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisinsight/memoryanalyzer"},"Memory Analysis using RedisInsight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisinsight/browser"},"Visualize Redis database keys using RedisInsight Browser Tool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/explore/redisinsight/streams"},"Using Redis Streams with RedisInsight"))))}h.isMDXComponent=!0},58346:function(e,t,n){t.Z=n.p+"assets/images/cluster10-1214c064a1a24b851ed6376b7771895f.png"},69394:function(e,t,n){t.Z=n.p+"assets/images/cluster11-c82be4e47c32253b9f9765ab23a95527.png"},54149:function(e,t,n){t.Z=n.p+"assets/images/cluster13-28a95e66fe334ac795e8ec7c17b59054.png"},30989:function(e,t,n){t.Z=n.p+"assets/images/cluster14-0c7123e50955d1667acb9876cb33a36a.png"},69566:function(e,t,n){t.Z=n.p+"assets/images/cluster19-e9a456cdb890372bddaab0e39e7a4644.png"},45480:function(e,t,n){t.Z=n.p+"assets/images/cluster2-4bcb26fe20e3ee6a0cf2d8bba17b4eb6.png"},56303:function(e,t,n){t.Z=n.p+"assets/images/cluster20-3402b2f4291b987c4332ed88ae75a728.png"},34851:function(e,t,n){t.Z=n.p+"assets/images/cluster21-d84ec01f260197f649ec09ff860269f4.png"},58519:function(e,t,n){t.Z=n.p+"assets/images/cluster22-49233ae74e96fe3dcfa61aa1daf47ee4.png"},94371:function(e,t,n){t.Z=n.p+"assets/images/cluster23-b7115ce1507140332bd54d8ee80c6958.png"},57120:function(e,t,n){t.Z=n.p+"assets/images/cluster24-f3154cea8b490c1e0bbccb4d6da1981a.png"},28674:function(e,t,n){t.Z=n.p+"assets/images/cluster25-7bdff59913d688966740dfb1bc9b169a.png"},82125:function(e,t,n){t.Z=n.p+"assets/images/cluster27-b58c5cc980dd19395feaf0894eff4cfc.png"},64099:function(e,t,n){t.Z=n.p+"assets/images/cluster28-91b9d7c92b957f357d17cf6a6e8d3928.png"},87870:function(e,t,n){t.Z=n.p+"assets/images/cluster29-32e5a5928dcda5063c71eb631cf7103b.png"},31346:function(e,t,n){t.Z=n.p+"assets/images/cluster3-8ec442689d3f82488ded585defb50d0b.png"},55542:function(e,t,n){t.Z=n.p+"assets/images/cluster30-5bcc8054e2ebd17b821ba6ac344d8414.png"},78043:function(e,t,n){t.Z=n.p+"assets/images/cluster31-109144a079dfb55948511df7ae166d5d.png"},6043:function(e,t,n){t.Z=n.p+"assets/images/cluster32-e6efc018e3a8e5988ddfd10c7e3d4984.png"},81732:function(e,t,n){t.Z=n.p+"assets/images/cluster33-4b4cf3d05715ad638b11115b9931672f.png"},46995:function(e,t,n){t.Z=n.p+"assets/images/cluster4-1207760451c42d4dff3d7907cdf1354b.png"},52470:function(e,t,n){t.Z=n.p+"assets/images/cluster5-b57cdf486280ffd0c7fee7579d124830.png"},93071:function(e,t,n){t.Z=n.p+"assets/images/cluster6-f3a3eb5428cdeb7d9febb2755797aab7.png"},65607:function(e,t,n){t.Z=n.p+"assets/images/cluster7-c52a5b8b16dbb0149ef3327aa0c60eb5.png"},45414:function(e,t,n){t.Z=n.p+"assets/images/cluster9-5ce237df5c2dae3baea9f7afab7968d6.png"},64383:function(e,t,n){t.Z=n.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},54892:function(e,t,n){t.Z=n.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"}}]);