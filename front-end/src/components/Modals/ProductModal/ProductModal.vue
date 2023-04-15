<template>
  <div class="relative_parent">
    <div class="blur" v-if="contact_seller_modal"></div>
    <div v-if="ModalIsOpen" class="ProductModal">
      <div class="ProductModalMargin">
        <div class="back_arrow_div">
          <span @click="$emit('CloseModal')" class="material-symbols-outlined"
            >arrow_back_ios</span
          >
          <p class="body_text">{{product_prop.category}}</p>
        </div>
        <section class="product_desc">
          <div class="photo_gallery">
            <Galleria
              :value="images"
              :responsiveOptions="responsiveOptions"
              :numVisible="5"
              containerStyle="max-width: 640px"
            >
              <template #item="slotProps">
                <img
                  :src="slotProps.item.itemImageSrc"
                  :alt="slotProps.item.alt"
                  style="width: 100%"
                  class="big_img"
                />
              </template>
              <template #thumbnail="slotProps" class="thumbnail_wrapper">
                <img
                  :src="slotProps.item.thumbnailImageSrc"
                  :alt="slotProps.item.alt"
                  class="thumbnail"
                />
              </template>
            </Galleria>
          </div>
          <div class="text_container">
            <h5 class="heading_text">{{product_prop.title}}</h5>
            <h5 class="body_text">{{seller_name_prop}}</h5>
            <h3 class="subheading_text">$ {{product_prop.price}}</h3>
            <p class="body_text">
              {{product_prop.item_description}}
            </p>
            <div class="condition_div">
              <p class="body_text">Condition:</p>
              <div class="condition_text">
                <p class="button_text">{{product_prop.condition.radio_checked}}</p>
              </div>
            </div>
            <div class="delivery_div body_text">
              <p>Delivery &amp; pick-up details:</p>
              <div class="options_list">
                <p>{{product_prop.shipping.shipping}}</p>
              </div>
            </div>
            <MainButton
              main_button_prop="Contact Seller"
              button_icon_prop="mail"
              class="button"
              @click="contact_seller_modal=true"
            />
          </div>
        </section>

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
    <ContactSeller
      v-if="contact_seller_modal"
      class="contact_seller"
      @close_modal="contact_seller_modal = false"
    />
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
  top: 2%;
  left: 20%;
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
/* PRODUCT DESC */
.product_desc {
  display: flex;
  gap: 70px;
}

.text_container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.condition_div,
.delivery_div {
  display: flex;
  gap: 10px;
}

.condition_text {
  background-color: #dcba77;
  padding: 5px;
  align-items: center;
  justify-content: center;
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

.photo_gallery,
.text_container {
  flex: 1;
}

.big_img {
    width: 100%;
    height: 22em;
    object-fit: contain;
    margin-bottom: 30px;
}

.thumbnail {
    width: 5em;
}

@media (max-width: 62em) {
.product_desc {
  flex-direction: column;
}
}

@media (max-width: 32em) {
  .ProductModal {
    top: 0;
  }

  .contact_seller {
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
  }
}
</style>

<script setup>
import MainButton from "../../Buttons/MainButton.vue";
import MessageInput from "../../Inputs/MessageInput.vue";
import QA from "./QA.vue";
import ProductDescription from "./ProductDescription.vue";
import LongButton from "../../Buttons/LongButton.vue";
import ContactSeller from "../ContactSellerModal/ContactSeller.vue";
import Heart from "../../Buttons/Heart.vue";

//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";

import Galleria from "primevue/galleria";

defineProps({
  product_prop: Object,
  seller_name_prop: String
});
</script>

<script>
export default {
  data() {
    return {
      ModalIsOpen: true,
      type_question: false,
      contact_seller_modal: false,
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
        },
        {
          breakpoint: "768px",
          numVisible: 2,
        },
        {
          breakpoint: "560px",
          numVisible: 1,
        },
      ],
      contact_seller_modal: false,
      images: [
        {
          itemImageSrc: [],
          thumbnailImageSrc: [],
          alt: "Product Image",
        }        
      ],
      
  };
  },
  mounted() {
    // Assign product images to images array
    this.images = this.product_prop.product_images.map(item => {
      return {
        itemImageSrc: item,
        thumbnailImageSrc: item,
        alt: "Product Image",
      };
  });
},

  methods: {
    CloseModal() {
      this.ModalIsOpen = false;
    },
  },
};
</script>
