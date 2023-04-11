<template>
  <div class="input_container">
    <input type="text" :placeholder="Inputplaceholder" v-model="newTag"/>
    <span @click="$emit('add_tag')" class="material-symbols-outlined">add</span>
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
.material-symbols-outlined{
  padding: 5px;
  cursor: pointer;
}

.material-symbols-outlined:hover{
  transform: scale(1.2);

}

</style>

<script>
export default {
  data() {
    return {
      tags:[]
    }
  },
}
</script>

<script setup>
defineProps({
  Inputplaceholder: {
    type: String,
    required: true,
  },
  tag_input:{
    type: String,
    required: true,
  }
});
</script>
