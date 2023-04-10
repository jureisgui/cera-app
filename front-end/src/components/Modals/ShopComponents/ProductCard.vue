<script setup>
import Heart from "@/components/Buttons/Heart.vue";
</script>
<template>
  <div class="card_wrapper">
    <div class="image_wrapper">
      <img
        class="product_thumbnail"
        src="@/assets/img/categories/homeware.jpeg"
        alt="Product Thumbnail"
      />
      <Heart />
    </div>
    <div class="text_wrapper">
      <h2 class="subheading_text">Pitta Potta</h2>
      <h2 class="subheading_text">Flower Holder</h2>
      <p class="product_cost">$29.99 NZD</p>
    </div>
  </div>
</template>

<style scoped>
.card_wrapper {
  text-align: center;
}

.image_wrapper {
  position: relative;
}
.product_thumbnail {
  width: 320px;
  height: 235px;
  border-radius: 10px;
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

/* .text_wrapper {
  text-align: center;
} */
</style>
