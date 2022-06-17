"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1601],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,c=g["".concat(u,".").concat(m)]||g[m]||s[m]||o;return n?r.createElement(c,l(l({ref:t},d),{},{components:n})):r.createElement(c,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},26306:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"groups",title:"Grouping and Reductions",sidebar_label:"Grouping and Reductions",slug:"/develop/dotnet/redis-om-dotnet/aggregations/groups/groups",authors:["steve"]},u=void 0,p={unversionedId:"develop/dotnet/redis-om-dotnet/aggregations/groups/groups",id:"develop/dotnet/redis-om-dotnet/aggregations/groups/groups",title:"Grouping and Reductions",description:"Grouping and reducing operations using aggregations can be extremely powerful.",source:"@site/docs/develop/dotnet/redis-om-dotnet/aggregations/groups/groups.md",sourceDirName:"develop/dotnet/redis-om-dotnet/aggregations/groups",slug:"/develop/dotnet/redis-om-dotnet/aggregations/groups/groups",permalink:"/develop/dotnet/redis-om-dotnet/aggregations/groups/groups",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/redis-om-dotnet/aggregations/groups/groups.md",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"groups",title:"Grouping and Reductions",sidebar_label:"Grouping and Reductions",slug:"/develop/dotnet/redis-om-dotnet/aggregations/groups/groups",authors:["steve"]},sidebar:"docs",previous:{title:"Apply Functions",permalink:"/develop/dotnet/redis-om-dotnet/aggregations/apply-functions"},next:{title:"Using Redis Streams with .NET",permalink:"/develop/dotnet/streams/stream-basics"}},d={},s=[{value:"What Is a Group",id:"what-is-a-group",level:2},{value:"Reductions",id:"reductions",level:2},{value:"Using Groups and Reductions with Redis OM .NET",id:"using-groups-and-reductions-with-redis-om-net",level:2},{value:"Reductions without a Group",id:"reductions-without-a-group",level:3},{value:"Reductions with a Group",id:"reductions-with-a-group",level:3},{value:"Closing Groups",id:"closing-groups",level:2}],g={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Grouping and reducing operations using aggregations can be extremely powerful."),(0,o.kt)("h2",{id:"what-is-a-group"},"What Is a Group"),(0,o.kt)("p",null,"A group is simply a group of like records in Redis."),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Name":"Susan",\n    "Department":"Sales",\n    "Sales":600000\n}\n\n{\n    "Name":"Tom",\n    "Department":"Sales",\n    "Sales":500000\n}\n')),(0,o.kt)("p",null,"If grouped together by ",(0,o.kt)("inlineCode",{parentName:"p"},"Department")," would be one group. When grouped by ",(0,o.kt)("inlineCode",{parentName:"p"},"Name"),", they would be two groups."),(0,o.kt)("h2",{id:"reductions"},"Reductions"),(0,o.kt)("p",null,"What makes groups so useful in Redis Aggregations is that you can run reductions on them to aggregate items within the group. For example, you can calculate summary statistics on numeric fields, retrieve random samples, distinct counts, approximate distinct counts of any aggregatable field in the set."),(0,o.kt)("h2",{id:"using-groups-and-reductions-with-redis-om-net"},"Using Groups and Reductions with Redis OM .NET"),(0,o.kt)("p",null,"You can run reductions against an ",(0,o.kt)("inlineCode",{parentName:"p"},"RedisAggregationSet")," either with or without a group. If you run a reduction without a group, the result of the reduction will materialize immediately as the desired type. If you run a reduction against a group, the results will materialize when they are enumerated."),(0,o.kt)("h3",{id:"reductions-without-a-group"},"Reductions without a Group"),(0,o.kt)("p",null,"If you wanted to calculate a reduction on all the records indexed by Redis in the collection, you would simply call the reduction on the ",(0,o.kt)("inlineCode",{parentName:"p"},"RedisAggregationSet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var sumSales = employeeAggregations.Sum(x=>x.RecordShell.Sales);\nConsole.WriteLine($"The sum of sales for all employees was {sumSales}");\n')),(0,o.kt)("h3",{id:"reductions-with-a-group"},"Reductions with a Group"),(0,o.kt)("p",null,"If you want to build a group to run reductions on, e.g. you wanted to calculate the average sales in a department, you would use a ",(0,o.kt)("inlineCode",{parentName:"p"},"GroupBy")," predicate to specify which field or fields to group by. If you want to group by 1 field, your lambda function for the group by will yield just the field you want to group by. If you want to group by multiple fields, ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," up an anonymous type in line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var oneFieldGroup = employeeAggregations.GroupBy(x=>x.RecordShell.Department);\n\nvar multiFieldGroup = employeeAggregations.GroupBy(x=>new {x.RecordShell.Department, x.RecordShell.WorkLoc});\n")),(0,o.kt)("p",null,"From here you can run reductions on your groups. To run a Reduction, execute a reduction function. When the collection materializes the ",(0,o.kt)("inlineCode",{parentName:"p"},"AggregationResult<T>")," will have the reduction stored in a formatted string which is the ",(0,o.kt)("inlineCode",{parentName:"p"},"PropertyName_COMMAND_POSTFIX"),", see supported operations table below for postfixes. If you wanted to calculate the sum of the sales of all the departments you could:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var departments = employeeAggregations.GroupBy(x=>x.RecordShell.Department).Sum(x=>x.RecordShell.Sales);\nforeach(var department in departments)\n{\n    Console.WriteLine($"The {department[nameof(Employee.Department)]} department sold {department["Sales_SUM"]}");\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Command Postfix"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Count"),(0,o.kt)("td",{parentName:"tr",align:null},"COUNT"),(0,o.kt)("td",{parentName:"tr",align:null},"number of records meeting the query, or in the group"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CountDistinct"),(0,o.kt)("td",{parentName:"tr",align:null},"COUNT_DISTINCT"),(0,o.kt)("td",{parentName:"tr",align:null},"Counts the distinct occurrences of a given property in a group"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CountDistinctish"),(0,o.kt)("td",{parentName:"tr",align:null},"COUNT_DISTINCTISH"),(0,o.kt)("td",{parentName:"tr",align:null},"Provides an approximate count of distinct occurrences of a given property in each group - less expensive computationally but does have a small 3% error rate"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sum"),(0,o.kt)("td",{parentName:"tr",align:null},"SUM"),(0,o.kt)("td",{parentName:"tr",align:null},"The sum of all occurrences of the provided field in each group"),(0,o.kt)("td",{parentName:"tr",align:null},"b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Min"),(0,o.kt)("td",{parentName:"tr",align:null},"MIN"),(0,o.kt)("td",{parentName:"tr",align:null},"Minimum occurrence for the provided field in each group"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Max"),(0,o.kt)("td",{parentName:"tr",align:null},"MAX"),(0,o.kt)("td",{parentName:"tr",align:null},"Maximum occurrence for the provided field in each group"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Average"),(0,o.kt)("td",{parentName:"tr",align:null},"Avg"),(0,o.kt)("td",{parentName:"tr",align:null},"Arithmetic mean of all the occurrences for the provided field in a group"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"StandardDeviation"),(0,o.kt)("td",{parentName:"tr",align:null},"STDDEV"),(0,o.kt)("td",{parentName:"tr",align:null},"Standard deviation from the arithmetic mean of all the occurrences for the provided field in each group"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Quantile"),(0,o.kt)("td",{parentName:"tr",align:null},"QUANTLE"),(0,o.kt)("td",{parentName:"tr",align:null},"The value of a record at the provided quantile for a field in each group, e.g., the Median of the field would be sitting at quantile .5"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Distinct"),(0,o.kt)("td",{parentName:"tr",align:null},"TOLIST"),(0,o.kt)("td",{parentName:"tr",align:null},"Enumerates all the distinct values of a given field in each group"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FirstValue"),(0,o.kt)("td",{parentName:"tr",align:null},"FIRST_VALUE"),(0,o.kt)("td",{parentName:"tr",align:null},"Retrieves the first occurrence of a given field in each group"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RandomSample"),(0,o.kt)("td",{parentName:"tr",align:null},"RANDOM",(0,o.kt)("em",{parentName:"td"},"SAMPLE"),"{NumRecords}"),(0,o.kt)("td",{parentName:"tr",align:null},"Random sample of the given field in each group"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"closing-groups"},"Closing Groups"),(0,o.kt)("p",null,"When you invoke a ",(0,o.kt)("inlineCode",{parentName:"p"},"GroupBy")," the type of return type changes from ",(0,o.kt)("inlineCode",{parentName:"p"},"RedisAggregationSet")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"GroupedAggregationSet"),". In some instances you may need to close a group out and use its results further down the pipeline. To do this, all you need to do is call ",(0,o.kt)("inlineCode",{parentName:"p"},"CloseGroup")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"GroupedAggregationSet")," - that will end the group predicates and allow you to use the results further down the pipeline."))}m.isMDXComponent=!0}}]);