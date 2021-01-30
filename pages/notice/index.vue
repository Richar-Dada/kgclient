<template>
	<view class="notice">
		<scroll-view  class="textWrapper">
			<text class="title-text">受理范围：</text>
			<text class="block">9座以下（含9座）车辆类型为小型客车（含新能源车）的国产合资及海关进口车辆可办理市内过户和迁出提档业务。</text>
			<text class="block mg30">使用性质为非营运、营转非、出租转非、预约出租客运、预约出租转非的小型客车可办理市内过户和迁出提档业务</text>
			<text class="block red">PS：办理业务过程不能改变车辆的使用性质、 另：预约出租客运性质的车辆办理业务需有交委核发的保留或注销通知书。</text>
			<text class="block mg30">车辆类型为轻型、微型货车（含新能源）的国产或进口货车都可办理市内过户和迁出业务。</text>
			<text class="block red">PS：货车总质量大于3500 Kg的不能办理迁出辖区业务。货车燃油牌排放标准为国四以下（不含国四）不能办理省内迁出业务。</text>
			<text class="block mg30">使用性质为非营运、营转非、货运的轻型、微型货车可办理市内过户和迁出提档业务</text>
			<text class="block red">PS：货运性质车辆转移登记时可变更性质为“营转非”</text>
			<text class="block mg30">办理车辆的所有人身份证证明号码必须为与原车主证件号码一致，站点无法办理变更业务，不符合的需要先到分所办理变更手续一个工作日后再预约本站。</text>
			<text class="block mg30">预约本站迁出业务，请在上一宗车管业务（过户、变更、补证、解押，其他站点预约）办结后20天再预约。</text>
			<text class="block red">PS：市内过户业务不受此影响</text>
			<text class="title-text mg30">预约时间：</text>
			<text class="block">全天24小时都可预约次工作日的市内过户业务。</text>
			<text class="block">当天10:00前可预约3个工作日后的迁出提档业务。</text>
			
			<text class="title-text mg30">所需资料：</text>
			<text class="block">1.车辆行驶证<text class="red">市内过户：年审有效期不能少于3个工作日；迁出提档：年审有效期到次月）</text>（</text>
			<text class="block">2.车辆登记证<text class="red">（身份证明信息需和证件一致，需要升位或三证合一的请先到分所办理）</text></text>
			<text class="block">3.新车主身份证原件和复印件<text class="red">（市内过户：证件需要有5个工作日有效期;  迁出业务需要有效期到次月）</text></text>
			<text class="block">4.指标书<text class="red">（需要有3个工作日有效期，迁入地没有限号标准则不需提供）</text></text>
			<text class="block">5.非迁入地户口需要居住证原件和复印件<text class="red">（一个月以上有效期；证件信息模糊需提供居住信息表）</text></text>
			<text class="block">6.若新车主是单位/公司，需要提供：</text>
			<text class="block ml20">①营业执照原件<text class="red">（证件需要有1个月以上有效期）</text></text>
			<text class="block ml20">②营业执照复印件<text class="red">复印件需盖单位公章）</text>（</text>
			<text class="block ml20">③委托书<text class="red">（需盖单位公章及委托时间在有效期内）</text></text>
			<text class="block ml20">④被委托人身份证原件和复印件<text class="red">（证件需要有5个工作日有效期）</text></text>
			<text class="block">7.若原车主是单位/公司需要提供<text class="red">业务委托书（盖公章）</text>和<text class="red">原单位开具的增值税发票</text>。</text>
		</scroll-view>
		<button class="button notice-button mg30" type="default" @click="goBack">知晓并关闭</button>
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
				uni.navigateBack()
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
</style>
