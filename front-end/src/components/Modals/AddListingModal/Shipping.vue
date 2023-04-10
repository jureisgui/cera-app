<template>
  <div class="Listing_Info_Container body_text">
    <div>
      <h1 class="subheading_text">Shipping & Pickup<hr/></h1>
    </div>

    <div class="shipping_container_wrapper">
    <div class="shipping_container">
        <div class="OptionTitle"><span>Choose a Pickup Option<sup>*</sup></span></div>
        <div class="shipping_option"><input type="radio">No Pickup</div>
        <div class="shipping_option"><input type="radio">Pickup Available</div>
        <div class="shipping_option"><input type="radio">Must Pickup</div>
    </div>
    <div class="shipping_container">
        <div class="OptionTitle"><span>Choose a Shipping Option<sup>*</sup></span></div>
        <div class="shipping_option"><input type="radio">Free Shipping</div>
        <div class="shipping_option"><input type="radio">Specify Shipping Costs</div>
        <div class="shipping_option"><input type="radio">I dont know yet</div>
    </div>
  </div>
    

  </div>
</template>

<style scoped>

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
        gap: 20px;
    }

    .shipping_option{
        display: flex;
        gap: 10px;
    }
    </style>

<script setup></script>
