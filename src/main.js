import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
import VueAnalytics from 'vue-analytics';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueTypedJs)

Vue.use(VueAnalytics, {
  id: 'UA-137360230-1',
  router
});

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
