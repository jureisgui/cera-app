<script setup>
import ListingInfo from "../AddListingModal/ListingInfo.vue";
import ListingSpecs from "../AddListingModal/ListingSpecs.vue";
import ListingShipping from "../AddListingModal/Shipping.vue"
import ListingTags from "../AddListingModal/ListingTags.vue";

</script>

<template>
  <div v-if="ModalIsOpen" class="AddListingContainer">
    <div class="ListingModalMargin">
      <div class="back_arrow">
        <span @click="$emit('CloseModal')" class="material-symbols-outlined"
          >arrow_back_ios</span
        >
      </div>
      <div class="AddNewListingHeading">
        <h1 class="heading_text">Add a New Listing</h1>
      </div>
      <div>
        <ListingInfo />
      </div>
      <div>
        <ListingSpecs />
      </div>
      <div>
        <ListingTags />
       
        </div>
        <ListingShipping/>
      </div>
    </div>
</template>

<style scoped>
.AddListingContainer {
  position: absolute;
  background-color: white;
  width: 100%;
  top: 105px;
  z-index: 10;
}

.AddNewListingHeading {
  text-align: center;
}

.ListingModalMargin {
  margin: 2em 10%;
}

.material-symbols-outlined {
  color: #444739;
  cursor: pointer;
}

.material-symbols-outlined:hover {
  transform: scale(1.2);
}
</style>

<script>
export default {
  data() {
    return {
      ModalIsOpen: true,
    };
  },

  methods: {
    CloseModal() {
      this.ModalIsOpen = false;
    },
  },
};
</script>
