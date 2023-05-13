<template>
    <div>
        <a-layout>
            <a-layout-sider :style="{ overflow: 'hidden', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }">
                <!-- Logo -->
                <div style="background-color: rgb(66, 0, 0);">
                    <img src="../../public/logo-digisensor.png" alt="" style="height: 72px;">
                </div>
                <!-- Menu -->
                <a-menu theme="dark" mode="inline" :style="{ height: '100%', borderRight: 0 }">
                    <!-- Início -->
                    <a-menu-item key="sub1">
                        <HomeFilled style="margin-right: 8px;"/>
                        <router-link to="/">Início</router-link>
                    </a-menu-item>
                    <!-- Usuários -->
                    <a-menu-item key="sub4">
                        <user-outlined style="margin-right: 8px;"/>
                        <router-link to="/users">Usuários</router-link>
                    </a-menu-item>
                    <!-- Relatórios -->
                    <a-menu-item key="sub2">
                        <file-text-outlined style="margin-right: 8px;"/>
                        <router-link to="/records">Listar relatórios</router-link>
                    </a-menu-item>
                    <!-- Novo relatório -->
                    <a-menu-item key="sub3">
                        <plus-circle-outlined style="margin-right: 8px;"/>
                        <router-link to="/records/add">Novo relatório</router-link>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout style="margin-left: 200px;  min-height: 100vh;">
                <a-layout-content style="padding: 50px 50px">
                    <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
                        <router-view/>
                    </div>
                </a-layout-content>
                <a-layout-footer style="text-align: center">
                    Digisensor ©2023
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
import { HomeFilled, FileTextOutlined, PlusCircleOutlined, UserOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        HomeFilled,
        FileTextOutlined,
        PlusCircleOutlined,
        UserOutlined,
    },
    name: 'Dashboard',
};
</script>

<style>

.ant-menu-dark {
    background-color: rgb(66, 0, 0);
}

.ant-menu-dark .ant-menu-item-selected {
    background-color: brown;
}

.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item:not(.ant-menu-item-selected):active{
    background-color: brown;
}

</style>