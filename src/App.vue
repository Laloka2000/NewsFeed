<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="container">
      <div>
        <button @click="fetchData">Fetch Data</button>
        <div v-if="apiResponse">{{ apiResponse }}</div>
    </div>
  </div>
  </div>
</template>


<script>

import axios from 'axios';



export default {
  name: 'App',

  data() {
    return {
      apiResponse: null
    }
  },

  methods: {
  fetchData() {
    axios.get('https://newslit-news-search.p.rapidapi.com/news')
      .then(response => {
        this.apiResponse = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}

}

</script>






<style scoped>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
  padding: 0;
}

</style>
