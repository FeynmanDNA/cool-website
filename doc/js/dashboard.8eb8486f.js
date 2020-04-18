(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"0bd8":function(e,t,s){},"171a":function(e,t,s){"use strict";var a=s("0bd8"),o=s.n(a);o.a},"465b":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"main"},[a("div",{staticClass:"header"},[a("svg-icon",{staticClass:"logo",attrs:{"icon-class":"logo"}})],1),a("el-container",{staticClass:"top-container"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:12}},[a("el-row",{staticClass:"top-title"},[e._v("Cool: a COhort OnLine analytical processing system")]),a("el-row",{staticClass:"sub-top-title"},[e._v("Cool is an online cohort analytical processing system that supports various types of data analytics, including cube query, iceberg query and cohort query. The objective of Cool is to provide high performance (near real-time) analytical response for emerging data warehouse domain. ")])],1),a("el-col",{attrs:{span:12}},[a("svg-icon",{staticClass:"p1",attrs:{"icon-class":"p1"}})],1)],1)],1),a("el-container",{staticClass:"box"},[a("el-row",{staticClass:"title"},[e._v("Architecture")]),a("el-container",{staticClass:"arch-container"},[a("el-row",{staticClass:"arch-wrapper",attrs:{gutter:20}},[a("el-col",{staticClass:"arch-img",attrs:{xs:24,sm:12}},[a("svg-icon",{staticClass:"p2",attrs:{"icon-class":"p2"}})],1),a("el-col",{attrs:{xs:24,sm:12}},[a("el-col",{staticClass:"arch-title"},[e._v(" Similar to conventional databases, Cool organizes data records in tables. Each table is maintained by a user-defined schema, consisting of multiple columns called fields or dimensions. A dimension file recording the hierarchy of several dimensions is also given by the users in order to support cube queries. Each dimension of the table is bound to a field type describing the format of the values. The primitive types include varied-length integer, float, string, boolean, time and event. The first four are similar to underlying database types while the remaining types are specifically defined by Cool. Time deals with the timestamps of the records and event is a particular string representing user actions or behaviors. A dimension tree is constructed in system setup guided by the dimension file and persisted in storage. ")])],1)],1)],1)],1),a("el-container",{staticClass:"box"},[a("el-row",{staticClass:"title"},[e._v("Storage Layout")]),a("el-row",{staticClass:"storage-desc"},[e._v("Cool employs a hybrid orientation plan for data storage. The tables are horizontally split into different partitions called cublets. Each cublet consists of multiple chunks, where the metaChunk contains all the values for a corresponding field in this cublet. ")]),a("el-row",{staticClass:"storage-content"},[a("svg-icon",{staticClass:"p3",attrs:{"icon-class":"p3"}})],1)],1),a("el-container",{staticClass:"box query-box"},[a("el-row",{staticClass:"query-title"},[e._v("Data Model & Query")]),a("el-row",{staticClass:"query-desc"},[e._v(" In Cool, all the queries are written in JSON format with a pre-defined syntax. Two types of queries are supported: ")]),a("el-container",{staticClass:"query-container"},[a("el-row",[a("svg-icon",{attrs:{"icon-class":"icon1"}})],1),e._l(e.queryList,(function(t,s){return a("el-row",{key:s},[e._v(e._s(t))])}))],2)],1),a("el-container",{staticClass:"example"},[a("el-row",{staticClass:"example-title"},[e._v("Here are two query examples:")]),a("el-row",[a("svg-icon",{staticClass:"icon2",attrs:{"icon-class":"icon2"}})],1),a("el-container",{staticClass:"code-container"},[a("el-row",[a("el-col",{attrs:{xs:24,sm:12}},[a("div",{staticClass:"code-img code-img-1"},[a("svg-icon",{attrs:{"icon-class":"code1"}})],1)]),a("el-col",{attrs:{xs:24,sm:12}},[a("div",{staticClass:"code-img code-img-2"},[a("svg-icon",{attrs:{"icon-class":"code2"}})],1)])],1)],1)],1),a("el-container",{staticClass:"box demo"},[a("el-row",{staticClass:"title"},[e._v("Demo")]),a("el-row",{staticClass:"storage-desc"},[e._v(" Cool is born from our previous work, Cohana, a cohort analysis processing system. Here is a video illustrating ageneral example about cohort analysis and our systems: ")]),a("el-row",{staticClass:"img-content"},[a("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/r28_jBD9qKg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1),a("el-container",{staticClass:"box demo"},[a("el-row",{staticClass:"title"},[e._v(" ICDE 2020 Presentation on COOL")]),a("el-row",{staticClass:"storage-desc"},[e._v(" our icde presentation ")]),a("el-row",{staticClass:"img-content"},[a("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:s("a33f"),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1),a("el-container",{staticClass:"box footer"},[a("el-row",[e._v("We will release our code and the new version of Cool in a very near future. ")]),a("el-row",[e._v("Please keep attention!")]),a("el-row"),a("el-row",[e._v(" © 2020 DBsystem All rights reserved by the Cool Squad. Members are from DBSystem Lab, NUS, Zhejiang University and MZH Tech. ")])],1)],1)},o=[],i={data:function(){return{queryList:["(1) OLAP query. Cool can be treated as a conventional OLAP system dealing with cube queries or iceberg queries. The system supports basic cube operations, including roll-up, drill-down, pivot and slice and dice, upon data cubes built atop the fields and the dimension tree. Cool can also provide responses for iceberg query, a prevailing type of query selecting a small number of records which satisfy some given conditions.","(2) Cohort Query. Cool can support an enhanced version of cohort queries. Traditional cohort query can only support aggregations on cohorts born with a single event along a fixed time window. However, Cool supports aggregations on cohorts born with a series of events, namely an event sequence, along either a fixed time window or an elastic time window delimited by given events. ","Cool supports composite query processing by running a successive query atop the result of a precedentquery.  The type of the precedent query and the successive query can be any combination of the two aforementioned query types. For instance, a cohort generated in a precedent cohort query can act as a data source for either a successive OLAP query or a successive cohort query. Such composite query is sometimes called funnel analysis in the literature. In the implementation, based on the user-defined schema and the dimension tree, data cube and cohort are stored conceptually as the intermediate structures to support such query. The meaning of “conceptually” here is that Cool materializes the matched records of the precedent query as well as the corresponding dimension structure in the storage layer and aggregates the corresponding results in runtime, instead of storing the resultant cohort or data cube tuples directly. By default, such intermediate structures exist in a fixed period and the system can be configured to persist them permanently."]}}},r=i,n=(s("171a"),s("2877")),l=Object(n["a"])(r,a,o,!1,null,"28a57c9e",null);t["default"]=l.exports},a33f:function(e,t,s){e.exports=s.p+"media/557_ICDE_Xie.9b1c66b5.mp4"}}]);
//# sourceMappingURL=dashboard.8eb8486f.js.map