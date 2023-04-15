<template>
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
        <div class="shipping_cost_input"><input class="input_style" v-if="reveal" v-model="ShippingCondition.specify_costs"/></div>
        <div class="shipping_option"><input @click="reveal = false" type="radio" value="I dont know" v-model="ShippingCondition.shipping">I dont know yet</div>
    </div>
  </div>
    
  </div>
</template>

<style scoped>

.input_style{
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

    @media (max-width: 600px) {

}
    </style>

<script setup>
import MainInput from '../../Inputs/MainInput.vue';

defineProps({

  ShippingCondition: {
    type: Boolean,
    required: true
  },


});
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
