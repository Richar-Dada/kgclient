(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invoiceRecord/index"],{"0500":function(e,n,r){"use strict";r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return o})),r.d(n,"a",(function(){return t}));var t={uniNoticeBar:function(){return r.e("components/uni-notice-bar/uni-notice-bar").then(r.bind(null,"1163"))},uniPopup:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-popup/uni-popup")]).then(r.bind(null,"9edd"))},uniForms:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-forms/uni-forms")]).then(r.bind(null,"12d1"))},uniFormsItem:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-forms-item/uni-forms-item")]).then(r.bind(null,"bd5c"))},uniDataCheckbox:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-data-checkbox/uni-data-checkbox")]).then(r.bind(null,"d3b0"))},uniIcons:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-icons/uni-icons")]).then(r.bind(null,"c5de"))},uniGroup:function(){return r.e("components/uni-group/uni-group").then(r.bind(null,"0c0b"))},uniEasyinput:function(){return Promise.all([r.e("common/vendor"),r.e("components/uni-easyinput/uni-easyinput")]).then(r.bind(null,"455b"))}},a=function(){var e=this,n=e.$createElement;e._self._c},o=[]},3649:function(e,n,r){"use strict";r.r(n);var t=r("a32a"),a=r.n(t);for(var o in t)"default"!==o&&function(e){r.d(n,e,(function(){return t[e]}))}(o);n["default"]=a.a},"36a3":function(e,n,r){"use strict";var t=r("9879"),a=r.n(t);a.a},"45bb":function(e,n,r){"use strict";r.r(n);var t=r("0500"),a=r("3649");for(var o in a)"default"!==o&&function(e){r.d(n,e,(function(){return a[e]}))}(o);r("36a3");var i,s=r("f0c5"),c=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],i);n["default"]=c.exports},9879:function(e,n,r){},a32a:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r("2f62");function a(e){return c(e)||s(e)||i(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,n){if(e){if("string"===typeof e)return l(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,n):void 0}}function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return l(e)}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){m(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function m(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}r("d5c7"),r("7a71");var h={data:function(){return{address:[],multiArray:[],multiIndex:[18,0],oneId:0,twoId:0,oldOwnerImageList:[],newOwnerImageList:[],vehicleLicenseImageList:[],registerImageList:[],statementImageList:[],taxImageList:[],oldCarBusinessType:"",newCarBusinessType:"",id:"",formData:{oldOwnerPhone:"",newOwnerPhone:"",carname:"",carId:"",carType:"",carNumber:"",engineNumber:"",oldCarOwner:"",newCarOwner:"",price:"",remark:"",immigrationAddress:"广东省,广州市",oldCarDocumentNumber:"",newCarDocumentNumber:"",oldCarOwnerAddress:"",newCarOwnerAddress:""},businessType:[{text:"个人",value:"personal"},{text:"公司",value:"company"}],rules:{carname:{rules:[{required:!0,errorMessage:"请输入品牌型号"}]},carId:{rules:[{required:!0,errorMessage:"请输入车牌号"}]},carType:{rules:[{required:!0,errorMessage:"请输入汽车类型"}]},carNumber:{rules:[{required:!0,errorMessage:"请输入车架号"}]},oldCarOwner:{rules:[{required:!0,errorMessage:"请输入原车主姓名"}]},oldCarDocumentNumber:{rules:[{required:!0,errorMessage:"请输入证件号码"}]},oldOwnerPhone:{rules:[{required:!0,errorMessage:"请输入原车主手机号码"},{pattern:/^[1][3,4,5,7,8][0-9]{9}$/,errorMessage:"必须是11位手机号码"}]},oldCarOwnerAddress:{rules:[{required:!0,errorMessage:"请输入原车主地址"}]},newCarOwner:{rules:[{required:!0,errorMessage:"请输入新车主姓名"}]},newCarDocumentNumber:{rules:[{required:!0,errorMessage:"请输入证件号码"}]},newOwnerPhone:{rules:[{required:!0,errorMessage:"请输入新车主手机号码"},{pattern:/^[1][3,4,5,7,8][0-9]{9}$/,errorMessage:"必须是11位手机号码"}]},newCarOwnerAddress:{rules:[{required:!0,errorMessage:"请输入新车主地址"}]},immigrationAddress:{rules:[{required:!0,errorMessage:"请选择迁入地"}]},price:{rules:[{required:!0,errorMessage:"请输入发票金额"}]},remark:{rules:[]}}}},computed:u({},(0,t.mapState)(["openid"])),onReady:function(e){},onLoad:function(e){var n=e.data;if(n){var r=JSON.parse(n);console.log(r),this.id=r.id,this.formData.oldOwnerPhone=r.oldOwnerPhone,this.formData.newOwnerPhone=r.newOwnerPhone,this.formData.carname=r.carname,this.formData.carId=r.carId,this.formData.carType=r.carType,this.formData.carNumber=r.carNumber,this.formData.engineNumber=r.engineNumber,this.formData.oldCarOwner=r.oldOwner,this.formData.newCarOwner=r.newOwner,this.formData.price=r.price,this.formData.remark=r.remark,this.formData.immigrationAddress=r.immigrationAddress,this.formData.oldCarDocumentNumber=r.oldOwnerCardDocument,this.formData.newCarDocumentNumber=r.newOwnerCardDocument,this.formData.oldCarOwnerAddress=r.oldOwnerAddress,this.formData.newCarOwnerAddress=r.newOwnerAddress,this.oldCarBusinessType=r.oldOwnerBusinessType,this.newCarBusinessType=r.newOwnerBusinessType,r.oldIdCardUrl&&(this.oldOwnerImageList=[r.oldIdCardUrl]),r.newIdCardUrl&&(this.newOwnerImageList=[r.newIdCardUrl]),r.vehicleLicenseUrl&&(this.vehicleLicenseImageList=[r.vehicleLicenseUrl]),r.statementUrl&&(this.statementImageList=[r.statementUrl]),r.taxUrl&&(this.taxImageList=[r.taxUrl]),r.registerUrl&&(this.registerImageList=r.registerUrl.split(","))}this.$refs.form.setRules(this.rules),this.initData()},mounted:function(){this.oldCarBusinessType&&this.newCarBusinessType||this.$refs.dialogInput.open()},methods:{initData:function(){var e=this;this.$request({url:"/api/vi/address",method:"GET"}).then((function(n){if(console.log("dd",n),200===n.code){e.address=n.data;var r=n.data.map((function(e){return e.name})),t=n.data[18].children.map((function(e){return e.name}));if(e.multiArray[0]=r,e.multiArray[1]=t,e.id){var a=e.formData.immigrationAddress.split(","),o=n.data.findIndex((function(e){return e.name===a[0]})),i=n.data[o].children,s=i.findIndex((function(e){return e.name===a[1]})),c=n.data[o].children.map((function(e){return e.name}));e.multiArray[0]=r,e.multiArray[1]=c,e.multiIndex=[o,s],e.oneId=a[0],e.twoId=a[1]}else{var l=n.data[18].children.map((function(e){return e.name}));e.multiArray[0]=r,e.multiArray[1]=l,e.oneId=n.data[18].name,e.twoId=n.data[18].children[0].name}}}))},bindMultiPickerColumnChange:function(e){console.log(e.detail.column,"e.detail.column表示是第几列表示是第几列"),0===e.detail.column?(this.initSelect(e.detail.value),this.multiIndex[0]=e.detail.value):1===e.detail.column&&(this.multiIndex[1]=e.detail.value,this.twoId=this.address[this.multiIndex[0]].children[this.multiIndex[1]].name),console.log("this.oneId",this.oneId),console.log("this.twoId",this.twoId),this.$refs.form.setValue("immigrationAddress",this.oneId+","+this.twoId),this.formData.immigrationAddress=this.oneId+","+this.twoId},initSelect:function(e){if(this.oneId=this.address[e].name,this.multiIndex[1]=0,this.$set(this.multiArray,1,[]),0==this.address[e].children.length)console.log("如果右边长度等于0,那么清掉右边ID"),this.twoId="";else{var n=this.address[e].children.map((function(e){return e.name}));this.$set(this.multiArray,1,n),this.twoId=this.address[e].children[0].name}},bindMultiPickerChange:function(e){},deleteImage:function(e,n){n.splice(e,1),n=a(n)},chooseImageOldOwner:function(){var n=this,r="personal"===this.oldCarBusinessType?"/api/v1/upload/idcard":"/api/v1/upload/bizlicense";e.chooseImage({count:1,sizeType:[],success:function(t){var a=t.tempFilePaths[0];e.showLoading(),e.uploadFile({url:n.$baseUrl+r,filePath:a,name:"image",success:function(r){console.log(r),e.hideLoading();var t=JSON.parse(r.data);200===t.code?(e.showToast({title:"上传成功",icon:"success",duration:1e3}),n.oldOwnerImageList.push(t.data.imageUrl),n.formData.oldCarOwner=t.data.Name,"personal"===n.oldCarBusinessType?n.formData.oldCarDocumentNumber=t.data.IdNum:n.formData.oldCarDocumentNumber=t.data.RegNum,n.formData.oldCarOwnerAddress=t.data.Address):e.showToast({title:"图片有误，识别失败",icon:"none"})},fail:function(n){console.log("uploadImage fail",n),e.showModal({content:n.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImageNewOwner:function(){var n=this,r="personal"===this.newCarBusinessType?"/api/v1/upload/idcard":"/api/v1/upload/bizlicense";e.chooseImage({count:1,sizeType:[],success:function(t){var a=t.tempFilePaths[0];e.showLoading(),e.uploadFile({url:n.$baseUrl+r,filePath:a,name:"image",success:function(r){console.log(r),e.hideLoading();var t=JSON.parse(r.data);200===t.code?(e.showToast({title:"上传成功",icon:"success",duration:1e3}),n.newOwnerImageList.push(t.data.imageUrl),n.formData.newCarOwner=t.data.Name,"personal"===n.newCarBusinessType?n.formData.newCarDocumentNumber=t.data.IdNum:n.formData.newCarDocumentNumber=t.data.RegNum,n.formData.newCarOwnerAddress=t.data.Address):e.showToast({title:"图片有误，识别失败",icon:"none"})},fail:function(n){console.log("uploadImage fail",n),e.showModal({content:n.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImageVehicleLicense:function(){var n=this;e.chooseImage({count:1,sizeType:[],success:function(r){var t=r.tempFilePaths[0];e.showLoading(),e.uploadFile({url:n.$baseUrl+"/api/v1/upload/vehiclelicense",filePath:t,name:"image",success:function(r){console.log(r),e.hideLoading();var t=JSON.parse(r.data);if(200===t.code){e.showToast({title:"上传成功",icon:"success",duration:1e3}),n.vehicleLicenseImageList.push(t.data.imageUrl),console.log(t);var a=t.data.FrontInfo;a&&(n.formData.carId=a.PlateNo,n.formData.carNumber=a.Vin,n.formData.carname=a.Model,n.formData.carType=a.VehicleType)}else e.showToast({title:"图片有误，识别失败",icon:"none"})},fail:function(n){console.log("uploadImage fail",n),e.showModal({content:n.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImageRegister:function(){var n=this;e.chooseImage({count:1,sizeType:[],success:function(r){var t=r.tempFilePaths[0];e.showLoading(),e.uploadFile({url:n.$baseUrl+"/api/v1/upload",filePath:t,name:"image",success:function(r){console.log(r),e.hideLoading();var t=JSON.parse(r.data);200===t.code?(e.showToast({title:"上传成功",icon:"success",duration:1e3}),console.log(t),n.registerImageList.push(t.data[0])):e.showToast({title:"图片上传失败",icon:"none"})},fail:function(n){e.showModal({content:n.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImageStatement:function(){var n=this;e.chooseImage({count:1,sizeType:[],success:function(r){var t=r.tempFilePaths[0];e.showLoading(),e.uploadFile({url:n.$baseUrl+"/api/v1/upload",filePath:t,name:"image",success:function(r){e.hideLoading(),console.log(r);var t=JSON.parse(r.data);200===t.code?(e.showToast({title:"上传成功",icon:"success",duration:1e3}),console.log(t),n.statementImageList.push(t.data[0])):e.showToast({title:"图片上传失败",icon:"none"})},fail:function(n){e.showModal({content:n.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},chooseImageTax:function(){var n=this;e.chooseImage({count:1,sizeType:[],success:function(r){var t=r.tempFilePaths[0];e.showLoading(),e.uploadFile({url:n.$baseUrl+"/api/v1/upload",filePath:t,name:"image",success:function(r){console.log(r),e.hideLoading();var t=JSON.parse(r.data);200===t.code?(e.showToast({title:"上传成功",icon:"success",duration:1e3}),console.log(t),n.taxImageList.push(t.data[0])):e.showToast({title:"图片上传失败",icon:"none"})},fail:function(n){e.showModal({content:n.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})},businessConfirm:function(){this.oldCarBusinessType&&this.newCarBusinessType?this.$refs.dialogInput.close():e.showToast({title:"请选择所有权",icon:"none"})},submitForm:function(n){var r=this;this.$refs[n].submit().then((function(n){r.registerImageList.length?r.statementImageList.length?r.id?r.update():r.create():e.showToast({title:"请上传声明照",icon:"none"}):e.showToast({title:"请上传登记证图片",icon:"none"})}))},create:function(){e.showLoading(),this.$request({url:"/api/v1/admin/invoice/create/wx",method:"POST",data:{immigrationAddress:this.formData.immigrationAddress,newOwner:this.formData.newCarOwner,newOwnerCardDocument:this.formData.newCarDocumentNumber,newOwnerPhone:+this.formData.newOwnerPhone,oldOwner:this.formData.oldCarOwner,oldOwnerCardDocument:this.formData.oldCarDocumentNumber,oldOwnerPhone:+this.formData.oldOwnerPhone,carType:this.formData.carType,carId:this.formData.carId,carNumber:this.formData.carNumber,carname:this.formData.carname,price:this.formData.price,remark:this.formData.remark,oldIdCardUrl:this.oldOwnerImageList[0],newIdCardUrl:this.newOwnerImageList[0],vehicleLicenseUrl:this.vehicleLicenseImageList[0],registerUrl:this.registerImageList.join(","),statementUrl:this.statementImageList[0],taxUrl:this.taxImageList[0],createBy:this.openid,oldOwnerBusinessType:this.oldCarBusinessType,newOwnerBusinessType:this.newCarBusinessType,oldOwnerAddress:this.formData.oldCarOwnerAddress,newOwnerAddress:this.formData.newCarOwnerAddress}}).then((function(n){e.hideLoading(),200===n.code?(e.showToast({title:"登记成功",icon:"success"}),e.$emit("inoviceCreate"),setTimeout((function(){e.switchTab({url:"../invoiceList/index"})}),1e3)):e.showToast({title:n.msg,icon:"none"})}))},update:function(){e.showLoading(),this.$request({url:"/api/v1/admin/invoice/update/wx/"+this.id,method:"POST",data:{immigrationAddress:this.formData.immigrationAddress,newOwner:this.formData.newCarOwner,newOwnerCardDocument:this.formData.newCarDocumentNumber,newOwnerPhone:+this.formData.newOwnerPhone,oldOwner:this.formData.oldCarOwner,oldOwnerCardDocument:this.formData.oldCarDocumentNumber,oldOwnerPhone:+this.formData.oldOwnerPhone,carType:this.formData.carType,carId:this.formData.carId,carNumber:this.formData.carNumber,carname:this.formData.carname,price:this.formData.price,remark:this.formData.remark,oldIdCardUrl:this.oldOwnerImageList[0],newIdCardUrl:this.newOwnerImageList[0],vehicleLicenseUrl:this.vehicleLicenseImageList[0],registerUrl:this.registerImageList.join(","),statementUrl:this.statementImageList[0],taxUrl:this.taxImageList[0],createBy:this.openid,oldOwnerBusinessType:this.oldCarBusinessType,newOwnerBusinessType:this.newCarBusinessType,oldOwnerAddress:this.formData.oldCarOwnerAddress,newOwnerAddress:this.formData.newCarOwnerAddress}}).then((function(n){e.hideLoading(),200===n.code?(e.showToast({title:"修改成功",icon:"success"}),e.$emit("inoviceUpdate"),setTimeout((function(){e.navigateBack()}),1e3)):e.showToast({title:n.msg,icon:"none"})}))}}};n.default=h}).call(this,r("543d")["default"])},e2e7:function(e,n,r){"use strict";(function(e){r("9634");t(r("66fd"));var n=t(r("45bb"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])}},[["e2e7","common/runtime","common/vendor"]]]);