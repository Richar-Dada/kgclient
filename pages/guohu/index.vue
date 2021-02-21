<template>
	<view class="container" scroll-y="false">
		<uni-notice-bar :scrollable="true" :single="true" text="上传证件照自动填写相关信息!" />

		<uni-forms :value="formData" ref="form" validate-trigger="bind" err-show-type="toast" labelWidth="115">
			
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
										<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImageVehicleLicense"></image>
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
							<view class="uni-uploader-title">点击上传指标书图片
							</view>
							<view class="uni-uploader-info">1/1</view>
						</view>
						<view class="uni-uploader-body upload-body">
							<view class="uni-uploader__files">
								<block v-for="(image,index) in valicImageList" :key="index">
									<view class="uni-uploader__file">
										<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImageValic"></image>
										<view class="delete-btn" @click="deleteImage(index, valicImageList)">
											<uni-icons type="clear" color="#dd524d" size="25" />
										</view>
									</view>
								</block>
								<view v-if="valicImageList.length === 0" class="uni-uploader__input-box">
									<view class="uni-uploader__input" @tap="chooseImageValic"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<uni-group title="其他信息" top="0">
				<uni-forms-item name="remark" label="备注">
					<uni-easyinput type="text" v-model="formData.remark" placeholder="如有特殊情况请备注"></uni-easyinput>
				</uni-forms-item>
			</uni-group>

			<!-- 直接使用组件自带submit、reset 方法，小程序不生效 -->
			<!-- 			<button class="button" form-type="submit">Submit</button>
				<button class="button" form-type="reset">Reset</button> -->

			<view class="example">
				<button class="button" type="default" @click="submitForm('form')">提交</button>
				<view class="notice-wrapper">
					<text class="notice-text" type="default" @click="goNotice">查看预约须知</text>
				</view>
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
	import { baseUrl } from '../../utils/request.js'
	
	export default {
		data() {
			return {
				vehicleLicenseImageList: [],
				valicImageList: [],
				date: '',
				id: '',
				invoiceId: '',
				
				formData: {
					carname: '',
					carId: "粤A",
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
								format: "string"
							},
							{
								validateFunction: function(rule, value, data, callback) {
									console.log(value)
									if (value.length < 6 || value.indexOf('粤A') === -1) {
										callback('车牌号为：粤AXXXXX')
									}
									return true
								}
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
		onLoad(option) {
			this.date = option.date
			const data = option.data
			this.invoiceId = option.invoiceId
			
			if (data) {
				const detail = JSON.parse(data)
				this.id = detail.id
				this.formData.carname = detail.carname
				this.formData.carId = detail.carId
				this.formData.carType = detail.carType
				this.formData.carNumber = detail.carNumber
				this.formData.engineNumber = detail.engineNumber
				this.formData.remark = detail.remark
				
				if (detail.vehicleLicenseUrl) this.vehicleLicenseImageList = [detail.vehicleLicenseUrl]
				if (detail.valicUrl) this.valicImageList = [detail.valicUrl]
			} else {
				if (this.invoiceId) {
					uni.showLoading({
						mask: true
					})
					this.$request({
						url: '/api/v1/admin/invoice/find/' + this.invoiceId,
						method: 'GET'
					}).then((res) => {
						uni.hideLoading()
						if (res.code === 200) {
							const data = res.data
							this.formData.carname = data.carname
							this.formData.carId = data.carId
							this.formData.carType = data.carType
							this.formData.carNumber = data.carNumber
							this.formData.engineNumber = data.engineNumber
							this.vehicleLicenseImageList = [data.vehicleLicenseUrl]
						} else {
							uni.showToast({
								title: res.msg,
								duration: 3000
							})
						}
					})
				}
				this.goNotice()
			}
		},
		computed: {
			...mapState(['openid']),
			showForm() {
				return this.oldCarBusinessType && this.newCarBusinessType
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		methods: {
			isCar(type) {
				if (!type) return false
				if (type.indexOf('货车') > -1) return false
				return true
			},
			goNotice() {
				uni.navigateTo({
					url: '../notice/index'
				})
			},
			previewImageVehicleLicense(e) {
				uni.previewImage({
					urls: this.vehicleLicenseImageList
				})
			},
			previewImageValic(e) {
				uni.previewImage({
					urls: this.valicImageList
				})
			},
			startDateChange(e) {
				this.formData.startTime = e
			},
			endDateChange(e) {
				this.formData.endTime = e
			},
			transformTime(timestamp = +new Date()) {
			    if (timestamp) {
			        var time = new Date(timestamp);
			        var y = time.getFullYear(); //getFullYear方法以四位数字返回年份
			        var M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
			        var d = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
			        return y + '-' + M + '-' + d;
			      } else {
			          return '';
			      }
			},
			chooseImageVehicleLicense: function() {
				const that = this
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						uni.showLoading({
							mask: true
						})
						uni.uploadFile({
							url: baseUrl + '/api/v1/upload/vehiclelicense',
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								uni.hideLoading()
								console.log(res)
								const resData = JSON.parse(res.data)
								if (resData.code === 200) {
									this.vehicleLicenseImageList.push(resData.data.imageUrl)
									const frontInfo = resData.data.FrontInfo
									
									if (frontInfo) {
								
										this.formData.carId = frontInfo.PlateNo
										this.formData.carNumber = frontInfo.Vin
										this.formData.carname = frontInfo.Model
										this.formData.carType = frontInfo.VehicleType
										this.formData.engineNumber = frontInfo.EngineNo
										
										if (frontInfo.PlateNo.indexOf('粤A') === -1) {
											uni.showToast({
												title: '只支持粤A车辆办理业务',
												icon: 'none',
												duration: 2000
											})
										} else {
											uni.showToast({
												title: '上传成功',
												icon: 'success',
											})
										}
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
			chooseImageValic: function() {
				const that = this
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						uni.showLoading({
							mask: true
						})
						uni.uploadFile({
							url: baseUrl + '/api/v1/upload',
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								uni.hideLoading()
								const resData = JSON.parse(res.data)
								if (resData.code === 200) {
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									})
									this.valicImageList.push(resData.data[0])
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
			
			deleteImage(index, imageList) {
				imageList.splice(index, 1)
				imageList = [...imageList]
			},
			
			/**
			 * 手动提交
			 * @param {Object} form
			 */
			submitForm(form) {
				this.$refs[form].submit()
					.then((res) => {
						if (this.id) {
							this.update(form)
						} else {
							const that = this
							wx.requestSubscribeMessage({
							  tmplIds: ['ZpSyU9MfuwmZryCO6UdkEOwd-YdHnRMdxY4SxEy-j5w'],
							  complete () {
								  that.create(form)
							  }
							})
						}
					})
			},
			create(form) {
				uni.showLoading({
					mask: true
				})
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
								remark: this.formData.remark,
								createTime: new Date().getTime(),
								createBy: this.openid,
								vehicleLicenseUrl: this.vehicleLicenseImageList && this.vehicleLicenseImageList[0],
								valicUrl: this.valicImageList.length > 0 ? this.valicImageList[0] : '',
								invoiceId: this.invoiceId
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
									icon: 'none',
									title: res.msg
								})
							}
						})
						
					}).catch((errors) => {
						console.error('验证失败：', errors);
					})
			},
			update(form) {
				uni.showLoading({
					mask: true
				})
				this.$refs[form].submit()
					.then((res) => {
						this.$request({
							url: '/api/v1/booking/update/wx/' + this.id,
							method: 'POST',
							data: {
								serviceType: '市内过户',
								carNumber: this.formData.carNumber,
								carname: this.formData.carname,
								carId: this.formData.carId,
								carType: this.formData.carType,
								engineNumber: this.formData.engineNumber,
								remark: this.formData.remark,
								vehicleLicenseUrl: this.vehicleLicenseImageList && this.vehicleLicenseImageList[0],
								validDate: this.formData.carType === '小型轿车' ? this.transformTime(this.formData.startTime) + '~' + this.transformTime(this.formData.endTime) : ' '
							}
						}).then((res) => {
							uni.hideLoading()
							if (res.code === 200) {
								uni.showToast({
									title: '修改成功'
								})
								
								uni.$emit('bookingUpdate')
								
								setTimeout(() => {
									uni.navigateBack()
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
			}
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
	
	.notice-wrapper {
		padding: 30rpx;
		text-align: center;
	}
	
	.notice-text {
		color: #007aff;
	}
	
</style>
