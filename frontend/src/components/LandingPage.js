// frontend/src/components/LandingPage.js
import React from 'react';

const LandingPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center">
    <h1 className="text-5xl font-bold mb-4">Bem-vindo ao Cursos Flix!</h1>
    <p className="text-xl mb-8">Sua plataforma de aprimoramento online.</p>
    <a href="/signup" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full">
      Experimente grátis por 7 dias
    </a>
  </div>
);

export default LandingPage;
