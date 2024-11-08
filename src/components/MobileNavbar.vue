<template>
  <div>
    <v-responsive class="mobile-navbar" max-width="945">
      <v-app-bar flat dense>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-toolbar-title class="logo-title-mobile px-0">
          <router-link to="/">SHOP.CO</router-link>
        </v-toolbar-title>
        <v-btn icon @click="showSearch = !showSearch">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-text-field
          v-if="showSearch"
          placeholder="Search..."
          solo
          flat
          hide-details
          dense
          class="mx-3"
          @blur="showSearch = false"
        ></v-text-field>
        <v-spacer></v-spacer>
        <div v-if="!showSearch">
          <v-badge
            content="3"
            color="black"
            overlap
            bordered
            class="small-badge mr-3"
          >
            <v-icon class="small-icon" color="black" size="24px"
              >mdi-cart</v-icon
            >
          </v-badge>
          <v-badge
            content="5"
            color="black"
            overlap
            bordered
            class="small-badge mr-3"
          >
            <v-icon class="small-icon" color="black" size="24px"
              >mdi-heart</v-icon
            >
          </v-badge>
          <v-icon color="black" class="mr-3 small-icon" size="24px"
            >mdi-account</v-icon
          >
        </div>
      </v-app-bar>
    </v-responsive>
    <v-navigation-drawer v-model="drawer" right temporary absolute>
      <v-list>
        <v-subheader>Gender</v-subheader>
        <v-list-item :to="{ path: '/men' }" link class="category-list-item">
          <v-list-item-title class="category-list-item-title">
            Men
          </v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/women' }" link class="category-list-item">
          <v-list-item-title class="category-list-item-title">
            Women
          </v-list-item-title>
        </v-list-item>

        <v-subheader>Categories</v-subheader>
        <v-list-item
          v-for="category in categories"
          :key="category"
          class="category-list-item"
        >
          <v-list-item-title class="category-list-item-title">{{
            category
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "MobileNavbar",
  data() {
    return {
      drawer: false,
      showSearch: false,
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>

<style scoped>
.logo-title-mobile a {
  color: black;
  text-decoration: none;
  font-weight: 900;
}

.small-icon {
  font-size: 24px;
}

.small-badge .v-badge__badge {
  font-size: 12px;
  height: 18px;
  min-width: 18px;
}

.category-list-item {
  text-transform: capitalize;
  min-height: 25px !important;
}

.category-list-item:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}

.category-list-item-title {
  font-size: 12px;
}

@media (min-width: 945px) {
  .mobile-navbar {
    display: none;
  }
}
</style>
