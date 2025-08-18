import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import Error404View from '@/views/Error404View.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {el: to.hash}
        } else {
            return { el: '#header' }
        }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'error404',
            component: Error404View,
        }
    ],
});

router.beforeEach((to, from, next) => {
    if(to.hash){
        next();
        window.scrollTo(0, document.querySelector(to.hash).getBoundingClientRect().top + window.scrollY);
    }
    else{
        document.documentElement.style.scrollBehavior = 'unset';
        setTimeout(() => {
            next();
            window.scrollTo(0, 0);
        }, 1);
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = '';
        }, 1);
    }
});

export default router;
