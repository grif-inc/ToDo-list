<template>
 <form class="card">
    <div class="form-control">
        <img src="../../img/logo.svg" alt="">
        <h1>To<span>Do</span> </h1>

        <h2 class="center">Join us</h2>

        <input type="text" placeholder="Name">
        <input type="text"placeholder="Email">
        <input type="text"placeholder="Password">

        <div class="flex">
            <input type="checkbox" id="conditions">
            <label for="conditions">I agree to the terms & conditions</label>
        </div>
        
        <button class="btn" type="submit">Sign Up</button>

        <h4>Already have an account? <router-link to="/auth">Log in</router-link></h4>
    </div>
    
 </form>
</template>

<script>
export default {
    
}
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
        margin: 20px 0;
    }
</style>