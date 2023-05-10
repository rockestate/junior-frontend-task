import Vue from "vue";
import VueRouter from "vue-router";
import IndexPage from "../pages/index.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexPage,
    },
    {
      path: "/tk",
      name: "tk",
      component: () => import("../pages/tk.vue"),
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../pages/about.vue"),
    // },
  ],
});

export default router;
