<template>
    <div class="Listing_Info_Container">
        <div class="ListingInfoHeading">
            <h1 class="subheading_text">What are you selling?<hr></h1>
        </div>
            <div class="input_dropdown_container body_text">
                <div class="title_input">
                    <div><label for="Title"> <span style="color: red;">*</span> Title:</label></div>
                    <div><Main_Input class="input_width" Inputplaceholder='e.g Small Bowl, Sculpture, Mug' v-bind:value="title" v-on:input="updateTitle"/></div>
                </div>

                <div class="title_input">
                    <div><label for="Title">Subtitle</label></div>
                    <div><Main_Input class="input_width" Inputplaceholder='e.g Gift Idea, Shellac Glazed Technique, Sale' v-bind:value="subtitle" v-on:input="updateSubtitle"/></div>
                </div>

                <div class="title_input">
                    <div><label for="Title"><span style="color: red;">*</span> Categories</label></div>
                    <div><Category_Dropdown class="input_width" v-bind:value="category" v-on:input="updateCategory"/></div>
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

<script setup>
import Main_Input from '../../Inputs/MainInput.vue'
import Category_Dropdown from '../../Inputs/Category_Dropdown.vue';

defineProps({
  title: {
    type: String,
    required: true
  },

  subtitle: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },
});
</script>

<script>
export default {
    data() {
        return {
            localTitle: this.title,
            localSubtitle: this.subtitle,
            localCategory: this.category
    }
  },
  watch: {
    localTitle(newVal) {
      this.$emit('update:title', newVal)
    },
    localSubtitle(newVal) {
      this.$emit('update:subtitle', newVal)
    },
    localCategory(newVal) {
      this.$emit('update:category', newVal)
    }

  },

  methods: {
    updateTitle(event) {
      this.localTitle = event.target.value
    },

    updateSubtitle(event) {
      this.localSubtitle = event.target.value
    },

    updateCategory(event) {
      this.localCategory = event.target.value
    },
  },
}
</script>

