import './assets/css/app.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
import feather from 'feather-icons' 
feather.replace()


app.use(router)

app.mount('#app')

// Update the theme index.html based on what's selected

document.querySelector('body').classList.add("bg-primary-night-dark")