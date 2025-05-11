import { createRouter, createWebHistory } from 'vue-router';
import PageAuth from '../components/authentication/PageAuth.vue'
import PageMain from '../components/PageMain.vue';
import PageProfile from '../components/profile/PageProfile.vue';
import PageProfileEdit from '../components/profile-edit/PageProfileEdit.vue';


export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/auth', component: PageAuth, alias: '/'},
        { path: '/main', component: PageMain},
        { path: '/profile', component: PageProfile},
        { path: '/edit', component: PageProfileEdit}
    ]
})  