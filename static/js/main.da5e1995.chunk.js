(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){},2:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__3qrCJ",btn:"ContactListItem_btn__2g7fw",margin:"ContactListItem_margin__2A_S_"}},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(10),c=n.n(a),o=n(11),r=n(14),s=n(5),i=n(6),l=n(8),u=n(7),d=n(1),h=n.n(d),b=(n(19),n(2)),j=n.n(b),f=n(0),m=function(t){var e=t.el,n=t.delCont;return Object(f.jsxs)("li",{className:j.a.listItem,children:[e.name,": ",e.number,n&&Object(f.jsx)("button",{className:j.a.btn,onClick:function(){n(e.id)},children:"Delete"})]})},O=function(t){var e=t.contacts;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Dell Contact"}),Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsx)(m,{el:t},t.id)}))})]})},C=n(12),p=n(13),g=n.n(p),v=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(C.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{children:["Name",Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"text",value:e,name:"name",onChange:this.handleChange,required:!0})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("label",{children:["Number",Object(f.jsx)("br",{}),Object(f.jsx)("input",{className:j.a.margin,value:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange})]}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(d.Component);v.propType={onAddContact:g.a.func.isRequired};var x=v,y=function(t){var e=t.contacts,n=t.deleteContact;return Object(f.jsx)("section",{children:Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsx)(m,{el:t,delCont:n},t.id)}))})})},S=function(t){var e=t.handleChangeFilter,n=t.filter;return Object(f.jsx)("section",{children:Object(f.jsxs)("label",{children:["Find contacts by name",Object(f.jsx)("input",{onChange:e,value:n,name:"filter",type:"text"})]})})},w=n(27),D=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],value:0,filter:"",historyDelCont:""},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return e===t.name})))alert(e+" is already in contacts");else{var a={id:Object(w.a)(),name:e,number:n};t.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts),[a])}}))}},t.handleChangeFilter=function(e){t.setState({filter:e.target.value})},t.filteredContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.addToLocalDel=function(e){var n,a=Object(o.a)(t.state.contacts);try{for(a.s();!(n=a.n()).done;){var c=n.value;if(c.id===e){var r=JSON.parse(window.localStorage.getItem("historyDelCont"));if(r)return r.push(c),window.localStorage.setItem("historyDelCont",JSON.stringify(r)),console.log(r),void t.setState({historyDelCont:r});r||(t.setState({historyDelCont:[c]}),window.localStorage.setItem("historyDelCont",JSON.stringify([c])))}}}catch(s){a.e(s)}finally{a.f()}},t.deleteContact=function(e){t.addToLocalDel(e),t.setState((function(){return{contacts:t.state.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts")),e=JSON.parse(window.localStorage.getItem("historyDelCont"));e&&this.setState({historyDelCont:e}),t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(x,{onAddContact:this.addContact}),Object(f.jsx)("h2",{children:"Contacts"}),this.state.contacts.length>1&&Object(f.jsx)(S,{handleChangeFilter:this.handleChangeFilter,filter:this.state.filter}),Object(f.jsx)(y,{contacts:this.filteredContact(),deleteContact:this.deleteContact}),this.state.historyDelCont&&Object(f.jsx)(O,{contacts:this.state.historyDelCont})]})}}]),n}(d.Component),I=D,N=(n(23),n(24),document.querySelector("#root"));c.a.render(Object(f.jsx)(h.a.StrictMode,{children:Object(f.jsx)(I,{})}),N)}},[[25,1,2]]]);
//# sourceMappingURL=main.da5e1995.chunk.js.map