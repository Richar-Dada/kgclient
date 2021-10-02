<template>
	<view class="content">
		<scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false">
			<view v-for="(date,index) in dateArr" :key="date" class="date-item" :class="tabIndex==index ? 'date-item-active' : ''" :id="'a' + index" :data-current="index" @click="ontabtap">
				<text class="date-text" :class="tabIndex==index ? 'date-text-active' : ''">{{date}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				tabIndex: 0,
				dateArr: [1, 2, 3, 4, 5, 6]
			}
		},
		onLoad() {

		},
		methods: {
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current
				this.tabIndex = index
			}
		}
	}
</script>

<style>
	.scroll-h {
		width: 750rpx;
		/* #ifdef H5 */
		width:100%;
		/* #endif */
		height: 82rpx;
		flex-direction: row;
		/* #ifndef APP-PLUS */
		white-space: nowrap;
		/* #endif */
		/* flex-wrap: nowrap; */
		/* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
	}
	
	.date-item {
		display: inline-block;
		/* #endif */
		flex-wrap: nowrap;
		width: 148rpx;
		height: 80rpx;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-color: #C0C0C0;
		text-align: center;
		line-height: 80rpx;
		border-right: 1px;
		border-right-style: solid;
		border-right-color: #C0C0C0;
	}
	
	.date-item-active {
		background-color: #3F536E;
		border-bottom-width: 0;
	}
	
	.date-item:last-child {
		border-right-width: 0;
	}
	
	.date-text {
		color: #333333;
		font-size: 18px;
	}
	
	.date-text-active {
		color: #FFFFFF;
	}
</style>
