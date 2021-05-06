import { createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Yourtrackers from '../views/Yourtrackers.vue';
import { createRouter } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import About from '../views/About.vue';
import FAQ from '../views/FAQ.vue';
import DashboardReddit from '../views/DashboardReddit.vue';
import LandingPage from '../views/LandingPage.vue';

// here we create our routes
export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
    path: '/home',
    name: 'Home',
    component: Home,
  },
    
  {
    path: '/yourtrackers',
    name: 'Yourtrackers',
    component: Yourtrackers
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
   {
    path: '/dashboardreddit',
    name: 'DashboardReddit',
    component: DashboardReddit
  },
  
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
   path: '/faq',
    name: 'faq',
    component: FAQ
  }

  ]
});
