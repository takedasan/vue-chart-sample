import Vue from 'vue';
import Dashboard from '@/components/pages/Dashboard.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Dashboard),
}).$mount('#app');
