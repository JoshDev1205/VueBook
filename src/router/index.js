import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/LogIn.vue'
import Dashboard from '../components/Dashboard.vue'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: 'dashboard'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})
