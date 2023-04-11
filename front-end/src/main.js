import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import PrimeVue from 'primevue/config';

createApp(App)
  .use(router)
  .use(PrimeVue)
  .mount("#app");