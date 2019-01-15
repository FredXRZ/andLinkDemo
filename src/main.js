// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Table, TableColumn} from 'element-ui';
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
