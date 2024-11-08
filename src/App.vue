<template>
  <v-app>
    <div id="app">
      <top-navbar />
      <secondary-navbar />
      <mobile-navbar />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import MobileNavbar from "./components/MobileNavbar.vue";
import SecondaryNavbar from "./components/SecondaryNavbar.vue";
import TopNavbar from "./components/TopNavbar.vue";

export default {
  name: "App",
  components: {
    TopNavbar,
    SecondaryNavbar,
    MobileNavbar,
  },
};
</script>

<style></style>
