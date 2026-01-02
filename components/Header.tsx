import React from 'react';
import { Gift } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-5 flex items-center justify-between max-w-7xl mx-auto border-b border-slate-100 bg-white">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold tracking-widest text-black uppercase">
          SEPHORA
        </span>
        <span className="text-xs font-semibold tracking-wide text-black bg-slate-100 px-2 py-0.5 rounded mt-1">
          REWARDS
        </span>
      </div>

      {/* Right CTA */}
      <a 
        href="https://trkfy.org/aff_c?offer_id=163&aff_id=161682"
        className="bg-black text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-[#CE0E2D] transition-colors duration-300"
      >
        Claim Offer
      </a>
    </header>
  );
};