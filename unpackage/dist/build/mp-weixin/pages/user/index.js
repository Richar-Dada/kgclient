(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{3654:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("26cb");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={data:function(){return{providerList:[],isNew:!1,sessionKey:""}},computed:r({},(0,o.mapState)(["hasLogin","userInfo","weixinUserInfo"])),onLoad:function(){var t=this,n=this;console.log("get"),e.getUserProfile({desc:"获取微信头像",success:function(e){n.setWeixinUserInfo(e.userInfo),console.log("333",e.userInfo)}}),e.$on("BandSuccess",(function(){t.isNew=!1}))},methods:r(r(r({},(0,o.mapMutations)(["login","logout","setUniverifyLogin","setOpenid","setUserInfo","setWeixinUserInfo"])),(0,o.mapActions)(["getPhoneNumber"])),{},{Toast:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e.showToast(Object.assign({},t,{duration:n}))},tologout:function(){this.logout(),e.clearStorage(),e.$emit("logout")},tologin:function(t){var n=this,o=this;e.login({provider:"weixin",success:function(t){console.log("login success:",t),n.login("weixin"),o.$request({url:"/wechat/getUserInfoByCode",method:"POST",data:{code:t.code}}).then((function(t){200===t.resultCode?(n.setUserInfo(t.data),e.setStorageSync("userInfo",JSON.stringify(t.data)),n.setOpenid(t.data.openId),e.$emit("login"),e.navigateBack()):431===t.errorCode&&(n.isNew=!0,n.sessionKey=t.sessionKey,n.setOpenid(t.openId))}))},fail:function(t){if(console.log("login fail:",t),"30002"==t.code)return e.closeAuthView(),void n.Toast({title:"其他登录方式"});1e3!=t.code?"30005"!=t.code?"30003"!=t.code&&e.showModal({showCancel:!1,title:"登录失败",content:JSON.stringify(t)}):e.showModal({showCancel:!1,title:"预登录失败",content:n.univerifyErrorMsg||t.errMsg}):e.showModal({title:"登录失败",content:"".concat(t.errMsg,"\n，错误码：").concat(t.code),confirmText:"开通指南",cancelText:"确定",success:function(e){e.confirm&&setTimeout((function(){plus.runtime.openWeb("https://ask.dcloud.net.cn/article/37965")}),500)}})},complete:function(){n.univerifyBtnLoading=!1}})},getPhoneNumber:function(t){"getPhoneNumber:ok"===t.detail.errMsg&&(console.log(t.detail),e.navigateTo({url:"../register/index?iv=".concat(t.detail.iv,"&encryptedData=").concat(t.detail.encryptedData,"&sessionKey=").concat(this.sessionKey)}))}})};t.default=s}).call(this,n("543d")["default"])},"6d6a":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}));var o={uniList:function(){return n.e("components/uni-list/uni-list").then(n.bind(null,"944b"))},uniListItem:function(){return n.e("components/uni-list-item/uni-list-item").then(n.bind(null,"44de"))}},i=function(){var e=this,t=e.$createElement;e._self._c},r=[]},"6d8e":function(e,t,n){"use strict";(function(e){n("79c9");o(n("66fd"));var t=o(n("83c4"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"83c4":function(e,t,n){"use strict";n.r(t);var o=n("6d6a"),i=n("f91c");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("b670");var c,s=n("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=u.exports},b670:function(e,t,n){"use strict";var o=n("f148"),i=n.n(o);i.a},f148:function(e,t,n){},f91c:function(e,t,n){"use strict";n.r(t);var o=n("3654"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a}},[["6d8e","common/runtime","common/vendor"]]]);