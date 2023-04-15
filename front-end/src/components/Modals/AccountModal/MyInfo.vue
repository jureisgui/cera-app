<template>
    <div class="user_information">
        <div class="info-container">
            <div class="info-title">
                <p class="body_text">Name</p><span class="required">*</span>
            </div>
            <div class="input-wrapper short-input">
                <input v-model="user_body_data.first_name" class="InputStyle" type="text" placeholder="Enter your first name"><input v-model="user_body_data.last_name" class="InputStyle" type="text" placeholder="Enter your last name">   
            </div>
        </div>
        <div class="info-container">
            <div class="info-title">
                <p class="body_text">Email</p><span class="required">*</span>
            </div>
            <div class="input-wrapper">
                <input v-model="user_body_data.email" class="InputStyle" type="email" placeholder="Enter your email">                
            </div>
        </div>
        <div class="info-container">
            <div class="info-title">
                <p class="body_text">Number</p><span class="required">*</span>
            </div>
            <div class="input-wrapper">
                <input v-model="user_body_data.phone_number" class="InputStyle" type="text" placeholder="Enter your phone number">                
            </div>
        </div>
        <div class="info-container">
            <div class="info-title">
                <p class="body_text">Location</p><span class="required">*</span>
            </div>
            <div class="input-wrapper">
                <input v-model="user_body_data.location" class="InputStyle" type="text" placeholder="Enter your city/town">                
            </div>
        </div>   
        <span class="update_btn"><MainButton main_button_prop="Update" button_icon_prop="refresh" @click="update_user" /></span>   
        
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
    gap: 10px;
}

.short-input > * {
    flex: 1;
}
.InputStyle{
    height: 60px;
    width: 100%;
    border-radius: 10px;
    border: solid 1px #c4c4c4;
    padding: 10px;
}

textarea{
    box-sizing: border-box;
    border: 1px solid #C4C4C4;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    height: 100px;
    }

input:focus{
    outline: 1px solid #DCBA77;
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
    gap: 10px;
}
}
    
</style>

<script setup>

import MainButton from '@/components/Buttons/MainButton.vue'
            
</script>

<script>
export default {
  data() {
    return {
      user_body_data: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        location: "",
        },
        }   
    },
    methods: {
        async fetch_single_user(userID){
            const response = await fetch("http://localhost:4000/users/getuser/"+userID);
            const received_data = await response.json();
            this.user_body_data=received_data;
        },
      async update_user(userID){
            const response = await fetch("http://localhost:4000/users/update/"+this.logged_userID, {
                method:"PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.user_body_data)
        });
        const received_data = await response.json();     
        },
    },
    created(){
        this.logged_userID=localStorage.getItem("logged_userID")
        this.fetch_single_user(this.logged_userID)
    }
    
}
</script>