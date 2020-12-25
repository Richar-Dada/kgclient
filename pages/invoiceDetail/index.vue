<template>
	<view>
		detail
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex'
	
	export default {
		data () {
			return {
				list: []
			}
		},
		computed: {
			...mapState(['openid'])
		},
		onLoad() {
			this.fetchData()
		},
		onPullDownRefresh() {
			this.fetchData()
		},
		methods: {
			fetchData() {
				this.$request({
					url: '/api/v1/admin/invoice/query/wx',
					method: 'GET',
					data: {
						pageSize: 10,
						current: 1,
						createBy: this.openid
					}
				}).then((res) => {
					console.log('res', res)
					if (res.code === 200) {
						this.list = res.data
					} else {
						uni.showToast({title: res.msg, icon:"none"})
					}
				})
			}
		}
	}
</script>

<style>
</style>
