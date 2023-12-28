import 'babel-polyfill'
import "core-js"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* chartkick */
import VueChartkick from 'vue-chartkick'
Vue.use(VueChartkick);

/* Apexchart */
import {ResizeObserver as ResizeObserverPolyfill} from '@juggle/resize-observer';
if (typeof window !== 'undefined') {
  window.ResizeObserver = window.ResizeObserver || ResizeObserverPolyfill;
}

/* Echarts v5 */
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
