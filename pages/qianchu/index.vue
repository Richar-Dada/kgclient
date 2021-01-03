<template>
	<view class="container" scroll-y="false">
		<uni-notice-bar :scrollable="true" :single="true" text="请选择所有权!   选择完成后上传证件照自动填写相关信息!" />
		
		<uni-popup id="dialogInput" ref="dialogInput" type="center">
			<view class="business-panel">
				<uni-forms labelWidth="105">
					<uni-forms-item name="oldCarBusinessType" label="原车主所有权">
						<uni-data-checkbox v-model="oldCarBusinessType" :localdata="businessType"></uni-data-checkbox>
					</uni-forms-item>
					<uni-forms-item name="newCarBusinessType" label="新车主所有权">
						<uni-data-checkbox v-model="newCarBusinessType" :localdata="businessType"></uni-data-checkbox>
					</uni-forms-item>
					<button class="button" type="default" @click="businessConfirm">确定</button>
				</uni-forms>
			</view>
		</uni-popup>

		<uni-forms :value="formData" ref="form" validate-trigger="bind" err-show-type="toast" labelWidth="105">
			
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
			
			<uni-group title="行驶证信息" top="0">
				<uni-forms-item name="carname" required label="品牌型号">
					<uni-easyinput type="text" v-model="formData.carname" class="uni-input-border" placeholder="如:本田飞度"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="carId" required label="车牌号">
					<uni-easyinput type="text" v-model="formData.carId" class="uni-input-border" placeholder="请输入车牌号"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="carType" required label="车辆类型">
					<uni-easyinput type="text" v-model="formData.carType" class="uni-input-border" placeholder="请输入车辆类型"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="carNumber" required label="车架号">
					<uni-easyinput type="text" v-model="formData.carNumber" class="uni-input-border" placeholder="请输入车架号"></uni-easyinput>
				</uni-forms-item>
			</uni-group>
			
			<view class="uni-list list-pd">
				<view class="uni-list-cell cell-pd">
					<view class="uni-uploader">
						<view class="uni-uploader-head upload-header">
							<view class="uni-uploader-title">点击上传原车主{{oldCarBusinessType === 'personal' ? '身份证(正面)' : '营业执照'}}</view>
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
			<uni-group title="原车主信息" top="0">
				<uni-forms-item name="newCarOwner" required label="姓名">
					<uni-easyinput type="text" v-model="formData.oldCarOwner" class="uni-input-border" placeholder="请输入原车主姓名"></uni-easyinput>
				</uni-forms-item>
				
				<uni-forms-item name="oldCarDocumentNumber" required label="身份证号码" v-if="oldCarBusinessType === 'personal'">
					<uni-easyinput type="text" v-model="formData.oldCarDocumentNumber" class="uni-input-border" placeholder="请输入证件号码"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="oldCarDocumentNumber" required label="统一社会代码" v-if="oldCarBusinessType === 'company'">
					<uni-easyinput type="text" v-model="formData.oldCarDocumentNumber" class="uni-input-border" placeholder="请输入证件号码"></uni-easyinput>
				</uni-forms-item>
			</uni-group>
			
			<view class="uni-list list-pd">
				<view class="uni-list-cell cell-pd">
					<view class="uni-uploader">
						<view class="uni-uploader-head upload-header">
							<view class="uni-uploader-title">点击上传新车主{{newCarBusinessType === 'personal' ? '身份证(正面)' : '营业执照'}}</view>
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
			<uni-group title="新车主信息" top="0">
				<uni-forms-item name="newCarOwner" required label="姓名">
					<uni-easyinput type="text" v-model="formData.newCarOwner" class="uni-input-border" placeholder="请输入新车主姓名"></uni-easyinput>
				</uni-forms-item>
				
				<uni-forms-item name="newCarDocumentNumber" v-if="newCarBusinessType === 'personal'" required label="身份证号码">
					<uni-easyinput type="text" v-model="formData.newCarDocumentNumber" class="uni-input-border" placeholder="请输入证件号码"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item name="newCarDocumentNumber" v-if="newCarBusinessType === 'company'" required label="统一社会代码">
					<uni-easyinput type="text" v-model="formData.newCarDocumentNumber" class="uni-input-border" placeholder="请输入证件号码"></uni-easyinput>
				</uni-forms-item>
			</uni-group>
				
			<uni-group title="其他信息" top="0">
				
				<uni-forms-item name="immigrationAddress" required label="迁入地">
					<picker
						mode="multiSelector"
						@change="bindMultiPickerChange"
						@columnchange="bindMultiPickerColumnChange"
						:value="multiIndex"
						:range="multiArray"
					>
						<view class="picker picker-immigrant">
							{{multiArray[0][multiIndex[0]]}} > {{multiArray[1][multiIndex[1]]}}
						</view>
					</picker>
				</uni-forms-item>
				
				<uni-forms-item name="remark" label="备注">
					<uni-easyinput type="text" v-model="formData.remark" placeholder="如有特殊情况请备注"></uni-easyinput>
				</uni-forms-item>
			</uni-group>

			<!-- 直接使用组件自带submit、reset 方法，小程序不生效 -->
			<!-- 			<button class="button" form-type="submit">Submit</button>
				<button class="button" form-type="reset">Reset</button> -->

			<view class="example">
				<button class="button" type="default" @click="submitForm('form')">提交</button>
				<button class="button" type="default" @click="goNotice">查看预约须知</button>
			</view>
		</uni-forms>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	
	export default {
		data() {
			return {
				multiArray: [],
				multiIndex: [18, 0],
				oneId: 0,
				twoId: 0,
				
				newOwnerImageList: [],
				oldOwnerImageList: [],
				vehicleLicenseImageList: [],
				date: '',
				oldCarBusinessType: '',
				newCarBusinessType: '',
				
				formData: {
					contactName: '',
					contactPhone: '',
					carname: '',
					carId: "",
					carType: '',
					carNumber: '',
					engineNumber: '',
					oldCarOwner: "",
					newCarOwner: '',
					remark: '',
					immigrationAddress: '广东省,广州市',
					oldCarDocumentNumber: '',
					newCarDocumentNumber: ''
				},
				businessType: [{
					text: '个人',
					value: 'personal'
				},{
					text: '公司',
					value: 'company'
				}],
				rules: {
					contactName: {
						rules: [{
							required: true,
							errorMessage: '请输入联系人姓名',
						}, {
							minLength: 1,
							maxLength: 15,
							errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
						}]
					},
					contactPhone: {
						rules: [{
							required: true,
							errorMessage: '请输入联系人号码',
						}, {
							pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
							errorMessage: '必须是11位手机号码',
						}]
					},
					carname: {
						rules: [{
							required: true,
							errorMessage: '请输入品牌型号',
						}]
					},
					carId: {
						rules: [{
							required: true,
							errorMessage: '请输入车牌号',
						}]
					},
					carType: {
						rules: [{
							required: true,
							errorMessage: '请输入汽车类型',
						}]
					},
					carNumber: {
						rules: [{
							required: true,
							errorMessage: '请输入车架号',
						}]
					},
					oldCarOwner: {
						rules: [{
							required: true,
							errorMessage: '请输入原车主姓名',
						}]
					},
					newCarOwner: {
						rules: [{
							required: true,
							errorMessage: '请输入新车主姓名',
						}]
					},
					immigrationAddress: {
						rules: [{
							required: true,
							errorMessage: '请选择迁入地',
						}]
					},
					newCarDocumentNumber: {
						rules: [{
							required: true,
							errorMessage: '请输入证件号码',
						}]
					},
					remark: {
						rules: []
					}
				}
			}
		},
		computed: {
			...mapState(['openid']),
			showForm() {
				return this.oldCarBusinessType && this.newCarBusinessType
			}
		},
		onLoad(option) {
			this.date = option.date
			this.goNotice()
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
			this.initData()
		},
		mounted() {
			this.$refs.dialogInput.open()
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
						this.oneId = res.data[18].name;
						this.twoId = res.data[18].children[0].name;
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
					].name;
				}
				console.log(this.oneId, "打印第一列id");
				console.log(this.twoId, "打印第二列id");
				this.$refs.form.setValue('immigrationAddress', this.oneId + ',' + this.twoId)
			},
			// 定义一个传入对应的'下标'为了拿到第一列id 和 第二列的name和id的方法
			initSelect(index) {
				this.oneId = this.address[index].name; //拿到第一列id
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
					this.twoId = this.address[index].children[0].name; //那么对应的第二列的第index个id也拿到了
				}
			},
			// 点击确定时触发,这里点击处理自己的业务,应该就是拿到两个个id去请求
			bindMultiPickerChange(e) {
				// uni.request({
				//     url: ``,
				// })
			},
			
			goNotice() {
				uni.navigateTo({
					url: '../notice/index'
				})
			},
			
			businessConfirm() {
				if (this.oldCarBusinessType && this.newCarBusinessType) {
					this.$refs.dialogInput.close()
				} else {
					uni.showToast({title: '请选择所有权', icon:"none"})
				}
				
			},
			
			chooseImageOldOwner: function() {
				const that = this 
				const url = this.oldCarBusinessType === 'personal' ? '/api/v1/upload/idcard' : '/api/v1/upload/bizlicense'
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						
						uni.uploadFile({
							url: this.$baseUrl + url,
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
									this.formData.oldCarOwner = resData.data.Name
									if (this.newCarBusinessType === 'personal') {
										this.formData.oldCarDocumentNumber = resData.data.IdNum
									} else {
										this.formData.oldCarDocumentNumber = resData.data.RegNum
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
			
			chooseImageNewOwner: function() {
				const that = this
				const url = this.newCarBusinessType === 'personal' ? '/api/v1/upload/idcard' : '/api/v1/upload/bizlicense'
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						uni.showLoading()
						uni.uploadFile({
							url: this.$baseUrl + url,
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								uni.hideLoading()
								console.log(res)
								const resData = JSON.parse(res.data)
								if (resData.code === 200) {
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									})
									this.newOwnerImageList.push(resData.data.imageUrl)
									this.formData.newCarOwner = resData.data.Name
									console.log('resData', resData)
									if (this.newCarBusinessType === 'personal') {
										this.formData.newCarDocumentNumber = resData.data.IdNum
									} else {
										this.formData.newCarDocumentNumber = resData.data.RegNum
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
			
			chooseImageVehicleLicense: function() {
				const that = this
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						uni.showLoading()
						uni.uploadFile({
							url: this.$baseUrl + '/api/v1/upload/vehiclelicense',
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								uni.hideLoading()
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
										this.formData.carId = frontInfo.PlateNo
										this.formData.carNumber = frontInfo.Vin
										this.formData.carname = frontInfo.Model
										this.formData.carType = frontInfo.VehicleType
										this.formData.engineNumber = frontInfo.EngineNo
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
			
			deleteImage(index, imageList) {
				imageList.splice(index, 1)
				imageList = [...imageList]
			},
			
			/**
			 * 手动提交
			 * @param {Object} form
			 */
			submitForm(form) {
				uni.showLoading()
				this.$refs[form].submit()
					.then((res) => {
						const dataArr = this.date.split(' ')
						this.$request({
							url: '/api/v1/booking/create/wx',
							method: 'POST',
							data: {
								serviceType: '迁出提档',
								bookingDate: dataArr[0],
								bookingTime: dataArr[1],
								contactName: this.formData.contactName,
								contactPhone: this.formData.contactPhone,
								carNumber: this.formData.carNumber,
								carname: this.formData.carname,
								carId: this.formData.carId,
								carType: this.formData.carType,
								engineNumber: this.formData.engineNumber,
								oldCarOwner: this.formData.oldCarOwner,
								newCarOwner: this.formData.newCarOwner,
								immigrationAddress: this.formData.immigrationAddress,
								newCarDocumentType: this.formData.newCarDocumentType,
								newCarDocumentNumber: this.formData.newCarDocumentNumber,
								mark: this.formData.mark,
								createTime: new Date().getTime(),
								createBy: this.openid,
								newIdCardUrl: this.newOwnerImageList.length && this.newOwnerImageList[0],
								oldIdCardUrl: this.oldOwnerImageList.length && this.oldOwnerImageList[0],
								vehicleLicenseUrl: this.vehicleLicenseImageList && this.vehicleLicenseImageList[0]
							}
						}).then((res) => {
							uni.hideLoading()
							if (res.code === 200) {
								uni.showToast({
									title: '提交成功'
								})
								
								uni.$emit('bookingCreate')
								
								setTimeout(() => {
									uni.switchTab({
										url: '../bookingList/index'
									})
								}, 1000)
								
							} else {
								uni.showToast({
									title: res.msg
								})
							}
						})
						
					}).catch((errors) => {
						console.error('验证失败：', errors);
					})
			},
			change(name, value) {
				this.formData.checked = value
				this.$refs.form.setValue(name, value)
			},
}
	}
</script>

<style>
	.container {
		font-size: 14px;
		line-height: 24px;
		background-color: #FFFFFF;
	}
	.content {
		width: 60%;
		margin: 20rpx auto;
	}
	button {
		margin-top: 30rpx;
	}
	image {
		width: 100%;
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
	
	.business-panel {
		border-radius: 5px;
		background-color: #FFFFFF;
	}
	
</style>
