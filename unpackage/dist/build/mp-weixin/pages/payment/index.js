(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/payment/index"],{"134d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n("a34a")),o=n("26cb"),i=n("2c2d");function c(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(f){return void n(f)}a.done?t(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,u,"next",e)}function u(e){a(i,r,o,c,u,"throw",e)}c(void 0)}))}}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l={data:function(){return{title:"request-payment",loading:!1,price:50,providerList:[],id:""}},computed:s({},(0,o.mapState)(["openid"])),onLoad:function(e){this.id=e.pid},methods:{weixinPay:function(){var t=this;return u(r.default.mark((function n(){var o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.getStorageSync("openid"),n.next=3,t.getOrderInfo("wxpay");case 3:if(o=n.sent,o){n.next=7;break}return e.showModal({content:"获取支付信息失败",showCancel:!1}),n.abrupt("return");case 7:e.requestPayment(s(s({},o),{},{success:function(t){e.showToast({title:"支付完成"}),e.$emit("inovicePay"),setTimeout((function(){e.switchTab({url:"../invoiceList/index"})}),1e3)},fail:function(t){e.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}}));case 8:case"end":return n.stop()}}),n)})))()},getOrderInfo:function(t){var n=this;return new Promise((function(t,r){n.price||r(new Error("请输入金额")),e.request({method:"POST",url:i.baseUrl+"/api/v1/wechatpay/createorder",data:{out_trade_no:n.id,body:"发票支付",openid:n.openid,total_fee:(100*Number(n.price)).toString()},success:function(e){200===e.data.code?(console.log("--",e),t(e.data.data)):r(new Error("获取支付信息失败"+e.data.msg))},fail:function(e){r(new Error("请求支付接口失败"+e))}})}))},priceChange:function(e){console.log(e.detail.value),this.price=e.detail.value}}};t.default=l}).call(this,n("543d")["default"])},"2d0a":function(e,t,n){"use strict";var r=n("7822"),o=n.n(r);o.a},3307:function(e,t,n){"use strict";n.r(t);var r=n("134d"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},"33bb":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement;e._self._c},i=[]},7822:function(e,t,n){},"9efc":function(e,t,n){"use strict";(function(e){n("79c9");r(n("66fd"));var t=r(n("b531"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},b531:function(e,t,n){"use strict";n.r(t);var r=n("33bb"),o=n("3307");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("2d0a");var c,a=n("f0c5"),u=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);t["default"]=u.exports}},[["9efc","common/runtime","common/vendor"]]]);