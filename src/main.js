import { createApp } from 'vue'
import App from './App.vue' 
import catFlips from 'vue-catflips-pagination'

const app = createApp(App)
             
app.use(catFlips,{
  apiUrl: import.meta.env.VITE_API_URL,
  otherKey: import.meta.env.VITE_OTHER_CONFIG
})

app.mount('#app')
