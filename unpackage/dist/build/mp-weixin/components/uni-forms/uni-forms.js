(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-forms/uni-forms"],{"21c2":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement;e._self._c},a=[]},2846:function(e,t,r){"use strict";r.r(t);var n=r("6653"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},"2a5b":function(e,t,r){"use strict";r.r(t);var n=r("21c2"),i=r("2846");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("567f");var u,s=r("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"4a288dd0",null,!1,n["a"],u);t["default"]=o.exports},"328e":function(e,t,r){},"567f":function(e,t,r){"use strict";var n=r("328e"),i=r.n(n);i.a},6653:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r("a34a")),i=u(r("66fd")),a=u(r("99ef"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t,r,n,i,a,u){try{var s=e[a](u),o=s.value}catch(f){return void r(f)}s.done?t(o):Promise.resolve(o).then(n,i)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function u(e){o(a,n,i,u,s,"next",e)}function s(e){o(a,n,i,u,s,"throw",e)}u(void 0)}))}}i.default.prototype.binddata=function(e,t,r){if(r)this.$refs[r].setValue(e,t);else{var n;for(var i in this.$refs){var a=this.$refs[i];if(a&&a.$options&&"uniForms"===a.$options.name){n=a;break}}if(!n)return console.error("当前 uni-froms 组件缺少 ref 属性");n.setValue(e,t)}};var l={name:"uniForms",props:{value:{type:Object,default:function(){return{}}},rules:{type:Object,default:function(){return{}}},validateTrigger:{type:String,default:""},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:65},labelAlign:{type:String,default:"left"},errShowType:{type:String,default:"undertext"},border:{type:Boolean,default:!1}},data:function(){return{formData:{}}},watch:{rules:function(e){this.init(e)},trigger:function(e){this.formTrigger=e},value:{handler:function(e){var t=this;this.isChildEdit?this.isChildEdit=!1:this.childrens.forEach((function(r){if(r.name){var n=e.hasOwnProperty(r.name)?e[r.name]:null;t.formData[r.name]=t._getValue(r,n)}}))},deep:!0}},created:function(){this.childrens=[],this.inputChildrens=[],this.checkboxChildrens=[],this.formRules=[],this.init(this.rules)},methods:{init:function(e){Object.keys(e).length>0&&(this.formTrigger=this.trigger,this.formRules=e,this.validator||(this.validator=new a.default(e))),this.childrens.forEach((function(e){e.init()}))},setRules:function(e){this.init(e)},setValue:function(e,t,r){var n=this.childrens.find((function(t){return t.name===e}));return n?(this.isChildEdit=!0,t=this._getValue(n,t),this.formData[e]=t,n.val=t,this.$emit("input",Object.assign({},this.value,this.formData)),n.triggerCheck(t,r)):null},submitForm:function(e){var t=e.detail.value;return this.validateAll(t||this.formData,"submit")},resetForm:function(e){var t=this;this.childrens.forEach((function(e){e.errMsg="";var r=t.inputChildrens.find((function(t){return t.rename===e.name}));r&&(r.errMsg="",r.$emit("input",r.multiple?[]:""))})),this.isChildEdit=!0,this.childrens.forEach((function(e){e.name&&(t.formData[e.name]=t._getValue(e,""))})),this.$emit("input",this.formData),this.$emit("reset",e)},validateCheck:function(e){null===e&&(e=null),this.$emit("validate",e)},validateAll:function(t,r,i){var a=this;return f(n.default.mark((function u(){var o,f,l,c,d,h,m,v,b,p;return n.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:for(c in a.childrens.forEach((function(e){e.errMsg=""})),!i&&"function"!==typeof i&&Promise&&(o=new Promise((function(e,t){i=function(r,n){r?t(r):e(n)}}))),f={},l=Object.assign({},t),Object.keys(a.formRules).forEach((function(e){for(var t=a.formRules[e],r=t&&t.rules||[],n=!1,i=0;i<r.length;i++){var u=r[i];if(u.required){n=!0;break}}n||l[e]||!1===l[e]||delete l[e]})),a.formRules)for(d in l)c===d&&(f[c]=l[c]);if(h=[],m=null,!a.validator){u.next=19;break}v=n.default.mark((function t(r){var i,u;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.validator.validateUpdate(s({},r,f[r]),a.formData);case 2:if(i=t.sent,!i){t.next=23;break}if(m=a.childrens.find((function(e){return e.name===i.key})),u=a.inputChildrens.find((function(e){return e.rename===m.name})),u&&(u.errMsg=i.errorMessage),h.push(i),"undertext"!==a.errShowType){t.next=12;break}m&&(m.errMsg=i.errorMessage),t.next=23;break;case 12:if("toast"!==a.errShowType){t.next=17;break}return e.showToast({title:i.errorMessage||"校验错误",icon:"none"}),t.abrupt("return","break");case 17:if("modal"!==a.errShowType){t.next=22;break}return e.showModal({title:"提示",content:i.errorMessage||"校验错误"}),t.abrupt("return","break");case 22:m&&(m.errMsg=i.errorMessage);case 23:case"end":return t.stop()}}),t)})),u.t0=n.default.keys(f);case 11:if((u.t1=u.t0()).done){u.next=19;break}return b=u.t1.value,u.delegateYield(v(b),"t2",14);case 14:if(p=u.t2,"break"!==p){u.next=17;break}return u.abrupt("break",19);case 17:u.next=11;break;case 19:if(Array.isArray(h)&&0===h.length&&(h=null),"submit"===r?a.$emit("submit",{detail:{value:t,errors:h}}):a.$emit("validate",h),i&&"function"===typeof i&&i(h,t),!o||!i){u.next=26;break}return u.abrupt("return",o);case 26:return u.abrupt("return",null);case 27:case"end":return u.stop()}}),u)})))()},submit:function(e){return this.validateAll(this.formData,"submit",e)},validate:function(e){return this.validateAll(this.formData,"",e)},validateField:function(e,t){var r=this;e=[].concat(e);var n={};return this.childrens.forEach((function(t){-1!==e.indexOf(t.name)&&(n=Object.assign({},n,s({},t.name,r.formData[t.name])))})),this.validateAll(n,"",t)},resetFields:function(){this.resetForm()},clearValidate:function(e){var t=this;e=[].concat(e),this.childrens.forEach((function(r){var n=t.inputChildrens.find((function(e){return e.rename===r.name}));(0===e.length||-1!==e.indexOf(r.name))&&(r.errMsg="",n&&(n.errMsg=""))}))},_getValue:function(e,t){var r=this,n=e.formRules.rules||[],i=n.find((function(e){return e.format&&r.type_filter(e.format)})),a=n.find((function(e){return e.format&&"boolean"===e.format||"bool"===e.format}));return i&&(t=""===t||null===t?null:Number(t)),a&&(t=!!t),t},type_filter:function(e){return"int"===e||"double"===e||"number"===e}}};t.default=l}).call(this,r("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-forms/uni-forms-create-component',
    {
        'components/uni-forms/uni-forms-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2a5b"))
        })
    },
    [['components/uni-forms/uni-forms-create-component']]
]);
