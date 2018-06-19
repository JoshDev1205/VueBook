import Vue from 'vue'
import App from './App.vue'
import {store} from './store/main.js'
import router from './router/index.js'
import Firebase from 'firebase'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
