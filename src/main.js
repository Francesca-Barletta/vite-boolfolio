import { createApp } from 'vue';
import './style/general.scss';
import 'bootstrap/scss/bootstrap.scss';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppPortfolio from './pages/AppPortfolio.vue';
import AppContact from './pages/AppContact.vue';
import AppShow from './pages/AppShow.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: AppHome},
        {path: '/portfolio', component: AppPortfolio},
        {path: '/contact', component: AppContact},
        {path: '/portfolio/:slug', component: AppShow}
    ]
})



createApp(App).use(router).mount('#app')
