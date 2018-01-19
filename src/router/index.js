import Vue from 'vue';
import Router from 'vue-router';
import ScheduleTable from '@/components/ScheduleTable';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScheduleTable',
      component: ScheduleTable,
    },
  ],
});
