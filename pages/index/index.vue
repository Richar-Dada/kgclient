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
				<button type="default" @click="goSchedul('guohu')" :disabled="!guohuOpen">市内过户</button>
				<button type="default" @click="goSchedul('qianchu')" :disabled="!qianchuOpen" >迁出提档</button>
				<button type="default" @click="goInvoice" :disabled="!invoiceOpen">发票服务</button>
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
		onReady() {
			if (!this.hasLogin) {
				uni.navigateTo({
					url: '../login/index'
				})
			}
			const that = this
			uni.getUserInfo({
				provider: 'weixin',
				success: function(infoRes) {				
					that.setWeixinUserInfo(infoRes.userInfo)
					console.log(infoRes.userInfo)
				}
			})
		},
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
			...mapState(['openid', 'hasLogin'])
		},
		methods: {
			...mapMutations(['setWeixinUserInfo']),
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
</style>
