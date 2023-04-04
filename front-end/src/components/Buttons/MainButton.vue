<template>
  <div class="main_button button_text">
  <p>{{main_button_prop}}</p>
 <span class="material-symbols-outlined">{{ button_icon_prop }}</span>
</div>
</template>

<style scoped>
.main_button {
  width: 190px;
  background-color: #444739;
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  height: 43px;
  border-radius: 25px;
  align-items: center;
}
</style>

<script setup>
defineProps({
  button_icon_prop: { 
    type: String, 
    required: true
  },
  main_button_prop: { 
    type: String, 
    required: true
  },
});
</script>