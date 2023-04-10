<template>
  <section class="product_desc">
    <div class="photo_gallery">
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        containerStyle="max-width: 640px"
      >
        <template #item="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            style="width: 100%"
            class="big_img"
          />
        </template>
        <template #thumbnail="slotProps" class="thumbnail_wrapper">
          <img
            :src="slotProps.item.thumbnailImageSrc"
            :alt="slotProps.item.alt"
            class="thumbnail"
          />
        </template>
      </Galleria>
    </div>
    <div class="text_container">
      <h5 class="heading_text">Red and Blue Dye Mug</h5>
      <h5 class="body_text">Cafe Concetto</h5>
      <h3 class="subheading_text">$15 NZD</h3>
      <p class="body_text">
        Lorem ipsum dolor sit amet consectetur. Pellentesque fusce platea ipsum
        ut interdum lorem at. Sit faucibus lacinia aenean fringilla in et.
        Maecenas donec scelerisque eu proin id urna. Enim felis ornare turpis
        hendrerit scelerisque convallis morbi ipsum. Dui fermentum felis orci
        nunc odio amet ornare. Vitae malesuada in nulla consectetur est.
        Vestibulum tellus isus est non cursus. Risus ac vitae et nisl ut.
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
  </section>
</template>

<style scoped>
.product_desc {
  display: flex;
  gap: 70px;
}

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

.photo_gallery,
.text_container {
  flex: 1;
}

.big_img {
    width: 100%;
    height: 22em;
    object-fit: contain;
    margin-bottom: 30px;
}

.thumbnail {
    width: 5em;
}

@media (max-width: 62em) {
.product_desc {
  flex-direction: column;
}
}
</style>

<script setup>
import MainButton from "../../Buttons/MainButton.vue";
import Heart from "../../Buttons/Heart.vue";

//theme
// import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";

import Galleria from "primevue/galleria";
</script>

<script>
export default {
  data() {
    return {
      images: [
        {
          itemImageSrc:
            "https://images.squarespace-cdn.com/content/v1/56fbe1c6a3360c50e40b157b/1664536810988-UJYEBS9GQM7RDP550QRC/Serving+Bowl+in+Ochre%2C+Flecked+Stoneware-09.jpg?format=2500w",
          thumbnailImageSrc:
            "https://images.squarespace-cdn.com/content/v1/56fbe1c6a3360c50e40b157b/1664536810988-UJYEBS9GQM7RDP550QRC/Serving+Bowl+in+Ochre%2C+Flecked+Stoneware-09.jpg?format=2500w",
          alt: "Image 1",
        },
        {
          itemImageSrc:
            "https://images.squarespace-cdn.com/content/v1/56fbe1c6a3360c50e40b157b/1669282709234-UIJ9VVBANPVBBK59MWAZ/Serving+Bowl%2C+pale-1.jpg?format=2500w",
          thumbnailImageSrc:
            "https://images.squarespace-cdn.com/content/v1/56fbe1c6a3360c50e40b157b/1669282709234-UIJ9VVBANPVBBK59MWAZ/Serving+Bowl%2C+pale-1.jpg?format=2500w",
          alt: "Image 2",
        },
        {
          itemImageSrc:
            "https://images.squarespace-cdn.com/content/v1/56fbe1c6a3360c50e40b157b/1679322217480-DWKWMAWPSGVCOQLTIBLQ/Jenny+Bowl+Chun-4.jpg?format=2500w",
          thumbnailImageSrc:
            "https://images.squarespace-cdn.com/content/v1/56fbe1c6a3360c50e40b157b/1679322217480-DWKWMAWPSGVCOQLTIBLQ/Jenny+Bowl+Chun-4.jpg?format=2500w",
          alt: "Image 3",
        },
      ],

      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
        },
        {
          breakpoint: "768px",
          numVisible: 2,
        },
        {
          breakpoint: "560px",
          numVisible: 1,
        },
      ],
    };
  },
};
</script>
