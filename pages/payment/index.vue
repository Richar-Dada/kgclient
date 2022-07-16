<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap">
			<view style="background:#FFF; padding:50rpx 0;">
				<view class="uni-hello-text uni-center">支付金额</text></view>
				<view class="uni-h1 uni-center uni-common-mt">
					<text class="rmbLogo">￥</text>
					<input class="price" type="digit" :value="price" maxlength="4" disabled="true" @input="priceChange" />
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
	
	import { baseUrl } from '../../utils/request.js'
	
	export default {
		data() {
			return {
				title: 'request-payment',
				loading: false,
				price: 0,
				providerList: [],
				id: ''
			}
		},
		computed: {
			...mapState(['openid'])
		},
		onLoad: function(option) {
			this.id = option.pid
			if (process.env.NODE_ENV === 'development') {
				this.price = option.payPrice === 50 ? 0.1 : 0.2
			} else {
				this.price = option.payPrice
			}
		},
		methods: {
			async weixinPay() {
				let openid = uni.getStorageSync('openid')
				
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
							title: "支付完成"
						})
						uni.$emit('inovicePay')
						
						setTimeout(() => {
							uni.switchTab({
								url: '../invoiceList/index'
							})
						}, 1000)
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
						url: baseUrl + '/api/v1/wechatpay/createorder',
						data: {
							out_trade_no: this.id,
							body: '发票支付',
							openid: this.openid,
							total_fee: (Number(this.price) * 100).toString(), // 转为以分为单位
						},
						success(res) {
							if (res.data.code === 200) {
								resolve(res.data.data)
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
