<div align="center">
  <img src="https://github.com/Da6-Dev/Dav.I-Portifolio/blob/master/public/apple-touch-icon.png?raw=true" alt="Logo" width="100">
  <h1><b>Personal Portfolio v2</b></h1>
  <p>A modern, dynamic, and multilingual web application to showcase my projects and skills.</p>
  
  <a href="https://davipsss.netlify.app">
    <img src="https://img.shields.io/badge/View%20Live-%233b82f6?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo">
  </a>
</div>

<br>

<div align="center">
  <em>A preview of the portfolio in action.</em>
  <br><br>
  <img src="https://github.com/Da6-Dev/Dav.I-Portifolio/blob/master/cover.png?raw=true" alt="Portfolio Preview">
</div>

---

## 🚀 About The Project

This project is the second version of my personal portfolio, rebuilt from scratch to be a robust and scalable platform that reflects my skills in modern web development. The main goal is to have a central hub that updates automatically as I develop new projects, without needing to change the portfolio's code.

<br>

## ✨ Key Features

This portfolio was built with a set of features designed for user experience and to demonstrate technical skills:

* **🎨 Responsive Design:** A fully adaptive interface, with a sidebar navigation on desktop and a bottom navigation bar on mobile for an optimized experience.
* **🌗 Light & Dark Theme:** A theme switcher that persists the user's choice in the browser's `localStorage`.
* **🌍 Multilingual Support (i18n):** The site's content is available in Portuguese and English, with automatic browser language detection and a manual switcher.
* **🔗 Dynamic Projects from GitHub:** The projects section consumes the GitHub API in real-time. To add a new project, you just need to:
    1.  Add the `portfolio` topic to the repository.
    2.  Include a `cover.png` image.
    3.  (Optional) Add a `description.json` file for multilingual descriptions.
* **📄 Project Detail Pages:** Each project has a dedicated detail page that fetches and renders its `README.md`, allowing for an in-depth presentation.
* **📊 Real-time Counters with Firebase:**
    * **Unique View Counter:** Registers each new visitor (once per browser).
    * **Like Counter:** An interactive button on the homepage for visitors to show their appreciation.
    * Data is stored and updated in real-time with Firestore.
* **🏷️ Dynamic Page Titles:** The browser tab title is dynamically updated for each page, improving UX and SEO.

<br>

## 🛠️ Tech Stack

This project was built with the following technologies and tools:

<div align="center" class="flex-row">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase">
  <img src="https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white" alt="i18next">
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify">
</div>

<br>

## ⚙️ Running the Project Locally

To run this project on your own computer, follow the steps below.

### Prerequisites
* [Node.js](https://nodejs.org/) (version 18 or higher)
* [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Da6-Dev/dav-i.git](https://github.com/Da6-Dev/dav-i.git)
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd dav-i
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Set Up Environment Variables:**
    * Create a file named `.env` in the project root.
    * Inside this file, paste your Firebase credentials (you can find them in your Firebase project settings):
        ```
        VITE_FIREBASE_API_KEY="YOUR_API_KEY"
        VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
        VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
        VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
        VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
        VITE_FIREBASE_APP_ID="YOUR_APP_ID"
        ```
    * *Note: The `firebase.js` file needs to be adjusted to read these environment variables.*

5.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser to see the application running!

<br>

---

<p align="center">
  Developed with ❤️ by Davi Passos.
</p>