
import { createRouter, createWebHistory } from 'vue-router'; // necessary for doing the routing, you install with npm install --save vue-router@next
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    // routes are defined with priorities
    // the most important routes come at the beginning
    routes: [
        //{path: '/', component: TeamsList}, // this line does the same as below
        {path: '/', redirect: '/teams'}, // this will always display the /teams url instead of showing --> /
        {
            path: '/teams', component: TeamsList, 
            components: { 
                default: TeamsList, footer: TeamsFooter 
            }
            // children: [
            //     { path: ':teamId', component: TeamMembers, props: true }, 
            // ]
        },
        {
            path: '/users', 
            components: {
                default: UsersList, footer: UsersFooter
            }
        },
        {path: '/teams/:teamId', component: TeamMembers, props: true},
        {path: '/:notFound(.*)', component: NotFound}
    ],
    // scrollBehavior(to, from, savedPosition){
    //     console.log(to, from, savedPosition);
    //     return {left: 0, top:0}
    // }
    // linkActiveClass: 'active' // change the directive name to active
});

export default router;