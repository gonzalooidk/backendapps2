(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[113],{6607:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/america/partido",function(){return c(6827)}])},5528:function(a,b,c){"use strict";var d=c(5893),e=c(1163),f=c(1664),g=c.n(f);b.Z=function(){var a=(0,e.useRouter)().asPath.split("/");return a=a[3],(0,d.jsxs)("div",{className:"container-app-menu",children:[(0,d.jsx)(g(),{href:"/dashboard/america/",children:(0,d.jsx)("span",{style:{background:a?"#fff":"#4eff8d"},children:"Configuracion"})}),(0,d.jsx)(g(),{href:"/dashboard/america/canciones",children:(0,d.jsx)("span",{style:{background:"canciones"===a?"#4eff8d":"#fff"},children:"Canciones"})}),(0,d.jsx)(g(),{href:"/dashboard/america/noticias",children:(0,d.jsx)("span",{style:{background:"noticias"===a?"#4eff8d":"#fff"},children:"Noticias"})}),(0,d.jsx)(g(),{href:"/dashboard/america/partido",children:(0,d.jsx)("span",{style:{background:"partido"===a?"#4eff8d":"#fff"},children:"Partido"})}),(0,d.jsx)(g(),{href:"/dashboard/america/notificaciones",children:(0,d.jsx)("span",{style:{background:"notificaciones"===a?"#4eff8d":"#fff"},children:"Notificaciones"})})]})}},8842:function(a,b,c){"use strict";c.d(b,{Is:function(){return i},br:function(){return h},db:function(){return g}});var d=c(5503),e=c(6257),f=(0,d.ZF)({apiKey:"AIzaSyCRFlszsQXKGAkjhrTNNuwJPiWfVpNhJk8",authDomain:"appamerica-a16fb.firebaseapp.com",databaseURL:"https://appamerica-a16fb.firebaseio.com",projectId:"appamerica-a16fb",storageBucket:"appamerica-a16fb.appspot.com",messagingSenderId:"253831284338",appId:"1:253831284338:web:885b252bee72b0d17264eb"},"america"),g=(0,e.ad)(f),h="/api/america/sendnotification",i="/api/america/scrapmatch"},6827:function(a,b,c){"use strict";c.r(b);var d=c(7568),e=c(1799),f=c(9396),g=c(4051),h=c.n(g),i=c(5893),j=c(7294),k=c(5528),l=c(8842),m=c(6257);b.default=function(a){var b,c=(0,j.useState)(!1),g=c[0],n=c[1],o=(0,j.useState)(null),p=o[0],q=o[1],r=(0,j.useState)(""),s=r[0],t=r[1],u=(0,j.useState)(!1),v=u[0],w=u[1];(0,j.useEffect)(function(){(0,d.Z)(h().mark(function a(){var b,c;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=(0,m.JU)(l.db,"match","next"),a.next=3,(0,m.QT)(b);case 3:(c=(c=a.sent).data())?q(c):q(!1);case 6:case"end":return a.stop()}},a)}))()},[]);var x,y,z=(b=(0,d.Z)(h().mark(function a(){var b,c,d;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(s.trim().length<5||!s.trim().includes("flashscore"))){a.next=3;break}return alert("Escribe una URL valida"),a.abrupt("return");case 3:return n(!0),b={url:s.trim()},a.next=7,fetch(l.Is,{method:"POST",body:JSON.stringify(b)});case 7:return c=a.sent,a.next=10,c.json();case 10:w(d=a.sent),n(!1);case 13:case"end":return a.stop()}},a)})),function(){return b.apply(this,arguments)}),A=(x=(0,d.Z)(h().mark(function a(){var b;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=(0,m.JU)(l.db,"match","next"),a.next=3,(0,m.pl)(b,(0,f.Z)((0,e.Z)({},v),{id:new Date().getTime()}));case 3:window.location.reload();case 4:case"end":return a.stop()}},a)})),function(){return x.apply(this,arguments)}),B=(y=(0,d.Z)(h().mark(function a(){var b;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=(0,m.JU)(l.db,"match","next"),a.next=3,(0,m.oe)(b);case 3:window.location.reload();case 4:case"end":return a.stop()}},a)})),function(){return y.apply(this,arguments)}),C=function(a,b){var c=(0,e.Z)({},v);c[b]=a,w(c)};return(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex",flex:1},children:[(0,i.jsx)(k.Z,{}),(0,i.jsxs)("div",{className:"containerInfoApp",children:[(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[(0,i.jsx)("h2",{children:"Partido proximo"}),null===p?(0,i.jsx)("span",{style:{padding:20,backgroundColor:"beige",marginTop:30},children:"Cargando..."}):null,!1===p?(0,i.jsx)("span",{style:{padding:20,backgroundColor:"#f3c0c0",marginTop:30},children:"No hay proximo partido publicado en la app."}):null,p?(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex",background:"#96f396",padding:20,maxWidth:500,marginTop:30},children:[(0,i.jsx)("h4",{children:"Partido en la APP:"}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:10},children:[(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Equipo local"}),(0,i.jsx)("input",{style:{padding:5},value:p.localTeamNameValue,placeholder:"Equipo local",disabled:!0,readOnly:!0})]}),(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Equipo visitante"}),(0,i.jsx)("input",{style:{padding:5},value:p.awayTeamNameValue,placeholder:"Equipo visitante",disabled:!0,readOnly:!0})]})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:10},children:[(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex",alignItems:"center"},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Logo local"}),(0,i.jsx)("img",{style:{width:35},src:p.localTeamImgValue})]}),(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex",marginLeft:10,alignItems:"center"},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Logo visitante"}),(0,i.jsx)("img",{style:{width:35},src:p.awayTeamImgValue})]})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:10},children:[(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Fecha"}),(0,i.jsx)("input",{style:{padding:5},value:p.valueDay,placeholder:"Fecha",disabled:!0,readOnly:!0})]}),(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Hora"}),(0,i.jsx)("input",{style:{padding:5},value:p.valueHour,placeholder:"Hora",disabled:!0,readOnly:!0})]})]}),(0,i.jsx)("div",{style:{display:"flex",flexDirection:"row",marginTop:10},children:(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex",flex:1,maxWidth:330},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Liga"}),(0,i.jsx)("input",{style:{padding:5},value:p.valueLigue,placeholder:"Liga",disabled:!0,readOnly:!0})]})}),(0,i.jsx)("button",{onClick:B,style:{backgroundColor:"#ff9292"},className:"button-save",children:"ELIMINAR"}),(0,i.jsx)("span",{style:{fontSize:10,padding:10},children:"Si eliminas el partido, en la APP dira partido no disponible en la aplicacion"})]}):null]}),(0,i.jsx)("hr",{style:{marginTop:40,marginBottom:20}}),(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[(0,i.jsx)("h2",{children:"Scrapear partido"}),(0,i.jsx)("span",{style:{color:"blue",marginTop:10},children:"La URL debe ser de flashcore donde sale el proximo partido individual, es decir la pagina de proximo partido, ejemplo:"}),(0,i.jsx)("span",{style:{fontSize:12},children:"https://www.flashscore.es/partido/pKKQeGfi/#/resumen-del-partido"}),(0,i.jsxs)("div",{className:"input-single-container",children:[(0,i.jsx)("span",{children:"URL a scrapear:"}),(0,i.jsx)("input",{value:s,onChange:function(a){return t(a.target.value)},placeholder:"URL a scrapear"})]}),(0,i.jsx)("button",{disabled:g,onClick:z,className:"button-save",children:"Scrapear"})]}),v?(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex",backgroundColor:"yellow",padding:20,marginTop:20},children:[(0,i.jsx)("h4",{children:"Partido scrapeado"}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:10},children:[(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Equipo local"}),(0,i.jsx)("input",{style:{padding:5},value:v.localTeamNameValue,onChange:function(a){return C(a.target.value,"localTeamNameValue")},placeholder:"Equipo local"})]}),(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Equipo visitante"}),(0,i.jsx)("input",{style:{padding:5},value:v.awayTeamNameValue,onChange:function(a){return C(a.target.value,"awayTeamNameValue")},placeholder:"Equipo visitante"})]})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:10},children:[(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex",alignItems:"center"},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Logo local"}),(0,i.jsx)("img",{style:{width:35},src:v.localTeamImgValue})]}),(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex",marginLeft:10,alignItems:"center"},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Logo visitante"}),(0,i.jsx)("img",{style:{width:35},src:v.awayTeamImgValue})]})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:10},children:[(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Fecha"}),(0,i.jsx)("input",{style:{padding:5},value:v.valueDay,onChange:function(a){return C(a.target.value,"valueDay")},placeholder:"Fecha"})]}),(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex"},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Hora"}),(0,i.jsx)("input",{style:{padding:5},value:v.valueHour,onChange:function(a){return C(a.target.value,"valueHour")},placeholder:"Hora"})]})]}),(0,i.jsx)("div",{style:{display:"flex",flexDirection:"row",marginTop:10},children:(0,i.jsxs)("div",{style:{flexDirection:"column",display:"flex",flex:1,maxWidth:330},children:[(0,i.jsx)("span",{style:{fontSize:12},children:"Liga"}),(0,i.jsx)("input",{style:{padding:5},value:v.valueLigue,onChange:function(a){return C(a.target.value,"valueLigue")},placeholder:"Liga"})]})}),(0,i.jsx)("button",{onClick:A,className:"button-save",children:"PUBLICAR"})]}):null]})]})}},7568:function(a,b,c){"use strict";function d(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function e(a){return function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function h(a){d(g,e,f,h,i,"next",a)}function i(a){d(g,e,f,h,i,"throw",a)}h(void 0)})}}c.d(b,{Z:function(){return e}})},9396:function(a,b,c){"use strict";function d(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}c.d(b,{Z:function(){return d}})}},function(a){a.O(0,[16,77,774,888,179],function(){var b;return a(a.s=6607)}),_N_E=a.O()}])