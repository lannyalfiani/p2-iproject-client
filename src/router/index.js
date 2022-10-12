import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue"
import RegisterView from "../views/RegisterView.vue"
import Premium from "../views/PremiumView.vue"
// import Sectors from "../views/Sectors.vue"
import Extras from "../views/Extras.vue"

import Playground from "../views/Playground.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/premium",
      name: "premium",
      component: Premium,
    },
    {
      path: "/extras",
      name: "extras",
      component: Extras,
    },
    {
      path: "/playground",
      name: "playground",
      component: Playground,
    }
  ],
});

export default router;
