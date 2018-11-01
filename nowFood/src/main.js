import Vue from 'vue'
import App from './App'
import '../static/weui.css'
// import Mint from 'mint-ui'; 
// import 'mint-ui/lib/style.css' 
// Vue.use(Mint);

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
