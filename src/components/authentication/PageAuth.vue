<template>
    <form class="card" v-if="!isLoading" @submit.prevent="submitForm">
       <div class="form-control">
          <img src="../../img/logo.svg" alt="">
          <h1>To<span>Do</span> </h1>
          <h2 class="flex jc-center">{{ titleText }}</h2>

          <input v-if="!isLogin" type="text" placeholder="Name" v-model="name" max="15">
          <div v-if="isNameTooLong" style="color: red; font-size: 16px; margin-bottom: 8px;">Name must be 15 characters or less</div>
          <input type="text" placeholder="Email" v-model="email" max="30">
          <div class="password-container">
               <input :type="showPassword ? 'text' : 'password'" placeholder="Password" v-model="password">
               <button class="password-vision" type="button" @click="togglePassword" :class="{ 'show-password' : showPassword}"></button>
          </div>

          <div v-if="!isLogin" class="flex">
               <input type="checkbox" id="conditions" v-model="isChecked">
               <label for="conditions">I agree to the terms & conditions</label>
          </div>

          <hr v-if="isLogin">  
          <button class="btn" type="submit" :disabled="(!isLogin && !isChecked) || isNameTooLong">{{ buttonText }}</button>
          <h4>{{ subtitleText }} <a href="#" @click.prevent="toggleAuth">{{ linkText }}</a></h4>
       </div>       
    </form>
    <page-loader v-if="isLoading"></page-loader>
</template>
   
<script setup>
     import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
     import { computed, ref } from 'vue';
     import { useRouter } from 'vue-router';
     import PageLoader from '../basic-element/PageLoader.vue'
     import { useUserStore } from '../../stores/user'

     const name = ref('')
     const email = ref('')
     const password = ref('')

     const isLogin = ref(true)
     const isLoading = ref(false)
     const showPassword = ref(false)
     const isChecked = ref(false)

     const router = useRouter()

     const isNameTooLong = computed(() => {
          return !isLogin.value && name.value.length > 15
     })

     const togglePassword = () => {
          showPassword.value = !showPassword.value
     }

     const toggleAuth = (() => {
          isLogin.value = !isLogin.value
          email.value = ''
          password.value = ''
          name.value = ''
          isChecked.value = false
     })

     // Text
     const buttonText = computed(() => {
          return isLogin.value ? 'Log in' : 'Sign Up'
     })

     const titleText = computed(() => {
          return isLogin.value ? 'Welcome Back' : 'Join us'
     })

     const subtitleText = computed(() => {
          return isLogin.value ? "Don't have an account?" : "Already have an account?"
     })

     const linkText = computed(() => {
          return isLogin.value ? 'Sign Up' : 'Log in'
     })



     const signUp = async() => {
          isLoading.value = true
          try {
               const userData = await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
               const user = userData.user

               await updateProfile(user, {
                    displayName: name.value
               })


               const userStore = useUserStore()
               userStore.name = name.value
               userStore.email = email.value
               userStore.uid = user.uid

               router.push('/main')
          } catch(e) {
               console.error(e)
          } finally {
               isLoading.value = false
          }
     }

     const signIn = async() => {
          isLoading.value = true
          try {
               await signInWithEmailAndPassword(getAuth(), email.value, password.value)
               router.push('/main')
          } catch(e) {
               console.error(e)
          } finally {
               isLoading.value = false
          }
     }

     const submitForm = () => {
          if(isLogin.value) {
               signIn()
          }
          else {
               if (!isChecked.value) return;
               signUp()
          }
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
          margin-bottom: 20px;
     }
     label {
          margin-bottom: 20px;
     }
</style>