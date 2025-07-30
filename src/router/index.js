import { createRouter, createWebHistory } from 'vue-router';
import Customers from '../pages/Customers.vue';
import Dashboard from '../pages/Dashboard.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/customers', name: 'Customers', component: Customers },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
