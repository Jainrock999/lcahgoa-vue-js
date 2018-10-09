// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './bootstrap'
import Vue from 'vue'
import App from './App'
import router from './router'
require('./assets/css/new_style.css')
require('./assets/css/bookmyseatstyle.css')
require('./assets/css/mycss.css')
require('./assets/css/slide.css')
require('./assets/alljs/jquery/jquery.countdown.pack.js')
require('./assets/alljs/jcountdown.js')
require('./assets/alljs/slide.js')
require('./assets/alljs/checkorder.js')
require('./assets/alljs/jquery.fancybox-1.3.4.js')
require('./assets/alljs/jquery.easing-1.3.pack.js')
require('./assets/alljs/jquery.checkbox.js')
require('./assets/alljs/jquery.cycle.all.js')
// require('./assets/css/js/modernizr-2.5.3.min.js')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
