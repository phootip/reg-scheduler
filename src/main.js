// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueX from 'vuex';
import Buefy from 'buefy';
import App from './app';
import router from './router';
import createStore from './store';

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(VueX);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: createStore(),
  components: { App },
  template: '<App/>',
});
