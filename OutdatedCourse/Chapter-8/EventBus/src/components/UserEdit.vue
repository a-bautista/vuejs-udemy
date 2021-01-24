<template>
    <div class="component">
        <h3>You may <b>edit the User Age</b> here</h3>
        <p>Current age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props: ['userAge'],
        methods:{
            editAge(){
                this.userAge = 30;
                //this.$emit('ageWasEdited',this.userAge);
                //eventBus.$emit('ageWasEdited',this.userAge);
                // send this event to the centralized bus from main
                eventBus.changeAge(this.userAge);
            }
        }
    }

</script>


<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
