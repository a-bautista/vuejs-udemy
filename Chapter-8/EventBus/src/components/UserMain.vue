<template>
    <div class="component">
        <h1>This is the main User component</h1>
        <p>This is the age of the user {{ userAge }}</p>
        <p>This is the current user: {{ userName }}</p>
    </div>
</template>

<script>
import { eventBus } from '../main'
    export default {
        props:{
            userAge: {
                type: Number
            },
            userName:{
                type: String
            }
        },
        created(){
            eventBus.$on('ageWasEdited',(myDataAge)=>{
                this.userAge= myDataAge
            });
        }

    }
</script>

<style scoped>
div {
        background-color: orangered;
    }
</style>