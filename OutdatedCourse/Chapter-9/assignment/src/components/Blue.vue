<template>
    <div>
        <slot name="title"></slot>
        <p>This is the blue color.</p>
        <div>
            <slot name="default">{{ displayCounterBlue }}</slot>
        </div> 
    </div>
</template>

<script>
    export default {
        props:{
            displayCounterBlue:{
                type: Number
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>