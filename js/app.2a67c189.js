(function(t){function e(e){for(var o,n,r=e[0],c=e[1],u=e[2],d=0,g=[];d<r.length;d++)n=r[d],a[n]&&g.push(a[n][0]),a[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(g.length)g.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],o=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var o={},a={app:0},i=[];function n(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=o,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Vuetest/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("64a9"),a=s.n(o);a.a},"0573":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var o=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"app"}},[s("Auth",{staticClass:"box_header"}),s("Home"),s("MessageBox"),s("LogoutDialog")],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-parallax",{attrs:{dark:""}},[s("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[s("h1",{staticClass:"display-2 font-weight-thin mb-4"},[s("v-icon",{attrs:{"x-large":"",color:"white"}},[t._v("chat")]),t._v("\n        Chatbox\n    ")],1),t.isLoading?s("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"#AED581"}}):s("div",[s("h4",{staticClass:"subheading"},[t._v("Start your chat today!")]),s("v-btn",{staticClass:"ma-3",attrs:{round:"",large:"",dark:"",color:"#DD4B39"},on:{click:function(e){return e.preventDefault(),t.login(e)}}},[s("i",{staticClass:"fab fa-google"}),s("span",{staticStyle:{"margin-left":"12px"}},[t._v("Login with Google")])])],1)],1)],1)},r=[],c=s("cebc"),u=s("2f62"),l={computed:Object(c["a"])({},Object(u["b"])(["isAuth","isLoading"])),methods:{login:function(){this.$store.dispatch("login")}}},d=l,g=s("2877"),f=Object(g["a"])(d,n,r,!1,null,null,null),h=f.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isAuth&&!t.isLoading?s("div",{attrs:{dark:""}},[s("div",{staticClass:"box_main scroll-y msg-scroll",attrs:{id:"chat-container"}},[s("v-container",{attrs:{"grid-list-md":"","text-xs-left":""}},t._l(t.messages,function(e,o){return s("v-layout",{key:o,attrs:{row:"",wrap:""}},[e.author.uid==t.user.uid?s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"outgoing_msg"},[s("div",{staticClass:"sent_msg"},[s("p",{domProps:{innerHTML:t._s(e.content)}}),s("span",{staticClass:"time_date"},[t._v(t._s(t.getTime(e.createTime)))])])])]):s("v-flex",{attrs:{xs11:""}},[s("div",{staticClass:"incoming_msg"},[e.author.uid!==t.user.uid?s("v-avatar",{attrs:{size:"40"}},[s("img",{attrs:{src:e.author.photoURL?e.author.photoURL:"",alt:"avatar"}})]):t._e(),s("div",{staticClass:"received_msg"},[s("span",{staticClass:"sender"},[t._v(t._s(e.author.name))]),s("p",{domProps:{innerHTML:t._s(e.content)}}),s("span",{staticClass:"time_date"},[t._v(t._s(t.getTime(e.createTime)))])])],1)]),e.author.uid!==t.user.uid?s("v-flex",{attrs:{xs1:""}}):t._e()],1)}),1)],1),s("div",{staticClass:"box_footer",attrs:{dark:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-form",{on:{submit:function(e){return e.preventDefault(),t.addMessage(e)}}},[s("v-text-field",{attrs:{dark:"",box:"",color:"white",label:"Write a message","hide-details":"","append-icon":"send"},on:{"click:append":t.addMessage},model:{value:t.inputMessage,callback:function(e){t.inputMessage="string"===typeof e?e.trim():e},expression:"inputMessage"}})],1)],1)],1)]):t._e()},v=[],m=s("59ca"),b=s.n(m),_=(s("e71f"),s("ea7b"),{apiKey:"AIzaSyD5Oihb7oGoocXr4XVFq4NVb7PbFtEmNyo",authDomain:"vuefire-test-f39e0.firebaseapp.com",databaseURL:"https://vuefire-test-f39e0.firebaseio.com",projectId:"vuefire-test-f39e0",storageBucket:"vuefire-test-f39e0.appspot.com",messagingSenderId:"483810398401",appId:"1:483810398401:web:7a3c71dfde36b3328b4440",measurementId:"G-DBFJC63R2G"}),x=b.a.initializeApp(_),y=x,L=y.firestore(),w={data:function(){return{messages:[],inputMessage:""}},computed:Object(c["a"])({},Object(u["b"])(["user","isAuth","isLoading"])),mounted:function(){this.isAuth?this.bindMessage():this.messages=[]},watch:{isAuth:function(){this.isAuth?this.bindMessage():this.messages=[]}},updated:function(){var t=document.getElementById("chat-container");t&&(t.scrollTop=t.scrollHeight)},methods:{getTime:function(t){var e=new Date(1e3*t.seconds),s=e.toISOString().substring(0,10),o=e.getHours(),a=e.getMinutes(),i=e.getSeconds(),n=o>=12?"PM":"AM";o%=12,o=o>0?o:12,a=a<10?"0"+a:a,i=i<10?"0"+i:i;var r="".concat(s," ").concat(o,":").concat(a,":").concat(i," ").concat(n);return r},bindMessage:function(){var t=this;this.$store.commit("switchLoading",!0),this.$bind("messages",L.collection("Message").orderBy("createTime")).then(function(){t.$store.commit("switchLoading",!1)})},addMessage:function(){var t=this;if(""!==this.inputMessage&&this.isAuth){var e={author:{uid:this.user.uid,name:this.user.displayName,photoURL:this.user.photoURL,email:this.user.email},content:this.inputMessage,createTime:b.a.firestore.Timestamp.fromDate(new Date)};this.inputMessage="",L.collection("Message").add(e).then(function(){t.inputMessage=""}).catch(function(){t.inputMessage=e.content})}}}},C=w,D=(s("d3ef"),Object(g["a"])(C,p,v,!1,null,null,null)),M=D.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{"justify-center":""}},[s("v-dialog",{attrs:{persistent:"","max-width":"320"},model:{value:t.isLogoutDialog,callback:function(e){t.isLogoutDialog=e},expression:"isLogoutDialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[t._v("Logout?")]),s("v-card-text",[t._v("Are you sure you want to logout Chatbox?")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{flat:"",text:"",color:"grey darken-1"},on:{click:t.closeDislog}},[t._v("Close")]),s("v-btn",{attrs:{flat:"",text:"",color:"green darken-1"},on:{click:t.logout}},[t._v("Yes")])],1)],1)],1)],1)},O=[],j={computed:Object(c["a"])({},Object(u["b"])(["isLogoutDialog"])),methods:{logout:function(){this.$store.dispatch("logout")},closeDislog:function(){this.$store.commit("switchLogoutDialog",!1)}}},k=j,$=Object(g["a"])(k,A,O,!1,null,null,null),S=$.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isAuth&&!t.isLoading?s("v-toolbar",{attrs:{color:"#26c6da",dark:"",height:"50"}},[s("v-icon",{attrs:{color:"darken-2"}},[t._v("chat")]),s("v-toolbar-title",{staticClass:"hidden-xs-only"},[t._v("Chatbox")]),s("v-spacer"),s("v-toolbar-items",[t.isAuth?s("div",[s("v-list-tile",{staticClass:"grow"},[s("v-list-tile-avatar",{attrs:{size:"32",color:"grey darken-3"}},[s("v-img",{staticClass:"elevation-6",attrs:{src:t.user.photoURL}})],1),s("v-list-tile-content",[s("v-list-tile-title",[s("span",{staticClass:"font-weight-light"},[t._v(t._s(t.user.displayName))])])],1)],1)],1):t._e(),t.isAuth?s("v-btn",{attrs:{flat:""},on:{click:function(e){return t.openDialog(!0)}}},[t._v("\n            logout\n        ")]):t._e()],1)],1):t._e()},U=[],P={computed:Object(c["a"])({},Object(u["b"])(["user","isAuth","isLogoutDialog","isLoading"])),created:function(){this.$store.dispatch("checkAuth")},methods:{logout:function(){this.$store.dispatch("logout")},openDialog:function(){this.$store.commit("switchLogoutDialog",!0)}}},R=P,E=Object(g["a"])(R,T,U,!1,null,null,null),I=E.exports,B={name:"app",components:{MessageBox:M,LogoutDialog:S,Auth:I,Home:h}},H=B,N=(s("034f"),Object(g["a"])(H,a,i,!1,null,null,null)),G=N.exports,z=s("ce5b"),F=s.n(z),J=(s("d1e7"),s("15f5"),s("bf40"),s("0ff2"));o["default"].use(u["a"]);var V=y.auth(),W=new u["a"].Store({state:{user:{},isAuth:!1,isLogoutDialog:!1,isLoading:!1},mutations:{setCurrentUser:function(t,e){t.user={uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,email:e.email},t.isAuth=!0},cleanCurrentUser:function(t){t.user={},t.isAuth=!1},switchLogoutDialog:function(t,e){t.isLogoutDialog=e},switchLoading:function(t,e){t.isLoading=e}},actions:{checkAuth:function(t){var e=t.commit;e("switchLoading",!0),V.onAuthStateChanged(function(t){t?e("setCurrentUser",t):e("cleanCurrentUser"),e("switchLoading",!1)})},login:function(t){var e=t.commit,s=new b.a.auth.GoogleAuthProvider;V.signInWithPopup(s).then(function(t){e("setCurrentUser",t.user)}).catch(function(t){return console.error(t)})},logout:function(t){var e=t.commit;V.signOut().then(function(){e("cleanCurrentUser"),e("switchLogoutDialog",!1)}).catch(function(t){return console.log(t)})}}}),X=W;o["default"].use(F.a),o["default"].use(J["a"]),o["default"].config.productionTip=!1,new o["default"]({db:void 0,store:X,render:function(t){return t(G)}}).$mount("#app")},"64a9":function(t,e,s){},d3ef:function(t,e,s){"use strict";var o=s("0573"),a=s.n(o);a.a}});
//# sourceMappingURL=app.2a67c189.js.map