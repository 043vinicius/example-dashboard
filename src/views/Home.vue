<template>
    <div>
        <a-breadcrumb>
            <a-breadcrumb-item>Início</a-breadcrumb-item>
        </a-breadcrumb>
        <a-divider/>
        <div style="display: none;">
            <a-row :gutter="16">
                <a-col :span="4">
                    <a-card>
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
                    </a-card>
                </a-col>
                <a-col :span="4">
                    <a-card>
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
                    </a-card>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        ArrowDownOutlined,
        ArrowUpOutlined,
    },
    name: 'home',
};
</script>
