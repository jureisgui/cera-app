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
          <p class="error_msg">
            Log-in failed. Please enter correct email or password.
          </p>
          <MainInput Inputplaceholder="Email" />
        </div>
        <PasswordInput Password_placeholder="Password" />
        <LongBtn long_button_text="Log in" />
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
</style>

<script setup>
import LongBtn from "../../Buttons/LongButton.vue";
import MainInput from "../../Inputs/MainInput.vue";
import PasswordInput from "../../Inputs/PasswordInput.vue";
</script>
