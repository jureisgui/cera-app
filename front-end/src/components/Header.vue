<template>
  <header class="body_text">
    <div class="logo_container">
      <router-link to="/"
        ><img src="../assets/img/white_logo-01-01.svg" alt="Cera Logo White"
      /></router-link>
      <img
        src="../assets/img/pine_logo-01.svg"
        alt="Cera Pine Logo"
        v-if="Landing_design"
      />
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
      <span class="material-symbols-outlined heart" v-if="Logged_in">
        favorite
      </span>
      <span class="material-symbols-outlined" v-if="Logged_in">
        account_circle
      </span>
      <p>button</p>
    </div>

    <div>
    <span class="material-symbols-outlined burger_menu" @click="burger_menu_revealed=!burger_menu_revealed">menu</span>
    </div>
  </header>

  <ul class="burger_list button_text" v-if="burger_menu_revealed">
      <li><router-link to="/">Home</router-link></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">FAQ</a></li>
      <li class="text_icon"><a href="#">My Favourites</a></li>
      <li><a href="#">My Account</a></li>
      <li><a href="#">List an Item</a></li>
    </ul>
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

.heart {
  color: #dc7777;
}

.burger_menu {
    display: none;
}

.burger_list {
    display: none;
}

@media (max-width: 62em) {
  .links_container,
  .search_and_cta_container {
    display: none !important;
  }

  .burger_menu {
    display: block;
    width: 100% !important;
    font-size: 40px;
  }

  .burger_list {
    display: flex !important;
    flex-direction: column;
    color: #444739;
    align-items: end;
    /* margin-right: 15px; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  a {
    color: #444739;
  }


  li {
    padding: 30px 50px;
    height: 40px;
    text-align: right;
    list-style: none;
    border-bottom: 0.5px solid #444739;
    width: 100%;
  }

}
</style>

<script setup></script>

<script>
export default {
  data() {
    return {
      Landing_design: false,
      Logged_in: false,
      burger_menu_revealed: false
    };
  },
};
</script>
