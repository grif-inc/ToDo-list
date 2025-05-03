<template>
    <div class="main flex">
        <page-sidebar></page-sidebar>
        <div class="container">
            <page-header></page-header>
            <h2>Profile</h2>
            <div class="profile_wrapper">
                <profile-icons></profile-icons>
                <profile-nick></profile-nick>
                <profile-statistics></profile-statistics>
                <hr>
                <profile-info></profile-info>

            </div>
        </div>
    </div>
</template>

<script setup>
import PageSidebar from '../basic-element/PageSidebar.vue';
import PageHeader from '../basic-element/PageHeader.vue';
import ProfileIcons from './ProfileIcons.vue';
import ProfileNick from './ProfileNick.vue';
import ProfileStatistics from './ProfileStatistics.vue';
import ProfileInfo from './ProfileInfo.vue';


</script>

<style scoped>
    h2 {
        color: black;
        font-weight: 800;
        margin: 28px 0;
    }
</style>