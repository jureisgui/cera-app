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
    </div>
  </div>
</template>

<style scoped>
.login_modal_div {
  background-color: #fff;
  width: 50vw;
  height: 90vh;
  position: fixed;
  top: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.close_icon {
  color: #000;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>

<script setup></script>
