<template>
    <div>
        <span class="long-button button_text">{{ long_button_text }}</span>
    </div>
</template>

<style scoped>
.long-button{
    display: flex;
    background-color: #444739;
    color: #fff;
    border-radius: 113px;
    padding: 0.6em 1.1em;
    align-items: center;    
    justify-content: center;
}
.long-button:hover{
    background-color: #fff;
    color: #212121;
    border: solid 1px;
    cursor: pointer;
}
    
</style>

<script>
    export default{
        props:{
            long_button_text:{
                type: String,
                required: true
            }
        }
        
            
    }

</script>