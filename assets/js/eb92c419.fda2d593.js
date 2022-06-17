"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7128],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"simple-text-queries",title:"Simple Text Queries",sidebar_label:"Simple Text Queries",slug:"/develop/dotnet/redis-om-dotnet/simple-text-queries",authors:["steve"]},s=void 0,p={unversionedId:"develop/dotnet/redis-om-dotnet/searching/simple-text-queries/simple-text-queries",id:"develop/dotnet/redis-om-dotnet/searching/simple-text-queries/simple-text-queries",title:"Simple Text Queries",description:"The RedisCollection provides a fluent interface for querying objects stored in redis. This means that if you store an object in Redis with the Redis OM library, and you have RediSearch enabled, you can query objects stored in Redis with ease using the LINQ syntax you're used to.",source:"@site/docs/develop/dotnet/redis-om-dotnet/searching/simple-text-queries/simple-text-queries.md",sourceDirName:"develop/dotnet/redis-om-dotnet/searching/simple-text-queries",slug:"/develop/dotnet/redis-om-dotnet/simple-text-queries",permalink:"/develop/dotnet/redis-om-dotnet/simple-text-queries",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/redis-om-dotnet/searching/simple-text-queries/simple-text-queries.md",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"simple-text-queries",title:"Simple Text Queries",sidebar_label:"Simple Text Queries",slug:"/develop/dotnet/redis-om-dotnet/simple-text-queries",authors:["steve"]},sidebar:"docs",previous:{title:"Creating an Index",permalink:"/develop/dotnet/redis-om-dotnet/searching/creating-an-index"},next:{title:"Numeric Queries",permalink:"/develop/dotnet/redis-om-dotnet/searching/numeric-queries"}},d={},m=[{value:"Define the Model",id:"define-the-model",level:2},{value:"Connect to Redis",id:"connect-to-redis",level:2},{value:"Create our Index",id:"create-our-index",level:2},{value:"Seed some Data",id:"seed-some-data",level:2},{value:"Simple Text Query of an Indexed Field",id:"simple-text-query-of-an-indexed-field",level:2},{value:"Limiting Result Object Fields",id:"limiting-result-object-fields",level:3},{value:"Limiting Returned Objects",id:"limiting-returned-objects",level:3},{value:"Full Text Search",id:"full-text-search",level:2},{value:"Find Employee&#39;s in Sales",id:"find-employees-in-sales",level:3},{value:"Sorting",id:"sorting",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RedisCollection")," provides a fluent interface for querying objects stored in redis. This means that if you store an object in Redis with the Redis OM library, and you have ",(0,i.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/"},"RediSearch")," enabled, you can query objects stored in Redis with ease using the LINQ syntax you're used to."),(0,i.kt)("h2",{id:"define-the-model"},"Define the Model"),(0,i.kt)("p",null,"Let's start off by defining a model that we will be using for querying, we will use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Employee")," Class which will have some basic stuff we may want to query in it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"[Document]\npublic class Employee\n{\n    [Indexed]\n    public string Name { get; set; }\n\n    [Indexed(Aggregatable = true)]\n    public int Age { get; set; }\n\n    [Indexed(Aggregatable = true)]\n    public double Sales { get; set; }\n\n    [Searchable(Aggregatable = true)]\n    public string Department { get; set; }\n}\n")),(0,i.kt)("h2",{id:"connect-to-redis"},"Connect to Redis"),(0,i.kt)("p",null,"Now we will initialize a RedisConnectionProvider, and grab a handle to a RedisCollection for Employee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'static async Task Main(string[] args)\n{\n    var provider = new RedisConnectionProvider("redis://localhost:6379");\n    var connection = provider.Connection;\n    var employees = prover.RedisCollection<Employee>();\n    await connection.CreateIndexAsync(typeof(Employee));\n}\n')),(0,i.kt)("h2",{id:"create-our-index"},"Create our Index"),(0,i.kt)("p",null,"Next we'll create the index, so next in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Main")," method, let's take our type and condense it into an index"),(0,i.kt)("h2",{id:"seed-some-data"},"Seed some Data"),(0,i.kt)("p",null,"Next we'll seed a few piece of data in our database to play around with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var e1 = new Employee {Name = "Bob", Age = 35, Sales = 100000, Department = "EMEA Sales"};\nvar e2 = new Employee {Name = "Alice", Age = 52, Sales = 300000, Department = "Partner Sales"};\nvar e3 = new Employee {Name = "Marcus", Age = 42, Sales = 250000, Department = "NA Sales"};\nvar e4 = new Employee {Name = "Susan", Age = 27, Sales = 200000, Department = "EMEA Sales"};\nvar e5 = new Employee {Name = "John", Age = 38, Sales = 275000, Department = "APAC Sales"};\nvar e6 = new Employee {Name = "Theresa", Age = 30, Department = "EMEA Ops"};\nvar insertTasks = new []\n    {\n        employees.InsertAsync(e1),\n        employees.InsertAsync(e2),\n        employees.InsertAsync(e3),\n        employees.InsertAsync(e4),\n        employees.InsertAsync(e5)\n        employees.InsertAsync(e6)\n    };\nawait Task.WhenAll(insertTasks);\n')),(0,i.kt)("h2",{id:"simple-text-query-of-an-indexed-field"},"Simple Text Query of an Indexed Field"),(0,i.kt)("p",null,"With these data inserted into our database, we can now go ahead and begin querying. Let's start out by trying to query people by name. We can search for all employees named ",(0,i.kt)("inlineCode",{parentName:"p"},"Susan")," with a simple Where predicate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var susans = employees.Where(x => x.Name == "Susan");\nawait foreach (var susan in susans)\n{\n    Console.WriteLine($"Susan is {susan.Age} years old and works in the {susan.Department} department ");\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Where")," Predicates also support ",(0,i.kt)("inlineCode",{parentName:"p"},"and"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"or")," operators, e.g. to find all employees named ",(0,i.kt)("inlineCode",{parentName:"p"},"Alice")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Bob")," you can use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var AliceOrBobs = employees.Where(x => x.Name == "Alice" || x.Name == "Bob");\nawait foreach (var employee in AliceOrBobs)\n{\n    Console.WriteLine($"{employee.Name} is {employee.Age} years old and works in the {employee.Department} Department");\n}\n')),(0,i.kt)("h3",{id:"limiting-result-object-fields"},"Limiting Result Object Fields"),(0,i.kt)("p",null,"When you are querying larger Documents in Redis, you may not want to have to drag back the entire object over the network, in that case you can limit the results to only what you want using a ",(0,i.kt)("inlineCode",{parentName:"p"},"Select")," predicate. E.g. if you only wanted to find out the ages of employees, all you would need to do is select the age of employees:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var employeeAges = employees.Select(x => x.Age);\nawait foreach (var age in employeeAges)\n{\n    Console.WriteLine($"age: {age}");\n}\n')),(0,i.kt)("p",null,"Or if you want to select more than one field you can create a new anonymous object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var employeeAges = employees.Select(x => new {x.Name, x.Age});\nawait foreach (var e in employeeAges)\n{\n    Console.WriteLine($"{e.Name} is age: {e.Age} years old");\n}\n')),(0,i.kt)("h3",{id:"limiting-returned-objects"},"Limiting Returned Objects"),(0,i.kt)("p",null,"You can limit the size of your result (in the number of objects returned) with ",(0,i.kt)("inlineCode",{parentName:"p"},"Skip")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Take")," predicates. ",(0,i.kt)("inlineCode",{parentName:"p"},"Skip")," will skip over the specified number of records, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Take")," will take only the number of records provided (at most);"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var people = employees.Skip(1).Take(2);\nawait foreach (var e in people)\n{\n    Console.WriteLine($"{e.Name} is age: {e.Age} years old");\n}\n')),(0,i.kt)("h2",{id:"full-text-search"},"Full Text Search"),(0,i.kt)("p",null,"There are two types of attributes that can decorate strings, ",(0,i.kt)("inlineCode",{parentName:"p"},"Indexed"),", which we've gone over and ",(0,i.kt)("inlineCode",{parentName:"p"},"Searchable")," which we've yet to discuss. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Searchable")," attribute considers equality slightly differently than Indexed, it operates off a full-text search. In expressions involving Searchable fields, equality\u2014",(0,i.kt)("inlineCode",{parentName:"p"},"=="),"\u2014 means a match. A match in the context of a searchable field is not necessarily a full exact match but rather that the string contains the search text. Let's look at some examples."),(0,i.kt)("h3",{id:"find-employees-in-sales"},"Find Employee's in Sales"),(0,i.kt)("p",null,"So we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Department")," string which is marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"Searchable")," in our Employee class. Notice how we've named our departments. They contain a region and a department type. If we wanted only to find all employee's in ",(0,i.kt)("inlineCode",{parentName:"p"},"Sales")," we could do so with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var salesPeople = employees.Where(x => x.Department == "Sales");\nawait foreach (var employee in salesPeople)\n{\n    Console.WriteLine($"{employee.Name} is in the {employee.Department} department");\n}\n')),(0,i.kt)("p",null,"This will produce:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Bob is in the EMEA Sales department\nAlice is in the Partner Sales department\nMarcus is in the NA Sales department\nSusan is in the EMEA Sales department\nJohn is in the APAC Sales department\n")),(0,i.kt)("p",null,"Because they are all folks in departments called ",(0,i.kt)("inlineCode",{parentName:"p"},"sales")),(0,i.kt)("p",null,"If you wanted to search for everyone in a department in ",(0,i.kt)("inlineCode",{parentName:"p"},"EMEA")," you could search with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var emeaFolks = employees.Where(x => x.Department == "EMEA");\nawait foreach (var employee in emeaFolks)\n{\n    Console.WriteLine($"{employee.Name} is in the {employee.Department} department");\n}\n')),(0,i.kt)("p",null,"Which of course would produce:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Bob is in the EMEA Sales department\nSusan is in the EMEA Sales department\nTheresa is in the EMEA Ops department\n")),(0,i.kt)("h2",{id:"sorting"},"Sorting"),(0,i.kt)("p",null,"If a ",(0,i.kt)("inlineCode",{parentName:"p"},"Searchable")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Indexed")," field is marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"Sortable"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"Aggregatable"),", you can order by that field using ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderBy")," predicates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"var employeesBySales = employees.OrderBy(x=>x.Name);\nvar employeesBySalesDescending = employees.OrderByDescending(x=>x.Name);\n")))}u.isMDXComponent=!0}}]);