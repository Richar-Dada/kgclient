(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invoiceRecord/index"],{"175a":function(e,t,n){},"54ac":function(e,t,n){"use strict";(function(e){n("79c9");a(n("66fd"));var t=a(n("9b86"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},8562:function(e,t,n){"use strict";var a=n("175a"),r=n.n(a);r.a},8583:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2c2d"),r=n("2f62");function s(e){return u(e)||c(e)||i(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("2ac6"),n("0573");var f={data:function(){return{address:[],multiArray:[],multiIndex:[18,0],oneId:0,twoId:0,oldOwnerImageList:[],newOwnerImageList:[],vehicleLicenseImageList:[],registerImageList:[],statementImageList:[],taxImageList:[],oldCarBusinessType:"",newCarBusinessType:"",id:"",formData:{oldOwnerPhone:"",newOwnerPhone:"",carname:"",carId:"",carType:"",carNumber:"",engineNumber:"",oldCarOwner:"",newCarOwner:"",price:"",remark:"",immigrationAddress:"广东省,广州市",oldCarDocumentNumber:"",newCarDocumentNumber:"",oldCarOwnerAddress:"广东省,广州市",newCarOwnerAddress:""},businessType:[{text:"个人",value:"personal"},{text:"公司",value:"company"}],rules:{carname:{rules:[{required:!0,errorMessage:"请输入品牌型号"}]},carId:{rules:[{required:!0,errorMessage:"请输入车牌号"}]},carType:{rules:[{required:!0,errorMessage:"请输入汽车类型"}]},carNumber:{rules:[{required:!0,errorMessage:"请输入车架号"}]},oldCarOwner:{rules:[{required:!0,errorMessage:"请输入原车主姓名"}]},oldCarDocumentNumber:{rules:[{required:!0,errorMessage:"请输入证件号码"}]},oldOwnerPhone:{rules:[{required:!1,errorMessage:"请输入原车主手机号码"},{pattern:/^[1][3,4,5,7,8][0-9]{9}$/,errorMessage:"必须是11位手机号码"}]},oldCarOwnerAddress:{rules:[{required:!0,errorMessage:"请输入原车主地址"}]},newCarOwner:{rules:[{required:!0,errorMessage:"请输入新车主姓名"}]},newCarDocumentNumber:{rules:[{required:!0,errorMessage:"请输入证件号码"}]},newOwnerPhone:{rules:[{required:!1,errorMessage:"请输入新车主手机号码"},{pattern:/^[1][3,4,5,7,8][0-9]{9}$/,errorMessage:"必须是11位手机号码"}]},newCarOwnerAddress:{rules:[{required:!0,errorMessage:"请输入新车主地址"}]},immigrationAddress:{rules:[{required:!0,errorMessage:"请选择迁入地"}]},price:{rules:[{required:!0,errorMessage:"请输入发票金额"}]},remark:{rules:[]}}}},computed:m({},(0,r.mapState)(["openid"])),onReady:function(e){},onLoad:function(e){var t=e.data;if(t){var n=JSON.parse(t);console.log(n),this.id=n.id,this.formData.oldOwnerPhone=n.oldOwnerPhone,this.formData.newOwnerPhone=n.newOwnerPhone,this.formData.carname=n.carname,this.formData.carId=n.carId,this.formData.carType=n.carType,this.formData.carNumber=n.carNumber,this.formData.engineNumber=n.engineNumber,this.formData.oldCarOwner=n.oldOwner,this.formData.newCarOwner=n.newOwner,this.formData.price=n.price,this.formData.remark=n.remark,this.formData.immigrationAddress=n.immigrationAddress,this.formData.oldCarDocumentNumber=n.oldOwnerCardDocument,this.formData.newCarDocumentNumber=n.newOwnerCardDocument,this.formData.oldCarOwnerAddress=n.oldOwnerAddress,this.formData.newCarOwnerAddress=n.newOwnerAddress,this.oldCarBusinessType=n.oldOwnerBusinessType,this.newCarBusinessType=n.newOwnerBusinessType,n.oldIdCardUrl&&(this.oldOwnerImageList=[n.oldIdCardUrl]),n.newIdCardUrl&&(this.newOwnerImageList=[n.newIdCardUrl]),n.vehicleLicenseUrl&&(this.vehicleLicenseImageList=[n.vehicleLicenseUrl]),n.statementUrl&&(this.statementImageList=[n.statementUrl]),n.taxUrl&&(this.taxImageList=[n.taxUrl]),n.registerUrl&&(this.registerImageList=n.registerUrl.split(","))}this.$refs.form.setRules(this.rules),this.initData()},mounted:function(){this.oldCarBusinessType&&this.newCarBusinessType||this.$refs.dialogInput.open()},methods:{savePoster:function(){var t=this;e.getSetting({success:function(n){n.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum():e.authorize({scope:"scope.writePhotosAlbum",success:function(){t.saveImageToPhotosAlbum()},fail:function(){e.showToast({title:"请打开保存相册权限，再点击保存相册分享",icon:"none",duration:3e3}),setTimeout((function(){e.openSetting({success:function(e){}})}),3e3)}})}})},saveImageToPhotosAlbum:function(){var t="personal"===this.newCarBusinessType?"/static/statement_pensonal.png":"/static/statement_company.png";e.saveImageToPhotosAlbum({filePath:t,success:function(t){e.hideLoading(),e.showToast({title:"保存成功，请从相册查看",icon:"none",duration:5e3})},fail:function(t){e.hideLoading()}})},showStatementExample:function(){var t="personal"===this.oldCarBusinessType?"https://carbase.oss-cn-shenzhen.aliyuncs.com/statement1.jpg":"https://carbase.oss-cn-shenzhen.aliyuncs.com/statement2.jpg";e.previewImage({urls:[t]})},previewImageVehicleLicense:function(t){e.previewImage({urls:this.vehicleLicenseImageList})},previewImageveOldOwner:function(t){e.previewImage({urls:this.oldOwnerImageList})},previewImageveNewOwner:function(t){e.previewImage({urls:this.newOwnerImageList})},previewImageveRegister:function(t){e.previewImage({urls:this.registerImageList})},previewImageveStatement:function(t){e.previewImage({urls:this.statementImageList})},previewImageveTax:function(t){e.previewImage({urls:this.taxImageList})},initData:function(){var e=this;this.$request({url:"/api/vi/address",method:"GET"}).then((function(t){if(console.log("dd",t),200===t.code){e.address=t.data;var n=t.data.map((function(e){return e.name})),a=t.data[18].children.map((function(e){return e.name}));if(e.multiArray[0]=n,e.multiArray[1]=a,e.id){var r=e.formData.immigrationAddress.split(","),s=t.data.findIndex((function(e){return e.name===r[0]})),o=t.data[s].children,i=o.findIndex((function(e){return e.name===r[1]})),c=t.data[s].children.map((function(e){return e.name}));e.multiArray[0]=n,e.multiArray[1]=c,e.multiIndex=[s,i],e.oneId=r[0],e.twoId=r[1]}else{var u=t.data[18].children.map((function(e){return e.name}));e.multiArray[0]=n,e.multiArray[1]=u,e.oneId=t.data[18].name,e.twoId=t.data[18].children[0].name}}}))},bindMultiPickerColumnChange:function(e){console.log(e.detail.column,"e.detail.column表示是第几列表示是第几列"),0===e.detail.column?(this.initSelect(e.detail.value),this.multiIndex[0]=e.detail.value):1===e.detail.column&&(this.multiIndex[1]=e.detail.value,this.twoId=this.address[this.multiIndex[0]].children[this.multiIndex[1]].name),console.log("this.oneId",this.oneId),console.log("this.twoId",this.twoId),this.$refs.form.setValue("immigrationAddress",this.oneId+","+this.twoId),this.formData.immigrationAddress=this.oneId+","+this.twoId},initSelect:function(e){if(this.oneId=this.address[e].name,this.multiIndex[1]=0,this.$set(this.multiArray,1,[]),0==this.address[e].children.length)console.log("如果右边长度等于0,那么清掉右边ID"),this.twoId="";else{var t=this.address[e].children.map((function(e){return e.name}));this.$set(this.multiArray,1,t),this.twoId=this.address[e].children[0].name}},bindMultiPickerChange:function(e){},deleteImage:function(e,t){t.splice(e,1),t=s(t)},chooseImageOldOwner:function(){var t=this,n="personal"===this.oldCarBusinessType?"/api/v1/upload/idcard":"/api/v1/upload/bizlicense";e.chooseImage({count:1,sizeType:[],success:function(r){var s=r.tempFilePaths[0];e.showLoading({mask:!0}),e.uploadFile({url:a.baseUrl+n,filePath:s,name:"image",success:function(n){console.log(n),e.hideLoading();var a=JSON.parse(n.data);200===a.code?(e.showToast({title:"上传成功",icon:"success",duration:1e3}),t.oldOwnerImageList.push(a.data.imageUrl),t.formData.oldCarOwner=a.data.Name,"personal"===t.oldCarBusinessType?t.formData.oldCarDocumentNumber=a.data.IdNum:t.formData.oldCarDocumentNumber=a.data.RegNum,t.formData.oldCarOwnerAddress=a.data.Address):e.showToast({title:"图片有误，识别失败",icon:"none"})},fail:function(t){console.log("uploadImage fail",t),e.showModal({content:t.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImageNewOwner:function(){var t=this,n="personal"===this.newCarBusinessType?"/api/v1/upload/idcard":"/api/v1/upload/bizlicense";e.chooseImage({count:1,sizeType:[],success:function(r){var s=r.tempFilePaths[0];e.showLoading({mask:!0}),e.uploadFile({url:a.baseUrl+n,filePath:s,name:"image",success:function(n){console.log(n),e.hideLoading();var a=JSON.parse(n.data);200===a.code?(e.showToast({title:"上传成功",icon:"success",duration:1e3}),t.newOwnerImageList.push(a.data.imageUrl),t.formData.newCarOwner=a.data.Name,"personal"===t.newCarBusinessType?t.formData.newCarDocumentNumber=a.data.IdNum:t.formData.newCarDocumentNumber=a.data.RegNum,t.formData.newCarOwnerAddress=a.data.Address):e.showToast({title:"图片有误，识别失败",icon:"none"})},fail:function(t){console.log("uploadImage fail",t),e.showModal({content:t.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImageVehicleLicense:function(){var t=this;e.chooseImage({count:1,sizeType:[],success:function(n){var r=n.tempFilePaths[0];e.showLoading({mask:!0}),e.uploadFile({url:a.baseUrl+"/api/v1/upload/vehiclelicense",filePath:r,name:"image",success:function(n){console.log(n),e.hideLoading();var a=JSON.parse(n.data);if(200===a.code){e.showToast({title:"上传成功",icon:"success",duration:1e3}),t.vehicleLicenseImageList.push(a.data.imageUrl),console.log(a);var r=a.data.FrontInfo;r&&(t.formData.carId=r.PlateNo,t.formData.carNumber=r.Vin,t.formData.carname=r.Model,t.formData.carType=r.VehicleType)}else e.showToast({title:"图片有误，识别失败",icon:"none"})},fail:function(t){console.log("uploadImage fail",t),e.showModal({content:t.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImageRegister:function(){var t=this;e.chooseImage({count:9,sizeType:[],success:function(n){for(var r=n.tempFilePaths,s=0,o=r.length;s<o;s++)e.showLoading({mask:!0}),e.uploadFile({url:a.baseUrl+"/api/v1/upload",filePath:r[s],name:"image",success:function(n){e.hideLoading();var a=JSON.parse(n.data);200===a.code?(e.showToast({title:"上传成功",icon:"success",duration:1e3}),t.registerImageList.push(a.data[0])):e.showToast({title:"图片上传失败",icon:"none"})},fail:function(t){e.showModal({content:t.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImageStatement:function(){var t=this;e.chooseImage({count:1,sizeType:[],success:function(n){var r=n.tempFilePaths[0];e.showLoading({mask:!0}),e.uploadFile({url:a.baseUrl+"/api/v1/upload",filePath:r,name:"image",success:function(n){e.hideLoading(),console.log(n);var a=JSON.parse(n.data);200===a.code?(e.showToast({title:"上传成功",icon:"success",duration:1e3}),console.log(a),t.statementImageList.push(a.data[0])):e.showToast({title:"图片上传失败",icon:"none"})},fail:function(t){e.showModal({content:t.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImageTax:function(){var t=this;e.chooseImage({count:1,sizeType:[],success:function(n){var r=n.tempFilePaths[0];e.showLoading({mask:!0}),e.uploadFile({url:a.baseUrl+"/api/v1/upload",filePath:r,name:"image",success:function(n){console.log(n),e.hideLoading();var a=JSON.parse(n.data);200===a.code?(e.showToast({title:"上传成功",icon:"success",duration:1e3}),console.log(a),t.taxImageList.push(a.data[0])):e.showToast({title:"图片上传失败",icon:"none"})},fail:function(t){e.showModal({content:t.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},businessConfirm:function(){this.oldCarBusinessType&&this.newCarBusinessType?this.$refs.dialogInput.close():e.showToast({title:"请选择所有权",icon:"none"})},submitForm:function(t){var n=this;this.$refs[t].submit().then((function(t){if(n.registerImageList.length)if(n.statementImageList.length)if(n.id)n.update();else{var a=n;wx.requestSubscribeMessage({tmplIds:["1WwxHfQUBtnLjxOxLRWqkoo6hF51XR-DBYOxD97koDw"],complete:function(){a.create()}})}else e.showToast({title:"请上传声明照",icon:"none"});else e.showToast({title:"请上传登记证图片",icon:"none"})}))},create:function(){e.showLoading({mask:!0}),this.$request({url:"/api/v1/admin/invoice/create/wx",method:"POST",data:{immigrationAddress:this.formData.immigrationAddress,newOwner:this.formData.newCarOwner,newOwnerCardDocument:this.formData.newCarDocumentNumber,newOwnerPhone:+this.formData.newOwnerPhone,oldOwner:this.formData.oldCarOwner,oldOwnerCardDocument:this.formData.oldCarDocumentNumber,oldOwnerPhone:+this.formData.oldOwnerPhone,carType:this.formData.carType,carId:this.formData.carId,carNumber:this.formData.carNumber,carname:this.formData.carname,price:this.formData.price,remark:this.formData.remark,oldIdCardUrl:this.oldOwnerImageList[0],newIdCardUrl:this.newOwnerImageList[0],vehicleLicenseUrl:this.vehicleLicenseImageList[0],registerUrl:this.registerImageList.join(","),statementUrl:this.statementImageList[0],taxUrl:this.taxImageList[0],createBy:this.openid,oldOwnerBusinessType:this.oldCarBusinessType,newOwnerBusinessType:this.newCarBusinessType,oldOwnerAddress:this.formData.oldCarOwnerAddress,newOwnerAddress:this.formData.newCarOwnerAddress}}).then((function(t){e.hideLoading(),200===t.code?(e.showToast({title:"登记成功",icon:"success"}),e.$emit("inoviceCreate"),setTimeout((function(){e.redirectTo({url:"../payment/index?pid="+t.data.pid})}),1e3)):e.showToast({title:t.msg,icon:"none"})}))},update:function(){e.showLoading({mask:!0}),this.$request({url:"/api/v1/admin/invoice/update/wx/"+this.id,method:"POST",data:{immigrationAddress:this.formData.immigrationAddress,newOwner:this.formData.newCarOwner,newOwnerCardDocument:this.formData.newCarDocumentNumber,newOwnerPhone:+this.formData.newOwnerPhone,oldOwner:this.formData.oldCarOwner,oldOwnerCardDocument:this.formData.oldCarDocumentNumber,oldOwnerPhone:+this.formData.oldOwnerPhone,carType:this.formData.carType,carId:this.formData.carId,carNumber:this.formData.carNumber,carname:this.formData.carname,price:this.formData.price,remark:this.formData.remark,oldIdCardUrl:this.oldOwnerImageList[0],newIdCardUrl:this.newOwnerImageList[0],vehicleLicenseUrl:this.vehicleLicenseImageList[0],registerUrl:this.registerImageList.join(","),statementUrl:this.statementImageList[0],taxUrl:this.taxImageList[0],createBy:this.openid,oldOwnerBusinessType:this.oldCarBusinessType,newOwnerBusinessType:this.newCarBusinessType,oldOwnerAddress:this.formData.oldCarOwnerAddress,newOwnerAddress:this.formData.newCarOwnerAddress}}).then((function(t){e.hideLoading(),200===t.code?(e.showToast({title:"修改成功",icon:"success"}),e.$emit("inoviceUpdate"),setTimeout((function(){e.navigateBack()}),1e3)):e.showToast({title:t.msg,icon:"none"})}))}}};t.default=f}).call(this,n("543d")["default"])},"8e47":function(e,t,n){"use strict";n.r(t);var a=n("8583"),r=n.n(a);for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=r.a},"9b86":function(e,t,n){"use strict";n.r(t);var a=n("d7a8"),r=n("8e47");for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);n("8562");var o,i=n("f0c5"),c=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=c.exports},d7a8:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var a={uniNoticeBar:function(){return n.e("components/uni-notice-bar/uni-notice-bar").then(n.bind(null,"9e95"))},uniPopup:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-popup/uni-popup")]).then(n.bind(null,"16c3"))},uniForms:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-forms/uni-forms")]).then(n.bind(null,"2a5b"))},uniFormsItem:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-forms-item/uni-forms-item")]).then(n.bind(null,"7e44"))},uniDataCheckbox:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-data-checkbox/uni-data-checkbox")]).then(n.bind(null,"a8da"))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-icons/uni-icons")]).then(n.bind(null,"30a0"))},uniGroup:function(){return n.e("components/uni-group/uni-group").then(n.bind(null,"4d74"))},uniEasyinput:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-easyinput/uni-easyinput")]).then(n.bind(null,"b2a6"))}},r=function(){var e=this,t=e.$createElement;e._self._c},s=[]}},[["54ac","common/runtime","common/vendor"]]]);