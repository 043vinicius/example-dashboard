<template>
    <div>
        <a-layout>
            <a-layout-sider
                :style="{ overflow: 'hidden', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
            >
                <div style="background-color: rgb(66, 0, 0);" class="logo">
                    <img src="../../public/logo-digisensor.png" alt="" style="height: 72px;">
                </div>
                <a-menu
                    theme="dark"
                    mode="inline"
                    :style="{ height: '100%', borderRight: 0 }"
                >
                    <a-menu-item key="sub1">
                        <HomeFilled style="margin-right: 8px;"/>
                        <router-link to="/">Inicio</router-link>
                    </a-menu-item>
                    <a-menu-item key="sub2">
                        <file-text-outlined style="margin-right: 8px;"/>
                        <router-link to="/about">Relatórios</router-link>
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
                    Digissensor ©2023
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
import { HomeFilled, FileTextOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        HomeFilled,
        FileTextOutlined,
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

.ant-menu-item-active {
    background-color: blueviolet;
}

</style>