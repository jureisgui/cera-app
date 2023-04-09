<template>
  <div class="Listing_Info_Container body_text">
    <div class="ListingInfoHeading">
      <h1 class="subheading_text">Product Tags<hr/></h1>
    </div>

    <div class="product_tag_container">
    
        <div class="tags_title">
            <div>
                <div><label for=""> <span style="color: red;">*</span>Write a description for your listing.</label></div>
                <div><label for="">(You may add up to 10 tags)</label></div>
            </div>
        </div>

        <div class="product_tag_input">
        <InputWithButton/>
        
        
        
        </div>

    </div>
  </div>
</template>

<style scoped>



.Listing_Info_Container {
  margin-top: 2em;
  border: solid 1px #444739;
  padding: 2em;
}

.tags_title{
   margin: 3em 0 2em;
    display: flex;
    justify-content: center;
    text-align: center;
}

.product_tag_input{
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>

<script setup>
import InputWithButton from '../../Inputs/InputWIthButton.vue'
</script>
