import Vue from 'vue';
import Router from 'vue-router';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import Main from '@/components/Main';
import HelloWorld from '@/components/HelloWorld';

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
          name: 'HelloWorld',
          component: HelloWorld,
          props: {
            message: 'hello',
          },
        },
      ],
    },
  ],
});
