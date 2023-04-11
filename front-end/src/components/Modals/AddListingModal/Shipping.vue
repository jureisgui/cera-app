<template>
  <div class="Listing_Info_Container body_text">
    <div>
      <h1 class="subheading_text">Shipping & Pickup<hr/></h1>
    </div>

    <div class="shipping_container_wrapper">
    <div class="shipping_container">
        <div class="OptionTitle"><span>Choose a Pickup Option<sup>*</sup></span></div>
        <div class="shipping_option"><input @click="reveal = false" type="radio" name="pick-up">No Pickup</div>
        <div class="shipping_option"><input @click="reveal = false" type="radio" name="pick-up">Pickup Available</div>
        <div class="shipping_option"><input @click="reveal = false" type="radio" name="pick-up">Must Pickup</div>
    </div>
    <div class="shipping_container">
        <div class="OptionTitle"><span>Choose a Shipping Option<sup>*</sup></span></div>
        <div class="shipping_option"><input @click="reveal = false" type="radio" name="pick-up">Free Shipping</div>
        <div class="shipping_option"><input @click="reveal = !reveal" type="radio" name="pick-up">Specify Shipping Costs</div>
        <div class="shipping_cost_input"><MainInput v-show="reveal"/></div>
        <div class="shipping_option"><input @click="reveal = false" type="radio" name="pick-up">I dont know yet</div>
    </div>
  </div>
    
  </div>
</template>

<style scoped>

input{
    color: #444739;
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

<script setup>
import MainInput from '../../Inputs/MainInput.vue';
</script>

<script>

export default {
    data() {
        return {
            reveal: false,
        
        }
        
    },
}

</script>
