import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';

// Importa apenas a função de serviço necessária
import { incrementView } from './firebase';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const countView = async () => {
      const viewed = sessionStorage.getItem('portfolio-viewed');
      if (!viewed) {
        const success = await incrementView();
        if (success) {
          sessionStorage.setItem('portfolio-viewed', 'true');
        }
      }
    };
    countView();
  }, []);

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text-primary)] min-h-screen">
      <Navbar />
      <main className={!isHomePage ? 'ml-24' : ''}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;