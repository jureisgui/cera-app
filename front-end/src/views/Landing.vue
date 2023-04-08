<template>
  <section class="landing">
    <Header Header_class="transparent" Logo="src/assets/img/pine_logo-01.svg" />
    <div class="blur"></div>
    <Hero />
    <Summary />
    <Categories />
    <FeaturedArtist />

    <Login class="login" />
  </section>
</template>

<style scoped>
.landing {
  position: relative;
}

.login {
  position: absolute;
  top: 0;
  left: 24%;
  z-index: 1000;
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
</style>

<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/LandingComponents/HeroSection.vue";
import Summary from "../components/LandingComponents/Summary.vue";
import FeaturedArtist from "../components/LandingComponents/FeaturedArtist.vue";
import Categories from "../components/Categories.vue";
import Login from "../components/Modals/LoginModal/LoginModal.vue";
</script>
