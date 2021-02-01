import { createStore } from 'vuex';
let timer;
const coachesModule = {
    state(){
        return {
          coachesList: [ 
              {
                // the following comments were just left for reference purpopses
                id: 'c1',
                firstName: 'Maximilian',
                lastName: 'Schwarzmüller',
                areas: ['frontend', 'backend', 'career'],
                description:
                  "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                hourlyRate: 30
              }
          ],
          requests:[],
          userId: null,
          token: null,
          tokenExpiration: null
        }
    },
    mutations:{
      registerCoach(state, payload){
        state.coachesList.push(payload);
      },
      addRequest(state, payload){
        state.requests.push(payload);
      },

      setUser(state, payload ){
        state.token = payload.token;
        state.userId = payload.userId;
        state.tokenExpiration = payload.tokenExpiration;
      },

      retrieveDataFromFirebase(state, payload){
        for (var i in payload){
          state.coachesList.push(payload[i]);
        }
      }
    },

    actions:{
      async registerCoach(context, payload){ 
        const userId = context.rootGetters.userId;
        const coachData = {
          id: new Date().toISOString(),
          firstName: payload.first,
          lastName: payload.last,
          description: payload.desc,
          hourlyRate: payload.rate,
          areas: payload.areas
        };
        const response = await fetch(`https://coach-app-dc9f9-default-rtdb.firebaseio.com/coaches/${userId}.json`,{
          method: 'PUT',
          body: JSON.stringify(coachData)
        });

        //const responseData = await response.json();

        if (!response.ok){
          // error
        }
        context.commit('registerCoach',
        { ...coachData,
          id: userId  
        });
      },

      contactCoach(context, payload){
        const newRequest = {
          id: new Date().toISOString(),
          coachId: payload.id,
          userEmail: payload.email,
          message: payload.message
        };
        context.commit('addRequest', newRequest);
      },

      async login(context, payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',{
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
          })
        });

        const responseData = await response.json(); 

        if (!response.ok){
          console.log(response);
          const error = new Error(responseData.message || 'Failed to authenticate: either email or password is wrong. Please try again. ');
          throw error;
        }

        const expiresIn = +responseData.expiresIn * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        timer = setTimeout(function(){
          context.dispatch('logout');
        }, expiresIn);

        context.commit('setUser',{
          token: responseData.idToken,
          userId: responseData.localId,
          //tokenExpiration: responseData.expiresIn
        })
        //console.log(responseData);
      },

      async signup(context, payload){
        //console.log(payload);
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',{
          method: 'POST',
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
          })
        });

        const responseData = await response.json(); 

        if (!response.ok){
          //console.log(response);
          //console.log(responseData);
          const error = new Error(responseData.message || 'Failed to sign up. Email already exists. ');
          throw error;
        }

        // localStorage.setItem('token', responseData.idToken);
        // localStorage.setItem('userId', responseData.localId);

        context.commit('setUser',{
          token: responseData.idToken,
          userId: responseData.localId,
          //tokenExpiration: responseData.expiresIn
        })
      },

      logout(context){
        
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);

        // through this action you will reset setUser to null to delete the token, so the user is not logged in
        context.commit('setUser',{
          token: null,
          userId: null,
          //tokenExpiration: null
        })
      },

      async retrieveDataFromFirebase(context){
        const response = await fetch('https://coach-app-dc9f9-default-rtdb.firebaseio.com/coaches.json', {
          method: 'GET'
        });
        const responseData = await response.json(); 
        //console.log(responseData);
        if (!response.ok){
          //console.log(response);
          //console.log(responseData);
          const error = new Error(responseData.message || 'Failed to retrieve data. ');
          throw error;
        }
        //console.log(responseData['0ApmZQVlxLOIovcmOyhUErGeA8z1']);
        context.commit('retrieveDataFromFirebase', responseData);
      },

      autoLogin(context){
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = +tokenExpiration - new Date().getTime();

        if(expiresIn<0){
          return ;
        }

        timer = setTimeout(function(){
          context.dispatch('logout');
        }, expiresIn);

        if(token && userId){
          context.commit('setUser',{
            token: token,
            userId: userId,
            //tokenExpiration: null
          });
        }
      }
    },

    getters:{
        retrieveCoaches(state){
            return state.coachesList;
        },

        hasCoaches(state){
            return state.coachesList && state.coachesList.length > 0;
        },

        retrieveRequests(state){
        //retrieveRequests(state, _, _2, rootGetters){
          //const coachId = rootGetters.userId;
          //console.log(state.requests);
          //return state.requests.filter(req => req.coachId === coachId);
          return state.requests;
        },

        //hasRequests(_, getters){
        hasRequests(state){
          //return getters.requests && getters.requests.length > 0;
          return state.requests && state.requests.length > 0;
        },

        userId(state){
          return state.userId;
        },

        token(state){
          return state.token;
        },

        isAuthenticated(state){
          return !!state.token; // convert to true boolean explicitly with the !!
        },

        isCoach(_, getters){
          const coaches = getters.retrieveCoaches;
          const userId = getters.userId;
          return coaches.some(coach => coach.id === userId);
        }

    }   
};

const store = createStore({
    modules: {
        coaches: coachesModule
    }
})

export default store;
