import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control
// 引入echarts
import echarts from 'echarts'

import service from '@/utils/request'

Vue.prototype.$http = service

Vue.prototype.$echarts = echarts

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  // data: {
  //   eventHub: new Vue() // 给data添加一个 名字为eventHub 的空vue实例,用来传输非父子组件的数据
  // }
})
