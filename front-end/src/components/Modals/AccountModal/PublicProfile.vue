<template>
  <div class="user_information">
    <div class="info-container">
      <div class="profile-image">
        <p class="body_text">Profile Picture</p>
        <img
          class="seller_thumbnail"
          :src="user_body_data.seller_image"
          alt=""
        />
      </div>
      <div class="input-wrapper">
        <input
          v-model="user_body_data.seller_image"
          class="InputStyle"
          type="text"
          placeholder="Enter URL link to an image"
        />
      </div>
    </div>
    <div class="info-container">
      <div class="info-title">
        <p class="body_text">Seller/Trade Name</p>
      </div>
      <div class="input-wrapper">
        <input
          v-model="user_body_data.seller_name"
          class="InputStyle"
          type="text"
          placeholder="Enter your shop name"
        />
      </div>
    </div>

    <div class="info-container">
      <div class="info-title">
        <p class="body_text">About</p>
      </div>
      <div class="input-wrapper">
        <textarea
          v-model="user_body_data.description"
          rows="6"
          cols="60"
          placeholder="About your store"
        ></textarea>
      </div>
    </div>
    <span class="update_btn"
      ><MainButton
        main_button_prop="Update"
        button_icon_prop="refresh"
        @click="update_user"
    /></span>
  </div>
</template>

<style scoped>
.user_information {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 2em;
}

.info-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
.info-title {
  display: flex;
  justify-content: flex-end;
}

.profile-image {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.seller_thumbnail {
  width: 115px;
  height: 115px;
  border-radius: 50%;
  border: solid 0.5px #7d7d7d;
}
.InputStyle {
  height: 60px;
  width: 100%;
  border-radius: 10px;
  border: solid 1px #c4c4c4;
  padding: 10px;
}

textarea {
  box-sizing: border-box;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
}

.input-wrapper {
  text-align: left;
  max-width: 660px;
}

input:focus {
  outline: 1px solid #dcba77;
}

textarea:focus {
  outline: 1px solid #dcba77;
}

.update_btn {
  margin: 0 auto;
}

@media (max-width: 1000px) {
  .info-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .info-title {
    justify-content: flex-start;
  }

  .profile-image {
    align-items: flex-start;
  }
}
</style>

<script setup>
import MainButton from "@/components/Buttons/MainButton.vue";
</script>

<script>
export default {
  data() {
    return {
      user_body_data: {
        seller_image: "",
        seller_name: "",
        description: "",
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
