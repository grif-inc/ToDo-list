<template>
  <router-view></router-view>
</template>

<script setup>
  import { useUserStore } from './stores/user';

  const userStore = useUserStore();
  userStore.initUser();
</script>

<style scoped>

</style>