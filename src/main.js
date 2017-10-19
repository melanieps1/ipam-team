import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(Vuetify)
Vue.use(VueRouter)

export const EventBus = new Vue();

const router = new VueRouter ({

	routes: Routes

});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
