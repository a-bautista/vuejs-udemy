<template>
  <div id="component">
        <div class="row">
            <header-component></header-component>
        </div>
        <hr>
        <div class="row">
            <server-list-component></server-list-component>
            <detailed-server-component></detailed-server-component>
        </div>
        <hr>
        <div class="row">
            <footer-component></footer-component>
        </div>
  </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import ServerList from './components/ServerList.vue';
    import DetailedServer from './components/DetailedServer.vue';

    export default {
        components: {
            headerComponent: Header,
            footerComponent: Footer,
            serverListComponent: ServerList,
            detailedServerComponent: DetailedServer,
        }
    }

</script>

<style>

</style>
