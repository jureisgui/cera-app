<template>
  <div class="photo_gallery"></div>
  <div class="text_container">
    <h5 class="heading_text">Red and Blue Dye Mug</h5>
    <h5 class="body_text">Cafe Concetto</h5>
    <h3 class="subheading_text">$15 NZD</h3>
    <p class="body_text">
      Lorem ipsum dolor sit amet consectetur. Pellentesque fusce platea ipsum ut
      interdum lorem at. Sit faucibus lacinia aenean fringilla in et. Maecenas
      donec scelerisque eu proin id urna. Enim felis ornare turpis hendrerit
      scelerisque convallis morbi ipsum. Dui fermentum felis orci nunc odio amet
      ornare. Vitae malesuada in nulla consectetur est. Vestibulum tellus isus
      est non cursus. Risus ac vitae et nisl ut.
    </p>
    <div class="condition_div">
      <p class="body_text">Condition:</p>
      <div class="condition_text">
        <p class="button_text">Pre-loved</p>
      </div>
    </div>
    <div class="delivery_div body_text">
      <p>Delivery & pick-up details:</p>
      <div class="options_list">
        <p>Pick-up available</p>
        <p>Shipping to be calculated</p>
      </div>
    </div>
    <MainButton
      main_button_prop="Contact Seller"
      button_icon_prop="mail"
      class="button"
    />
  </div>
</template>

<style scoped>
.text_container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.condition_div,
.delivery_div {
  display: flex;
  gap: 10px;
}

.condition_text {
  background-color: #dcba77;
  padding: 5px;
  align-items: center;
  justify-content: center;
}

.button {
  border: 1px solid #dc7777;
  background-color: #dc7777;
}

.button:hover {
  color: #dc7777;
  background-color: #fff;
  border: 1px solid #dc7777;
}
</style>

<script setup>
import MainButton from "../../Buttons/MainButton.vue";
import Heart from "../../Buttons/Heart.vue";
</script>
