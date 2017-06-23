// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'

import '@/icons'
import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import { sync } from 'vuex-router-sync'
import BootstrapVue from 'bootstrap-vue'
import VueGravatar from 'vue-gravatar'
import VueChartist from 'vue-chartist'
import VueFormGenerator from 'vue-form-generator'
import ToggleButton from 'vue-js-toggle-button'
import PyBossaModalForm from '@/components/global/PyBossaModalForm'

// Global styles
import '@/assets/style/_vars.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/style/_main.scss'

Vue.use(BootstrapVue)
Vue.use(VueChartist)
Vue.use(VueFormGenerator)
Vue.use(ToggleButton)

Vue.component('v-gravatar', VueGravatar)
Vue.component('pybossa-modal-form', PyBossaModalForm)

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  render: h => h(App)
})
