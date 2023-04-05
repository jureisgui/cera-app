<template>
  <div class="modal_parent">
    <div class="success_modal_div">
      <span class="material-symbols-outlined">check_circle</span>
      <h3 class="input_label">{{ success_prop }} Success!</h3>
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
  padding: 20px;
  width: 30vw;
  height: 20vw;
}

.material-symbols-outlined {
  color: #44b91b;
}
</style>

<script setup>
defineProps({
  success_prop: {
    type: String,
    required: true,
  },
});
</script>
