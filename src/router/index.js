import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import MenPage from "@/pages/MenPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import ProductDetails from "@/pages/ProductDetails.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import WomenPage from "@/pages/WomenPage.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/men",
      name: "Men",
      component: MenPage,
    },
    {
      path: "/women",
      name: "Women",
      component: WomenPage,
    },
    {
      path: "/product/:id",
      name: "ProductDetails",
      component: ProductDetails,
      props: true,
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
      props: true,
    },
    {
      path: "*",
      name: "NotFoundPage",
      component: NotFoundPage,
    },
  ],
});
