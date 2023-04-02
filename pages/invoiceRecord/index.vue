<template>
	<view class="invoiceRecord">
		<uni-notice-bar :scrollable="true" :single="true" text="请选择所有权!   选择完成后上传证件照自动填写相关信息!" />
		<uni-popup id="dialogInput" ref="dialogInput" type="center" :maskClick="false">
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
				
				<view class="uni-list list-pd statement">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">上传声明照
								<text style="color: red;">*</text>
								</view>
								<view class="uni-uploader-info">1/1</view>
							</view>
							
							<!-- <view class="statementTipWapper">
								<text class="statementTipText" @click="showStatementExample">查看示例</text>
								<text class="statementTipText" style="margin-left: 50rpx;" @click="savePoster">下载模板</text>
							</view> -->
							
							<uni-data-checkbox v-model="formData.hasStatement" :localdata="statementType" />
														
							<view class="uni-uploader-body upload-body"  v-if="formData.hasStatement === 'true'">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in statementImageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImageveStatement"></image>
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
				
				<view class="uni-list list-pd" v-if="formData.hasStatement === 'false'">
					<view v-if="oldCarBusinessType === 'personal'" style="padding-top: 20rpx;">
						<uni-forms-item required name="sex" label="证件类型">
							<uni-data-checkbox v-model="formData.oldCarDocumentType" :localdata="documentType"></uni-data-checkbox>
						</uni-forms-item>
						
						<text class="upload-tip">其他证件类型请手动填写信息</text>
					</view>
					
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">上传原车主{{oldCarBusinessType === 'personal' ? formData.oldCarDocumentType === '1' ? '身份证(正面)' : '港澳通行证(正面)' : '营业执照'}}</view>
								<view class="uni-uploader-info">1/1</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in oldOwnerImageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImageveOldOwner"></image>
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
				<uni-group title="原车主信息" top="0" v-if="formData.hasStatement === 'false'">
					<uni-forms-item name="oldCarOwner" v-if="oldCarBusinessType === 'personal'" required label="姓名">
						<uni-easyinput type="text" v-model="formData.oldCarOwner" class="uni-input-border" placeholder="请输入原车主姓名"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="oldCarOwner" v-if="oldCarBusinessType === 'company'" required label="企业名称">
						<uni-easyinput type="text" v-model="formData.oldCarOwner" class="uni-input-border" placeholder="请输入原车主企业名称"></uni-easyinput>
					</uni-forms-item>
					
					<uni-forms-item name="oldCarDocumentNumber" required :label="formData.oldCarDocumentType === '1' ? '身份证号码' : '通行证号码'" v-if="oldCarBusinessType === 'personal'">
						<uni-easyinput type="text" v-model="formData.oldCarDocumentNumber" class="uni-input-border" placeholder="请输入证件号码"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="oldCarDocumentNumber" required label="统一社会代码" v-if="oldCarBusinessType === 'company'">
						<uni-easyinput type="text" v-model="formData.oldCarDocumentNumber" class="uni-input-border" placeholder="请输入证件号码"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="oldOwnerPhone" label="手机号码">
						<uni-easyinput type="number" v-model="formData.oldOwnerPhone" class="uni-input-border" placeholder="请输入原车主手机号码"></uni-easyinput>
					</uni-forms-item>
				</uni-group>
				
				<view class="uni-list list-pd">
					<view v-if="newCarBusinessType === 'personal'" style="padding-top: 20rpx;">
						<uni-forms-item required name="sex" label="证件类型">
							<uni-data-checkbox v-model="formData.newCarDocumentType" :localdata="documentType"></uni-data-checkbox>
						</uni-forms-item>
						
						<text class="upload-tip">其他证件类型请手动填写信息</text>
					</view>
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">上传新车主{{newCarBusinessType === 'personal' ? formData.newCarDocumentType === '1' ? '身份证(正面)' : '港澳通行证(正面)' : '营业执照'}}</view>
								<view class="uni-uploader-info">1/1</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in newOwnerImageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImageveNewOwner"></image>
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
					<uni-forms-item name="newCarOwner" v-if="newCarBusinessType === 'personal'" required label="姓名">
						<uni-easyinput type="text" v-model="formData.newCarOwner" class="uni-input-border" placeholder="请输入新车主姓名"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="newCarOwner" v-if="newCarBusinessType === 'company'" required label="企业名称">
						<uni-easyinput type="text" v-model="formData.newCarOwner" class="uni-input-border" placeholder="请输入新车主企业名称"></uni-easyinput>
					</uni-forms-item>
					
					<uni-forms-item name="newCarDocumentNumber" v-if="newCarBusinessType === 'personal'" required :label="formData.newCarDocumentType === '1' ? '身份证号码' : '通行证号码'">
						<uni-easyinput type="text" v-model="formData.newCarDocumentNumber" class="uni-input-border" placeholder="请输入证件号码"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="newCarDocumentNumber" v-if="newCarBusinessType === 'company'" required label="统一社会代码">
						<uni-easyinput type="text" v-model="formData.newCarDocumentNumber" class="uni-input-border" placeholder="请输入证件号码"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="newOwnerPhone" label="手机号码">
						<uni-easyinput type="number" v-model="formData.newOwnerPhone" class="uni-input-border" placeholder="请输入新车主手机号码"></uni-easyinput>
					</uni-forms-item>
					<uni-forms-item name="newCarOwnerAddress" required label="地址">
						<uni-easyinput type="text" v-model="formData.newCarOwnerAddress" class="uni-input-border" placeholder="请输入新车主地址"></uni-easyinput>
					</uni-forms-item>
				</uni-group>
					
				<uni-group title="其他信息" top="0">
					<text class="example-info"> * 市内过户业务请选择广东省广州市 * </text>
					<uni-forms-item name="immigrationAddress" required label="迁入地">
						<picker
							mode="multiSelector"
							@change="bindMultiPickerChange"
							@columnchange="bindMultiPickerColumnChange"
							:value="multiIndex"
							:range="multiArray"
						>
							<view v-if="formData.immigrationAddress" class="picker picker-immigrant">
								{{multiArray[0][multiIndex[0]]}} > {{multiArray[1][multiIndex[1]]}}
							</view>
							<view v-if="!formData.immigrationAddress" class="picker picker-immigrant">
								-- --
							</view>
						</picker>
					</uni-forms-item>
					
					<uni-forms-item name="price" required label="交易金额">
						<uni-easyinput type="digit" v-model="formData.price" :disabled="oldCarBusinessType === 'company'" :placeholder="oldCarBusinessType != 'company' ? '请填写发票金额':'单位车金额根据增值税发票'"></uni-easyinput>
					</uni-forms-item>
					
					
					
					<uni-forms-item name="remark" label="备注">
						<uni-easyinput type="text" v-model="formData.remark" placeholder="如有特殊情况请备注"></uni-easyinput>
					</uni-forms-item>
					
				</uni-group>
				
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">上传登记证(有打印内容页面)
									<text style="color: red;">*</text>
								</view>
								<view class="uni-uploader-info">{{registerImageList.length}}/9</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in registerImageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImageveRegister"></image>
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
				
				
				
				<view class="uni-list list-pd" v-if="oldCarBusinessType === 'company'">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">
									上传增值税发票(公司车需要)
									<text style="color: red;">*</text>
								</view>
								<view class="uni-uploader-info">1/1</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in taxImageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImageveTax"></image>
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
			
				<!-- 直接使用组件自带submit、reset 方法，小程序不生效 -->
				<!-- 			<button class="button" form-type="submit">Submit</button>
					<button class="button" form-type="reset">Reset</button> -->
			
				<view class="example">
					<button class="button" type="default" @click="submitForm('form')">提交</button>
					<!-- <button class="button" style="margin-top: 20rpx;" type="default" @click="goNotice">查看预约须知</button> -->
				</view>
			</uni-forms>
			
	</view>
