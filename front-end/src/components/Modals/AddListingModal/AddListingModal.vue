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
        <ListingInfo v-bind:title="title" 
        v-on:update:title="updateTitle"
        v-on:update:subtitle="updateSubtitle"
        v-on:update:category="updateCategory"/>
      </div>
      <div>
        <ListingSpecs v-bind:item_description="item_description"
        v-on:update:item_description="updateItemDesc"/>
      </div>
      <div>
        <ListingTags />
        </div>
        <div>
        <ImageUpload/>
        </div>
        <ListingShipping/>
        <div class="Listing_Finish_Container">
          <div class="Listing_Info_Container">
        <div class="ListingInfoHeading">
            <h1 class="subheading_text">Finish<hr></h1>
        </div>
        <div class="submit_listing"><MainButton @click="submitListing" main_button_prop="Submit Listing" button_icon_prop="publish"/>
        
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
      title: '',
      subtitle: '',
      category: '',
      specs: {},
      tags:[],
      images:[],
      shipping:{}
    };
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


    submitListing(){
      console.log(this.title);
      console.log(this.subtitle);
      console.log(this.category);
      console.log(this.item_description);
  },
}};
</script>
