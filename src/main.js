import { createApp } from 'vue'
import './main.css'
import { initializeApp } from "firebase/app"
import router from './router/router'
import { createPinia } from 'pinia'
import PageLoader from './components/basic-element/PageLoader.vue'
import App from './App.vue'

const firebaseConfig = {
  apiKey: "AIzaSyDAbHTfJcoQtOvv5zTU2Urx_7pB7iLpuWI",
  authDomain: "todo-nmstu.firebaseapp.com",
  projectId: "todo-nmstu",
  storageBucket: "todo-nmstu.firebasestorage.app",
  messagingSenderId: "472903020991",
  appId: "1:472903020991:web:8f8b5f124e75d19753f10a"
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('PageLoader', PageLoader);
app.mount('#app')
