import Vue from 'vue'
import Router from 'vue-router'
import MergeCells from '@/components/MergeCells'
import Upload from '@/components/Upload'
import Start from '@/view/Start'
import Test from '@/view/test'
import Select from '@/components/Select'
import AnchorSkip from '@/components/anchorSkip'
import AddEchart from '@/view/echarsDemo/addEchart'
import DynamicChar from '@/view/echarsDemo/dynamicChar'
import TreeCharts from '@/view/echarsDemo/treeCharts'
import SwitchDemo from '@/view/switchDemo/switchDemo'
import Login from '@/view/Login/Login'

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
      path: '/addEchart',
      name: 'AddEchart',
      component: AddEchart
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
      path:'/select',
      name:'Select',
      component:Select
    },
    {
      path:'/skip',
      name:'Skip',
      component:AnchorSkip
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/',
      redirect:'/start'
    }
  ]
})
