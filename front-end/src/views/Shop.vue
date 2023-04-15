<script setup>
import Header from "../components/Header.vue";
import SortBy from "../components/ShopComponents/Sortby.vue";
import Categories from "../components/Categories.vue";
import ProductCard from "../components/ShopComponents/ProductCard.vue";
import Heart from "@/components/Buttons/Heart.vue";
import ProductModal from "../components/Modals/ProductModal/ProductModal.vue";

defineProps({
  Logged_in: Boolean,
  logged_user_obj: Object,
});
</script>

<template>
  <Header
    Header_class="green"
    Logo="src/assets/img/white_logo-01-01.svg"
    @show_login_modal="login_modal = true"
    :Logged_in="Logged_in"
  />
  <SortBy />
  <Categories />
  <!-- Filter for title needs to be added -->
  <div class="shop-section">
    <div
      v-for="listing in ListingsArray"
      class="products_container"
      @click="openProductModal(listing)"
    >
      <div class="image_wrapper">
        <img
          class="product_image"
          :src="listing.product_images[0]"
          alt="Product Thumbnail"
        />
        <Heart class="heart_position" />
      </div>
      <h1 class="subheading_text">{{ listing.title }}</h1>
      <p class="product_cost">${{ listing.price }} NZD</p>
    </div>
  </div>
  <div class="product_modal_div" v-if="product_modal_on" >
    <ProductModal
    @CloseModal="product_modal_on = false" class="product_modal_css" :product_prop="selected_product" :seller_name_prop="seller_name"
  />
</div>
</template>

<style scoped>
.heading_text {
  margin: 0 10%;
  color: #212121;
  margin-top: 1.2em;
  margin-bottom: 2em;
}

.products_container {
  text-align: center;
  padding: 1em;
  max-height: 600px;
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

.shop-section {
  margin: 5% 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 2em;
  gap: 20px;
  text-align: center;
}

.image_wrapper {
  position: relative;
  max-width: 500px;
  max-height: 300px;
  object-fit: contain;
  
}

.product_image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.heart_position {
  position: absolute;
  top: 10px;
  right: 20px;
}

.products_container:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.product_modal_css {
  position: absolute;
  background-color: white;
  width: 100%;
  top: 105px;
  z-index: 10;
}

@media (max-width: 769px) {
  .shop-section {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .shop-section {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
export default {
  data() {
    return {
      ListingsArray: [],
      product_modal_on: false,
      selected_product: {},
      single_user_body_data: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        location: "",
        seller_image: "",
        seller_name: "",
        description: "",
        my_listings: [],
      },
      seller_name: "",
    };
  },
  methods: {
    async fetch_all_listings() {
      const response = await fetch("http://localhost:4000/listings/");
      const received_data = await response.json();
      this.ListingsArray = received_data;
      console.log(received_data);
    },

    async fetch_single_user(userID) {
      const response = await fetch(
        "http://localhost:4000/users/getuser/" + userID
      );
      const received_data = await response.json();
      this.single_user_body_data = received_data;
      this.seller_name = this.single_user_body_data.first_name + " " + this.single_user_body_data.last_name;
      console.log(this.seller_name);
      
    },
   
    openProductModal(listing) {
      this.selected_product = listing;
      this.product_modal_on = true;
      console.log(this.selected_product.user_id);
      this.fetch_single_user(this.selected_product.user_id);
      
    },
  },
  created() {
    this.fetch_all_listings();
  },
};
</script>
