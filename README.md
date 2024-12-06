# 🏴‍☠️ One Piece Straw Hat Crew API 🏴‍☠️  

Ahoy, navegantes do mundo de One Piece! 🚢🌊  

Esta é uma API totalmente descontraída e temática para você acessar informações sobre o **Bando do Chapéu de Palha**! Se você é fã do Rei dos Piratas e quer se divertir explorando dados sobre os personagens, você está no lugar certo! 🏴‍☠️✨  

---

## 🚀 **Rotas disponíveis**  

### 🔍 **1. API de dados em JSON**  

- **Obter todos os personagens**  
  `GET /api`  
  Responde com uma lista completa de todos os membros do bando.  

  Exemplo de resposta:  
  ```json
  [
    {
        "id":"STR00",
        "imgUrl":"https://i.giphy.com/media/v1...",
        "name":"Monkey D. Luffy",
        "crew":"Chapéus de Palha",
        "akumanomiUser":true,
        "akumanomi":"gomo-gomo nomi"
    },
    {
        "id":"STR01",
        "imgUrl":"https://i.giphy.com/media/v1...",
        "name":"Roronoa Zoro",
        "crew":"Chapéus de Palha",
        "akumanomiUser":false
    },
    {
        //... Muito mais Chapéus de Palha
    }
  ]
- **Buscar personagem específico**  
  `GET /api/:id`  
  Substitua `:id` pelo ID do personagem para obter informações detalhadas.  

  **Respostas:**  
  - Sucesso: Detalhes do personagem, como:
  ```json
  {
    "id":"STR00",
    "imgUrl":"https://i.giphy.com/media/v1...",
    "name":"Monkey D. Luffy",
    "crew":"Chapéus de Palha",
    "akumanomiUser":true,
    "akumanomi":"gomo-gomo nomi"
   }
  ```
  - Erro: `404 - Personagem não encontrado, informação ":id" incorreta.`  

### 🖥️ **2. Versão visual em HTML (Rodando Somente Local)**  

- **Instruções básicas**  
  `GET /`  
  Exibe uma página inicial com as instruções para usar a API.  

- **Lista de todos os personagens (versão gráfica)**  
  `GET /all`  
  Renderiza uma página HTML com uma tabela/lista contendo todos os membros do bando.  

- **Detalhes de um personagem específico (versão gráfica)**  
  `GET /char/:id`  
  Renderiza uma página HTML com os detalhes de um personagem específico.  

---

## 🎯 **Como rodar o projeto?**  

1. Clone este repositório:  
   ```bash
   git clone https://github.com/RenanKr4t0s/StrawHatProject

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Instalar o EJS com NPM

    ```bash
    npm install ejs --save
    ```
    O comando --save adiciona a dependência no arquivo package.json.

4. Execute o servidor:

    ```bash
    npm start
    ```
5. Acesse a API pelo navegador ou ferramentas como Postman/Insomnia!

---

# 🏴‍☠️ Inspirado por One Piece 🏴‍☠️

- 🌟 “Se o tesouro que você procura é o conhecimento, então o mundo inteiro é seu One Piece.” 👒
- 📜 APIs são como mapas: siga as rotas para encontrar o tesouro! 🍊

### Agora vá em frente e aproveite a aventura! 🌊⛵