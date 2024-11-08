<template>
  <v-menu class="py-0" nudge-bottom="30px" nudge-right="50px">
    <template v-slot:activator="{ on, attrs }">
      <p text v-bind="attrs" v-on="on" class="categories-btn px-10 mb-0">
        Categories
        <v-icon>mdi-chevron-down</v-icon>
      </p>
    </template>
    <v-list dense>
      <v-list-item
        v-for="category in categories"
        :key="category"
        class="category-list-item"
      >
        <v-list-item-title>
          <span>{{ category }}</span>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "CategoriesDropdown",
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  created() {
    this.$store.dispatch("fetchCategories");
  },
};
</script>

<style scoped>
* {
  font-family: "Rubik", sans-serif;
}

.categories-btn {
  color: black !important;
  font-size: 1rem;
  font-weight: 400;
}

.category-list-item {
  text-transform: capitalize;
  min-height: 30px !important;
}

.category-list-item:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}
</style>
