import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './local'
import interceptors from './router/interceptors'
import "./style.css"
import "./assets/font/font.css"

const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount('#app');