<script setup>
import MyInfo from './MyInfo.vue'
import PublicProfile from './PublicProfile.vue'
</script>

<template>
    <div>
      <div v-for="(item, index) in items" :key="index" class="accordion-item">
        <div class="accordion-header" @click="toggleAccordion(index)">
          <span class="heading_text">{{ item.title }}</span>
          <span :class="{ 'active': activeAccordion === index }">&#9660;</span>
        </div>
        <div
          class="accordion-content body_text"
          :class="{ 'active': activeAccordion === index }"
        >
          {{ item.content }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeAccordion: null,
        items: [
          { title: "My Information", 
          content: "MyInfo" },
          { title: "My Public Profile (optional - this is what buyers will see when they view your profile)", 
          content: "Content for Item 2" },
          { title: "My Listings", 
          content: "Content for Item 3" }
        ]
      };
    },
    methods: {
      toggleAccordion(index) {
        if (this.activeAccordion === index) {
          this.activeAccordion = null;
        } else {
          this.activeAccordion = index;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .accordion-item {
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
  
  .accordion-header {
    cursor: pointer;
    padding: 10px;
  }
  
  .accordion-content {
    padding: 10px;
    display: none;
  }
  
  .active {
    display: block;
  }
  </style>
  