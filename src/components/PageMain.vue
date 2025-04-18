<template>
    <div class="main flex">
        <page-sidebar></page-sidebar>
        <div class="container">
            <page-header></page-header>
        </div>
        
    </div>
</template>

<script>
import PageSidebar from './PageSidebar.vue';
import PageHeader from './PageHeader.vue';
export default {
    components: { PageSidebar, PageHeader }
}
</script>

<style scoped>
.main {
    width: 100%;
    height: 100vh;
    background-color: #202D48;
    padding-top: 10px;
    padding-right: 8px;
}
    
</style>