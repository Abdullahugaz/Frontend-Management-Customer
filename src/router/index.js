import { createRouter, createWebHistory } from 'vue-router';
import MainDashboard from '../pages/Dashboard.vue';
import CustomerList from '../pages/Customers.vue';
import ProductsPage from '../pages/ProductAdd.vue'; // ✅ Rename for clarity
import SettingsPage from '../pages/Settings.vue';

const routes = [
  { path: '/', name: 'Dashboard', component: MainDashboard },
  { path: '/customers', name: 'Customers', component: CustomerList },
  { path: '/products', name: 'Products', component: ProductsPage }, // ✅ consistent name
  { path: '/settings', name: 'Settings', component: SettingsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
