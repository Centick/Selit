import '@/assets/css/global.css';
import '@/assets/css/accordion.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import PrimeVue from 'primevue/config';
import VMASK from 'vue-3-mask';


const app = createApp(App)

app.use(router);
app.use(PrimeVue);
app.use(VMASK);

app.mount('#app');


