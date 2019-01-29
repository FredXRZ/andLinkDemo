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
  Option,
  Radio,
  RadioGroup,
  RadioButton,
  Dialog,
  Form,
  FormItem,
  Input
} from 'element-ui';
import App from './App'
import router from './router'
// 引入echarts
import echarts from 'echarts'
import ajax from './common/js/request'

Vue.prototype.ajax = ajax
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
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})