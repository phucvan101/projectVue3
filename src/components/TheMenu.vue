<template>
    <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline"
        :items="items"></a-menu>
</template>

<script setup>
import { RouterLink } from 'vue-router'; // <-- Add this import

import { reactive, h, toRefs } from 'vue';
import {
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
} from '@ant-design/icons-vue';

const state = reactive({
    selectedKeys: ['admin-users'],
    openKeys: [],
});

const items = [
    {
        key: 'admin-users',
        label: h(RouterLink, { to: { name: 'admin-users' } }, { default: () => 'Users' }), // tro toi route va dat ten cho label
    },
    {
        key: 'admin-roles',
        label: h(RouterLink, { to: { name: 'admin-roles' } }, { default: () => 'Roles' }),
    },
    {
        key: 'admin-settings',
        label: h(RouterLink, { to: { name: 'admin-settings' } }, { default: () => 'Settings' }),
    },
];

</script>
