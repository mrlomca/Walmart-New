import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LiveFeedback } from './components/LiveFeedback';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-start w-full">
        <Hero />
        <LiveFeedback />
      </main>
    </div>
  );
};

export default App;