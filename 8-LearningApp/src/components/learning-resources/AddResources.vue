<template>
    <base-card>
        <form @submit.prevent="submitData" >
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" v-model="enteredTitle" />
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" v-model="enteredDescription" ></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" v-model="enteredLink" />
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
            <teleport to="body"><!-- Render the dialog error to the body css selector-->
                <error-alert v-if="inputIsInvalid">
                    <h2>Input is invalid!</h2>
                    <p>Please type a few characters...</p>
                    <button @click="confirmError">Ok</button>
                </error-alert>
            </teleport>
        </form>
    </base-card>
</template>

<script>
import ErrorAlert from '../UI/ErrorAlert.vue';

export default {
     components: { ErrorAlert },
    data(){
        return {
            enteredTitle: '',
            enteredDescription: '',
            enteredLink: '',
            inputIsInvalid: false
        }
    },
    inject:['addResources'], // this injection comes from TheResources.vue file
    methods:{
        submitData(){
           // this.$emit('resource-added', this.enteredTitle, this.enteredDescription, this.enteredLink);
           const enteredTitle = this.enteredTitle;
           const enteredDescription = this.enteredDescription;
           const enteredLink = this.enteredLink;

            if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredLink.trim() === ''){
                this.inputIsInvalid = true;
            }else{
                this.addResources(enteredTitle, enteredDescription, enteredLink);
            }

           
        },
        confirmError(){
            this.inputIsInvalid = false;
        }
        
    }
}
</script>

<style scoped>

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

</style>