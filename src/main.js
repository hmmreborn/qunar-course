import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import './assets/style/reset.scss'
import './assets/style/iconfont/iconfont.css'
import './assets/style/index.scss'
require('./mock/mock.js')
Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: '',
  attempt: 1
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
