import Vue from 'vue';
import App from './App.vue';
import lib from './lib/index';

Vue.use(lib);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
