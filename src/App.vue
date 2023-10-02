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
      <div class="row content">
        <div class="col">
          Column
        </div>
        <div class="col">
          Column
        </div>
        <div class="col">
          Column
        </div>
      </div>
  </div>
  </div>
</template>


<script>


export default {
  name: 'App',

  Data() {
    return {
      options: {
        api_url: 'https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=10&category=sports',
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '24021b6bc7msh30b42bd30cd93e3p172198jsndf268abf525c',
          'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
        },

      }
    }
  },
  /*
  method: {

    fetchApi(){
      try {
	      const response = await fetch(url, options);
	      const result = await response.text();
	      console.log(result);
      } catch (error) {
	      console.error(error);
      }
    }
  }*/
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
