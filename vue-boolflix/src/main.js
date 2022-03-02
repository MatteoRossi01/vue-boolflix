import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as farStar } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass as Lens } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, fasStar, farStar, Lens)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

import LangFlag from 'vue-lang-code-flags';
 
Vue.component('lang-flag', LangFlag);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
