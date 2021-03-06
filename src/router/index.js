import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'About',
        component: About
    },
    {
        path: '/movies',
        name: 'Movies',
        component: () => import(/* webpackChunkName: "movies" */ '../views/Movies.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
