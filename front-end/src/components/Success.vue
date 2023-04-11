<template>
  <div class="modal_parent">
    <div class="success_modal_div">
      <span class="material-symbols-outlined close_icon" @click="$emit('Close_Modal')">close</span>
      <span class="material-symbols-outlined">check_circle</span>
      <h3 class="input_label">{{ success_prop }} Success!</h3>
      <p class="body_text">You may now close this {{close_prop}}.</p>
    </div>
  </div>
</template>

<style scoped>
.modal_parent {
  position: relative;
  background-color: #fff;
}
.success_modal_div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border: 1px solid black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  width: 30vw;
  height: 20vw;
  position: relative;
}

.material-symbols-outlined {
  color: #44b91b;
}

.close_icon {
    color: #000;
    position: absolute;
    top: 10px;
    right: 10px;
}

.close_icon:hover {
    cursor: pointer;
    transform: scale(1.1);
}
</style>

<script setup>
defineProps({
  success_prop: {
    type: String,
    required: true,
  },
  close_prop: {
    type: String,
    required: true,
  },
});
</script>
