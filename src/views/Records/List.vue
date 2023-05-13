<template>
    <div>
        <a-breadcrumb>
            <a-breadcrumb-item>
                <router-link to="/">Início</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                Relatórios
            </a-breadcrumb-item>
        </a-breadcrumb>
        <a-divider/>
        <div>
            <a-row :gutter="8">
                <a-col :span="6">
                    <a-input placeholder="Buscar por nome">
                        <template #suffix>
                            <a style="color: grey;"><search-outlined/></a>
                        </template>
                    </a-input>
                </a-col>
                <a-col :span="4">
                    <a-range-picker :placeholder="['Início', 'Fim']" format="DD/MM/YYYY" :locale="locale">
                        <template #separator>
                            <span style="color: darkgray;">|</span>
                        </template>
                    </a-range-picker>
                </a-col>
                <a-col :span="3">
                    <a-dropdown>
                        <a-button style="width: 100%" @click.prevent>
                            Relator
                            <DownOutlined />
                        </a-button>
                        <template #overlay>
                        <a-menu>
                            <a-menu-item>
                            <a href="javascript:;">Relator A</a>
                            </a-menu-item>
                            <a-menu-item>
                            <a href="javascript:;">Relator B</a>
                            </a-menu-item>
                            <a-menu-item>
                            <a href="javascript:;">Relator C</a>
                            </a-menu-item>
                            <a-menu-item>
                            <a href="javascript:;">Relator D</a>
                            </a-menu-item>
                            <a-menu-item>
                            <a href="javascript:;">Relator E</a>
                            </a-menu-item>
                        </a-menu>
                        </template>
                    </a-dropdown>
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
                                <EyeOutlined/>
                            </a-button>
                        </a-col>
                        <a-col>
                            <a-button class="actionButtons">
                                <FormOutlined/>
                            </a-button>
                        </a-col>
                        <a-col>
                            <a-popconfirm
                                title="Deseja remover esse relatório?"
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
import locale from 'ant-design-vue/es/date-picker/locale/pt_BR';
import { SearchOutlined, DownOutlined, FormOutlined, DeleteOutlined, EyeOutlined, WarningOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        SearchOutlined,
        DownOutlined,
        FormOutlined,
        DeleteOutlined,
        EyeOutlined,
        WarningOutlined,
    },
    setup() {
        return {
            dataSource: [
                {
                    id: '1',
                    name: 'Empresa A',
                    date: '12/06/2003',
                    user: 'Relator A',
                    address: 'Av. Tiradentes, 100',
                },
                {
                    id: '2',
                    name: 'Empresa B',
                    date: '13/06/2003',
                    user: 'Relator B',
                    address: 'Av. Maringá, 910',
                },
                {
                    id: '3',
                    name: 'Empresa C',
                    date: '14/06/2003',
                    user: 'Relator C',
                    address: 'Av. Alagoas, 792',
                },
                {
                    id: '4',
                    name: 'Empresa D',
                    date: '15/06/2003',
                    user: 'Relator D',
                    address: 'R. Dep. Fernando Ferrari, 404',
                },
                {
                    id: '5',
                    name: 'Empresa E',
                    date: '16/06/2003',
                    user: 'Relator E',
                    address: 'Av. Duque de Caixias, 222, Sala 10',
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
                    width: '15%',
                },
                {
                    title: 'Data',
                    dataIndex: 'date',
                    key: 'date',
                    width: '20%',
                },
                {
                    title: 'Endereço',
                    dataIndex: 'address',
                    key: 'address',
                    width: '20%',
                },
                {
                    title: 'Relator',
                    dataIndex: 'user',
                    key: 'user',
                    width: '20%',
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
