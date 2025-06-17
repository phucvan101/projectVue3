<template>
    Day la layout quan ly settings
</template>

<script setup>
import { useMenu } from "../../../stores/use-menu.js";

const store = useMenu();
store.onSelectedKeys(["admin-settings"]);
</script>