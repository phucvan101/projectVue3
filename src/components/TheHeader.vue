<template>
    <div class="container-fluid">
        <div class="row text-white" style="background-color: #0c713d; padding: 1rem;     margin-right: calc(-1 * var(--bs-gutter-x));
    margin-left: calc(-1 * var(--bs-gutter-x)); margin-top: 0;">
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawer">X</span>
            </div>
            <div class="col-9 d-flex align-items-center justify-content-center justify-content-sm-start">
                <img src="../assets/logo.svg" alt="Logo" height="32" width="34" class="ms-3 me-3">
                <span class="d-none d-sm-flex">Quản Trị</span>
            </div>

            <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-center">
                <span>Admin</span>
            </div>

            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawerUser">X</span>
            </div>
        </div>
    </div>
    <a-drawer v-model:open="open" title="Danh Muc" placement="left">
        <TheMenu />
    </a-drawer>

    <a-drawer v-model:open="open_user" title="Admin" placement="right">
        <p>some contents</p>
    </a-drawer>
</template>


<script setup>
import TheMenu from '../components/TheMenu.vue';
import { ref } from 'vue';
const open = ref(false);
const open_user = ref(false);

const showDrawer = () => {
    open.value = true;
};

const showDrawerUser = () => {
    open_user.value = true;
};
</script>