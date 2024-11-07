<template>
  <div>
    <v-app-bar>
      <v-toolbar-title class="logo-title">
        <router-link to="/">SHOP.CO</router-link>
      </v-toolbar-title>
      <categories-dropdown />
    </v-app-bar>
  </div>
</template>

<script>
import CategoriesDropdown from "./CategoriesDropdown.vue";
export default {
  components: { CategoriesDropdown },
  name: "SecondaryNavbar",
};
</script>

<style scoped>
.logo-title a {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 2rem;
  color: black;
  text-decoration: none;
  font-weight: 800;
}
</style>
