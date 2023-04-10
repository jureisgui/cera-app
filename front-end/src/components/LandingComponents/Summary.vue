<script setup>
import MainButton from "../Buttons/MainButton.vue";
</script>

<template>
  <section class="summary_container">
    <h1 class="heading_text">Why sell on cera?</h1>

    <div class="summary_wrapper">
      <div class="summary_card">
        <h2 class="subheading_text">Connect with the Pottery community</h2>
        <p class="body_text">
          Connect with other Pottery enthusiasts in the community. Ask and answer
          questions or flick the seller a message.
        </p>
        <span
          ><MainButton
            main_button_prop="Learn More"
            button_icon_prop="arrow_right_alt"
            class="outline_button"
        /></span>
      </div>

      <div class="summary_card">
        <h2 class="subheading_text">Create unlimited listings in your shop!</h2>
        <p class="body_text">
          Your Cera shop can have unlimited listings completely FREE! Only a %5 fee
          applies to every sale.
        </p>
        <span
          ><MainButton
            main_button_prop="Learn More"
            button_icon_prop="arrow_right_alt"
            class="outline_button"
        /></span>
      </div>

      <div class="summary_card">
        <h2 class="subheading_text">Promote your work in a niche environment</h2>
        <p class="body_text">
          Cera allows you to put your work in front of a niche audience, meaning its
          easier to find buyers!
        </p>
        <span
          ><MainButton
            main_button_prop="Learn More"
            button_icon_prop="arrow_right_alt"
            class="outline_button"
        /></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.heading_text {
  color: #212121;
  margin-top: 1em;
  margin-bottom: 2em;
}

.subheading_text {
  padding-bottom: 1em;
}

.summary_container {
  margin-left: 10%;
  margin-right: 10%;
  border-bottom: solid 1px;
}

.summary_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary_card {
  padding-left: 4em;
  padding-right: 1em;
  margin-bottom: 4em;
  border-left: 1px solid rgb(0, 0, 0);
  flex: 1;
}

.outline_button {
  background-color: #fff;
  color: #444739;
  border: 1px solid #444739;
  margin-top: 2em;
}

.outline_button:hover {
  background-color: #444739;
  color: #fff;
}
</style>
