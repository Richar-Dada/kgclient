<template>
	<view class="invoiceRecord">
		<view class="wrapper">
			<view class="tips">
				<text>信息影响业务办理，请认真填写</text>
			</view>
			
			<view class="uni-list list-pd">
				<view class="uni-list-cell cell-pd">
					<view class="uni-uploader">
						<view class="uni-uploader-head upload-header">
							<view class="uni-uploader-title">点击上传原车主身份证(正面)</view>
							<view class="uni-uploader-info">1/1</view>
						</view>
						<view class="uni-uploader-body upload-body">
							<view class="uni-uploader__files">
								<block v-for="(image,index) in oldOwnerImageList" :key="index">
									<view class="uni-uploader__file">
										<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
										<view class="delete-btn" @click="deleteImage(index, oldOwnerImageList)">
											<uni-icons type="clear" color="#dd524d" size="25" />
										</view>
									</view>
								</block>
								<view v-if="oldOwnerImageList.length === 0" class="uni-uploader__input-box">
									<view class="uni-uploader__input" @tap="chooseImageOldOwner"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="uni-list list-pd">
				<view class="uni-list-cell cell-pd">
					<view class="uni-uploader">
						<view class="uni-uploader-head upload-header">
							<view class="uni-uploader-title">点击上传新车主身份证(正面)</view>
							<view class="uni-uploader-info">1/1</view>
						</view>
						<view class="uni-uploader-body upload-body">
							<view class="uni-uploader__files">
								<block v-for="(image,index) in newOwnerImageList" :key="index">
									<view class="uni-uploader__file">
										<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
										<view class="delete-btn" @click="deleteImage(index, newOwnerImageList)">
											<uni-icons type="clear" color="#dd524d" size="25" />
										</view>
									</view>
								</block>
								<view v-if="newOwnerImageList.length === 0" class="uni-uploader__input-box">
									<view class="uni-uploader__input" @tap="chooseImageNewOwner"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">点击上传行驶证(正面)</view>
								<view class="uni-uploader-info">1/1</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in vehicleLicenseImageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
											<view class="delete-btn" @click="deleteImage(index, vehicleLicenseImageList)">
												<uni-icons type="clear" color="#dd524d" size="25" />
											</view>
										</view>
									</block>
									<view v-if="vehicleLicenseImageList.length === 0" class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImageVehicleLicense"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				
				
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">点击上传登记证(1-2页 原车主页)</view>
								<view class="uni-uploader-info">{{registerImageList.length}}/9</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in registerImageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
											<view class="delete-btn" @click="deleteImage(index, registerImageList)">
												<uni-icons type="clear" color="#dd524d" size="25" />
											</view>
										</view>
									</block>
									<view v-if="registerImageList.length < 10" class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImageRegister"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">点击上传声明照</view>
								<view class="uni-uploader-info">1/1</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in statementImageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
											<view class="delete-btn" @click="deleteImage(index, statementImageList)">
												<uni-icons type="clear" color="#dd524d" size="25" />
											</view>
										</view>
									</block>
									<view v-if="statementImageList.length === 0" class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImageStatement"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">点击上传增值税发票(公司车需要)</view>
								<view class="uni-uploader-info">1/1</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in taxImageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
											<view class="delete-btn" @click="deleteImage(index, taxImageList)">
												<uni-icons type="clear" color="#dd524d" size="25" />
											</view>
										</view>
									</block>
									<view v-if="taxImageList.length === 0" class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImageTax"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="uni-form-item uni-column form-item">
					<view class="title">迁入地：</view>
					<view>
						<picker
							mode="multiSelector"
							@change="bindMultiPickerChange"
							@columnchange="bindMultiPickerColumnChange"
							:value="multiIndex"
							:range="multiArray"
						>
							<view class="picker picker-immigrant">
								当前选择：{{multiArray[0][multiIndex[0]]}} > {{multiArray[1][multiIndex[1]]}}
							</view>
						</picker>
					</view>
				</view>
				<view class="uni-form-item uni-column form-item">
					<view class="title">原车主：</view>
					<input class="uni-input" name="oldOwner" :value="oldOwner" placeholder="上传身份证照片后自动填写" disabled="true"/>
				</view>
				
				<view class="uni-form-item uni-column form-item">
					<view class="title">原车主身份证号码：</view>
					<input class="uni-input" name="oldOwnerCardDocument" :value="oldOwnerCardDocument" placeholder="上传身份证照片后自动填写" disabled="true"/>
				</view>
				
				<view class="uni-form-item uni-column form-item">
					<view class="title">新车主：</view>
					<input class="uni-input" name="newOwner" :value="newOwner" placeholder="上传身份证照片后自动填写" disabled="true"/>
				</view>
				
				<view class="uni-form-item uni-column form-item">
					<view class="title">新车主身份证号码：</view>
					<input class="uni-input" name="newOwnerCardDocument" :value="newOwnerCardDocument" placeholder="上传身份证照片后自动填写" disabled="true"/>
				</view>
				
				<view class="uni-form-item uni-column form-item">
					<view class="title">车牌：</view>
					<input class="uni-input" name="carId" :value="carId" placeholder="上传驾驶证照片后自动填写" disabled="true"/>
				</view>
				
				<view class="uni-form-item uni-column form-item">
					<view class="title">车架号：</view>
					<input class="uni-input" name="carNumber" :value="carNumber" placeholder="上传驾驶证照片后自动填写" disabled="true"/>
				</view>
				
				<view class="uni-form-item uni-column form-item">
					<view class="title">汽车品牌：</view>
					<input class="uni-input" name="carname" :value="carname" placeholder="上传驾驶证照片后自动填写" disabled="true"/>
				</view>
				
				<view class="uni-form-item uni-column form-item">
					<view class="title">汽车类型：</view>
					<input class="uni-input" name="carType" :value="carType" placeholder="上传驾驶证照片后自动填写" disabled="true"/>
				</view>
				
				<view class="uni-form-item uni-column form-item">
					<view class="title">原车主手机号码：</view>
					<input class="uni-input" name="oldOwnerPhone" v-model="oldOwnerPhone" placeholder="请输入手机号码"/>
				</view>
				
				<view class="uni-form-item uni-column form-item">
					<view class="title">新车主手机号码：</view>
					<input class="uni-input" name="newOwnerPhone" v-model="newOwnerPhone" placeholder="请输入手机号码"/>
				</view>
				
				<view class="uni-form-item uni-column form-item">
					<view class="title">开票金额：</view>
					<input class="uni-input" type="number" v-model="price" name="price" placeholder="请输入开票金额" />
				</view>
				
				<view class="uni-form-item uni-column form-item">
					<view class="title">备注：</view>
					<input class="uni-input" name="remark" :value="remark" placeholder="特殊情况请备注"/>
				</view>
				
				<button class="submit-Button" form-type="submit" type="default" >提 交</button>
			</form>
		</view>
	</view>
