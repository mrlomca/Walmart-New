import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-12 pb-6 md:py-20 flex flex-col items-center text-center relative z-10">
      
      {/* Pill Badge */}
      <div className="mb-8 inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-black text-white text-sm font-medium shadow-sm gap-2">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Beauty Insider Exclusive</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-[64px] leading-[1.1] font-normal text-black tracking-tight mb-6">
        Review Products.
        <br />
        Get up to <span className="text-[#CE0E2D] font-medium">$750</span>.
      </h1>

      {/* Subheading */}
      <p className="text-slate-600 text-lg md:text-[20px] leading-relaxed max-w-2xl mb-10 font-light">
        Complete simple deals and surveys to level up your beauty rewards. Get up to $750 to spend on makeup, skincare, and fragrances.
      </p>

      {/* Primary CTA Button */}
      <a 
        href="https://trkfy.org/aff_c?offer_id=163&aff_id=161682"
        className="group bg-black text-white px-10 py-4 rounded text-base font-medium flex items-center gap-3 hover:bg-[#CE0E2D] transition-all duration-300 shadow-xl hover:shadow-2xl mb-4 transform hover:-translate-y-0.5 active:scale-95"
      >
        Start Earning
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>

      {/* Disclaimer */}
      <p className="text-slate-400 text-xs font-medium mb-12">
        Instant Access • Limited Quantity Available
      </p>

      {/* Feature Bullets */}
      <div className="w-full flex flex-row flex-wrap justify-center gap-x-6 gap-y-3 md:gap-12">
        <FeatureItem color="bg-black" text="Authentic Brands" />
        <FeatureItem color="bg-black" text="Instant Verification" />
        <FeatureItem color="bg-black" text="Guaranteed Payout" />
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
    <span className="text-slate-900 text-xs md:text-sm font-medium tracking-wide uppercase">{text}</span>
  </div>
);