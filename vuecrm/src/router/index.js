import { createRouter, createWebHistory } from 'vue-router'
import AquaLayout from "../Layout/AqLayout.vue"
import AuthView from "../views/AuthView"
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: AuthView
  },
  {
    path: "/layout",
    name: "/layout",
    component: AquaLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
