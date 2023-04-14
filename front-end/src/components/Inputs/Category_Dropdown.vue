<template>

    <select>
    <option value="" disabled selected>Select Category</option>
    <option value="Kitchenware">Kitchenware</option>
    <option value="Homeware">Homeware</option>
    <option value="Bathroom">Bathroom</option>
    <option value="Garden">Garden</option>
    <option value="Sculpture">Sculpture</option>
    </select>

</template>

<style scoped>

select{
    height: 60px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    padding:10px;
    color: #7D7D7D; 
}
    
</style>

<script setup>
defineProps({
    Inputplaceholder: {
    type: String,
    required: true
  },

  icon_symbol:{
    type: String,
    required: true
  }
});
</script>
