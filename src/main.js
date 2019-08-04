import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'

Vue.component("my-header",Header);
Vue.component("my-footer",Footer);
Vue.component("my-carousel",Carousel);

Vue.prototype.axios=axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
