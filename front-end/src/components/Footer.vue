<template>
  <footer>
    <div>
      <img src="../assets/img/clay_logo-01.svg" alt="Cera logo" />
    </div>
    <div class="footer-columns body_text">
      <router-link to="/shop">Shop</router-link>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>
    </div>
    <div class="footer-columns body_text">
      <a @click="$emit('openModal')">Ts & Cs</a>
      <a href="#">Policies</a>
      <a href="#">Support</a>
    </div>
    <div class="footer-columns body_text">
      <span class="app-button"
        >Download app
        <img
          class="app-icons"
          src="../assets/icons/android.svg"
          alt="Android icon"
        />
      </span>
      <span class="app-button"
        >Download app
        <img
          class="app-icons"
          src="../assets/icons/apple.svg"
          alt="Apple icon"
        />
      </span>
    </div>
    <div class="social-icons">
      <img src="../assets/icons/facebook.svg" alt="Facebook icon" />
      <img src="../assets/icons/instagram.svg" alt="Instagram icon" />
      <img src="../assets/icons/tiktok.svg" alt="Tiktok icon" />
    </div>
  </footer>
  =======
  <footer>
    <div>
      <img src="../assets/img/clay_logo-01.svg" alt="Cera logo" />
    </div>
    <div class="footer-columns body_text">
      <router-link to="/shop">Shop</router-link>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>
    </div>
    <div class="footer-columns body_text">
      <a href="#">Ts & Cs</a>
      <a href="#">Policies</a>
      <a href="#">Support</a>
    </div>
    <div class="footer-columns body_text">
      <span class="app-button"
        >Download app
        <img
          class="app-icons"
          src="../assets/icons/android.svg"
          alt="Android icon"
        />
      </span>
      <span class="app-button"
        >Download app
        <img
          class="app-icons"
          src="../assets/icons/apple.svg"
          alt="Apple icon"
        />
      </span>
    </div>
    <div class="social-icons">
      <img src="../assets/icons/facebook.svg" alt="Facebook icon" />
      <img src="../assets/icons/instagram.svg" alt="Instagram icon" />
      <img src="../assets/icons/tiktok.svg" alt="Tiktok icon" />
    </div>
  </footer>
  >>>>>>> 7151853e1b3cbbdc203e1d1dd1c653fe965b7a42
</template>


<style scoped>
footer {
  display: flex;
  background-color: #444739;
  justify-content: space-around;
  align-items: center;
  padding: 3em;
}

.footer-columns {
  display: flex;
  flex-direction: column;
}

footer img {
  max-width: 100px;
}

.social-icons {
  display: flex;
}

.social-icons img {
  height: 30px;
  width: 30px;
}

.app-icons {
  width: 25px;
  height: 25px;
  padding: 0.1em;
}

a {
  text-decoration: none;
  color: #fff;
}

a:hover {
  color: #dcba77;
}

.app-button {
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0.5em;
  border: 1px solid;
  border-radius: 113px;
}

.app-button:hover {
  color: #dcba77;
}

span {
  margin-bottom: 0.5em;
}

@media (max-width: 640px) {
  footer {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .social-icons {
    gap: 10px;
  }
}
</style>

<script setup>
</script>


