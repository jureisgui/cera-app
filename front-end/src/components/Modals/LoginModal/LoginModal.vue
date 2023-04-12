<template>
  <div class="modal_parent">
    <div class="login_modal_div">
      <div class="login_title">
        <span
          class="material-symbols-outlined close_icon"
          @click="$emit('close_login')"
        >
          close
        </span>
        <h2 class="subheading_text">Log in</h2>
        <p class="body_text">Hello Pottery People! Let's get logged in!</p>
      </div>
      <div class="form body_text">
        <div class="input_row">
          <p class="error_msg" v-if="!email_valid || !pw_valid">
            Log-in failed. Please enter correct email or password.
          </p>
          <input
            type="text"
            placeholder="Email"
            v-model="input_email"
            class="InputStyle"
          />
        </div>
        <input
          type="password"
          placeholder="Password"
          v-model="input_password"
          class="InputStyle"
        />
        <LongBtn long_button_text="Log in" @click="checkLogin" />
      </div>
      <div class="bottom_text body_text">
        <p>
          Don't have an account with Cera yet?
          <router-link to="/signup" target="_blank" class="link"
            >Sign up</router-link
          >
        </p>
        <p small_text>
          Some terms and conditions that will never be seen by no one, not ever!
          But if you want to visit this 404, go for it!
          <span class="link">Terms of Use</span> and
          <span class="link">Privacy policy</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login_modal_div {
  background-color: #fff;
  width: 50vw;
  height: 75vh;
  position: fixed;
  top: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0 3em;
}

.close_icon {
  color: #000;
  position: absolute;
  top: 10px;
  right: 10px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
}

.bottom_text {
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
}

.link {
  cursor: pointer;
  text-decoration: underline;
  color: #dc7777;
}
.link:hover {
  color: #dcba77;
}

.error_msg {
  color: #db1717;
  font-size: 12px;
}

.login_title {
  text-align: center;
}

.login_title:hover {
  cursor: pointer;
}

.InputStyle {
  height: 60px;
  width: 100%;
  border-radius: 10px;
  border: solid 1px #c4c4c4;
  padding: 10px;
}
</style>

<script setup>
import LongBtn from "../../Buttons/LongButton.vue";
import MainInput from "../../Inputs/MainInput.vue";
import PasswordInput from "../../Inputs/PasswordInput.vue";
</script>

<script>
export default {
  data() {
    return {
      email_valid: true,
      pw_valid: true,
      input_email: "",
      input_password: "",
      users_list: [],
      single_user_body_data: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        location: "",
        seller_image: "",
        seller_name: "",
        description: "",
        my_listings: [],
      },
      single_login_body_data: { email: "", password: "" },
      email_obj_from_logindb: ''
    };
  },
  methods: {
    async fetch_all_users() {
      const response = await fetch("http://localhost:4000/users/");
      const received_data = await response.json();
      this.users_list = received_data;
      console.log(received_data);
    },
    async getEmail() {
      const response = await fetch(
        `http://localhost:4000/logins/checklogin/`+this.input_email
      );
      const data = await response.json();
      this.email_obj_from_logindb = data;
      console.log(data);
    },
    checkLogin() {
      this.getEmail();
      if (this.email_obj_from_logindb.password == this.input_password)
        console.log('yay',this.email_obj_from_logindb.user_id);
      else 
        console.log('noo');
    },
  },
};
</script>
