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
			
		<button v-if="detail.isPay === '0'" class="button" type="default" @click="goPayment">支付</button>
		<button class="button" type="warn" @click="deleteConfirm(detail.id)">删除</button>
		
		
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
				detail: ''
			}
		},
		computed: {
			...mapState(['openid']),
			registerImageList: () => {
				if(!this || !this.detail) return []
				return this.detail.registerUrl.split(',')
			}
		},
		onLoad(option) {
			this.detail = JSON.parse(option.data)
		},
		methods: {
			deleteConfirm(id) {
				const that = this
				uni.showModal({
				    content: '确定要删除吗？',
				    success: function (res) {
				        if (res.confirm) {
				            that.del(id)
				        } else if (res.cancel) {
				        }
				    }
				});
			},
			del(id) {
				this.$request({
					url: '/api/v1/admin/invoice/deletebyid',
					method: 'DELETE',
					data: {
						id
					}
				}).then((res) => {
					if (res.code === 200) {
						uni.showToast({
							title: '删除成功'
						})
						
						uni.$emit('invoiceDelete')
						
						setTimeout(() => {
							uni.navigateBack()
						}, 1500)
					} else {
						uni.showToast({title: res.msg, icon:"none"})
					}
				})
			},
			goPayment() {
				uni.navigateTo({
					url: '../payment/index?pid=' + this.detail.pid
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
