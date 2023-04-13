<script setup>
import ListingInfo from "../AddListingModal/ListingInfo.vue";
import ListingSpecs from "../AddListingModal/ListingSpecs.vue";
import ListingShipping from "../AddListingModal/Shipping.vue";
import ListingTags from "../AddListingModal/ListingTags.vue";
import ImageUpload from "../AddListingModal/ImageUpload.vue";
import MainButton from "../../Buttons/MainButton.vue";
</script>
<template>
  <div class="AddListingContainer">
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
        <ListingInfo :ListingInfo="listing_info" />
      </div>
      <div>
        <ListingSpecs :Condition="radio_checked" :dimensionsObj="specsGroup" />
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
            <h1 class="subheading_text">
              Finish
              <hr />
            </h1>
          </div>
          <div class="submit_listing">
            <MainButton
              @click="submitListing"
              main_button_prop="Submit Listing"
              button_icon_prop="publish"
            />
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

.Listing_Info_Container {
  margin-top: 2em;
  border: solid 1px #444739;
  padding: 2em;
}

.submit_listing {
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
      listing_info: {
        title: "",
        subtitle: "",
        category: "",
      },
      radio_checked: {},
      specsGroup: {
        description: "",
        width: "",
        diameter: "",
        capacity: "",
        height: "",
        price: "",
      },
      tags: [],
      images: [],
      shipping: {},
      specify_costs: {},
      product_body_data: {
        title: "",
        subtitle: "",
        category: "",
        item_description: "",
        condition: {},
        dimensions: { 
          width: "", 
          height: "", 
          diameter: "", 
          capacity: "" 
        },
        price: 0,
        product_tags: [],
        product_images: [],
        shipping: {},
        specify_costs: {},
      },
    };
  },
  methods: {
    CloseModal() {
      this.ModalIsOpen = false;
    },
    async create_new_listing_listingDB() {
      const response = await fetch("http://localhost:4000/listings/addlisting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.product_body_data),
      });
      const received_data = await response.json();
      console.log(received_data);
    },

    submitListing() {
      this.product_body_data.title = this.listing_info.title;
      this.product_body_data.subtitle = this.listing_info.subtitle;
      this.product_body_data.category = this.listing_info.category;
      this.product_body_data.item_description = this.specsGroup.description;
      this.product_body_data.condition = this.radio_checked;
      this.product_body_data.dimensions.width = this.specsGroup.width;
      this.product_body_data.dimensions.height = this.specsGroup.height;
      this.product_body_data.dimensions.diameter = this.specsGroup.diameter;
      this.product_body_data.dimensions.capacity = this.specsGroup.capacity;
      this.product_body_data.price = this.specsGroup.price;
      this.product_body_data.product_tags = this.tags;
      this.product_body_data.product_images = this.images;
      this.product_body_data.shipping = this.shipping;
      this.product_body_data.specify_costs = this.specify_costs;

      this.create_new_listing_listingDB();

    },
  },
};
</script>
