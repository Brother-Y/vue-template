import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/api';

Vue.config.productionTip = false
Vue.prototype.$api = api // 挂载 api 到 Vue 上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
