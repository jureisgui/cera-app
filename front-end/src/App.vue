<script setup>
import Footer from "./components/Footer.vue";
</script>

<template>
  <!-- Google Icons -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />

  <router-view
    @pass_logged_user="received_logged_user_obj"
    :Logged_in="Logged_in"
    :logged_user_obj="logged_user_obj">
    </router-view>

  <!--  -->

  <!-- Matt's Test Section -->
  <!--  -->

  <!-- Julie's Test Section -->

  <!--  -->

  <!-- Kyla's Test Section -->
  <!--  -->
  <Footer />
</template>

<style scoped>
</style>

<script>
export default {
  data() {
    return {
      Logged_in: false,
      logged_user_obj: {},
    };
  },
  methods: {
    received_logged_user_obj(user_obj) {
      this.logged_user_obj = user_obj;
      this.Logged_in = true;
      console.log(this.logged_user_obj);
      console.log(user_obj._id);
      localStorage.setItem("logged_userID", user_obj._id);
    },
  },
};
</script>

