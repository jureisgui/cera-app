<template>
        <div class="user_information">
        <div class="info-container">
            <div class="profile-image">
                <p class="body_text">Profile Picture</p>
                <img class="seller_thumbnail" src="@/assets/img/Person.png" alt="Seller thumbnail">
            </div>
            <div class="input-wrapper">
                <MainInput Inputplaceholder="Enter URL link to an image" />
            </div>
        </div>
        <div class="info-container">
            <div class="info-title">
                <p class="body_text">Seller/Trade Name</p>
            </div>
            <div class="input-wrapper">
                <MainInput Inputplaceholder="Enter your shop name" />
            </div>
        </div>

        <div class="info-container">
            <div class="info-title">
                <p class="body_text">About</p>
            </div>
            <div class="input-wrapper">
                <MessageInput Messageplaceholder="About your store" />
            </div>
        </div>   
        <span class="update_btn"><MainButton main_button_prop="Update" button_icon_prop="refresh" /></span>       
    </div>
</template>

<style scoped>
.user_information{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 2em;   
}

.info-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
}
.info-title {
    display: flex;
    justify-content: flex-end;
}

.profile-image{
    display: flex;
    flex-direction: column;  
    align-items: flex-end;
}

.seller_thumbnail{
    width: 115px;
    height: 115px;
    border-radius: 50%;
    border: solid 0.5px #7D7D7D;
}

.input-wrapper{
    text-align: left;
    max-width: 660px;
}

.update_btn{
    margin: 0 auto;
}

@media (max-width: 1000px) {
    .info-container{
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
}

    .info-title{
        justify-content:flex-start;
    }

    .profile-image{
        align-items: flex-start;
    }

}
    
</style>

<script setup>
import MainInput from '@/components/Inputs/MainInput.vue'
import MessageInput from '@/components/Inputs/MessageInput.vue'
import MainButton from '@/components/Buttons/MainButton.vue'

</script>