
import Vue from 'vue'
import App from './App'
import jquery from 'jquery'
require('jquery.easing')

Vue.prototype.jquery = jquery

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
