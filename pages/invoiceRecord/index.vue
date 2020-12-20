<template>
	<view class="invoiceRecord">
		<view class="wrapper">
			<view class="tips">
				<text>信息影响业务办理，请认真填写</text>
			</view>
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">点击上传行驶证</view>
								<view class="uni-uploader-info">1/9</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in imageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
										</view>
									</block>
									<view class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImage"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">点击上传身份证(正面)</view>
								<view class="uni-uploader-info">1/9</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in imageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
										</view>
									</block>
									<view class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImage"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">点击上传登记证(1-2页 原车主页)</view>
								<view class="uni-uploader-info">1/9</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in imageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
										</view>
									</block>
									<view class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImage"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">点击上传声明照</view>
								<view class="uni-uploader-info">1/9</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in imageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
										</view>
									</block>
									<view class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImage"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head upload-header">
								<view class="uni-uploader-title">点击上传增值税发票(公司车需要)</view>
								<view class="uni-uploader-info">1/9</view>
							</view>
							<view class="uni-uploader-body upload-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in imageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
										</view>
									</block>
									<view class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImage"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="uni-form-item uni-column">
					<view class="title">迁入地：</view>
					<view>
						<picker
							mode="multiSelector"
							@change="bindMultiPickerChange"
							@columnchange="bindMultiPickerColumnChange"
							:value="multiIndex"
							:range="multiArray"
						>
							<view class="picker">
								当前选择：{{multiArray[0][multiIndex[0]]}} > {{multiArray[1][multiIndex[1]]}}
							</view>
						</picker>
					</view>
				</view>
				<view class="uni-form-item uni-column form-item">
					<view class="title">身份证号码：</view>
					<input class="uni-input" name="idCard" :value="idCardNum" placeholder="上传身份证照片后自动填写" disabled="true"/>
				</view>
				
				<view class="uni-form-item uni-column">
					<view class="title">开票金额：</view>
					<input class="uni-input" name="nickname" placeholder="请输入开票金额" />
				</view>
				<button form-type="submit" type="default" :disabled="!idCardNum.length" >提 交</button>
			</form>
		</view>
	</view>
</template>

<script>
	const addressArr = require('./address.js')
	import { aa } from './test.js'
	
	export default {
		data () {
			return {
				address: [],
				multiArray: [],
				multiIndex: [18, 0],
				oneId: 0,
				twoId: 0,
			}
		},
		mounted() {
			this.initData(); //页面一加载调用赋值
		},
		methods: {
			initData() { //首次加载渲染 第一列 和 第二列数据
				this.$request({
					url: '/api/vi/address',
					method: 'GET'
				}).then((res) => {
					console.log('dd', res)
					if (res.code === 200) {
						this.address = res.data
						const arrOne = res.data.map(item => {
							return item.name; // 此方法将第一列 '名称'分到一个新数组中
						});
						const arrTwo = res.data[18].children.map(item => {
							return item.name; // 此方法将第二列'名称'分到一个新数组中
						});
						this.multiArray[0] = arrOne;
						this.multiArray[1] = arrTwo;
						this.oneId = res.data[18].id;
						this.twoId = res.data[18].children[0].id;
					}
				})
				
			},
	
			//滚动时候触发,
			bindMultiPickerColumnChange(e) {
				console.log(e.detail.column, "e.detail.column表示是第几列表示是第几列")
				if (e.detail.column === 0) {
					this.initSelect(e.detail.value);
					this.multiIndex[0] = e.detail.value;
				} else if (e.detail.column === 1) {
					this.multiIndex[1] = e.detail.value;
					this.twoId = this.address[this.multiIndex[0]].children[
						this.multiIndex[1]
					].id;
				}
				console.log(this.oneId, "打印第一列id");
				console.log(this.twoId, "打印第二列id");
			},
			// 定义一个传入对应的'下标'为了拿到第一列id 和 第二列的name和id的方法
			initSelect(index) {
				this.oneId = this.address[index].id; //拿到第一列id
				this.multiIndex[1] = 0; //将右边的数组的下标变回第一个显示
				this.$set(this.multiArray, 1, []); //清空对应右边数组的数据
				if (this.address[index].children.length == 0) {
					console.log("如果右边长度等于0,那么清掉右边ID");
					this.twoId = "";
				} else {
					const arrTwo = this.address[index].children.map(item => {
						return item.name; // 将第一列的children的数组遍历 name返回到一个新数组接收
					});
					this.$set(this.multiArray, 1, arrTwo); //重新 赋值到新的数组里
					this.twoId = this.address[index].children[0].id; //那么对应的第二列的第index个id也拿到了
				}
			},
			// 点击确定时触发,这里点击处理自己的业务,应该就是拿到两个个id去请求
			bindMultiPickerChange(e) {
				console.log(this.oneId);
				console.log(this.twoId);
				// uni.request({
				//     url: ``,
				// })
			},
		}
	}
</script>

<style>
	.invoiceRecord {
		width: 100%;
		background-color: #FFFFFF;
		padding-bottom: 30rpx;
	}
	
	.wrapper {
		width: 90%;
		margin: 0 auto;
	}
	
	.demo {
		width: 200rpx;
		height: 100rpx;
	}
	
	.tips {
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
	}
	
	.upload-header {
		margin-top: 10rpx;
	}
	
	.upload-body {
		margin-top: 0;
		padding-bottom: 15rpx;
	}
	
	.form-item {
		position: relative;
	}
	
	.form-item::before {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
</style>
