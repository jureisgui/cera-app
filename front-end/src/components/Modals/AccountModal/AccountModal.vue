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

defineProps({
  Logged_in: Boolean,
  logged_user_obj: Object,
  user_account: Object,
});
</script>

<template>
  <div v-if="ModalIsOpen" class="modal_wrapper">
  <br><br>
    <div class="back_arrow">
      <span @click="$emit('CloseModal')" class="material-symbols-outlined icon-colour">arrow_back_ios</span>
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

<style scoped>
.modal_wrapper{
  position: absolute;
  background-color: white;
  width: 100%;
  top: 0;
  z-index: 10;
  bottom: 0;
}

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

.icon-colour{
  color:black;
  padding-left: 2em;

}

.material-symbols-outlined:hover {
  transform: scale(1.2);
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
