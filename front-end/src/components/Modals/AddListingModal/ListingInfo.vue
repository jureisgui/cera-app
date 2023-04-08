<script setup>
import Main_Input from '../../Inputs/MainInput.vue'
import Input_ButtonInput from '../../Inputs/Input_ButtonInput.vue';
</script>

<template>
    <div class="Listing_Info_Container">
        <div class="ListingInfoHeading">
            <h1 class="subheading_text">What are you selling?<hr></h1>
        </div>
            <div class="input_dropdown_container body_text">
                <div class="title_input">
                    <div><label for="Title"> <span style="color: red;">*</span> Title:</label></div>
                    <div><Main_Input class="input_width" Inputplaceholder='e.g Small Bowl, Sculpture, Mug'/></div>
                </div>

                <div class="title_input">
                    <div><label for="Title">Subtitle</label></div>
                    <div><Main_Input class="input_width" Inputplaceholder='e.g Small Bowl, Sculpture, Mug'/></div>
                </div>

                <div class="title_input">
                    <div><label for="Title"><span style="color: red;">*</span> Categories</label></div>
                    <div><Input_ButtonInput class="input_width" 
                    Inputplaceholder='Select Category'
                    icon_symbol="arrow_drop_down"/></div>
                </div>
             </div>
    </div>
</template>

<style scoped>
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

