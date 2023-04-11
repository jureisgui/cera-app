<script setup>
import Header from "../components/Header.vue";
import SortBy from "../components/ShopComponents/Sortby.vue";
import Categories from "../components/Categories.vue";
import ProductCard from "../components/ShopComponents/ProductCard.vue";

</script>

<template>
    <Header Header_class="green" Logo="src/assets/img/white_logo-01-01.svg" />
    <SortBy />
    <Categories />
    <div class="shop-section"></div>
    <h1 class="heading_text">Shop</h1><!-- Filter for title needs to be added -->
    <div class="products_container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />    
    </div>

</template>

<style scoped>

.heading_text {
  color: #212121;
  margin-top: 1.2em;
  margin-bottom: 2em;
  margin-left: 10%;
  margin-right: 10%;
}

.products_container{    
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 2em;
}

@media (max-width: 769px) {
  .products_container {
    justify-content: center;
  }
}



</style>
