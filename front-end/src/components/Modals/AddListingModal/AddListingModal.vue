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
      <!-- LISTING INFO -->
      <div>
        <div class="Listing_Info_Container">
          <div class="ListingInfoHeading">
            <h1 class="subheading_text">
              What are you selling?
              <hr />
            </h1>
          </div>
          <div class="input_dropdown_container body_text">
            <div class="title_input">
              <div>
                <label for="Title">
                  <span style="color: red">*</span> Title:</label
                >
              </div>
              <div>
                <input
                  class="input_width"
                  placeholder="e.g Small Bowl, Sculpture, Mug"
                  v-model="ListingInfo.title"
                />
              </div>
            </div>
            <div class="title_input">
              <div><label for="Title">Subtitle</label></div>
              <div>
                <input
                  class="input_width"
                  placeholder="e.g Gift Idea, Shellac Glazed Technique, Sale"
                  v-model="ListingInfo.subtitle"
                />
              </div>
            </div>
            <div class="title_input">
              <label for="Title"
                ><span style="color: red">*</span> Category</label
              >
              <select class="input_width" v-model="ListingInfo.category">
                <option value="" disabled selected>Select Category</option>
                <option value="Kitchenware">Kitchenware</option>
                <option value="Homeware">Homeware</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Garden">Garden</option>
                <option value="Sculpture">Sculpture</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- LISTING SPECS -->
      <div>
        <div class="Listing_Info_Container body_text">
          <div class="ListingInfoHeading">
            <h1 class="subheading_text">
              Item Specifications
              <hr />
            </h1>
          </div>

          <div class="input_dropdown_container body_text">
            <div class="title_input">
              <label for="Title">
                <span style="color: red">*</span>Write a description for your
                listing.</label
              >
              <textarea
                class="textarea body_text"
                placeholder="Write your product description here..."
                rows="10"
                cols="80"
                v-model="dimensionsObj.description"
              ></textarea>
            </div>
          </div>

          <div class="item_specs_container">
            <div class="specs_third">
              <div class="center">
                <label for="Title">
                  <span style="color: red">*</span>Condition</label
                >
                <div class="col row">
                  <input
                    type="radio"
                    value="New"
                    v-model="Condition.radio_checked"
                  /><label for="new">New</label>
                </div>
                <div class="col">
                  <input
                    type="radio"
                    value="Pre-loved"
                    v-model="Condition.radio_checked"
                  /><label for="preloved">Pre-Loved</label>
                </div>
              </div>
            </div>

            <div class="divider"></div>

            <div class="specs_third">
              <label for="Title">Dimensions</label>
              <div class="row">
                <div>
                  <input
                    class="dimensions"
                    placeholder="Width"
                    v-model="dimensionsObj.width"
                  />
                </div>
                <div>
                  <input
                    class="dimensions"
                    placeholder="Diameter"
                    v-model="dimensionsObj.diameter"
                  />
                </div>
              </div>
              <div class="row">
                <div>
                  <input
                    class="dimensions"
                    placeholder="Length"
                    v-model="dimensionsObj.length"
                  />
                </div>
                <div>
                  <input
                    class="dimensions"
                    placeholder="Capacity"
                    v-model="dimensionsObj.capacity"
                  />
                </div>
              </div>
            </div>

            <div class="divider"></div>

            <div class="specs_third">
              <label for="Title"> <span style="color: red">*</span>Price</label>
              <div class="row">
                <input
                  type="number"
                  min="0"
                  class="dimensions"
                  placeholder="$"
                  v-model="dimensionsObj.price"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- LISTING TAGS -->
      <div>
        <ListingTags :Tags="tags" />
      </div>
      <!-- IMAGE UPLOAD -->
      <div>
        <ImageUpload :Images="images" />
      </div>
      <!-- LISTING SHIPPING -->
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

/* LISTING INFO STYLES */
select {
  height: 60px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  padding: 10px;
  color: #7d7d7d;
}

input {
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  padding: 10px;
}
.Listing_Info_Container {
  margin-top: 2em;
  border: solid 1px #444739;
  padding: 2em;
}

.input_dropdown_container {
  padding: 2em;
  display: flex;
  flex-direction: column;
}

.title_input {
  margin: 1em 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.input_width {
  width: 400px;
}

/* LISTING SPECS STYLES */
.textarea {
  color: #000;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  height: 200px;
}

textarea::placeholder {
  color: #cacaca;
}

textarea:focus {
  outline: 1px solid #DCBA77;
}

.dimensions {
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  padding: 10px;
}

.Listing_Info_Container {
  margin-top: 2em;
  border: solid 1px #444739;
  padding: 2em;
}

.input_dropdown_container {
  padding: 2em;
  display: flex;
  flex-direction: column;
}

.title_input {
  margin: 1em 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.item_specs_container {
  margin: 0 20%;
  display: flex;
}

.specs_third {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

}

.row {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.col {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center
}

.divider {
  height: 140px;
  width: 1px;
  background-color: #44473975;
  margin: 2em 1em;
}
/* LISTING TAGS STYLES */

/* IMAGE UPLOAD STYLES */

/* LISTING SHIPPING STYLES */
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
        price: "",
      },
      tags: [],
      images: [],
      shipping: {},
      specify_costs: {},
    };
  },
  methods: {
    CloseModal() {
      this.ModalIsOpen = false;
    },

    submitListing() {
      console.log(this.listing_info.title);
      console.log(this.listing_info.subtitle);
      console.log(this.listing_info.category);
      console.log(this.specsGroup);
      console.log(this.radio_checked);
      console.log(this.tags);
      console.log(this.images);
      console.log(this.shipping);
    },
  },
};
</script>
