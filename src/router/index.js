import Vue from 'vue'
import Router from 'vue-router'
import MergeCells from '@/components/MergeCells'
import DynamicChar from '@/components/echarsDemo/dynamicChar'
import Upload from '@/components/Upload'
import Start from '@/components/Start'
import SwitchDemo from '@/components/switchDemo/switchDemo'
import TreeChart from '@/components/echarsDemo/treeChart'
import Select from '@/components/Select'
import AnchorSkip from '@/components/anchorSkip'

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
      path: '/treeChart',
      name: 'TreeChart',
      component: TreeChart
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
      path:'/',
      redirect:'/start'
    }
  ]
})
