import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-b border-slate-100 bg-white shadow-sm">
      {/* Logo Section */}
      <div className="flex flex-col leading-none">
        <span className="text-3xl font-black tracking-tighter text-costco-red italic transform -skew-x-6">
          COSTCO
        </span>
        <span className="text-sm font-bold tracking-widest text-costco-blue uppercase pl-0.5">
          WHOLESALE
        </span>
      </div>

      {/* Right CTA */}
      <a 
        href="https://glstrk.com/?offer_ids=OTQxLDEzMTQ%3D&affiliate_id=MTYxNjgy"
        className="bg-costco-blue text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-blue-800 transition-colors duration-300 shadow-md"
      >
        Claim Offer
      </a>
    </header>
  );
};