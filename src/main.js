import Vue from 'vue'
import App from '@/App.vue'
import router from '@router'
import store from '@/store'
import FlagIcon from 'vue-flag-icon'
import VueMeta from 'vue-meta'

// Plugins
import i18n from './i18n'
import vuetify from '@/plugins/vuetify'
import VueMask from 'v-mask'

// VueFlag
Vue.use(FlagIcon)

// v-mask
Vue.use(VueMask)

// Vue Metas
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
