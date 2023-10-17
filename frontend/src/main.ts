import {createPinia} from 'pinia'
import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import router from './router/index'

createApp(App).use(createPinia()).use(router).mount('#app')
