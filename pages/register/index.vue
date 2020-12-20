<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			
			
			<form @submit="formSubmit" @reset="formReset">
				<text class="text-tip">上传身份证照片(正面)</text>
				<view class="demo">
					<block v-if="imageSrc">
						<image :src="imageSrc" class="image" mode="widthFix"></image>
					</block>
					<block v-else>
						<view class="uni-hello-addfile" @click="chooseImage">+ 选择图片</view>
					</block>
				</view>
				
				<view class="uni-form-item uni-column">
					<view class="title">身份证号码</view>
					<input class="uni-input" name="idCard" :value="idCardNum" placeholder="上传身份证照片后自动填写" disabled="true"/>
				</view>
				<button form-type="submit" type="default" :disabled="!idCardNum.length" >关  联</button>
			</form>
			
			<button type="default" @click="chooseImage">重新上传</button>
		</view>
	</view>
</template>

<script>
	const  graceChecker = require("../../common/graceChecker.js")
	
	import { baseUrl } from '../../utils/request.js'
	
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	
	export default {
		data() {
			return {
				title: 'uploadFile',
				imageSrc: '',
				idCardNum: '',
				username: '',
				idCardUrl: '',
				iv: '',
				encryptedData: '',
				sessionKey: ''
			}
		},
		computed: {
			...mapState(['openid'])
		},
		onLoad(option) {
			this.iv = option.iv
			this.encryptedData = option.encryptedData
			this.sessionKey = option.sessionKey
		},
		onUnload() {
			this.imageSrc = '';
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				//定义表单规则
				var rule = [
					{name:"idCard", checkType : "string", checkRule:"18",  errorMsg:"请上传身份证照片"},
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(checkRes){
					this.$request({
						url: '/api/vi/admin/user/create/wx',
						method: 'POST',
						data: {
							username: this.username,
							certificate: this.idCardNum,
							idCardUrl: this.idCardUrl,
							iv: this.iv,
							encryptedData: this.encryptedData,
							sessionKey: this.sessionKey,
							openId: this.openid
						}
					}).then((res) => {
						if (res.code === 200) {
							uni.showToast({title:"关联成功", icon:"success"});
						} else {
							uni.showToast({title: res.msg, icon:"none"});
						}
					})
				}else{
					uni.showToast({ title: graceChecker.error, icon: "none" });
				}
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			chooseImage: function() {
				const that = this
				uni.chooseImage({
					count: 1,
					sizeType: [],
					sourceType: ['album'],
					success: (res) => {
						var imageSrc = res.tempFilePaths[0]
						
						uni.uploadFile({
							url: baseUrl + '/api/v1/upload/idcard',
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
									this.imageSrc = imageSrc
									this.idCardNum = resData.data.IdNum
									this.username = resData.data.Name
									this.idCardUrl = resData.data.imageUrl
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
			}
		}
	}
</script>
<style>
	.image {
		width: 100%;
	}

	.demo {
		background: #FFF;
		padding: 50rpx;
	}
	
	.text-tip {
		padding-left: 20rpx;
	}
	
	button {
		margin-top: 20rpx;
	}
</style>
