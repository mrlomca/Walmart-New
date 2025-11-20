import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-12 pb-6 md:py-20 flex flex-col items-center text-center relative z-10">
      
      {/* Pill Badge */}
      <div className="mb-8 inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm font-medium shadow-sm">
        New Rewards Program
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-[64px] leading-[1.1] font-normal text-slate-900 tracking-tight mb-6">
        Complete Deals.
        <br />
        Earn up to <span className="text-[#00aeb6] font-medium">$1000</span>.
      </h1>

      {/* Subheading */}
      <p className="text-slate-500 text-lg md:text-[20px] leading-relaxed max-w-2xl mb-10 font-light">
        Complete simple sponsored deals from our partners to level up your rewards. The more you complete, the more you earn—up to $1000 in value.
      </p>

      {/* Primary CTA Button */}
      <button className="group bg-[#1a1f2c] text-white px-8 py-4 rounded-full text-base font-medium flex items-center gap-2 hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl mb-4 transform hover:-translate-y-0.5 active:scale-95">
        Start Earning
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Disclaimer */}
      <p className="text-slate-400 text-xs font-medium mb-12">
        Instant Access • No purchase required
      </p>

      {/* Feature Bullets - Mobile Optimized for One Row */}
      <div className="w-full flex flex-row flex-wrap justify-center gap-x-4 gap-y-2 md:gap-12">
        <FeatureItem color="bg-emerald-500" text="Secure & Private" />
        <FeatureItem color="bg-blue-500" text="Instant Qualification" />
        <FeatureItem color="bg-purple-500" text="Guaranteed Payout" />
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
    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${color}`} />
    <span className="text-slate-600 text-xs md:text-sm font-medium md:font-normal whitespace-nowrap">{text}</span>
  </div>
);