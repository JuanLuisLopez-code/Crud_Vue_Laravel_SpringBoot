import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import store from './store'

import VueLazyload from 'vue-lazyload'

import Toaster from "@meforma/vue-toaster";


const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueLazyload)
app.use(Toaster)

app.mount('#app')
