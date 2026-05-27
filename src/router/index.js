import { createRouter, createWebHashHistory } from 'vue-router';
import About from '../pages/About.vue';
import Projects from '../pages/Projects.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  { path: '/', component: About },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;