<template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <slot></slot>
    </div>
</template>


<script>
    export default {
        
    }
</script>

<style scoped>
    div {
        margin: 2rem auto;
    }
</style>