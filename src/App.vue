<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div class="container">
      <div>
        <h1>Kategóriák</h1>
        <select class="form-select" aria-label="Default select example">
          <option selected>Több</option>
          <option value="1">Tech</option>
          <option value="2">Világ</option>
          <option value="3">Üzlet</option>
        </select>
        <div class="tech">
          <h2>Technológia</h2>
        </div>
        <h1>Api</h1>
        <button @click="fetchNews">Fetch News</button>
        <ul>
          <li v-for="article in articles" :key="article.key">
            {{ article.title }}
          </li>
        </ul>
        <Carousel3d/>
    </div>
  </div>
  </div>
</template>


<script>

import Carousel3d from './components/Carousel3d.vue';

export default {
  name: 'App',

  components: {
    Carousel3d
  },

  data() {
    return {
      articles: []
    }
  },

  methods: {
    fetchNews(){
      var url = 'https://newsapi.org/v2/everything?' +
                'q=Apple&' +
                'from=2023-11-02&' +
                'sortBy=popularity&' +
                'apiKey=d6287ad7bf594dfdaeac226f7328c34a';
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.articles = data.articles;
        })
        .catch(error => {
          console.log('Error fetching data', error);
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

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-start,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  display: flex;
}

</style>
