<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <main-container-app></main-container-app>
            </div>
        </div>
    </div>
</template>

<script>
    import MainContainer from './components/MainContainer.vue';

    export default {
        components: {
            mainContainerApp: MainContainer
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
