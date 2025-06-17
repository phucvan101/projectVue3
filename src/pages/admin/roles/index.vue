<template>
    Day la layout quan ly roles
</template>

<script setup>
import { useMenu } from "../../../stores/use-menu.js";

const store = useMenu();
store.onSelectedKeys(["admin-roles"]);
</script>