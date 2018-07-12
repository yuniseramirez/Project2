import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/Articles'
import Photos from '@/components/Photos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
     {
      path: '/photos',
      name: 'Photos',
      component: Photos
    },
  ]
})
