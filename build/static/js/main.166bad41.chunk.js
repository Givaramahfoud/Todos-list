(this["webpackJsonptodo-list-2"]=this["webpackJsonptodo-list-2"]||[]).push([[0],{37:function(t,e,n){t.exports=n(68)},42:function(t,e,n){},62:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(30),c=n.n(r),l=(n(42),n(36)),i=n(7),d=n(8),s=n(10),u=n(9),p=n(11),m=n(14),h=n(12),f=n(31),b=n.n(f),y=n(32),v=n.n(y);function g(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the todo list App its part of the home page!"))}n(62);var E=n(6),j=n.n(E),O=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"5px",borderBottom:"1px dotted #ccc",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:k},"x")))}}]),e}(o.Component);O.Prototype={todo:j.a.object.isRequired};var k={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50px",cursor:"pointer",float:"right"},x=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(O,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(o.Component);function C(){return a.a.createElement("header",{style:T},a.a.createElement("h1",null,"Todo List"),a.a.createElement(m.b,{to:"/"},"Home")," | ",a.a.createElement(m.b,{to:"/about"},"About"))}x.Prototype={todos:j.a.array.isRequired};var T={background:"#1994",color:"#6099",textAlign:"center",padding:"5px"},S=n(35),A=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onChange=function(t){n.setState(Object(S.a)({},t.target.name,t.target.value))},n.onSubmit=function(t){t.preventDefault(),n.state.title&&n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ...",style:{flex:"10px",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"0.25"}}))}}]),e}(o.Component),w=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n.delTodo=function(t){n.setState({todos:n.state.todos.filter((function(e){return e.id!==t}))})},n.addTodo=function(t){var e={id:b.a.v4(),title:t,completed:!1};n.setState({todos:[].concat(Object(l.a)(n.state.todos),[e])})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;v.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(C,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{addTodo:t.addTodo}),a.a.createElement(x,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:g}))))}}]),e}(o.Component);c.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.166bad41.chunk.js.map