import './assets/main.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import "swiper/css";
import "swiper/css/pagination";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
