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
  display: flex;
  justify-content: space-between;
  border-radius: 113px;
  padding: 0.6em 1.1em;
  align-items: center;
  border: 1px solid #fff;
}

.main_button:hover {
  background-color: #fff;
  color: #444739;
  border: 1px solid #444739;
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