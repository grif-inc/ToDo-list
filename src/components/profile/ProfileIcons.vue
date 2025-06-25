<template>
    <div class="flex center end">
        <router-link to="/edit"><img src="../../img/profile/edit.svg" alt=""></router-link>
        <router-link to="/auth"><img src="../../img/profile/exit.svg" alt="" @click="handleLogout"></router-link>
    </div>
    <page-loader v-if="isLoading"></page-loader>
</template>

<script setup>
    import { getAuth, signOut } from 'firebase/auth'
    import { useUserStore } from '../../stores/user'
    import { ref } from 'vue'

    const userStore = useUserStore()
    const isLoading = ref(false)

    const handleLogout = async () => {
        isLoading.value = true
        try {
            await signOut(getAuth())
            userStore.name = ''
            userStore.email = ''
            userStore.uid = ''
            localStorage.removeItem('user')
        } catch (error) {
            console.error('Error logging out:', error)
        } finally {
            isLoading.value = false
        }
    }
</script>

<style scoped>
    img {
        margin-left: 35px;
    }
</style>