<template>
  <div>
    <button v-for="(button, index) in buttons" :key="index">
      {{ button.label }}
      <i :class="button.icon"></i>
      <span class="material-symbols-outlined"> logout </span>
      <i class="fa fa-user" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          label: "Button 1",
          icon: "fa-solid fa-coffee",
        },
        {
          label: "Button 2",
          icon: "fas fa-search",
        },
        {
          label: "Button 3",
          icon: "fas fa-envelope",
        },
      ],
    };
  },
};
</script>