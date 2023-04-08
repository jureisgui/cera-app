<template>
    <ListingModal v-if="Modal_Open" @CloseModal="Modal_Open=false"/>
<Hero @Modal_Open="Modal_Open=true" />

<Summary />
<Categories />
<FeaturedArtist />
</template>

<style scoped>

</style>

<script setup>
import Hero from '../components/LandingComponents/HeroSection.vue'
import ListingModal from '../components/Modals/AddListingModal/AddListingModal.vue'
import Summary from '../components/LandingComponents/Summary.vue'
import FeaturedArtist from '../components/LandingComponents/FeaturedArtist.vue'
import Categories from '../components/Categories.vue'
</script>

<script>
export default {
  data() {
    return {
      Modal_Open: false
    }
  },
}
</script>




