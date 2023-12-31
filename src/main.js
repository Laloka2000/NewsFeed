import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Carousel3d from 'vue-carousel-3d'

Vue.use(BootstrapVue && IconsPlugin)
Vue.use(Carousel3d);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
