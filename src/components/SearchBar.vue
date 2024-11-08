<template>
  <div class="searchBarDiv py-0 px-10">
    <v-text-field
      dense
      filled
      solo
      flat
      color="black"
      hide-details="auto"
      class="py-0 search-text-field"
      placeholder="Search for products..."
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style>
* {
  font-family: "Rubik", sans-serif;
}

.searchBarDiv {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-text-field {
  border-radius: 25px !important;
  min-width: 300px;
}
</style>
