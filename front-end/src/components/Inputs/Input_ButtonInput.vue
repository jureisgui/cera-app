<template>
    <div class="input_container">
        <input type="text" :placeholder="Inputplaceholder" >
        <span class="material-symbols-outlined">{{icon_symbol}}</span>
    </div>
</template>

<style scoped>

.input_container{
    display: flex;
    position: relative;

}

input{
    display: flex;
    width: 100%;
    height: 60px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    padding: 10px;
}

.material-symbols-outlined{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}


textarea::placeholder { 
    color: #cacaca; 
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
