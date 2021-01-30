<template>
	<view>
		<uni-group title="原车主信息" top="0">
			<view class="uni-center" style="background:#FFFFFF; font-size:0;">
				<image class="image" mode="widthFix" :src="detail.oldIdCardUrl" />
			</view>
			<uni-list>
				<uni-list-item title="姓名" :rightText="detail.oldOwner"/>
				<uni-list-item title="身份证号码" :rightText="detail.oldOwnerCardDocument"/>
				<uni-list-item title="手机号码" :rightText="detail.oldOwnerPhone"/>
				<uni-list-item title="地址" :rightText="detail.oldOwnerAddress"/>
			</uni-list>
		</uni-group>
		
		
		<uni-group title="新车主信息" top="0">
			<view class="uni-center" style="background:#FFFFFF; font-size:0;">
				<image class="image" mode="widthFix" :src="detail.newIdCardUrl" />
			</view>
			<uni-list>
				<uni-list-item title="姓名" :rightText="detail.newOwner"/>
				<uni-list-item title="身份证号码" :rightText="detail.newOwnerCardDocument"/>
				<uni-list-item title="手机号码" :rightText="detail.newOwnerPhone"/>
				<uni-list-item title="地址" :rightText="detail.newOwnerAddress"/>
			</uni-list>
		</uni-group>
		
		<uni-group title="行驶证信息" top="0">
			<view class="uni-center" style="background:#FFFFFF; font-size:0;">
				<image class="image" mode="widthFix" :src="detail.vehicleLicenseUrl" />
			</view>
			<uni-list>
				<uni-list-item title="注册地" :rightText="detail.register"/>
				<uni-list-item title="车牌号码" :rightText="detail.carId"/>
				<uni-list-item title="车架号" :rightText="detail.carNumber"/>
				<uni-list-item title="汽车品牌" :rightText="detail.carname"/>
				<uni-list-item title="汽车类型" :rightText="detail.carType"/>
			</uni-list>
		</uni-group >
		
		<uni-group title="车辆注册信息" top="0">
			<view class="uni-center" style="background:#FFFFFF; font-size:0;">
				<image v-for="(url, index) in registerImageList" :key="index" class="image" mode="widthFix" :src="url" />
			</view>
			<uni-list>
				<uni-list-item title="登记号" :rightText="detail.registerNumber"/>
			</uni-list>
		</uni-group >	
			
		<uni-group title="声明照" top="0">	
			<view class="uni-center" style="background:#FFFFFF; font-size:0;">
				<image class="image" mode="widthFix" :src="detail.statementUrl" />
			</view>
		</uni-group >
		
		<uni-group v-if="detail.taxUrl" title="增值税发票照片" top="0">	
			<view v-if="detail.taxUrl" class="uni-center" style="background:#FFFFFF; font-size:0;">
				<image class="image" mode="widthFix" :src="detail.taxUrl" />
			</view>
		</uni-group >
		
		<uni-group title="其他信息" top="0">	
			<uni-list>
				<uni-list-item title="金额" :rightText="detail.price + '元'"/>
				<uni-list-item title="状态" :rightText="detail.status"/>
				<uni-list-item title="支付状态" :rightText="detail.isPay === '0' ? '未支付' : '已支付'"/>
				<uni-list-item title="备注" :rightText="detail.remark"/>
			</uni-list>
		</uni-group >
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	
	export default {
		data () {
			return {
				detail: '',
				registerImageList: []
			}
		},
		computed: {
			...mapState(['openid'])
		},
		onLoad(option) {
			const id = option.id
			if (id) {
				this.getInvoiceByid(id)
			}
			
		},
		methods: {
			getInvoiceByid(id) {
				uni.showLoading({
					mask: true
				})
				this.$request({
					url: '/api/v1/admin/invoice/find/' + id,
					method: 'GET'
				}).then((res) => {
					uni.hideLoading()
					if (res.code === 200) {
						this.detail = res.data
						if (this.detail.registerUrl) {
							this.registerImageList = this.detail.registerUrl.split(',')
						}
					} else {
						uni.showToast({
							title: res.msg,
							duration: 3000
						})
					}
				})
			},
			
			goRefund() {
				this.$request({
					url: '/api/v1/wechatpay/createRefund',
					method: 'POST',
					data: {
						out_trade_no: this.detail.pid,
						openid: this.openid
					}
				}).then((res) => {
					if (res.code === 200) {
						uni.showToast({
							title: '申请退款成功',
							duration: 2000
						})
					} else {
						uni.showToast({title: res.msg, icon:"none", duration: 3000})
					}
				})
			}
		}
	}
</script>

<style>
	.image{
		width: 90%;
		height: 300rpx;
		margin: 10rpx auto;
	}
	
	.button {
		width: 80%;
		margin: 20rpx auto;
	}
	
</style>
