(this.webpackJsonppostapp=this.webpackJsonppostapp||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),s=(n(98),n(99),n(47)),c=n.n(s),l=n(24),u=n.n(l),p=function(e){e?u.a.defaults.headers.common.Authorization=e:delete u.a.defaults.headers.common.Authorization},h=function(e,t){return function(n){console.log("LOGGING IN"),u.a.post("/api/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),p(a);var r=c()(a);t(),n(m(r))})).catch((function(e){return n({type:"GET_ERRORS",payload:e.response.data})}))}},m=function(e){return{type:"SET_CURRENT_USER",payload:e}},d=function(){return function(e){localStorage.removeItem("jwtToken"),p(!1),e(m({}))}},f=n(21),g=n(15),b=n(26),v=n(27),E=n(30),O=n(19),w=n(20),j=n(82),y=n(161),C=n(162),k=n(163),S=n(177);function x(){var e=Object(O.a)(["\n    line-height: 40px;\n"]);return x=function(){return e},e}function R(){var e=Object(O.a)(["\n    padding-bottom: 10px;\n"]);return R=function(){return e},e}function T(){var e=Object(O.a)(["\n    background-color: ","\n"]);return T=function(){return e},e}function P(){var e=Object(O.a)(["\n    min-width: 275px;\n    max-width: 1312px;\n    margin: 8px;\n"]);return P=function(){return e},e}var U=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(b.a)(this,Object(v.a)(t).call(this,e))).state={content:e.content},n}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.content!==e.content&&this.setState({content:this.props.content})}},{key:"render",value:function(){var e=["orange","green","red","blue","pink"],t=e[Math.floor(Math.random()*e.length)];return r.a.createElement("div",null,r.a.createElement(j.a,null),r.a.createElement(_,{elevation:2},r.a.createElement(y.a,null,r.a.createElement(N,{container:!0,spacing:5},r.a.createElement(C.a,{item:!0},r.a.createElement(L,{randomcolor:t},this.props.name[0])),r.a.createElement(C.a,{item:!0},r.a.createElement(G,null,this.props.name))),r.a.createElement(j.a,{align:"left",style:{paddingLeft:"80px"}},this.state.content))))}}]),t}(r.a.Component),_=Object(w.a)(k.a)(P()),L=Object(w.a)(S.a)(T(),(function(e){return e.randomcolor})),N=Object(w.a)(C.a)(R()),G=Object(w.a)(j.a)(x()),A=U,I=n(46),W=n.n(I),B=n(54);function D(){return(D=Object(B.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.get("/api/posts/all").then((function(e){return e.data})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(B.a)(W.a.mark((function e(t,n,a){var r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={content:t,user:a,name:n},e.abrupt("return",u.a.post("/api/posts/create",r).then((function(e){return console.log("POST SUCCESS"),e.data})).catch((function(e){return console.log(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=n(22),H=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){return D.apply(this,arguments)})().then((function(t){return e.props.dispatch({type:"GET_ALL_POSTS",posts:t})}))}},{key:"render",value:function(){var e=this.props.posts||[];return r.a.createElement(C.a,null,e.map((function(e){return r.a.createElement(A,{name:e.name,key:e._id,content:e.content})})))}}]),t}(r.a.Component),J=Object(M.b)((function(e){return{posts:e.post.posts}}))(H),Y=n(17),$=n(172),q=n(166),F=n(175),K=n(83),Q=n(173),V=n(37),X=n.n(V);function Z(){var e=Object(O.a)(["\n    padding-bottom: 10px;\n"]);return Z=function(){return e},e}function ee(){var e=Object(O.a)(["\n    background-color: ","\n"]);return ee=function(){return e},e}function te(){var e=Object(O.a)(["\n    min-width: 275px;\n    max-width: 1312px;\n    min-height: 125px;\n    margin: 20px;\n"]);return te=function(){return e},e}function ne(e){return r.a.createElement(Q.a,Object.assign({elevation:6,variant:"filled"},e))}var ae=function(e){function t(e){var n;Object(f.a)(this,t),n=Object(b.a)(this,Object(v.a)(t).call(this,e));var a=e.auth.user;return n.state={value:"",open:!1,name:X()(a)?"":a.name,user_id:X()(a)?"":a.id},n.handleChange=n.handleChange.bind(Object(Y.a)(n)),n.onSubmit=n.onSubmit.bind(Object(Y.a)(n)),n.setOpen=n.setOpen.bind(Object(Y.a)(n)),n.handleClose=n.handleClose.bind(Object(Y.a)(n)),n}return Object(E.a)(t,e),Object(g.a)(t,[{key:"setOpen",value:function(e){this.setState({open:e})}},{key:"handleClose",value:function(e,t){this.setOpen(!1)}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"onSubmit",value:function(){var e=this,t=this.props.auth.user;X()(t)?this.setOpen(!0):(console.log(this.state.name),function(e,t,n){return z.apply(this,arguments)}(this.state.value,this.state.name,this.state.user_id).then((function(t){e.props.dispatch({type:"NEW_POST",newPost:t}),e.setState({value:""})})))}},{key:"render",value:function(){return r.a.createElement(oe,null,r.a.createElement(y.a,null,r.a.createElement(se,{container:!0,spacing:5},r.a.createElement(C.a,{item:!0},r.a.createElement(ie,{color:"orange"},this.state.name[0])),r.a.createElement(C.a,{item:!0,style:{width:"80%"}},r.a.createElement($.a,{style:{margin:8,paddingTop:20},placeholder:"What's on your mind?",fullWidth:!0,margin:"normal",onChange:this.handleChange,value:this.state.value,InputLabelProps:{shrink:!0}})),r.a.createElement(C.a,{item:!0},r.a.createElement(q.a,{variant:"contained",color:"primary",onClick:this.onSubmit},"Post")))),r.a.createElement(F.a,{anchorOrigin:{vertical:"top",horizontal:"center"},key:"top, center",open:this.state.open,autoHideDuration:4e3,onClose:this.handleClose},r.a.createElement(ne,{onClose:this.handleClose,severity:"error"},"You must log in to post to the messageboard.")))}}]),t}(r.a.Component),re=Object(M.b)((function(e){return{auth:e.auth}}))(ae),oe=Object(w.a)(K.a)(te()),ie=Object(w.a)(S.a)(ee(),(function(e){return e.color})),se=Object(w.a)(C.a)(Z()),ce=function(){return r.a.createElement("div",{style:{backgroundColor:"grey",minHeight:"100%",padding:"20px"}},r.a.createElement(C.a,{align:"center"},r.a.createElement(re,{name:"Jonathan"}),r.a.createElement(J,null)))},le=n(45),ue=n(170),pe=n(171),he=n(164),me=n(80),de=n(178),fe=n(7),ge=n(176),be=n(167),ve=n(168),Ee=n(169),Oe=n(78),we=n.n(Oe);function je(){var e=Object(O.a)(["\n    width: 100%;\n    padding: 15px 15px 15px 0px;\n    margin-top: 25px;\n\n    input:-webkit-autofill,\n    input:-webkit-autofill:hover,\n    input:-webkit-autofill:active,\n    input:-webkit-autofill:focus {\n        -webkit-box-shadow: 0 0 0 1000px white inset !important;\n        -webkit-text-fill-color: #555555 !important;\n    }\n"]);return je=function(){return e},e}var ye=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(b.a)(this,Object(v.a)(t).call(this,e))).handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1}),n.props.toggleBack()},n.onChange=function(e){n.setState(Object(fe.a)({},e.target.id,e.target.value))},n.switchPurpose=function(){"Login"===n.state.purpose?n.setState({login:!1,purpose:"Register",otherPurpose:"Login",description:"Choose an email and password to create an account.",errors:{}}):n.setState({login:!0,purpose:"Login",otherPurpose:"Register",description:"Please login to your account or go to 'Register' to create an account.",errors:{}})},n.onSubmit=function(){if(n.state.login){var e={email:n.state.email,password:n.state.password};n.props.loginUser(e,n.handleClose)}else{var t={name:n.state.name,email:n.state.email,password:n.state.password,password2:n.state.password2};n.props.registerUser(t,n.handleClose)}},n.state={open:!1,login:!0,purpose:"Login",otherPurpose:"Register",description:"Please login to your account or go to 'Register' to create an account.",name:"",email:"",password:"",password2:"",errors:{}},n}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"componentDidUpdate",value:function(e){this.props.modalOpen!==e.modalOpen&&this.props.modalOpen&&this.handleOpen()}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",null,r.a.createElement(ge.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},r.a.createElement(be.a,{id:"form-dialog-title"},this.state.purpose),r.a.createElement(ve.a,null,r.a.createElement(Ee.a,null,r.a.createElement("span",null,this.state.description)),!this.state.login&&r.a.createElement("div",null,r.a.createElement(ke,{id:"name",type:"text",label:"Name",value:this.state.name,onChange:this.onChange,error:e.name,className:we()("",{invalid:e.name})}),r.a.createElement("span",{className:"red-text"},e.name)),r.a.createElement(ke,{id:"email",label:"E-mail",type:"email",value:this.state.email,onChange:this.onChange,error:e.email,color:"primary"}),r.a.createElement(ke,{id:"password",label:"Password",type:"password",value:this.state.password,onChange:this.onChange,error:e.password}),!this.state.login&&r.a.createElement(ke,{id:"password2",label:"Confirm password",type:"password",value:this.state.password2,onChange:this.onChange,error:e.password2})),r.a.createElement(C.a,{container:!0,justify:"space-between"},r.a.createElement(C.a,{item:!0},r.a.createElement(q.a,{style:{margin:"25px"},color:"primary",onClick:this.switchPurpose},this.state.otherPurpose)),r.a.createElement(C.a,{item:!0},r.a.createElement(q.a,{style:{margin:"25px"},variant:"contained",color:"primary",onClick:this.onSubmit},this.state.purpose)))))}}]),t}(r.a.Component),Ce=Object(M.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(n){var a={email:e.email,password:e.password};u.a.post("/api/users/register",e).then((function(e){return n(h(a,t))})).catch((function(e){return n({type:"GET_ERRORS",payload:e.response.data})}))}},loginUser:h})(ye),ke=Object(w.a)($.a)(je());var Se=Object(M.b)((function(e){return{auth:e.auth}}),{logoutUser:d})((function(e){var t=Object(a.useState)(!1),n=Object(le.a)(t,2),o=n[0],i=n[1],s=r.a.useState(null),c=Object(le.a)(s,2),l=c[0],u=c[1],p=Boolean(l),h=function(){u(null)},m=e.auth.user;return console.log("USER",m),r.a.createElement("div",{styles:{flexGrow:1}},console.log("ANCHOR",l),r.a.createElement(ue.a,{position:"static"},r.a.createElement(pe.a,null,r.a.createElement(j.a,{variant:"h6",style:{flexGrow:1}},"MessageBoard"),X()(m)?r.a.createElement(q.a,{color:"inherit",onClick:function(){return i(!0)}},"Login"):r.a.createElement("div",null,r.a.createElement(he.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(S.a,{style:{backgroundColor:"orange"}},m.name[0])),r.a.createElement(me.a,{id:"menu-appbar",anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:h},r.a.createElement(de.a,null,"Profile"),r.a.createElement(de.a,{onClick:function(){e.logoutUser()}},"Log Out"))),r.a.createElement(Ce,{modalOpen:o,toggleBack:function(){i(!1),h()}}))))})),xe=n(32),Re=n(41),Te={posts:[]},Pe=n(37),Ue={isAuthenticated:!1,user:{},loading:!1},_e={},Le=Object(xe.c)({post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"GET_ALL_POSTS":return Object(Re.a)({},e,{posts:t.posts});case"NEW_POST":return Object(Re.a)({},e,{posts:[t.newPost].concat(e.posts)});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return console.log("SETTING CURRENT USER",t.payload),Object(Re.a)({},e,{isAuthenticated:!Pe(t.payload),user:t.payload});case"USER_LOADING":return Object(Re.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),Ne=n(79),Ge=Object(xe.e)(Le,Object(xe.d)(Object(xe.a)(Ne.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));var Ae=function(){if(localStorage.jwtToken){var e=localStorage.jwtToken;p(e);var t=c()(e);Ge.dispatch(m(t));var n=Date.now()/1e3;t.exp<n&&(Ge.dispatch(d()),window.location.href="./login")}return r.a.createElement(M.a,{store:Ge},r.a.createElement(Se,null),r.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,n){e.exports=n(127)},98:function(e,t,n){},99:function(e,t,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.02303609.chunk.js.map