<template>
  <base-container title="Vuex">
    <h3>Normal variable retrieved with a mapGetter: 
      {{normalCounter}}</h3>
    <button @click="addValue">Add 10</button>
    <change-counter></change-counter>
    <favorite></favorite>
  </base-container>
  <base-container title="Authentication">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
  },

  methods:{
    addValue(){
      // we are using the mutation with commit instead of the action which is not ideal
      // we need to invoke the actions
      //this.$store.commit('increase', {value: 10}); 
      this.$store.dispatch('increase', {value: 10});
    }
  },
  computed:{
    ...mapGetters(['normalCounter'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>