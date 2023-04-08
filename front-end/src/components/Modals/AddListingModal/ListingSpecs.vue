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
                    <div><Main_Input class="input_width" Inputplaceholder='e.g Gift Idea, Shellac Glazed Technique, Sale'/></div>
                </div>

                <div class="title_input">
                    <div><label for="Title"><span style="color: red;">*</span> Categories</label></div>
                    <div><Category_Dropdown class="input_width"/></div>
                </div>
             </div>
    </div>
</template>

<style scoped>

.Listing_Info_Container{
    background-color: white;
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

</script>