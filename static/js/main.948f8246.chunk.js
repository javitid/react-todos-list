(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(6),i=n.n(r),a=(n(12),n(5)),u=n(7),s=(n(13),n(0));function d(t){var e=t.todo,n=t.toggleTodo,c=e.id,o=e.task,r=e.completed;return Object(s.jsxs)("li",{children:[Object(s.jsx)("input",{type:"checkbox",checked:r,onChange:function(){n(c)}}),o]})}function l(t){var e=t.todos,n=t.toggleTodo;return Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)(d,{todo:t,toggleTodo:n},t.id)}))})}var j="todoApp.todos";function f(){var t=Object(c.useState)([{id:1,task:"Task 1",completed:!1},{id:2,task:"Task 2",completed:!1},{id:3,task:"Task 3",completed:!1}]),e=Object(u.a)(t,2),n=e[0],o=e[1],r=Object(c.useRef)();Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(j));t&&o(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(j,JSON.stringify(n))}),[n]);return Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)(l,{todos:n,toggleTodo:function(t){var e=Object(a.a)(n),c=e.find((function(e){return e.id===t}));c.completed=!c.completed,o(e)}}),Object(s.jsx)("input",{ref:r,type:"text",placeholder:"New task"}),Object(s.jsx)("button",{onClick:function(){var t=r.current.value;""!==t&&(o((function(e){return[].concat(Object(a.a)(e),[{id:e.slice(-1)?e.slice(-1)[0].id+1:0,task:t,completed:!1}])})),r.current.value=null)},children:"\u2795"}),Object(s.jsx)("button",{onClick:function(){var t=n.filter((function(t){return!t.completed}));o(t)},children:"\ud83d\uddd1\ufe0f"}),Object(s.jsxs)("div",{children:["Te quedan ",n.filter((function(t){return!t.completed})).length," tareas por terminar"]})]})}var b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.948f8246.chunk.js.map