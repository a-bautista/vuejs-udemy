<template>
    <button @click="setLogin">Login</button>
    <button @click="setLogout">Logout</button>
    <p>The result from below is <span class="incorrect">not bad</span> but it is preferrable to use a getter.</p>
    <p>Result of the login/logout variable: {{ this.$store.state.isLoggedIn }}</p>
    <p>This result is provided with a <span class="correct">getter</span>: {{ userIsAuthenticated }}</p>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters(['userIsAuthenticated'])
    },
    
    methods:{
        setLogin(){
            this.$store.dispatch('login');
        },
        setLogout(){
            this.$store.dispatch('logout');
        }
    }
}
</script>

<style>

.correct{
    color: green;
}

.incorrect{
    color: red;
}

</style>