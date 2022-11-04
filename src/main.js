import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import store from './store'

import VueLazyload from 'vue-lazyload'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueLazyload)

app.mount('#app')
