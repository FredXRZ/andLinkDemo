import Vue from 'vue'
import Router from 'vue-router'
import MergeCells from '@/components/MergeCells'
import DynamicChar from '@/components/echarsDemo/dynamicChar'
import Upload from '@/components/Upload'
import Start from '@/components/Start'
import SwitchDemo from '@/components/switchDemo/switchDemo'
import TreeCharts from '@/components/echarsDemo/treeCharts'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mergecell',
      name: 'MergeCell',
      component: MergeCells
    },
    {
      path: '/dynamic',
      name: 'DynamicChar',
      component: DynamicChar
    },
    {
      path: '/treeCharts',
      name: 'TreeCharts',
      component: TreeCharts
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path:'/upload',
      name:'Upload',
      component: Upload
    },
    {
      path:'/',
      name:'Start',
      component:Start
    },
    {
      path:'/switchdemo',
      name:'SwitchDemo',
      component:SwitchDemo
    },
    {
      path:'/',
      redirect:'/start'
    }
  ]
})
