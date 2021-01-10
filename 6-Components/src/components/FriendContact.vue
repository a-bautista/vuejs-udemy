<template>
    <div>
        <li>
            <h2>{{ name }} {{friendIsFavorite === 1 ? '(Favorite)':''}} {{ isRich ? '(Rich)': '' }}</h2>
            <button @click="toggleDetails">
                 {{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Id:</strong>{{ id }}</li>
                <li><strong>Phone:</strong>{{ phoneNumber }}</li>
                <li><strong>Email:</strong>{{ emailAddress }}</li>
            </ul>
            <button @click="toggleIsFavorite">Toggle Favorite</button>
            <button @click="toggleIsRich">Toggle Rich</button>
            <button @click="deleteFriend">Delete</button>
        </li>
    </div>
</template>

<script>
export default {
    // send data to the parent
    // emits: {
    //     'toggle-rich': function(id){
    //         // this is a validator
    //         if (id){
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    // },
    emits: ['toggle-rich','delete-friend'],
    // receive data from the parent
    props:{
        id: String,
        name: {
            type: String,
            required: true
        },
        phoneNumber: String,
        emailAddress: String,
        isFavorite: {
            type: Number,
            required: false,
            default: 0,
            validator: function(value){
                return value == 1 || value == 0;
            }
        },
        isRich:{
            type: Boolean,
            required: false,
            default: false
        }
    },
    data(){
        return {
            detailsAreVisible: false,
            friendIsFavorite: this.isFavorite
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleIsFavorite(){
            // we can modify this data because it was stored in this component
            // remember that this data will change only inside the component, not in the parent component
            if (this.friendIsFavorite === 1){
                this.friendIsFavorite = 0;
            }else{
                this.friendIsFavorite = 1;
            }
        },
        toggleIsRich(){
            // the data flows from parent to child and then back to parent without being changed
            // because we are doing an emit to send the signal to the parent and no data is changed
            // in this component 
            this.$emit('toggle-rich', this.id);
        },
        deleteFriend(){
            this.$emit('delete-friend', this.id);
        }
    }
};
</script>

<style>


</style>