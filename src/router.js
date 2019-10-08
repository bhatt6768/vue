import Vue from 'vue'
import Router from 'vue-router'
import NewEntry from '@/components/NewEntry'
import AllEntry from '@/components/AllEntry'
import ShowEntry from '@/components/ShowEntry'
import EditEntry from '@/components/EditEntry'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewEntry',
      component: NewEntry
    },
    {
      path: '/allentry',
      name: 'AllEntry',
      component: AllEntry
    },
    {
      name: 'ShowEntry',
      path: '/entry/show/:id',
      component: ShowEntry
    },
    {
      name: 'EditEntry',
      path: '/entry/edit/:id',
      component: EditEntry
    }
  ]
})
