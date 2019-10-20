import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _175c9347 = () => interopDefault(import('../pages/md_test.vue' /* webpackChunkName: "pages/md_test" */))
const _05299b4b = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _e13b6a4a = () => interopDefault(import('../pages/posts/_slug.vue' /* webpackChunkName: "pages/posts/_slug" */))
const _48e1331f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/md_test",
    component: _175c9347,
    name: "md_test"
  }, {
    path: "/posts/:id?",
    component: _05299b4b,
    name: "posts-id"
  }, {
    path: "/posts/:slug?",
    component: _e13b6a4a,
    name: "posts-slug"
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
