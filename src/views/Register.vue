<template>
    <div class="container">
        <div class="layout-login">
            <div class="card">
                <div class="card-header">Register</div>
                <form @submit.prevent="getRegister">
                  <label for="name">Name</label>
                  <div class="card-text"><input type="text" id="name" v-model="form.name" required></div>
                    <label for="email">Email</label>
                    <div class="card-text"><input type="email" id="email" v-model="form.email" required></div>
                    
                    <label for="pass">Password</label>
                    <div class="card-text"><input type="password" id="pass" v-model="form.pass"></div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
                <div class="link"><router-link to="/login">Already have an account? Login</router-link></div>
            </div>
        </div>
    </div>
</template>

<script>
</script>