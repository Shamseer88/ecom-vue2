<template>
  <div class="hero-row">
    <v-text class="hero-heading py-0 my-0 px-10">
      FIND CLOTHES<br />
      THAT MATCHES<br />
      YOUR STYLE
    </v-text>
    <v-text class="hero-text py-10 px-10">
      Browse through our diverse range of meticulously crafted garments,
      designed to bring out your individuality and cater to your sense of style.
    </v-text>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style>
.hero-row {
  background: url("../../public/images/hero-img.jpg") no-repeat center center;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.hero-heading {
  font-weight: 900;
  font-family: "Candal", sans-serif;
  font-size: 4rem;
  line-height: 1;
  color: white;
}

.hero-text {
  color: white;
  max-width: 575px;
}

@media (max-width: 600px) {
  .hero-heading {
    font-size: 2.5rem;
  }
}
</style>
