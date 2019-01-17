// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
  Button, 
  Table, 
  TableColumn,
  Upload,
  Row,
  Select,
  Option
} from 'element-ui';
import App from './App'
import router from './router'
// 引入echarts
import echarts from 'echarts'
import axios from 'axios'

Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Upload)
Vue.use(Row)
Vue.use(Select)
Vue.use(Option)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})