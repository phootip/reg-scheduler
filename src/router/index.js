import Vue from 'vue';
import Router from 'vue-router';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import Main from '@/components/main';
import About from '@/components/about';
import ScheduleManager from '@/components/schedule-manager';

Vue.use(Router);
Vue.use(Buefy);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          name: 'ScheduleManager',
          component: ScheduleManager,
        },
        {
          path: 'about',
          name: 'About',
          component: About,
        },
      ],
    },
  ],
});
