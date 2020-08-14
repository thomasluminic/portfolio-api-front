import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
import moment from 'moment';
import ScrollAnimation from './directives/scrollAnimation';

moment.locale('fr');
Vue.directive('scrollanimation', ScrollAnimation);
Vue.prototype.moment = moment;
Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
