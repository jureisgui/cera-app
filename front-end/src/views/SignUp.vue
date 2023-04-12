<template>
  <Header Header_class="green" Logo="src/assets/img/white_logo-01-01.svg" />
  <main>
    <Success
      @Close_Modal="modal_on = false"
      success_prop="Sign up"
      close_prop="tab or window"
      class="modal"
      v-if="modal_on"
    />
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
          <p class="error_msg" v-if="!fname_valid">
            Please enter your first name<sup>*</sup>
         </p>
          <input v-model="user_body_data.first_name" class="InputStyle" type="text" placeholder="First Name">
          </div>
          <div class="text_input">
            <p class="error_msg" v-if="!lname_valid">
              Please enter your last name<sup>*</sup>
            </p>
            <input v-model="user_body_data.last_name" class="InputStyle" type="text" placeholder="Last Name">
          </div>
        </div>
        <div class="input_row body_text">
          <p class="error_msg" v-if="!email_valid">
            Please enter a valid email<sup>*</sup>
          </p>
          <input v-model="user_body_data.email" class="InputStyle" type="text" placeholder="Email">
        </div>
        <div class="input_row body_text">
          <p class="error_msg" v-if="!pw_valid">
            Password must be at least 8 characters<sup>*</sup>
          </p>
          <input v-model="login_body_data.password" class="InputStyle" type="password" placeholder="Password">
        </div>
        <div class="input_row body_text">
          <p class="error_msg" v-if="!confirm_pw_valid">
            Please enter your password again to ensure it is correct<sup>*</sup>
          </p>
          <input v-model="confirm_pw" class="InputStyle" type="password" placeholder="Confirm Password">
        </div>
        <LongBtn long_button_text="Sign up" @click="submit_to_add_user" />
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
  color: #dcba77;
}

.error_msg {
  color: #db1717;
  font-size: 12px;
}

.modal {
  position: absolute;
  top: 20%;
  left: 35%;
}

.InputStyle{
  height: 60px;
  width: 100%;
  border-radius: 10px;
  border: solid 1px #c4c4c4;
  padding: 10px;
}
</style>

<script setup>
import Header from "../components/Header.vue";
import LongBtn from "../components/Buttons/LongButton.vue";
import Success from "../components/Success.vue";
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
        seller_image: "",
        seller_name: "",
        description: "",
        my_listings: [],
      },
      login_body_data: { email: "", password: "" },
      form_valid: true,
      modal_on: false,
      confirm_pw: "",
      fname_valid: true,
      lname_valid: true,
      email_valid: true,
      pw_valid: true,
      confirm_pw_valid: true,
      created_user_id:''
    }
  },
  methods: {
    async create_new_user_userDB() {
      const response = await fetch("http://localhost:4000/users/adduser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.user_body_data),
      });
      const received_data = await response.json();
      console.log(received_data);
      this.created_user_id = received_data._id;
      this.create_new_user_loginDB();
    },
    async create_new_user_loginDB() {
      const response = await fetch("http://localhost:4000/logins/addlogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email:this.user_body_data.email,password:this.login_body_data.password,user_id:this.created_user_id}),
      });
      const received_data = await response.json();
    },

   submit_to_add_user() {
  // Check if first name is valid
  if (this.user_body_data.first_name.length === 0) {
    this.fname_valid = false;
  } else {
    this.fname_valid = true;
  }
      // Check if last name is valid
      if (this.user_body_data.last_name.length === 0) {
        this.lname_valid = false;
      } else {
        this.lname_valid = true;
      }

      // Check if email is valid
      if (this.user_body_data.email.length === 0 || !this.user_body_data.email.includes("@")) {
      this.email_valid = false;
      } else {
      this.email_valid = true;
      }


      // Check if password is valid
      if (this.login_body_data.password.length < 8) {
        this.pw_valid = false;
      } else {
        this.pw_valid = true;
      }

      // Check if confirm password is valid
      if (this.login_body_data.password != this.confirm_pw) {
        this.confirm_pw_valid = false;
      } else {
        this.confirm_pw_valid = true;
      }

      // Check if all fields are valid
      if (
        this.fname_valid &&
        this.lname_valid &&
        this.email_valid &&
        this.pw_valid &&
        this.confirm_pw_valid
      ) {
        this.create_new_user_userDB();
        this.modal_on = true;
      } else {
        this.modal_on = false;
      }
    }},
  computed: {
    password_valid() {
      return this.login_body_data === this.confirm_pw;
    }
  },
};
</script>
