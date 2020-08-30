<template>
    <div class="component">
        <h3>You may view the <b>User Details</b> here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    // we use props (properties) to get data from outside to this file
    export default {
        // to validate props, we need to make it an object and then type
        // the type of data we will get 
        props: {
            myName:{
                type: String,
                required: true
            },
            userAge:{
                type: Number
            }   
        },
        methods: {
            switchName(){
                return this.myName.split("").reverse().join("");
            },
            resetName(){
                this.name = 'Alejandro';
                // create a custom event to let know to the parent
                // that the name has been reset
                this.$emit('nameWasReset',this.name);
            }
        }
    }

</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
