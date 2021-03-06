import Vue from 'vue'
import App from './App'

import './assets/style/base.css'
import './components/button'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
