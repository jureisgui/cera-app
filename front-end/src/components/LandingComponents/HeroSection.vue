<template>
  <div class="hero_section">
    <Header Header_class="transparent" Logo="src/assets/img/pine_logo-01.svg" /> 
    <div class="hero_heading_container">
      <div class="absolute_hero_heading_container">
        <div class="hero_heading">
          <h1 class="heading_text">
            A New Marketplace Platform for Pottery Enthusiasts
          </h1>
        </div>
        <br><br>
        <div class="hero_cta_buttons">
          <!-- Shop Button -->
          <router-link to="/shop"
            ><MainButton
              main_button_prop="Shop"
              button_icon_prop="home"
              class="shop_btn"
          /></router-link>
          <!-- List item button -->
          <MainButton @click="$emit('Modal_Open')"
            main_button_prop="List an item"
            button_icon_prop="add_circle"
            class="list_btn"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero_section {
  position: relative;
  background-image: url("../../assets/img/Landing.png");
  height: 80vh;
  background-size: cover;
  background-position: 50% 42%;
  background-repeat: no-repeat;
}

.hero_heading_container {
  position: absolute;
  margin: 0 10%;
  top: 160px;
  flex-direction: column;
  justify-content: space-between;
}
.hero_cta_buttons {
  display: flex;
  gap: 20px;
}

.shop_btn {
  border: 1px solid #444739;
}

.list_btn {
  border: 1px solid #dc7777;
  background-color: #dc7777;
}

.list_btn:hover {
  color: #dc7777;
  background-color: #fff;
  border: 1px solid #dc7777;
}

a {
  text-decoration: none;
}

.absolute_hero_heading_container {
    width: 70%;
}
</style>
<script setup>
import MainButton from "../Buttons/MainButton.vue";
import Header from '../Header.vue';
import ListingModal from '../Modals/AddListingModal/AddListingModal.vue';
</script>
