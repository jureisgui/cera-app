<script setup>
import ListingsButtons from "@/components/Buttons/ListingEditDeleteButton.vue";
</script>

<template>
    <section class="flex_wrapper">
  <div v-for="listing in filtered_listings" class="product-wrapper">
    <img :src="listing.product_images[0]" alt="Product Thumbnail" />
    <ListingsButtons />
  </div>
</section>
</template>

<style scoped>
.product-wrapper {
  position: relative;
  width: 210px;
  height: 175px;
}

.flex_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      logged_userID: "",
      MyListingsArray: [],
      user_body_data: {
        my_listings: [],
      },
    };
  },
  methods: {
    async fetch_single_user(userID) {
      const response = await fetch(
        "http://localhost:4000/users/getuser/" + userID
      );
      const received_data = await response.json();
      this.user_body_data = received_data;
    },
    async fetch_single_listing(listingID) {
      const response = await fetch(
        "http://localhost:4000//getlisting/" + listingID
      );
      const received_data = await response.json();
      this.MyListingsArray = received_data;
      console.log(received_data);
    },
    async fetch_all_listings() {
      const response = await fetch("http://localhost:4000/listings/");
      const received_data = await response.json();
      this.MyListingsArray = received_data;
      
    },
  },
  computed: {
    filtered_listings() {
      return this.MyListingsArray.filter(
        (listing) => listing.user_id == this.logged_userID
      )
    },
  },
  created() {
    this.logged_userID = localStorage.getItem("logged_userID");
    this.fetch_single_user(this.logged_userID);
    this.fetch_all_listings();
  },
 
};
</script>
