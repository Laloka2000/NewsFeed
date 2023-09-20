<template>
  <div id="app">
    <main>
      <NavbarMenu/>
    </main>
  </div>
</template>


<script>

import NavbarMenu from './components/NavbarMenu.vue'

export default {

  name: 'App',
  components: {
    NavbarMenu
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

@import'~bootstrap/dist/css/bootstrap.css'

</style>
