<template>
    <div>
        <slot name="title"></slot>
        <p>This is the red color.</p>
        <div>
            <slot name="default">{{ displayCounterRed }}</slot>
        </div> 
    </div>
    
</template>

<script>
    export default {
        props:{
            displayCounterRed:{
                type: Number
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>