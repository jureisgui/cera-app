<template>
  <Header Header_class="green" Logo="src/assets/img/white_logo-01-01.svg" />
  <main>
  <Success success_prop="Sign up" close_prop="tab or window" class="modal" v-if="modal_on" />
    <section class="signup_section">
      <div class="signup_title">
        <h2 class="subheading_text">Sign Up</h2>
        <p class="body_text">
          Welcome to Cera! Become part of our Pottery community!
        </p>
      </div>
      <div class="form">
        <div class="input_row body_text short_input">
          <div class="text_input">
            <p class="error_msg" v-if="!form_valid">Please enter your first name<sup>*</sup></p>
            <MainInput Inputplaceholder="First name" :add_user_prop="user_body_data.first_name" />
          </div>
          <div class="text_input">
            <p class="error_msg" v-if="!form_valid">Please enter your last name<sup>*</sup></p>
            <MainInput Inputplaceholder="Last name" :add_user_prop="user_body_data.last_name" />
          </div>
        </div>
        <div class="input_row body_text">
          <p class="error_msg" v-if="!form_valid">Please enter a valid email<sup>*</sup></p>
          <MainInput Inputplaceholder="Email" :add_user_prop="user_body_data.email" />
        </div>
        <div class="input_row body_text">
          <p class="error_msg" v-if="!form_valid">
            Password must be at least 8 characters<sup>*</sup>
          </p>
          <PasswordInput Inputplaceholder="Password" :add_user_prop="login_body_data.password" />
        </div>
        <div class="input_row body_text">
          <p class="error_msg" v-if="!form_valid">
            Please enter your password again to ensure it is correct<sup>*</sup>
          </p>
          <PasswordInput Inputplaceholder="Confirm password" />
        </div>
        <LongBtn long_button_text="Sign up" />
      </div>
      <div class="bottom_text body_text">
        <p>
          Already have an account with Cera? <span class="link">Log in</span>
        </p>
        <p small_text>
          Some terms and conditions that will never be seen by no one, not ever!
          But if you want to visit this 404, go for it!
          <span class="link">Terms of Use</span> and
          <span class="link">Privacy policy</span>
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
    position: relative;
}
.signup_section {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 50%;
  align-items: center;
  margin: 0 auto;
  padding: 4em 0;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 90%;
}

.signup_title {
  text-align: center;
}

.short_input {
  display: flex;
  gap: 15px;
}

.text_input {
    flex: 1;
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
    color: #DCBA77;
}

.error_msg {
  color: #DB1717;
  font-size: 12px;
}

.modal {
    position: absolute;
    top: 20%;
    left: 35%;
}
</style>

<script setup>
import Header from "../components/Header.vue";
import MainInput from "../components/Inputs/MainInput.vue";
import PasswordInput from "../components/Inputs/PasswordInput.vue";
import LongBtn from "../components/Buttons/LongButton.vue";
import Success from '../components/Success.vue'
</script>

<script>
export default {
  data() {
    return {
      user_body_data: {first_name: '', last_name: '', email: '', phone_number: '', location: '', seller_image: '', seller_name: '', description: '', my_listings: []},
      login_body_data: {email: '', password: ''},
      form_valid: true,
      modal_on: false
    };
  },
  methods:{
    async create_new_user_userDB(){
      const response = await fetch("http://localhost:4000/users/adduser", {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.user_body_data)
      });
      const received_data = await response.json();
    },
    async create_new_user_loginDB(){
      const response = await fetch("http://localhost:4000/logins/addlogin", {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.login_body_data)
      });
      const received_data = await response.json();
    },
    check_inputs(){
      if(this.user_body_data.first_name.length>0 && this.user_body_data.last_name.length>0 && this.user_body_data.email.length>0 && this.user_body_data.email.includes('@') && this.login_body_data.password.length>=8)
      this.form_valid = true;
      else this.form_valid = false;
    },
    submit_to_add_user(){
      this.check_inputs();
      this.create_new_user_userDB();
      this.create_new_user_loginDB();
      this.modal_on = true;
    }
  },
  created(){
    
  }
};
</script>
