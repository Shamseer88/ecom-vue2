<template>
  <div class="pt-10 pb-3 section-heading-div">
    <v-text class="section-heading-text">{{ text }}</v-text>
  </div>
</template>

<script>
export default {
  name: "SectionHeading",
  props: ["text"],
};
</script>

<style>
.section-heading-div {
  text-align: center;
}

.section-heading-text {
  font-family: "Candal", sans-serif;
  font-weight: 900;
  font-size: 2rem;
}
</style>
