<template>
    <div>
        <a-breadcrumb>
            <a-breadcrumb-item>
                <router-link to="/">Início</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>Usuários</a-breadcrumb-item>
        </a-breadcrumb>
        <a-divider/>
        <div>
            <a-row :gutter="8">
                <a-col :span="22">
                    <a-col :span="6">
                        <a-input placeholder="Buscar por nome">
                            <template #suffix>
                                <a style="color: grey;"><search-outlined/></a>
                            </template>
                        </a-input>
                    </a-col>
                </a-col>
                <a-col :span="2">
                    <router-link to="/users/add">
                        <a-button type="primary" danger>Adicionar</a-button>
                    </router-link>
                </a-col>
            </a-row>
        </div>
        <a-divider/>
        <a-table :dataSource="dataSource" :columns="columns">
            <template #bodyCell="{ column }">
                <template v-if="column.key === 'actions'">
                    <a-row justify="center" :gutter="8" >
                        <a-col>
                            <a-button class="actionButtons">
                                <FormOutlined/>
                            </a-button>
                        </a-col>
                        <a-col>
                            <a-popconfirm
                                title="Deseja remover esse usuário?"
                                ok-text="Remover"
                                cancel-text="Cancelar"
                                @confirm="confirm"
                                @cancel="cancel"
                            >
                                <template #icon>
                                    <WarningOutlined style="color: red" />
                                </template>
                                <a-button class="actionButtons">
                                    <DeleteOutlined/>
                                </a-button>
                            </a-popconfirm>
                        </a-col>
                    </a-row>
                </template>
            </template>
        </a-table>
    </div>
</template>

<script>
import { SearchOutlined, FormOutlined, DeleteOutlined, WarningOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        SearchOutlined,
        FormOutlined,
        DeleteOutlined,
        WarningOutlined,
    },
    setup() {
        return {
            dataSource: [
                {
                    id: '1',
                    name: 'Relator A',
                },
                {
                    id: '2',
                    name: 'Relator B',
                },
                {
                    id: '3',
                    name: 'Relator C',
                },
                {
                    id: '4',
                    name: 'Relator D',
                },
                {
                    id: '5',
                    name: 'Relator E',
                },
            ],

            columns: [
                {
                    title: 'ID',
                    align: 'center',
                    dataIndex: 'id',
                    key: 'id',
                    width: '5%',
                },
                {
                    title: 'Nome',
                    dataIndex: 'name',
                    key: 'name',
                    width: '80%',
                },
                {
                    title: 'Ações',
                    key: 'actions',
                    align: 'center',
                    bodyCell: 'actions',
                    width: '15%',
                },
            ],
        };
    },
};
</script>
<style scoped>
</style>
