<template>
  <div>
    <v-app-bar>
      <v-toolbar-title class="logo-title">
        <router-link to="/">SHOP.CO</router-link>
      </v-toolbar-title>
      <categories-dropdown />
      <gender-tab />
      <v-spacer />
      <search-bar />
    </v-app-bar>
  </div>
</template>

<script>
import CategoriesDropdown from "./CategoriesDropdown.vue";
import GenderTab from "./GenderTab.vue";
import SearchBar from "./SearchBar.vue";
export default {
  components: { CategoriesDropdown, GenderTab, SearchBar },
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
