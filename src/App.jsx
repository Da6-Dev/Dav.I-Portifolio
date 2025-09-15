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

  const mainClasses = `
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