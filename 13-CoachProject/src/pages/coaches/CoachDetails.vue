<template>
    <section>
        <base-card>
            <h2>{{ fullName }}</h2>
            <section>
                    <base-badge v-for="area in selectedCoach.areas" :key="area" :type="area" :title="area"></base-badge>
            </section>
            <p>{{ description }}</p>
            <h3>${{ rate }}</h3>
        </base-card>
    </section>
    <section>
        <base-card>
            <header>
                <h2>Interested? Reach out now!</h2>
                <base-button link :to="coachContactLink">Contact</base-button>
            </header>
            <router-view></router-view><!--This is necessary to display the children routes, the details will still be visible-->
        </base-card>
    </section>
</template>

<script>
export default {
    props:['id'],
    data(){
        return {
            selectedCoach: null
        };
    },
    computed:{
        fullName(){
            //return 0;
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        coachContactLink(){
            //return this.$route.path + '/' + this.id + '/contact';
            return '/coaches/' + this.id + '/contact';
        },
        // areas(){
        //     return this.selectedCoach.areas;
        // },
        rate(){
            return this.selectedCoach.hourlyRate;
        },

        description(){
            return this.selectedCoach.description;
        }
    },
    created(){ // hook to get a specific coach based on the id, then save this data into a local variable
        this.selectedCoach = this.$store.getters['retrieveCoaches'].find(coach => coach.id  === this.id);
    }
}
</script>