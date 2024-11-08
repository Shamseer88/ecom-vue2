<template>
  <div>
    <hero-section />
    <section-heading text="NEW ARRIVALS" />
    <product-cards-grid />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import ProductCardsGrid from "@/components/ProductCardsGrid.vue";
export default {
  components: { HeroSection, SectionHeading, ProductCardsGrid },
  name: "HomePage",
};
</script>

<style scoped>
.product-grid-container {
  padding: 20px;
}
</style>
