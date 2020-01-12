import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import contact from '@/components/contact'
import services from '@/components/services'
import china from '@/components/china'
import vietnam from '@/components/vietnam'
import spain from '@/components/spain'
import majorca from '@/components/majorca'
import ibiza from '@/components/ibiza'
import uae from '@/components/uae'
import egypt from '@/components/egypt'
import israel from '@/components/israel'
import greece from '@/components/greece'

Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },

    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },

    {
      path: '/china',
      name: 'china',
      component: china
    },
    {
      path: '/vietnam',
      name: 'vietnam',
      component: vietnam
    },
    {
      path: '/spain',
      name: 'spain',
      component: spain
    },
    {
      path: '/majorca',
      name: 'majorca',
      component: majorca
    },
    {
      path: '/ibiza',
      name: 'ibiza',
      component: ibiza
    },
    {
      path: '/uae',
      name: 'uae',
      component: uae
    },
    {
      path: '/egypt',
      name: 'egypt',
      component: egypt
    },
    {
      path:'/israel',
      name:'israel',
      component: israel
    },
    {
      path: '/greece',
      name:'greece',
      component: greece
    }
  ]
})
