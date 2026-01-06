import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-12 pb-6 md:py-20 flex flex-col items-center text-center relative z-10">
      
      {/* Pill Badge */}
      <div className="mb-8 inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-costco-blue text-white text-sm font-medium shadow-sm gap-2">
        <Star className="w-3.5 h-3.5 fill-current" />
        <span>Member Exclusive Deal</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-[64px] leading-[1.1] font-bold text-slate-900 tracking-tight mb-6">
        Shop Bulk.
        <br />
        Get up to <span className="text-costco-red underline decoration-4 decoration-costco-blue/20 underline-offset-4">$750</span>.
      </h1>

      {/* Subheading */}
      <p className="text-slate-600 text-lg md:text-[20px] leading-relaxed max-w-2xl mb-10 font-normal">
        Complete simple deals to earn your Costco Shop Card. Spend on groceries, electronics, furniture, and Kirkland Signature essentials.
      </p>

      {/* Primary CTA Button */}
      <a 
        href="https://glstrk.com/?offer_ids=OTQxLDEzMTQ%3D&affiliate_id=MTYxNjgy"
        className="group bg-costco-blue text-white px-10 py-4 rounded text-base font-bold flex items-center gap-3 hover:bg-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl mb-4 transform hover:-translate-y-0.5 active:scale-95"
      >
        Start Earning
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>

      {/* Disclaimer */}
      <p className="text-slate-400 text-xs font-medium mb-12">
        Limited Time Offer • Verification Required
      </p>

      {/* Feature Bullets */}
      <div className="w-full flex flex-row flex-wrap justify-center gap-x-6 gap-y-3 md:gap-12">
        <FeatureItem color="bg-costco-red" text="Kirkland Quality" />
        <FeatureItem color="bg-costco-blue" text="Member Verified" />
        <FeatureItem color="bg-costco-red" text="Instant Shop Card" />
      </div>
    </div>
  );
};

interface FeatureItemProps {
  color: string;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ color, text }) => (
  <div className="flex items-center gap-2 md:gap-3 justify-center">
    <div className={`w-2 h-2 rounded-sm ${color}`} />
    <span className="text-slate-900 text-xs md:text-sm font-bold tracking-wide uppercase">{text}</span>
  </div>
);