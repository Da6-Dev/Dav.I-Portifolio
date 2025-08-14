// src/App.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    // Aplica a cor de fundo e a cor do texto primário da raiz aqui
    <div className="bg-[var(--color-bg)] text-[var(--color-text-primary)] min-h-screen">
      <Navbar />
      {/* Adiciona a margem esquerda em todas as páginas, exceto a home */}
      <main className={!isHomePage ? 'ml-24' : ''}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;