(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{171:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n.n(a),c=n(16),o=n(22),i=n.n(o),s=(n(70),n(74),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/noteApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/noteApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTHDOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/noteApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECTID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/noteApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGEBUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/noteApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGINGSENDERID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/noteApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APPID});i.a.initializeApp(s);var u=i.a.firestore(),l=new i.a.auth.GoogleAuthProvider,d=n(1),j=n(17),b=n(8),p=n(0),O=function(){return Object(p.jsxs)("div",{className:"nothing__main-content",children:[Object(p.jsxs)("p",{children:["Selecciona algo ",Object(p.jsx)("br",{})," o \xa1Crea una nueva entrada!"]}),Object(p.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},m=n(6),f=n(3),h=n(7),_=n.n(h),v=n(12),x=n(10),g=n.n(x),N=g.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",g.a.stopTimer),e.addEventListener("mouseleave",g.a.resumeTimer)}}),y=function(){var e=Object(v.a)(_.a.mark((function e(t){var n,a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dfwigtkfn/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dfwigtkfn/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(v.a)(_.a.mark((function e(t){var n,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(f.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S="[Auth] Login",C="[Auth] Logout",w="[UI] Set Error",T="[UI] Remove Error",A="[UI] Start loading",P="[UI] Finish loading",D="[Notes] New note",R="[Notes] Set active note",k="[Notes] Load notes",I="[Notes] Update note saved",L="[Notes] Delete note",U="[Notes] Logout Cleaning",K=function(e,t){return{type:R,payload:Object(f.a)({id:e},t)}},W=function(e,t){return{type:D,payload:Object(f.a)({id:e},t)}},B=function(e){return{type:k,payload:e}},H=function(e){return function(){var t=Object(v.a)(_.a.mark((function t(n,a){var r,c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.uid,e.url||delete e.url,delete(c=Object(f.a)({},e)).id,t.next=6,u.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 6:n(F(e.id,c)),N.fire({icon:"success",title:"\xa1Nota Guardada Correctamente!"});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},F=function(e,t){return{type:I,payload:{id:e,note:Object(f.a)({id:e},t)}}},G=function(e){return{type:L,payload:e}},V=n(30),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(d.useState)(e),n=Object(c.a)(t,2),a=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(f.a)(Object(f.a)({},a),{},Object(V.a)({},t.name,t.value)))};return[a,i,o]},Y=n(20),q=n.n(Y),J=(n(46),function(e){return e[0].toUpperCase()+e.slice(1)}),z=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.notes})).active,n=q()(t.date);return Object(p.jsxs)("div",{className:"notes__appbar",children:[Object(p.jsx)("span",{children:n.format("DD")+" de "+J(n.format("MMMM YYYY"))}),Object(p.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(v.a)(_.a.mark((function t(n,a){var r,c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().notes.active,g.a.fire({title:"Subiendo Imagen...",text:"Por favor espere",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){g.a.showLoading()}}),t.next=4,y(e);case 4:c=t.sent,r.url=c,n(H(r)),g.a.close(),N.fire({icon:"success",title:"Imagen Subida Correctamente"});case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:"btn btn-danger btn-custom",onClick:function(){var n;e((n=t.id,function(){var e=Object(v.a)(_.a.mark((function e(t,a){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a().auth.uid,g.a.fire({title:"\xbfSeguro que quires eliminar la Nota?",text:"\xa1Esta acci\xf3n no se puede revertir!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, \xa1Borrar!",cancelButtonText:"Cancelar"}).then((function(e){e.isConfirmed&&(u.doc("".concat(r,"/journal/notes/").concat(n)).delete(),t(G(n)),g.a.fire("\xa1Eliminada!","La nota ha sido borrada.","success"))}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))},children:"Borrar"}),Object(p.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Imagen"}),Object(p.jsx)("button",{className:"btn",onClick:function(){e(H(t))},children:"Guardar"})]})]})},X=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.notes})).active,n=M(t),a=Object(c.a)(n,3),r=a[0],o=a[1],i=a[2],s=r.body,u=r.title,l=Object(d.useRef)(t.id);return Object(d.useEffect)((function(){t.id!==l.current&&(i(t),l.current=t.id)}),[t,i]),Object(d.useEffect)((function(){e(K(r.id,Object(f.a)({},r)))}),[r,e]),Object(p.jsxs)("div",{className:"notes__main-content",children:[Object(p.jsx)(z,{}),Object(p.jsxs)("div",{className:"notes__content",children:[Object(p.jsx)("input",{type:"text",placeholder:"Un incre\xedble t\xedtulo",className:"notes__title-input",autoComplete:"off",value:u,onChange:o,name:"title"}),Object(p.jsx)("textarea",{placeholder:"\xbfQu\xe9 pas\xf3 hoy?",className:"notes__textarea",value:s,onChange:o,name:"body"}),t.url&&Object(p.jsx)("div",{className:"notes__image",children:Object(p.jsx)("img",{src:t.url,alt:"imagen"})})]})]})},Q=function(e){return{type:w,payload:e}},Z=function(){return{type:T}},$=function(){return{type:P}},ee=function(e,t){return function(n){return n({type:A}),i.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(te(t.uid,t.displayName)),N.fire({icon:"success",title:"\xa1Bienvenido ".concat(t.displayName,"!")}),n($())})).catch((function(e){n($()),"auth/user-not-found"===e.code?g.a.fire("\xa1Error!","El usuario no existe o fue eliminado","error"):"auth/wrong-password"===e.code&&g.a.fire("\xa1Error!","Contrase\xf1a Incorrecta","error")}))}},te=function(e,t){return{type:S,payload:{uid:e,displayName:t}}},ne=function(){return{type:C}},ae=function(e){var t=e.id,n=e.date,a=e.title,r=e.body,c=e.url,o=Object(m.b)(),i=q()(n);return Object(p.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn",onClick:function(){o(K(t,{date:n,title:a,body:r,url:c}))},children:[c&&Object(p.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(c,")"),backgroundPosition:"center"}}),Object(p.jsxs)("div",{className:"journal__entry-body",children:[Object(p.jsx)("p",{className:"journal__entry-title",children:a}),Object(p.jsx)("p",{className:"journal__entry-content",children:r})]}),Object(p.jsxs)("div",{className:"journal__entry-date-box",children:[Object(p.jsx)("span",{children:J(i.format("dddd"))}),Object(p.jsx)("h4",{children:i.format("DD")})]})]})},re=function(){var e=Object(m.c)((function(e){return e.notes})).notes;return Object(p.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(p.jsx)(ae,Object(f.a)({},e),e.id)}))})},ce=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.auth})).name;return Object(p.jsxs)("aside",{className:"journal__sidebar",children:[Object(p.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(p.jsxs)("h3",{className:"mt-5",children:[Object(p.jsx)("i",{className:"far fa-moon"}),Object(p.jsx)("span",{children:t})]}),Object(p.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(v.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.auth().signOut();case 2:t(ne()),t({type:U});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Salir"})]}),Object(p.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(v.a)(_.a.mark((function e(t,n){var a,r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.prev=2,e.next=5,u.collection("".concat(a,"/journal/notes")).add(r);case 5:c=e.sent,t(K(c.id,r)),t(W(c.id,r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(p.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(p.jsx)("p",{className:"mt-5",children:"Nueva entrada"})]}),Object(p.jsx)(re,{})]})},oe=function(){var e=Object(m.c)((function(e){return e.notes})).active;return Object(p.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn",children:[Object(p.jsx)(ce,{}),Object(p.jsx)("main",{children:e?Object(p.jsx)(X,{}):Object(p.jsx)(O,{})})]})},ie=n(31),se=n.n(ie),ue=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.ui})),n=t.loading,a=t.msgError,r=M(),o=Object(c.a)(r,2),s=o[0],u=o[1],d=s.email,b=s.password,O=function(){return se.a.isEmail(d)?b<3?(e(Q("La Contrase\xf1a deben tener al menos 4 caracteres")),!1):(e(Z()),!0):(e(Q("Correo no V\xe1lido")),!1)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"auth__title",children:"Iniciar Sesi\xf3n"}),a&&Object(p.jsx)("div",{className:"auth__alert-error",children:Object(p.jsx)("center",{children:a})}),Object(p.jsxs)("form",{className:"animate__animated animate__fadeIn animate__faster",onSubmit:function(t){t.preventDefault(),O()&&e(ee(d,b))},children:[Object(p.jsx)("input",{type:"text",placeholder:"Correo",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:u}),Object(p.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",name:"password",className:"auth__input",value:b,onChange:u}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:n,children:"Ingresar"}),Object(p.jsxs)("div",{className:"auth__social-networks",children:[Object(p.jsx)("p",{children:"Ingresa con Redes Sociales"}),Object(p.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){i.a.auth().signInWithPopup(l).then((function(t){var n=t.user;e(te(n.uid,n.displayName))}))}))},children:[Object(p.jsx)("div",{className:"google-icon-wrapper",children:Object(p.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(p.jsx)("p",{className:"btn-text",children:Object(p.jsx)("b",{children:"Inicia Sesi\xf3n con Google"})})]})]}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(j.b,{to:"/auth/register",className:"link",children:"Crear Nueva Cuenta"})})]})]})},le=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.ui})).msgError,n=M(),a=Object(c.a)(n,2),r=a[0],o=a[1],s=r.name,u=r.email,l=r.password,d=r.password2,b=function(){return 0===s.trim().length?(e(Q("El Nombre es Obligatorio")),!1):se.a.isEmail(u)?l!==d||l.length<3?(e(Q("Las Contrase\xf1as deben coincidir y tener al menos 4 caracteres")),!1):(e(Z()),!0):(e(Q("Correo no V\xe1lido")),!1)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"auth__title",children:"Registro"}),Object(p.jsxs)("form",{className:"animate__animated animate__fadeIn animate__faster",onSubmit:function(t){t.preventDefault(),b()&&e(function(e,t,n){return function(a){i.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(v.a)(_.a.mark((function e(t){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:n});case 3:a(te(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){g.a.fire("Error","Ya existe un usuario registrado con ese Correo","warning")}))}}(u,l,s))},children:[t&&Object(p.jsx)("div",{className:"auth__alert-error",children:Object(p.jsx)("center",{children:t})}),Object(p.jsx)("input",{type:"text",placeholder:"Nombre",name:"name",className:"auth__input",autoComplete:"off",onChange:o,value:s}),Object(p.jsx)("input",{type:"text",placeholder:"Correo",name:"email",className:"auth__input",autoComplete:"off",onChange:o,value:u}),Object(p.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",name:"password",className:"auth__input",onChange:o,value:l}),Object(p.jsx)("input",{type:"password",placeholder:"Confirmar Contrase\xf1a",name:"password2",className:"auth__input",onChange:o,value:d}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Registrar"}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(j.b,{to:"/auth/login",className:"link",children:"\xbfYa tienes una cuenta?"})})]})]})},de=function(){return Object(p.jsx)("div",{className:"auth__main",children:Object(p.jsx)("div",{className:"auth__box-container",children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{exact:!0,path:"/auth/login",component:ue}),Object(p.jsx)(b.b,{exact:!0,path:"/auth/register",component:le}),Object(p.jsx)(b.a,{to:"/auth/login"})]})})})},je=n(32),be=["isAuthenticated","component"],pe=function(e){var t=e.isAuthenticated,n=e.component,a=Object(je.a)(e,be);return Object(p.jsx)(b.b,Object(f.a)(Object(f.a)({},a),{},{component:function(e){return t?Object(p.jsx)(n,Object(f.a)({},e)):Object(p.jsx)(b.a,{to:"/auth/login"})}}))},Oe=["isAuthenticated","component"],me=function(e){var t=e.isAuthenticated,n=e.component,a=Object(je.a)(e,Oe);return Object(p.jsx)(b.b,Object(f.a)(Object(f.a)({},a),{},{component:function(e){return t?Object(p.jsx)(b.a,{to:"/"}):Object(p.jsx)(n,Object(f.a)({},e))}}))},fe=function(){return Object(p.jsxs)("div",{className:"loading__screen",children:[Object(p.jsx)("div",{className:"spinner"}),Object(p.jsx)("p",{children:"Cargando..."})]})},he=function(){var e=Object(m.b)(),t=Object(d.useState)(!0),n=Object(c.a)(t,2),a=n[0],r=n[1],o=Object(d.useState)(!1),s=Object(c.a)(o,2),u=s[0],l=s[1];return Object(d.useEffect)((function(){i.a.auth().onAuthStateChanged((function(t){var n;(null===t||void 0===t?void 0:t.uid)?(e(te(t.uid,t.displayName)),l(!0),e((n=t.uid,function(){var e=Object(v.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(n);case 2:a=e.sent,t(B(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):l(!1),r(!1)}))}),[e,r,l]),a?Object(p.jsx)(fe,{}):Object(p.jsx)(j.a,{children:Object(p.jsx)("div",{children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(me,{isAuthenticated:u,path:"/auth",component:de}),Object(p.jsx)(pe,{isAuthenticated:u,exact:!0,path:"/",component:oe}),Object(p.jsx)(b.a,{to:"/auth/login"})]})})})},_e=n(24),ve=n(62),xe=n(41),ge={notes:[],active:null},Ne={loading:!1,msgError:null},ye=Object(_e.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{uid:t.payload.uid,name:t.payload.displayName};case C:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(f.a)(Object(f.a)({},e),{},{msgError:t.payload});case T:return Object(f.a)(Object(f.a)({},e),{},{msgError:null});case A:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case P:return Object(f.a)(Object(f.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(f.a)(Object(f.a)({},e),{},{active:Object(f.a)({},t.payload)});case D:return Object(f.a)(Object(f.a)({},e),{},{notes:[t.payload].concat(Object(xe.a)(e.notes))});case k:return Object(f.a)(Object(f.a)({},e),{},{notes:Object(xe.a)(t.payload)});case I:return Object(f.a)(Object(f.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case L:return Object(f.a)(Object(f.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case U:return Object(f.a)(Object(f.a)({},e),{},{notes:[],active:null});default:return e}}}),Ee="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_e.c,Se=Object(_e.d)(ye,Ee(Object(_e.a)(ve.a))),Ce=function(){return Object(p.jsx)(m.a,{store:Se,children:Object(p.jsx)(he,{})})};n(171);r.a.render(Object(p.jsx)(Ce,{}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.b6d6df39.chunk.js.map