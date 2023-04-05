<template>
    <div> 
        <textarea class="body_text" rows="6" cols="60" :placeholder="Messageplaceholder"></textarea>
    </div>
</template>

<style scoped>
    textarea{
        box-sizing: border-box;
        border: 1px solid #C4C4C4;
        border-radius: 10px;
        padding: 10px;
        resize: vertical;
        width: 100%;
    }

    textarea::placeholder{
        color: #cacaca;
    }

    textarea:focus{
        outline: 1px solid #DCBA77;
    }

    
</style>

<script setup>

defineProps({ 
    Messageplaceholder: { 
        type: String, 
        required: true } 
    });

</script>