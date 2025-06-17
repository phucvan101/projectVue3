<template>
    Day la layout quan ly user
</template>

<script setup>
import { useMenu } from "../../../stores/use-menu.js";

const store = useMenu();
store.onSelectedKeys(["admin-users"]); // cập nhật menu, giúp mục "Users" được chọn khi vào trang này.
</script>