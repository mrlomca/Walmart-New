import React from 'react';
import { Star } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-5 flex items-center justify-between max-w-7xl mx-auto">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#0071dc] rounded-xl flex items-center justify-center shadow-sm">
          <Star className="w-6 h-6 text-[#ffc220] fill-[#ffc220]" />
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900">
          Walmart Rewards
        </span>
      </div>

      {/* Right CTA */}
      <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:opacity-90 transition-all duration-200">
        Limited Time
      </button>
    </header>
  );
};