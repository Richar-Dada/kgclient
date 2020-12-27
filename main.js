import Vue from 'vue'
import App from './App'
import store from './store'
import { Base64 } from 'js-base64'

import request from './utils/request.js'

Vue.config.productionTip = false
Vue.prototype.$request = request
App.mpType = 'app'
Vue.prototype.$store = store

Vue.prototype.$baseUrl = 'http://localhost:7001'


const app = new Vue({
	store,
    ...App
})
app.$mount()
