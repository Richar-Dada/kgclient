<template>
	<view>
		<view class="uni-center" style="background:#FFFFFF; font-size:0;">
			<image class="image" mode="widthFix" :src="detail.oldIdCardUrl" />
		</view>
		<uni-list>
			<uni-list-item title="原车主姓名" :rightText="detail.oldOwner"/>
			<uni-list-item title="原车主身份证号码" :rightText="detail.oldOwnerCardDocument"/>
			<uni-list-item title="原车主手机号码" :rightText="detail.oldOwnerPhone"/>
		</uni-list>
		
		<view class="uni-center" style="background:#FFFFFF; font-size:0;">
			<image class="image" mode="widthFix" :src="detail.newIdCardUrl" />
		</view>
		<uni-list>
			<uni-list-item title="新车主姓名" :rightText="detail.newOwner"/>
			<uni-list-item title="新车主身份证号码" :rightText="detail.newOwnerCardDocument"/>
			<uni-list-item title="新车主手机号码" :rightText="detail.newOwnerPhone"/>
		</uni-list>
		
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
		
		<view class="uni-center" style="background:#FFFFFF; font-size:0;">
			<image class="image" mode="widthFix" :src="detail.registerUrl" />
		</view>
		<view class="uni-center" style="background:#FFFFFF; font-size:0;">
			<image class="image" mode="widthFix" :src="detail.statementUrl" />
		</view>
		<view v-if="detail.taxUrl" class="uni-center" style="background:#FFFFFF; font-size:0;">
			<image class="image" mode="widthFix" :src="detail.taxUrl" />
		</view>
		
		<uni-list>
			<uni-list-item title="金额" :rightText="detail.price"/>
			<uni-list-item title="备注" :rightText="detail.remark"/>
		</uni-list>
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
			...mapState(['openid'])
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
						
						setTimeout(() => {
							uni.navigateBack()
						}, 1500)
					} else {
						uni.showToast({title: res.msg, icon:"none"})
					}
				})
			}
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
