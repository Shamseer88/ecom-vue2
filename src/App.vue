<template>
  <v-app>
    <div id="app">
      <top-navbar />
      <secondary-navbar />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import SecondaryNavbar from "./components/SecondaryNavbar.vue";
import TopNavbar from "./components/TopNavbar.vue";

export default {
  name: "App",
  components: {
    TopNavbar,
    SecondaryNavbar,
  },
};
</script>

<style></style>
