<template>
    <div class="menu flex center betw">
        <h2>My Todo</h2>
        <router-link to="/profile" class="menu_profile flex center">
            <h5>{{ user.name }}</h5>
            <img src="../../img/avatar.jpg" alt="">
        </router-link>
    </div>
</template>

<script setup>
    import { useUserStore } from '../../stores/user';

    const user = useUserStore()
</script>

<style scoped>
    h2 {
        color: black;
        font-weight: 800;
    }
</style>