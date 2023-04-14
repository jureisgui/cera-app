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
    <Header Header_class="green" Logo="src/assets/img/white_logo-01-01.svg" 
    @show_login_modal="login_modal=true" :Logged_in="Logged_in"  />
    <SortBy />
    <Categories />
    <h1 class="heading_text">Shop</h1><!-- Filter for title needs to be added -->
    <div class="shop-section">
        <div v-for="listing in ListingsArray" class="products_container">
          <div class="image_wrapper">
            <img class="product_image" :src="listing.product_images" alt="Product Thumbnail">
            <Heart class="heart_position" />
          </div>
          <h1 class="subheading_text">{{ listing.title }}</h1>
          <p class="product_cost">${{ listing.price }} NZD</p>
        </div>
    </div>
    

</template>

<style scoped>

.heading_text{
  margin: 0 10%;
  color: #212121;
  margin-top: 1.2em;
  margin-bottom: 2em;
} 

.products_container{
  text-align: center;
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

.shop-section{
  margin: 0 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 2em;
  gap: 20px;
  text-align: center;
}

.image_wrapper {
  position: relative;
}

.heart_position{
  position: absolute;
  top: 10px;
  right: 20px
}

.products_container:hover {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
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
      ListingsArray:[],
      product_body_data: {
        title: "",
        subtitle: "",
        category: "",
        item_description: "",
        condition: {},
        dimensions: { 
          width: "", 
          height: "", 
          diameter: "", 
          capacity: "" 
        },
        price: 0,
        product_tags: [],
        product_images: [],
        shipping: {},
        specify_costs: {},
        user_id: '',
      },

    } 
  }, 
    methods: { 
      async fetch_all_listings(){ 
        const response = await fetch("http://localhost:4000/listings/"); 
        const received_data = await response.json(); 
        this.ListingsArray=received_data; 
        console.log(received_data)
      },
      async fetch_single_product(listingID){ 
      const response = await fetch("http://localhost:4000/listings/getlisting/"+listingID); 
      const received_data = await response.json(); 
      this.product_body_data=received_data; 
    }, 
    }, 
        created() { 
          this.fetch_all_listings(); 
        }, 
      } 
      </script>
