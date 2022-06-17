"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5307],{85162:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r=a(86010),o="tabItem_Ymn6";function s(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(87462),r=a(67294),o=a(86010),s=a(72389),i=a(67392),l=a(7094),p=a(12466),c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,a,s=e.lazy,d=e.block,h=e.defaultValue,m=e.values,f=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===h?h:null!=(t=null!=h?h:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,x=w.setTabGroupChoices,E=(0,r.useState)(v),R=E[0],T=E[1],A=[],S=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=N[f];null!=I&&I!==R&&k.some((function(e){return e.value===I}))&&T(I)}var P=function(e){var t=e.currentTarget,a=A.indexOf(t),n=k[a].value;n!==R&&(S(t),T(n),null!=f&&x(f,String(n)))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=A.indexOf(e.currentTarget)+1;a=null!=(n=A[r])?n:A[0];break;case"ArrowLeft":var o,s=A.indexOf(e.currentTarget)-1;a=null!=(o=A[s])?o:A[A.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return A.push(e)},onKeyDown:C,onFocus:P,onClick:P},s,{className:(0,o.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":R===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(g.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function h(e){var t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},1203:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),r=a(3905),o=a(48811),s="riContainer_bco2",i="riDescriptionShort_E27B",l="riDetail_wzFs",p="riIcon_yDou",c="riTitle_x6vI",u="riDescription_RDnu",d="riMore_apRP",h=a(86010),m=function(e){var t=n.useState(!1),a=t[0],m=t[1];return n.createElement("a",{href:e.page,className:s},n.createElement("div",{className:i},n.createElement("div",{className:p},n.createElement("span",{className:"fe fe-zap"})),n.createElement("div",{className:l},n.createElement("div",{className:c},n.createElement("a",{href:e.page},e.title)),n.createElement("div",{className:u},e.description,n.Children.count(e.children)>0&&n.createElement("span",{className:(0,h.Z)(d,"fe","fe-more-horizontal"),onClick:function(){return m(!a)}})))),a&&n.createElement("div",{className:"ri-description-long"},n.createElement(r.Zo,{components:o.Z},e.children)))}},31905:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=(a(65488),a(85162),a(44996),a(1203),["components"]),i={id:"index-kubernetes-operator",title:"Kubernetes Operator: What It Is and Why You Should Really Care About It",sidebar_label:"Kubernetes Operator: What It Is and Why You Should Really Care About It",slug:"/operate/orchestration/kubernetes-operator",authors:["ajeet"]},l=void 0,p={unversionedId:"operate/orchestration/kubernetes-operator/index-kubernetes-operator",id:"operate/orchestration/kubernetes-operator/index-kubernetes-operator",title:"Kubernetes Operator: What It Is and Why You Should Really Care About It",description:"My Image",source:"@site/docs/operate/orchestration/kubernetes-operator/index-kubernetes-operator.mdx",sourceDirName:"operate/orchestration/kubernetes-operator",slug:"/operate/orchestration/kubernetes-operator",permalink:"/operate/orchestration/kubernetes-operator",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/orchestration/kubernetes-operator/index-kubernetes-operator.mdx",tags:[],version:"current",lastUpdatedAt:1655485542,formattedLastUpdatedAt:"6/17/2022",frontMatter:{id:"index-kubernetes-operator",title:"Kubernetes Operator: What It Is and Why You Should Really Care About It",sidebar_label:"Kubernetes Operator: What It Is and Why You Should Really Care About It",slug:"/operate/orchestration/kubernetes-operator",authors:["ajeet"]},sidebar:"docs",previous:{title:"Redis on Kubernetes",permalink:"/operate/orchestration/kubernetes/kubernetes-gke"},next:{title:"Overview",permalink:"/howtos"}},c={},u=[{value:"Stateful vs Stateless Applications",id:"stateful-vs-stateless-applications",level:3},{value:"Scaling stateful application is hard",id:"scaling-stateful-application-is-hard",level:3},{value:"Functions of Kubernetes Operator",id:"functions-of-kubernetes-operator",level:3},{value:"Kubernetes Operators:",id:"kubernetes-operators",level:4},{value:"How does an Operator work?",id:"how-does-an-operator-work",level:3},{value:"What is the Redis Enterprise Operator?",id:"what-is-the-redis-enterprise-operator",level:3},{value:"How does the Redis Enterprise Operator work?",id:"how-does-the-redis-enterprise-operator-work",level:3},{value:"Example of Operator automation",id:"example-of-operator-automation",level:3},{value:"References",id:"references",level:3}],d={toc:u};function h(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"My Image",src:a(91345).Z,width:"1228",height:"732"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes"),' is popular due to its capability to deploy new apps at a faster pace. Thanks to "Infrastructure as data" (specifically, YAML), today you can express all your Kubernetes resources such as ',(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/"},"Pods"),", ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployments"),", ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Services"),", ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/volumes/"},"Volumes"),", etc., in a YAML file. These default objects make it much easier for DevOps and SRE engineers to fully express their workloads without the need to learn how to write code in a programming language like Python, Java, or Ruby."),(0,o.kt)("p",null,"Kubernetes is designed for automation. Out of the box, you get lots of built-in automation from the core of Kubernetes. It can speed up your development process by making easy, automated deployments, updates (rolling update), and by managing your apps and services with almost zero downtime. However, Kubernetes can\u2019t automate the process natively for stateful applications. For example, say you have a stateful workload, such as a database application, running on several nodes. If a majority of nodes go down, you\u2019ll need to reload the database from a specific snapshot following specific steps. Using existing default objects, types, and controllers in Kubernetes, this would be impossible to achieve."),(0,o.kt)("p",null,"Think of scaling nodes up, or upgrading to a new version, or disaster recovery for your stateful application \u2014 these kinds of operations often need very specific steps, and typically require manual intervention. Kubernetes cannot know all about every stateful, complex, clustered application. Kubernetes, on its own, does not know the configuration values for, say, a Redis database cluster, with its arranged memberships and stateful, persistent storage. Additionally, scaling stateful applications in Kubernetes is not an easy task and requires manual intervention."),(0,o.kt)("h3",{id:"stateful-vs-stateless-applications"},"Stateful vs Stateless Applications"),(0,o.kt)("p",null,"Let\u2019s try to understand the difference between ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/stateful-application/"},"stateful")," versus ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/stateless-application/"},"stateless")," applications with a simple example. Consider a Kubernetes cluster running a simple web application (without any operator). The YAML file below allows you to create two replicas of NGINX (a stateless application)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," apiVersion: apps/v1\n kind: Deployment\n metadata:\n   name: nginx-deployment\n   namespace: web\n spec:\n   selector:\n     matchLabels:\n       app: nginx\n   replicas: 2\n   template:\n     metadata:\n       labels:\n         app: nginx\n     spec:\n       containers:\n       - name: nginx\n         image: nginx:1.14.2\n         ports:\n         - containerPort: 80\n\n")),(0,o.kt)("p",null,"In the example above, a Deployment object named ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx-deployment")," is created under a namespace \u201cweb,\u201d indicated by the ",(0,o.kt)("inlineCode",{parentName:"p"},".metadata.name")," field. It creates two replicated Pods, indicated by the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.replicas")," field. The ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.selector")," field defines how the Deployment finds which Pods to manage. In this case, you select a label that is defined in the Pod template (app: nginx). The template field contains the following subfields: the Pods are labeled ",(0,o.kt)("inlineCode",{parentName:"p"},"app: nginx")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},".metadata.labels")," field and the Pod template's specification indicates that the Pods run one container, nginx, which runs the nginx Docker Hub image at version 1.14.2. Finally, it creates one container and names it nginx."),(0,o.kt)("p",null,"Run the command below to create the Deployment resource:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl create -f nginx-dep.yaml\n")),(0,o.kt)("p",null,"Let us verify if the Deployment was created successfully by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," kubectl get deployments\n NAME               READY   UP-TO-DATE   AVAILABLE   AGE\n nginx-deployment   2/2     2            2           63s\n")),(0,o.kt)("p",null,"The example above shows the name of the Deployment in the namespace. It also displays how many replicas of the application are available to your users. You can also see that the number of desired replicas that have been updated to achieve the desired state is 2."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:a(3891).Z,width:"1722",height:"1324"})),(0,o.kt)("p",null,"You can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl describe")," command to get detailed information of deployment resources. To show details of a specific resource or group of resources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," kubectl describe deploy\n Name:                   nginx-deployment\n Namespace:              default\n CreationTimestamp:      Mon, 30 Dec 2019 07:10:33 +0000\n Labels:                 <none>\n Annotations:            deployment.kubernetes.io/revision: 1\n Selector:               app=nginx\n Replicas:               2 desired | 2 updated | 2 total | 0 available | 2 unavailable\n StrategyType:           RollingUpdate\n MinReadySeconds:        0\n RollingUpdateStrategy:  25% max unavailable, 25% max surge\n Pod Template:\n   Labels:  app=nginx\n   Containers:\n    nginx:\n     Image:        nginx:1.7.9\n     Port:         80/TCP\n     Host Port:    0/TCP\n     Environment:  <none>\n     Mounts:       <none>\n   Volumes:        <none>\n Conditions:\n   Type           Status  Reason\n   ----           ------  ------\n   Available      False   MinimumReplicasUnavailable\n   Progressing    True    ReplicaSetUpdated\n OldReplicaSets:  <none>\n NewReplicaSet:   nginx-deployment-6dd86d77d (2/2 replicas created)\n Events:\n   Type    Reason             Age   From                   Message\n   ----    ------             ----  ----                   -------\n   Normal  ScalingReplicaSet  90s   deployment-controller  Scaled up replica set nginx-deployment-6dd86d77d to 2\n")),(0,o.kt)("p",null,"A Deployment is responsible for keeping a set of Pods running, but it\u2019s equally important to expose an interface to these Pods so that the other external processes can access them. That\u2019s where the Service resource comes in. The Service resource lets you expose an application running in Pods to be reachable from outside your cluster. Let us create a Service resource definition as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\nspec:\n  selector:\n    app: nginx\n  ports:\n    - port: 80\n      targetPort: 80\n  type: LoadBalancer\n")),(0,o.kt)("p",null,'The above YAML specification creates a new Service object named "nginx-service," which targets TCP port 80 on any Pod with the ',(0,o.kt)("inlineCode",{parentName:"p"},"app=nginx")," label."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," kubectl get svc -n web\n NAME            TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE\n nginx-service   LoadBalancer   10.107.174.108   localhost     80:31596/TCP   46s\n\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:a(90232).Z,width:"1556",height:"1234"})),(0,o.kt)("p",null,"Let\u2019s scale the Deployment to 4 replicas. We are going to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl scale")," command, followed by the deployment type, name, and desired number of instances. The output is similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl scale deployments/nginx-deployment --replicas=4\ndeployment.extensions/nginx-deployment scaled\n")),(0,o.kt)("p",null,"The change was applied, and we have 4 instances of the application available. Next, let\u2019s check if the number of Pods changed. There should now be 4 Pods running in the cluster (as shown in the diagram below)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:a(18495).Z,width:"2040",height:"1412"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl get deployments\n NAME               READY   UP-TO-DATE   AVAILABLE   AGE\n nginx-deployment   4/4     4            4           4m\n")),(0,o.kt)("p",null,"There are 4 Pods, with different IP addresses. The change was registered in the Deployment events log."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," kubectl get pods -o wide\n NAME                               READY   STATUS    RESTARTS   AGE     IP           NODE             NOMINATED NODE   READINESS GATES\n nginx-deployment-6dd86d77d-b4v7k   1/1     Running   0          4m32s   10.1.0.237   docker-desktop   none             none\n nginx-deployment-6dd86d77d-bnc5m   1/1     Running   0          4m32s   10.1.0.236   docker-desktop   none             none\n nginx-deployment-6dd86d77d-bs6jr   1/1     Running   0          86s     10.1.0.239   docker-desktop   none             none\n nginx-deployment-6dd86d77d-wbdzv   1/1     Running   0          86s     10.1.0.238   docker-desktop   none             none\n\n")),(0,o.kt)("p",null,"Deleting one of the web server Pods triggers work in the control plane to restore the desired state of four replicas. Kubernetes starts a new Pod to replace the deleted one. In this excerpt, the replacement Pod shows a STATUS of ContainerCreating:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl delete pod nginx-deployment-6dd86d77d-b4v7k\n")),(0,o.kt)("p",null,"You will notice that the Nginx static web server is interchangeable with any other replica, or with a new Pod that replaces one of the replicas. It doesn\u2019t store data or maintain state in any way. Kubernetes doesn\u2019t need to make any special arrangements to replace a failed Pod, or to scale the application by adding or removing replicas of the server. Now you might be thinking, what if you want to store the state of the application? Great question."),(0,o.kt)("h3",{id:"scaling-stateful-application-is-hard"},"Scaling stateful application is hard"),(0,o.kt)("p",null,"Scaling stateless applications in Kubernetes is easy but it\u2019s not the same case for stateful applications. Stateful applications require manual intervention. Bringing Pods up and down is not that simple. Each Node has an identity and some data attached to it. Removing a Pod means losing its data and disrupting the system."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:a(45470).Z,width:"2268",height:"1422"})),(0,o.kt)("p",null,"Consider a Kubernetes cluster with 6 worker Nodes hosting a Nginx web application connected to a persistent volume as shown above. Here is the snippet of StatefulSets YAML file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: web\nspec:\n  serviceName: "nginx"\n  replicas: 2\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n          name: web\n        volumeMounts:\n        - name: www\n          mountPath: /usr/share/nginx/html\n  volumeClaimTemplates:\n  - metadata:\n      name: www\n    spec:\n      accessModes: [ "ReadWriteOnce" ]\n      resources:\n        requests:\n          storage: 1Gi\n\n')),(0,o.kt)("p",null,"Kubernetes makes physical storage devices available to your cluster in the form of objects called ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Persistent Volumes"),". Each of these Persistent Volumes is consumed by a Kubernetes Pod by issuing a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#claims-as-volumes"},"PersistentVolumeClaim")," object, also known as PVC. A PVC object lets Pods use storage from Persistent Volumes. Imagine a scenario in which we want to downscale a cluster from 5 Nodes to 3 Nodes. Suddenly removing 2 Nodes at once is a potentially destructive operation. This might lead to the loss of all copies of the data. A better way to handle Node removal would be to first migrate data from the Node to be removed to other Nodes in the system before performing the actual Pod deletion. It is important to note that the StatefulSet controller is necessarily generic and cannot possibly know about every possible way to manage data migration and replication. In practice, however, StatefulSets are rarely enough to handle complex, distributed stateful workload systems in production environments."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now the question is, how to solve this problem? "),"Enter Operators. Operators were developed to handle the sophisticated, stateful applications that the default Kubernetes controllers aren\u2019t able to handle. While Kubernetes controllers like ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSets")," are ideal for deploying, maintaining, and scaling simple stateless applications, they are not equipped to handle access to stateful resources, or to upgrade, resize, and backup of more elaborate clustered applications such as databases. A Kubernetes Operator fills in the gaps between the capabilities and automation provided by Kubernetes and how your software uses Kubernetes for automation of tasks relevant to your software."),(0,o.kt)("p",null,"An Operator is basically an application-specific controller that can help you manage a Kubernetes application. It is a way to package, run, and maintain a Kubernetes application. It is designed to extend the capabilities of Kubernetes, and also simplify application management. This is especially useful for stateful applications, which include persistent storage and other elements external to the application, and may require extra work to manage and maintain."),(0,o.kt)("h3",{id:"functions-of-kubernetes-operator"},"Functions of Kubernetes Operator"),(0,o.kt)("p",null,"A Kubernetes Operator uses the Kubernetes API to create, configure, and manage instances of complex stateful applications on behalf of a Kubernetes user. There is a public repository called ",(0,o.kt)("a",{parentName:"p",href:"https://operatorhub.io"},"OperatorHub.io")," that is designed to be the public registry for finding Kubernetes Operator backend services. With Operator Hub, developers can easily create an application based on an operator without going through the complexity of crafting an operator from scratch."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:a(39948).Z,width:"1246",height:"812"})),(0,o.kt)("p",null,"Below are a few examples of popular Kubernetes Operators and their functions and capabilities."),(0,o.kt)("h4",{id:"kubernetes-operators"},"Kubernetes Operators:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Helps you deploy an application on demand (for example, ",(0,o.kt)("a",{parentName:"li",href:"https://operatorhub.io/operator/argocd-operator-helm"},"Argo CD operator (Helm")," is a declarative, GitOps continuous delivery tool for Kubernetes that helps with easy installation and configuration on demand)"),(0,o.kt)("li",{parentName:"ul"},"Helps you install applications with the required configurations and number of application instances"),(0,o.kt)("li",{parentName:"ul"},"Allows you to take and restore backups of the application state (for example, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/vmware-tanzu/velero"},"Velero operator")," manages disaster recovery, backup, and restoration of cluster components such as pv, pvc, deployments, etc., to aid in disaster recovery)"),(0,o.kt)("li",{parentName:"ul"},"Handles the upgrades of the application code plus the changes, such as database schema (for example, ",(0,o.kt)("a",{parentName:"li",href:"https://fluxcd.io/"},"Flux ")," is a continuous delivery solution for Kubernetes that allows automating updates to configuration when there is new code to deploy)"),(0,o.kt)("li",{parentName:"ul"},"Can manage a cluster of database servers (for example, ",(0,o.kt)("a",{parentName:"li",href:"https://operatorhub.io/operator/mariadb-operator-app"},"MariaDB operator")," creates MariaDB server and database easily by defining simple custom resource)"),(0,o.kt)("li",{parentName:"ul"},"Can install a database cluster of a declared software version and number of members"),(0,o.kt)("li",{parentName:"ul"},"Scale applications in or out"),(0,o.kt)("li",{parentName:"ul"},"Continues to monitor an application as it runs (for example, ",(0,o.kt)("a",{parentName:"li",href:"https://operatorhub.io/operator/prometheus"},"Prometheus Operator ")," simplifies the deployment and configuration of Prometheus, Alertmanager, and related monitoring components)"),(0,o.kt)("li",{parentName:"ul"},"Initiate upgrades, automated backups, and failure recovery, simulating failure in all or part of your cluster to test its resilience"),(0,o.kt)("li",{parentName:"ul"},"Allows you to publish a service to applications that don\u2019t support Kubernetes APIs to discover them")),(0,o.kt)("h3",{id:"how-does-an-operator-work"},"How does an Operator work?"),(0,o.kt)("p",null,"Operators work by extending the Kubernetes control plane and API. Operators allows you to define a Custom Controller that watches your application and performs custom tasks based on its state. The application you want to watch is usually defined in Kubernetes as a new object: a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Custom Resource")," (CR) that has its own YAML spec and object type that is well understood by the API server. That way, you can define any specific criteria in the custom spec to watch out for, and reconcile the instance when it doesn\u2019t match the spec. The way an Operator\u2019s controller reconciles against a spec is very similar to native Kubernetes controllers, though it is using mostly custom components."),(0,o.kt)("h3",{id:"what-is-the-redis-enterprise-operator"},"What is the Redis Enterprise Operator?"),(0,o.kt)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/VjQZScpBj-I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,"Redis has created an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.redis.com/6.0/platforms/kubernetes/concepts/operator/"},"Operator")," that deploys and manages the lifecycle of a Redis Enterprise Cluster. ",(0,o.kt)("a",{parentName:"p",href:"https://operatorhub.io/operator/redis-enterprise"},"The Redis Enterprise Operator")," is the fastest, most efficient way to deploy and maintain a Redis Enterprise cluster in Kubernetes. The Operator creates, configures, and manages Redis Enterprise deployments from a single Kubernetes control plane. This means that you can manage Redis Enterprise instances on Kubernetes just by creating native objects, such as a Deployment, ReplicaSet, StatefulSet, etc. Operators allow full control over the Redis Enterprise cluster lifecycle."),(0,o.kt)("p",null,"The Redis Enterprise Operator acts as a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-controllers"},"custom controller")," for the custom resource Redis Enterprise Cluster, or \u201cREC\u201d, which is defined through Kubernetes CRD (",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#custom-resources"},"customer resource definition"),") and deployed with a YAML file.The Redis Enterprise Operator functions as the logic \u201cglue\u201d between the Kubernetes infrastructure and the Redis Enterprise cluster."),(0,o.kt)("h3",{id:"how-does-the-redis-enterprise-operator-work"},"How does the Redis Enterprise Operator work?"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:a(59280).Z,width:"1676",height:"1202"})),(0,o.kt)("p",null,"The Redis Enterprise Operator supports two Custom Resource Definitions (CRDs):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redis Enterprise Cluster "),"(REC): An API to create Redis Enterprise clusters. Note that only one cluster is supported per Operator deployment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redis Enterprise Database "),"(REDB): An API to create Redis databases running on the Redis Enterprise cluster. Note that the Redis Enterprise Operator is namespaced. High-level architecture and overview of the solution can be found ",(0,o.kt)("a",{parentName:"li",href:"https://docs.redislabs.com/latest/platforms/kubernetes/"},"HERE"),".")),(0,o.kt)("p",null,"This is how it works:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, the Redis Enterprise cluster custom resource (\u201cCR\u201d for short) is read and validated by the operator for a cluster specification."),(0,o.kt)("li",{parentName:"ol"},"Secondly, cluster StatefulSet, service rigger, cluster admin secrets, RS/UI services are created."),(0,o.kt)("li",{parentName:"ol"},"A Redis Enterprise Database CR is read and validated by the operator."),(0,o.kt)("li",{parentName:"ol"},"The database is created on the cluster and the database access credentials are stored in a Kubernetes secret object."),(0,o.kt)("li",{parentName:"ol"},"The service rigger discovers the new database and configures the Kubernetes service for the database."),(0,o.kt)("li",{parentName:"ol"},"An application workload uses the database secret and service for access to data.")),(0,o.kt)("h3",{id:"example-of-operator-automation"},"Example of Operator automation"),(0,o.kt)("p",null,"Consider the YAML file below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apiVersion: app.redislabs.com/v1\nkind: RedisEnterpriseCluster\nmetadata:\n  name: rec\nspec:\n  # Add fields here\n  nodes: 3\n\n")),(0,o.kt)("p",null,"If you change the number of nodes to 5, the Operator talks to StatefulSets, and changes the number of replicas from 3 to 5. Once that happens, Kubernetes will take over and bootstrap new Nodes one at a time, deploying Pods accordingly. As each becomes ready, the new Nodes join the cluster and become available to Redis Enterprise master Nodes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:a(16330).Z,width:"1230",height:"716"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apiVersion: app.redislabs.com/v1\nkind: RedisEnterpriseDatabase\nmetadata:\n  name: redis-enterprise-database\nspec:\n  redisEnterpriseCluster:\n    name: redis-enterprise\n    Memory: 2G\n\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt_text",src:a(46938).Z,width:"1518",height:"1506"})),(0,o.kt)("p",null,"In order to create a database, the Operator discovers the resources, talks to the cluster RestAPI, and then it creates the database. The server talks to the API and discovers it. The DB creates a Redis database service endpoint for that database and that will be available."),(0,o.kt)("p",null,"In the next tutorial, you will learn how to get started with the Redis Enterprise Kubernetes Operator from scratch, including how to perform non-trivial tasks such as backup, restore, horizontal scaling, and much more. Stay tuned!"),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/create/kubernetes/"},"Create Redis database on Google Kubernetes Engine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.redis.com/latest/kubernetes/deployment/quick-start/"},"Redis Enterprise Software on Kubernetes architecture ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.redis.com/latest/kubernetes/deployment/quick-start/"},"Deploy Redis Enterprise Software on Kubernetes"))))}h.isMDXComponent=!0},91345:function(e,t,a){t.Z=a.p+"assets/images/image1-1e92843037d483a8d50131ad0782ce81.png"},3891:function(e,t,a){t.Z=a.p+"assets/images/image2-0cc6134e38326b6b06aac1e0dfc25f69.png"},90232:function(e,t,a){t.Z=a.p+"assets/images/image3-38ec17970520b64f9fa2f046f5c3f077.png"},18495:function(e,t,a){t.Z=a.p+"assets/images/image4-755bd50b0b5593c478633052ab0fdaec.png"},45470:function(e,t,a){t.Z=a.p+"assets/images/image5-b3e307cfb5e6d5aba45f164f9d6d1629.png"},39948:function(e,t,a){t.Z=a.p+"assets/images/image6-2382df7cc9d1f38c995144f08a030e4a.png"},59280:function(e,t,a){t.Z=a.p+"assets/images/image7-a53d07a9fa4d9521e7cb5e3ed1fdb1c5.png"},16330:function(e,t,a){t.Z=a.p+"assets/images/image8-eee52222bd4f1f03666ff55d063d9d77.png"},46938:function(e,t,a){t.Z=a.p+"assets/images/image9-19d2f3b3190b96fc273842668b952ada.png"}}]);