</template>

<script>
	const  graceChecker = require("../../common/graceChecker.js")
	const addressArr = require('./address.js')
	import { baseUrl } from '../../utils/request.js'
	
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
				documentType: [{
					text: '身份证',
					value: '1'
				}, {
					text: '港澳通行证',
					value: '2'
				}],
				
				oldOwnerImageList: [],
				newOwnerImageList: [],
				vehicleLicenseImageList: [],
				registerImageList: [],
				statementImageList: [],
				taxImageList: [],
				oldCarBusinessType: '',
				newCarBusinessType: '',
				id: '',
				
				formData: {
					oldOwnerPhone: '',
					newOwnerPhone: '',
					carname: '',
					carId: "",
					carType: '',
					carNumber: '',
					engineNumber: '',
					oldCarOwner: "",
					newCarOwner: '',
					price: '',
					remark: '',
					immigrationAddress: '',
					oldCarDocumentNumber: '',
					newCarDocumentNumber: '',
					oldCarOwnerAddress: '广东省,广州市',

					newCarOwnerAddress: '',
					oldCarDocumentType: '1', // 1 身份证/营业执照  2 港澳通行证  3 其他
					newCarDocumentType: '1',
					hasStatement: ''
				},
				statementType:[{
					text: '已通过人脸核身，上传授权码图片',
					value: 'true'
				}, {
					text: '未通过人脸核身，现场办理',
					value: 'false'
				}],
				businessType: [{
					text: '个人',
					value: 'personal'
				},{
					text: '公司',
					value: 'company'
				}],
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
					// oldCarOwner: {
					// 	rules: [{
					// 		required: this.hasStatement === 'false',
					// 		errorMessage: '请输入原车主姓名',
					// 	}]
					// },
					// oldCarDocumentNumber: {
					// 	rules: [{
					// 		required: this.hasStatement === 'false',
					// 		errorMessage: '请输入证件号码',
					// 	}]
					// },
					// oldOwnerPhone: {
					// 	rules: [{
					// 		required: false,
					// 		errorMessage: '请输入原车主手机号码',
					// 	}, {
					// 		pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
					// 		errorMessage: '必须是11位手机号码',
					// 	}]
					// },
					// oldCarOwnerAddress: {
					// 	rules: [{
					// 		required: this.hasStatement === 'false',
					// 		errorMessage: '请输入原车主地址',
					// 	}]
					// },
					newCarOwner: {
						rules: [{
							required: true,
							errorMessage: '请输入新车主姓名',
						}]
					},
					newCarDocumentNumber: {
						rules: [{
							required: true,
							errorMessage: '请输入证件号码',
						}]
					},
					newOwnerPhone: {
						rules: [{
							required: false,
							errorMessage: '请输入新车主手机号码',
						}]
					},
					newCarOwnerAddress: {
						rules: [{
							required: true,
							errorMessage: '请输入新车主地址',
						}]
					},
					immigrationAddress: {
						rules: [{
							required: true,
							errorMessage: '请选择迁入地',
						}]
					},
					
					price: {
						rules: [{
							required: false,
							errorMessage: '请输入发票金额',
						}]
					},
					remark: {
						rules: []
					},
					hasStatement: {
						rules: [{
							required: true,
							errorMessage: '请选择人脸核身情况',
						}]
					}
				}
			}
		},
		computed: {
			...mapState(['openid'])
		},
		onReady(option) {
			
		},
		onLoad(option) {
			
			const data = option.data
			if (data) {
				const detail = JSON.parse(data)
				console.log(detail)
				
				this.id = detail.id
				this.formData.oldOwnerPhone = detail.oldOwnerPhone
				this.formData.newOwnerPhone = detail.newOwnerPhone
				this.formData.carname = detail.carname
				this.formData.carId = detail.carId
				this.formData.carType = detail.carType
				this.formData.carNumber = detail.carNumber
				this.formData.engineNumber = detail.engineNumber
				this.formData.oldCarOwner = detail.oldOwner
				this.formData.newCarOwner = detail.newOwner
				this.formData.price = detail.price
				this.formData.remark = detail.remark
				this.formData.hasStatement = detail.hasStatement
				this.formData.immigrationAddress = detail.immigrationAddress
				this.formData.oldCarDocumentNumber = detail.oldOwnerCardDocument
				this.formData.newCarDocumentNumber = detail.newOwnerCardDocument
				this.formData.oldCarOwnerAddress = detail.oldOwnerAddress
				this.formData.newCarOwnerAddress = detail.newOwnerAddress
				this.formData.oldCarDocumentType = detail.oldOwnerDocumentType
				this.formData.newCarDocumentType = detail.newOwnerDocumentType
				
				this.oldCarBusinessType = detail.oldOwnerBusinessType
				this.newCarBusinessType = detail.newOwnerBusinessType
				
				if (detail.oldIdCardUrl) this.oldOwnerImageList = [detail.oldIdCardUrl]
				if (detail.newIdCardUrl) this.newOwnerImageList = [detail.newIdCardUrl]
				if (detail.vehicleLicenseUrl) this.vehicleLicenseImageList = [detail.vehicleLicenseUrl]
				if (detail.statementUrl) this.statementImageList = [detail.statementUrl]
				if (detail.taxUrl) this.taxImageList = [detail.taxUrl]
				if (detail.registerUrl) {
					this.registerImageList = detail.registerUrl.split(',')
				}
			}
			this.$refs.form.setRules(this.rules)
			this.initData()
			console.log('onLoad')
		},
		mounted() {
			if (!this.oldCarBusinessType || !this.newCarBusinessType) {
				this.$refs.dialogInput.open()
			}
		},
		methods: {
			savePoster() {
				uni.getSetting({ //获取用户的当前设置
					success: (res) => {
						if (res.authSetting['scope.writePhotosAlbum']) { //验证用户是否授权可以访问相册
							this.saveImageToPhotosAlbum();
						} else {
							uni.authorize({ //如果没有授权，向用户发起请求
								scope: 'scope.writePhotosAlbum',
								success: () => {
									this.saveImageToPhotosAlbum();
								},
								fail: () => {
									uni.showToast({
										title: "请打开保存相册权限，再点击保存相册分享",
										icon: "none",
										duration: 3000
									});
									setTimeout(() => {
										uni.openSetting({ //调起客户端小程序设置界面,让用户开启访问相册
											success: (res2) => {
												// console.log(res2.authSetting)
											}
										});
									}, 3000);
								}
							})
						}
					}
				})
			},
			saveImageToPhotosAlbum() {
				const url = this.newCarBusinessType === 'personal' ? 
					'/static/statement_pensonal.png' : '/static/statement_company.png'
				uni.saveImageToPhotosAlbum({
					filePath: url,
					success: function(res2) {
						uni.hideLoading();
						uni.showToast({
							title: '保存成功，请从相册查看',
							icon: "none",
							duration: 5000
						})
					},
					fail: function(err) {
						uni.hideLoading();
						// console.log(err.errMsg);
					}
				})
			},
			showStatementExample() {
				const url = this.oldCarBusinessType === 'personal' ?
					'https://carbase.oss-cn-shenzhen.aliyuncs.com/statement1.jpg' : 'https://carbase.oss-cn-shenzhen.aliyuncs.com/statement2.jpg'
				uni.previewImage({
					urls: [url]
				})
			},
			previewImageVehicleLicense(e) {
				uni.previewImage({
					urls: this.vehicleLicenseImageList
				})
			},
			previewImageveOldOwner(e) {
				uni.previewImage({
					urls: this.oldOwnerImageList
				})
			},
			previewImageveNewOwner(e) {
				uni.previewImage({
					urls: this.newOwnerImageList
				})
			},
			previewImageveRegister(e) {
				uni.previewImage({
					urls: this.registerImageList
				})
			},
			previewImageveStatement(e) {
				uni.previewImage({
					urls: this.statementImageList
				})
			},
			previewImageveTax(e) {
				uni.previewImage({
					urls: this.taxImageList
				})
			},
			initData() { //首次加载渲染 第一列 和 第二列数据
				
				this.address = addressArr
				const arrOne = addressArr.map(item => {
					return item.name; // 此方法将第一列 '名称'分到一个新数组中
				});
				const arrTwo = addressArr[18].children.map(item => {
					return item.name; // 此方法将第二列'名称'分到一个新数组中
				});
				this.multiArray[0] = arrOne;
				this.multiArray[1] = arrTwo;
				
				if (!this.id) {
					const arrTwo = addressArr[18].children.map(item => {
						return item.name; // 此方法将第二列'名称'分到一个新数组中
					});
					this.multiArray[0] = arrOne;
					this.multiArray[1] = arrTwo;
					this.oneId = addressArr[18].name;
					this.twoId = addressArr[18].children[0].name;
				} else {
					const imAddress = this.formData.immigrationAddress.split(',')
					
					const firstIndex = addressArr.findIndex((item) => {
						return item.name === imAddress[0]
					})
					
					const children = addressArr[firstIndex].children
					const secondIndex = children.findIndex((item) => {
						return item.name === imAddress[1]
					})
					
					const arrTwo = addressArr[firstIndex].children.map(item => {
						return item.name; // 此方法将第二列'名称'分到一个新数组中
					});
					this.multiArray[0] = arrOne;
					this.multiArray[1] = arrTwo;
					
					this.multiIndex = [firstIndex, secondIndex]
					this.oneId = imAddress[0]
					this.twoId = imAddress[1]
				}
				
				
			},
	
			//滚动时候触发,
			bindMultiPickerColumnChange(e) {
				if (e.detail.column === 0) {
					this.initSelect(e.detail.value);
					this.multiIndex[0] = e.detail.value;
				} else if (e.detail.column === 1) {
					this.multiIndex[1] = e.detail.value;
					this.twoId = this.address[this.multiIndex[0]].children[
						this.multiIndex[1]
					].name;
				}
				this.$refs.form.setValue('immigrationAddress', this.oneId + ',' + this.twoId)
				this.formData.immigrationAddress = this.oneId + ',' + this.twoId
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
				this.$refs.form.setValue('immigrationAddress', this.oneId + ',' + this.twoId)
				this.formData.immigrationAddress = this.oneId + ',' + this.twoId
			},
			deleteImage(index, imageList) {
				imageList.splice(index, 1)
				imageList = [...imageList]
			},
			
			chooseImageOldOwner: function() {
				const that = this
				let url = ''
				if (this.oldCarBusinessType === 'personal' && this.formData.oldCarDocumentType === '1') {
					url = '/api/v1/upload/idcard'
				} else if (this.oldCarBusinessType === 'personal' && this.formData.oldCarDocumentType === '2') {
					url = '/api/v1/upload/permit'
				} else {
					url = '/api/v1/upload/bizlicense'
				}
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						uni.showLoading({
							mask: true
						})
						uni.uploadFile({
							url: baseUrl + url,
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								console.log(res)
								uni.hideLoading()
								const resData = JSON.parse(res.data)
								if (resData.code === 200) {
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									})
									this.oldOwnerImageList.push(resData.data.imageUrl)
									this.formData.oldCarOwner = resData.data.Name
									if (this.oldCarBusinessType === 'personal' && this.formData.oldCarDocumentType === '1') {
										this.formData.oldCarDocumentNumber = resData.data.IdNum
									} else if (this.oldCarBusinessType === 'personal' && this.formData.oldCarDocumentType === '2') {
										this.formData.oldCarDocumentNumber = resData.data.Number
									} else {
										this.formData.oldCarDocumentNumber = resData.data.RegNum
									}
									this.formData.oldCarOwnerAddress = resData.data.Address
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
				let url = ''
				if (this.newCarBusinessType === 'personal' && this.formData.newCarDocumentType === '1') {
					url = '/api/v1/upload/idcard'
				} else if (this.newCarBusinessType === 'personal' && this.formData.newCarDocumentType === '2') {
					url = '/api/v1/upload/permit'
				} else {
					url = '/api/v1/upload/bizlicense'
				}
				uni.chooseImage({
					count: 1,
					sizeType: [],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						uni.showLoading({
							mask: true
						})
						uni.uploadFile({
							url: baseUrl + url,
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
									this.newOwnerImageList.push(resData.data.imageUrl)
									this.formData.newCarOwner = resData.data.Name
									if (this.newCarBusinessType === 'personal' && this.formData.newCarDocumentType === '1') {
										this.formData.newCarDocumentNumber = resData.data.IdNum
									} else if (this.newCarBusinessType === 'personal' && this.formData.newCarDocumentType === '2') {
										this.formData.newCarDocumentNumber = resData.data.Number
									} else  {
										this.formData.newCarDocumentNumber = resData.data.RegNum
									}
									this.formData.newCarOwnerAddress = resData.data.Address
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
						uni.showLoading({
							mask: true
						})
						uni.uploadFile({
							url: baseUrl + '/api/v1/upload/vehiclelicense',
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								console.log(res)
								uni.hideLoading()
								const resData = JSON.parse(res.data)
								if (resData.code === 200) {
									this.vehicleLicenseImageList.push(resData.data.imageUrl)
									console.log(resData)
									const frontInfo = resData.data.FrontInfo
									if (frontInfo) {
										this.formData.carId = frontInfo.PlateNo
										this.formData.carNumber = frontInfo.Vin
										this.formData.carname = frontInfo.Model
										this.formData.carType = frontInfo.VehicleType
										
										uni.showToast({
											title: '上传成功',
											icon: 'success',
										})
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
					count: 9,
					sizeType: [],
					success: (res) => {
						var tempFilePaths = res.tempFilePaths
						for(let i = 0, len = tempFilePaths.length; i < len; i++) {
							uni.showLoading({
								mask: true
							})
							uni.uploadFile({
								url: baseUrl + '/api/v1/upload',
								filePath: tempFilePaths[i],
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
						}
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
						uni.showLoading({
							mask: true
						})
						uni.uploadFile({
							url: baseUrl + '/api/v1/upload',
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
						uni.showLoading({
							mask: true
						})
						uni.uploadFile({
							url: baseUrl + '/api/v1/upload',
							filePath: imageSrc,
							name: 'image',
							success: (res) => {
								console.log(res)
								uni.hideLoading()
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
			
			businessConfirm() {
				if (this.oldCarBusinessType && this.newCarBusinessType) {
					this.$refs.dialogInput.close()
				} else {
					uni.showToast({title: '请选择所有权', icon:"none"})
				}
			},
			
			submitForm: function(form) {
				
				if(this.formData.hasStatement === '' || this.formData.hasStatement === 'true' && !this.statementImageList.length) {
					uni.showToast({ title: '请上传声明照', icon: "none" }) 
					return
				}
				
				// 原车主信息校验
				if(this.formData.oldCarOwner === '' && this.formData.hasStatement === 'false') {
					uni.showToast({ title: '请输入原车主姓名', icon: "none" }) 
					return
				}
				
				if(this.formData.oldCarDocumentNumber === '' && this.formData.hasStatement === 'false') {
					uni.showToast({ title: '请输入原车主证件号码', icon: "none" }) 
					return
				}
				
				if(this.formData.hasStatement === '' && this.formData.hasStatement === 'false') {
					uni.showToast({ title: '请上传声明照', icon: "none" }) 
					return
				}
				
				this.$refs[form].submit()
					.then((res) => {
						
						
						
						if (this.oldCarBusinessType === 'personal' && !this.formData.price) {
							uni.showToast({ title: '请输入发票金额', icon: "none" })
							return
						}
						
						if(!this.registerImageList.length) {
							uni.showToast({ title: '请上传登记证图片', icon: "none" }) 
							return
						}
						
						if(this.oldCarBusinessType === 'company' && !this.taxImageList.length) {
							uni.showToast({ title: '请上传增值税发票照片', icon: "none" })
							return
						}
						
						if (this.id) {
							this.update()
						} else {
							const that = this
							wx.requestSubscribeMessage({
							  tmplIds: ['fjkHU8-cHQ5o6BEND7EQVfvEThwepPQ74ESoXcALWCo'],
							  complete () {
								  that.create()
							  }
							})
						}
					})
			},
			create() {
				console.log(this.formData)
				uni.showLoading({
					mask: true
				})
				this.$request({
					url: '/api/v1/admin/invoice/create/wx',
					method: 'POST',
					data: {
						immigrationAddress: this.formData.immigrationAddress,
						newOwner: this.formData.newCarOwner,
						newOwnerCardDocument: this.formData.newCarDocumentNumber,
						newOwnerPhone: this.formData.newOwnerPhone ? +this.formData.newOwnerPhone : '',
						oldOwner: this.formData.oldCarOwner,
						oldOwnerCardDocument: this.formData.oldCarDocumentNumber,
						oldOwnerPhone: this.formData.oldOwnerPhone ? +this.formData.oldOwnerPhone : '',
						carType: this.formData.carType,
						carId: this.formData.carId,
						carNumber: this.formData.carNumber,
						carname: this.formData.carname,
						price: this.oldCarBusinessType != 'company' ? this.formData.price : '单位车金额根据增值税发票',
						remark: this.formData.remark,
						hasStatement: this.formData.hasStatement,
						oldIdCardUrl: this.oldOwnerImageList[0],
						newIdCardUrl: this.newOwnerImageList[0],
						vehicleLicenseUrl: this.vehicleLicenseImageList[0],
						registerUrl: this.registerImageList.join(','),
						statementUrl: this.statementImageList[0],
						taxUrl: this.taxImageList[0],
						createBy: this.openid,
						oldOwnerBusinessType: this.oldCarBusinessType,
						newOwnerBusinessType: this.newCarBusinessType,
						oldOwnerAddress: this.formData.oldCarOwnerAddress,
						newOwnerAddress: this.formData.newCarOwnerAddress,
						oldOwnerDocumentType: this.formData.oldCarDocumentType,
						newOwnerDocumentType: this.formData.newCarDocumentType
					}
				}).then((res) => {
					uni.hideLoading()
					if (res.code === 200) {
						uni.showToast({title:"登记成功", icon:"success"});
						uni.$emit('inoviceCreate')
						setTimeout(() => {
							const payPrice = 1
							console.log('dd', this.formData.carId, this.formData.carId.indexOf('粤A') > -1)
							uni.redirectTo({
								url: '../payment/index?pid=' + res.data.pid + '&payPrice=' +  payPrice
							})
						}, 1000)
					} else {
						uni.showToast({title: res.msg, icon:"none"});
					}
				})
					
			},
			update() {
				uni.showLoading({
					mask: true
				})
				this.$request({
					url: '/api/v1/admin/invoice/update/wx/' + this.id,
					method: 'POST',
					data: {
						immigrationAddress: this.formData.immigrationAddress,
						newOwner: this.formData.newCarOwner,
						newOwnerCardDocument: this.formData.newCarDocumentNumber,
						newOwnerPhone: +this.formData.newOwnerPhone,
						oldOwner: this.formData.oldCarOwner,
						oldOwnerCardDocument: this.formData.oldCarDocumentNumber,
						oldOwnerPhone: +this.formData.oldOwnerPhone,
						carType: this.formData.carType,
						carId: this.formData.carId,
						carNumber: this.formData.carNumber,
						carname: this.formData.carname,
						price: this.formData.price,
						remark: this.formData.remark,
						hasStatement: this.formData.hasStatement,
						oldIdCardUrl: this.oldOwnerImageList[0],
						newIdCardUrl: this.newOwnerImageList[0],
						vehicleLicenseUrl: this.vehicleLicenseImageList[0],
						registerUrl: this.registerImageList.join(','),
						statementUrl: this.statementImageList[0],
						taxUrl: this.taxImageList[0],
						createBy: this.openid,
						oldOwnerBusinessType: this.oldCarBusinessType,
						newOwnerBusinessType: this.newCarBusinessType,
						oldOwnerAddress: this.formData.oldCarOwnerAddress,
						newOwnerAddress: this.formData.newCarOwnerAddress
					}
				}).then((res) => {
					uni.hideLoading()
					if (res.code === 200) {
						uni.showToast({title:"修改成功", icon:"success"});
						uni.$emit('inoviceUpdate')
						setTimeout(() => {
							uni.navigateBack()
						}, 1000)
					} else {
						uni.showToast({title: res.msg, icon:"none"});
					}
				})
					
			}
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
		margin-top: 10rpx;
		margin-left: 20rpx;
		font-size: 32rpx;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.business-panel {
		border-radius: 5px;
		background-color: #FFFFFF;
	}
	
	.example-info {
		padding-left: 100rpx;
		padding-bottom: 10rpx;
		color: red;
		background: #ffffff;
	}
	
	.statement {
		padding: 10px 0px;
	}
	
	.statement::after {
		height: 0;
	}
	
	.statementTipWapper {
		position: absolute;
		top: 10rpx;
		left: 300rpx;
	}
	
	.statementTipText {
		color: red;
		font-size: 24rpx;
	}
	
	.upload-tip {
		position: absolute;
		left: 300rpx;
		top: 90rpx;
		font-size: 24rpx;
		color: red;
	}
</style>
