<template>
    <form class="add-tasks-form flex column">
        <input type="text" placeholder="Title">
        <textarea rows="3" name="Description" id="" placeholder="Description"></textarea>
        <div class="flex">
            <input v-if="!showDateFrom" @focus="showDateFrom = true" type="text" placeholder="From">
            <input v-if="showDateFrom" type="date">
            <input v-if="!showDateTo" @focus="showDateTo = true" type="text" placeholder="To">
            <input v-if="showDateTo" type="date">
        </div>
        <button class="add-task">Add Task</button>
    </form>
</template>

<script setup>
    import { ref } from 'vue';

    const showDateFrom = ref(false)
    const showDateTo = ref(false)
</script>

<style scoped>
    input[type="date"] {
        max-width: 192px;
    }
    input:focus {
        border: 2px solid black;
    }
</style>