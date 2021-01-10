var vm1 = new Vue({
    el: '#app1',
    data: {
        title:'The Life Cycle of a Vue JS instance.'
    },
    beforeCreate: function(){
        console.log('Before Created');
    },
    created: function(){
        console.log('After Created');
    },
    beforeMount: function(){
        console.log('Before Mount');
    },
    mounted: function(){
        console.log('Mounted');
    },
    beforeUpdate: function(){
        console.log('Before Update');
    },
    updated: function(){
        console.log('updated');
    },
    beforeDestroy: function(){
        console.log('Before destroy');
    },
    destroyed: function(){
        console.log('Destroyed');
    },
    methods: {
        destroy: function(){
            this.$destroy();
        }
    }
});