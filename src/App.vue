<template>
  <router-view></router-view>
</template>

<script>
import PageAuth from './components/authentication/PageAuth.vue';
import PageRegist from './components/authentication/PageRegist.vue';
import PageMain from './components/PageMain.vue';
import PageProfile from './components/profile/PageProfile.vue';
import PageProfileEdit from './components/profile-edit/PageProfileEdit.vue';

export default {
    components: { PageAuth, PageRegist, PageMain, PageProfile, PageProfileEdit }
}
</script>

<style scoped>

</style>