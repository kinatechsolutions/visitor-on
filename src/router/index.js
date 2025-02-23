import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import SolutionPage from '../Pages/SolutionPage.vue';
import HomePage from '../Pages/HomePage.vue';
import IndustriesPage from '../Pages/IndustriesPage.vue';
import GuidePage from '../Pages/GuidePage.vue';
import FaqPage from '../Pages/FaqPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/solutions/:page?',
    name: 'solutions',
    component: SolutionPage,
    meta: {
      title: 'Solutions',
    },
  },
  {
    path: '/industries',
    name: 'industries',
    component: IndustriesPage,
    meta: {
      title: 'Industries',
    },
  },
  {
    path: '/guide',
    name: 'guide',
    component: GuidePage,
    meta: {
      title: 'Guide',
    },
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: FaqPage,
    meta: {
      title: 'Faqs',
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
