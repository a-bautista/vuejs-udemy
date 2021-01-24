<template>
    <button @click="addOne">Add another 1</button>
</template>

<script>
export default {
    methods: {
        addOne(){
            //this.$store.state.counter = this.$store.state.counter + 2
            // dispatch is used to call the actions
            this.$store.dispatch('incrementAction'); // use the mutation increment 
        }
    }
}
</script>