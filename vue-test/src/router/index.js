import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VTest from '@/components/VTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VTest',
      component: VTest
    },
    {
      path: '/1',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
