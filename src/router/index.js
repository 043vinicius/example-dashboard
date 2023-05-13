import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/records',
        name: 'records',
        component: () => import('../views/Records/List.vue'),
    },
    {
        path: '/records/add',
        name: 'records.add',
        component: () => import('../views/Records/Edit.vue'),
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('../views/Users/List.vue'),
    },
    {
        path: '/users/add',
        name: 'users.add',
        component: () => import('../views/Users/Edit.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
