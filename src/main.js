import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import ContentLeft from "@/components/contentLeft/ContentLeft";
import ContentCenter from "@/components/contentCenter/ContentCenter";
import ContentRight from "@/components/contentRight";
import "element-plus/dist/index.css";
import "animate.css";
const app = createApp(App);

app.use(createPinia());
app.component("ContentLeft", ContentLeft);
app.component("ContentCenter", ContentCenter);
app.component("ContentRight", ContentRight);
app.mount("#app");
