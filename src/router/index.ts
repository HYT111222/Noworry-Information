import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [ //RouteRecordRaw：好处在于允许用户再基础路由以外自定义属性。
  {
    path: '/',
    component: ()=>import("@/views/LoginView.vue")
  },
  {
    path: '/contact',
    component: ()=>import("@/views/ContactView.vue")
  },
  {
    path: '/menu',
    component: ()=>import("@/views/Menu.vue")
  },
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router
