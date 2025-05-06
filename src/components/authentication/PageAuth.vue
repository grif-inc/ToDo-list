<template>
    <form class="card">
       <div class="form-control">
          <img src="../../img/logo.svg" alt="">
          <h1>To<span>Do</span> </h1>
          <h2 class="flex jc-center">Welcome Back</h2>

          <input type="text"placeholder="Email">
          <input type="text"placeholder="Password">

          <hr>  
          <button class="btn" type="submit">Log in</button>
          <h4>Don’t have an account? <router-link to="/regist">Sign Up</router-link></h4>
       </div>       
    </form>
</template>
   
<script setup>
     import { computed, ref } from 'vue';
</script>

<style scoped>
     img {
          display: inline; 
          vertical-align: middle;
          margin-right: 32px;
          margin-left: 38px;
     }
     h1 {
          display: inline; 
          vertical-align: middle;
          align-items: center;
     }
     h2 {
          margin-bottom: 15px;
     }
     h4 {
          text-align: center;
     }
     button {
          margin-bottom: 20px;
     }
</style>