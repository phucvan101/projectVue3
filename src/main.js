import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
// sử dụng ant design
import 'ant-design-vue/dist/reset.css';
import './static/fontawesome-free-6.7.2-web/css/all.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {Drawer, Button, message, List, Menu } from 'ant-design-vue';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.use(Drawer).use(Button).use(List).use(Menu).mount('#app');

app.config.globalProperties.$message = message
