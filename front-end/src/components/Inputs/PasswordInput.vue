<template>
    <div class="input_container">
        <input type="password" :placeholder="Inputplaceholder">

    </div>
</template>

<style scoped>

.input_container{
    display: flex;

}

input{
    display: flex;
    width: 100%;
    height: 60px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    padding: 10px;
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
  }
});

</script>