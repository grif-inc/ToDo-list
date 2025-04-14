import { createRouter, createWebHistory } from 'vue-router';
import PageAuth from './components/authentication/PageAuth.vue'
import PageRegist from './components/authentication/PageRegist.vue';
import PageMain from './components/PageMain.vue';


export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/auth', component: PageAuth},
        { path: '/regist', component: PageRegist},
        { path: '/main', component: PageMain, alias: '/'}
    ]
})  