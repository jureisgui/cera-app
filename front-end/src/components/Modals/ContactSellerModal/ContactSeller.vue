<template>
    <div class="modal_parent">
        <div class="contact_seller_modal">
            <span class="material-symbols-outlined close_icon" @click="$emit('close_modal')"> close </span>
            <div class="seller_info_wrapper">
                <div>
                    <!-- <img :src="seller_image" alt="Seller thumbnail"> --> 
                    <!-- Placeholder below -->
                    <img class="seller_thumbnail" src="@/assets/img/Person.png" alt="Seller Thumbnail">                
                </div>
                <div class="seller_info">
                    <h1 class="heading_text">{{ seller_name }} Cafe Concetto</h1>
                    <p class="body_text">{{ location }}Christchurch, New Zealand</p>
                    <span class="material-symbols-outlined star_filled">star_rate</span>
                    <span class="material-symbols-outlined star_filled">star_rate</span>
                    <span class="material-symbols-outlined star_filled">star_rate</span>
                    <span class="material-symbols-outlined star_filled">star_rate</span>
                    <span class="material-symbols-outlined star_unfilled">star_rate</span>                
                </div>            
            </div>
            <h2 class="subheading_text">Purchase Inquiry for:</h2>
            <div class="buyer_details">
                <h2 class="subheading_text">Your details</h2>
                <p class="body_text">{{ first_name }}{{ last_name }}Jane Doe</p>
                <p class="body_text">{{ email }}jane-doe@email.com</p>            
            </div>
            <MessageInput Messageplaceholder="Type your message here"/>
            <MainButton main_button_prop="Contact Seller" button_icon_prop="mail" />
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
    gap: 30px;
    padding: 0 3em;
    width: 60vw;
    background-color: #fff;
    position: fixed;
    height: 75vh;
    top: 105px;
    align-items: center; 
    justify-content: center;
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

.seller_info_wrapper{
    margin: 0 auto;
    display: flex;
    gap: 10px;
}

.seller_thumbnail{
    width: 115px;
    height: 115px;
    border-radius: 50%;
    border: solid 0.5px #7D7D7D;
}


.material-symbols-outlined {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

.star_filled{
    color: #DCBA77;
}

.star_unfilled{
    color: #E4E4E4;
}

.main_button{
    margin: 0 auto;
    background-color: #DC7777;
}
    
</style>

<script setup>
import MessageInput from '@/components/Inputs/MessageInput.vue'
import MainButton from '@/components/Buttons/MainButton.vue'

defineProps({
  success_prop: {
    type: String,
    required: true,
  },
});

</script>