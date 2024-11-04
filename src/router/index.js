import MenPage from "@/pages/MenPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import ProductDetails from "@/pages/ProductDetails.vue";
import WomenPage from "@/pages/WomenPage.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/men",
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
      path: "*",
      name: "NotFoundPage",
      component: NotFoundPage,
    },
  ],
});
