import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
// sử dụng ant design
import 'ant-design-vue/dist/reset.css';
import { createApp } from 'vue'
import {Drawer, Button, message } from 'ant-design-vue';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(Drawer).use(Button).mount('#app');

app.config.globalProperties.$message = message
