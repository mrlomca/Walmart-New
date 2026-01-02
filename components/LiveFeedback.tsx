import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Comment {
  id: number;
  name: string;
  text: string;
  time: string;
  verified?: boolean;
  amount?: string;
}

// Data pools for random generation
const NAMES = [
  "Sarah", "Chloe", "Jessica", "Emma", "Ashley", "Olivia", "Amanda", "Sophia", 
  "Jennifer", "Ava", "Isabella", "Mia", "Patricia", "Emily", "Madison", "Abigail",
  "Elizabeth", "Grace", "Lily", "Hannah", "Susan", "Zoey", "Nora", "Lillian",
  "Karen", "Addison", "Lisa", "Natalie", "Nancy", "Leah", "Betty", "Audrey"
];

const LAST_INITIALS = ["J.", "R.", "T.", "B.", "W.", "M.", "P.", "S.", "H.", "K.", "L.", "C."];

const DEAL_ACTIONS = [
  "Just redeemed for the Dyson Airwrap!",
  "Waiting for my $750 to hit...",
  "Did the streaming trial, super easy.",
  "Finally reached the Rouge level reward!",
  "My $500 code just arrived in email.",
  "Stocking up on Fenty with this.",
  "Payout confirmed. Love Sephora!",
  "Took me about 25 mins to hit $250.",
  "Verification was instant this time.",
  "Wow, actually worked. Rare Beauty here I come.",
  "Doing the finance deal for the bonus.",
  "Just upgraded to the $750 tier.",
  "Need new skincare, this is perfect.",
  "Legit just paid for my entire cart."
];

const AMOUNTS = ["$100", "$250", "$500", "$750"];

const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const generateRandomComment = (): Comment => {
  const isPayout = Math.random() > 0.7;
  let text = getRandomElement(DEAL_ACTIONS);
  const amount = getRandomElement(AMOUNTS);
  
  if (isPayout) {
    text = `Just got my ${amount} card! 💄`;
  }

  return {
    id: Date.now() + Math.random(),
    name: `${getRandomElement(NAMES)} ${getRandomElement(LAST_INITIALS)}`,
    text: text,
    time: 'Just now',
    verified: Math.random() > 0.3, // 70% verified
    amount: isPayout ? amount : undefined
  };
};

export const LiveFeedback: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, name: "System", text: "Beauty Insider feed connected...", time: "Now", verified: true },
    { id: 2, name: "Alex M.", text: "Just completed the 3rd deal, going for $750!", time: "1m ago", verified: true },
    { id: 3, name: "Jordan K.", text: "My $500 gift card arrived instantly.", time: "2m ago", verified: true, amount: "$500" }
  ]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Add unique random comments periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const newComment = generateRandomComment();

      setComments(prev => {
        const updated = [...prev, newComment];
        if (updated.length > 8) updated.shift(); // Keep list short and clean
        return updated;
      });

    }, 2500 + Math.random() * 3000); // Random interval between 2.5s and 5.5s

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom whenever comments update
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [comments]);

  return (
    <div className="w-full max-w-md mx-auto px-4 pb-12 mt-8">
      <div className="bg-white rounded-none border border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        <div className="bg-black text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#CE0E2D] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold tracking-wide uppercase">Live Activity</span>
          </div>
          <span className="text-xs text-slate-300 font-medium">
            {1200 + Math.floor(Math.random() * 100)} beauty insiders online
          </span>
        </div>

        {/* Comments Area */}
        <div 
          ref={scrollRef}
          className="h-[300px] overflow-y-auto p-4 space-y-4 bg-white scroll-smooth"
        >
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3 animate-in slide-in-from-bottom-2 fade-in duration-500">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border text-xs font-bold
                ${comment.amount 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-black border-black'
                }`}>
                {comment.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-bold text-black truncate uppercase tracking-wide">
                    {comment.name}
                  </span>
                  {comment.verified && (
                    <CheckCircle2 className="w-3 h-3 text-[#CE0E2D]" />
                  )}
                  <span className="text-[10px] text-slate-400 ml-auto flex-shrink-0">
                    {comment.time}
                  </span>
                </div>
                <div className={`p-2.5 text-sm leading-relaxed border
                  ${comment.amount 
                    ? 'bg-[#f8f8f8] border-black text-black' 
                    : 'bg-white border-slate-200 text-slate-700'
                  }`}>
                  {comment.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area (Fake) */}
        <div className="p-3 bg-white border-t border-slate-100">
          <div className="w-full bg-[#F2F2F2] border border-transparent rounded-sm px-4 py-2.5 text-sm text-slate-400 flex items-center justify-between cursor-not-allowed select-none">
            <span>Join the conversation...</span>
            <span className="text-xs bg-black text-white px-2 py-0.5 rounded-sm">Locked</span>
          </div>
        </div>
      </div>
    </div>
  );
};