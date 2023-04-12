<script setup>
import ListingInfo from "../AddListingModal/ListingInfo.vue";
import ListingSpecs from "../AddListingModal/ListingSpecs.vue";
import ListingShipping from "../AddListingModal/Shipping.vue"
import ListingTags from "../AddListingModal/ListingTags.vue";
import ImageUpload from "../AddListingModal/ImageUpload.vue";
import MainButton from "../../Buttons/MainButton.vue";
</script>
<template>
  <div v-if="ModalIsOpen" class="AddListingContainer">
    <div class="ListingModalMargin">
      <div class="back_arrow">
        <span @click="$emit('CloseModal')" class="material-symbols-outlined">arrow_back_ios</span>
      </div>
      <div class="AddNewListingHeading">
        <h1 class="heading_text">Add a New Listing</h1>
      </div>
      <div>
        <ListingInfo v-bind:title="title" v-on:update:title="updateTitle" v-on:update:subtitle="updateSubtitle"
          v-on:update:category="updateCategory" />
      </div>
      <div>
        <ListingSpecs  
        :Condition="radio_checked" 
        :dimensionsObj="specsGroup" />
      </div>
      <div>
        <ListingTags :Tags="tags" />
      </div>
      <div>
        <ImageUpload :Images="images" />
      </div>
      <ListingShipping :ShippingCondition="shipping" />
      <div class="Listing_Finish_Container">
        <div class="Listing_Info_Container">
          <div class="ListingInfoHeading">
            <h1 class="subheading_text">Finish
              <hr>
            </h1>
          </div>
          <div class="submit_listing">
            <MainButton @click="submitListing" main_button_prop="Submit Listing" button_icon_prop="publish" />
          </div>
        </div>
      </div>
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
.Listing_Info_Container{
        margin-top: 2em;
        border: solid 1px #444739;
        padding: 2em;
    }

.submit_listing{
  margin: 2em 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

<script>
export default {
  data() {
    return {
      ModalIsOpen: true,
      isNew: true,
      title: '',
      subtitle: '',
      category: '',
      tags:[],
      images:[],
      radio_checked:{},
      shipping:{},
      specify_costs:{},
      specsGroup:{
        description: '',
        width:'',
        diameter:'',
        capacity:'',
        dimensions:'',
        price:'',
      }
    }
  },

  methods: {
    CloseModal() {
      this.ModalIsOpen = false;
    },

    updateTitle(newVal) {
      this.title = newVal
    },

    updateSubtitle(newVal){
      this.subtitle = newVal
    },

    updateCategory(newVal){
      this.category = newVal
    },

    updateItemDesc(newVal){
      this.item_description = newVal
    },
    updateIsNew(newValue) {
      this.isNew = newValue
      if (this.isNew) {
        
      }
    },

    submitListing(){
      console.log(this.title);
      console.log(this.subtitle);
      console.log(this.category);
      console.log(this.specsGroup.description);
      console.log(this.isNew);
      console.log(this.tags);
      console.log(this.images);
      console.log(this.radio_checked);
      console.log(this.shipping);

  },
}};
</script>
