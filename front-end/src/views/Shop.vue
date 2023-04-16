<script setup>
import Header from "../components/Header.vue";
import SortBy from "../components/ShopComponents/Sortby.vue";
import Categories from "../components/Categories.vue";
import ProductCard from "../components/ShopComponents/ProductCard.vue";
import Heart from "@/components/Buttons/Heart.vue";
import ProductModal from "../components/Modals/ProductModal/ProductModal.vue";
import Login from "../components/Modals/LoginModal/LoginModal.vue";
import AccountModal from "../components/Modals/AccountModal/AccountModal.vue";
import AddListingModal from "../components/Modals/AddListingModal/AddListingModal.vue";

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
    @show_listing_modal="ListingModalOpen = true"
    @show_account_modal="AccountModalOpen = true"
  />
  <div class="blur" v-if="login_modal"></div>
  <SortBy />
  <Categories />
  <!-- Filter for title needs to be added -->
  <div class="shop-section">
    <div
      v-for="listing in ListingsArray"
      class="products_container"
      @click="openProductModal(listing)">
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

<Login
      class="login"
      v-if="login_modal"
      @pass_logged_user="pass_to_app"
      @close_login="pass_close_app"
    />
<AccountModal
      v-if="AccountModalOpen"
      @CloseModal="AccountModalOpen = false" class="account_modal_css"
    />

<AddListingModal
      v-if="ListingModalOpen"
      @CloseModal="ListingModalOpen = false" class="add_listing_css"
    />
</template>

<style scoped>
.heading_text {
  margin: 0 10%;
  color: #212121;
  margin-top: 1.2em;
  margin-bottom: 2em;
}

.products_container {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 1em;
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
  gap: 10px;
  text-align: center;
}

.image_wrapper {
  display: flex;
  flex: 1;
  max-height: 300px;
  width: 100%;
  position: relative;
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

.product_modal_css, .account_modal_css {
  position: absolute;
  background-color: white;
  width: 100%;
  top: 105px;
  z-index: 1000;
  bottom: 0;
  left: 0; 
  right: 0;
  margin: auto;
}



.login {
  position: absolute;
  top: 0;
  left: 24%;
  z-index: 10000;
}

.blur {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.3);
}

@media (max-width: 800px) {
  .shop-section {
    grid-template-columns: 1fr 1fr;
  }
  .image_wrapper {
  display: flex;
  flex: 1;
  min-height: 300px;
  width: 100%;
  position: relative;
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
      login_modal: false,
      ListingModalOpen: false,
      AccountModalOpen: false,
     
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

    pass_to_app(user_obj) {
      this.$emit("pass_logged_user", user_obj);
    },
    pass_close_app() {
      this.login_modal = false;
    },
  },
  created() {
    this.logged_userID=localStorage.getItem("logged_userID")
    this.fetch_all_listings();
  },
};
</script>
