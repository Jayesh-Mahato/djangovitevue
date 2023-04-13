import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const el = document.getElementById('app')
if (el) {
    // console.log(el.dataset)
    const data = {...el.dataset} // unpacks unique values
    // console.log(data)
    // <App :token="abc" :user="some-user" />
    
    const app = createApp(App)
    app.use(router)
    app.mount('#app') // id="app"
}
