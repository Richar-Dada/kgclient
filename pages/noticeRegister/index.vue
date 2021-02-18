<template>
	<view class="notice">
		<scroll-view  class="textWrapper">
			<text class="block">欢迎您使用空港汽车城小程序！</text>
			<text class="block mg30"> 空港汽车城小程序根据《用户服务协议》为您提供服务。</text>
			<text class="block mg30">为使用空港汽车城服务，请您务必审慎阅读、充分理解本协议各项条款内容，特别是免除或者限制责任的条款、对用户权利进行限制的条款等。限制、免责或者其他涉及您重大权益的条款可能以加粗形式提示您重点注意。</text>
			<text class="block mg30"> 除非您已充分阅读、理解并接受本协议所有条款，否则您无权注册、登录或使用空港汽车城服务。您点击“登录（具体措辞详见注册页面）”或您进行注册、使用、获取用户账号登录及使用相关服务的行为表示接受本协议的，均视为您已阅读并同意签署本协议。</text>
			<text class="block mg30">您有违反本协议的任何行为时，空港汽车城有权根据您违反约定的情形单方采取限制、中止或终止向您提供服务等措施，并有权追究您的相关责任。</text>
			<text class="block mg30 bold">一、用户注册时必须上传用户本人真实有效身份信息</text>
			<text class="block mg30 bold">二、预约业务所上传的资料均以合法渠道获得、为机动车所有的真实意愿</text>
			<text class="block mg30 bold">三、不弄虚作假，不改图、不修图，若因上传资料虚假或有误引起的所有责任由小程序账号拥有者承担</text>
			<text class="block mg30">本协议自您同意勾选并成功注册为空港汽车城小程序用户之日生效，除非空港汽车城终止本协议，否则本协议始终有效。</text>
		</scroll-view>
		<button class="button notice-button mg30" type="default" @click="goBack">已阅读并同意勾选</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			goBack() {
				uni.$emit('hasReadNotice')
				setTimeout(() => {
					uni.navigateBack()
				}, 300)
			},
		}
	}
</script>

<style>
	.notice{
		width: 100vw;
		background-color: #FFFFFF;
		padding: 30rpx 0;
	}
	
	text {
		font-size: 26rpx;
	}
	
	.textWrapper {
		width: 90%;
		margin: 0 auto;
	}
	
	.notice-button {
		width: 90%;
		margin: 0 auto;
	}
	
	.title-text {
		display: block;
		font-size: 42rpx;
		font-weight: bold;
	}
	
	.block {
		display: block;
	}
	
	.red {
		color: red;
	}
	
	.mg30 {
		margin-top: 30rpx;
	}
	
	.ml20 {
		margin-left: 20rpx;
	}
	
	.bold {
		font-weight: bold;
	}
</style>
