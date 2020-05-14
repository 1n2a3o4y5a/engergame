import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios' //Axios バックエンド側のデータ処理
import VuePaginate from 'vue-paginate';
import Vuex from 'vuex'
import vSelect from 'vue-select' //? Search (Vue-select install)
import 'vue-select/dist/vue-select.css'; //? Search (Vue-select install)

Vue.use(Vuex)
Vue.component('v-select', vSelect) //? Search (Vue-select install)

import 'normalize.css' //?ResetCss
import VueLoading from 'vue-loading-template' //? vue-loader
Vue.use(VueLoading, /** options **/) //? vue-loader

// ! Font Awesome 
// https://fontawesome.com/
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCommentDots, faGamepad, faBookmark, faList, faYenSign, faMapMarkerAlt, faDungeon } from '@fortawesome/free-solid-svg-icons'

library.add(faCommentDots, faGamepad, faBookmark, faList, faYenSign, faMapMarkerAlt, faDungeon)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VuePaginate);

Vue.config.productionTip = false


//! Vueインスタンスを生成
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.prototype.$http = (url, opts) => fetch(url, opts)
Vue.prototype.$httpPosts = 'http://localhost:3000/mock/users'
Vue.prototype.$httpCategories = 'http://localhost:3000/mock/users'



