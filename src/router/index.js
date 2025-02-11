import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
    },
  },
  {
    // 404 Not Found route - catches all unmatched routes
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: '404 Not Found',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Navigation guard to update document titles
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Visitor On`;
  next();
});

export default router;
