<div align="center">
  <img src="https://github.com/Da6-Dev/Dav.I-Portifolio/blob/master/public/apple-touch-icon.png?raw=true" alt="Logo" width="100">
  <h1><b>Portfólio Pessoal v2</b></h1>
  <p>Uma aplicação web moderna, dinâmica e multilíngue para exibir os meus projetos e competências.</p>
  
  <a href="https://davipsss.netlify.app">
    <img src="https://img.shields.io/badge/Ver%20Ao%20Vivo-%233b82f6?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo">
  </a>
</div>

<br>

<div align="center">
  <em>Uma pré-visualização do portfólio em ação.</em>
  <br><br>
  <img src="https://github.com/Da6-Dev/Dav.I-Portifolio/blob/master/cover.png?raw=true" alt="Pré visualização do Portfólio">
</div>

---

## 🚀 Sobre o Projeto

Este projeto é a segunda versão do meu portfólio pessoal, reconstruído do zero para ser uma plataforma robusta e escalável que reflete as minhas competências em desenvolvimento web moderno. O principal objetivo é ter um hub central que se atualiza automaticamente à medida que desenvolvo novos projetos, sem a necessidade de alterar o código do portfólio.

<br>

## ✨ Funcionalidades Principais

Este portfólio foi construído com um conjunto de funcionalidades pensadas para a experiência do utilizador e para demonstrar competências técnicas:

* **🎨 Design Responsivo:** Interface totalmente adaptável, com uma barra de navegação lateral no desktop e uma barra de navegação inferior no mobile para uma experiência otimizada.
* **🌗 Tema Claro e Escuro:** Seletor de tema que persiste a escolha do utilizador no `localStorage` do navegador.
* **🌍 Suporte Multilíngue (i18n):** O conteúdo do site está disponível em Português e Inglês, com deteção automática do idioma do navegador e um seletor manual.
* **🔗 Projetos Dinâmicos do GitHub:** A secção de projetos consome a API do GitHub em tempo real. Para adicionar um novo projeto, basta:
    1.  Adicionar o tópico `portfolio` ao repositório.
    2.  Incluir uma imagem de capa `cover.png`.
    3.  (Opcional) Adicionar um ficheiro `description.json` para descrições multilíngues.
* **📄 Páginas de Detalhe de Projetos:** Cada projeto tem uma página de detalhe dedicada que carrega e renderiza o seu `README.md`, permitindo uma apresentação aprofundada.
* **📊 Contadores em Tempo Real com Firebase:**
    * **Contador de Visualizações Únicas:** Regista cada novo visitante (uma vez por navegador).
    * **Contador de Likes:** Um botão interativo na página inicial para os visitantes deixarem o seu apreço.
    * Os dados são armazenados e atualizados em tempo real com o Firestore.
* **🏷️ Títulos de Página Dinâmicos:** O título da aba do navegador é atualizado dinamicamente para cada página, melhorando a UX e o SEO.

<br>

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e ferramentas:

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase">
  <img src="https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white" alt="i18next">
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify">
</div>

<br>

## ⚙️ Como Executar o Projeto Localmente

Para rodar este projeto no seu próprio computador, siga os passos abaixo.

### Pré-requisitos
* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* [Git](https://git-scm.com/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Da6-Dev/dav-i.git](https://github.com/Da6-Dev/dav-i.git)
    ```

2.  **Navegue até à pasta do projeto:**
    ```bash
    cd dav-i
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as Variáveis de Ambiente:**
    * Crie um ficheiro chamado `.env` na raiz do projeto.
    * Dentro deste ficheiro, cole as suas credenciais do Firebase (pode encontrá-las nas configurações do seu projeto Firebase):
        ```
        VITE_FIREBASE_API_KEY="SUA_API_KEY"
        VITE_FIREBASE_AUTH_DOMAIN="SEU_AUTH_DOMAIN"
        VITE_FIREBASE_PROJECT_ID="SEU_PROJECT_ID"
        VITE_FIREBASE_STORAGE_BUCKET="SEU_STORAGE_BUCKET"
        VITE_FIREBASE_MESSAGING_SENDER_ID="SEU_MESSAGING_SENDER_ID"
        VITE_FIREBASE_APP_ID="SUA_APP_ID"
        ```
    * *Nota: O ficheiro `firebase.js` precisa de ser ajustado para ler estas variáveis de ambiente.*

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Abra [http://localhost:5173](http://localhost:5173) no seu navegador para ver a aplicação a funcionar!

<br>

---

<p align="center">
  Desenvolvido com ❤️ por Davi Passos.
</p>