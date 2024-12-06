import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
     path: '/',
     name: 'home',
      component: () => import('../App.vue'),
   },
    {
      path: '/about',
      name: 'about',
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', 
      };
    } else if (savedPosition) {
      return savedPosition; 
    } else {
      return { top: 0 }; 
    }
    
    
  },
})

export default router
