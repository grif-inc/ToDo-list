<template>
    <div class="tasks_item">
        <h3 class="list_heading">New</h3>
        <div class="list_inner">
            <button v-if="AddNew" @click="AddNew = false" class="flex center add-btn"><img src="../../img/add-icon.svg" alt="">Add New</button>
            <add-tasks-form v-else></add-tasks-form>
            <tasks-form></tasks-form>
        </div>
    </div>
</template>

<script setup>
    import TasksForm from './TasksForm.vue';
    import { ref } from 'vue';
    import AddTasksForm from './AddTasksForm.vue';

    let AddNew = ref(true);
</script>

<style scoped>
    h3 {
        color: black;
    }

    .list_heading::before {
        background-color: #17A2B8; 
    }
</style>