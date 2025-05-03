<template>
    <div class="tasks_item">
        <h3 class="list_heading">Completed</h3>
        <div class="list_inner"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    h3 {
        color: black;
    }

    .list_heading::before {
        background-color: #8BC34A; 
    }
</style>