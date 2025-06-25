<template>
    <form class="flex info" @submit.prevent="UpdateProfile">
        <div class="info_item flex center">
            <h3>Name</h3>
            <input type="text" v-model="name" maxlength="15">
        </div>
        <div class="info_item flex center">
            <h3>Email</h3>
            <input type="email" v-model="email">
        </div>
        <div class="info_item flex center">
            <h3>Phone</h3>
            <MaskInput mask="+7-###-###-##-##" :value="phone" v-model="phone" />
        </div>
        <div class="info_item flex center">
            <h3>Birth</h3>
            <input type="date" v-model="birth">
        </div>
        <div class="flex end">
            <button class="btn">Update Profile</button>
        </div>
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    import { MaskInput } from 'vue-3-mask';
    import { useUserStore } from '../../stores/user';

    const user = useUserStore()

    const name = ref(user.name)
    const email = ref(user.email)
    const phone = ref(user.phone)
    const birth = ref(user.birth)

    function UpdateProfile() {
        user.name = name.value
        user.email = email.value
        user.phone = phone.value
        user.birth = birth.value
    }
</script>

<style scoped>
    h3 {
        color: black;
        margin-right: 126px;
    }

    input {
        border-bottom: 1px solid #202D48;
    }

    button {
        width: auto;
        background-color: #202D48;
        margin-top: -30px;
    }
</style>