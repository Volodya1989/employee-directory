(this.webpackJsonpemployee_trucker=this.webpackJsonpemployee_trucker||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=a(2),s=a(3),u=a(5),m=a(4),i=a(16),h=a.n(i),d=function(){return h.a.get("https://randomuser.me/api/?results=75&inc=picture,name,phone,email,dob,login,us")},f=a(17),p=a.n(f),E=function(e){return r.a.createElement("tbody",{className:""},e.results.map((function(e){return r.a.createElement("tr",{className:"table",key:e.login.uuid},r.a.createElement("td",null,r.a.createElement("img",{className:"",src:e.picture.medium,alt:""})),r.a.createElement("td",null,e.name.first," ",e.name.last),r.a.createElement("td",null,e.phone),r.a.createElement("td",{className:"email"},r.a.createElement("a",{href:"mailto:{result.email}",target:"__blank"},e.email)),r.a.createElement("td",null,r.a.createElement(p.a,{format:"MM/DD/YYYY"},e.dob.date)),r.a.createElement("td",null,e.dob.age))})))},y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],sortedArray:[],sortType:"asc"},e.handleSearch=function(e){e.target.value},e.handleSortName=function(){var t=e.state.sortedArray;if("asc"===e.state.sortType){var a=t.sort((function(e,t){return e.name.first>t.name.first?1:-1}));console.log("sorted array: "+JSON.stringify(a)),e.setState({sortedArray:a,sortType:"desc"})}else{var n=t.sort((function(e,t){return e.name.first>t.name.first?-1:1}));console.log("sorted array: "+n),e.setState({sortedArray:n,sortType:"asc"})}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d().then((function(t){e.setState({employees:t.data.results,sortedArray:t.data.results})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("table",{className:"employeeTable "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Image"),r.a.createElement("th",{onClick:this.handleSortName},"Name"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"DOB"),r.a.createElement("th",null,"Age"))),r.a.createElement(E,{results:this.state.employees}))}}]),a}(n.Component),v=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("h5",null,"Click on NAME or DOB heading to filter or use the search box to narrow your results."))},g=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],filteredEmployees:[]},e.handleSearch=function(e){var t=e.target.value;console.log(t)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d().then((function(t){e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(g,null,r.a.createElement(v,null),r.a.createElement("form",null,r.a.createElement("input",{className:"search",placeholder:"search",onChange:function(t){return e.handleSearch(t)}})),r.a.createElement(y,null))}}]),a}(n.Component);var N=function(){return r.a.createElement("div",{className:"container "},r.a.createElement(b,null))};c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a2593b0c.chunk.js.map