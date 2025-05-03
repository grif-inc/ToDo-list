<template>
    <div class="main flex">
        <page-sidebar></page-sidebar>
        <div class="container">
            <page-header></page-header>
            <h2>Profile</h2>
            <div class="profile_wrapper">
                <profile-edit-icons></profile-edit-icons>
                <profile-edit-nick></profile-edit-nick>
                <profile-statistics></profile-statistics>
                <hr>
                <profile-edit-info></profile-edit-info>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import PageSidebar from '../basic-element/PageSidebar.vue';
import PageHeader from '../basic-element/PageHeader.vue';
import ProfileEditIcons from './ProfileEditIcons.vue';
import ProfileEditNick from './ProfileEditNick.vue';
import ProfileStatistics from '../profile/ProfileStatistics.vue';
import ProfileEditInfo from './ProfileEditInfo.vue';



</script>

<style scoped>
    h2 {
        color: black;
        font-weight: 800;
        margin: 28px 0;
    }
</style>