import './assets/css/app.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'


const app = createApp(App)
import feather from 'feather-icons' 
feather.replace()


app.use(router)
app.use(VueScrollTo)

app.mount('#app')

// Update the theme index.html based on what's selected

document.querySelector('body').classList.add("bg-primary-night-dark")