import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ResolvendoIssues from '@/components/ResolvendoIssues'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/ResolvendoIssues',
      name: 'Resolvendo Issues',
      component: ResolvendoIssues
    }
  ]
})

export default router
