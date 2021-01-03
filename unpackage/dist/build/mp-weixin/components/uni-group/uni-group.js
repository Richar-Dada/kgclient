(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-group/uni-group"],{"0c0b":function(t,n,e){"use strict";e.r(n);var r=e("4e8e"),i=e("a0c3");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("7154");var o,a=e("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"69de3887",null,!1,r["a"],o);n["default"]=c.exports},"4e8e":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"5f49":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"uniGroup",props:{title:{type:String,default:""},top:{type:[Number,String],default:10},mode:{type:String,default:"default"}},data:function(){return{margin:!1,border:!1}},watch:{title:function(n){t.report&&""!==n&&t.report("title",n)}},created:function(){this.form=this.getForm(),this.form&&(this.margin=!0,this.border=this.form.border)},methods:{getForm:function(){var t=this.$parent,n=t.$options.name;while("uniForms"!==n){if(t=t.$parent,!t)return!1;n=t.$options.name}return t},onClick:function(){this.$emit("click")}}};n.default=e}).call(this,e("543d")["default"])},7154:function(t,n,e){"use strict";var r=e("c3e1"),i=e.n(r);i.a},a0c3:function(t,n,e){"use strict";e.r(n);var r=e("5f49"),i=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=i.a},c3e1:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-group/uni-group-create-component',
    {
        'components/uni-group/uni-group-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0c0b"))
        })
    },
    [['components/uni-group/uni-group-create-component']]
]);
