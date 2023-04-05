<template>
    <div class="textarea_div">
    <textarea name="description_input" rows="10" cols="80" class="body_text textarea" placeholder="Sample Description: This small bowl set is made out of clay and then baked at 300 degrees. They are glazed with a mixture or resin, gold flake powder and shellac. 
    
Our store specialises in making bowls. Bowls are cool and good for cereal."></textarea>
</div>
</template>

<style scoped>
    .textarea {
        color: #000;
        border: 1px solid #7D7D7D;
        border-radius: 3px;
        padding: 10px;
    }

    .textarea_div {
        display: flex;
        justify-content: center;
        margin: 10px;
    }

    textarea::placeholder {
        color: #cacaca;
    }

    textarea:focus {
        outline: 1px solid #DCBA77;
    }
</style>

<script setup>

</script>