// src/App.jsx
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';

// Importe as ferramentas do Firebase e a configuração
import { db, countersDocId } from './firebase';
import { doc, updateDoc, increment } from 'firebase/firestore';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Lógica do contador de visualizações
  useEffect(() => {
    const countView = async () => {
      // Verificamos no sessionStorage se a página já foi vista nesta "sessão"
      const viewed = sessionStorage.getItem('portfolio-viewed');

      if (!viewed) {
        try {
          const counterRef = doc(db, 'counters', countersDocId);
          // Incrementa o campo 'views' em 1 no Firestore
          await updateDoc(counterRef, {
            views: increment(1)
          });
          // Marca no sessionStorage que a visualização já foi contada nesta sessão
          sessionStorage.setItem('portfolio-viewed', 'true');
        } catch (error) {
          console.error("Erro ao incrementar visualização:", error);
        }
      }
    };

    countView();
  }, []); // O array vazio [] garante que isso rode apenas uma vez quando o App carrega

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