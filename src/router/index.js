import Vue from 'vue'
import Router from 'vue-router'
import MergeCells from '@/components/MergeCells'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MergeCell',
      component: MergeCells
    }
  ]
})
