import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import FavouriteSlots from '@/components/FavouriteSlots'
import SpareSlots from '@/components/SpareSlots'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/favouriteslots',
      name: 'FavouriteSlots',
      component: FavouriteSlots
    },
    {
      path: '/spareslots',
      name: 'SpareSlots',
      component: SpareSlots
    }
  ]
})
