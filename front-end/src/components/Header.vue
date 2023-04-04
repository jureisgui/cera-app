<template>
    <header class="body_text">
      <div class="logo_container">
        <router-link to="/"><img src="../assets/img/white_logo-01-01.svg" alt="Cera Logo White" /></router-link>
        <img src="../assets/img/pine_logo-01.svg" alt="Cera Pine Logo" v-if="Landing_design">
      </div>
  
      <ul class="links_container">
        <li><router-link to="/">Home</router-link></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
  
      <div class="search_and_cta_container">
        <div class="search_bar">
          <input type="text" />
          <span class="material-symbols-outlined">search</span>
        </div>
        <p>button</p>
      </div>
    </header>
  </template>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 105px;
    background-color: #444739;
    color: #fff;
    padding: 0 10%;
  }

  .reversed_bg {
    background-color: #44473900;
  }

  .reversed_color {
    color: #444739;
  }
  
  .links_container {
    display: flex;
    list-style: none;
    gap: 30px;
  }
  
  a {
      text-decoration: none;
      color: #fff;
  }

  a:hover {
    text-decoration: underline;
  }
  
  input {
      width: 250px;
      background: #444739;
      border: none;
      border-bottom: 1px solid #fff;
      color: #fff;
  }

  .input_reversed {
    border-bottom: 1px solid #444739;
  }
  
  input:focus {
      outline: none;
  }
  
  .material-symbols-outlined {
    display: flex;
    color: #fff;
    cursor: pointer;
  }

  .material-symbols-outlined:hover {
    transform: scale(1.1);
  }
  
  .search_and_cta_container {
    display: flex;
    gap: 45px;
  }
  
  .search_bar {
    display: flex;
  }
  
  .logo_container {
      width: 50px;
  }
  
  </style>
  
  <script setup></script>
  
  <script>
  export default {
    data() {
      return {
        Landing_design: false
      };
    },
  };
  </script>
  