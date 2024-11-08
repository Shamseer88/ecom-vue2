<template>
  <div class="secondary-navbar">
    <v-app-bar>
      <v-toolbar-title class="logo-title">
        <router-link to="/">SHOP.CO</router-link>
      </v-toolbar-title>
      <categories-dropdown />
      <gender-tab />
      <v-spacer />
      <search-bar />
      <navbar-icons />
    </v-app-bar>
  </div>
</template>

<script>
import CategoriesDropdown from "./CategoriesDropdown.vue";
import GenderTab from "./GenderTab.vue";
import NavbarIcons from "./NavbarIcons.vue";
import SearchBar from "./SearchBar.vue";
export default {
  components: { CategoriesDropdown, GenderTab, SearchBar, NavbarIcons },
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

@media (max-width: 945px) {
  .secondary-navbar {
    display: none;
  }
}
</style>
