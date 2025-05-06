<template>
    <form class="card" v-if="!isLoading">
        <div class="form-control">
            <img src="../../img/logo.svg" alt="">
            <h1>To<span>Do</span> </h1>

            <h2 class="flex jc-center">Join us</h2>

            <input type="text" placeholder="Name" v-model="name">
            <input type="text"placeholder="Email" v-model="email">
            <input type="text"placeholder="Password" v-model="password">

            <div class="flex">
                <input type="checkbox" id="conditions">
                <label for="conditions">I agree to the terms & conditions</label>
            </div>
            
            <button class="btn" type="submit">Sign Up</button>

            <h4>Already have an account? <router-link to="/auth">Log in</router-link></h4>
        </div> 
    </form>
    <page-loader v-if="isLoading"></page-loader>
</template>

<script setup>
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
    import { ref } from 'vue';
    import PageLoader from '../basic-element/PageLoader.vue'

    const name = ref('')
    const email = ref('')
    const password = ref('')
    const isLoading = ref(false)

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