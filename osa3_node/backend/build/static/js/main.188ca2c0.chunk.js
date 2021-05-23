(this["webpackJsonpsingle-page-app"]=this["webpackJsonpsingle-page-app"]||[]).push([[0],{39:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(15),o=e.n(c),r=e(2),i=e(6),a=e(3),u=e(0),s=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[n.content,Object(u.jsx)("button",{onClick:e,children:c})]})},l=e(4),j=e.n(l),f="/api/notes",b=function(){var t=j.a.get(f),n={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(n)}))},d=function(t){return j.a.post(f,t).then((function(t){return t.data}))},p=function(t,n){return j.a.put("".concat(f,"/").concat(t),n).then((function(t){return t.data}))},h=function(t){var n=t.message;return null===n?null:Object(u.jsx)("div",{className:"error",children:n})},m=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},O=function(){var t=Object(r.useState)([]),n=Object(a.a)(t,2),e=n[0],c=n[1],o=Object(r.useState)(""),l=Object(a.a)(o,2),j=l[0],f=l[1],O=Object(r.useState)(!0),v=Object(a.a)(O,2),g=v[0],x=v[1],S=Object(r.useState)(null),k=Object(a.a)(S,2),y=k[0],w=k[1];Object(r.useEffect)((function(){b().then((function(t){c(t)}))}),[]),console.log("render",e.length,"notes");var N=g?e:e.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(h,{message:y}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return x(!g)},children:["show ",g?"important":"all"]})}),Object(u.jsx)("ul",{children:N.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){"http://localhost:3001/notes/".concat(t);var n=e.find((function(n){return n.id===t})),o=Object(i.a)(Object(i.a)({},n),{},{important:!n.important});p(t,o).then((function(n){c(e.map((function(e){return e.id!==t?e:n})))})).catch((function(o){w("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),c(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:j,date:(new Date).toISOString(),important:Math.random()>.5,id:e.length+1};d(n).then((function(t){c(e.concat(t)),f("")}))},children:[Object(u.jsx)("input",{value:j,onChange:function(t){console.log(t.target.value),f(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(m,{})]})};e(39);o.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.188ca2c0.chunk.js.map