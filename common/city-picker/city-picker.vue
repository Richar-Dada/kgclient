<template>
	<view>
		<picker @change="selCity" @columnchange="selMonitor" :value="addressIndex" :range="address" mode="multiSelector">
		  <view class="setCon">
		    <input type="text" :value="addressNode.province + addressNode.city" disabled="" />
		    <icon class="iconfont iconkefu"></icon>
		  </view>
		</picker>
	</view>
</template>

<script>
	// import address from './address.json'
	export default {
	  data() {
	    return {
	      address: [],
	      provinceList: [],
	      cityAllList: [],
	      addressIndex: [0, 0],
	      addressNode: {
	        province: "请选择城市",
	        city: ""
	      }
	    };
	  },
	  onReady() {
	  	console.log('ready')
	  },
	  onLoad() {
	  	console.log('zzzzzzzzzzz')
	  },
	  created() {
	  	console.log('created')
	  },
	  mounted() {
		  console.log('load000000')
	    const that = this
	    // 将省市区的数据转换为picker可用的多维数组
	    that.getAddressData()
	  },
	  methods: {
	    // 获取地址信息
	    selCity(e) {
	      const that = this;
	      let val = e.target.value
	      that.addressNode = {
	        province: that.address[0][val[0]],
	        city: that.address[1][val[1]]
	      }
	    },
	    // 监听省市区滚动
	    selMonitor(e) {
	      const that = this
	      let column = e.detail.column
	      if (column == 0) {
	        let index = e.detail.value
	        that.address[1] = that.cityAllList[index]
	      }
	    },
	    // 将省市区的数据转换为picker可用的多维数组
	    getAddressData() {
	      const that = this;
	      // 所有城市列表,二维数组
	      let cityAllList = [];
	      // 省列表
	      let provinceList = [];
	      // address为省市区的json数据
	      for (let key in address) {
	        let newDataList = [];
	        if (address[key].children) {
	          for (let key2 in address[key].children) {
	            newDataList.push(address[key].children[key2].name);
	          }
	        }
	        provinceList.push(address[key].name);
	        cityAllList.push(newDataList);
	      }
	      that.provinceList = provinceList;
	      that.cityAllList = cityAllList;
	      that.address = [provinceList, cityAllList[0]];
	    }
	  }
	}
</script>

<style>
</style>
