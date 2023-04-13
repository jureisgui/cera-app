<script setup>
//theme
import "primevue/resources/themes/fluent-light/theme.css";
//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";

import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import MyInfo from "./MyInfo.vue";
import PublicProfile from "./PublicProfile.vue";
import MyListings from "./MyListings.vue";
</script>

<template>
  <div v-if="ModalIsOpen" class="modal-wrapper">
    <div class="back_arrow">
      <span @click="$emit('CloseModal')" class="material-symbols-outlined"
        >arrow_back_ios</span
      >
    </div>
    <Accordion :multiple="true" :activeIndex="[0]">
      <AccordionTab header="My Information">
        <section><MyInfo /></section>
      </AccordionTab>
      <AccordionTab
        header="My Public Profile (optional - this is what buyers will see when they view your profile)"
      >
        <section><PublicProfile /></section>
      </AccordionTab>
      <AccordionTab header="My Listings">
        <section><MyListings /></section>
      </AccordionTab>
    </Accordion>
  </div>
</template>

<style>
.p-accordion-header {
  font-family: "Quicksand", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
}

.p-accordion {
  padding: 3em;
}

.material-symbols-outlined {
  color: #fff;
  cursor: pointer;
}

.material-symbols-outlined:hover {
  transform: scale(1.2);
}
</style>

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
