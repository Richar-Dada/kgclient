<template>
	<view class="invoiceList">
		<block v-if="list.length">
			<uni-list>
				<uni-list-item 
					v-for="(item, index) in list" :title="item.carId + ' ' + item.carname" 
					:note="format(item)" 
					showArrow  
					thumb-size="base" 
					rightText="详情"
					:key="index"
					clickable
					@click="goDetail(index)"
				/>
			</uni-list>
			<view class="example-body">
				<uni-load-more :status="status" />
			</view>
		</block>
		
		<block v-if="!list.length">
			<view class="no-data">
				<text>没有发票信息</text>
			</view>
		</block>
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
				status: 'more'
			}
		},
		computed: {
			...mapState(['openid'])
		},
		onLoad() {
			this.fetchData(false)
			
			uni.$on('invoiceDelete', () => {
				current = 1
				this.fetchData(true)
			})
			
			uni.$on('inoviceCreate', () => {
				current = 1
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
			if (this.list >= count) {
				this.loadMoreText = "没有更多数据了!"
				return;
			}
			setTimeout(() => {
				this.status = 'loading'
				this.fetchData(false, () => {
				});
			}, 300);
		},
		methods: {
			fetchData(refresh, callback) {
				this.$request({
					url: '/api/v1/admin/invoice/query/wx',
					method: 'GET',
					data: {
						pageSize: pageSize,
						current: current,
						createBy: this.openid
					}
				}).then((res) => {
					console.log('res', res)
					if (res.code === 200) {
						const list = refresh ? res.data.list : this.list.concat(res.data.list)
						this.list = list
						pageSize = res.data.pageSize
						current = res.data.current
						count = res.data.count
						this.status = list.length < count ? 'more' : 'noMore'
					} else {
						uni.showToast({title: res.msg, icon:"none"})
					}
					callback && callback()
				})
			},
			goDetail(index) {
				console.log('index', index)
				uni.navigateTo({
					url: '../invoiceDetail/index?data=' + JSON.stringify(this.list[index])
				})
			},
			format(record) {
				const date = record.createAt.split(' ')[0]
				const payStatus = record.isPay === '0' ? '未支付' : '已支付'
				return date + '     ' + record.status + '     ' + payStatus
			}
		}
	}
</script>

<style>
	.invoiceList {
		width: 100%;
		min-height: 100%;
		background-color: #FFFFFF;
	}
	
	.no-data {
		text-align: center;
		padding-top: 100rpx;
	}
</style>
