<template>
  <div id="app">
    <top-navbar />
    <router-view />
  </div>
</template>

<script>
import TopNavbar from "./components/TopNavbar.vue";

export default {
  name: "App",
  components: {
    TopNavbar,
  },
};
</script>

<style>
* {
  font-family: "Rubik", sans-serif;
}
</style>
