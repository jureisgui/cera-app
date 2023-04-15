<template >
  <div class="Listing_Info_Container body_text">

    <div class="ListingInfoHeading">
      <h1 class="subheading_text">Item Specifications
        <hr>
      </h1>
    </div>

    <div class="input_dropdown_container body_text">
      <div class="title_input">
        <label for="Title"> <span style="color: red;">*</span>Write a description for your listing.</label>
        <textarea class="textarea body_text" placeholder="Write your product description here..." rows="10" cols="80"
          v-model="dimensionsObj.description"></textarea>
      </div>
    </div>

    <div class="item_specs_container">

      <div class="specs_third">
        <div class="center">
          <label for="Title"> <span style="color: red;">*</span>Condition</label>
          <div class="col row"><input type="radio" value="New" v-model="Condition.radio_checked"><label
              for="new">New</label></div>
          <div class="col"><input type="radio" value="Pre-loved" v-model="Condition.radio_checked"><label
              for="preloved">Pre-Loved</label></div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="specs_third">
        <label for="Title">Dimensions</label>
        <div class="row">
          <div><input class="dimensions" placeholder="Width" v-model="dimensionsObj.width" /></div>
          <div><input class="dimensions" placeholder="Diameter" v-model="dimensionsObj.diameter" /></div>
        </div>
        <div class="row">
          <div><input class="dimensions" placeholder="Length" v-model="dimensionsObj.length" /></div>
          <div><input class="dimensions" placeholder="Capacity" v-model="dimensionsObj.capacity" /></div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="specs_third">
        <label for="Title"> <span style="color: red;">*</span>Price</label>
        <div class="row"><input type="number" min="0" class="dimensions" placeholder="$" v-model="dimensionsObj.price" /></div>
      </div>

    </div>
  </div>
</template>

<style scoped>
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

@media (max-width: 600px) {
  .Listing_Info_Container {
  margin-top: 2em;
  border: solid 1px #444739;
  padding: 1em;
}
.input_dropdown_container{
        padding: 0;
        display: flex;
        flex-direction: column;
    }
    .title_input{
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
  .item_specs_container {
  margin: 0;
  display: flex;
  gap: 30px;
  align-items: center;
  flex-direction: column;
}

.divider{
  display: none;
}
}
</style>

<script setup>
defineProps({

  Condition: {
    type: Boolean,
    required: true
  },

  dimensionsObj: {
    type: Object,
    required: true
  }


});
</script>

<script>
export default {
  data() {
    return {
      RadioOn: true
    }
  },
}
</script>