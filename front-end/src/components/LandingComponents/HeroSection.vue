<template>
  <div class="hero_section">
    <div class="hero_heading_container">
      <div class="absolute_hero_heading_container">
        <div class="hero_heading">
          <h1 class="heading_text">
            A New Marketplace Platform for Pottery Enthusiasts
          </h1>
        </div>
        <br /><br />
        <div class="hero_cta_buttons">
          <!-- Shop Button -->
          <router-link to="/shop"
            ><MainButton
              main_button_prop="Shop"
              button_icon_prop="home"
              class="shop_btn"
          /></router-link>
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

@media screen and (max-width: 880px) {
  .hero_cta_buttons {
    display: flex;
    gap: 20px;

    flex-direction: column;
  }
}
</style>

<script setup>
import MainButton from "../Buttons/MainButton.vue";
</script>

<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>
