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
        <span
          @click="$emit('CloseModal')"
          class="material-symbols-outlined back_arrow"
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
                  class="input_width info_input"
                  placeholder="e.g Small Bowl, Sculpture, Mug"
                  v-model="ListingInfo.title"
                />
              </div>
            </div>
            <div class="title_input">
              <div><label for="Title">Subtitle</label></div>
              <div>
                <input
                  class="input_width info_input"
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
            <div class="specs_title_input">
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
        <div class="Listing_Info_Container body_text">
          <div class="ListingInfoHeading">
            <h1 class="subheading_text">
              Product Tags
              <hr />
            </h1>
          </div>

          <div class="product_tag_container">
            <div class="tags_title">
              <div>
                <div>
                  <label for="">
                    <span style="color: red">*</span>Write a description for
                    your listing.</label
                  >
                </div>
                <div><label for="">(You may add up to 10 tags)</label></div>
              </div>
            </div>

            <div class="product_tag_input">
              <div class="tag_input_container">
                <input type="text" v-model="newTag" class="tag_input" />
                <span @click="addTag" class="material-symbols-outlined add_tag"
                  >add</span
                >
              </div>
            </div>

            <div class="tags_container">
              <div class="row_tag">
                <div v-for="(tag, index) in Tags" :key="index" class="tag">
                  {{ tag }}
                  <span
                    @click="removeTag(tag)"
                    class="material-symbols-outlined small_close_btn"
                    >close</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- IMAGE UPLOAD -->
      <div>
        <div class="Listing_Info_Container body_text">
          <div class="ListingInfoHeading">
            <h1 class="subheading_text">
              Upload Listing Images
              <hr />
            </h1>
          </div>
          <div class="product_image_container">
            <div class="ImageUploadtitle">
              <div>
                <div>
                  <label for="">
                    <span style="color: red">*</span>Upload images of your
                    product</label
                  >
                </div>
                <div>
                  <label for=""
                    >(Enter the URL link to the image. Max 5 images)</label
                  >
                </div>
              </div>
            </div>
            <div class="product_image_input">
              <div class="img_upload_input_container">
                <input
                  type="text"
                  v-model="newImgUrl"
                  class="img_upload_input"
                />
                <span
                  @click="addImgbyUrl"
                  class="material-symbols-outlined add_img_upload"
                  >add</span
                >
              </div>
            </div>
            <div class="images_container">
              <div
                v-for="(imgUrl, index) in Images"
                :key="index"
                class="imageCard"
              >
                <img :src="imgUrl" alt="" />
                <span
                  @click="removeImg(imgUrl)"
                  class="material-symbols-outlined small_close_btn_img_upload"
                  >close</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- LISTING SHIPPING -->
      <div class="Listing_Info_Container body_text">
    <div>
      <h1 class="subheading_text">Shipping & Pickup<hr/></h1>
    </div>

    <div class="shipping_container_wrapper">
    <div class="shipping_container">
        <div class="OptionTitle"><span>Choose a Pickup Option<sup>*</sup></span></div>
        <div class="shipping_option"><input @click="reveal = false" type="radio" value="No Pickup" v-model="ShippingCondition.shipping">No Pickup</div>
        <div class="shipping_option"><input @click="reveal = false" type="radio" value="Pickup Available" v-model="ShippingCondition.shipping">Pickup Available</div>
        <div class="shipping_option"><input @click="reveal = false" type="radio" value="Must Pickup" v-model="ShippingCondition.shipping">Must Pickup</div>
    </div>
    <div class="shipping_container">
        <div class="OptionTitle"><span>Choose a Shipping Option<sup>*</sup></span></div>
        <div class="shipping_option"><input @click="reveal = false" type="radio" value="Free Shipping" v-model="ShippingCondition.shipping">Free Shipping</div>
        <div class="shipping_option"><input @click="reveal = !reveal" type="radio" value="Specify Shipping" v-model="ShippingCondition.shipping">Specify Shipping Costs</div>
        <div class="shipping_cost_input"><input class="input_style_shipping" v-if="reveal" v-model="ShippingCondition.specify_costs"/></div>
        <div class="shipping_option"><input @click="reveal = false" type="radio" value="I dont know" v-model="ShippingCondition.shipping">I dont know yet</div>
    </div>
  </div>
  </div>
<!-- LISTING SHIPPING END -->

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

.back_arrow {
  color: #444739;
  cursor: pointer;
}

