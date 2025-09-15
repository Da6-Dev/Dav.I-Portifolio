import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';

// Importa a função de serviço necessária do seu arquivo firebase.js
import { incrementView } from './firebase';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const countUniqueView = async () => {
      // **A MUDANÇA ESTÁ AQUI**
      // Verificamos no localStorage se este navegador já visitou o site antes.
      const viewed = localStorage.getItem('portfolio-viewed');

      // Se NUNCA visitou antes...
      if (!viewed) {
        // ...chame a função para incrementar a visualização no Firebase.
        const success = await incrementView();
        
        // Se a operação com o Firebase for bem-sucedida...
        if (success) {
          // ...marque no localStorage que este navegador já foi contado.
          localStorage.setItem('portfolio-viewed', 'true');
        }
      }
    };

    countUniqueView();
  }, []); // O array vazio [] garante que isso rode apenas uma vez na primeira vez que o App carrega

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