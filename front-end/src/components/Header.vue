<template>
    <header class="body_text">
      <div class="logo_container">
        <img src="../assets/img/white_logo-01-01.svg" alt="Cera Logo White" />
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
    height: 90px;
    background-color: #444739;
    color: #fff;
    padding: 0 20px;
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
  
  input {
      width: 250px;
      background: #444739;
      border: none;
      border-bottom: 1px solid #fff;
      color: #fff;
  }
  
  input:focus {
      outline: none;
  }
  
  .material-symbols-outlined {
    display: flex;
    color: #fff;
  }
  
  .search_and_cta_container {
    display: flex;
    gap: 45px;
  }
  
  .search_bar {
    display: flex;
  }
  
  .logo_container {
      width: 110px;
  }
  
  </style>
  
  <script setup></script>
  
  <script>
  export default {
    data() {
      return {};
    },
  };
  </script>
  