<template>
    <div class="layout">
       <div class="section1">
          <p class="sidebar-title">categories</p>
          <ul v-for="item in categoryList" :key="item">
             <li @click="filteredItems(item)">{{item}}</li>
          </ul>
       </div>
       <div class="section2">
          <div class="item2" v-for="product in ProductList" :key="product.id">
             <item-card :product="product"></item-card> 
          </div>  
       </div>
    </div>
</template>

<script>
</script>