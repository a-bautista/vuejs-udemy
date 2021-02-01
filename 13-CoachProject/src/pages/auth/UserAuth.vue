<template>
<div>
    <!--!! error means to explicitly convert this value to a boolean and it indicates if this value is not null-->
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
        <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
        <p>Authenticating, please wait...</p>
        <base-spinner></base-spinner>
    </base-dialog>
    <!--!! successRegistration means to explicitly convert this value to a boolean and it indicates if this value is not null-->
    <base-dialog :show="!!successRegistration" title="Registering..." @close="handleSuccessRegistration">
        <p>{{successRegistration}}</p>
    </base-dialog>
        <base-card>
            <form @submit.prevent="submitForm">
                <div class="form-control">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model.trim="email" />
                </div>
                <div class="form-control">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model.trim="password" />
                </div>
                <p v-if="!formIsValid">
                    Please enter a password length greater than 8 characters.
                </p>
                <base-button>{{submitButtonCaption}}</base-button>
                <base-button type=button mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
            </form>
        </base-card>
</div>
</template>

<script>
import BaseDialog from '../../components/BaseDialog.vue';
import BaseSpinner from '../../components/BaseSpinner.vue';
export default {
  components: { BaseDialog, BaseSpinner },
    data(){
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null,
            successRegistration: null
        };
    },
    computed:{
        submitButtonCaption(){
            if (this.mode === 'login'){
                return 'Login';
            }else{
                return 'Signup'; 
            }
        },
        switchModeButtonCaption(){
            if (this.mode === 'login'){
                return 'Signup instead';
            }else{
                return 'Login instead'; 
            }
        }
    },
    methods:{
        async submitForm(){
            this.formIsValid = true;
            if (this.email === '' || !this.email.includes('@') || this.password.length < 8 ){
                this.formIsValid = false;
                return ;
            }

            try{
                if (this.mode === 'login'){
                    this.isLoading = true;
                    await this.$store.dispatch('login', {
                        email: this.email,
                        password: this.password
                    });

                }else{
                    this.isLoadingRegistration = true;
                    await this.$store.dispatch('signup', {
                        email: this.email,
                        password: this.password
                    });
                    this.successRegistration = 'Registration has been successful, you can close this window now.'
                }
                // below you will login with the login to register as a coach button and it will redirect to the registration page as a coach
                const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');  
                this.$router.replace(redirectUrl);
            }catch(error){
                this.error = error.message || 'Failed to authenticate, try later';
            }
            this.isLoading = false;
        },
        switchAuthMode(){
            if (this.mode === 'login'){
                this.mode = 'signup';
            }else{
                this.mode = 'login';
            }
        },
        handleError(){
            this.error = null;
        },
        handleSuccessRegistration(){
            this.successRegistration = null;
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>