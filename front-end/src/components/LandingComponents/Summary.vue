<script setup>
import MainButton from "../Buttons/MainButton.vue";
</script>

<template>
  <section class="summary_container">
    <h1 class="heading_text">Why sell on cera?</h1>

    <div class="summary_wrapper">
      <div class="summary_card">
        <div class="text-wrapper">
          <h2 class="subheading_text">Connect with the Pottery community</h2>
          <p class="body_text">
            Connect with other Pottery enthusiasts in the community. Ask and answer
            questions or flick the seller a message.
          </p>
        </div>
        <div class="button_wrapper">
          <MainButton
            main_button_prop="Learn More"
            button_icon_prop="arrow_right_alt"
            class="outline_button"
          />
        </div>
      </div>

      <div class="summary_card">
        <div class="text-wrapper">
          <h2 class="subheading_text">Create unlimited listings in your shop!</h2>
          <p class="body_text">
            Your Cera shop can have unlimited listings completely FREE! Only a %5 fee
            applies to every sale.
          </p>
        </div>
        <div class="button_wrapper">
          <MainButton
            main_button_prop="Learn More"
            button_icon_prop="arrow_right_alt"
            class="outline_button"
          />
        </div>
      </div>

      <div class="summary_card">
        <div class="text-wrapper">
          <h2 class="subheading_text">Promote your work in a niche environment</h2>
          <p class="body_text">
            Cera allows you to put your work in front of a niche audience, meaning its
            easier to find buyers!
          </p>
        </div>
        <div class="button_wrapper">
          <MainButton
            main_button_prop="Learn More"
            button_icon_prop="arrow_right_alt"
            class="outline_button"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.heading_text {
  color: #212121;
  margin-top: 1.2em;
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
  flex-wrap: wrap;
}

.summary_card {
  padding-right: 1em;
  margin-bottom: 4.5em;
  flex: 1;
}

.text-wrapper {
  border-left: 1px solid rgb(0, 0, 0);
  padding-left: 4em;
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

.button_wrapper {
  margin-left: 4em;
}
</style>
