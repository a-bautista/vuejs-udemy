<template>
    <div class="component">
        <app-user-main 
        v-bind:userAge="age"
        v-bind:userName="name">
        
        </app-user-main>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                v-bind:myName="name"
                v-bind:userAge="age"
                @nameWasReset="name = $event">
                <!-- 1. myName is the name of the props which passes the 
                    name to the User Detail child.
                     2. nameReset is an custom event listener
                     that receives the notification from the child user Detail.
                     Props and custom events & Props and callbacks are 
                     the 2 ways to pass data from parent to child and viceversa
                -->
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                v-bind:userAge="age"
                @ageWasEdited="age =$event">
                <!-- 1. userAge is the props name which passes the age 
                    User Edit child.
                     2. ageWasEdited is an custom event listener
                     that receives the notification from the child UserEdit and 
                     indicates to the other child UserDetail to do the changes.
                -->

                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import UserMain from './UserMain.vue';
    

    export default {
        data: function(){
            return {
                name: 'Alejandro',
                age: 24
            };
        },
        methods:{
            changeName(){
                this.name = "Bautista"
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit,
            appUserMain: UserMain
        }
    }
</script>

<style scoped>
    div {
        background-color: blueviolet;
    }
</style>
