"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,m=c["".concat(i,".").concat(d)]||c[d]||h[d]||r;return n?l.createElement(m,o(o({ref:t},p),{},{components:n})):l.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(67294),a=n(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var l=n(87462),a=n(67294),r=n(86010),o=n(72389),s=n(67392),i=n(7094),u=n(12466);const p="tabList__CuJ",h="tabItem_LNqP";function c(e){var t;const{lazy:n,block:o,defaultValue:c,values:d,groupId:m,className:k}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=d??y.map((e=>{let{props:{value:t,label:n,attributes:l}}=e;return{value:t,label:n,attributes:l}})),f=(0,s.l)(N,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:S}=(0,i.U)(),[b,w]=(0,a.useState)(v),g=[],{blockElementScrollPositionUntilNextRender:J}=(0,u.o5)();if(null!=m){const e=O[m];null!=e&&e!==b&&N.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,n=g.indexOf(t),l=N[n].value;l!==b&&(J(t),w(l),null!=m&&S(m,String(l)))},R=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const t=g.indexOf(e.currentTarget)+1;n=g[t]??g[0];break}case"ArrowLeft":{const t=g.indexOf(e.currentTarget)-1;n=g[t]??g[g.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},N.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>g.push(e),onKeyDown:R,onClick:j},o,{className:(0,r.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":b===t})}),n??t)}))),n?(0,a.cloneElement)(y.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function d(e){const t=(0,o.Z)();return a.createElement(c,(0,l.Z)({key:String(t)},e))}},86299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>h});var l=n(87462),a=(n(67294),n(3905)),r=n(65488),o=n(85162);const s={},i=void 0,u={unversionedId:"howtos/quick-start/cheat-sheets/json",id:"howtos/quick-start/cheat-sheets/json",title:"json",description:"<Tabs",source:"@site/docs/howtos/quick-start/cheat-sheets/json.mdx",sourceDirName:"howtos/quick-start/cheat-sheets",slug:"/howtos/quick-start/cheat-sheets/json",permalink:"/howtos/quick-start/cheat-sheets/json",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/quick-start/cheat-sheets/json.mdx",tags:[],version:"current",lastUpdatedAt:1695078274,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{}},p={},h=[],c={toc:h};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{defaultValue:"CLI",groupId:"REDIS_CHEAT_SHEET",values:[{label:"CLI",value:"CLI"},{label:"node-redis",value:"NODE_JS"},{label:"redis-py",value:"PYTHON"},{label:"NRedisStack",value:"C#"},{label:"Jedis",value:"JAVA"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"CLI",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,"Command")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Syntax")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Example")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Output"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"JSON.SET"),(0,a.kt)("td",null,"JSON.SET key path value"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,'\nJSON.SET employee_profile:1 . \'{"name":"Alice"}\'\n'))),(0,a.kt)("td",null,"OK")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"4"},(0,a.kt)("em",null,"Description:")," Sets JSON value at path in key.",(0,a.kt)("em",null,"Time Complexity:")," O(M+N) where M is the original size and N is the new size")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"JSON.GET"),(0,a.kt)("td",null,"JSON.GET key [path [path ...]]"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"\nJSON.GET employee_profile:1\n"))),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"\n        { \"name\": 'Alice' }\n")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"4"},(0,a.kt)("em",null,"Description:")," Returns the JSON value at path in key.",(0,a.kt)("em",null,"Time Complexity:")," O(N) when path is evaluated to a single value where N is the size of the value, O(N) when path is evaluated to multiple values, where N is the size of the key")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"JSON.NUMINCRBY"),(0,a.kt)("td",null,"JSON.NUMINCRBY key path number"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"\nJSON.SET employee_profile:1 .age 30\nJSON.NUMINCRBY employee_profile:1 .age 5\n"))),(0,a.kt)("td",null,"35")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"4"},(0,a.kt)("em",null,"Description:")," Increments a number inside a JSON document.",(0,a.kt)("em",null,"Time Complexity:")," O(1) when path is evaluated to a single value, O(N) when path is evaluated to multiple values, where N is the size of the key")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"JSON.OBJKEYS"),(0,a.kt)("td",null,"JSON.OBJKEYS key [path]"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"\nJSON.OBJKEYS employee_profile:1\n"))),(0,a.kt)("td",null,'1) "name" 2) "age"')),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"4"},(0,a.kt)("em",null,"Description:")," Return the keys in the object that's referenced by path. ",(0,a.kt)("em",null,"Time Complexity:")," O(N) when path is evaluated to a single value, where N is the number of keys in the object, O(N) when path is evaluated to multiple values, where N is the size of the key")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"JSON.OBJLEN"),(0,a.kt)("td",null,"JSON.OBJLEN key [path]"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"\nJSON.OBJLEN employee_profile:1\n"))),(0,a.kt)("td",null,"(integer) 2")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"4"},(0,a.kt)("em",null,"Description:")," Report the number of keys in the JSON object at path in key. ",(0,a.kt)("em",null,"Time Complexity:")," O(1) when path is evaluated to a single value, O(N) when path is evaluated to multiple values, where N is the size of the key")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"JSON.ARRAPPEND"),(0,a.kt)("td",null,"JSON.ARRAPPEND key [path] value [value ...]"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,'\nJSON.SET employee_profile:1 .colors \'["red", "green", "blue"]\'\nJSON.ARRAPPEND employee_profile:1 .colors \'"yellow"\'\n'))),(0,a.kt)("td",null,"(integer) 4")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"4"},(0,a.kt)("em",null,"Description:")," Append the json values into the array at path after the last element in it. ",(0,a.kt)("em",null,"Time Complexity:")," O(1) for each value added, O(N) for multiple values added where N is the size of the key")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"JSON.ARRINSERT"),(0,a.kt)("td",null,"JSON.ARRINSERT key path index value [value ...]"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"\nJSON.ARRINSERT employee_profile:1 .colors 2 '\"purple\"'\n"))),(0,a.kt)("td",null,"(integer) 5")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"4"},(0,a.kt)("em",null,"Description:")," Insert the json values into the array at path before the index (shifts to the right). ",(0,a.kt)("em",null,"Time Complexity:")," O(N) when path is evaluated to a single value where N is the size of the array, O(N) when path is evaluated to multiple values, where N is the size of the key")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"JSON.ARRINDEX"),(0,a.kt)("td",null,"JSON.ARRINDEX key path value [start [stop]]"),(0,a.kt)("td",null,(0,a.kt)("pre",null,(0,a.kt)("code",null,"\nJSON.ARRINDEX employee_profile:1 .colors '\"purple\"'\n"))),(0,a.kt)("td",null,"(integer) 2")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"4"},(0,a.kt)("em",null,"Description:")," Searches for the first occurrence of a JSON value in an array. ",(0,a.kt)("em",null,"Time Complexity:")," O(N) when path is evaluated to a single value where N is the size of the array, O(N) when path is evaluated to multiple values, where N is the size of the key"))))),(0,a.kt)(o.Z,{value:"NODE_JS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/*\n      JSON.SET key path value\n      Sets JSON value at path in key.\n      O(M+N) where M is the original size and N is the new size\n    */\nconst setResult = await client.json.set('employee_profile:1', '.', {\n  name: 'Alice',\n});\nconsole.log(setResult); // OK\n\n/*\n       JSON.GET key [path [path ...]]\n       Returns the JSON value at path in key.\n       O(N) when path is evaluated to a single value where N is the size of the value, O(N) when path is evaluated to multiple values, where N is the size of the key\n    */\nconst getResult = await client.json.get('employee_profile:1');\nconsole.log(getResult); // { name: 'Alice' }\n\n/*\n      JSON.NUMINCRBY key path number\n      Increments a number inside a JSON document.\n      O(1) when path is evaluated to a single value, O(N) when path is evaluated to multiple values, where N is the size of the key\n    */\nawait client.json.set('employee_profile:1', '.age', 30);\nconst incrementResult = await client.json.numIncrBy(\n  'employee_profile:1',\n  '.age',\n  5,\n);\nconsole.log(incrementResult); // 35\n\n/*\n      JSON.OBJKEYS key [path]\n      Return the keys in the object that's referenced by path\n      O(N) when path is evaluated to a single value, where N is the number of keys in the object, O(N) when path is evaluated to multiple values, where N is the size of the key\n    */\nconst objKeysResult = await client.json.objKeys('employee_profile:1');\nconsole.log(objKeysResult); // [ 'name', 'age' ]\n\n/*\n      JSON.OBJLEN key [path]\n      Report the number of keys in the JSON object at path in key\n      O(1) when path is evaluated to a single value, O(N) when path is evaluated to multiple values, where N is the size of the key\n    */\nconst objLenResult = await client.json.objLen('employee_profile:1');\nconsole.log(objLenResult); // 2\n\n/*\n      JSON.ARRAPPEND key [path] value [value ...]\n      Append the json values into the array at path after the last element in it\n      O(1) for each value added, O(N) for multiple values added where N is the size of the key\n    */\nawait client.json.set('employee_profile:1', '.colors', [\n  'red',\n  'green',\n  'blue',\n]);\nconst arrAppendResult = await client.json.arrAppend(\n  'employee_profile:1',\n  '.colors',\n  'yellow',\n);\nconsole.log(arrAppendResult); // 4\n\n/*\n      JSON.ARRINSERT key path index value [value ...]\n      Insert the json values into the array at path before the index (shifts to the right)\n      O(N) when path is evaluated to a single value where N is the size of the array, O(N) when path is evaluated to multiple values, where N is the size of the key\n    */\nconst arrInsertResult = await client.json.arrInsert(\n  'employee_profile:1',\n  '.colors',\n  2,\n  'purple',\n);\nconsole.log(arrInsertResult); // 5\n\n/*\n      JSON.ARRINDEX key path json [start [stop]]\n      Searches for the first occurrence of a JSON value in an array.\n      O(N) when path is evaluated to a single value where N is the size of the array, O(N) when path is evaluated to multiple values, where N is the size of the key\n    */\nconst arrIndexResult = await client.json.arrIndex(\n  'employee_profile:1',\n  '.colors',\n  'purple',\n);\nconsole.log(arrIndexResult); // 2\n"))),(0,a.kt)(o.Z,{value:"PYTHON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# JSON.SET key path value\n# O(M+N) where M is the original size and N is the new size\n# Set the JSON value at path in key.\nr.json().set('employee_profile:nicol', '.', {\n    'name': 'nicol', 'age': 24, 'single': True, 'skills': []})\nr.json().set('employee_profile:nicol', '$.name', 'Nicol')\n\n# JSON.GET key [path [path ...]]\n# O(N)\n# Return the value at path in JSON serialized form\nr.json().get('employee_profile:nicol', '.')\n\n# JSON.ARRAPPEND key [path] value [value ...]\n# O(1) for each value added, O(N) for multiple values added where N is the size of the key\n# Append the value(s) to the array at path in key after the last element in the array.\nr.json().set('employee_profile:nicol', '$.skills', [])\nr.json().arrappend('employee_profile:nicol', '$.skills', 'python')\nr.json().get('employee_profile:nicol', '$.skills')\n\n# JSON.ARRINDEX key path value [start [stop]]\n# O(N)\n# Search for the first occurrence of a JSON value in an array.\nr.json().arrindex('employee_profile:nicol', '$.skills', 'python')\nr.json().arrindex('employee_profile:nicol', '$.skills', 'java')\n"))),(0,a.kt)(o.Z,{value:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'/*\n * JSON.SET key path value\n * O(M+N) where M is the original size and N is the new size\n * Set the JSON value at path in key.\n */\ndb.JSON().Set("employee_profile:nicol", ".", new\n{\n    name = "Nicol",\n    age = 24,\n    single = true,\n    skills = new string[] { }\n});\ndb.JSON().Set("employee_profile:nicol", "$.name", "\\"Nicol\\"");\n\n/*\n * JSON.GET key [path [path ...]]\n * O(N)\n * Return the value at path in JSON serialized form\n */\ndb.JSON().Get("employee_profile:nicol", ".");\n\n/*\n * JSON.ARRAPPEND key [path] value [value ...]\n * O(1) for each value added, O(N) for multiple values added where N is the size\n * of the key\n * Append the value(s) to the array at path in key after the last element in the\n * array.\n */\ndb.JSON().Set("employee_profile:nicol", "$.skills", "[]");\ndb.JSON().ArrAppend("employee_profile:nicol", "$.skills", "python");\ndb.JSON().Get("employee_profile:nicol", "$.skills");\n\n/*\n * JSON.ARRINDEX key path value [start [stop]]\n * O(N)\n * Search for the first occurrence of a JSON value in an array.\n */\ndb.JSON().ArrIndex("employee_profile:nicol", "$.skills", "python");\ndb.JSON().ArrIndex("employee_profile:nicol", "$.skills", "java");\n'))),(0,a.kt)(o.Z,{value:"JAVA",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/*\n * JSON.SET key path value\n * O(M+N) where M is the original size and N is the new size\n * Set the JSON value at path in key.\n */\njedis.jsonSet("employee_profile:nicol", Path2.ROOT_PATH,\n        "{\\"name\\":\\"nicol\\",\\"age\\":24,\\"single\\":true,\\"skills\\":[]}");\njedis.jsonSet("employee_profile:nicol", Path2.of("$.name"),\n        "\\"Nicol\\"");\n\n/*\n * JSON.GET key [path [path ...]]\n * O(N)\n * Return the value at path in JSON serialized form\n */\njedis.jsonGet("employee_profile:nicol", Path2.ROOT_PATH);\n\n/*\n * JSON.ARRAPPEND key [path] value [value ...]\n * O(1) for each value added, O(N) for multiple values added where N is the size\n * of the key\n * Append the value(s) to the array at path in key after the last element in the\n * array.\n */\njedis.jsonSet("employee_profile:nicol", Path2.of("$.skills"),\n        "[]");\njedis.jsonArrAppend("employee_profile:nicol", Path2.of("$.skills"), "\\"python\\"");\njedis.jsonGet("employee_profile:nicol", Path2.of("$.skills"));\n\n/*\n * JSON.ARRINDEX key path value [start [stop]]\n * O(N)\n * Search for the first occurrence of a JSON value in an array.\n */\njedis.jsonArrIndex("employee_profile:nicol", Path2.of("$.skills"), "\\"python\\"");\njedis.jsonArrIndex("employee_profile:nicol", Path2.of("$.skills"), "\\"java\\"");\n')))))}d.isMDXComponent=!0}}]);