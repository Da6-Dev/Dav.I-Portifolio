// src/App.jsx
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import { incrementView } from './firebase';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const countUniqueView = async () => {
      const viewed = localStorage.getItem('portfolio-viewed');
      if (!viewed) {
        const success = await incrementView();
        if (success) {
          localStorage.setItem('portfolio-viewed', 'true');
        }
      }
    };
    countUniqueView();
  }, []);

  // **CLASSES DE LAYOUT ATUALIZADAS**
  // Em telas pequenas (mobile), adiciona um padding-bottom (pb-24)
  // Em telas médias e maiores (desktop), adiciona a margem à esquerda (md:ml-24)
  const mainClasses = `
    transition-all duration-300
    pb-24 
    ${!isHomePage ? 'md:ml-24' : ''}
  `;

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text-primary)] min-h-screen">
      <Navbar />
      <main className={mainClasses}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;