O fluxo começa com o administrador cadastrando o usuário e suas permissões no banco de dados.
O usuário primeiro passa pelo processo de autenticação para verificar suas credenciais e realizar o login no painel.
Se autenticado com sucesso, ele é direcionado para o painel onde pode criar um novo relatório ou acessar os relatórios já criados(de acordo com suas permissões de usuário).
Na tela de criação de relatório ele poderá colocar os dados nos campos já pré-definidos, e fazer o upload de imagens e atribuir nomes à elas, ex: ("Foto do extintor 1").
Quando o formulário é criado, ele é salvo no banco de dados para acesso posterior.

Requisitos:
- Banco de dados MySQL
- Bucket de arquivos cdn para armazenar as imagens enviadas nos relatórios
- Hospedagem para a API e painel(dashboard)

- Aplicação WEB PWA, sem intenção de migrar para mobile futuramente
- Utilizar framework em vue, bootstrap ou ant-design
- Cores base para site: Tons de vermelho, preto e branco
