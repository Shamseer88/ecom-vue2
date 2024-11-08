<template>
  <v-container class="product-grid-container">
    <v-row justify="center">
      <v-col
        cols="6"
        sm="6"
        md="4"
        lg="3"
        v-for="(product, index) in products"
        :key="index"
      >
        <product-card
          :name="product.name"
          :image="product.image"
          :rating="product.rating"
          :price="product.price"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: { ProductCard },
  name: "ProductCardsGrid",
  data() {
    return {
      products: [
        {
          name: "Women's Off White",
          image:
            "https://images.bewakoof.com/t1080/women-the-flintstones-oversize-fit-graphic-printed-jogger-610863-1696420303-1.jpg",
          rating: 3,
          price: "1,200",
        },
        {
          name: "Women's Off White Oversized Parachute Pants",
          image:
            "https://images.bewakoof.com/t1080/women-the-flintstones-oversize-fit-graphic-printed-jogger-610863-1696420303-1.jpg",
          rating: 3,
          price: "1,200",
        },
        {
          name: "Women's Off White Oversized Parachute Pants",
          image:
            "https://images.bewakoof.com/t1080/women-the-flintstones-oversize-fit-graphic-printed-jogger-610863-1696420303-1.jpg",
          rating: 3,
          price: "1,200",
        },
        {
          name: "Women's Off White Oversized Parachute Pants",
          image:
            "https://images.bewakoof.com/t1080/women-the-flintstones-oversize-fit-graphic-printed-jogger-610863-1696420303-1.jpg",
          rating: 3,
          price: "1,200",
        },
        {
          name: "Women's Off White Oversized Parachute Pants",
          image:
            "https://images.bewakoof.com/t1080/women-the-flintstones-oversize-fit-graphic-printed-jogger-610863-1696420303-1.jpg",
          rating: 3,
          price: "1,200",
        },
        {
          name: "Women's Off White Oversized Parachute Pants",
          image:
            "https://images.bewakoof.com/t1080/women-the-flintstones-oversize-fit-graphic-printed-jogger-610863-1696420303-1.jpg",
          rating: 3,
          price: "1,200",
        },
        {
          name: "Women's Off White Oversized Parachute Pants",
          image:
            "https://images.bewakoof.com/t1080/women-the-flintstones-oversize-fit-graphic-printed-jogger-610863-1696420303-1.jpg",
          rating: 3,
          price: "1,200",
        },
        {
          name: "Women's Off White Oversized Parachute Pants",
          image:
            "https://images.bewakoof.com/t1080/women-the-flintstones-oversize-fit-graphic-printed-jogger-610863-1696420303-1.jpg",
          rating: 3,
          price: "1,200",
        },
        {
          name: "Women's Off White Oversized Parachute Pants",
          image:
            "https://images.bewakoof.com/t1080/women-the-flintstones-oversize-fit-graphic-printed-jogger-610863-1696420303-1.jpg",
          rating: 3,
          price: "1,200",
        },
        {
          name: "Women's Off White Oversized Parachute Pants",
          image:
            "https://images.bewakoof.com/t1080/women-the-flintstones-oversize-fit-graphic-printed-jogger-610863-1696420303-1.jpg",
          rating: 3,
          price: "1,200",
        },
      ],
    };
  },
};
</script>

<style></style>
