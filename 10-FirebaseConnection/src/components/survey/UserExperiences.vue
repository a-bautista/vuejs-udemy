<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">
        {{ error }}
      </p>
      <p v-else-if="!isLoading && results.length === 0">No data was found</p>
      <ul else="!isLoading">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data(){
    return {
      results: [],
      isLoading: false,
      error: null
    }
  },
  
  /* when you click on the button, you trigger the generate loadExperiences() method and the retrieved results are stored in the results
   * variable, then the component survery results display the results 
   */
  methods:{
    loadExperiences(){
      this.isLoading = true;
      this.error = null;
      fetch('https://vueapp-72b0d-default-rtdb.firebaseio.com/surveys.json')
      // we use arrow functions to indicate that this.results are referring to the outside Vue object
      .then((response) => {
        if (response.ok){
          return response.json();
        }
      })
      .then((data) => { // data is the object that we receive after the promise from above returns the data from firebase
        this.isLoading = false; // data has been received
        const results = []; // store the results in this array, so we can display them in the browser
        for (const id in data){
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating
          });
        }
        this.results = results; // the results from the db are stored internally
        console.log(results.length);
      }).catch((error)=> {
        console.log(error);
        this.isLoading = false;
        this.error = 'failed to load the content';
      });
    }
  },
  // this makes sure to load automatically the loadExperiences method once the component gets mounted
  // mounted(){
  //   this.loadExperiences();
  // }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>