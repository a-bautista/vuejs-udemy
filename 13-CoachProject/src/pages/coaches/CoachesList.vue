<template>
<div>
    <section>
          <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button @click="retrieveDataFromFirebase" mode="outline">Refresh</base-button>
                <!--The button from below will redirect you to register as a coach once you have logged in-->
                <base-button v-if="!isLoggedIn" link to="/auth?redirect=register" >Login to register as a coach</base-button>
                <base-button v-if="isLoggedIn && !isCoach" link to="/register">
                    Register as a coach</base-button>
                <!--This base button is rendered as a router link and the if condition makes the distinction whether to render
                as a button or as a router link -->
            </div>
                <ul v-if="hasCoaches">
                    <coach-item v-for="coach in filteredCoach"
                            :key="coach.id"
                            :id="coach.id"
                            :firstNameProp="coach.firstName"
                            :lastName="coach.lastName"
                            :areas="coach.areas"
                            :description="coach.description"
                            :hourlyRate="coach.hourlyRate">
                    </coach-item>
                    <!-- <li v-for="coach in retrieveCoaches"
                        :key="coach.id">
                        <p>{{coach.firstName}}</p>
                        <p>{{coach.lastName}}</p>
                        <p>{{coach.areas}}</p>
                        <p>{{coach.description}}</p>
                        <p>{{coach.hourlyRate}}</p>
                    </li> -->
                </ul>
                <h3 v-else>No coaches found</h3>
        </base-card>
    </section>
</div>

</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
    components: { CoachItem, CoachFilter},
    data(){
        return {
            activeFilters:{
                frontend: true,
                backend: true,
                career: true
            }
        }
    },

    computed:{
        ...mapGetters(['retrieveCoaches', 'hasCoaches', 'isAuthenticated', 'isCoach']),
        isLoggedIn(){
            return this.$store.getters['isAuthenticated'];
        },
        filteredCoach(){
            const coaches = this.retrieveCoaches;
            
            return coaches.filter(coach =>{
                if (this.activeFilters.frontend && coach.areas.includes('frontend')){
                    return true;
                }
                if (this.activeFilters.backend && coach.areas.includes('backend')){
                    return true;
                }
                if (this.activeFilters.career && coach.areas.includes('career')){
                    return true;
                }
                return false;
            })
        },

        isCoach(){
            return this.$store.getters['isCoach'];
        }
    },
    methods:{
        setFilters(updatedFilters){ 
        // we receive the updatedFilters from the child and we need to reflect the changes in the parent,
        //so we can only see the items that match our criteria
        this.activeFilters = updatedFilters;
        },
        retrieveDataFromFirebase(){
            this.$store.dispatch('retrieveDataFromFirebase');
        }
    },
    created(){
        this.$store.dispatch('retrieveDataFromFirebase'); // this loads all the coaches at once
    }
    //  created(){ // hook to get a specific coach based on the id, then save this data into a local variable
    //     //this.selectedCoach = this.$store.getters['retrieveCoaches'].find(coach => coach.id  === this.id);
        
    // }
    
    
};
</script>

<style scoped>

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

</style>