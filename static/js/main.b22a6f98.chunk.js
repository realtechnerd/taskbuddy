(this.webpackJsonptaskbuddytodolist=this.webpackJsonptaskbuddytodolist||[]).push([[0],{34:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(3),c=a.n(s),r=a(27),i=a.n(r),l=a(14),o=a(13),d=a(20),j=a.n(d),b=a(26),u=a(12),m=(a(34),a(76)),h=a(78),O=a(77),p=a(29),x=(a(55),a(56),p.a.initializeApp({apiKey:"AIzaSyAgsvwYpTjDVbxDW_skrARl_Zdzk2ozeNA",authDomain:"taskbuddy-to-do-list.firebaseapp.com",projectId:"taskbuddy-to-do-list",storageBucket:"taskbuddy-to-do-list.appspot.com",messagingSenderId:"952718830548",appId:"1:952718830548:web:c5f413d8e0557bbb89c441"})),v=x.auth(),g=x.firestore(),f=c.a.createContext();function N(){return Object(s.useContext)(f)}function y(e){var t=e.children,a=Object(s.useState)(),c=Object(u.a)(a,2),r=c[0],i=c[1],l=Object(s.useState)(!0),o=Object(u.a)(l,2),d=o[0],j=o[1];Object(s.useEffect)((function(){return v.onAuthStateChanged((function(e){i(e),j(!1)}))}),[]);var b={currentUser:r,signup:function(e,t){return v.createUserWithEmailAndPassword(e,t)},login:function(e,t){return v.signInWithEmailAndPassword(e,t)},logout:function(){return v.signOut()},forgotPassword:function(e){return v.sendPasswordResetEmail(e)}};return Object(n.jsx)(f.Provider,{value:b,children:!d&&t})}var w=a(21),k=a(23);function S(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(""),i=Object(u.a)(r,2),d=i[0],p=i[1],x=Object(s.useState)(""),v=Object(u.a)(x,2),g=v[0],f=v[1],y=Object(s.useState)(""),S=Object(u.a)(y,2),A=S[0],C=S[1],T=N().signup,F=Object(s.useState)(!1),P=Object(u.a)(F,2),L=P[0],E=P[1],B=Object(o.g)();function D(){return(D=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),d===g){e.next=3;break}return e.abrupt("return",C("Please verify that the passwords match."));case 3:return e.prev=3,C(""),E(!0),e.next=8,T(a,d);case 8:B.push("/dashboard"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),C("Something went wrong! Please try again later.");case 14:E(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"signup",children:Object(n.jsx)(m.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(n.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(n.jsx)(l.b,{id:"titlelink",to:"/",children:Object(n.jsxs)("h1",{id:"title",className:"mb-2",children:["TaskBuddy ",Object(n.jsx)(w.a,{icon:k.a})]})}),Object(n.jsx)("div",{className:"form-card card form-shadow",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h2",{className:"text-center",children:"Sign Up"}),A&&Object(n.jsx)(h.a,{variant:"danger",className:"mt-3",children:A}),Object(n.jsxs)("form",{onSubmit:function(e){return D.apply(this,arguments)},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(n.jsx)("input",{type:"email",id:"email",className:"form-control",onChange:function(e){return c(e.target.value)},value:a,required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(n.jsx)("input",{type:"password",id:"password",className:"form-control",onChange:function(e){return p(e.target.value)},value:d,required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"passwordConfirm",children:"Confirm Password:"}),Object(n.jsx)("input",{type:"password",id:"passwordConfirm",className:"form-control",onChange:function(e){return f(e.target.value)},value:g,required:!0})]}),Object(n.jsx)(O.a,{disabled:L,className:"btn btn-primary w-100",type:"submit",children:"Sign Up"})]})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2 log-in",children:["Already have an account? ",Object(n.jsx)(l.b,{to:"/login",style:{color:"#fff"},children:"Log in"})]})]})})})})}a(66);function A(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(""),i=Object(u.a)(r,2),d=i[0],p=i[1],x=Object(s.useState)(""),v=Object(u.a)(x,2),g=v[0],f=v[1],y=N().login,S=Object(s.useState)(!1),A=Object(u.a)(S,2),C=A[0],T=A[1],F=Object(o.g)();function P(){return(P=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,f(""),T(!0),e.next=6,y(a,d);case 6:F.push("/dashboard"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),f("There was an error signing in.");case 12:T(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"login",children:Object(n.jsx)(m.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(n.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(n.jsx)(l.b,{id:"titlelink",to:"/",children:Object(n.jsxs)("h1",{id:"title",className:"mb-2",children:["TaskBuddy ",Object(n.jsx)(w.a,{icon:k.a})]})}),Object(n.jsx)("div",{className:"form-card card form-shadow",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h2",{className:"text-center",children:"Login"}),g&&Object(n.jsx)(h.a,{variant:"danger",children:g}),Object(n.jsxs)("form",{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(n.jsx)("input",{type:"email",id:"email",className:"form-control",onChange:function(e){return c(e.target.value)},value:a,required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(n.jsx)("input",{type:"password",id:"password",className:"form-control",onChange:function(e){return p(e.target.value)},value:d,required:!0})]}),Object(n.jsx)(O.a,{disabled:C,className:"btn btn-primary w-100",type:"submit",children:"Login"})]}),Object(n.jsx)("div",{className:"w-100 text-center mt-3",children:Object(n.jsx)(l.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2 log-in",children:["Don't have an account? ",Object(n.jsx)(l.b,{to:"/signup",style:{color:"#fff"},children:"Sign Up"})]})]})})})})}a(67);function C(){return Object(n.jsxs)("nav",{className:"nav-shadow dash-nav navbar navbar-expand-lg navbar-light bg-light",children:[Object(n.jsx)(l.b,{to:"/",className:"dash-brand navbar-brand",children:"TaskBuddy"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup",children:Object(n.jsxs)("div",{className:"navbar-nav land-nav",children:[Object(n.jsx)(l.b,{className:"nav-link",to:"/login",children:"Log In"}),Object(n.jsx)(l.b,{className:"nav-link",to:"/signup",children:"Sign Up"})]})})]})}function T(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(C,{}),Object(n.jsx)("div",{className:"Landing",children:Object(n.jsxs)("div",{className:"landing-jumbotron jumbotron",style:{paddingTop:"8rem"},children:[Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("h1",{className:"display-4",children:["TaskBuddy ",Object(n.jsx)(w.a,{icon:k.a})]}),Object(n.jsx)("p",{className:"lead",children:"Stop Slacking. Start Rocking."}),Object(n.jsx)(l.b,{className:"b bprimary lb blg",to:"/signup",children:"Sign Up"}),Object(n.jsx)(l.b,{className:"b bprimary lb blg",to:"/login",style:{marginLeft:"15px"},children:"Sign In"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("h3",{children:"A Todo List app to make your life easier."})]})})]})}var F=a(31),P=a(46);function L(e){var t=e.component,a=Object(P.a)(e,["component"]),s=N().currentUser;return Object(n.jsx)(o.b,Object(F.a)(Object(F.a)({},a),{},{render:function(e){return s?Object(n.jsx)(t,Object(F.a)({},e)):Object(n.jsx)(o.a,{to:"/login"})}}))}a(68);function E(e){var t=N().logout;return Object(n.jsxs)("nav",{className:"nav-shadow dash-nav navbar navbar-expand-lg navbar-light bg-light",children:[Object(n.jsx)("a",{className:"dash-brand navbar-brand",children:"TaskBuddy"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup",children:Object(n.jsx)("div",{className:"navbar-nav",children:Object(n.jsx)("button",{onClick:t,className:"nav-link lgbdanger lb",style:{color:"#fff"},children:"Log Out"})})})]})}a(69);function B(e){return Object(n.jsx)("div",{className:"Task",style:{display:!e.title&&"none"},onClick:e.delete,children:Object(n.jsx)("h2",{children:e.title})})}a(70);var D=a(79),I=(a(71),a.p+"static/media/loader.ff2b6279.gif");function U(){return Object(n.jsx)("div",{className:"Loader",children:Object(n.jsx)("img",{src:I,alt:"Loading.."})})}function q(){var e=Object(s.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(!1),i=Object(u.a)(r,2),l=i[0],o=i[1],d=Object(s.useState)(""),j=Object(u.a)(d,2),b=j[0],m=j[1],h=N().currentUser,O=g.collection("todos/".concat(h.uid,"/tasks/"));Object(s.useEffect)((function(){o(!0),O.orderBy("timestamp","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),c(t),o(!1)}))}),[]);var x=a&&a.map((function(e){return Object(n.jsx)(B,{title:e.title,delete:function(){return t=e,void O.doc(t.id).delete().catch((function(e){console.error(e)}));var t}},e.id)}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(E,{user:h.email}),Object(n.jsxs)("div",{className:"Dash",children:[Object(n.jsx)("form",{className:"todo-form nav-shadow",onSubmit:function(e){e.preventDefault();var t={title:b,id:Object(D.a)(),timestamp:p.a.firestore.FieldValue.serverTimestamp()};console.log(t),O.doc(t.id).set(t).catch((function(e){console.error(e)})),m("")},children:Object(n.jsx)("input",{type:"text",placeholder:"Add a task",onChange:function(e){return m(e.target.value)},value:b,required:!0})}),l?Object(n.jsx)(U,{}):null,Object(n.jsx)("div",{className:"tasks Container",children:x})]})]})}function M(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(""),i=Object(u.a)(r,2),o=i[0],d=i[1],p=N().forgotPassword,x=Object(s.useState)(!1),v=Object(u.a)(x,2),g=v[0],f=v[1];function y(){return(y=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,d(""),f(!0),e.next=6,p(a);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d("There was an error resetting your password.");case 11:f(!1),c("");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"login",children:Object(n.jsx)(m.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(n.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(n.jsx)(l.b,{id:"titlelink",to:"/",children:Object(n.jsxs)("h1",{id:"title",className:"mb-2",children:["TaskBuddy ",Object(n.jsx)(w.a,{icon:k.a})]})}),Object(n.jsx)("div",{className:"form-card card form-shadow",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h2",{className:"text-center",children:"Reset Password"}),o&&Object(n.jsx)(h.a,{variant:"danger",children:o}),Object(n.jsxs)("form",{onSubmit:function(e){return y.apply(this,arguments)},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(n.jsx)("input",{type:"email",id:"email",className:"form-control",onChange:function(e){return c(e.target.value)},value:a,required:!0})]}),Object(n.jsx)(O.a,{disabled:g,className:"btn btn-primary w-100",type:"submit",children:"Reset Password"})]})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2 log-in",children:["Remember your password? ",Object(n.jsx)(l.b,{to:"/login",style:{color:"#fff"},children:"Log In"})]})]})})})})}var R=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(y,{children:Object(n.jsx)(l.a,{children:Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{path:"/",exact:!0,component:T}),Object(n.jsx)(o.b,{path:"/signup",component:S}),Object(n.jsx)(o.b,{path:"/login",component:A}),Object(n.jsx)(o.b,{path:"/forgot-password",component:M}),Object(n.jsx)(L,{path:"/dashboard",component:q})]})})})})};a(72);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.b22a6f98.chunk.js.map