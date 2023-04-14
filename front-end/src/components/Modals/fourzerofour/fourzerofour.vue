<template>
  <section v-if="modalisopen">
    <div class="container">
      <div class="leftbox">
        <h1 class="heading_text">Error 404 🤕</h1>
        <h2 class="subheading_text">Help! Something went wrong</h2>
        <p class="body_text">
          The page you were looking for could not be found.
        </p>
        <router-link to="/"
          ><a href="url"
            ><button class="main_button">
              @click="$emit('closeModal')" Back to home<span
                class="material-symbols-outlined"
              >
                arrow_back
              </span>
            </button></a
          ></router-link
        >
      </div>

      <div class="rightbox">
        <div class="img_container">
          <img
            src="https://images.squarespace-cdn.com/content/v1/56fbe1c6a3360c50e40b157b/1662380966750-K0NN4KIR37TIXYXLIVVT/Dinner+bowl+set-8.jpg?format=2500w"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.leftbox {
  text-align: center;

  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.rightbox {
  flex: 1;
}

p {
  margin: 20px 50px 20px 50px;
}

.main_button {
  width: 190px;
  background-color: #444739;
  color: #fff;
  display: flex;
  justify-content: space-between;
  border-radius: 113px;
  padding: 0.4em 1.1em;
  align-items: center;
  border: 1px solid #fff;
}

.main_button:hover {
  background-color: #fff;
  color: #444739;
  border: 1px solid #444739;
  cursor: pointer;
}

a {
  text-decoration: none;
}

.img_container {
  filter: grayscale(100%);
}
</style>

<script setup>
</script>

<script>
export default {
  data() {
    return {
      modalisopen: true,
    };
  },
  methods: {
    closeModal() {
      this.modalisopen = false;
    },
  },
};
</script>
