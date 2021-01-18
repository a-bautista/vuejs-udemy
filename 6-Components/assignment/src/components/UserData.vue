<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
                <input type="name" placeholder="Enter your name" v-model="enteredName" />
        </div>

        <div>
            <label>Age</label>
                <input type="age" placeholder="Enter your age" v-model="enteredAge" />
        </div>
        <button>Set data</button>
    </form>
</template>

<script>
export default {
    emits: ['user-data'],
    data(){
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    methods:{
        submitData(){
            this.$emit('user-data', this.enteredName, this.enteredAge);
        }
    }
}
</script>

