<template>
	<view class="container">
		<uni-swiper-dot :info="info" current="0" field="content" mode="round" :dots-styles="dotsStyles">
		    <swiper class="swiper-box" autoplay="true">
		        <swiper-item v-for="(item ,index) in info" :key="index">
		            <view class="swiper-item">
						<image :src="item.url" mode="widthFix"></image>
		            </view>
		        </swiper-item>
		    </swiper>
		</uni-swiper-dot>
		<view class="content">
			<form bindsubmit="formSubmit">
				<button type="default" @click="handleButtonClick('guohu')" :disabled="!guohuOpen">市内过户</button>
				<button type="default" @click="handleButtonClick('qianchu')" :disabled="!qianchuOpen" >迁出提档</button>
				<button type="default" @click="handleButtonClick('invoice')" :disabled="!invoiceOpen">车辆鉴定评估 <view class="fapiao_sub">(交易发票)</view> </button>
			</form>
		</view>
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
				info: [{
					url: '/static/images/banner3.jpg'
				}],
				dotsStyles: {
						backgroundColor: 'rgba(0, 0, 0, .3)',
						border: '1px rgba(0, 0, 0, .3) solid',
						color: '#fff',
						selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
						selectedBorder: '1px rgba(0, 0, 0, .9) solid'
				},
				guohuOpen: true,
				qianchuOpen: true,
				invoiceOpen: true,
			}
		},
		onLoad() {
			const userInfo = uni.getStorageSync('userInfo')
			if (userInfo) {
				const userInfoObj = JSON.parse(userInfo)
				this.setUserInfo(userInfoObj)
				this.setOpenid(userInfoObj.openId)
				this.login('weixin')
			}
		},
		onReady() {},
		mounted() {
			console.log('mounted')
			this.$request({
				url: '/api/v1/admin/deadlinestatus',
				method: 'GET'
			})
			.then((res) => {
				if (res.code === 200) {
					const data = res.data
					data.forEach((item) => {
						if (item.type === 'guohu' && item.status === 'off') {
							this.guohuOpen = false
						}
						
						if (item.type === 'qianchu' && item.status === 'off') {
							this.qianchuOpen = false
						}
						
						if (item.type === 'invoice' && item.status === 'off') {
							this.invoiceOpen = false
						}
					})
				}
			})
		},
		computed: {
			...mapState(['openid', 'hasLogin', 'userInfo'])
		},
		methods: {
			...mapMutations(['setOpenid', 'setUserInfo', 'login']),
			goInvoice() {
				console.log('ddd')
				uni.navigateTo({
					url: '../invoiceRecord/index'
				})
			},
			goSchedul(type) {
				uni.navigateTo({
					url: '../schedul/index?type=' + type
				})
			},
			onShareAppMessage() {
			  
			},
			handleButtonClick(key) {
				if (!this.hasLogin) {
					uni.showToast({
						title: '请登录',
						icon: 'none'
					})
					
					return
				}
				
				if(!this.userInfo) {
					uni.showToast({
						title: '请先关联账号',
						icon: 'none'
					})
					
					return
				}
				
				if (key != 'invoice') {
					this.goSchedul(key)
				} else if (key === 'invoice') {
					this.goInvoice()
				}
				
			}
		}
	}
</script>

<style>
	.container {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		font-size: 14px;
		line-height: 24px;
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
	
	.fapiao_sub {
		margin-top: -20rpx;
		padding-bottom: 20rpx;
		color: red;
	}
</style>
