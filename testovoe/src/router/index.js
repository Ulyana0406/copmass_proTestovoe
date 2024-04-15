// import Vue from "vue";
// import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import Create from "../views/Create.vue";

// Vue.use(VueRouter);

// const routes = [
//   { path: "/", component: Home },
//   { path: "/create", component: Create },
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// export { router };

// import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/News.vue";
// import Create from "../views/Create.vue";

// export default createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: "/", component: Home },
//     { path: "/create", component: Create },
//   ],
// });

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/News.vue";
import Create from "../views/Create.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
    },
    {
      name: "Create",
      path: "/create",
      component: Create,
    },
  ],
});
