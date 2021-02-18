<template>
	<view class="invoiceList">
		<view class="search-wrapper">
			<view class="search-item">
				<uni-search-bar  placeholder="车牌搜索" @confirm="searchCarId" cancelButton="none" clearButton="none" />
			</view>
			<view>
				<uni-search-bar  placeholder="品牌搜索" @confirm="searchCarName" cancelButton="none" clearButton="none" />
			</view>
		</view>
		<block v-if="list.length">
			<view v-for="(item, index) in list" :key="index" class="list-item">
				<div class="list_item_header">
					<div>发票单</div>
					<div class="status_text">{{item.status}}</div>
				</div>
				<view class="list_item_content">
					<text class="list_item_text">{{item.carId}}</text>
					<text class="list_item_text">{{item.carname}}</text>
					<text class="list_item_text">{{item.carNumber}}</text>
					<text class="list_item_text">{{item.carType}}</text>
					<text class="list_item_text">{{item.createAt}}</text>
					<text class="list_item_text">¥ {{item.price}}</text>
				</view>
				<view class="list_item_footer">
					<button class="btn btn-delete" v-if="item.status === '未完成' && item.isPay === '0'"  size="mini" @click="deleteConfirm(item.id)">删除</button>
					<button class="btn btn-pay" v-if="item.isPay === '0'" size="mini" @click="goPayment(item.pid)">支付</button>
					<button class="btn btn-detail" type="default" v-if="!item.booking"  size="mini" @click="gobooking(item.id)">预约</button>
					<button class="btn btn-update" v-if="item.status === '未完成'" size="mini" @click="goUpdate(index)">修改</button>
					<button class="btn btn-detail"  size="mini" @click="goDetail(item.id)">详情</button>
				</view>
			</view>
			<view class="example-body">
				<uni-load-more :status="status" />
			</view>
		</block>
		
		<block v-if="hasLogin && !list.length">
			<view class="no-data">
				<text>没有发票信息,下拉刷新试试</text>
			</view>
		</block>
		
		<block v-if="!hasLogin">
			<view class="no-data">
				<text>请先登录</text>
			</view>
		</block>
		
		<uni-popup id="dialogInput" ref="dialogInput" type="center">
			<view class="business-panel">
				<uni-forms labelWidth="105">
					<uni-forms-item name="serviceType" label="类型:">
						<uni-data-checkbox v-model="serviceType" :localdata="serviceTypeData"></uni-data-checkbox>
					</uni-forms-item>
					<button class="button" type="default" @click="serviceConfirm">确定</button>
				</uni-forms>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	
	let count = 0
	let pageSize = 15
	let current = 1
	
	export default {
		data () {
			return {
				list: [],
				status: 'more',
				serviceType: '',
				invoiceId: '',
				serviceTypeData: [{
					text: '过户',
					value: 'guohu'
				},{
					text: '迁出',
					value: 'qianchu'
				}],
				searchCarIdValue: '',
				searchCarNameValue: ''
			}
		},
		computed: {
			...mapState(['openid', 'hasLogin'])
		},
		onLoad() {
			if (!this.hasLogin) return
			
			this.fetchData(false)
			
		},
		mounted() {
			uni.$on('invoiceDelete', () => {
				current = 1
				this.fetchData(true)
			})
			
			uni.$on('inoviceCreate', () => {
				current = 1
				this.fetchData(true)
			})
			
			uni.$on('inoviceUpdate', () => {
				current = 1
				this.fetchData(true)
			})
			
			uni.$on('inovicePay', () => {
				current = 1
				this.fetchData(true)
			})
			
			uni.$on('logout', () => {
				this.list = []
			})
			
			uni.$on('login', () => {
				this.fetchData(true)
			})
		},
		
		onPullDownRefresh() {
			this.fetchData(true, () => {
				uni.stopPullDownRefresh()
			})
		},
		onReachBottom() {
			console.log("onReachBottom");
			if (this.list.length >= count) {
				this.loadMoreText = "没有更多数据了!"
				return;
			}
			setTimeout(() => {
				current += 1
				this.status = 'loading'
				this.fetchData(false, () => {
				});
			}, 300);
		},
		methods: {
			searchCarId(res) {
				console.log(res)
				this.searchCarIdValue = res.value
				this.fetchData(true)
			},
			searchCarName(res) {
				this.searchCarNameValue = res.value
				this.fetchData(true)
			},
			gobooking(id) {
				this.invoiceId = id
				this.$refs.dialogInput.open()
			},
			serviceConfirm() {
				if(!this.serviceType) {
					uni.showToast({
						title: '请选择类型'
					})
					return
				}
				
				if (this.serviceType === 'guohu') {
					uni.navigateTo({
						url: '../schedul/index?type=guohu&invoiceId=' + this.invoiceId
					})
					this.$refs.dialogInput.close()
				}
				
				if (this.serviceType === 'qianchu') {
					uni.navigateTo({
						url: '../schedul/index?type=qianchu&invoiceId=' + this.invoiceId
					})
					this.$refs.dialogInput.close()
				}
			},
			fetchData(refresh, callback) {
				this.$request({
					url: '/api/v1/admin/invoice/query/wx',
					method: 'GET',
					data: {
						pageSize: pageSize,
						current: current,
						createBy: this.openid,
						carId: this.searchCarIdValue,
						carname: this.searchCarNameValue
					}
				}).then((res) => {
					if (res.code === 200) {
						const list = refresh ? res.data.list : this.list.concat(res.data.list)
						this.list = list
						pageSize = res.data.pageSize
						current = res.data.current
						count = res.data.count
						this.status = list.length < count ? 'more' : 'noMore'
						console.log(this.status)
					} else {
						uni.showToast({title: res.msg, icon: "none", duration: 3000})
					}
					callback && callback()
				})
			},
			goDetail(id) {
				uni.navigateTo({
					url: '../invoiceDetail/index?id=' + id
				})
			},
			goUpdate(index) {
				uni.navigateTo({
					url: '../invoiceRecord/index?data=' + JSON.stringify(this.list[index])
				})
			},
			format(record) {
				const date = record.createAt.split(' ')[0]
				const payStatus = record.isPay === '0' ? '未支付' : '已支付'
				return date + '     ' + record.status + '     ' + payStatus
			},
			deleteConfirm(id) {
				const that = this
				uni.showModal({
				    content: '确定要删除吗？',
				    success: function (res) {
				        if (res.confirm) {
				            that.del(id)
				        }
				    }
				});
			},
			del(id) {
				uni.showLoading()
				this.$request({
					url: '/api/v1/admin/invoice/deletebyid',
					method: 'DELETE',
					data: {
						id
					}
				}).then((res) => {
					uni.hideLoading()
					if (res.code === 200) {
						uni.showToast({
							title: '删除成功'
						})
						this.fetchData(true)
					} else {
						uni.showToast({title: res.msg, icon:"none", duration: 3000})
					}
				})
			},
			goPayment(pid) {
				uni.navigateTo({
					url: '../payment/index?pid=' + pid
				})
			},
		}
	}
