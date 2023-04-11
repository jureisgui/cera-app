<template>
  <div>
    <div class="heart_background">
      <div class="heart_icon">
        <span
          class="material-symbols-outlined"
          :class="{ heart_filled: heart_on }"
          @click="heart_on = !heart_on"
          >favorite</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.heart_background {
  display: flex;
  justify-content: center;
  height: 30px;
  width: 30px;
  background-color: rgba(255, 255, 255, 0.612);
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  bottom: 85%;
  left: 87%;
}

.heart_icon {
  padding: 0.2em;
}

.material-symbols-outlined {
  color: red;
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}

.heart_filled {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>

<script>
export default {
  data() {
    return {
      heart_on: false,
    };
  },
  methods: {},
};
</script>