.back_arrow:hover {
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

.info_input input {
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  padding: 10px;
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
  outline: 1px solid #dcba77;
}

.dimensions {
  display: flex;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  padding: 10px;
}

.specs_title_input {
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
  justify-content: center;
}

.divider {
  height: 140px;
  width: 1px;
  background-color: #44473975;
  margin: 2em 1em;
}

/* LISTING TAGS STYLES */
.tags_title {
  margin: 3em 0 2em;
  display: flex;
  justify-content: center;
  text-align: center;
}

.product_tag_input {
  display: flex;
  align-items: center;
  justify-content: center;
}

.row_tag {
  margin: 20px 30%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.tag {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: #444739 solid 1px;
  border-radius: 10px;
  width: 90px;
  height: 35px;
  margin: 10px;
}

.tag_input_container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
}

.tag_input input {
  display: flex;
  min-width: 300px;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: none;
  padding: 10px;
}

.tag_input input:focus {
  outline: none;
}

.small_close_btn.material-symbols-outlined {
  font-size: 0.8em;
  background-color: white;
  border: 1px solid #444739;
  color: #444739;
  position: absolute;
  right: -14px;
  top: -14px;
}

.small_close_btn.material-symbols-outlined:hover {
  transform: scale(1.1);
  background-color: #444739;
  color: white;
}
.add_tag.material-symbols-outlined {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  border: #444739 solid 1px;
  color: #444739;
  border-radius: 50%;
  margin: 5px;
}

.add_tag.material-symbols-outlined:hover {
  transform: scale(1.1);
}

/* IMAGE UPLOAD STYLES */
images_container{
    margin: 2em 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}
.imageCard{
    height: 150px;
    width: 150px;
    position: relative;
}
  .Listing_Info_Container {
  margin-top: 2em;
  border: solid 1px #444739;
  padding: 2em;
}

.ImageUploadtitle {
  margin: 3em 0 2em;
  display: flex;
  justify-content: center;
  text-align: center;
}

.product_image_input {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img_upload_row {
    background-color: #444739;
  margin: 20px 30%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.img_upload_tag {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: #444739 solid 1px;
  border-radius: 10px;
  width: 90px;
  height: 35px;
  margin: 10px;
}

.img_upload_input_container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
}

.img_upload_input input {
  display: flex;
  min-width: 300px;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: none;
  padding: 10px;
}

.img_upload_input input:focus {
  outline: none;
}

.small_close_btn_img_upload.material-symbols-outlined {
  font-size: 0.8em;
  background-color: white;
  border: 1px solid #444739;
  color: #444739;
  position: absolute;
  right: -14px;
  top: -14px;
}

.small_close_btn_img_upload.material-symbols-outlined:hover {
  transform: scale(1.1);
  background-color: #444739;
  color: white;
}
.add_img_upload.material-symbols-outlined {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
  border: #444739 solid 1px;
  color: #444739;
  border-radius: 50%;
  margin: 5px;
}

.add_img_upload.material-symbols-outlined:hover {
  transform: scale(1.1);
}  

/* LISTING SHIPPING STYLES */
.input_style_shipping{
    display: flex;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    padding: 10px;
}

sup{
    color: red;
}
  .Listing_Info_Container{
        margin-top: 2em;
        border: solid 1px #444739;
        padding: 2em;
    }

    .shipping_container_wrapper{
        margin: 2em 20%;
        display: flex;
        justify-content: space-between;
    }

    .shipping_container{
        display: flex;
        flex-direction: column;
    }

    .shipping_option{
        display: flex;
        gap: 10px;
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
        price: "",
      },
      tags: [],
      images: [],
      shipping: {},
      specify_costs: {},
      ListingInfo: "",
      RadioOn: true,
      max_images: 5,
      newImgUrl: '',
      reveal: false,
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
    addTag() {
      if (this.newTag.trim() !== "") {
        if (this.Tags.length < this.max_tags) {
          // check if maximum number of tags is reached
          this.Tags.push(this.newTag.trim());
          this.newTag = "";
        } else {
          alert("You have reached the maximum number of allowed tags.");
        }
      }
    },

    removeTag(tagToRemove) {
      const index = this.Tags.indexOf(tagToRemove);
      if (index !== -1) {
        // check if the tag is found in the array
        this.Tags.splice(index, 1); // remove the tag from the array
      }
    },
    addImgbyUrl() {
      if (this.newImgUrl.trim() !== "") {
        if (this.Images.length < this.max_images) {
          // check if maximum number of img_upload_tags is reached
          this.Images.push(this.newImgUrl.trim());
          this.newImgUrl = "";
        } else {
          alert("You have reached the maximum number of allowed images.");
        }
      }
    },

    removeImg(imgToRemove) {
      const index = this.Images.indexOf(imgToRemove);
      if (index !== -1) {
        // check if the img is found in the array
        this.Images.splice(index, 1); // remove the img from the array
      }
    }
  },
};
</script>
