<template>
	<view class="bookingList">
		<view class="search-wrapper">
			<view class="search-item">
				<uni-search-bar  placeholder="车牌搜索" @confirm="searchCarId" cancelButton="none" clearButton="none" />
			</view>
			<view>
				<uni-search-bar  placeholder="品牌搜索" @confirm="searchCarName" cancelButton="none" clearButton="none" />
			</view>
			<view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							办理日期:
						</view>
						<view class="uni-list-cell-db">
							<picker mode="date" :value="bookingDate" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input">{{bookingDate}}</view>
							</picker>
							<button class="date-clear-button" type="default" size="mini" @click="clearDate">清除</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<block v-if="list.length">
			<view v-for="(item, index) in list" :key="index" class="list-item">
				<div class="list_item_header">
					<div>{{ formate(item.serviceType, item.sendMsg) }}</div>
					<div class="status_text">{{item.status}}</div>
				</div>
				<view class="list_item_content">
					<text class="list_item_text">{{item.carId}}</text>
					<text class="list_item_text">{{item.carname}}</text>
					<text class="list_item_text">{{item.carNumber}}</text>
					<text class="list_item_text">{{item.carType}}</text>
					<text class="list_item_text">{{item.bookingDate}}</text>
					<text class="list_item_text">{{item.payStatus}}</text>
				</view>
				<view class="list_item_footer">
					<button class="btn btn-delete" v-if="item.status === '未完成'"  size="mini" @click="deleteConfirm(item.id)">删除</button>
					<!-- <button class="btn btn-update" v-if="item.status === '未完成'" size="mini" @click="goUpdate(index)">修改</button> -->
					<button class="btn btn-detail"  size="mini" @click="goDetail(item.id)">详情</button>
				</view>
			</view>
			<view class="example-body" v-if="">
				<uni-load-more :status="status" />
			</view>
		</block>
		
		<block v-if="hasLogin && !list.length">
			<view class="no-data">
				<text>没有预约信息,下拉刷新试试</text>
			</view>
		</block>
		
		<block v-if="!hasLogin">
			<view class="no-data">
				<text>请先登录</text>
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
	
	function getDate(type) {
		const date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		if (type === 'start') {
			year = year - 10;
		} else if (type === 'end') {
			year = year + 10;
		}
		month = month > 9 ? month : '0' + month;;
		day = day > 9 ? day : '0' + day;

		return `${year}-${month}-${day}`;
	}
	
	export default {
		data () {
			return {
				list: [],
				status: 'more',
				searchCarIdValue: '',
				searchCarNameValue: '',
				bookingDate: '请选择日期',
				startDate: getDate('start'),
				endDate: getDate('end'),
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
			uni.$on('bookingDelete', () => {
				current = 1
				this.fetchData(true)
			})
			
			uni.$on('bookingCreate', () => {
				current = 1
				this.fetchData(true)
			})
			
			uni.$on('bookingUpdate', () => {
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
			current = 1
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
				this.status = 'loading'
				current = +current + 1
				console.log('current', current)
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
			bindDateChange: function(e) {
				this.bookingDate = e.detail.value
				current = 1
				this.fetchData(true)
			},
			clearDate(e) {
				e.stopPropagation()
				this.bookingDate = '请选择日期'
				current = 1
				this.fetchData(true)
			},
			fetchData(refresh, callback) {
				this.$request({
					url: '/api/v1/booking/query/wx',
					method: 'GET',
					data: {
						pageSize: pageSize,
						current: current,
						createBy: this.openid,
						carId: this.searchCarIdValue,
						carname: this.searchCarNameValue,
						bookingDate: this.bookingDate === '请选择日期' ? '' : this.bookingDate
					}
				}).then((res) => {
					if (res.code === 200) {
						const list = refresh ? res.data.list : this.list.concat(res.data.list)
						this.list = list
						pageSize = res.data.pageSize
						current = res.data.current
						count = res.data.count
						this.status = list.length < count ? 'more' : 'noMore'
					} else {
						uni.showToast({title: res.msg, icon: "none",duration: 3000})
					}
					callback && callback()
				})
			},
			goUpdate(index) {
				const item = this.list[index]
				if (!item) return
				if (item.serviceType === '市内过户') {
					uni.navigateTo({
						url: '../guohu/index?data=' + JSON.stringify(item)
					})
				} else {
					uni.navigateTo({
						url: '../qianchu/index?data=' + JSON.stringify(item)
					})
				}
			},
			goDetail(id) {
				uni.navigateTo({
					url: '../bookingDetail/index?id=' + id
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
			},
			formate(serviceType ,sendMsg) {
				if (sendMsg === '否') {
					return serviceType + '(未审核)'
				}
				
				if (sendMsg === 'ok') {
					return serviceType + '(审核通过)'
				}
				
				if (sendMsg === 'fail') {
					return serviceType + '(审核失败)'
				}
			},
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
					url: '/api/v1/booking/' + id,
					method: 'DELETE'
				}).then((res) => {
					if (res.resultCode === 200) {
						uni.showToast({
							title: '删除成功',
							duration: 2000
						})
						
						uni.$emit('bookingDelete')
						
						setTimeout(() => {
							uni.navigateBack()
						}, 1500)
					} else {
						uni.showToast({title: res.errorMsg, icon: "none", duration: 3000})
					}
				})
			}
		}
	}
</script>

<style>
	.bookingList {
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
	
	.date-clear-button {
		position: absolute;
		right: 40rpx;
		top: 10rpx;
	}
</style>
