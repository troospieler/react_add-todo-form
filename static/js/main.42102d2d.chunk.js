(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(5),o=t.n(s),i=t(1),l=t(3),c=t(6),m=t(7),d=t(9),u=t(8),h=t(2),p=(t(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),b=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],g=(t(16),function(e){var a=e.todos;return r.a.createElement("ul",{className:"list"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:"todo"},r.a.createElement("p",{className:"todo-title"},e.title),r.a.createElement("div",{className:"todo-data"},r.a.createElement("p",null,e.userName),r.a.createElement("hr",null),r.a.createElement("p",null,e.completed?"finished":"unfinished"))))})))}),y=b.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{userName:p.find((function(a){return a.id===e.userId})).name})})),f=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={todoTasks:Object(l.a)(y),taskId:2,user:"",newTodo:"",addButtonPressed:!1},e.handleChange=function(a){e.buttonStateCleaner();var t=a.target,n=t.name,r=t.value;e.setState(Object(i.a)({},n,r))},e.buttonStateCleaner=function(){e.setState({addButtonPressed:!1})},e.addTask=function(){e.setState((function(e){return{addButtonPressed:!0}}));var a=e.state,t=a.user,n=a.taskId,r=a.newTodo;if(t&&r){var s={userId:p.find((function(e){return e.name===t})).id,id:n+1,title:r,completed:!1,userName:p.find((function(e){return e.name===t})).name};e.setState((function(e){return{todoTasks:[].concat(Object(l.a)(e.todoTasks),[s]),taskId:e.taskId+1,user:"",newTodo:"",addButtonPressed:!1}}))}},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state,a=e.todoTasks,t=e.newTodo,n=e.addButtonPressed,s=e.user;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement("section",{className:"form-wrapper"},r.a.createElement("form",{className:"form-body"},r.a.createElement("div",{className:"textarea-wrapper"},r.a.createElement("textarea",{className:"textarea",placeholder:"put new task here",name:"newTodo",value:t,onChange:this.handleChange}),r.a.createElement("br",null),n&&!t&&r.a.createElement("span",{className:"text-err"},"enter some text")),r.a.createElement("div",{className:"select-wrapper"},r.a.createElement("select",{className:"form-select",name:"user",value:this.state.user,onChange:this.handleChange},r.a.createElement("option",{value:""},"Choose User Name"),p.map((function(e){return r.a.createElement("option",{value:e.name,key:e.id},e.name)}))),r.a.createElement("br",null),n&&!s&&r.a.createElement("span",{className:"user-err"},"user not chosen")),r.a.createElement("div",null,r.a.createElement("button",{className:"button",type:"button",onClick:this.addTask},"Add todo")))),r.a.createElement("p",null,r.a.createElement("span",null,"Users: "),p.length),r.a.createElement(g,{todos:a}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.42102d2d.chunk.js.map