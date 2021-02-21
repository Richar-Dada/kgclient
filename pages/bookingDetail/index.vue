<template>
	<view>
		<uni-group v-if="detail.serviceType === '迁出提档'" title="原车主信息" top="0">
			<uni-list v-if="detail.serviceType === '迁出提档'">
				<uni-list-item title="原车主姓名" :rightText="detail.oldCarOwner"/>
				<uni-list-item v-if="detail.oldCarDocumentNumber" title="原车主身份证号码" :rightText="detail.oldCarDocumentNumber"/>
			</uni-list>
		</uni-group>
		
		<uni-group v-if="detail.serviceType === '迁出提档'" title="新车主信息" top="0">
			<view v-if="detail.newIdCardUrl" class="uni-center" style="background:#FFFFFF; font-size:0;">
				<image class="image" mode="widthFix" :src="detail.newIdCardUrl" />
			</view>
			<uni-list v-if="detail.serviceType === '迁出提档'">
				<uni-list-item title="新车主姓名" :rightText="detail.newCarOwner"/>
				<uni-list-item title="新车主身份证号码" :rightText="detail.newCarDocumentNumber"/>
			</uni-list>
		</uni-group>
		
		<uni-group title="行驶证信息" top="0">
			<view v-if="detail.vehicleLicenseUrl" class="uni-center" style="background:#FFFFFF; font-size:0;">
				<image class="image" mode="widthFix" :src="detail.vehicleLicenseUrl" />
			</view>
			<uni-list>
				<uni-list-item title="车牌号码" :rightText="detail.carId"/>
				<uni-list-item title="车架号" :rightText="detail.carNumber"/>
				<uni-list-item title="汽车品牌" :rightText="detail.carname"/>
				<uni-list-item title="汽车类型" :rightText="detail.carType"/>
			</uni-list>
		</uni-group>
		
		<uni-group title="其他信息" top="0">
			<view v-if="detail.valicUrl" class="uni-center" style="background:#FFFFFF; font-size:0;">
				<image class="image" mode="widthFix" :src="detail.valicUrl" />
			</view>
			<uni-list>
				<uni-list-item title="业务类型" :rightText="detail.serviceType"/>
				<uni-list-item title="预约时间" :rightText="detail.bookingDate + detail.bookingTime"/>
				<uni-list-item v-if="detail.serviceType === '迁出提档'" title="迁入地" :rightText="detail.immigrationAddress"/>
				<uni-list-item title="状态" :rightText="detail.status"/>
				<uni-list-item v-if="detail.failReason" title="失败原因" :rightText="detail.failReason"/>
				<uni-list-item title="备注" :rightText="detail.remark"/>
			</uni-list>
		</uni-group>
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
				id: '',
				detail: ''
			}
		},
		onLoad(option) {
			const id = option.id
			if (id) {
				this.getBookingByid(id)
			}
		},
		methods: {
			getBookingByid(id) {
				uni.showLoading({
					mask: true
				})
				this.$request({
					url: '/api/v1/admin/booking/find/' + id,
					method: 'GET'
				}).then((res) => {
					uni.hideLoading()
					if (res.code === 200) {
						this.detail = res.data
					} else {
						uni.showToast({
							title: res.msg,
							duration: 3000
						})
					}
				})
			},
		}
	}
</script>

<style>
	.image{
		width: 90%;
		margin: 10rpx auto;
	}
	
	.button {
		width: 80%;
		margin: 20rpx auto;
	}
</style>
