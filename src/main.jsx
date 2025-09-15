import React, { Suspense } from 'react'; // Importe o Suspense
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

// Importe suas páginas
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Projects from './pages/projects.jsx';
import Skills from './pages/skills.jsx';
import Contact from './pages/contact.jsx';
import { ThemeProvider } from './context/ThemeProvider';

import './i18n'; // Importe a configuração do i18next

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "skills", element: <Skills /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* O Suspense é usado para mostrar um fallback enquanto as traduções carregam */}
      <Suspense fallback="Carregando...">
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);