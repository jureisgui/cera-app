<template>
  <div class="body_text">
    <div class="button_container">
      <div class="edit_button hover">
        <span class="edit_button"
          ><span class="material-symbols-outlined">edit</span>Edit</span
        >
      </div>
      <div class="delete_button hover">
        <span class="delete_button"
          ><span class="material-symbols-outlined">delete</span>Delete</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.button_container {
  background-color: rgba(255, 255, 255, 0.178);
  display: flex;
  position: absolute;
  top: 70%;
  left: 2%;
  /* padding: 10px; */
}

.edit_button {
  padding: 10px;
  display: flex;
  /* align-items: center;
        justify-content: center; */
}

.delete_button {
  color: #db1717;
  padding: 10px;
  display: flex;
  /* align-items: center;
        justify-content: center; */
}

.hover:hover {
  background-color: rgba(255, 255, 255, 0.89);
  cursor: pointer;
}
</style>

<script setup></script>
