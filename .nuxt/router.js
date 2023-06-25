import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d758718 = () => interopDefault(import('..\\pages\\article.vue' /* webpackChunkName: "pages/article" */))
const _97ece9ee = () => interopDefault(import('..\\pages\\articleDetail.vue' /* webpackChunkName: "pages/articleDetail" */))
const _5a610a0e = () => interopDefault(import('..\\pages\\course\\index.vue' /* webpackChunkName: "pages/course/index" */))
const _9fb55aea = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _61196a34 = () => interopDefault(import('..\\pages\\question.vue' /* webpackChunkName: "pages/question" */))
const _0591b671 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _263eb4cc = () => interopDefault(import('..\\pages\\self.vue' /* webpackChunkName: "pages/self" */))
const _1ff85004 = () => interopDefault(import('..\\pages\\teacher\\index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _e87c30be = () => interopDefault(import('..\\pages\\course\\_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _53d00c04 = () => interopDefault(import('..\\pages\\orders\\_oid.vue' /* webpackChunkName: "pages/orders/_oid" */))
const _22f4cf96 = () => interopDefault(import('..\\pages\\pay\\_pid.vue' /* webpackChunkName: "pages/pay/_pid" */))
const _128a05c1 = () => interopDefault(import('..\\pages\\player\\_vid.vue' /* webpackChunkName: "pages/player/_vid" */))
const _3203c1e6 = () => interopDefault(import('..\\pages\\teacher\\_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _3304a118 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/article",
    component: _5d758718,
    name: "article"
  }, {
    path: "/articleDetail",
    component: _97ece9ee,
    name: "articleDetail"
  }, {
    path: "/course",
    component: _5a610a0e,
    name: "course"
  }, {
    path: "/login",
    component: _9fb55aea,
    name: "login"
  }, {
    path: "/question",
    component: _61196a34,
    name: "question"
  }, {
    path: "/register",
    component: _0591b671,
    name: "register"
  }, {
    path: "/self",
    component: _263eb4cc,
    name: "self"
  }, {
    path: "/teacher",
    component: _1ff85004,
    name: "teacher"
  }, {
    path: "/course/:id",
    component: _e87c30be,
    name: "course-id"
  }, {
    path: "/orders/:oid?",
    component: _53d00c04,
    name: "orders-oid"
  }, {
    path: "/pay/:pid?",
    component: _22f4cf96,
    name: "pay-pid"
  }, {
    path: "/player/:vid?",
    component: _128a05c1,
    name: "player-vid"
  }, {
    path: "/teacher/:id",
    component: _3203c1e6,
    name: "teacher-id"
  }, {
    path: "/",
    component: _3304a118,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
