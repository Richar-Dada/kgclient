(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/index"],{"05b9":function(e,t,n){"use strict";n.r(t);var a=n("19fd"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a},"19fd":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2c2d"),o=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=n("2ac6"),u={data:function(){return{title:"uploadFile",imageSrc:"",idCardNum:"",username:"",idCardUrl:"",iv:"",encryptedData:"",sessionKey:""}},computed:r({},(0,o.mapState)(["openid"])),onLoad:function(e){this.iv=e.iv,this.encryptedData=e.encryptedData,this.sessionKey=e.sessionKey},onUnload:function(){this.imageSrc=""},methods:r(r({},(0,o.mapMutations)(["setUserInfo"])),{},{formSubmit:function(t){var n=this;console.log("form发生了submit事件，携带数据为："+JSON.stringify(t.detail.value));var a=[{name:"idCard",checkType:"string",checkRule:"18",errorMsg:"请上传身份证照片"}],o=t.detail.value,i=s.check(o,a);i?(e.showLoading({mask:!0}),this.$request({url:"/api/vi/admin/user/create/wx",method:"POST",data:{username:this.username,certificate:this.idCardNum,idCardUrl:this.idCardUrl,iv:this.iv,encryptedData:this.encryptedData,sessionKey:this.sessionKey,openId:this.openid}}).then((function(t){e.hideLoading(),200===t.code?(e.showToast({title:"关联成功",icon:"success",duration:2e3}),n.setUserInfo(t.data),e.$emit("BandSuccess"),setTimeout((function(){e.navigateBack()}),2e3)):e.showToast({title:t.msg,icon:"none",duration:3e3})}))):e.showToast({title:s.error,icon:"none",duration:3e3})},formReset:function(e){console.log("清空数据")},chooseImage:function(){var t=this;e.chooseImage({count:1,sizeType:[],sourceType:["album"],success:function(n){var o=n.tempFilePaths[0];e.showLoading({mask:!0}),e.uploadFile({url:a.baseUrl+"/api/v1/upload/idcard",filePath:o,name:"image",success:function(n){e.hideLoading();var a=JSON.parse(n.data);200===a.code?(e.showToast({title:"证件识别成功",icon:"success",duration:2e3}),t.imageSrc=o,t.idCardNum=a.data.IdNum,t.username=a.data.Name,t.idCardUrl=a.data.imageUrl):e.showToast({title:"图片有误，识别失败",icon:"none",duration:3e3})},fail:function(t){console.log("uploadImage fail",t),e.showModal({content:t.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})}})};t.default=u}).call(this,n("543d")["default"])},"23cf":function(e,t,n){"use strict";(function(e){n("79c9");a(n("66fd"));var t=a(n("30d1"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"30d1":function(e,t,n){"use strict";n.r(t);var a=n("9d59"),o=n("05b9");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("f48f");var r,c=n("f0c5"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=s.exports},"4afb":function(e,t,n){},"9d59":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var o=function(){var e=this,t=e.$createElement;e._self._c},i=[]},f48f:function(e,t,n){"use strict";var a=n("4afb"),o=n.n(a);o.a}},[["23cf","common/runtime","common/vendor"]]]);