<template>
	<view class="user">
		<view>
			<view style="background:#FFF; padding:40rpx;" class="login-wrapper">
				<block v-if="hasLogin === true && isNew === true">
					<view class="uni-hello-text uni-center">
						<text>该账号未关联个人信息，关联个人信息方可办业务</text>
					</view>
					<button type="default" class="login-button" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
						开始关联
					</button>
				</block>
				
				<block v-if="hasLogin === true && isNew === false">
					<view class="uni-center" style="background:#FFFFFF; font-size:0;">
						<image class="avatar" mode="widthFix" :src="weixinUserInfo.avatarUrl" />
					</view>
					<text class="uni-hello-text uni-center username">{{ weixinUserInfo.nickName }}</text>
				</block>
				
				<block v-if="hasLogin === false">
					<view class="uni-h3 uni-center uni-common-mt">未登录</view>
					<button type="default" class="login-button" @click="tologin">
						请点击按钮登录
					</button>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import {
			mapState,
			mapMutations,
			mapActions
		} from 'vuex'
	const univerifyInfoKey = 'univerifyInfo'
	
	export default {
		data () {
			return {
				providerList: [],
				isNew: false,
				sessionKey: '',
				weixinUserInfo: ''
			}
		},
		computed: {
			...mapState(['hasLogin', 'isUniverifyLogin', 'univerifyErrorMsg'])
		},
		onLoad() {
			if (this.hasLogin && this.isUniverifyLogin) {
				this.getPhoneNumber(uni.getStorageSync(univerifyInfoKey)).then((phoneNumber) => {
					this.phoneNumber = phoneNumber
				})
			}
		},
		methods: {
			...mapMutations(['login', 'setUniverifyLogin', 'setOpenid', 'setUserInfo']),
			...mapActions(['getPhoneNumber']),
			getPhoneNumber(e) {
				if (e.detail.errMsg === 'getPhoneNumber:ok') {
					console.log(e.detail)
					uni.navigateTo({
						url: `../register/index?iv=${e.detail.iv}&encryptedData=${e.detail.encryptedData}&sessionKey=${this.sessionKey}`
					})
				}
			},
			Toast(data, duration = 1000) {
				uni.showToast(Object.assign({}, data, {
					duration
				}))
			},
			tologin(provider) {
				const that = this
				// 一键登录已在APP onLaunch的时候进行了预登陆，可以显著提高登录速度。登录成功后，预登陆状态会重置
				uni.login({
					provider: 'weixin',
					success: (res) => {
						console.log('login success:', res);
						this.Toast({
							title: '登录成功'
						})
						
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {				
								that.weixinUserInfo = infoRes.userInfo
								console.log(that.weixinUserInfo)
							}
						});
	
						// 更新保存在 store 中的登录状态
						this.login(provider.id);
						
						that.$request({
							url: '/wechat/getUserInfoByCode',
							method: 'POST',
							data: { code: res.code } ,
						}).then((res) => {
							console.log(res)
			
							if (res.resultCode === 200) {
								this.setUserInfo(res.data)
								this.setOpenid(res.data.openId)
							} else if (res.errorCode === 431) {
								this.isNew = true
								this.sessionKey = res.sessionKey
								this.setOpenid(res.openId)
							}
						})
					},
					fail: (err) => {
						console.log('login fail:', err);

						// 一键登录点击其他登录方式
						if (err.code == '30002') {
							uni.closeAuthView();
							this.Toast({
								title: '其他登录方式'
							})
							return;
						}

						// 未开通
						if (err.code == 1000) {
							uni.showModal({
								title: '登录失败',
								content: `${err.errMsg}\n，错误码：${err.code}`,
								confirmText: '开通指南',
								cancelText: '确定',
								success: (res) => {
									if (res.confirm) {
										setTimeout(() => {
											plus.runtime.openWeb('https://ask.dcloud.net.cn/article/37965')
										}, 500)
									}
								}
							});
							return;
						}

						// 一键登录预登陆失败
						if (err.code == '30005') {
							uni.showModal({
								showCancel: false,
								title: '预登录失败',
								content: this.univerifyErrorMsg || err.errMsg
							});
							return;
						}

						// 一键登录用户关闭验证界面
						if (err.code != '30003') {
							uni.showModal({
								showCancel: false,
								title: '登录失败',
								content: JSON.stringify(err)
							});
						}
					},
					complete: () => {
						this.univerifyBtnLoading = false;
					}
				});
			}
		}
	}
</script>

<style>
	.user {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
	}
	
	.login-wrapper {
		width: 80%;
		text-align: center;
		margin: 0 auto;
	}
	
	.login-button {
		margin-top: 20rpx;
	}
	
	.avatar {
		width: 120rpx;
		height: 120rpx;
	}
	
	.username {
		margin-top: 20rpx;
	}
</style>
