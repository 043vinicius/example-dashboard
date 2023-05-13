<template>
    <div>
        <a-checkbox @click="newUser = !newUser" :checked="newUser"/>
        <a-breadcrumb>
            <a-breadcrumb-item>
                <router-link to="/">
                    Início
                </router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
                <router-link to="/users">
                    Usuários
                </router-link>
                </a-breadcrumb-item>
            <a-breadcrumb-item>
                Criar usuário
            </a-breadcrumb-item>
        </a-breadcrumb>
        <a-divider/>
        <a-form layout="vertical">
            <a-row>
            <a-col :span="6"></a-col>
            <!--  -->
            <a-col :span="12">
                <a-row :gutter="8">
                    <!-- Nome -->
                    <a-col :span="12">
                        <a-form-item label="Nome">
                            <a-input placeholder="Nome"/>
                        </a-form-item>
                    </a-col>
                    <!-- Email -->
                    <a-col :span="12">
                        <a-form-item label="Email">
                            <a-input placeholder="contato@email.com"/>
                        </a-form-item>
                    </a-col>
                    <!-- Senha -->
                    <a-col :span="12">
                        <a-form-item label="Senha">
                            <a-input placeholder="******"/>
                        </a-form-item>
                    </a-col>
                    <!-- Confirmar senha -->
                    <a-col :span="12">
                        <a-form-item label="Confirmar senha">
                            <a-input placeholder="******"/>
                        </a-form-item>
                    </a-col>
                    <!-- Permissões -->
                    <a-col :span="24">
                        <a-form-item label="Permissões">
                            <a-checkbox @change="setAdmin" :checked="user.admin">Administrador</a-checkbox>
                            <a-checkbox @click="user.createRecords = !user.createRecords" :checked="user.createRecords">Criar relatórios</a-checkbox>
                            <a-checkbox @click="user.listRecords = !user.listRecords"  :checked="user.listRecords">Listar relatórios</a-checkbox>
                            <a-checkbox @click="user.manageUsers = !user.manageUsers"  :checked="user.manageUsers">Gerenciar usuários</a-checkbox>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-col>
            <!--  -->
            <a-col :span="6"></a-col>
            </a-row>
            
        <a-row :gutter="8" justify="center">
            <a-col :span="3">
                <a-button style="width: 100%;" type="primary" danger>{{ newUser ? 'Criar' : 'Salvar' }}</a-button>
            </a-col>
            <a-col v-if="!newUser" :span="3">
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
                    <a-button style="width: 100%;" type="primary" danger>Remover</a-button>
                </a-popconfirm>
            </a-col>
        </a-row>
        </a-form>
    </div>
</template>


<script>
import { WarningOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        WarningOutlined,
    },
    data() {
        return {
            newUser: false,
            user: {
                admin: false,
                createRecords: false,
                listRecords: false,
                manageUsers: false,
            },
        };
    },
    methods: {
        setAdmin() {
            this.user.admin = !this.user.admin;
            if (this.user.admin) {
                this.user.createRecords = true;
                this.user.listRecords = true;
                this.user.manageUsers = true;
            }
        },
    },
};
</script>
