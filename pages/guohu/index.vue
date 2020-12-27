<template>
	<view class="container" scroll-y="false">
		<uni-notice-bar :scrollable="true" :single="true" text="上传证件照自动填写相关信息!" />

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
			
				
			<uni-group title="其他信息" top="0">
				<uni-forms-item name="startTime" v-if="formData.carType === '小型轿车'" required label="指标有效期开始">
					<uni-datetime-picker v-model="formData.startTime" :min-year="2018" :max-year="2025" :timestamp="true" @change="startDateChange"></uni-datetime-picker>
				</uni-forms-item>
				<uni-forms-item name="endTime" v-if="formData.carType === '小型轿车'" required label="指标有效期结束">
					<uni-datetime-picker v-model="formData.endTime" :min-year="2018" :max-year="2025" :timestamp="true" @change="endDateChange"></uni-datetime-picker>
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
				vehicleLicenseImageList: [],
				date: '',
				
				formData: {
					carname: '',
					carId: "",
					carType: '',
					carNumber: '',
					engineNumber: '',
					startTime: '',
					endTime: '',
					remark: '',
				},
				rules: {
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
					startTime: {
						rules: [{
							required: true,
							errorMessage: '请选择指标有效期开始时间',
						}]
					},
					endTime: {
						rules: [{
							required: true,
							errorMessage: '请选择指标有效期结束时间',
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
		},
		methods: {
			goNotice() {
				uni.navigateTo({
					url: '../notice/index'
				})
			},
			
			startDateChange() {
				this.formData.startTime = e
			},
			endDateChange() {
				this.formData.endTime = e
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
								serviceType: '市内过户',
								bookingDate: dataArr[0],
								bookingTime: dataArr[1],
								carNumber: this.formData.carNumber,
								carname: this.formData.carname,
								carId: this.formData.carId,
								carType: this.formData.carType,
								engineNumber: this.formData.engineNumber,
								mark: this.formData.mark,
								createTime: new Date().getTime(),
								createBy: this.openid,
								vehicleLicenseUrl: this.vehicleLicenseImageList && this.vehicleLicenseImageList[0],
								validDate: this.formData.carType === '小型轿车' ? this.formData.startTime + '~' + this.formData.endTime : ' '
							}
						}).then((res) => {
							uni.hideLoading()
							if (res.code === 200) {
								uni.showToast({
									title: '提交成功'
								})
								setTimeout(() => {
									uni.switchTab({
										url: '../booking/index'
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
	
</style>
