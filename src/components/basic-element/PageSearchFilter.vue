<template>
    <div class="search-filter flex center betw">
        <input type="text" placeholder="Search">
        <div class="filter flex center">
            <input type="text" placeholder="From">
            <input type="text" placeholder="To">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .search-filter {
        flex-wrap: wrap;
        gap: 10px;
        max-width: 100%;
    }

    .search-filter input {
        flex: 1 1 150px;
    }
</style>