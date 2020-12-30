<template>
	<view class="user">
		<view style="background:#FFF; padding:40rpx;" class="login-wrapper">
			<block>
				<view class="uni-center" style="background:#FFFFFF; font-size:0;">
					<image class="avatar" mode="widthFix" :src="weixinUserInfo.avatarUrl" />
				</view>
				<text class="uni-hello-text uni-center username">{{ weixinUserInfo.nickName }}</text>
			</block>
		</view>
		
		<uni-list>
			<uni-list-item title="真实姓名" :rightText="userInfo.username" />
			<uni-list-item title="手机号码" :rightText="userInfo.phone" />
		</uni-list>
	</view>
</template>

<script>
	import {
			mapState,
			mapMutations,
			mapActions
		} from 'vuex'
	const univerifyInfoKey = 'univerifyInfo'
	
	export default {
		data () {
			return {
				providerList: [],
				isNew: false,
				sessionKey: '',
			}
		},
		computed: {
			...mapState(['hasLogin', 'userInfo', 'weixinUserInfo'])
		},
		onLoad() {
			if (this.hasLogin && this.isUniverifyLogin) {
				this.getPhoneNumber(uni.getStorageSync(univerifyInfoKey)).then((phoneNumber) => {
					this.phoneNumber = phoneNumber
				})
			}
		},
		methods: {
			...mapMutations(['login', 'setUniverifyLogin', 'setOpenid', 'setUserInfo']),
			...mapActions(['getPhoneNumber']),
			
			Toast(data, duration = 1000) {
				uni.showToast(Object.assign({}, data, {
					duration
				}))
			},
			
		}
	}
</script>

<style>
	.user {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
	}
	
	.login-wrapper {
		width: 80%;
		text-align: center;
		margin: 0 auto;
	}
	
	.login-button {
		margin-top: 20rpx;
	}
	
	.avatar {
		width: 120rpx;
		height: 120rpx;
	}
	
	.username {
		margin-top: 20rpx;
	}
</style>
