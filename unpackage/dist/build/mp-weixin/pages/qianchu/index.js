(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qianchu/index"],{"0855":function(e,n,r){"use strict";r.r(n);var t=r("db98"),a=r.n(t);for(var i in t)"default"!==i&&function(e){r.d(n,e,(function(){return t[e]}))}(i);n["default"]=a.a},"7a2f":function(e,n,r){"use strict";r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return i})),r.d(n,"a",(function(){return t}));var t={uniNoticeBar:function(){return r.e("components/uni-notice-bar/uni-notice-bar").then(r.bind(null,"1163"))},uniPopup:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-popup/uni-popup")]).then(r.bind(null,"9edd"))},uniForms:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-forms/uni-forms")]).then(r.bind(null,"12d1"))},uniFormsItem:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-forms-item/uni-forms-item")]).then(r.bind(null,"bd5c"))},uniDataCheckbox:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-data-checkbox/uni-data-checkbox")]).then(r.bind(null,"d3b0"))},uniIcons:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-icons/uni-icons")]).then(r.bind(null,"c5de"))},uniGroup:function(){return r.e("components/uni-group/uni-group").then(r.bind(null,"0c0b"))},uniEasyinput:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-easyinput/uni-easyinput")]).then(r.bind(null,"455b"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"7c26":function(e,n,r){},ae90:function(e,n,r){"use strict";var t=r("7c26"),a=r.n(t);a.a},d293:function(e,n,r){"use strict";(function(e){r("9634");t(r("66fd"));var n=t(r("e0ad"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},db98:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r("2f62"),a=r("81db");function i(e){return u(e)||c(e)||s(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,n){if(e){if("string"===typeof e)return m(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,n):void 0}}function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return m(e)}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){f(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function f(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var h={data:function(){return{multiArray:[],multiIndex:[18,0],oneId:0,twoId:0,newOwnerImageList:[],oldOwnerImageList:[],vehicleLicenseImageList:[],date:"",oldCarBusinessType:"",newCarBusinessType:"",invoiceId:"",formData:{contactName:"",contactPhone:"",carname:"",carId:"",carType:"",carNumber:"",engineNumber:"",oldCarOwner:"",newCarOwner:"",remark:"",immigrationAddress:"广东省,广州市",oldCarDocumentNumber:"",newCarDocumentNumber:""},businessType:[{text:"个人",value:"personal"},{text:"公司",value:"company"}],rules:{contactName:{rules:[{required:!0,errorMessage:"请输入联系人姓名"},{minLength:1,maxLength:15,errorMessage:"姓名长度在 {minLength} 到 {maxLength} 个字符"}]},contactPhone:{rules:[{required:!0,errorMessage:"请输入联系人号码"},{pattern:/^[1][3,4,5,7,8][0-9]{9}$/,errorMessage:"必须是11位手机号码"}]},carname:{rules:[{required:!0,errorMessage:"请输入品牌型号"}]},carId:{rules:[{format:"string"},{validateFunction:function(e,n,r,t){return console.log(n),(n.length<6||-1===n.indexOf("粤A"))&&t("车牌号为：粤AXXXXX"),!0}}]},carType:{rules:[{required:!0,errorMessage:"请输入汽车类型"}]},carNumber:{rules:[{required:!0,errorMessage:"请输入车架号"}]},oldCarOwner:{rules:[{required:!0,errorMessage:"请输入原车主姓名"}]},newCarOwner:{rules:[{required:!0,errorMessage:"请输入新车主姓名"}]},immigrationAddress:{rules:[{required:!0,errorMessage:"请选择迁入地"}]},newCarDocumentNumber:{rules:[{required:!0,errorMessage:"请输入证件号码"}]},remark:{rules:[]}}}},computed:l(l({},(0,t.mapState)(["openid"])),{},{showForm:function(){return this.oldCarBusinessType&&this.newCarBusinessType}}),onLoad:function(n){var r=this;this.date=n.date;var t=n.data;if(this.invoiceId=n.invoiceId,t){var a=JSON.parse(t);this.id=a.id,this.formData.carname=a.carname,this.formData.carId=a.carId,this.formData.carType=a.carType,this.formData.carNumber=a.carNumber,this.formData.engineNumber=a.engineNumber,this.formData.remark=a.remark,this.formData.oldCarDocumentNumber=a.oldCarDocumentNumber,this.formData.newCarDocumentNumber=a.newCarDocumentNumber,this.formData.oldCarOwner=a.oldCarOwner,this.formData.newCarOwner=a.newCarOwner,this.formData.immigrationAddress=a.immigrationAddress,this.oldCarBusinessType=a.oldCarDocumentType,this.newCarBusinessType=a.newCarDocumentType,a.oldIdCardUrl&&(this.oldOwnerImageList=[a.oldIdCardUrl]),a.newIdCardUrl&&(this.newOwnerImageList=[a.newIdCardUrl]),a.vehicleLicenseUrl&&(this.vehicleLicenseImageList=[a.vehicleLicenseUrl])}else this.invoiceId&&(e.showLoading({mask:!0}),this.$request({url:"/api/v1/admin/invoice/find/"+this.invoiceId,method:"GET"}).then((function(n){if(e.hideLoading(),200===n.code){var t=n.data;r.formData.carname=t.carname,r.formData.carId=t.carId,r.formData.carType=t.carType,r.formData.carNumber=t.carNumber,r.formData.engineNumber=t.engineNumber,r.formData.oldCarOwner=t.oldOwner,r.formData.newCarOwner=t.newOwner,r.formData.immigrationAddress=t.immigrationAddress,r.formData.oldCarDocumentNumber=t.oldOwnerCardDocument,r.formData.newCarDocumentNumber=t.newOwnerCardDocument,r.oldCarBusinessType=t.oldOwnerBusinessType,r.newCarBusinessType=t.newOwnerBusinessType,r.vehicleLicenseImageList=[t.vehicleLicenseUrl],r.newOwnerImageList=[t.newIdCardUrl],r.oldOwnerImageList=[t.oldIdCardUrl]}else e.showToast({title:n.msg})}))),this.goNotice()},onReady:function(){this.$refs.form.setRules(this.rules),this.initData()},mounted:function(){this.oldCarBusinessType&&this.newCarBusinessType||this.$refs.dialogInput.open()},methods:{previewImageVehicleLicense:function(n){e.previewImage({urls:this.vehicleLicenseImageList})},previewImageveNewOwner:function(n){e.previewImage({urls:this.newOwnerImageList})},initData:function(){var e=this;this.$request({url:"/api/vi/address",method:"GET"}).then((function(n){if(console.log("dd",n),200===n.code){e.address=n.data;var r=n.data.map((function(e){return e.name})),t=n.data[18].children.map((function(e){return e.name}));if(e.multiArray[0]=r,e.multiArray[1]=t,e.id){var a=e.formData.immigrationAddress.split(","),i=n.data.findIndex((function(e){return e.name===a[0]})),o=n.data[i].children,s=o.findIndex((function(e){return e.name===a[1]})),c=n.data[i].children.map((function(e){return e.name}));e.multiArray[0]=r,e.multiArray[1]=c,e.multiIndex=[i,s],e.oneId=a[0],e.twoId=a[1]}else{var u=n.data[18].children.map((function(e){return e.name}));e.multiArray[0]=r,e.multiArray[1]=u,e.oneId=n.data[18].name,e.twoId=n.data[18].children[0].name}}}))},bindMultiPickerColumnChange:function(e){console.log(e.detail.column,"e.detail.column表示是第几列表示是第几列"),0===e.detail.column?(this.initSelect(e.detail.value),this.multiIndex[0]=e.detail.value):1===e.detail.column&&(this.multiIndex[1]=e.detail.value,this.twoId=this.address[this.multiIndex[0]].children[this.multiIndex[1]].name),console.log(this.oneId,"打印第一列id"),console.log(this.twoId,"打印第二列id"),this.formData.immigrationAddress=this.oneId+","+this.twoId},initSelect:function(e){if(this.oneId=this.address[e].name,this.multiIndex[1]=0,this.$set(this.multiArray,1,[]),0==this.address[e].children.length)console.log("如果右边长度等于0,那么清掉右边ID"),this.twoId="";else{var n=this.address[e].children.map((function(e){return e.name}));this.$set(this.multiArray,1,n),this.twoId=this.address[e].children[0].name}},bindMultiPickerChange:function(e){},goNotice:function(){e.navigateTo({url:"../notice/index"})},businessConfirm:function(){this.newCarBusinessType?this.$refs.dialogInput.close():e.showToast({title:"请选择所有权",icon:"none"})},chooseImageNewOwner:function(){var n=this,r="personal"===this.newCarBusinessType?"/api/v1/upload/idcard":"/api/v1/upload/bizlicense";e.chooseImage({count:1,sizeType:[],success:function(t){var i=t.tempFilePaths[0];e.showLoading({mask:!0}),e.uploadFile({url:a.baseUrl+r,filePath:i,name:"image",success:function(r){e.hideLoading(),console.log(r);var t=JSON.parse(r.data);200===t.code?(e.showToast({title:"上传成功",icon:"success",duration:1e3}),n.newOwnerImageList.push(t.data.imageUrl),n.formData.newCarOwner=t.data.Name,console.log("resData",t),"personal"===n.newCarBusinessType?n.formData.newCarDocumentNumber=t.data.IdNum:n.formData.newCarDocumentNumber=t.data.RegNum):e.showToast({title:"图片有误，识别失败",icon:"none"})},fail:function(n){console.log("uploadImage fail",n),e.showModal({content:n.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImageVehicleLicense:function(){var n=this;e.chooseImage({count:1,sizeType:[],success:function(r){var t=r.tempFilePaths[0];e.showLoading({mask:!0}),e.uploadFile({url:a.baseUrl+"/api/v1/upload/vehiclelicense",filePath:t,name:"image",success:function(r){e.hideLoading(),console.log(r);var t=JSON.parse(r.data);if(200===t.code){n.vehicleLicenseImageList.push(t.data.imageUrl);var a=t.data.FrontInfo;a&&(n.formData.carId=a.PlateNo,n.formData.carNumber=a.Vin,n.formData.carname=a.Model,n.formData.carType=a.VehicleType,n.formData.engineNumber=a.EngineNo,n.formData.oldCarOwner=a.Owner,-1===a.PlateNo.indexOf("粤A")?e.showToast({title:"只支持粤A车辆办理业务",icon:"none",duration:2e3}):e.showToast({title:"上传成功",icon:"success"}))}else e.showToast({title:"图片有误，识别失败",icon:"none"})},fail:function(n){console.log("uploadImage fail",n),e.showModal({content:n.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},deleteImage:function(e,n){n.splice(e,1),n=i(n)},submitForm:function(e){if(this.id)this.update(e);else{var n=this;wx.requestSubscribeMessage({tmplIds:["ZpSyU9MfuwmZryCO6UdkEOwd-YdHnRMdxY4SxEy-j5w"],complete:function(){n.create(e)}})}},change:function(e,n){this.formData.checked=n,this.$refs.form.setValue(e,n)},create:function(n){var r=this;e.showLoading({mask:!0}),this.$refs[n].submit().then((function(n){var t=r.date.split(" ");r.$request({url:"/api/v1/booking/create/wx",method:"POST",data:{serviceType:"迁出提档",bookingDate:t[0],bookingTime:t[1],contactName:r.formData.contactName,contactPhone:r.formData.contactPhone,carNumber:r.formData.carNumber,carname:r.formData.carname,carId:r.formData.carId,carType:r.formData.carType,engineNumber:r.formData.engineNumber,oldCarOwner:r.formData.oldCarOwner,newCarOwner:r.formData.newCarOwner,immigrationAddress:r.formData.immigrationAddress,newCarDocumentNumber:r.formData.newCarDocumentNumber,oldCarDocumentType:r.oldCarBusinessType,newCarDocumentType:r.newCarBusinessType,remark:r.formData.remark,createTime:(new Date).getTime(),createBy:r.openid,newIdCardUrl:r.newOwnerImageList.length&&r.newOwnerImageList[0],oldIdCardUrl:r.oldOwnerImageList.length&&r.oldOwnerImageList[0],vehicleLicenseUrl:r.vehicleLicenseImageList&&r.vehicleLicenseImageList[0],invoiceId:r.invoiceId}}).then((function(n){e.hideLoading(),200===n.code?(e.showToast({title:"提交成功"}),e.$emit("bookingCreate"),setTimeout((function(){e.switchTab({url:"../bookingList/index"})}),1e3)):e.showToast({icon:"none",title:n.msg})}))})).catch((function(e){console.error("验证失败：",e)}))},update:function(n){var r=this;e.showLoading({mask:!0}),this.$refs[n].submit().then((function(n){r.$request({url:"/api/v1/booking/update/wx/"+r.id,method:"POST",data:{carNumber:r.formData.carNumber,carname:r.formData.carname,carId:r.formData.carId,carType:r.formData.carType,engineNumber:r.formData.engineNumber,oldCarOwner:r.formData.oldCarOwner,newCarOwner:r.formData.newCarOwner,immigrationAddress:r.formData.immigrationAddress,oldCarDocumentNumber:r.formData.newCarDocumentNumber,newCarDocumentNumber:r.formData.newCarDocumentNumber,remark:r.formData.remark,newIdCardUrl:r.newOwnerImageList.length&&r.newOwnerImageList[0],oldIdCardUrl:r.oldOwnerImageList.length&&r.oldOwnerImageList[0],vehicleLicenseUrl:r.vehicleLicenseImageList&&r.vehicleLicenseImageList[0]}}).then((function(n){e.hideLoading(),200===n.code?(e.showToast({title:"修改成功"}),e.$emit("bookingUpdate"),setTimeout((function(){e.navigateBack()}),1e3)):e.showToast({title:n.msg})}))})).catch((function(e){console.error("验证失败：",e)}))}}};n.default=h}).call(this,r("543d")["default"])},e0ad:function(e,n,r){"use strict";r.r(n);var t=r("7a2f"),a=r("0855");for(var i in a)"default"!==i&&function(e){r.d(n,e,(function(){return a[e]}))}(i);r("ae90");var o,s=r("f0c5"),c=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],o);n["default"]=c.exports}},[["d293","common/runtime","common/vendor"]]]);