<template>
  <div>
    <v-badge
      content="3"
      color="black"
      overlap
      bordered
      class="small-badge mr-3"
    >
      <v-icon class="small-icon" color="black" size="30px">mdi-cart</v-icon>
    </v-badge>
    <v-badge
      content="5"
      color="black"
      overlap
      bordered
      class="small-badge mr-3"
    >
      <v-icon class="small-icon" color="black" size="30px">mdi-heart</v-icon>
    </v-badge>
    <v-icon color="black" class="mr-3 small-icon" size="30px"
      >mdi-account</v-icon
    >
  </div>
</template>

<script>
export default {
  name: "NavbarIcons",
};
</script>

<style>
.small-badge .v-badge__badge {
  font-size: 0.55rem;
  height: 15px;
  min-width: 15px;
  padding: 3px;
  margin: 2px;
}

.small-icon {
  cursor: pointer;
}
</style>
