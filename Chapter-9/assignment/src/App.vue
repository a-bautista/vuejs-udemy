<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectedComponent='appBlue', counterBlue++" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectedComponent='appGreen', counterGreen++" class="btn btn-success">Load Green Template</button>
                <button @click="selectedComponent='appRed', counterRed++" class="btn btn-danger">Load Red Template</button>
                <hr>
                
                <component :is="selectedComponent" 
                           v-bind:displayCounterBlue="counterBlue"
                           v-bind:displayCounterGreen="counterGreen"
                           v-bind:displayCounterRed="counterRed">
                    
                </component>
                <!-- <app-blue></app-blue>
                <app-green></app-green>
                <app-red></app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {

        data: function(){
            return {
                selectedComponent: 'appBlue',
                counterBlue: 0,
                counterGreen: 0,
                counterRed: 0
            }
        },
        
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
    .btn-primary {
        background-color: lightblue;
        color: black;
        
    }

    .btn-success {
        background-color: lightgreen;
        color: black;
        
    }

    .btn-danger {
        background-color: red;
        color: black;
        
    }

</style>
