import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/views/top';
import A from '@/views/A/top';
import AAdd from '@/views/A/add';
import B from '@/views/B/top';
import BAdd from '@/views/B/add';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes:[
    {
      path:'/',
      name: 'top',
      component: Top
    },
    {
      path:'/A',
      name: 'A',
      component: A
    },
    {
      path:'/A/add',
      name: 'AAdd',
      component: AAdd
    },
    {
      path:'/B',
      name: 'B',
      component: B
    },
    {
      path:'/B/add',
      name: 'BAdd',
      component: BAdd
    },

  ]
});
