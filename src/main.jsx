// src/main.jsx
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import './i18n';
import './index.css';

// Páginas
import App from './App.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Projects from './pages/projects.jsx';
import Skills from './pages/skills.jsx';
import Contact from './pages/contact.jsx';
// 1. Importe a nova página que vamos criar
import ProjectDetail from './pages/ProjectDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      // 2. Adicione a nova rota dinâmica aqui
      { path: "projects/:projectName", element: <ProjectDetail /> },
      { path: "skills", element: <Skills /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback="Carregando...">
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);