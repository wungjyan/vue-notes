webpackJsonp([1],{Bn1i:function(t,e){},GxLC:function(t,e){},JFuz:function(t,e){},M5VO:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},a=n("VU/8")({name:"app"},s,!1,function(t){n("JFuz")},null,null).exports,o=n("/ocq"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-row",{staticClass:"header-row"},[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"header"},[this._v("备忘录\n        "),e("el-dropdown",{attrs:{trigger:"click"}},[e("span",{staticClass:"el-dropdown-link"},[this._v("\n          更多"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),this._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[e("router-link",{staticClass:"edit",attrs:{to:"/edit"}},[this._v("编辑")])],1),this._v(" "),e("el-dropdown-item",[e("a",{staticClass:"clearAll",attrs:{href:"javascript:;"},on:{click:this.clearAllEvent}},[this._v("清空")])])],1)],1)],1)])],1)],1)},staticRenderFns:[]},c=n("VU/8")({methods:{clearAllEvent:function(){this.$store.dispatch("clearallevent")}}},l,!1,function(t){n("M5VO")},"data-v-4be701c7",null).exports,r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticStyle:{"margin-bottom":"30px"},attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{lg:10,md:9,sm:9,xs:8}},[n("el-input",{attrs:{placeholder:"请输入内容","prefix-icon":"el-icon-edit"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.submit(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),n("el-col",{attrs:{lg:2,md:3,sm:3,xs:4}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]},u=n("VU/8")({data:function(){return{content:""}},methods:{submit:function(){var t={id:0,type:1,content:"",ischecked:!1};this.content=this.content.trim(),this.content&&(t.content=this.content,this.$store.dispatch("addevent",t),this.content="")}}},r,!1,null,null,null).exports,d=n("kMct"),f=n("DoGJ"),h={components:{ElRow:f.a,ElCol:d.a},data:function(){return{}},mounted:function(){},computed:{getToDo:function(){return this.$store.getters.getToDo},getDone:function(){return this.$store.getters.getDone},getCancel:function(){return this.$store.getters.getCancel},getAll:function(){return this.$store.getters.getAll}},methods:{moveToDone:function(t){this.$store.dispatch("eventdone",t)},moveToDo:function(t){this.$store.dispatch("eventtodo",t)},moveCancel:function(t){this.$store.dispatch("eventcancel",t)}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:12}},[n("el-collapse",[n("el-collapse-item",{attrs:{title:"未完成",name:"1"}},[n("ul",t._l(t.getToDo,function(e){return n("li",[n("el-row",[n("el-col",{attrs:{lg:22,md:21,sm:21,xs:20}},[n("el-checkbox",{key:e.id,staticClass:"checkbox-item",on:{change:function(n){t.moveToDone(e.id)}},model:{value:e.ischecked,callback:function(n){t.$set(e,"ischecked",n)},expression:"value.ischecked"}},[t._v("\n                    "+t._s(e.content)+"\n                  ")])],1),t._v(" "),n("el-col",{attrs:{lg:2,md:3,sm:3,xs:4}},[n("el-button",{staticClass:"btn-item",attrs:{size:"mini"},on:{click:function(n){t.moveCancel(e.id)}}},[t._v("取消")])],1)],1)],1)}))]),t._v(" "),n("el-collapse-item",{attrs:{title:"已完成",name:"2"}},[n("ul",t._l(t.getDone,function(e){return n("li",[n("el-checkbox",{key:e.id,staticClass:"checkbox-item",on:{change:function(n){t.moveToDo(e.id)}},model:{value:e.ischecked,callback:function(n){t.$set(e,"ischecked",n)},expression:"value.ischecked"}},[t._v(t._s(e.content))])],1)}))]),t._v(" "),n("el-collapse-item",{attrs:{title:"已取消",name:"3"}},[n("ul",t._l(t.getCancel,function(e){return n("li",[n("el-row",[n("el-col",{attrs:{lg:22,md:21,sm:21,xs:20}},[n("el-checkbox",{key:e.id,staticClass:"checkbox-item",model:{value:e.ischecked,callback:function(n){t.$set(e,"ischecked",n)},expression:"value.ischecked"}},[t._v(t._s(e.content))])],1),t._v(" "),n("el-col",{attrs:{lg:2,md:3,sm:3,xs:4}},[e.ischecked?n("el-button",{staticClass:"btn-item",attrs:{size:"mini"},on:{click:function(n){t.moveToDo(e.id)}}},[t._v("恢复")]):t._e()],1)],1)],1)}))])],1)],1)],1)],1)},staticRenderFns:[]},v={components:{NavHeader:c,NavInput:u,NavEvent:n("VU/8")(h,p,!1,function(t){n("gkTH")},"data-v-094835ba",null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"home"}},[e("div",{staticClass:"wrap"},[e("nav-header"),this._v(" "),e("nav-input"),this._v(" "),e("nav-event")],1)])},staticRenderFns:[]},_=n("VU/8")(v,m,!1,function(t){n("Bn1i")},null,null).exports,g={name:"ElButton",inject:{elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},buttonSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size}},methods:{handleClick:function(t){this.$emit("click",t)},handleInnerClick:function(t){this.disabled&&t.stopPropagation()}}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"el-button",class:[this.type?"el-button--"+this.type:"",this.buttonSize?"el-button--"+this.buttonSize:"",{"is-disabled":this.disabled,"is-loading":this.loading,"is-plain":this.plain,"is-round":this.round}],attrs:{disabled:this.disabled,autofocus:this.autofocus,type:this.nativeType},on:{click:this.handleClick}},[this.loading?e("i",{staticClass:"el-icon-loading",on:{click:this.handleInnerClick}}):this._e(),this._v(" "),this.icon&&!this.loading?e("i",{class:this.icon,on:{click:this.handleInnerClick}}):this._e(),this._v(" "),this.$slots.default?e("span",{on:{click:this.handleInnerClick}},[this._t("default")],2):this._e()])},staticRenderFns:[]},E=n("VU/8")(g,x,!1,null,null,null).exports,C=n("ufP2"),b=n("IHkg"),k=n("Doj+"),y=n("9BW/"),$={name:"ElInput",componentName:"ElInput",mixins:[C.a,b.a],inject:{elForm:{default:""},elFormItem:{default:""}},data:function(){return{currentValue:this.value,textareaCalcStyle:{},prefixOffset:null,suffixOffset:null,hovering:!1,focused:!1}},props:{value:[String,Number],placeholder:String,size:String,resize:String,name:String,form:String,id:String,maxlength:Number,minlength:Number,readonly:Boolean,autofocus:Boolean,disabled:Boolean,type:{type:String,default:"text"},autosize:{type:[Boolean,Object],default:!1},rows:{type:Number,default:2},autoComplete:{type:String,default:"off"},max:{},min:{},step:{},validateEvent:{type:Boolean,default:!0},suffixIcon:String,prefixIcon:String,label:String,clearable:{type:Boolean,default:!1}},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},validateState:function(){return this.elFormItem?this.elFormItem.validateState:""},needStatusIcon:function(){return!!this.elForm&&this.elForm.statusIcon},validateIcon:function(){return{validating:"el-icon-loading",success:"el-icon-circle-check",error:"el-icon-circle-close"}[this.validateState]},textareaStyle:function(){return Object(y.a)({},this.textareaCalcStyle,{resize:this.resize})},inputSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},isGroup:function(){return this.$slots.prepend||this.$slots.append},showClear:function(){return this.clearable&&""!==this.currentValue&&(this.focused||this.hovering)}},watch:{value:function(t,e){this.setCurrentValue(t)}},methods:{focus:function(){(this.$refs.input||this.$refs.textarea).focus()},getMigratingConfig:function(){return{props:{icon:"icon is removed, use suffix-icon / prefix-icon instead.","on-icon-click":"on-icon-click is removed."},events:{click:"click is removed."}}},handleBlur:function(t){this.focused=!1,this.$emit("blur",t),this.validateEvent&&this.dispatch("ElFormItem","el.form.blur",[this.currentValue])},inputSelect:function(){(this.$refs.input||this.$refs.textarea).select()},resizeTextarea:function(){if(!this.$isServer){var t=this.autosize;if("textarea"===this.type)if(t){var e=t.minRows,n=t.maxRows;this.textareaCalcStyle=Object(k.a)(this.$refs.textarea,e,n)}else this.textareaCalcStyle={minHeight:Object(k.a)(this.$refs.textarea).minHeight}}},handleFocus:function(t){this.focused=!0,this.$emit("focus",t)},handleInput:function(t){var e=t.target.value;this.$emit("input",e),this.setCurrentValue(e)},handleChange:function(t){this.$emit("change",t.target.value)},setCurrentValue:function(t){var e=this;t!==this.currentValue&&(this.$nextTick(function(t){e.resizeTextarea()}),this.currentValue=t,this.validateEvent&&this.dispatch("ElFormItem","el.form.change",[t]))},calcIconOffset:function(t){var e={suf:"append",pre:"prepend"}[t];if(this.$slots[e])return{transform:"translateX("+("suf"===t?"-":"")+this.$el.querySelector(".el-input-group__"+e).offsetWidth+"px)"}},clear:function(){this.$emit("input",""),this.$emit("change",""),this.setCurrentValue(""),this.focus()}},created:function(){this.$on("inputSelect",this.inputSelect)},mounted:function(){this.resizeTextarea(),this.isGroup&&(this.prefixOffset=this.calcIconOffset("pre"),this.suffixOffset=this.calcIconOffset("suf"))}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["textarea"===t.type?"el-textarea":"el-input",t.inputSize?"el-input--"+t.inputSize:"",{"is-disabled":t.disabled,"el-input-group":t.$slots.prepend||t.$slots.append,"el-input-group--append":t.$slots.append,"el-input-group--prepend":t.$slots.prepend,"el-input--prefix":t.$slots.prefix||t.prefixIcon,"el-input--suffix":t.$slots.suffix||t.suffixIcon}],on:{mouseenter:function(e){t.hovering=!0},mouseleave:function(e){t.hovering=!1}}},["textarea"!==t.type?[t.$slots.prepend?n("div",{staticClass:"el-input-group__prepend",attrs:{tabindex:"0"}},[t._t("prepend")],2):t._e(),t._v(" "),"textarea"!==t.type?n("input",t._b({ref:"input",staticClass:"el-input__inner",attrs:{autocomplete:t.autoComplete,"aria-label":t.label},domProps:{value:t.currentValue},on:{input:t.handleInput,focus:t.handleFocus,blur:t.handleBlur,change:t.handleChange}},"input",t.$props,!1)):t._e(),t._v(" "),t.$slots.prefix||t.prefixIcon?n("span",{staticClass:"el-input__prefix",style:t.prefixOffset},[t._t("prefix"),t._v(" "),t.prefixIcon?n("i",{staticClass:"el-input__icon",class:t.prefixIcon}):t._e()],2):t._e(),t._v(" "),t.$slots.suffix||t.suffixIcon||t.showClear||t.validateState&&t.needStatusIcon?n("span",{staticClass:"el-input__suffix",style:t.suffixOffset},[n("span",{staticClass:"el-input__suffix-inner"},[t.showClear?n("i",{staticClass:"el-input__icon el-icon-circle-close el-input__clear",on:{click:t.clear}}):[t._t("suffix"),t._v(" "),t.suffixIcon?n("i",{staticClass:"el-input__icon",class:t.suffixIcon}):t._e()]],2),t._v(" "),t.validateState?n("i",{staticClass:"el-input__icon",class:["el-input__validateIcon",t.validateIcon]}):t._e()]):t._e(),t._v(" "),t.$slots.append?n("div",{staticClass:"el-input-group__append"},[t._t("append")],2):t._e()]:n("textarea",t._b({ref:"textarea",staticClass:"el-textarea__inner",style:t.textareaStyle,attrs:{"aria-label":t.label},domProps:{value:t.currentValue},on:{input:t.handleInput,focus:t.handleFocus,blur:t.handleBlur,change:t.handleChange}},"textarea",t.$props,!1))],2)},staticRenderFns:[]},I=n("VU/8")($,S,!1,null,null,null).exports,w={components:{ElRow:f.a,ElInput:I,ElCol:d.a,ElButton:E},data:function(){return{isEdited:!1,events:""}},computed:{eventData:function(){for(var t=this.$store.getters.getAll,e=0;e<t.length;e++)1==t[e].type?t[e].status="未完成":2==t[e].type?t[e].status="已完成":t[e].status="已取消";return t}},methods:{cancelEvent:function(t){this.$store.dispatch("cancelevent",t)},editEvent:function(t){this.isEdited=!0;for(var e=0;e<this.eventData.length;e++)this.eventData[e].id==t&&(this.events=this.eventData[e],this.events.initcontent=this.eventData[e].content)},saveEvent:function(t){this.$store.dispatch("saveedit",t),this.isEdited=!1},canceledit:function(){this.isEdited=!1;for(var t=0;t<this.eventData.length;t++)this.eventData[t].id==this.events.id&&(this.eventData[t].content=this.events.initcontent)}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"edit"}},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"toHome"},[n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),n("table",{attrs:{width:"800",cellpadding:"0",cellspacing:"0"}},[n("thead",[n("tr",[n("th",{attrs:{width:"100"}},[t._v("#")]),t._v(" "),n("th",{attrs:{width:"270"}},[t._v("事项")]),t._v(" "),n("th",{attrs:{width:"180"}},[t._v("类型")]),t._v(" "),n("th",{attrs:{width:"250"}},[t._v("操作")])])]),t._v(" "),n("tbody",t._l(t.eventData,function(e){return n("tr",[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.content))]),t._v(" "),n("td",[t._v(t._s(e.status))]),t._v(" "),n("td",[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){t.editEvent(e.id)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.cancelEvent(e.id)}}},[t._v("删除")])],1)])}))]),t._v(" "),t.eventData.length?t._e():n("div",{staticClass:"warning"},[t._v("啊哦，数据呢！")]),t._v(" "),n("div",{staticClass:"modal",class:{"modal-show":t.isEdited}},[n("el-row",{staticStyle:{"margin-bottom":"3px"}},[n("el-col",{attrs:{span:24}},[n("el-input",{nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.saveEvent(e)}},model:{value:t.events.content,callback:function(e){t.$set(t.events,"content",e)},expression:"events.content"}})],1)],1),t._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-button",{attrs:{size:"medium"},on:{click:t.canceledit}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(e){t.saveEvent(t.events)}}},[t._v("保存")])],1)],1)],1)])])},staticRenderFns:[]},T=n("VU/8")(w,D,!1,function(t){n("GxLC")},"data-v-2852c86e",null).exports;i.default.use(o.a);var z=new o.a({routes:[{path:"/",name:"Home",component:_},{path:"/edit",name:"NavEdit",component:T}]}),V=n("NYxO"),N=n("mvHQ"),F=n.n(N),O=new function(t){this.get=function(){return localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)):""},this.set=function(e){localStorage.setItem(t,F()(e))},this.clear=function(){localStorage.removeItem(t)}}("mydata"),A={state:O.get()||{event:[],count:0},getters:{getToDo:function(t){return t.event.filter(function(t){if(1===t.type)return t})},getDone:function(t){return t.event.filter(function(t){if(2===t.type)return t})},getCancel:function(t){return t.event.filter(function(t){if(3===t.type)return t})},getAll:function(t){return t.event}},mutations:{ADDEVENT:function(t,e){t.count++,e.items.id=t.count,t.event.unshift(e.items),O.set(t)},EVENTDONE:function(t,e){for(var n=0;n<t.event.length;n++)if(t.event[n].id==e.id){t.event[n].type=2,t.event[n].ischecked=!0;var i=t.event[n];t.event.splice(n,1);break}t.event.unshift(i),O.set(t)},EVENTTODO:function(t,e){for(var n=0;n<t.event.length;n++)if(t.event[n].id==e.id){t.event[n].type=1,t.event[n].ischecked=!1;var i=t.event[n];t.event.splice(n,1);break}t.event.unshift(i),O.set(t)},EVENTCANCEL:function(t,e){for(var n=0;n<t.event.length;n++)if(t.event[n].id==e.id){t.event[n].type=3,t.event[n].ischecked=!1;var i=t.event[n];t.event.splice(n,1);break}t.event.unshift(i),O.set(t)},CANCELEVENT:function(t,e){for(var n=0;n<t.event.length;n++)if(t.event[n].id==e.id){t.event.splice(n,1),0==t.event.length&&(t.count=0);break}O.set(t)},CLEARALLEVENT:function(t){t.event=[],t.count=0,O.set(t)},SAVEEDIT:function(t,e){for(var n=0;n<t.event.length;n++)if(t.event[n].id==e.editdata.id){t.event[n].content=e.editdata.content;break}O.set(t)}},actions:{addevent:function(t,e){(0,t.commit)("ADDEVENT",{items:e})},eventdone:function(t,e){(0,t.commit)("EVENTDONE",{id:e})},eventtodo:function(t,e){(0,t.commit)("EVENTTODO",{id:e})},eventcancel:function(t,e){(0,t.commit)("EVENTCANCEL",{id:e})},cancelevent:function(t,e){(0,t.commit)("CANCELEVENT",{id:e})},clearallevent:function(t){(0,t.commit)("CLEARALLEVENT")},saveedit:function(t,e){(0,t.commit)("SAVEEDIT",{editdata:e})}}};i.default.use(V.a);var B=new V.a.Store({modules:{event:A}}),R=(n("tvR6"),n("zL8q"));i.default.use(R.Row),i.default.use(R.Col),i.default.use(R.Container),i.default.use(R.Icon),i.default.use(R.Button),i.default.use(R.Input),i.default.use(R.Collapse),i.default.use(R.CollapseItem),i.default.use(R.Checkbox),i.default.use(R.Dropdown),i.default.use(R.DropdownMenu),i.default.use(R.DropdownItem),i.default.config.productionTip=!1,new i.default({el:"#app",router:z,store:B,template:"<App/>",components:{App:a}})},gkTH:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.87c6d5ff8c79079b8e71.js.map