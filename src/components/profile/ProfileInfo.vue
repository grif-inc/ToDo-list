<template>
    <div class="flex info">
        <div class="info_item flex center">
            <h3>Email</h3>
            <p>{{ user.email }}</p>
        </div>
        <div class="info_item flex center">
            <h3>Phone</h3>
            <p>{{ user.phone }}</p>
        </div>
        <div class="info_item flex center">
            <h3>Birth</h3>
            <p>{{ user.birth }}</p>
        </div>
    </div>
</template>

<script setup>
    import { useUserStore } from '../../stores/user';

    const user = useUserStore()
</script>

<style scoped>
    h3 {
        color: black;
        margin-right: 126px;
    }
</style>