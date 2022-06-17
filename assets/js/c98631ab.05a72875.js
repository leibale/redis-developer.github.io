"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[2536],{85162:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),i="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(87462),r=a(67294),i=a(86010),s=a(72389),o=a(67392),l=a(7094),p=a(12466),d="tabList__CuJ",c="tabItem_LNqP";function u(e){var t,a,s=e.lazy,u=e.block,h=e.defaultValue,m=e.values,g=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===h?h:null!=(t=null!=h?h:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:b[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,C=w.setTabGroupChoices,G=(0,r.useState)(k),R=G[0],E=G[1],z=[],A=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var T=N[g];null!=T&&T!==R&&v.some((function(e){return e.value===T}))&&E(T)}var P=function(e){var t=e.currentTarget,a=z.indexOf(t),n=v[a].value;n!==R&&(A(t),E(n),null!=g&&C(g,String(n)))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=z.indexOf(e.currentTarget)+1;a=null!=(n=z[r])?n:z[0];break;case"ArrowLeft":var i,s=z.indexOf(e.currentTarget)-1;a=null!=(i=z[s])?i:z[z.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},f)},v.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return z.push(e)},onKeyDown:x,onFocus:P,onClick:P},s,{className:(0,i.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":R===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(b.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function h(e){var t=(0,s.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},1203:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),r=a(3905),i=a(48811),s="riContainer_bco2",o="riDescriptionShort_E27B",l="riDetail_wzFs",p="riIcon_yDou",d="riTitle_x6vI",c="riDescription_RDnu",u="riMore_apRP",h=a(86010),m=function(e){var t=n.useState(!1),a=t[0],m=t[1];return n.createElement("a",{href:e.page,className:s},n.createElement("div",{className:o},n.createElement("div",{className:p},n.createElement("span",{className:"fe fe-zap"})),n.createElement("div",{className:l},n.createElement("div",{className:d},n.createElement("a",{href:e.page},e.title)),n.createElement("div",{className:c},e.description,n.Children.count(e.children)>0&&n.createElement("span",{className:(0,h.Z)(u,"fe","fe-more-horizontal"),onClick:function(){return m(!a)}})))),a&&n.createElement("div",{className:"ri-description-long"},n.createElement(r.Zo,{components:i.Z},e.children)))}},13287:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=(a(65488),a(85162),a(44996),a(1203),["components"]),o={id:"index-nlp",title:"Building a Pipeline for Natural Language Processing using RedisGears",sidebar_label:"Building a Pipeline for Natural Language Processing using RedisGears",slug:"/howtos/nlp",marp:!0,authors:["alex","ajeet"]},l=void 0,p={unversionedId:"howtos/nlp/index-nlp",id:"howtos/nlp/index-nlp",title:"Building a Pipeline for Natural Language Processing using RedisGears",description:"Goal",source:"@site/docs/howtos/nlp/index-nlp.mdx",sourceDirName:"howtos/nlp",slug:"/howtos/nlp",permalink:"/howtos/nlp",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/nlp/index-nlp.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-nlp",title:"Building a Pipeline for Natural Language Processing using RedisGears",sidebar_label:"Building a Pipeline for Natural Language Processing using RedisGears",slug:"/howtos/nlp",marp:!0,authors:["alex","ajeet"]},sidebar:"docs",previous:{title:"Building Movies database app using RedisGraph and NodeJS",permalink:"/howtos/redisgraphmovies"},next:{title:"How to build a HackerNews Clone using Redis",permalink:"/howtos/hackernews"}},d={},c=[{value:"Goal",id:"goal",level:2},{value:"Why data scientists uses RedisGears?",id:"why-data-scientists-uses-redisgears",level:2},{value:"What is a knowledge graph?",id:"what-is-a-knowledge-graph",level:2},{value:"RedisGears for NLP pre-processing",id:"redisgears-for-nlp-pre-processing",level:2},{value:"Overall Architecture Overview (Components Diagram)",id:"overall-architecture-overview-components-diagram",level:3},{value:"How does the NLP pipeline steps fit into RedisGears?",id:"how-does-the-nlp-pipeline-steps-fit-into-redisgears",level:3},{value:"Step 1. Pre-requisite",id:"step-1-pre-requisite",level:3},{value:"Step 2. Clone the repository",id:"step-2-clone-the-repository",level:3},{value:"Step 3. Bring up the application",id:"step-3-bring-up-the-application",level:3},{value:"Step 4. Apply cluster configuration settings",id:"step-4-apply-cluster-configuration-settings",level:3},{value:"Step 5. Create or activate Python virtual environment",id:"step-5-create-or-activate-python-virtual-environment",level:3},{value:"Step 6. Create new environment",id:"step-6-create-new-environment",level:3},{value:"Step 7. Run pipeline",id:"step-7-run-pipeline",level:3},{value:"Step 8. Validating the functionality of the NLP pipeline",id:"step-8-validating-the-functionality-of-the-nlp-pipeline",level:3},{value:"Verifying Redis Graph populated:",id:"verifying-redis-graph-populated",level:3},{value:"Checking API responds:",id:"checking-api-responds",level:3},{value:"Walkthrough",id:"walkthrough",level:2},{value:"Call to action",id:"call-to-action",level:2},{value:"References",id:"references",level:3}],u={toc:c};function h(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"goal"},"Goal"),(0,i.kt)("p",null,"In this tutorial, you will learn how to build a pipeline for Natural Language Processing(NLP) using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.redis.com/howtos/redisgears"},"RedisGears"),". For this demonstration, we will be leveraging the Kaggle CORD19 datasets. The implementation is designed to avoid running out of memory, leveraging Redis Cluster and RedisGears, where the use of RedisGears allows for processing data on storage without the need to move data in and out of the Redis Cluster\u2014using Redis Cluster as data fabric. Redis Cluster allows for horizontal scalability up to 1000 nodes, and together with RedisGears, provides a distributed system where data science/ML engineers can focus on processing steps, without the worry of writing tons of scaffoldings for distributed calculations."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nlp",src:a(2514).Z,width:"960",height:"540"})),(0,i.kt)("p",null,"This project was built with the aim to make it easier for other people to contribute and build better information and knowledge management products."),(0,i.kt)("h2",{id:"why-data-scientists-uses-redisgears"},"Why data scientists uses RedisGears?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://redis.com/modules/redis-gears/"},"RedisGears")," have enormous potential, particularly for text processing\u2014you can process your data \u201con data\u201d without needing to move them in and out of memory. Summary of the important points:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In Memory storage (Horizontally scalable if it\u2019s Redis cluster)"),(0,i.kt)("li",{parentName:"ul"},"Processing of data (on data) without need to move in and out"),(0,i.kt)("li",{parentName:"ul"},"Gears - like Spark on Hadoop, process data intelligently on storage(in-memory) without need to move data in and out"),(0,i.kt)("li",{parentName:"ul"},"Redis in cluster mode with RedisGears and python enabled takes 20 MB RAM. Think how much more data you can shuffle into your laptop or server.")),(0,i.kt)("h2",{id:"what-is-a-knowledge-graph"},"What is a knowledge graph?"),(0,i.kt)("p",null,"Today, we live in the world of new systems that operate not just files, folders, or web pages, but entities with their properties and relationships between them, organized into hierarchies of classes and categories. These systems are used everywhere from the military-industrial complex to our everyday lives. Palantir, Primer, and other data companies enable massive intelligence and counterintelligence projects in military and security forces, Quid and RecordedFuture enable competitive analytics, Bottlenose and similar enterprises enable online reputation analytics. Microsoft Graph enables new kinds of productivity apps for the enterprises, Google Knowledge Graph and Microsoft\u2019s Satori enable everyday search queries, and together with Amazon Information Graph they power corresponding AI assistants by enabling them to answer questions about the world facts"),(0,i.kt)("p",null,"All these (and many other more specialized) systems are used in different domains, but all of them use Knowledge Graphs as their foundation."),(0,i.kt)("p",null,"Knowledge graphs are one of the best ways to connect and make sense out of information from different data sources, following the motto of one of the vendors\u2014 ",(0,i.kt)("a",{parentName:"p",href:"https://www.poolparty.biz/news-events/knowledge-graphs-connecting-dots-increasingly-complex-world/"},"\u201cIt\u2019s about things not strings\u201d"),"."),(0,i.kt)("p",null,"Knowledge Graph consists of thesaurus, taxonomy and ontology. In this pipeline I assume knowledge is captured in medical metathesaurus ",(0,i.kt)("a",{parentName:"p",href:"https://www.nlm.nih.gov/research/umls/index.html"},"UMLS")," and concepts in text are related if they are part of the same sentence, therefore concept become node, their relationship becomes edge:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"concepts1",src:a(97959).Z,width:"268",height:"54"}),"\n",(0,i.kt)("img",{alt:"concepts2",src:a(41477).Z,width:"401",height:"54"})),(0,i.kt)("p",null,"Concepts have CUI (Concept Unique Identifiers) and those will be primary keys in nodes, linked to UMLS thesaurus. For example, if you search, \u201cHow does temperature and humidity affect the transmission of 2019-nCoV?\u201d on the demo website ",(0,i.kt)("a",{parentName:"p",href:"http://thepattern.digital"},"http://thepattern.digital/")," and move slider to 1996, there is an edge-connecting transmission (C5190195) and birth (C5195639) and the part of sentence matched, \u201cthe rate of transmission to an infant born to,\u201d from the report titled, \u201cAfebrile Pneumonia in infants.\u201d"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"concepts3",src:a(48866).Z,width:"698",height:"54"})),(0,i.kt)("h2",{id:"redisgears-for-nlp-pre-processing"},"RedisGears for NLP pre-processing"),(0,i.kt)("h3",{id:"overall-architecture-overview-components-diagram"},"Overall Architecture Overview (Components Diagram)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"component_diagram",src:a(60498).Z,width:"400",height:"670"})),(0,i.kt)("p",null,"Intake step - is very simple put all JSON records into RedisCluster, then NLP pipeline starts processing all records, code is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/applied-knowledge-systems/the-pattern-platform/blob/main/RedisIntakeRedisClusterSample.py"},"here"),"."),(0,i.kt)("h3",{id:"how-does-the-nlp-pipeline-steps-fit-into-redisgears"},"How does the NLP pipeline steps fit into RedisGears?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For each record \u2014 detect language (discard non English), it\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisgears/operations.html#filter"},"filter"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Map paragraphs into a sentence \u2014 ",(0,i.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisgears/operations.html#flatmap"},"flatmap"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sentences spellchecker \u2014 it\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisgears/operations.html#map"},"map"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save sentences into hash \u2014 ",(0,i.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisgears/operations.html#processor"},"processor")))),(0,i.kt)("h3",{id:"step-1-pre-requisite"},"Step 1. Pre-requisite"),(0,i.kt)("p",null,"Ensure that you install virtualenv in your system"),(0,i.kt)("h3",{id:"step-2-clone-the-repository"},"Step 2. Clone the repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," git clone --recurse-submodules https://github.com/applied-knowledge-systems/the-pattern.git\n cd the-pattern\n")),(0,i.kt)("h3",{id:"step-3-bring-up-the-application"},"Step 3. Bring up the application"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," docker-compose -f docker-compose.dev.yml up --build -d\n")),(0,i.kt)("h3",{id:"step-4-apply-cluster-configuration-settings"},"Step 4. Apply cluster configuration settings"),(0,i.kt)("p",null,"You can deploy PyTorch and spacy to run on RedisGears."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," bash post_start_dev.sh\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For Data science-focused deployment, RedisCluster should be in HA mode with at least one slave for each master.\nOne need to change a few default parameters for rgcluster to accommodate the size of PyTorch and spacy libraries (each over 1GB zipped), gist with settings."))),(0,i.kt)("h3",{id:"step-5-create-or-activate-python-virtual-environment"},"Step 5. Create or activate Python virtual environment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," cd ./the-pattern-platform/\n")),(0,i.kt)("h3",{id:"step-6-create-new-environment"},"Step 6. Create new environment"),(0,i.kt)("p",null,"You can create it via"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," conda create -n pattern_env python=3.8\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("p",null,"Alternatively, you can activate by using the below CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," source ~/venv_cord19/bin/activate #or create new venv\n pip install -r requirements.txt\n")),(0,i.kt)("h3",{id:"step-7-run-pipeline"},"Step 7. Run pipeline"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," bash cluster_pipeline.sh\n")),(0,i.kt)("h3",{id:"step-8-validating-the-functionality-of-the-nlp-pipeline"},"Step 8. Validating the functionality of the NLP pipeline"),(0,i.kt)("p",null,"Wait for a bit and then check:"),(0,i.kt)("h3",{id:"verifying-redis-graph-populated"},"Verifying Redis Graph populated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' redis-cli -p 9001 -h 127.0.0.1 GRAPH.QUERY cord19medical "MATCH (n:entity) RETURN count(n) as entity_count"\n redis-cli -p 9001 -h 127.0.0.1 GRAPH.QUERY cord19medical "MATCH (e:entity)-[r]->(t:entity) RETURN count(r) as edge_count"\n')),(0,i.kt)("h3",{id:"checking-api-responds"},"Checking API responds:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},' curl -i -H "Content-Type: application/json" -X POST -d \'{"search":"How does temperature and humidity affect the transmission of 2019-nCoV"}\'\n http://localhost:8080/gsearch\n')),(0,i.kt)("h2",{id:"walkthrough"},"Walkthrough"),(0,i.kt)("p",null,"While RedisGears allows to deploy and run Machine Learning libraries like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AlexMikhalev/cord19redisknowledgegraph/blob/master/spacy_sentences_geared.py"},"spacy")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AlexMikhalev/cord19redisknowledgegraph/blob/master/tokenizer_bert_geared.py"},"BERT transformers"),", the solution above uses simpler approach:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," gb = GB('KeysReader')\n gb.filter(filter_language)\n gb.flatmap(parse_paragraphs)\n gb.map(spellcheck_sentences)\n gb.foreach(save_sentences)\n gb.count()\n gb.register('paragraphs:*',keyTypes=['string','hash'], mode=\"async_local\")\n")),(0,i.kt)("p",null,"This is the overall pipeline: those 7 lines allow you to run logic in a distributed cluster or on a single machine using all available CPUs - no changes required until you need to scale over more 1000 nodes. I use KeysReader registered for namespace paragraphs for all strings or hashes. My pipeline would need to run in async mode. For data scientists, I would recommend using gb.run to make sure gears function work and it will run in batch mode and then change it to register - to capture new data. By default, functions will return output, hence the need for count() - to prevent fetching the whole dataset back to the command issuing machine (90 GB for Cord19)."),(0,i.kt)("p",null,"Overall pre-processing is a straightforward - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/applied-knowledge-systems/the-pattern-platform/blob/main/gears_pipeline_sentence_register.py"},"full code")," is here."),(0,i.kt)("p",null,"Things to keep in mind:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Node process can only save locally - we don't move data, anything you want to save should have hashtag, for example to add to the set of processed_docs:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"}," execute('SADD','processed_docs_{%s}' % hashtag(),article_id)\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Loading external libraries into the computational threat, for example, symspell requires additional dictionaries and needs two steps to load:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},' """\n load symspell and relevant dictionaries\n """\n sym_spell=None\n\n def load_symspell():\n  import pkg_resources\n  from symspellpy import SymSpell, Verbosity\n  sym_spell = SymSpell(max_dictionary_edit_distance=1, prefix_length=7)\n  dictionary_path = pkg_resources.resource_filename(\n      "symspellpy", "frequency_dictionary_en_82_765.txt")\n  bigram_path = pkg_resources.resource_filename(\n      "symspellpy", "frequency_bigramdictionary_en_243_342.txt")\n  # term_index is the column of the term and count_index is the\n  # column of the term frequency\n  sym_spell.load_dictionary(dictionary_path, term_index=0, count_index=1)\n  sym_spell.load_bigram_dictionary(bigram_path, term_index=0, count_index=2)\n  return sym_spell\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Scispacy is a great library and data science tool, but after a few iterations with deploying it I ended up reading data model documentation for UMLS Methathesaurus and decided to build Aho-Corasick automata directly from UMLS data. (MRXW_ENG.RRF contains all terms form for English mapped to CUI). Aho-Corasick allowed me to match incoming sentences into pairs of nodes (concepts from the medical dictionary) and present sentences as edges in a graph, Gears related code is simple:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," bg = GearsBuilder('KeysReader')\n bg.foreach(process_item)\n bg.count()\n bg.register('sentence:*',  mode=\"async_local\",onRegistered=OnRegisteredAutomata)\n\n")),(0,i.kt)("p",null,"OnRegisteredAutomata will perform similarly to symspell example above except it will download pre-build Aho-Corasick automata (30Mb).\nAho-Corasick is a very fast matcher and allows to perform >900 Mb text per second even on commodity laptop, RedisGears cluster makes a very smooth distribution of data and ML model and matching using available CPU and Memory. Full matcher ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/applied-knowledge-systems/the-pattern-platform/blob/main/sentences_matcher_register.py"},"code"),"."),(0,i.kt)("p",null,"Output of the matcher: nodes and edges are candidates to use another RedisGears pattern rgsync where you can write fast into Redis and RedisGears are going to replicate data into slower storage using RedisStreams.\nBut I decided to use streams and handcraft the population of the RedisGraph database, which will be focus of the next blog post."),(0,i.kt)("p",null,"Output of the matcher: nodes and edges are candidates to use another RedisGears pattern ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RedisGears/rgsync"},"rgsync")," where you can write fast into Redis and RedisGears are going to replicate data into slower storage using RedisStreams, while this demo uses streams and populates RedisGraph database with nodes and edges calculating rank of each."),(0,i.kt)("h2",{id:"call-to-action"},"Call to action"),(0,i.kt)("p",null,"We took OCR scans in JSON format and turned them into Knowledge Graph, demonstrating how you can traditional Semantic Network/OWL/Methathesaurus technique based on Unified Medical Language System. Redis Ecosystem offers a lot to the data science community, and can take place at the core of Kaggle notebooks, ML frameworks and make deployment and distribution of data more enjoyable. The success of our industry depends on how our tools work together \u2014 regardless of whether they are engineering, data science, machine learning and organisational or architectural."),(0,i.kt)("p",null,"With the collaboration of RedisLabs and community, the full pipeline code is available via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/applied-knowledge-systems/the-pattern-platform"},"https://github.com/applied-knowledge-systems/the-pattern-platform"),". In case, you want to try it locally, then you can find a Docker Launch script in the root of the repository along with short quickstart guide. PR and suggestions are welcome. The overall goal of the project is to allow other to build their more interesting pipeline on top of it."),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://thepattern.digital/"},"Covid19 - Redis Knowledge Graph in 3D")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge"},"COVID-19 Open Research Dataset Challenge (CORD-19)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/applied-knowledge-systems/the-pattern-platform"},"Source Code for NLP pipeline based on RedisGears "))))}h.isMDXComponent=!0},60498:function(e,t,a){t.Z=a.p+"assets/images/component_diagram-7c37b467a6005098c046c83152163522.png"},97959:function(e,t){t.Z="data:image/png;base64,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"},41477:function(e,t){t.Z="data:image/png;base64,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"},48866:function(e,t,a){t.Z=a.p+"assets/images/concepts3-d293176f4158564f29a9235b8f166ef1.png"},2514:function(e,t,a){t.Z=a.p+"assets/images/nlparch-323f9deb405b9d0f52b467acddc87818.png"}}]);