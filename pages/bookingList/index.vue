<template>
	<view class="bookingList">
		<block v-if="list.length">
			<uni-list>
				<uni-list-item 
					v-for="(item, index) in list" :title="item.serviceType + ' ' + item.carId" 
					:note="transformTime(+item.createTime)" 
					showArrow  
					thumb-size="base" 
					rightText="详情"
					:key="index"
					clickable
					@click="goDetail(index)"
				/>
			</uni-list>
			<view class="example-body" v-if="">
				<uni-load-more :status="status" />
			</view>
		</block>
		
		<block v-if="!list.length">
			<view class="no-data">
				<text>没有预约信息</text>
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
					url: '/api/v1/booking/query/wx',
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
				uni.navigateTo({
					url: '../bookingDetail/index?data=' + JSON.stringify(this.list[index])
				})
			},
			transformTime(timestamp = +new Date()) {
			    if (timestamp) {
			        var time = new Date(timestamp);
			        var y = time.getFullYear(); //getFullYear方法以四位数字返回年份
			        var M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
			        var d = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
			        return y + '-' + M + '-' + d;
			      } else {
			          return '';
			      }
			}
		}
	}
</script>

<style>
	.bookingList {
		width: 100%;
		min-height: 100%;
		background-color: #FFFFFF;
	}
	
	.no-data {
		text-align: center;
		padding-top: 100rpx;
	}
</style>
