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

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/create", component: Create },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
