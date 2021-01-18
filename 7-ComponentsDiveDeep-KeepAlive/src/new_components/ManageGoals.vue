<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal" />
        <button @click="setGoal">Set Goal</button>
        <teleport to="body"><!-- Render the dialog error to the body css selector-->
            <error-alert v-if="inputIsInvalid">
                <h2>Input is invalid!</h2>
                <p>Please type a few characters...</p>
                <button @click="confirmError">Ok</button>
            </error-alert>
        </teleport>
    </div>
</template>


<script>
import ErrorAlert from './ErrorAlert';
export default {
    components: {
        ErrorAlert
    },
    data(){
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === ''){
                this.inputIsInvalid = true;
                //alert('Input must not be empty');
            }
        },
        confirmError(){
            this.inputIsInvalid = false;
        }
    }
}
</script>