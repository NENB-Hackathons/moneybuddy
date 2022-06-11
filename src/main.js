// Vue stuffs
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"

// Styles
import "@/assets/css/styles.css";
import "./assets/tailwind.css";

createApp(App).use(store).use(router).mount("#app");