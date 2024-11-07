<template>
  <div class="genderTabDiv">
    <router-link to="/men" active-class="tabActive">Men</router-link>
    <router-link to="/women" active-class="tabActive">Women</router-link>
  </div>
</template>

<script>
export default {
  name: "GenderTab",
};
</script>

<style scoped>
* {
  font-family: "Rubik", sans-serif;
}

.genderTabDiv {
  display: flex;
  gap: 20px;
}

.genderTabDiv a {
  color: black;
  text-decoration: none;
}

.tabActive {
  border-bottom: 2px solid black;
}
</style>
