(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-forms-item/uni-forms-item"],{"34b1":function(t,e,r){"use strict";var i=r("ca88"),n=r.n(i);n.a},4657:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r("a34a"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e,r,i,n,o,s){try{var a=t[o](s),l=a.value}catch(u){return void r(u)}a.done?e(l):Promise.resolve(l).then(i,n)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(i,n){var o=t.apply(e,r);function a(t){s(o,i,n,a,l,"next",t)}function l(t){s(o,i,n,a,l,"throw",t)}a(void 0)}))}}var l={name:"uniFormsItem",props:{custom:{type:Boolean,default:!1},showMessage:{type:Boolean,default:!0},name:String,required:Boolean,validateTrigger:{type:String,default:""},leftIcon:String,iconColor:{type:String,default:"#606266"},label:String,labelWidth:{type:[Number,String],default:""},labelAlign:{type:String,default:""},labelPosition:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""}},data:function(){return{errorTop:!1,errorBottom:!1,labelMarginBottom:"",errorWidth:"",errMsg:"",val:"",labelPos:"",labelWid:"",labelAli:"",showMsg:"undertext",border:!1,isFirstBorder:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg},fieldStyle:function(){var t={};return"top"==this.labelPos&&(t.padding="0 0",this.labelMarginBottom="6px"),"left"==this.labelPos&&!1!==this.msg&&""!=this.msg?(t.paddingBottom="0px",this.errorBottom=!0,this.errorTop=!1):"top"==this.labelPos&&!1!==this.msg&&""!=this.msg?(this.errorBottom=!1,this.errorTop=!0):(this.errorTop=!1,this.errorBottom=!1),t},justifyContent:function(){return"left"===this.labelAli?"flex-start":"center"===this.labelAli?"center":"right"===this.labelAli?"flex-end":void 0}},watch:{validateTrigger:function(t){this.formTrigger=t}},created:function(){this.form=this.getForm(),this.group=this.getForm("uniGroup"),this.formRules=[],this.formTrigger=this.validateTrigger,this.form.childrens.push(this),this.init()},destroyed:function(){var t=this;this.form&&this.form.childrens.forEach((function(e,r){e===t&&t.form.childrens.splice(r,1)}))},methods:{init:function(){if(this.form){var t=this.form,e=t.formRules,r=t.validator,i=t.formData,n=t.value,o=t.labelPosition,s=t.labelWidth,a=t.labelAlign,l=t.errShowType;this.labelPos=this.labelPosition?this.labelPosition:o,this.labelWid=this.label?this.labelWidth?this.labelWidth:s:0,this.labelAli=this.labelAlign?this.labelAlign:a,this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border,this.showMsg=l,e&&(this.formRules=e[this.name]||{}),this.validator=r,this.name&&(i[this.name]=n.hasOwnProperty(this.name)?n[this.name]:this.form._getValue(this,""))}else this.labelPos=this.labelPosition||"left",this.labelWid=this.labelWidth||65,this.labelAli=this.labelAlign||"left"},getForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",e=this.$parent,r=e.$options.name;while(r!==t){if(e=e.$parent,!e)return!1;r=e.$options.name}return e},clearValidate:function(){this.errMsg=""},setValue:function(t){this.name&&(this.errMsg&&(this.errMsg=""),this.form.formData[this.name]=this.form._getValue(this,t))},triggerCheck:function(e,r){var n=this;return a(i.default.mark((function s(){var a,l,u,f;return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a=null,n.errMsg="",r&&"function"!==typeof r&&Promise&&(a=new Promise((function(t,e){r=function(r){r?e(r):t(r)}}))),n.validator){i.next=7;break}if("function"===typeof r&&r(null),!a){i.next=7;break}return i.abrupt("return",a);case 7:if(l=n.isRequired(n.formRules.rules||[]),u=n.isTrigger(n.formRules.validateTrigger,n.validateTrigger,n.form.validateTrigger),f=null,!u){i.next=17;break}if(i.t0=n.validator,!i.t0){i.next=16;break}return i.next=15,n.validator.validateUpdate(o({},n.name,e),n.form.formData);case 15:i.t0=i.sent;case 16:f=i.t0;case 17:if(l||e||(f=null),u&&f&&f.errorMessage&&("toast"===n.form.errShowType&&t.showToast({title:f.errorMessage||"校验错误",icon:"none"}),"modal"===n.form.errShowType&&t.showModal({title:"提示",content:f.errorMessage||"校验错误"})),n.errMsg=f?f.errorMessage:"",n.form.validateCheck(f||null),"function"===typeof r&&r(f||null),!a){i.next=24;break}return i.abrupt("return",a);case 24:case"end":return i.stop()}}),s)})))()},isTrigger:function(t,e,r){return!("submit"===t||!t)||void 0===t&&("bind"===e||!e&&"bind"===r)},isRequired:function(t){for(var e=!1,r=0;r<t.length;r++){var i=t[r];if(i.required){e=!0;break}}return e}}};e.default=l}).call(this,r("543d")["default"])},"656e":function(t,e,r){"use strict";r.r(e);var i=r("4657"),n=r.n(i);for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},bd5c:function(t,e,r){"use strict";r.r(e);var i=r("d0ca"),n=r("656e");for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);r("34b1");var s,a=r("f0c5"),l=Object(a["a"])(n["default"],i["b"],i["c"],!1,null,"1136727f",null,!1,i["a"],s);e["default"]=l.exports},ca88:function(t,e,r){},d0ca:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return i}));var i={uniIcons:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-icons/uni-icons")]).then(r.bind(null,"c5de"))}},n=function(){var t=this,e=t.$createElement,r=(t._self._c,"left"===t.labelPos?Number(t.labelWid):null);t.$mp.data=Object.assign({},{$root:{m0:r}})},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-forms-item/uni-forms-item-create-component',
    {
        'components/uni-forms-item/uni-forms-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bd5c"))
        })
    },
    [['components/uni-forms-item/uni-forms-item-create-component']]
]);