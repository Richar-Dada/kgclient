(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{2668:function(t,e,n){"use strict";var u=n("521c"),a=n.n(u);a.a},"2fe3":function(t,e,n){"use strict";n.r(e);var u=n("b77a"),a=n("fcad");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("2668");var c,r=n("f0c5"),f=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,"bc381f7e",null,!1,u["a"],c);e["default"]=f.exports},"521c":function(t,e,n){},b77a:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return u}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},ef51:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},fcad:function(t,e,n){"use strict";n.r(e);var u=n("ef51"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);e["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2fe3"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);
