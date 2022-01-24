<template>
  <div class="app">
    <JobList :jobs="jobs" />
    <!-- <p> {{ jobs[0].location }} </p> -->
    <!-- <button @click="changeName('Emily')">Change the name</button>
    <button @click="changeAge(25)">Change the age</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Job from './types/Job';
import JobList from './components/JobsList.vue';

export default defineComponent({
  name: 'App',
  components: {JobList},
  setup() {
    const jobs = ref<Job[]>([
      { title: "Farmer", location: "Lon Lon Ranch", salary: 3000, id: '1' },
      { title: "Prison Guard", location: "Gerudo Valley", salary: 40000, id: '2'},
      { title: "Fisherman", location: "Lake Hylia", salary: 20000, id: '3'},
    ])
    return { jobs }
  }

  //   data() {
  //     return {
  //       name: 'Alejandro',
  //       age: 31 as number | string // type assertion
  //   }
  // },
  // methods: {
  //   changeName(name: string) {
  //       this.name = name; 
  //     },
  //   changeAge(age: number | string){
  //     this.age = age;
  //   }
  // }
});
</script>

<style>

</style>
