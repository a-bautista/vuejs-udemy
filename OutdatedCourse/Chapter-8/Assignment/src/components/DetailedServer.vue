<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-elese>#{{ server.id }} selected, Status: {{ server.status }}</p>
        <hr />
        <button @click="resetStatus">Change status</button>
    </div>

</template>

<script>
    import { serverBus } from '../main';

    export default {
        data:
            function(){
                return {
                    server: null
                }
            },
        methods:{
            resetStatus(){
                this.server.status = 'Normal';
            }
        },

        created(){
            serverBus.$on('serverSelected', (server)=>{
                this.server = server;
            });
        }
    }
</script>


<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
