(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-notice-bar/uni-notice-bar"],{1163:function(n,t,e){"use strict";e.r(t);var o=e("cebe"),i=e("8134");for(var c in i)"default"!==c&&function(n){e.d(t,n,(function(){return i[n]}))}(c);e("2140");var a,u=e("f0c5"),r=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"91aa16bc",null,!1,o["a"],a);t["default"]=r.exports},2140:function(n,t,e){"use strict";var o=e("fa20"),i=e.n(o);i.a},8134:function(n,t,e){"use strict";e.r(t);var o=e("ee2a"),i=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=i.a},cebe:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return o}));var o={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"c5de"))}},i=function(){var n=this,t=n.$createElement;n._self._c},c=[]},ee2a:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(function(){return resolve(e("c5de"))}.bind(null,e)).catch(e.oe)},i={name:"UniNoticeBar",components:{uniIcons:o},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:Number,default:100},color:{type:String,default:"#de8c17"},moreColor:{type:String,default:"#999999"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var n="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:n,elIdBox:t,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var n=this;this.$nextTick((function(){n.initSize()}))},methods:{initSize:function(){var t=this;if(this.scrollable){var e=[],o=new Promise((function(e,o){n.createSelectorQuery().in(t).select("#".concat(t.elId)).boundingClientRect().exec((function(n){t.textWidth=n[0].width,e()}))})),i=new Promise((function(e,o){n.createSelectorQuery().in(t).select("#".concat(t.elIdBox)).boundingClientRect().exec((function(n){t.boxWidth=n[0].width,e()}))}));e.push(o),e.push(i),Promise.all(e).then((function(){t.animationDuration="".concat(t.textWidth/t.speed,"s"),t.animationDelay="-".concat(t.boxWidth/t.speed,"s"),setTimeout((function(){t.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};t.default=i}).call(this,e("543d")["default"])},fa20:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-notice-bar/uni-notice-bar-create-component',
    {
        'components/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1163"))
        })
    },
    [['components/uni-notice-bar/uni-notice-bar-create-component']]
]);