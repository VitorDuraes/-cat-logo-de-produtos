🚀 Desenvolvi uma API RESTful com Node.js usando o framework Express para gerenciar um catálogo de produtos. Essa API fornece endpoints para executar operações CRUD (Create, Read, Update, Delete) em produtos.

💼 A API permite que os usuários interajam com os dados do produto por várias rotas:

POST /products: Adicionar um novo produto ao catálogo. O corpo da solicitação deve incluir o nome e o preço do produto, e um id exclusivo será gerado automaticamente.

GET /products: Recupera uma lista de todos os produtos disponíveis no catálogo.

GET /products/:id: Recupere um produto específico fornecendo seu id como parâmetro na URL.

PUT /products/:id: Atualize as informações de um produto existente. O corpo da solicitação deve incluir o nome e o preço para modificar o produto com o id especificado.

DELETE /products/:id: Remova um produto do catálogo fornecendo seu id como parâmetro na URL.

💡 Para armazenar os dados do produto persistentemente, a API lê e grava as informações do produto em um arquivo JSON chamado products.json usando o módulo Node.js fs.

🛠️ A API implementa tratamento de erros para operações de arquivo e fornece respostas apropriadas para cada operação CRUD.

📚 Tecnologias e Bibliotecas utilizadas:

Node.js: um ambiente de tempo de execução JavaScript do lado do servidor.
Express.js: Uma estrutura da Web minimalista para Node.js para lidar com solicitações HTTP.
crypto: Um módulo integrado do Node.js usado para gerar UUIDs aleatórios.
fs: um módulo integrado do Node.js usado para ler e gravar arquivos.
⚙️ A API está hospedada na porta 4001 e está pronta para ser implantada em um ambiente de produção.
