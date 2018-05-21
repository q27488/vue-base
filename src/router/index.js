import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Counter from '@/page/counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'counter',
      component: Counter,
    }
  ]
})
