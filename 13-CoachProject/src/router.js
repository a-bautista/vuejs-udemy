import { createRouter, createWebHistory } from 'vue-router';

import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';
import store from './store';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        
        { 
          path: '/coaches/:id', 
          component: CoachDetails, 
          props: true,
          children:[
              {
                path: 'contact', 
                component: ContactCoach
                //props: true

              }
            ]
        },
        {path: '/register', component: CoachRegistration, meta: {requiresAuth: true}}, // requiresAuth and requiresUnauth are just keys
        {path: '/requests', component: RequestReceived, meta: {requiresAuth: true}},
        {path: '/auth', component: UserAuth, meta: {requiresUnauth: true}},
        {path: '/:notFound(.*)', component: NotFound}
    ]
});

// navigation guards to protect the pages that require authentication
router.beforeEach(function(to, _, next){
  if (to.meta.requiresAuth && !store.getters.isAuthenticated){
    next('/auth');
  }else if(to.meta.requiresUnauth && store.getters.isAuthenticated){
    next('/coaches');
  }else{
    next();
  }
});


export default router;