<template>
    <div class="card shadow-sm">
      <img class="card-img-top card-image" :src="product.image" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title" @click="productDetails(product.id)">{{product.title}}</h5>
        <h5 class="card-title">Rs. &#8377; {{product.price*70}}</h5>
        <p class="card-text desc">{{ product.description }}</p>
        <p class="card-text ">{{product.category}}</p>
        <p class="card-text"><small class="text-muted">Rating:{{product.rating.rate}}/5</small></p>
        <div class="d-flex" style="justify-content: space-around;">
            <button class="btn btn-warning btn-text" type="button" @click="addToCart()">Add to Cart! <span class="material-symbols-outlined">
                add_shopping_cart
                </span>
            </button>
            <button class="btn btn-primary" type="button">Buy Now!<span class="material-symbols-outlined">
                shopping_bag
            </span></button>
        </div>
      </div>
    </div>
</template>
  

<script>

</script>