</template>

<script>
	const  graceChecker = require("../../common/graceChecker.js")
	const addressArr = require('./address.js')
	
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	
	export default {
		data () {
			return {
				address: [],
				multiArray: [],
				multiIndex: [18, 0],
				oneId: 0,
				twoId: 0,
				
				oldOwnerImageList: [],
				newOwnerImageList: [],
				vehicleLicenseImageList: [],
				registerImageList: [],
				statementImageList: [],
				taxImageList: [],
				
				oldOwner: '',
				oldOwnerCardDocument: '',
				oldOwnerPhone: '',
				newOwner: '',
				newOwnerCardDocument: '',
				newOwnerPhone: '',
				carId: '',
				carNumber: '',
				carname: '',
				carType: '',
				price: '',
				remark: ''
			}
		},
		computed: {
			...mapState(['openid'])
		},
		mounted() {
			this.initData(); //页面一加载调用赋值
		},
		methods: {
			initData() { //首次加载渲染 第一列 和 第二列数据
				this.$request({
					url: '/api/vi/address',
					method: 'GET'
				}).then((res) => {
					console.log('dd', res)
					if (res.code === 200) {
						this.address = res.data
						const arrOne = res.data.map(item => {
							return item.name; // 此方法将第一列 '名称'分到一个新数组中
						});
						const arrTwo = res.data[18].children.map(item => {
							return item.name; // 此方法将第二列'名称'分到一个新数组中
						});
						this.multiArray[0] = arrOne;
						this.multiArray[1] = arrTwo;
						this.oneId = res.data[18].id;
						this.twoId = res.data[18].children[0].id;
					}
				})
				
			},
	
			//滚动时候触发,
			bindMultiPickerColumnChange(e) {
				console.log(e.detail.column, "e.detail.column表示是第几列表示是第几列")
				if (e.detail.column === 0) {
					this.initSelect(e.detail.value);
					this.multiIndex[0] = e.detail.value;
				} else if (e.detail.column === 1) {
					this.multiIndex[1] = e.detail.value;
					this.twoId = this.address[this.multiIndex[0]].children[
						this.multiIndex[1]
					].id;
				}
				console.log(this.oneId, "打印第一列id");
				console.log(this.twoId, "打印第二列id");
			},
			// 定义一个传入对应的'下标'为了拿到第一列id 和 第二列的name和id的方法
			initSelect(index) {
				this.oneId = this.address[index].id; //拿到第一列id
				this.multiIndex[1] = 0; //将右边的数组的下标变回第一个显示
				this.$set(this.multiArray, 1, []); //清空对应右边数组的数据
				if (this.address[index].children.length == 0) {
					console.log("如果右边长度等于0,那么清掉右边ID");
					this.twoId = "";
				} else {
					const arrTwo = this.address[index].children.map(item => {
						return item.name; // 将第一列的children的数组遍历 name返回到一个新数组接收
					});
					this.$set(this.multiArray, 1, arrTwo); //重新 赋值到新的数组里
					this.twoId = this.address[index].children[0].id; //那么对应的第二列的第index个id也拿到了
				}
			},
			// 点击确定时触发,这里点击处理自己的业务,应该就是拿到两个个id去请求
			bindMultiPickerChange(e) {
				console.log(this.oneId);
				console.log(this.twoId);
				// uni.request({
				//     url: ``,
				// })
			},
			deleteImage(index, imageList) {
				imageList.splice(index, 1)
				imageList = [...imageList]
			},
			
			chooseImageOldOwner: function() {
				const that = this
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						
						uni.uploadFile({
							url: this.$baseUrl + '/api/v1/upload/idcard',
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								console.log(res)
								const resData = JSON.parse(res.data)
								if (resData.code === 200) {
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									})
									this.oldOwnerImageList.push(resData.data.imageUrl)
									this.oldOwner = resData.data.Name
									this.oldOwnerCardDocument = resData.data.IdNum
								} else {
									uni.showToast({title: '图片有误，识别失败', icon:"none"})
								}
							},
							fail: (err) => {
								console.log('uploadImage fail', err);
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}
				})
			},
			
			chooseImageNewOwner: function() {
				const that = this
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						
						uni.uploadFile({
							url: this.$baseUrl + '/api/v1/upload/idcard',
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								console.log(res)
								const resData = JSON.parse(res.data)
								if (resData.code === 200) {
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									})
									this.newOwnerImageList.push(resData.data.imageUrl)
									this.newOwner = resData.data.Name
									this.newOwnerCardDocument = resData.data.IdNum
								} else {
									uni.showToast({title: '图片有误，识别失败', icon:"none"})
								}
							},
							fail: (err) => {
								console.log('uploadImage fail', err);
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}
				})
			},
			
			chooseImageVehicleLicense: function() {
				const that = this
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						
						uni.uploadFile({
							url: this.$baseUrl + '/api/v1/upload/vehiclelicense',
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								console.log(res)
								const resData = JSON.parse(res.data)
								if (resData.code === 200) {
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									})
									this.vehicleLicenseImageList.push(resData.data.imageUrl)
									console.log(resData)
									const frontInfo = resData.data.FrontInfo
									if (frontInfo) {
										this.carId = frontInfo.PlateNo
										this.carNumber = frontInfo.Vin
										this.carname = frontInfo.Model
										this.carType = frontInfo.VehicleType
									}
								} else {
									uni.showToast({title: '图片有误，识别失败', icon:"none"})
								}
							},
							fail: (err) => {
								console.log('uploadImage fail', err);
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}
				})
			},
			chooseImageRegister: function() {
				const that = this
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						
						uni.uploadFile({
							url: this.$baseUrl + '/api/v1/upload',
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								console.log(res)
								const resData = JSON.parse(res.data)
								if (resData.code === 200) {
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									})
									console.log(resData)
									this.registerImageList.push(resData.data[0])
								} else {
									uni.showToast({title: '图片上传失败', icon:"none"})
								}
							},
							fail: (err) => {
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}
				})
			},
			chooseImageStatement: function() {
				const that = this
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						
						uni.uploadFile({
							url: this.$baseUrl + '/api/v1/upload',
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								console.log(res)
								const resData = JSON.parse(res.data)
								if (resData.code === 200) {
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									})
									console.log(resData)
									this.statementImageList.push(resData.data[0])
								} else {
									uni.showToast({title: '图片上传失败', icon:"none"})
								}
							},
							fail: (err) => {
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}
				})
			},
			chooseImageTax: function() {
				const that = this
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						
						uni.uploadFile({
							url: this.$baseUrl + '/api/v1/upload',
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								console.log(res)
								const resData = JSON.parse(res.data)
								if (resData.code === 200) {
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									})
									console.log(resData)
									this.taxImageList.push(resData.data[0])
								} else {
									uni.showToast({title: '图片上传失败', icon:"none"})
								}
							},
							fail: (err) => {
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								});
							}
						});
					},
					fail: (err) => {
						console.log('chooseImage fail', err)
					}
				})
			},
			
			formSubmit: function(e) {
				//定义表单规则
				var rule = [
					{name:"oldOwner", checkType : "string", checkRule:"1,20",  errorMsg:"请上传原车主身份证照片"},
					{name:"oldOwnerCardDocument", checkType : "string", checkRule:"18",  errorMsg:"请上传原车主身份证照片"},
					{name:"oldOwnerPhone", checkType : "phoneno",  errorMsg:"原车主手机号码有误"},
					{name:"newOwner", checkType : "string", checkRule:"1,20",  errorMsg:"请上传新车主身份证照片"},
					{name:"newOwnerCardDocument", checkType : "string", checkRule:"18",  errorMsg:"请上传新车主身份证照片"},
					{name:"newOwnerPhone", checkType : "phoneno",  errorMsg:"新车主手机号码有误"},
					{name:"carId", checkType : "notnull",  errorMsg:"请上传行驶证"},
					{name:"carNumber", checkType : "notnull", errorMsg:"请上传行驶证"},
					{name:"carType", checkType : "notnull", errorMsg:"请上传行驶证"},
					{name:"price", checkType : "notnull", errorMsg:"请输入发票金额"},
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(checkRes){
					console.log(this.registerImageList)
					if(!this.registerImageList.length) { 
						uni.showToast({ title: '请上传登记证图片', icon: "none" }) 
						return
					}
					
					if(!this.statementImageList.length) {
						uni.showToast({ title: '请上传声明照', icon: "none" }) 
						return
					}
					const immAddress = this.multiArray[0][this.multiIndex[0]] + ',' + this.multiArray[1][this.multiIndex[1]]
					this.$request({
						url: '/api/v1/admin/invoice/create/wx',
						method: 'POST',
						data: {
							immigrationAddress: immAddress,
							newOwner: this.newOwner,
							newOwnerCardDocument: this.newOwnerCardDocument,
							newOwnerPhone: +this.newOwnerPhone,
							oldOwner: this.oldOwner,
							oldOwnerCardDocument: this.oldOwnerCardDocument,
							oldOwnerPhone: +this.oldOwnerPhone,
							carType: this.carType,
							carId: this.carId,
							carNumber: this.carNumber,
							carname: this.carname,
							price: +this.price,
							remark: this.remark,
							oldIdCardUrl: this.oldOwnerImageList[0],
							newIdCardUrl: this.newOwnerImageList[0],
							vehicleLicenseUrl: this.vehicleLicenseImageList[0],
							registerUrl: this.registerImageList.join(','),
							statementUrl: this.statementImageList[0],
							taxUrl: this.taxImageList[0],
							creatBy: this.openid
						}
					}).then((res) => {
						if (res.code === 200) {
							uni.showToast({title:"登记成功", icon:"success"});
							setTimeout(() => {
								uni.switchTab({
									url: '../invoiceList/index'
								})
							}, 1000)
						} else {
							uni.showToast({title: res.msg, icon:"none"});
						}
					})
				}else{
					uni.showToast({ title: graceChecker.error, icon: "none" });
				}
			},
		}
	}
</script>

<style>
	.invoiceRecord {
		width: 100%;
		background-color: #FFFFFF;
		padding-bottom: 30rpx;
	}
	
	.wrapper {
		width: 90%;
		margin: 0 auto;
	}
	
	.demo {
		width: 200rpx;
		height: 100rpx;
	}
	
	.tips {
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
	}
	
	.upload-header {
		margin-top: 10rpx;
	}
	
	.upload-body {
		margin-top: 0;
		padding-bottom: 15rpx;
	}
	
	.form-item {
		position: relative;
	}
	
	.form-item::before {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.submit-Button {
		margin-top: 20rpx;
	}
	
	.uni-uploader__file {
		position: relative;
	}
	
	.delete-btn {
		position: absolute;
		top: -8px;
		right: 18px;
		width: 20rpx;
		height: 20rpx;
	}
	
	.picker-immigrant {
		margin-left: 20rpx;
	}
</style>
