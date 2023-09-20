<template>
    <div class="container">
      <div class="layout-login">
        <div class="card">
          <div class="card-header">Login</div>
          <form @submit.prevent="getlogin">
            <label for="email">Email</label>
            <div class="card-text">
              <input type="email" id="email" v-model="form.email" required />
            </div>
  
            <label for="pass">Password</label>
            <div class="card-text">
              <input type="password" id="pass" v-model="form.pass" required />
            </div>
            <button type="submit" class="btn btn-primary">Sign In</button>
          </form>
          <div class="link">
            <router-link to="/register"
              >Dont have an account? Register</router-link
            >
          </div>
        </div>
      </div>
    </div>
</template>


<script>

</script>