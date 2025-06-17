<template>
    <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline"
        :items="items"></a-menu>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useMenu } from '../stores/use-menu.js' // su dung store de dong bo menu va router
import { UserOutlined, TeamOutlined, ToolOutlined } from '@ant-design/icons-vue';

import { reactive, h, toRefs } from 'vue';


const state = useMenu();

const items = [
    {
        key: 'admin-users',
        icon: () => h(UserOutlined),
        label: h(RouterLink, { to: { name: 'admin-users' } }, { default: () => 'Users' }), // tro toi route va dat ten cho label
    },
    {
        key: 'admin-roles',
        icon: () => h(TeamOutlined),
        label: h(RouterLink, { to: { name: 'admin-roles' } }, { default: () => 'Roles' }),
    },
    {
        key: 'admin-settings',
        icon: () => h(ToolOutlined),
        label: h(RouterLink, { to: { name: 'admin-settings' } }, { default: () => 'Settings' }),
    },
];



</script>
