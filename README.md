# 🏴‍☠️ Straw Hat Project 🏴‍☠️
![project](https://img.shields.io/badge/andamento%20do%20projeto-4/10-yellow)

![Giohy](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2dmeTZlaWxqM3VuOWE3M3V6cDAwbWw2bWo3OXRhd2p5Z2QxbDFwYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nQDKSeRlIyfmw/giphy.gif)

Ahoy, navegantes do mundo de One Piece! 🚢🌊  

Esta é uma API totalmente descontraída e temática para você acessar informações sobre o **Bando do Chapéu de Palha**! Se você é fã do Rei dos Piratas e quer se divertir explorando dados sobre os personagens, você está no lugar certo! 🏴‍☠️✨  

### [🏴‍☠️ Visite a Página da API 🏴‍☠️](https://straw-hat-project-git-main-r-dev-r-projects.vercel.app/)

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
        "id": "STR00",
        "imgUrl": "https://i.giphy.com/media/v1.../giphy.gif",
        "name": "Monkey D. Luffy",
        "nickname": "Luffy",
        "crew": "Chapéus de Palha",
        "position": "Capitão",
        "specialSkill": "Elasticidade extrema",
        "dream": "Se tornar o Rei dos Piratas",
        "reward": "3000000000",
        "food": "Carne",
        "phrase": "Eu vou ser o Rei dos Piratas!",
        "birthday": "05/05",
        "akumanomiUser": true,
        "akumanomi": "Gomu Gomu no Mi / Hito Hito no Mi, Model: Nika"
    },
    {
        "id":"STR99",
        "imgUrl":"https://i.giphy.com/media/v1...",
        "name":"Renan Ramos",
        "nickname": "Kr4t0s",
        "crew":"Chapéus de Palha",
        "position": "Fan",
        "specialSkill": "CodarJS",
        "dream": "Se tornar o pirata mais programador do mundo",
        "reward": "606198800",
        "food": "Outback",
        "phrase": "É melhor morrer do que perder a vida!",
        "birthday": "06/06",
        "akumanomiUser": true,
        "akumanomi": "kode kode no Mi"
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
      "id": "SRV00",
      "imgUrl": "https://i.giphy.com/media/v1.Y2l/3MMX1wnHnz8BE/giphy.gif",
      "name": "Shanks",
      "nickname": "Ruivo",
      "crew": "Piratas do Ruivo",
      "position": "Capitão",
      "specialSkill": "Haki do Rei e Espadachim habilidoso",
      "dream": "Proteger os amigos e manter a paz no mar",
      "reward": "4000000000",
      "food": "Carne",
      "phrase": "Eu não luto por dinheiro, eu luto por aquilo que vale a pena!",
      "birthday": "09/03",
      "akumanomiUser": false,
      "akumanomi": null
   },
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



### Fale com Renan:
[![whats](https://img.shields.io/badge/WhatsApp-5511957916485?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send?phone=5511957916485&text=%20Ol%C3%A1%20Renan.%20Gostaria%20de%20falar%20com%20você.%20Contactando%20pelo%20GitHub!)
[![website](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://www.renandevramos.com.br)
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/renan_r.dev.r)
[![email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dev@renandevramos.com?Subject=Contato_RdevR)
[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/renan-ramos-da-silva-05637118b/)