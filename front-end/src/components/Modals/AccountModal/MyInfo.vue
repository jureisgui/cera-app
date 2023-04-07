<template>
    <div class="user_information">
        <div class="info-container">
            <div class="info-title">
                <p class="body_text">Name</p><span class="required">*</span>
            </div>
            <div class="input-wrapper short-input">
                <MainInput Inputplaceholder="First name" /><MainInput Inputplaceholder="Last name" />
            </div>
        </div>
        <div class="info-container">
            <div class="info-title">
                <p class="body_text">Email</p><span class="required">*</span>
            </div>
            <div class="input-wrapper">
                <MainInput Inputplaceholder="Email" />
            </div>
        </div>
        <div class="info-container">
            <div class="info-title">
                <p class="body_text">Number</p><span class="required">*</span>
            </div>
            <div class="input-wrapper">
                <MainInput Inputplaceholder="Number" />
            </div>
        </div>
        <div class="info-container">
            <div class="info-title">
                <p class="body_text">Location</p><span class="required">*</span>
            </div>
            <div class="input-wrapper">
                <MainInput Inputplaceholder="Location" />
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
    justify-content:flex-end;
}
.short-input{
    display: flex;
    gap: 10px
}

.short-input > * {
    flex: 1;
}

.input-wrapper{
    text-align: left;
    max-width: 660px;
}

.required{
    color: #DC7777;
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

.info-title {
    justify-content:flex-start
}

.short-input{
    flex-direction: column;
    gap: 10px
}
}
    
</style>

<script setup>
import MainInput from '@/components/Inputs/MainInput.vue'
import MainButton from '@/components/Buttons/MainButton.vue'


</script>