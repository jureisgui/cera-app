<template>
  <section class="landing">
    <Header
      Header_class="transparent"
      Logo="src/assets/img/pine_logo-01.svg"
      @show_login_modal="login_modal = true"
      :Logged_in="Logged_in"
      @show_listing_modal="ListingModalOpen = true"
      @show_account_modal="AccountModalOpen = true"
    />
    <div class="blur" v-if="login_modal"></div>
    <Hero @Open_Listing_Modal="ListingModalOpen = true" />
    <AddListingModal
      v-if="ListingModalOpen"
      @CloseModal="ListingModalOpen = false" class="add_listing_css"
    />

    <AccountModal
      v-if="AccountModalOpen"
      @CloseModal="AccountModalOpen = false"
    />

    <fourzerofour
      v-if="fourzerofourModalOpen"
      @closeModal="fourzerofourModalOpen = false"
      @openModal="fourzerofourModalOpen = true"
    />

    <Summary />
    <Categories />
    <FeaturedArtist />

    <Login
      class="login"
      v-if="login_modal"
      @pass_logged_user="pass_to_app"
      @close_login="pass_close_app"
    />
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

.add_listing_css {
  background-color: #fff;
}
</style>

<script setup>
import Header from "../components/Header.vue";
import AddListingModal from "../components/Modals/AddListingModal/AddListingModal.vue";
import Hero from "../components/LandingComponents/HeroSection.vue";
import Summary from "../components/LandingComponents/Summary.vue";
import FeaturedArtist from "../components/LandingComponents/FeaturedArtist.vue";
import Categories from "../components/Categories.vue";
import Login from "../components/Modals/LoginModal/LoginModal.vue";
import AccountModal from "../components/Modals/AccountModal/AccountModal.vue";
import fourzerofour from "../components/Modals/fourzerofour/fourzerofour.vue";

defineProps({
  Logged_in: Boolean,
  logged_user_obj: Object,
});
</script>

<script>
export default {
  data() {
    return {
      login_modal: false,
      ListingModalOpen: false,
      AccountModalOpen: false,
      fourzerofourModalOpen: false,
    };
  },
  methods: {
    pass_to_app(user_obj) {
      this.$emit("pass_logged_user", user_obj);
    },
    pass_close_app() {
      this.login_modal = false;
    },
  },
};
</script>


