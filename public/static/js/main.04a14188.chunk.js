(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{69:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(24),s=n.n(r),i=(n(69),n(56)),o=n(61),l=n(37),u=n(51),j=n(1),d=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.a,{bg:"dark",variant:"dark",sticky:"top",children:Object(j.jsxs)(o.a,{children:[Object(j.jsxs)(i.a.Brand,{href:"/",children:[Object(j.jsx)("img",{src:"./icon.png",width:"35",height:"35",className:"d-inline-block align-top",alt:""})," ",Object(j.jsx)("span",{className:"h3",children:"NewsApp"})]}),Object(j.jsxs)(u.a,{className:"m-auto",children:[Object(j.jsx)(u.a.Link,{as:l.b,to:"/",className:"h3 mx-2",children:"News"}),Object(j.jsx)(u.a.Link,{as:l.b,to:"archived",className:"h3 mx-2",children:"Archived"})]})]})})})},h=n(10),b=n(2),O=n(6),x=n(9),p=n.n(x),f=n(14),m=n(17),v="https://newsappjcca.herokuapp.com/api",g=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(v,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},w=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={_id:t},e.next=3,g("news/archive_new",n,"POST");case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=new Date(e),n=t.getFullYear(),a=(t.getMonth()+1).toString();1===a.length&&(a="0"+a);var c=t.getDate().toString();1===c.length&&(c="0"+c);var r=t.getHours().toString();1===r.length&&(r="0"+r);var s=t.getMinutes().toString();return 1===s.length&&(s="0"+s),"".concat(n,"/").concat(a,"/").concat(t.getDate(),"  ").concat(r,":").concat(s)},y=n(30),k=function(e){var t=e.title,n=e.description,a=e.date,c=e.content,r=e.author,s=(e.archiveDate,e._id),i=e.setNews,o=N(a),l=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(s);case 2:200===e.sent&&u();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){i((function(e){return e.filter((function(e){return e._id!==s}))}))};return Object(j.jsx)(m.a,{style:{width:"90%"},className:"my-3",children:Object(j.jsxs)(m.a.Body,{children:[Object(j.jsx)(m.a.Title,{children:t}),Object(j.jsx)(m.a.Subtitle,{className:"mb-2 text-muted",children:n}),Object(j.jsx)(m.a.Text,{children:c}),Object(j.jsx)(m.a.Footer,{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col",children:["Date: ",o]}),Object(j.jsxs)("div",{className:"col",children:["Author: ",r]}),Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)(y.a,{onClick:l,variant:"dark",children:[Object(j.jsx)("img",{src:"./eye-off.png",width:"25",height:"25",className:"d-inline-block align-top",alt:""})," Archive"]})})]})})]})})},S=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("news/get_news",null);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=n(39),C=n(18),T=function(){var e=Object(f.a)(p.a.mark((function e(t,n,a,c){var r,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={title:t,description:n,content:a,author:c},e.next=3,g("news/create_new",r,"POST");case 3:return s=e.sent,e.next=6,s.json();case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),A=function(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2)[1],n=Object(a.useState)(""),c=Object(O.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),o=Object(O.a)(i,2),l=o[0],u=o[1],d=Object(a.useState)(""),h=Object(O.a)(d,2),b=h[0],x=h[1],m=Object(a.useState)(""),v=Object(O.a)(m,2),g=v[0],w=v[1],N=function(){var e=Object(f.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return!1===n.currentTarget.checkValidity()&&(n.preventDefault(),n.stopPropagation()),e.next=4,T(r,l,b,g);case 4:t(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(C.a,{id:"form",onSubmit:N,children:[Object(j.jsxs)(C.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(j.jsx)(C.a.Label,{children:"Title"}),Object(j.jsx)(C.a.Control,{required:!0,type:"text",placeholder:"Title",value:r,onChange:function(e){s(e.target.value)}})]}),Object(j.jsxs)(C.a.Group,{className:"mb-3",controlId:"description",children:[Object(j.jsx)(C.a.Label,{children:"Description"}),Object(j.jsx)(C.a.Control,{required:!0,type:"text",placeholder:"Description",value:l,onChange:function(e){u(e.target.value)}})]}),Object(j.jsxs)(C.a.Group,{className:"mb-3",controlId:"content",children:[Object(j.jsx)(C.a.Label,{children:"Content"}),Object(j.jsx)(C.a.Control,{required:!0,as:"textarea",placeholder:"Content",value:b,onChange:function(e){x(e.target.value)}})]}),Object(j.jsxs)(C.a.Group,{className:"mb-3",controlId:"author",children:[Object(j.jsx)(C.a.Label,{children:"Author"}),Object(j.jsx)(C.a.Control,{required:!0,type:"text",placeholder:"Author",value:g,onChange:function(e){w(e.target.value)}})]}),Object(j.jsx)(y.a,{variant:"dark",type:"submit",className:"px-5",children:"Save"})]})},D=function(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(y.a,{variant:"dark",onClick:function(){return c(!0)},id:"buttonModal",children:[Object(j.jsx)("img",{src:"./plus.png",width:"25",height:"25",className:"d-inline-block align-top",alt:""}),"Create New"]}),Object(j.jsxs)(_.a,{show:n,onHide:function(){return c(!1)},children:[Object(j.jsx)(_.a.Header,{closeButton:!0,children:Object(j.jsx)(_.a.Title,{children:"Create a New"})}),Object(j.jsx)(_.a.Body,{children:Object(j.jsx)(A,{})})]})]})},E=function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1],r=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(O.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){S().then((function(e){r({data:e,loading:!1})}))}),[e]),c}(n),s=r.data,i=r.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(j.jsx)("p",{className:"display-1 m-auto",children:"News"}),Object(j.jsx)("p",{className:"m-auto",children:Object(j.jsx)(D,{})})]}),Object(j.jsxs)("div",{align:"center",children:[i&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(j.jsx)("ol",{children:s.map((function(e){return Object(j.jsx)(k,Object(b.a)(Object(b.a)({},e),{},{setNews:c}),e._id)}))})]})]})},L=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={_id:t},e.next=3,g("archived/delete_archived",n,"DELETE");case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e){var t=e._id,n=e.title,a=e.description,c=e.date,r=e.content,s=e.author,i=(e.archiveDate,e.setArchived),o=N(c),l=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:200===e.sent&&u();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){i((function(e){return e.filter((function(e){return e._id!==t}))}))};return Object(j.jsx)(m.a,{style:{width:"90%"},className:"my-3",children:Object(j.jsxs)(m.a.Body,{children:[Object(j.jsx)(m.a.Title,{children:n}),Object(j.jsx)(m.a.Subtitle,{className:"mb-2 text-muted",children:a}),Object(j.jsx)(m.a.Text,{children:r}),Object(j.jsx)(m.a.Footer,{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col",children:["Archived date: ",o]}),Object(j.jsxs)("div",{className:"col",children:["Author: ",s]}),Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)(y.a,{onClick:l,variant:"dark",children:[Object(j.jsx)("img",{src:"./delete.png",width:"25",height:"25",className:"d-inline-block align-top",alt:""}),"Delete"]})})]})})]})})},F=function(){var e=Object(f.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("archived/get_archived",null);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1],r=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(O.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){F().then((function(e){r({data:e,loading:!1})}))}),[e]),c}(n),s=r.data,i=r.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)("p",{className:"display-1 m-auto",children:"Archived"})}),Object(j.jsx)("div",{align:"center",children:Object(j.jsxs)("ol",{children:[i&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),s.map((function(e){return Object(j.jsx)(B,Object(b.a)(Object(b.a)({},e),{},{setArchived:c}),e._id)}))]})})]})};n(78);n(79).config(),s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/",component:E}),Object(j.jsx)(h.a,{path:"/archived",component:G})]})]})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.04a14188.chunk.js.map