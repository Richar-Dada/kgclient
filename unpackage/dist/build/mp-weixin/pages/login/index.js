(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{"6c5f":function(e,n,t){},"6c93":function(e,n,t){"use strict";t.r(n);var o=t("f5d7"),c=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=c.a},8194:function(e,n,t){"use strict";(function(e){t("79c9");o(t("66fd"));var n=o(t("b6ff"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},b6ff:function(e,n,t){"use strict";t.r(n);var o=t("d1ce"),c=t("6c93");for(var r in c)"default"!==r&&function(e){t.d(n,e,(function(){return c[e]}))}(r);t("c335");var i,s=t("f0c5"),u=Object(s["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=u.exports},c335:function(e,n,t){"use strict";var o=t("6c5f"),c=t.n(o);c.a},d1ce:function(e,n,t){"use strict";var o;t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return o}));var c=function(){var e=this,n=e.$createElement;e._self._c},r=[]},f5d7:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("26cb");function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s={data:function(){return{isNew:!1}},onReady:function(){var n=this;e.getUserInfo({provider:"weixin",success:function(e){n.setWeixinUserInfo(e.userInfo),console.log(e.userInfo)}})},computed:r({},(0,o.mapState)(["openid","hasLogin"])),methods:r(r({},(0,o.mapMutations)(["setWeixinUserInfo","setUserInfo","setOpenid","login"])),{},{goInvoice:function(){console.log("ddd"),e.navigateTo({url:"../invoiceRecord/index"})},tologin:function(n){var t=this,o=this;e.login({provider:"weixin",success:function(n){console.log("login success:",n),t.login("weixin"),o.$request({url:"/wechat/getUserInfoByCode",method:"POST",data:{code:n.code}}).then((function(n){200===n.resultCode?(t.setUserInfo(n.data),t.setOpenid(n.data.openId),e.navigateBack()):431===n.errorCode&&(t.isNew=!0,t.sessionKey=n.sessionKey,t.setOpenid(n.openId))}))},fail:function(n){if(console.log("login fail:",n),"30002"==n.code)return e.closeAuthView(),void t.Toast({title:"其他登录方式"});1e3!=n.code?"30005"!=n.code?"30003"!=n.code&&e.showModal({showCancel:!1,title:"登录失败",content:JSON.stringify(n)}):e.showModal({showCancel:!1,title:"预登录失败",content:t.univerifyErrorMsg||n.errMsg}):e.showModal({title:"登录失败",content:"".concat(n.errMsg,"\n，错误码：").concat(n.code),confirmText:"开通指南",cancelText:"确定",success:function(e){e.confirm&&setTimeout((function(){plus.runtime.openWeb("https://ask.dcloud.net.cn/article/37965")}),500)}})},complete:function(){t.univerifyBtnLoading=!1}})},getPhoneNumber:function(n){"getPhoneNumber:ok"===n.detail.errMsg&&(console.log(n.detail),e.navigateTo({url:"../register/index?iv=".concat(n.detail.iv,"&encryptedData=").concat(n.detail.encryptedData,"&sessionKey=").concat(this.sessionKey)}))}})};n.default=s}).call(this,t("543d")["default"])}},[["8194","common/runtime","common/vendor"]]]);