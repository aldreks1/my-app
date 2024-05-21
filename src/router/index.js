import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/Home.vue";
import UsersPage from "@/views/Users.vue";
import LoginPage from "@/views/Login.vue";
import ProfilePage from "@/views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/users",
    name: "UsersPage",
    component: UsersPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory("/my-app/"), // Указываем базовый URL
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
    next({ name: "LoginPage" });
  } else {
    next();
  }
});

export default router;
