<template>
      <div class="container">
        <span v-on:keydown="key">{{message}}</span>
        <span class="d-flex mb-3 mt-2">
          <router-link to="/">
            <span class="material-symbols-outlined"> arrow_back </span> Back To
            Shopping
          </router-link>
        </span>
        <div class="card" v-if="cart.length != 0">
          <table class="table cart">
            <thead>
              <tr>
                <th scope="col" class="w-10">Product ID</th>
                <th scope="col" class="w-50">Item</th>
                <th scope="col" class="w-10">Quantity</th>
                <th scope="col" class="w-10">Price/item</th>
                <th scope="col" class="w-20"></th>
              </tr>
            </thead>
            <tbody>
        
                  <tr v-for="product in allItems" :key="product.id">
                    <td>{{product.id}}</td>
                    <td class="d-flex">
                      <img
                        :src="product.img"
        
                      />
                      <span>{{product.title}}</span>
                    </td>
                    <td>
                      <input type="number" name="" id="" @change="onChange(product.id,$event)" :value="product.count" size="4" min="1" max="10" />
                    </td>
                    <td><span>Rs. &#8377;{{parseFloat(product.price*70).toFixed(2)}}</span></td>
                    <td>
                      <button class="btn btn-danger" @click="deleteItem(product.id)">
                        <span class="material-symbols-outlined"> delete_forever </span>
                      </button>
                    </td>
                  </tr>
            
              <tr>
                <td></td>
                <td></td>
                <td>Total Quantity:{{items}}</td>
                <td>Grand Total :&#8377;{{total}}</td>
                <td><button class="btn btn-success" @click="checkout">Buy Now</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div  class="no-item" v-else>
          Nothing in the cart !!!
        </div>
      </div>
</template>

<script>
</script>