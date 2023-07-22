import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AquaLayout from "../Layout/AquaLayout.vue";

const routes = [
  {
    path: "/layout",
    name: "AquaLayout",
    component: AquaLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
