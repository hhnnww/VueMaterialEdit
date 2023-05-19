import {createApp} from 'vue'
import VueLazyLoad from 'vue3-lazyload'

import './style.css'
import '@arco-design/web-vue/es/notification/style/index.css'
import '@arco-design/web-vue/es/message/style/index.css'
import "@fontsource/lato"

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)
app.use(VueLazyLoad)

router.isReady().then(
    () => app.mount('#app')
)
