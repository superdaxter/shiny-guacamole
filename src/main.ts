/* Imports
================================================================================ */

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* ==== CSS ==== */
// owner
import "./assets/scss/main.scss";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// fonts
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

/* Init Vue
================================================================================ */
const app = createApp(App);

app.use(createPinia()).use(router);

app.mount("#app");
