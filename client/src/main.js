import { createApp } from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"
import PrimeVue from "primevue/config"


import "primevue/resources/themes/mdc-light-indigo/theme.css"      //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeflex/primeflex.css"
import "primeicons/primeicons.css"                              //icons



// Imprting UI Componets
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


                    
const app = createApp(App)



app.use(PrimeVue);
app.use(PrimeVue, {ripple: true});
app.component("Button", Button);
app.component("DataTable", DataTable);
app.component("InputText", InputText);
app.component("Column", Column);
app.use(store).use(router).mount("#app");
