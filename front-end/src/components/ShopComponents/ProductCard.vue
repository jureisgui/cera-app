<script setup>
import Heart from "@/components/Buttons/Heart.vue";
</script>

<template>
  <div class="card_wrapper">
    <div class="image_wrapper">
      <!-- Image fetch needs to be added below -->
      <img  class="product_thumbnail" src="@/assets/img/categories/homeware.jpeg" alt="Product Thumbnail"/>
      <Heart class="heart_position" />
    </div>
    <div class="text_wrapper">
      <h2 class="subheading_text">Pitta Potta</h2> <!-- Shop name fetch needs to be added -->
      <h2 class="subheading_text">Flower Holder</h2> <!-- Product name fetch needs to be added -->
      <p class="product_cost">$29.99 NZD</p> <!-- Price fetch needs to be added -->
    </div>
  </div>
</template>

<style scoped>

.card_wrapper {
  text-align: center;
  padding: 1em;
}

.image_wrapper {
  position: relative;
}
.product_thumbnail {
  max-width: 390px;
  max-height: 305px;
  border-radius: 10px;
}

.heart_position{
  position: absolute;
  top: 10px;
  right: 20px
}

.subheading_text {
  color: #212121;
}

.product_cost {
  color: #646464;
  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
}

@media (max-width: 32em) {
  .product_thumbnail {
  max-width: 280px;
  max-height: 220px;
  }
}

@media (max-width: 425px) {
  .product_thumbnail {
  min-width: 280px;
  min-height: 220px;
  }
}

</style>
