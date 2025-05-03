<template>
    <div class="tasks_item">
        <h3 class="list_heading">New</h3>
        <div class="list_inner">
            <button class="flex center add-btn"><img src="../../img/add-icon.svg" alt="">Add New</button>
        </div>
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
        background-color: #17A2B8; 
    }
</style>