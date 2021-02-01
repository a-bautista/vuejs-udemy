<template>
    <section>
        <base-card>
            <h2>Register as a coach now!</h2>
            <coach-form @save-data="saveData"></coach-form>
         </base-card>
    </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue'
export default {
    components:{
        CoachForm
    },
    methods:{
        saveData(data){
            this.$store.dispatch('registerCoach', data);
            this.$router.replace('/coaches'); // replace pushes the data into the json and doesn't allow you to go back
        }
    }
}
</script>
<style scoped>

</style>