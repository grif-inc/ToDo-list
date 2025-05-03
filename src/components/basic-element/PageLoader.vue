<template>
    <div class="loader flex center">
        <l-bouncy
            size="100"
            speed="1.4" 
            color="#202D48" 
        ></l-bouncy>
    </div>
</template>

<script setup>
    import { bouncy } from 'ldrs'
    bouncy.register()   
</script>

<style scoped>
    .loader {
        width: 100%;
        height: 100vh;
        justify-content: center;
    }
</style>