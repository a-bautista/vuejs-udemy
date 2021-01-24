import { createStore } from 'vuex';

const counterModule = {

    state(){
        return  {
            counter:0
        };
    },
    mutations: {
        increment(state){

            state.counter = state.counter +1;
        },
        increase(state, payload){
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        incrementAction(context){
            setTimeout(function(){
                context.commit('increment'); // name of the mutation that we are affecting
            }, 2000); 
        },
        increase(context, payload){
            context.commit('increase', payload)
        }
    },
    getters: {
        normalCounter(state){
            return state.counter;
        },
        finalCounter(state){
            return state.counter * 2;
        },
        normalizedCounter(_, getters){ // 
            const finalCounter = getters.finalCounter; // use the logic of the finalCounter
            if (finalCounter < 0){
                return 0;
            }
            if (finalCounter > 100){
                return 100;
            }
            return finalCounter;
        }
    }
};

const store = createStore({
    modules: {
        counters: counterModule
    },
    state(){
        return {
            // counter: 0,
            isLoggedIn: false
        };
    },
    mutations: {
        // increment(state){

        //     state.counter = state.counter +1;
        // },
        // increase(state, payload){
        //     state.counter = state.counter + payload.value;
        // },
        setAuth(state, payload){
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: { // actions can use async code and it is just a method
        // incrementAction(context){
        //     setTimeout(function(){
        //         context.commit('increment'); // name of the mutation that we are affecting
        //     }, 2000); 
        // },
        // increase(context, payload){
        //     context.commit('increase', payload)
        // },
        login(context){
            context.commit('setAuth', {isAuth:true});
        },
        logout(context){
            context.commit('setAuth', {isAuth:false});
        }
    },
    getters: { // I am retrieving the value of the state variable 
        // finalCounter(state){
        //     return state.counter * 2;
        // },
        // normalizedCounter(_, getters){ // 
        //     const finalCounter = getters.finalCounter; // use the logic of the finalCounter
        //     if (finalCounter < 0){
        //         return 0;
        //     }
        //     if (finalCounter > 100){
        //         return 100;
        //     }
        //     return finalCounter;
        // },
        userIsAuthenticated(state){
            return state.isLoggedIn;
        }   
    }
});

export default store;
