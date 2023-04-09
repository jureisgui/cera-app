<template>
    <div class="accordion">
      <div class="accordion-header" @click="toggleAccordion">
        {{ title }}
        <i :class="{'arrow-down': isOpen, 'arrow-right': !isOpen}"></i>
      </div>
      <div v-show="isOpen" class="accordion-content">
        <slot></slot>
      </div>
    </div>
  </template>

  <style scoped>
  .accordion {
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
  
  .accordion-header {
    background-color: #f0f0f0;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .accordion-header i {
    margin-left: auto;
    transition: transform 0.3s ease;
  }
  
  .accordion-header:hover i {
    transform: rotate(90deg);
  }
  
  .accordion-content {
    padding: 10px;
    display: none;
  }
  
  .arrow-down:before {
    content: "\25BC";
  }
  
  .arrow-right:before {
    content: "\25B6";
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    methods: {
      toggleAccordion() {
        this.isOpen = !this.isOpen;
      }
    }
  };
  </script>
  

  