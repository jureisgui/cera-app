<template>
  <div v-if="ModalIsOpen" class="ProductModal">
    <div class="ProductModalMargin">
      <div class="back_arrow">
        <span @click="$emit('CloseModal')" class="material-symbols-outlined"
          >arrow_back_ios</span
        >
      </div>
      <ProductDescription />
    </div>
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

.material-symbols-outlined:hover{
    transform: scale(1.2);
}

.ProductModalMargin {
  margin: 2em 10%;
}
</style>

<script setup>
import MainButton from "../../Buttons/MainButton.vue";
import MessageInput from "../../Inputs/MessageInput.vue";
import QA from "./QA.vue";
import ProductDescription from "./ProductDescription.vue";
</script>

<script>
export default {
  data() {
    return {
      ModalIsOpen: true,
    };
  },

  methods: {
    CloseModal() {
      this.ModalIsOpen = false;
    },
  },
};
</script>
