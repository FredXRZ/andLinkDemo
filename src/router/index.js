import Vue from 'vue'
import Router from 'vue-router'
import MergeCells from '@/components/MergeCells'
import DynamicChar from '@/components/echarsDemo/dynamicChar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MergeCell',
      component: MergeCells
    },
    {
      path: '/dynamic',
      name: 'DynamicChar',
      component: DynamicChar
    }
  ]
})
