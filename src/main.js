
import Vue from 'vue'
import App from './App'
import VueTypedJs from 'vue-typed-js'

Vue.config.productionTip = false
Vue.use(VueTypedJs)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
