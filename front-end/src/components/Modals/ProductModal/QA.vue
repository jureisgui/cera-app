<template>
    <div class="question_card body_text">
        <div class="question_div">
            <!-- User initials -->
            <div class="img_container"></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, doloremque?</p>
        </div>
        <div class="answer_div">
            <!-- Seller pic or initials -->
            <div class="img_container"></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, doloremque?</p>
        </div>
    </div>
</template>

<style scoped>

.question_card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 1em;
    border-bottom: 1px solid #000;
}   
    .question_div, .answer_div {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .img_container {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: aquamarine;
    }
    
</style>

<script setup>
defineProps({
  question_card_prop: { 
    type: String, 
    required: true
  },
});
</script>