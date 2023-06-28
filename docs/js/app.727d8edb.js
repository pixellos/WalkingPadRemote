(function(){"use strict";var t={8980:function(t,e,s){var o=s(7195),n=s(3675),i=s.n(n),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("app-navigator"),e("v-ons-toast",{attrs:{visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[t._v(" "+t._s(t.visible?t.active.message:"")+" ")])],1)},a=[],u=s(408),c=function(){var t=this,e=t._self._c;return e("v-ons-navigator",{attrs:{swipeable:"","swipe-target-width":"50px","page-stack":t.pageStack,"pop-page":t.storePop,options:t.options}})},p=[],l=function(){var t=this,e=t._self._c;return e("v-ons-page",[e("div",{staticClass:"content"},[e("div",[t.loading?e("ons-row",[e("ons-progress-circular",{attrs:{indeterminate:""}})],1):t._e(),t.bluetoothSupport?e("v-ons-row",[e("v-ons-button",{attrs:{modifier:"outline"},on:{click:t.connect}},[t._v(" Connect ")])],1):e("ons-row",[e("p",[t._v("This browser does not support Web Bluetooth!")])])],1)])])},d=[],m=(s(7658),function(){var t=this,e=t._self._c;return e("v-ons-splitter",[e("v-ons-splitter-side",{attrs:{swipeable:"",side:"left",collapse:"",width:"80%",animation:t.md?"overlay":"reveal","swipe-target-width":t.md&&25,open:t.isOpen},on:{"update:open":function(e){t.isOpen=e}}},[e("Menu")],1),e("v-ons-splitter-content",[e("router-view")],1)],1)}),h=[],v=function(){var t=this,e=t._self._c;return e("v-ons-page",[e("v-ons-list",[e("v-ons-list-item",{attrs:{modifier:"chevron",tappable:""},on:{click:function(e){return t.select()}}},[t._v(" Remote ")]),e("v-ons-list-item",{attrs:{modifier:"chevron"}},[t._v(" Stats (coming soon) ")])],1)],1)},f=[],g={name:"MenuView",methods:{select(){this.$store.commit("splitter/toggle")}}},b=g,w=s(1001),_=(0,w.Z)(b,v,f,!1,null,null,null),S=_.exports,k={name:"AppSplitter",components:{Menu:S},computed:{isOpen:{get(){return this.$store.state.splitter.open},set(t){this.$store.commit("splitter/toggle",t)}}}},C=k,y=(0,w.Z)(C,m,h,!1,null,null,null),T=y.exports,$={name:"LoadingView",data(){return{loading:!1,bluetoothSupport:!1}},methods:{...(0,u.OI)("navigator",["push"]),...(0,u.nv)("treadmill",["setup"]),...(0,u.nv)("alert",["pushToast"]),connect(){this.loading||(this.loading=!0,setTimeout((()=>{this.setup().then((()=>{this.push(T)}),(t=>{this.error=!0,this.loading=!1,this.pushToast(t)}))}),1e3))}},mounted(){this.bluetoothSupport=!!navigator.bluetooth}},P=$,O=(0,w.Z)(P,l,d,!1,null,"6077eeaf",null),Z=O.exports,x={beforeCreate(){this.$store.commit("navigator/push",Z)},computed:{pageStack(){return this.$store.state.navigator.stack},options(){return this.$store.state.navigator.options}},methods:{storePop(){this.$store.commit("navigator/pop")}}},q=x,D=(0,w.Z)(q,c,p,!1,null,null,null),I=D.exports,A={components:{AppNavigator:I},name:"App",computed:{...(0,u.Se)("alert",["visible"]),...(0,u.rn)("alert",["active"])}},M=A,R=(0,w.Z)(M,r,a,!1,null,null,null),j=R.exports,V=s(2241),W=function(){var t=this,e=t._self._c;return e("v-ons-page",[e("toolbar",t._b({},"toolbar",t.toolbarInfo,!1)),e("div",{staticClass:"content"},[e("v-ons-segment",{attrs:{index:t.mode},on:{"update:index":function(e){t.mode=e}}},[e("button",[t._v("Automatic")]),e("button",[t._v("Manual")])]),e("div",{attrs:{id:"speedControl"}},[e("div",[e("v-ons-button",{attrs:{modifier:"quiet"},on:{click:function(e){return t.speedDown()}}},[t._v("-")]),t._v(" "+t._s(t.currentSpeed)+" "),e("v-ons-button",{attrs:{modifier:"quiet"},on:{click:function(e){return t.speedUp()}}},[t._v("+")])],1),e("div",[e("v-ons-button",{attrs:{modifier:"outline"},on:{click:function(e){return t.stop()}}},[t._v(t._s(0===t.speed?"Start":"Stop"))])],1)])],1),e("div",{attrs:{id:"infos"}},[e("p",[t._v("Distance: "+t._s(t.distance))]),e("p",[t._v("Time: "+t._s(t.time))]),e("p",[t._v("Steps: "+t._s(t.steps))])])],1)},U=[],B=function(){var t=this,e=t._self._c;return e("v-ons-toolbar",[e("div",{staticClass:"left"},[e("v-ons-toolbar-button",{on:{click:function(e){return t.$store.commit("splitter/toggle")}}},[e("v-ons-icon",{attrs:{icon:"ion-ios-menu, material:md-menu"}})],1)],1),e("div",{staticClass:"center"},[t._v(" "+t._s(t.title)+" ")])])},Q=[],E={name:"ToolbarComponent",props:["title"]},L=E,N=(0,w.Z)(L,B,Q,!1,null,null,null),F=N.exports,z={name:"RemoteView",components:{Toolbar:F},data(){return{toolbarInfo:{title:"WalkingPad Remote"}}},computed:{...(0,u.rn)("treadmill",["steps"]),...(0,u.Se)("treadmill",{currentSpeed:"speed",distance:"distance",time:"time"}),mode:{get(){return this.$store.state.treadmill.mode},set(t){this.$store.dispatch("treadmill/updateMode",t)}},speed:{get(){return this.$store.state.treadmill.speed},set(t){this.$store.dispatch("treadmill/updateSpeed",t)}}},methods:{...(0,u.nv)("treadmill",["startBelt"]),speedDown(){0!==this.speed&&(this.speed-=5)},speedUp(){60!==this.speed&&(this.speed+=5)},stop(){0!==this.speed?this.speed=0:this.startBelt()}}},G=z,H=(0,w.Z)(G,W,U,!1,null,"6c1eb97c",null),J=H.exports,K=function(){var t=this,e=t._self._c;return e("v-ons-page")},X=[],Y={name:"StatsView"},tt=Y,et=(0,w.Z)(tt,K,X,!1,null,null,null),st=et.exports;o.ZP.use(V.ZP);const ot=[{path:"/",name:"remote",component:J},{path:"/stats",name:"stats",component:st}],nt=new V.ZP({mode:"history",base:"/",routes:ot});var it=nt;const rt={namespaced:!0,state:{stack:[],options:{}},getters:{},mutations:{push(t,e){t.stack.push(e)},pop(t){t.stack.length>1&&t.stack.pop()},replace(t,e){t.stack.pop(),t.stack.push(e)},reset(t,e){t.stack=[e||t.stack[0]]},options(t,e={}){t.options=e}},actions:{},modules:{}};var at=rt;const ut={namespaced:!0,state:{open:!1},getters:{},mutations:{toggle(t,e){t.open="boolean"===typeof e?e:!t.open}},actions:{},modules:{}};var ct=ut;const pt=3e3,lt=t=>setTimeout(t,pt),dt={namespaced:!0,state:{active:void 0,timeoutId:void 0,queue:[]},getters:{visible:t=>!!t.active},mutations:{enqueue(t,{toast:e}){t.queue.push(e)},dequeue(t,{timeoutId:e}){const s=t.queue.shift();t.active=s,t.timeoutId=e},reset(t){const{timeoutId:e}=t;e&&clearTimeout(e),t.active=void 0,t.timeoutId=void 0}},actions:{pushToast(t,e){t.commit("enqueue",{toast:e}),t.state.active||t.dispatch("processQueue")},processQueue(t){if(!t.state.queue.length&&!t.state.active)return;if(!t.state.queue.length&&t.state.active)return lt((()=>t.commit("reset")));const e=lt((()=>t.dispatch("processQueue")));t.commit("dequeue",{timeoutId:e})}},modules:{}};var mt=dt;s(3767),s(8585),s(8696);const ht="0000fe00-0000-1000-8000-00805f9b34fb",vt="0000fe01-0000-1000-8000-00805f9b34fb",ft="0000fe02-0000-1000-8000-00805f9b34fb",gt=0,bt=1,wt=2,_t=4,St=1,kt=2,Ct=1,yt=3,Tt=1,$t=4,Pt=1,Ot=5,Zt=3,xt=8,qt=3,Dt=11,It=3;function At(t){return"number"===typeof t}function Mt(t,e){return Uint8Array.of(247,162,t,e,162+t+e,253)}function Rt(t,e,s){return t.slice(e,e+s)}function jt(t){const e=4,s=new Uint8Array(e);return s.set(t,e-t.length),s[0]<<24|s[1]<<16|s[2]<<8|s[3]}const Vt={namespaced:!0,state:{state:0,mode:1,speed:0,time:0,distance:0,steps:0,updateTimer:null},getters:{speed(t){const e=t.speed.toString();return 0===t.speed?"0 km/h":t.speed<10?`0.${e} km/h`:`${e.charAt(0)}.${e.charAt(1)} km/h`},distance(t){const e=t.speed.toString();return 0===t.distance?"0 m":t.distance<100?`${e}0 m`:`${e.substring(0,e.length-2)}.${e.substring(e.length-2)} km`},time(t){return new Date(1e3*t.time).toISOString().substring(11,16)}},mutations:{updateData(t,e){At(e.state)&&(t.state=e.state),At(e.mode)&&(t.mode=e.mode),At(e.speed)&&(t.speed=e.speed),At(e.time)&&(t.time=e.time),At(e.distance)&&(t.distance=e.distance),At(e.steps)&&(t.steps=e.steps)},setReadCharacteristic(t,e){t.readCharacteristic=e},setWriteCharacteristic(t,e){t.writeCharacteristic=e},clearTimer(t){clearInterval(t.updateTimer),t.updateTimer=null}},actions:{setup(t){return new Promise(((e,s)=>{navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:[ht]}).then((t=>t.gatt?.connect())).then((t=>t?.getPrimaryService(ht))).then((o=>{o?.getCharacteristic(vt).then((t=>t.startNotifications())).then((n=>{t.commit("setReadCharacteristic",n),n.addEventListener("characteristicvaluechanged",(e=>{const s=e.target.value;if(s){const e=new Uint8Array(s.buffer);t.dispatch("treadmill/updateData",e,{root:!0})}})),o?.getCharacteristic(ft).then((s=>{e(),t.commit("setWriteCharacteristic",s)})).catch((t=>{s(t)})),t.state.updateTimer||setInterval((()=>{t.dispatch("treadmill/requestData",{},{root:!0})}),1e3)})).catch((t=>{s(t)}))})).catch((t=>{s(t)}))}))},requestData(t){const e=Mt(gt,0);t.state.writeCharacteristic?.writeValueWithoutResponse(e).then((()=>{}),(()=>{t.commit("clearTimer"),t.dispatch("alert/pushToast",{message:"Connection lost, refreshing..."},{root:!0}),setTimeout((()=>{document.location.reload()}),3e3)}))},updateData(t,e){t.commit("updateData",{state:jt(Rt(e,kt,Ct)),speed:jt(Rt(e,yt,Tt)),mode:jt(Rt(e,$t,Pt)),time:jt(Rt(e,Ot,Zt)),distance:jt(Rt(e,xt,qt)),steps:jt(Rt(e,Dt,It))})},startBelt(t){const e=Mt(_t,St);return t.state.writeCharacteristic?.writeValueWithoutResponse(e),!0},updateMode(t,e){return!![0,1].includes(t.state.mode)&&(t.commit("updateData",{mode:e}),t.dispatch("treadmill/sendMode",{},{root:!0}),!0)},updateSpeed(t,e){return!(t.state.speed<0||t.state.speed>60)&&(t.commit("updateData",{speed:e}),t.dispatch("treadmill/sendSpeed",{},{root:!0}),!0)},sendMode(t){const e=Mt(wt,t.state.mode);return t.state.writeCharacteristic?.writeValueWithoutResponse(e),!0},sendSpeed(t){const e=Mt(bt,t.state.speed);return t.state.writeCharacteristic?.writeValueWithoutResponse(e),!0}},modules:{}};var Wt=Vt;o.ZP.use(u.ZP);var Ut=new u.ZP.Store({modules:{navigator:at,splitter:ct,alert:mt,treadmill:Wt}});o.ZP.config.productionTip=!1,o.ZP.use(i()),new o.ZP({router:it,store:Ut,render:t=>t(j),beforeCreate(){o.ZP.prototype.md=this.$ons.platform.isAndroid()}}).$mount("#app")}},e={};function s(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,o,n,i){if(!o){var r=1/0;for(p=0;p<t.length;p++){o=t[p][0],n=t[p][1],i=t[p][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||r>=i)&&Object.keys(s.O).every((function(t){return s.O[t](o[u])}))?o.splice(u--,1):(a=!1,i<r&&(r=i));if(a){t.splice(p--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[o,n,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,r=o[0],a=o[1],u=o[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(u)var p=u(s)}for(e&&e(o);c<r.length;c++)i=r[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(p)},o=self["webpackChunkwalkingpad"]=self["webpackChunkwalkingpad"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(8980)}));o=s.O(o)})();
//# sourceMappingURL=app.727d8edb.js.map