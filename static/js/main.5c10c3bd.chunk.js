(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(10),s=a.n(i),l=(a(18),a(8)),c=a(12),d=a(3),r=a(4),u=a(6),h=a(5),m=a(1),p=a(7),b=a(2),g=(a(19),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={isEditing:!1,task:a.props.task},a.handleRemove=a.handleRemove.bind(Object(m.a)(a)),a.toggleForm=a.toggleForm.bind(Object(m.a)(a)),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleUpdate=a.handleUpdate.bind(Object(m.a)(a)),a.handleToggle=a.handleToggle.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(e){e.preventDefault(),""===this.state.task?alert("Todo item cannot be empty!"):(this.props.updateTodo(this.props.id,this.state.task),this.setState({isEditing:!1}))}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleToggle",value:function(){this.props.toggleTodo(this.props.id)}},{key:"render",value:function(){return this.state.isEditing?n.a.createElement("div",{className:"Todo"},n.a.createElement("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate},n.a.createElement("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange}),n.a.createElement("button",null,"Save"))):n.a.createElement("div",{className:"Todo"},n.a.createElement("li",{className:this.props.completed?"Todo-task completed":"Todo-task",onClick:this.handleToggle},this.props.task),n.a.createElement("div",{className:"Todo-buttons"},n.a.createElement("button",{onClick:this.toggleForm},n.a.createElement("i",{className:"fas fa-pencil-alt"})),n.a.createElement("button",{onClick:this.handleRemove},n.a.createElement("i",{className:"fas fa-trash"}))))}}]),t}(o.Component)),v=a(11),f=a.n(v),k=(a(22),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={task:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),""===this.state.task?alert("Please enter new todo!"):(this.props.createTodo(Object(l.a)({},this.state,{id:f()(),completed:!1})),this.setState({task:""}))}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return n.a.createElement("form",{className:"NewTodoForm",onSubmit:this.handleSubmit},n.a.createElement("label",{htmlFor:"task"},"New Todo"),n.a.createElement("div",null,n.a.createElement("input",{type:"text",placeholder:"New Todo",id:"task",name:"task",value:this.state.task,onChange:this.handleChange})),n.a.createElement("button",null,"Add Todo"))}}]),t}(o.Component)),T=(a(23),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={todos:[]},a.createTodo=a.createTodo.bind(Object(m.a)(a)),a.removeTodo=a.removeTodo.bind(Object(m.a)(a)),a.updateTodo=a.updateTodo.bind(Object(m.a)(a)),a.toggleCompletion=a.toggleCompletion.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"createTodo",value:function(e){this.setState({todos:[].concat(Object(c.a)(this.state.todos),[e])})}},{key:"removeTodo",value:function(e){this.setState({todos:this.state.todos.filter((function(t){return t.id!==e}))})}},{key:"updateTodo",value:function(e,t){var a=this.state.todos.map((function(a){return a.id===e?Object(l.a)({},a,{task:t}):a}));this.setState({todos:a})}},{key:"toggleCompletion",value:function(e){var t=this.state.todos.map((function(t){return t.id===e?Object(l.a)({},t,{completed:!t.completed}):t}));this.setState({todos:t})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return n.a.createElement(g,{key:t.id,id:t.id,task:t.task,completed:t.completed,removeTodo:e.removeTodo,updateTodo:e.updateTodo,toggleTodo:e.toggleCompletion})}));return n.a.createElement("div",{className:"TodoList"},n.a.createElement("h1",null,"Todo List! ",n.a.createElement("span",null,"A Simple React Todo List App.")),n.a.createElement("ul",null,t),n.a.createElement(k,{createTodo:this.createTodo}))}}]),t}(o.Component));a(24);var j=function(){return n.a.createElement("div",null,n.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.5c10c3bd.chunk.js.map