<template>
  <div class="ma-5 product-card-div">
    <v-img class="product-img" :src="image" />
    <p class="product-name mb-1 mt-3 ml-1">{{ name }}</p>
    <v-rating
      :value="rating"
      dense
      small
      readonly
      color="orange"
      background-color="orange"
    />
    <p class="product-rate mb-0 mt-1 ml-1">₹{{ price }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    name: String,
    image: String,
    rating: Number,
    price: String,
  },
};
</script>

<style scoped>
.product-card-div {
  max-width: 263px;
}

.product-img {
  height: 300px;
  max-width: 250px;
  border-radius: 20px;
}

.product-name {
  font-family: "Rubik", sans-serif;
  color: black;
  font-weight: 500;
  line-height: 1;
}

.product-rate {
  font-family: "Candal", sans-serif;
  color: black;
  font-size: 18px;
  line-height: 1;
}

@media (max-width: 600px) {
  .product-card-div {
    max-width: 128px;
  }

  .product-img {
    max-width: 125px;
    height: 200px;
    border-radius: 10px;
  }

  .product-name {
    font-size: 12px;
  }

  .product-rate {
    font-family: "Candal", sans-serif;
    color: black;
    font-size: 13px;
    line-height: 1;
  }
}
</style>
