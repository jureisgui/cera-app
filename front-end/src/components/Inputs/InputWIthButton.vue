<template>
  <div class="input_container">
    <input type="text" :placeholder="Inputplaceholder"/>
    <span class="material-symbols-outlined">add</span>
  </div>
</template>

<style scoped>
.input_container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
}

input {
  display: flex;
  min-width: 300px;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: none;
  padding: 10px;
}

input:focus{
    outline: none;
}

textarea::placeholder {
  color: #cacaca;
}

input .material-symbols-outlined{
  position: absolute;
  left: 100px;
}
</style>

<script setup>
defineProps({
  Inputplaceholder: {
    type: String,
    required: true,
  },
});
</script>
