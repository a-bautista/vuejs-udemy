<template>
    <div>
        <slot name="title"></slot>
        <p>This is the green color.</p>
        <div>
            <slot name="default">{{ displayCounterGreen }}</slot>
        </div> 
    </div>
</template>

<script>
    export default {
        props:{
            displayCounterGreen: {
                type: Number                
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>