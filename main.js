import Vue from 'vue'
import App from './App'
import store from './store'

import request from './utils/request.js'

Vue.config.productionTip = false
Vue.prototype.$request = request
App.mpType = 'app'
Vue.prototype.$store = store


const app = new Vue({
	store,
    ...App
})
app.$mount()
