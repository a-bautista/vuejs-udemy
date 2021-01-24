<template>
<button @click=showSomething>Navigate programmatically</button>
<button @click=changeFalseToTrue>Save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data(){
    return {
      simpleState : false
    }
  },
  inject: ['users'],
  methods:{
    changeFalseToTrue(){
      this.simpleState = true;
      // if (this.simpleState){
      //   this.simpleState = false;
      // }else{
      //   this.simpleState = true;
      // }
    },
    showSomething(){
      // programmatic routing
      this.$router.push('/teams');
    }
  },
  beforeRouteLeave(to, from, next){
    if (this.simpleState){
      next();
    }else{
      const userLeaves = confirm('You have unsaved changes');
      next(userLeaves);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>