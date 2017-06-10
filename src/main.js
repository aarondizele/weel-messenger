// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import Router from 'vue-router'
// import firebase from 'firebase'
import VueFire from 'vuefire'

// import moment for timestamp
import moment from 'moment'

import { routes } from './routes'
// router

import Todos from '@/components/Todos'
import Todo from '@/components/Todo'
import NewTodo from '@/components/NewTodo'
import Header from '@/components/Header'
import Welcome from '@/components/Welcome'

Vue.component('todo', Todo)
Vue.component('todos', Todos)
Vue.component('new-todo', NewTodo)
Vue.component('app-header', Header)
Vue.component('app-welcome', Welcome)

// filter moment
Vue.filter('fromNow', (value) => {
  return moment(value).fromNow()
})

// Firebase and vuefire
Vue.use(VueFire)
Vue.use(VueResource)
// Vue.http.options.root = 'https://laxistech-54e69.firebaseio.com/'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
