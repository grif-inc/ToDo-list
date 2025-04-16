<template>
  <router-view></router-view>
</template>

<script>
import PageAuth from './components/authentication/PageAuth.vue';
import PageRegist from './components/authentication/PageRegist.vue';
import PageMain from './components/PageMain.vue';


export default {
    components: { PageAuth, PageRegist, PageMain }
}
</script>

<style scoped>

</style>