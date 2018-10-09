import Vue from 'vue'
import Router from 'vue-router'
import Faq from '@/components/Faq'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    }
  ]
})


