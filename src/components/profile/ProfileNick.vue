<template>
    <div class="profile_nick-avatar">
        <img class="profile_avatar" src="../../img/avatar.jpg" alt="">
        <h2>{{ user.name }}</h2>
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