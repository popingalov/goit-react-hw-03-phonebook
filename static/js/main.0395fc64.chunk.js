(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){},2:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__3qrCJ",btn:"ContactListItem_btn__2g7fw",margin:"ContactListItem_margin__2A_S_"}},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(11),c=n.n(a),r=n(12),s=n(10),o=n(5),i=n(6),l=n(8),u=n(7),h=n(1),d=n.n(h),b=(n(19),n(2)),j=n.n(b),m=n(0),f=function(t){var e=t.el,n=t.delCont;return Object(m.jsxs)("li",{className:j.a.listItem,children:[e.name,": ",e.number,n&&Object(m.jsx)("button",{className:j.a.btn,onClick:function(){n(e.id)},children:"Delete"})]})},O=function(t){var e=t.contacts;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"Dell Contact"}),Object(m.jsx)("ul",{children:e.map((function(t){return Object(m.jsx)(f,{el:t},t.id)}))})]})},C=n(13),p=n(14),x=n.n(p),v=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(C.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",value:e,name:"name",onChange:this.handleChange,required:!0})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("br",{}),Object(m.jsx)("input",{className:j.a.margin,value:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange})]}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(h.Component);v.propType={onAddContact:x.a.func.isRequired};var g=v,y=function(t){var e=t.contacts,n=t.deleteContact;return Object(m.jsx)("section",{children:Object(m.jsx)("ul",{children:e.map((function(t){return Object(m.jsx)(f,{el:t,delCont:n},t.id)}))})})},S=function(t){var e=t.handleChangeFilter,n=t.filter;return Object(m.jsx)("section",{children:Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{onChange:e,value:n,name:"filter",type:"text"})]})})},w=n(27),D=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],value:0,filter:"",historyDelCont:[]},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return e===t.name})))alert(e+" is already in contacts");else{var a={id:Object(w.a)(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[a])}}))}},t.handleChangeFilter=function(e){t.setState({filter:e.target.value})},t.filteredContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteContact=function(e){var n,a=t.state,c=a.historyDelCont,o=a.contacts,i=[],l=Object(r.a)(o);try{var u=function(){var a=n.value;a.id===e&&(c&&t.setState((function(t){return{historyDelCont:[].concat(Object(s.a)(t.historyDelCont),[a])}})),a.id!==e&&t.setState({historyDelCont:[a]})),a.id!==e&&i.push(a)};for(l.s();!(n=l.n()).done;)u()}catch(h){l.e(h)}finally{l.f()}t.setState({contacts:i})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=JSON.parse(localStorage.getItem("contacts")),n=JSON.parse(window.localStorage.getItem("historyDelCont"));n&&this.setState({historyDelCont:n}),e&&this.setState({contacts:e}),window.onunload=function(){localStorage.setItem("historyDelCont",JSON.stringify(t.state.historyDelCont)),localStorage.setItem("contacts",JSON.stringify(t.state.contacts))}}},{key:"render",value:function(){var t=this.state,e=t.historyDelCont,n=t.contacts,a=t.filter;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(g,{onAddContact:this.addContact}),Object(m.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(m.jsx)(S,{handleChangeFilter:this.handleChangeFilter,filter:a}),Object(m.jsx)(y,{contacts:this.filteredContact(),deleteContact:this.deleteContact}),e&&Object(m.jsx)(O,{contacts:e})]})}}]),n}(h.Component),_=D,I=(n(23),n(24),document.querySelector("#root"));c.a.render(Object(m.jsx)(d.a.StrictMode,{children:Object(m.jsx)(_,{})}),I)}},[[25,1,2]]]);
//# sourceMappingURL=main.0395fc64.chunk.js.map