(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invoiceList/index"],{"1a96":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=0,u=15,s=1,l={data:function(){return{list:[],status:"more",serviceType:"",invoiceId:"",serviceTypeData:[{text:"过户",value:"guohu"},{text:"迁出",value:"qianchu"}],searchCarIdValue:"",searchCarNameValue:""}},computed:a({},(0,o.mapState)(["openid","hasLogin"])),onLoad:function(){this.hasLogin&&this.fetchData(!1)},mounted:function(){var t=this;e.$on("invoiceDelete",(function(){s=1,t.fetchData(!0)})),e.$on("inoviceCreate",(function(){s=1,t.fetchData(!0)})),e.$on("inoviceUpdate",(function(){s=1,t.fetchData(!0)})),e.$on("inovicePay",(function(){s=1,t.fetchData(!0)})),e.$on("logout",(function(){t.list=[]})),e.$on("login",(function(){t.fetchData(!0)}))},onPullDownRefresh:function(){this.fetchData(!0,(function(){e.stopPullDownRefresh()}))},onReachBottom:function(){var e=this;console.log("onReachBottom"),this.list.length>=r?this.loadMoreText="没有更多数据了!":setTimeout((function(){s+=1,e.status="loading",e.fetchData(!1,(function(){}))}),300)},methods:{searchCarId:function(e){console.log(e),this.searchCarIdValue=e.value,this.fetchData(!0)},searchCarName:function(e){this.searchCarNameValue=e.value,this.fetchData(!0)},gobooking:function(e){this.invoiceId=e,this.$refs.dialogInput.open()},serviceConfirm:function(){this.serviceType?("guohu"===this.serviceType&&(e.navigateTo({url:"../schedul/index?type=guohu&invoiceId="+this.invoiceId}),this.$refs.dialogInput.close()),"qianchu"===this.serviceType&&(e.navigateTo({url:"../schedul/index?type=qianchu&invoiceId="+this.invoiceId}),this.$refs.dialogInput.close())):e.showToast({title:"请选择类型"})},fetchData:function(t,n){var o=this;this.$request({url:"/api/v1/admin/invoice/query/wx",method:"GET",data:{pageSize:u,current:s,createBy:this.openid,carId:this.searchCarIdValue,carname:this.searchCarNameValue}}).then((function(i){if(200===i.code){var a=t?i.data.list:o.list.concat(i.data.list);o.list=a,u=i.data.pageSize,s=i.data.current,r=i.data.count,o.status=a.length<r?"more":"noMore",console.log(o.status)}else e.showToast({title:i.msg,icon:"none",duration:3e3});n&&n()}))},goDetail:function(t){e.navigateTo({url:"../invoiceDetail/index?id="+t})},goUpdate:function(t){e.navigateTo({url:"../invoiceRecord/index?data="+JSON.stringify(this.list[t])})},format:function(e){var t=e.createAt.split(" ")[0],n="0"===e.isPay?"未支付":"已支付";return t+"     "+e.status+"     "+n},deleteConfirm:function(t){var n=this;e.showModal({content:"确定要删除吗？",success:function(e){e.confirm&&n.del(t)}})},del:function(t){var n=this;e.showLoading(),this.$request({url:"/api/v1/admin/invoice/deletebyid",method:"DELETE",data:{id:t}}).then((function(t){e.hideLoading(),200===t.code?(e.showToast({title:"删除成功"}),n.fetchData(!0)):e.showToast({title:t.msg,icon:"none",duration:3e3})}))},goPayment:function(t){e.navigateTo({url:"../payment/index?pid="+t})}}};t.default=l}).call(this,n("543d")["default"])},"3ce0":function(e,t,n){"use strict";n.r(t);var o=n("878d"),i=n("9dd4");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("f920");var c,r=n("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=u.exports},"878d":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={uniSearchBar:function(){return n.e("components/uni-search-bar/uni-search-bar").then(n.bind(null,"9bff"))},uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"29c3"))},uniPopup:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-popup/uni-popup")]).then(n.bind(null,"9edd"))},uniForms:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-forms/uni-forms")]).then(n.bind(null,"12d1"))},uniFormsItem:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-forms-item/uni-forms-item")]).then(n.bind(null,"bd5c"))},uniDataCheckbox:function(){return Promise.all([n.e("common/vendor"),n.e("components/uni-data-checkbox/uni-data-checkbox")]).then(n.bind(null,"d3b0"))}},i=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"9dd4":function(e,t,n){"use strict";n.r(t);var o=n("1a96"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},c260:function(e,t,n){},efae:function(e,t,n){"use strict";(function(e){n("9634");o(n("66fd"));var t=o(n("3ce0"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},f920:function(e,t,n){"use strict";var o=n("c260"),i=n.n(o);i.a}},[["efae","common/runtime","common/vendor"]]]);