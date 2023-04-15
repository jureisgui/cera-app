<template>
  <div class="categories-wrapper">
    <h1 class="heading_text">Categories</h1>
    <div class="categories_container">
      <div class="category-card">
        <img
          src="../assets/img/categories/all-products.jpg"
          alt="All products photo category"
        />
        <p class="body_text">All Products</p>
      </div>
      <div class="category-card">
        <img
          src="../assets/img/categories/kitchenware.jpeg"
          alt="Kichenware photo category"
        />
        <p class="body_text">Kitchenware</p>
      </div>
      <div class="category-card">
        <img src="../assets/img/categories/homeware.jpeg" alt="Homeware photo category" />
        <p class="body_text">Homeware</p>
      </div>
      <div class="category-card">
        <img src="../assets/img/categories/bathware.jpg" alt="Bathroom photo category" />
        <p class="body_text">Bathroom</p>
      </div>
      <div class="category-card">
        <img src="../assets/img/categories/garden.jpg" alt="Garden photo category" />
        <p class="body_text">Garden</p>
      </div>
      <div class="category-card">
        <img
          src="../assets/img/categories/sculpture.jpg"
          alt="Sculpture photo category"
        />
        <p class="body_text">Sculpture</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading_text {
  color: #212121;
  margin-top: 1.2em;
  margin-bottom: 2em;
}

.categories_container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
}

.category-card img {
  max-width: 150px;
  max-height: 150px;
  border-radius: 10px;
}

.category-card {
  text-align: center;
}

.categories-wrapper {
  margin: 0 10%;
  border-bottom: solid 1px;
  padding-bottom: 4em;
}

@media (max-width: 1100px) {

  .categories_container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;}

  .category-card{
  max-width: 170px;
  max-height: 170px;
  border-radius: 10px;
  }
}

@media (max-width: 600px) {

.categories_container {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
}
.category-card img {
  max-width: 150px;
  max-height: 150px;
  border-radius: 10px;
}
}

@media (max-width: 350px) {

.categories_container {
display: grid;
justify-content: center;
grid-template-columns: 1fr;
gap: 40px;
}
.category-card img {
  max-width: 150px;
  max-height: 150px;
  border-radius: 10px;
}
}
</style>

<script setup></script>
