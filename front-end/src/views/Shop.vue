<script setup>
import Header from "../components/Header.vue";
import SortBy from "../components/ShopComponents/Sortby.vue";
import Categories from "../components/Categories.vue";
import ProductCard from "../components/ShopComponents/ProductCard.vue";

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
    <div class="shop-section">
      <h1 class="heading_text">Shop</h1><!-- Filter for title needs to be added -->
    <div class="products_container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />    
    </div>
    </div>
    

</template>

<style scoped>

.shop-section{
  margin: 0 10%;
}

.heading_text {
  color: #212121;
  margin-top: 1.2em;
  margin-bottom: 2em;
}

.products_container{    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 2em; 
}

@media (max-width: 769px) {
  .products_container {
    grid-template-columns: 1fr 1fr; 
  }
}

@media (max-width: 500px) {
  .products_container {
    grid-template-columns: 1fr; 
  }
}



</style>
