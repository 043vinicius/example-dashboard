<template>
    <div>
        <a-breadcrumb>
            <a-breadcrumb-item>Início</a-breadcrumb-item>
        </a-breadcrumb>
        <a-divider />
        <div>
            <a-card style="width: 600px">
                <a-row :gutter="16">
                    <a-col :span="8">
                        <a-col :span="24">
                            <a-avatar shape="square" :size="128">
                                <template #icon><UserOutlined /></template>
                            </a-avatar>
                        </a-col>
                    </a-col>
                    <a-col :span="16">
                        <a-row>
                            <a-col :span="24">Vinicius Moreira</a-col>
                            <a-divider/>
                            <a-col :span="12">
                                <a-statistic
                                    title="Relatórios do mês"
                                    :value="426"
                                    :value-style="{ color: '#3f8600' }"
                                    style="margin-right: 50px"
                                >
                                    <template #prefix>
                                        <arrow-up-outlined />
                                    </template>
                                </a-statistic>
                            </a-col>
                            <a-col :span="12">
                                <a-statistic
                                    title="Comparação ao mês anterior"
                                    :value="9.3"
                                    :precision="2"
                                    suffix="%"
                                    class="demo-class"
                                    :value-style="{ color: '#cf1322' }"
                                >
                                    <template #prefix>
                                        <arrow-down-outlined />
                                    </template>
                                </a-statistic>
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>
            </a-card>
        </div>
    </div>
</template>

<script>
import {
    ArrowDownOutlined,
    ArrowUpOutlined,
    UserOutlined,
} from '@ant-design/icons-vue';

export default {
    components: {
        ArrowDownOutlined,
        ArrowUpOutlined,
        UserOutlined,
    },
    name: 'home',
};
</script>
