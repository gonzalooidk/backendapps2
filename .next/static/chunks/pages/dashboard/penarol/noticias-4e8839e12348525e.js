(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74],{4947:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/penarol/noticias",function(){return c(4021)}])},947:function(a,b,c){"use strict";var d=c(5893),e=c(1163),f=c(1664),g=c.n(f);b.Z=function(){var a=(0,e.useRouter)().asPath.split("/");return a=a[3],(0,d.jsxs)("div",{className:"container-app-menu",children:[(0,d.jsx)(g(),{href:"/dashboard/penarol/",children:(0,d.jsx)("span",{style:{background:a?"#fff":"#4eff8d"},children:"Configuracion"})}),(0,d.jsx)(g(),{href:"/dashboard/penarol/canciones",children:(0,d.jsx)("span",{style:{background:"canciones"===a?"#4eff8d":"#fff"},children:"Canciones"})}),(0,d.jsx)(g(),{href:"/dashboard/penarol/noticias",children:(0,d.jsx)("span",{style:{background:"noticias"===a?"#4eff8d":"#fff"},children:"Noticias"})}),(0,d.jsx)(g(),{href:"/dashboard/penarol/partido",children:(0,d.jsx)("span",{style:{background:"partido"===a?"#4eff8d":"#fff"},children:"Partido"})}),(0,d.jsx)(g(),{href:"/dashboard/penarol/notificaciones",children:(0,d.jsx)("span",{style:{background:"notificaciones"===a?"#4eff8d":"#fff"},children:"Notificaciones"})})]})}},1235:function(a,b,c){"use strict";c.d(b,{Is:function(){return i},br:function(){return h},db:function(){return g}});var d=c(5503),e=c(6257),f=(0,d.ZF)({apiKey:"AIzaSyDd-VsSWoKbjV7gWj7VQ94Ua5w4BTn5GeM",authDomain:"canciones-de-penarol.firebaseapp.com",projectId:"canciones-de-penarol",storageBucket:"canciones-de-penarol.appspot.com",messagingSenderId:"34553452003",appId:"1:34553452003:web:75e4c5131bff494dfdfcd6"},"penarol"),g=(0,e.ad)(f),h="/api/penarol/sendnotification",i="/api/penarol/scrapmatch"},4021:function(a,b,c){"use strict";c.r(b);var d=c(7568),e=c(4051),f=c.n(e),g=c(5893),h=c(7294),i=c(947),j=c(1235),k=c(6257);b.default=function(a){var b,c=function(){var a=M.DiviceNoRegisterUserId;if(!a.length){alert("No hay usuarios con: DeviceNotRegistered");return}var b=[];a.forEach(function(a){var c=(0,k.JU)(j.db,"users",a),d=(0,k.r7)(c,{tokenStatus:!1});b.push(d)}),Promise.all(b).then(function(a){alert("Estado de token actualizados")})},e=(0,h.useState)(""),l=e[0],m=e[1],n=(0,h.useState)(""),o=n[0],p=n[1],q=(0,h.useState)(""),r=q[0],s=q[1],t=(0,h.useState)(!1),u=t[0],v=t[1],w=(0,h.useState)(!1),x=w[0],y=w[1],z=(0,h.useState)(!0),A=z[0],B=z[1],C=(0,h.useState)(""),D=C[0],E=C[1],F=(0,h.useState)(""),G=F[0],H=F[1],I=(0,h.useState)(!1),J=I[0],K=I[1],L=(0,h.useState)(!1),M=L[0],N=L[1];function O(a){return P.apply(this,arguments)}function P(){return(P=(0,d.Z)(f().mark(function a(b){var c,d,e,g,h,i,l;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c={},d=(0,k.hJ)(j.db,"users"),e=(0,k.IO)(d,(0,k.ar)("tokenStatus","==",!0)),a.next=5,(0,k.PL)(e);case 5:return g=a.sent,h={},g.forEach(function(a){h[a.id]={id:a.id,token:a.data().token}}),c.users=h,c.info=b,a.next=12,fetch(j.br,{method:"POST",body:JSON.stringify(c)});case 12:return i=a.sent,a.next=15,i.json();case 15:return l=a.sent,a.abrupt("return",l);case 17:case"end":return a.stop()}},a)}))).apply(this,arguments)}(0,h.useEffect)(function(){l.trim().length>4&&r.trim().length>4?(v(!0),y(!0)):u&&(v(!1),y(!1))},[l,r]);var Q=(b=(0,d.Z)(f().mark(function a(){var b,c,d,e,g;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(o.trim().length<10)){a.next=3;break}return alert("Inserta el link de la noticia"),a.abrupt("return");case 3:if(!(l.trim().length<4&&D.trim().length<4)){a.next=6;break}return alert("Inserta el titulo de la noticia o de la notificacion para que la noticia puede ser publicada"),a.abrupt("return");case 6:return K(!0),N(!1),(b={}).title=l.trim(),b.link=o.trim(),b.img=r.trim(),b.showInApp=u,b.showHeader=x,b.date=(0,k.Bt)(),a.next=17,(0,k.JU)((0,k.hJ)(j.db,"news"));case 17:return c=a.sent,b.id=c.id,d=(0,k.JU)(j.db,"news",c.id),a.next=22,(0,k.pl)(d,b);case 22:if(alert("Noticia publicada"),m(""),p(""),s(""),v(!1),y(!1),B(!0),E(""),H(""),!A){a.next=43;break}return(e={}).screen="IndividualNews",e.title=D.length?D:l,e.description=G,e.data=b,console.log("INFORMACON NOTIFICACON: ",e),N(!0),a.next=41,O(e);case 41:N(g=a.sent);case 43:K(!1);case 44:case"end":return a.stop()}},a)})),function(){return b.apply(this,arguments)});return(0,g.jsxs)("div",{style:{flexDirection:"column",display:"flex",flex:1},children:[(0,g.jsx)(i.Z,{}),(0,g.jsx)("div",{className:"containerInfoApp",children:(0,g.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[(0,g.jsx)("h2",{children:"Noticias"}),(0,g.jsxs)("div",{className:"input-single-container",children:[(0,g.jsx)("span",{children:"Titulo de la noticia:"}),(0,g.jsx)("input",{value:l,onChange:function(a){return m(a.target.value)},placeholder:"Titulo de la noticia"})]}),(0,g.jsxs)("div",{className:"input-single-container",children:[(0,g.jsx)("span",{children:"Link de la noticia:"}),(0,g.jsx)("input",{value:o,onChange:function(a){return p(a.target.value)},placeholder:"Link de la noticia"})]}),(0,g.jsxs)("div",{className:"input-single-container",children:[(0,g.jsx)("span",{children:"Imagen URL de la noticia:"}),(0,g.jsx)("input",{value:r,onChange:function(a){return s(a.target.value)},placeholder:"Imagen principal de la noticia"})]}),r.trim().length>4&&l.trim().length>4?(0,g.jsxs)("div",{className:"input-single-container",children:[(0,g.jsx)("span",{style:{fontSize:14},children:"\xbfEsta noticia aparecera en la APP?"}),(0,g.jsx)("span",{style:{paddingLeft:10,color:"blue"},children:"Si aparecera en donde salen todas las noticias"}),(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"row",padding:10},children:[(0,g.jsx)("span",{style:{marginRight:10},children:"Si"}),(0,g.jsx)("input",{checked:u,onChange:function(a){return v(!0)},type:"checkbox"})]}),(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"row",padding:10},children:[(0,g.jsx)("span",{style:{marginRight:10},children:"No"}),(0,g.jsx)("input",{checked:!u,onChange:function(a){return v(!1)},type:"checkbox"})]})]})]}):null,r.trim().length>4&&l.trim().length>4?(0,g.jsxs)("div",{className:"input-single-container",children:[(0,g.jsx)("span",{style:{fontSize:14},children:"\xbfEsta noticia mostrara cabecera nativa?"}),(0,g.jsx)("span",{style:{paddingLeft:10,color:"blue"},children:"Si es link propio mejor dejarlo en SI, si es link de otra web  tal vez sea recomendado ocultar la cabecera para evitar 2 cabecera"}),(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"row",padding:10},children:[(0,g.jsx)("span",{style:{marginRight:10},children:"Si"}),(0,g.jsx)("input",{checked:x,onChange:function(a){return y(!0)},type:"checkbox"})]}),(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"row",padding:10},children:[(0,g.jsx)("span",{style:{marginRight:10},children:"No"}),(0,g.jsx)("input",{checked:!x,onChange:function(a){return y(!1)},type:"checkbox"})]})]})]}):null,(0,g.jsxs)("div",{className:"input-single-container",style:{backgroundColor:"yellow",padding:10},children:[(0,g.jsx)("span",{style:{fontWeight:"bold"},children:"\xbfEnviar Notificacion PUSH?"}),(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"row",padding:10},children:[(0,g.jsx)("span",{style:{marginRight:10},children:"Si"}),(0,g.jsx)("input",{checked:A,onChange:function(a){return B(!0)},type:"checkbox"})]}),(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"row",padding:10},children:[(0,g.jsx)("span",{style:{marginRight:10},children:"No"}),(0,g.jsx)("input",{checked:!A,onChange:function(a){return B(!1)},type:"checkbox"})]})]}),A?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"input-single-container",children:[(0,g.jsx)("span",{children:"Titulo de la notificacion: (si es vacio sera el titulo del post)"}),(0,g.jsx)("input",{value:D,onChange:function(a){return E(a.target.value)},placeholder:"Titulo notificacion"})]}),(0,g.jsxs)("div",{className:"input-single-container",children:[(0,g.jsx)("span",{children:"Descripcion de la notificacion:"}),(0,g.jsx)("input",{value:G,onChange:function(a){return H(a.target.value)},placeholder:"Descripcion notificacion"})]})]}):null]}),(0,g.jsx)("button",{disabled:J,onClick:Q,className:"button-save",children:"Publicar"}),M?(0,g.jsxs)("div",{className:"input-single-container",style:{backgroundColor:"yellow",padding:10,marginTop:20},children:[(0,g.jsx)("h4",{children:"Resultado Notificaciones:"}),!0===M?(0,g.jsx)("h4",{children:"Enviando..."}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("ul",{style:{margin:20},children:[(0,g.jsxs)("li",{children:["Enviadas: ",M.notificationsSended]}),(0,g.jsxs)("li",{children:["Arrivadas: ",M.notificationSuccess]}),(0,g.jsxs)("li",{children:["Fallidas: ",M.notificationsError," - ",(0,g.jsxs)("span",{style:{fontWeight:"bold",color:"red"},children:["DeviceNotRegistered: ",M.DeviceNotRegisteredCount]})]}),M.errorChunk?(0,g.jsxs)("li",{children:["Error chunk: ",M.errorChunk," (Error al enviar 100 notificaciones)"]}):null]}),(0,g.jsx)("hr",{style:{margin:10}}),(0,g.jsx)("span",{style:{margin:15,marginBottom:0},children:"Presionar este boton si deseo no enviar mas token a los usuario con resultado DeviceNotRegistered de esta notificacion"}),(0,g.jsx)("button",{className:"button-delete-tokens",onClick:c,children:"CAMBIAR ESTADO DE TOKENS"})]})]}):null]})})]})}},7568:function(a,b,c){"use strict";function d(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function e(a){return function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function h(a){d(g,e,f,h,i,"next",a)}function i(a){d(g,e,f,h,i,"throw",a)}h(void 0)})}}c.d(b,{Z:function(){return e}})}},function(a){a.O(0,[16,77,774,888,179],function(){var b;return a(a.s=4947)}),_N_E=a.O()}])