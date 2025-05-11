<template>
    <div class="main flex">
        <page-sidebar></page-sidebar>
        <div class="container">
            <page-header></page-header>
            <page-menu></page-menu>
            <page-search-filter></page-search-filter>
            <tasks-lists></tasks-lists>
        </div>
        
    </div>
</template>

<script setup>
import PageSidebar from './basic-element/PageSidebar.vue';
import PageHeader from './basic-element/PageHeader.vue';
import PageMenu from './basic-element/PageMenu.vue';
import PageSearchFilter from './basic-element/PageSearchFilter.vue';
import TasksLists from './task-lists/TasksLists.vue';



</script>

