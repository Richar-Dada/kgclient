<template>
	<view class="tabs">
		<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
			<view v-for="(tab,index) in tabBars" :key="tab.date" class="uni-tab-item" :id="'a' + index" :data-current="index" @click="ontabtap">
				<text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.date}}</text>
			</view>
		</scroll-view>
		<view class="line-h"></view>
		<swiper :current="tabIndex" class="swiper-box" style="flex: 1;" :duration="300" @change="ontabchange">
			<swiper-item class="swiper-item" v-for="(tab,index1) in newsList" :key="index1">
				<view class="card" v-if="tab.data.length" :key="index3" v-for="(item, index3) in tab.data" @click="goBooking(item)">{{item.duration}}</view>
				<text v-if="tab.msg" class="error-msg">{{tab.msg}}</text>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import Base64 from './base64.js'
	
	const base64 = new Base64()
	
	export default {
		data() {
			return {
				type: '',
				invoiceId: '',
				tabIndex: 0,
				scrollInto: '',
				tabBars: [],
				newsList: []
			}
		},
		onLoad(option) {
			this.type = option.type
			this.invoiceId = option.invoiceId
			
			this.getSchedul()
		},
		methods: {
			getSchedul() {
				uni.showLoading({title: '正在请求数据...', mask: true})
				this.$request({
					url: '/api/v1/getschedul?type=' + this.type,
					method: 'GET',
				}).then((res) => {
					if (res.code === 200) {
						this.tabBars = res.data
						setTimeout(()=>{
						  this.tabBars.forEach((tabBar) => {
							  this.newsList.push({
								  data: [],
								  msg: '',
								  isLoading: false,
								  refreshText: "",
								  loadingText: '加载更多...'
							  });
						  });
						  this.getList(0)
						}, 350)
					} else {
						uni.showToast({ title: res.errorMsg, icon:"none", duration: 3000 });
					}
				})
			},
			getList(index) {
				const activeDate = this.tabBars[index].fullDate
				uni.showLoading({ title: '正在请求数据...', mask:true })
				this.$request({
					url: '/api/v1/schedul/' + base64.encode(activeDate) + '&' + this.type,
					method: 'GET',
				}).then((res) => {
					uni.hideLoading()
					if (res.resultCode === 200) {
						this.newsList[index].data = res.schedulList
					} else {
						this.newsList[index].msg = res.errorMsg
					}
				})
			},
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.switchTab(index);
			},
			ontabchange(e) {
				let index = e.target.current || e.detail.current;
				this.switchTab(index);
			},
			switchTab(index) {
				if (this.newsList[index].data.length === 0) {
					this.getList(index);
				}

				if (this.tabIndex === index) {
					return;
				}

				this.tabIndex = index
				this.scrollInto = 'a' + index
			},
			goBooking(item) {
				const date = this.tabBars[this.tabIndex].fullDate + ' ' + item.duration
				if (this.type === 'guohu') {
					uni.redirectTo({
						url: '../guohu/index?date=' + date + '&invoiceId=' + this.invoiceId
					})
				} else {
					uni.redirectTo({
						url: '../qianchu/index?date=' + date + '&invoiceId=' + this.invoiceId
					})
				}
				
			}
		}
	}
</script>

<style>
	.container {
		font-size: 14px;
		line-height: 24px;
	}
	.content {
		width: 60%;
		margin: 20rpx auto;
	}
	button {
		margin-top: 30rpx;
	}
	image {
		width: 100%;
	}
	
	 /* #ifndef APP-PLUS */
	page {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	.tabs {
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		background-color: #ffffff;
		/* #ifdef MP-ALIPAY || MP-BAIDU */
		height: 100vh;
		/* #endif */
	}

	.scroll-h {
		width: 750rpx;
		/* #ifdef H5 */
		width:100%;
		/* #endif */
		height: 80rpx;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
		/* flex-wrap: nowrap; */
		/* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
	}

	.line-h {
		height: 1rpx;
		background-color: #cccccc;
	}

	.uni-tab-item {
		/* #ifndef APP-PLUS */
		display: inline-block;
		/* #endif */
		flex-wrap: nowrap;
		padding-left: 34rpx;
		padding-right: 34rpx;
	}

	.uni-tab-item-title {
		color: #555;
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		flex-wrap: nowrap;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
	}

	.uni-tab-item-title-active {
		color: #007AFF;
	}

	.swiper-box {
		flex: 1;
		height: 100vh;
	}

	.swiper-item {
		flex: 1;
		flex-direction: row;
	}

	.scroll-v {
		flex: 1;
		/* #ifndef MP-ALIPAY */
		flex-direction: column;
		/* #endif */
		width: 750rpx;
		width:100%;
	}

	.update-tips {
		position: absolute;
		left: 0;
		top: 41px;
		right: 0;
		padding-top: 5px;
		padding-bottom: 5px;
		background-color: #FDDD9B;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.update-tips-text {
		font-size: 14px;
		color: #ffffff;
	}

	.refresh {
		width: 750rpx;
		width:100%;
		height: 64px;
		justify-content: center;
	}

	.refresh-view {
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
	}

	.refresh-icon {
		width: 30px;
		height: 30px;
		transition-duration: .5s;
		transition-property: transform;
		transform: rotate(0deg);
		transform-origin: 15px 15px;
	}

	.refresh-icon-active {
		transform: rotate(180deg);
	}

	.loading-icon {
		width: 20px;
		height: 20px;
		margin-right: 5px;
		color: #999999;
	}

	.loading-text {
		margin-left: 2px;
		font-size: 16px;
		color: #999999;
	}

	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 10px;
		padding-bottom: 10px;
		text-align: center;
	}

	.loading-more-text {
		font-size: 28rpx;
		color: #999;
	}
	
	.card {
		height: 200rpx;
		background-color: #007aff;
		line-height: 200rpx;
		text-align: center;
		color: #FFFFFF;
		margin-top: 10rpx;
		margin-left: 10rpx;
		margin-right: 10rpx;
	}
	
	.error-msg {
		display: block;
		margin: 100rpx auto;
		text-align: center;
		
	}
</style>
