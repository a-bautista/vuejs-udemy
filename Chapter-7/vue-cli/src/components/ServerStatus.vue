<template>
    <div>
        <p>Server status: {{status}} </p>
        <hr />
        <button @click="changeStatus">Change status</button>
    </div>
</template>

<script>
// we write the data as a function, so this isn't shared by other objects
    export default {
        data: function(){
            return {
                status: 'Critical',
                toggle: true
            }
        },
        methods: {
            changeStatus(){
                if (this.toggle){
                    this.status = 'Normal';
                    this.toggle = false;
                }else{
                    this.status = 'Critical';
                    this.toggle = true;
                }
                
            }
        }
    }
</script>

