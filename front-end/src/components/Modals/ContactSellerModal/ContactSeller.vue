<template>
    <div class="modal_parent">
        <div class="contact_seller_modal">
            <span class="material-symbols-outlined close_icon" @click="$emit('close_modal')"> close </span>
            <div class="seller_info_wrapper">
                <div class="seller_thumbnail">
                    <img src="" alt="">                
                </div>
                <div class="seller_info">
                    <h1 class="heading_text">{{ seller_name }} Cafe Concetto</h1>
                    <p class="body_text">{{ location }}Christchurch, New Zealand</p>
                    <span class="material-symbols-outlined">star_rate</span>
                    <span class="material-symbols-outlined">star_rate</span>
                    <span class="material-symbols-outlined">star_rate</span>
                    <span class="material-symbols-outlined">star_rate</span>
                    <span class="material-symbols-outlined">star_rate</span>                
                </div>            
            </div>
            <h2 class="subheading_text">Purchase Inquiry for:</h2>
            <div class="buyer_details">
                <h2 class="subheading_text">Your details</h2>
                <p class="body_text">{{ first_name }}{{ last_name }}Jane Doe</p>
                <p class="body_text">{{ email }}jane-doe@email.com</p>            
            </div>
            <MessageInput Messageplaceholder="Type your message here"/>
        </div>
  </div>
</template>

<style scoped>
.modal_parent {
    position: relative;
    background-color: #fff;
}

.contact_seller_modal{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    gap: 20px;
    border: 1px solid black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    width: 50vw;
    height: 40vw;
    Top: 160px; 
    Left: 450px;
}

.close_icon {
    color: #000;
    position: absolute;
    top: 10px;
    right: 10px;
}

.close_icon:hover {
    cursor: pointer;
    transform: scale(1.1);
}
    
</style>

<script setup>
import MessageInput from '@/components/Inputs/MessageInput.vue'

defineProps({
  success_prop: {
    type: String,
    required: true,
  },
});

</script>