</script>

<style>
	.invoiceList {
		width: 100%;
		min-height: 100%;
	}
	
	.no-data {
		text-align: center;
		padding-top: 100rpx;
	}
	
	.search-wrapper {
		width: 100%;
		margin-bottom: 20rpx;
	}
	
	.search-item {
		width: 50%;
		float: left;
	}
	
	.list-item {
		margin-left: 20rpx;
		margin-right: 20rpx;
		background-color: #FFFFFF;
		height: 320rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
	}
	
	.list_item_header {
		height: 80rpx;
		line-height: 80rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
	}
	
	.list_item_content {
		display: flex;
		flex-wrap: wrap;
		border-top: 1px solid #e5e5e5;
		border-bottom: 1px solid #e5e5e5;
		padding: 20rpx;
	}
	
	.list_item_text {
		width: 50%;
		font-size: 20rpx;
	}
	
	
	.list_item_footer {
		padding: 10rpx;
		display: flex;
		justify-content: flex-end;
	}
	
	.btn {
		background-color: #FFFFFF;
		border-radius: 15px;
		margin-left: 20rpx;
		font-size: 20rpx;
		margin-right: 0;
		color: #333333;
		border: 1px solid #e5e5e5;
		padding: 0 10px !important;
	}
	
	.status_text {
		color: #007aff;
	}
	
	.business-panel {
		border-radius: 5px;
		background-color: #FFFFFF;
	}
</style>
