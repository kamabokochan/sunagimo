import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e33d01a = () => interopDefault(import('../pages/md.vue' /* webpackChunkName: "pages/md" */))
const _175c9347 = () => interopDefault(import('../pages/md_test.vue' /* webpackChunkName: "pages/md_test" */))
const _48e1331f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/md",
    component: _4e33d01a,
    name: "md"
  }, {
    path: "/md_test",
    component: _175c9347,
    name: "md_test"
  }, {
    path: "/",
    component: _48e1331f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
