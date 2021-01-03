<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view style="background:#FFF; padding:50rpx 0;">
				<view class="uni-hello-text uni-center">支付金额</text></view>
				<view class="uni-h1 uni-center uni-common-mt">
					<text class="rmbLogo">￥</text>
					<input class="price" type="digit" :value="price" maxlength="4" @input="priceChange" />
				</view>
			</view>
			<view class="uni-btn-v uni-common-mt">
				<!-- #ifdef MP-WEIXIN -->
				<button type="default" @click="weixinPay" :loading="loading">微信支付</button>
				<!-- #endif -->
			</view>
		</view>
	</view>
	</view>
</template>
<script>
	import {
		mapState
	} from 'vuex'
	
	export default {
		data() {
			return {
				title: 'request-payment',
				loading: false,
				price: 1,
				providerList: []
			}
		},
		computed: {
			...mapState(['openid'])
		},
		onLoad: function() {
			// #ifdef APP-PLUS
			uni.getProvider({
				service: "payment",
				success: (e) => {
					console.log("payment success:" + JSON.stringify(e));
					let providerList = [];
					e.provider.map((value) => {
						switch (value) {
							case 'alipay':
								providerList.push({
									name: '支付宝',
									id: value,
									loading: false
								});
								break;
							case 'wxpay':
								providerList.push({
									name: '微信',
									id: value,
									loading: false
								});
								break;
							default:
								break;
						}
					})
					this.providerList = providerList;
				},
				fail: (e) => {
					console.log("获取支付通道失败：", e);
				}
			});
			// #endif
		},
		methods: {
			async weixinPay() {
				let openid = uni.getStorageSync('openid')
				console.log("发起支付");
				
				let orderInfo = await this.getOrderInfo('wxpay')
				if (!orderInfo) {
					uni.showModal({
						content: '获取支付信息失败',
						showCancel: false
					})
					return
				}
				uni.requestPayment({
					...orderInfo,
					success: (res) => {
						uni.showToast({
							title: "感谢您的赞助!"
						})
					},
					fail: (res) => {
						uni.showModal({
							content: "支付失败,原因为: " + res
								.errMsg,
							showCancel: false
						})
					},
					complete: () => {
						this.loading = false;
					}
				})
			},
			
			getOrderInfo(provider) {
				return new Promise((resolve, reject) => {
					if (!this.price) {
						reject(new Error('请输入金额'))
					}
					//这里服务端基于uniCloud unipay云函数实现，详情参考：https://uniapp.dcloud.net.cn/uniCloud/unipay
					uni.request({
						method: 'POST',
						url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/pay',
						data: {
							provider,
							openid: this.openid,
							totalFee: Number(this.price) * 100, // 转为以分为单位
							// #ifdef APP-PLUS
							platform: 'app-plus',
							// #endif
							// #ifdef MP-WEIXIN
							platform: 'mp-weixin',
							// #endif
						},
						success(res) {
							if (res.data.code === 0) {
								resolve(res.data.orderInfo)
							} else {
								reject(new Error('获取支付信息失败' + res.data.msg))
							}
						},
						fail(err) {
							reject(new Error('请求支付接口失败' + err))
						}
					})
				})
			},
			priceChange(e) {
				console.log(e.detail.value)
				this.price = e.detail.value;
			}
		}
	}
</script>

<style>
	.rmbLogo {
		font-size: 40rpx;
	}

	button {
		background-color: #007aff;
		color: #ffffff;
	}

	.uni-h1.uni-center {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
	}

	.price {
		border-bottom: 1px solid #eee;
		width: 200rpx;
		height: 80rpx;
		padding-bottom: 4rpx;
	}

	.ipaPayBtn {
		margin-top: 30rpx;
	}
</style>
