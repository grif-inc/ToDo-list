<template>
    <div class="tasks-form">
        <div class="flex betw">
            <h4 title="Title of the Task Title of the TaskTitle of the TaskTitle of the TaskTitle of the Task">Title of the Task Title of the TaskTitle of the TaskTitle of the TaskTitle of the Task</h4>
            <button class="tasks-edit" @click="toggleModal"></button> 

            <div v-if="isModalOpen" class="edit-task">
                <div class="modal-content">
                    <button  class="modal-btn">Edit</button>
                    <p >Change the status:</p>
                    <button  class="modal-btn delete">Delete</button>
                </div>
            </div>  
        </div>
        <p class="tasks-description">Description of the task lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum consequuntur excepturi? Sapiente ea sunt consequatur rem in impedit porro ipsa similique reprehenderit repudiandae, cumque, sequi qui excepturi iusto eaque. </p>
        <div class="tasks-time">24.03.2022 - 23.12.2023</div>


    </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);

const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value;
};


</script>

<style scoped>
    h4 {
        color:black;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 325px;
    }    

</style>