<template>
  <div class="relative_parent">
    <div class="blur" v-if="contact_seller_modal"></div>
    <div v-if="ModalIsOpen" class="ProductModal">
      <div class="ProductModalMargin">
        <div class="back_arrow_div">
          <span @click="$emit('CloseModal')" class="material-symbols-outlined"
            >arrow_back_ios</span
          >
          <p class="body_text">Kitchenware</p>
        </div>
        <ProductDescription @show_modal="contact_seller_modal = true" />
        <div class="qa_div">
          <h2 class="heading_text">Questions and Answers</h2>
          <div>
            <QA />
            <QA />
          </div>
          <MainButton
            main_button_prop="Ask a Question"
            button_icon_prop="contact_support"
            class="button"
            @click="type_question = !type_question"
          />
          <div class="question_input" v-if="type_question">
            <MessageInput />
            <LongButton long_button_text="Submit" class="long_btn" />
          </div>
        </div>
      </div>
    </div>
    <ContactSeller v-if="contact_seller_modal" class="contact_seller" @close_modal="contact_seller_modal=false" />
  </div>
</template>

<style scoped>
.ProductModal {
  position: absolute;
  background-color: white;
  width: 100%;
  top: 105px;
  z-index: 10;
}

.material-symbols-outlined {
  color: #444739;
  cursor: pointer;
}

.material-symbols-outlined:hover {
  transform: scale(1.2);
}

.ProductModalMargin {
  margin: 2em 10%;
  display: flex;
  flex-direction: column;
  gap: 4em;
}

.back_arrow_div {
  display: flex;
  gap: 20px;
}

.button {
  border: 1px solid #dc7777;
  background-color: #dc7777;
}

.button:hover {
  color: #dc7777;
  background-color: #fff;
  border: 1px solid #dc7777;
}

.qa_div {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 50px;
}

.long_btn {
  width: 50%;
  margin: 0 auto;
}

.question_input {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact_seller {
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 24%;
}

.relative_parent {
  position: relative;
}

.blur {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.3);
}
</style>

<script setup>
import MainButton from "../../Buttons/MainButton.vue";
import MessageInput from "../../Inputs/MessageInput.vue";
import QA from "./QA.vue";
import ProductDescription from "./ProductDescription.vue";
import LongButton from "../../Buttons/LongButton.vue";
import ContactSeller from "../ContactSellerModal/ContactSeller.vue";
</script>

<script>
export default {
  data() {
    return {
      ModalIsOpen: true,
      type_question: false,
      contact_seller_modal: false,
    };
  },

  methods: {
    CloseModal() {
      this.ModalIsOpen = false;
    },
  },
};
</script>
