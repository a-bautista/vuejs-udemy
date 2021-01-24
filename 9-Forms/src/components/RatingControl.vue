<template>
    <ul>
        <li :class="{active: modelValue === 'poor'}">
            <button type="button" @click="activate('poor')">Poor</button></li>
        <li :class="{active: modelValue === 'average'}">
            <button type="button" @click="activate('average')">Average</button></li>
        <li :class="{active: modelValue === 'great'}">
            <button type="button" @click="activate('great')">Great</button></li>
    </ul>    
</template>

<script>
export default {
    props: ['modelValue'], // this is a specific keyword from vue which is used with v-model for manipulating components
    emits: ['update:modelValue'], // this is a specific keyword from vue which is used with v-model for manipulating components
    // data(){
    //     return {
    //         activeOption: this.modelValue,
    //     };
    // }, 
    // computed: {
    //     activeOption(){
    //         return this.modelValue;
    //     }
    // },
    methods: {
        activate (option){
             //this.activeOption = option;
             this.$emit('update:modelValue', option);
        },
    }
}
</script>

<style scoped>

.active {
    border-color: green;
}

.active button{
    color: yellow;
    background-color: orange;

}

ul {
    list-style:none;
    margin: 0.5rem 0;
    padding: 0px;
    display: flex; 
}

li {
    margin: 0 1 rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}



    

</style>