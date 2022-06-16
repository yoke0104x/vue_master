import { createApp } from "vue";
import App from './App.vue'
import { createPinia } from 'pinia'
import ContentLeft from "@/components/contentLeft/ContentLeft";
import ContentCenter from "@/components/contentCenter/ContentCenter";
import ContentRight from "@/components/contentRight";


createApp(App)
    .use(createPinia())
    .component('content-left', ContentLeft)
    .component('content-center', ContentCenter)
    .component('content-right', ContentRight)
    .mount('#app');
