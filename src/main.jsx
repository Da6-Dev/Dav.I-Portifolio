import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css'; // Sua importação do Tailwind CSS

// Importe suas páginas
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Projects from './pages/projects.jsx';
import Skills from './pages/skills.jsx';
import Contact from './pages/contact.jsx';
import { ThemeProvider } from './context/ThemeProvider';

// Crie o roteador com a definição das rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // O elemento principal (nosso layout com Navbar)
    // errorElement: <ErrorPage />, // Opcional: uma página de erro
    children: [
      // As rotas filhas serão renderizadas dentro do <Outlet /> do App
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);