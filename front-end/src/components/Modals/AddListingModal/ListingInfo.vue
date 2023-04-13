<template>
<div class="Listing_Info_Container">
  <div class="ListingInfoHeading">
    <h1 class="subheading_text">What are you selling?<hr></h1>
  </div>
  <div class="input_dropdown_container body_text">
    <div class="title_input">
      <div><label for="Title"> <span style="color: red;">*</span> Title:</label></div>
      <div><input class="input_width" placeholder='e.g Small Bowl, Sculpture, Mug' v-model="ListingInfo.title"/></div>
   </div>
     <div class="title_input">
         <div><label for="Title">Subtitle</label></div>
         <div><input class="input_width" placeholder='e.g Gift Idea, Shellac Glazed Technique, Sale' v-model="ListingInfo.subtitle"/></div>
     </div>
 <div class="title_input">
   <label for="Title"><span style="color: red;">*</span> Category</label>
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

</template>

<style scoped>
select{
    height: 60px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    padding:10px;
    color: #7D7D7D; 
}
  

input{
    display: flex;
    width: 100%;
    height: 60px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    padding: 10px;
}
    .Listing_Info_Container{
        margin-top: 2em;
        border: solid 1px #444739;
        padding: 2em;
    }

    .input_dropdown_container{
        padding: 2em;
        display: flex;
        flex-direction: column;
    }

    .title_input{
        margin: 1em 10%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }
  
    .input_width{
        width: 400px;
    }
</style>

<script setup>
defineProps({
ListingInfo: {
  type: Object,
  required:true
}
});
</script>

<script>
export default {
    data() {
        return {
         ListingInfo: '' 
    }
  },

}
</script>

