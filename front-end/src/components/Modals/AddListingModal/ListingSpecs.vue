<template >
    <div class="Listing_Info_Container body_text">
        <div class="ListingInfoHeading">
            <h1 class="subheading_text">Item Specifications<hr></h1>
        </div>

            <div class="input_dropdown_container body_text">
                <div class="title_input">
                    <div><label for="Title"> <span style="color: red;">*</span>Write a description for your listing.</label></div>
                    <div><DescriptionInput v-bind:value="item_description" v-on:input="updateItemDesc"/></div>
                </div>
             </div>

        <div class="item_specs_container">
             
              <div class="specs_third">
              <div class="center">
                <label for="Title"> <span style="color: red;">*</span>Condition</label>
                    <div class="col row"><input type="radio" name="Used" id=""><label for="">New</label></div>
                    <div class="col"><input type="radio" name="Used" id=""><label for="">Pre-Loved</label></div>
                </div>
             </div>

             <div class="divider"></div>

              <div class="specs_third">
                    <label for="Title">Dimensions</label>
                    <div class="row">
                    <div><MainInputVue Inputplaceholder="Width"/></div>
                    <div><MainInputVue Inputplaceholder="Diameter"/></div>
                    </div>
                    <div class="row">
                    <div><MainInputVue Inputplaceholder="Length"/></div>
                    <div><MainInputVue Inputplaceholder="Capacity"/></div>
                    </div>
                </div>

                <div class="divider"></div>

              <div class="specs_third">
                <label for="Title"> <span style="color: red;">*</span>Price</label>
                <div class="row"><MainInputVue Inputplaceholder="$"/></div>
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
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }

    .item_specs_container{
        margin: 0 20%;
        display: flex;
    }

    .specs_third{
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

    }

    .row{
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }

    .col{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .center{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center
    }

    .divider{
        height: 140px;
        width: 1px;
        background-color: #44473975;
        margin: 2em 1em;
    }

</style>

<script setup>
import DescriptionInput from '../../Inputs/DescriptionInput.vue'
import MainInputVue from '../../Inputs/MainInput.vue';

defineProps({
  item_description: {
    type: String,
    required: true
  },

});
</script>

<script>
export default {
    data() {
        return {
            localItemDesc: this.item_description,

    }
  },
  watch: {
    localItemDesc(newVal) {
      this.$emit('update:item_description', newVal)
    },


  },

  methods: {
    updateItemDesc(event) {
      this.localItemDesc = event.target.value
    },
  },
}
</script>