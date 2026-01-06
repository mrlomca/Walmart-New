import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ShoppingCart } from 'lucide-react';

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
  "Mike", "Sarah", "Karen", "Steve", "Jessica", "David", "Linda", "Robert", 
  "Jennifer", "John", "Lisa", "Michael", "Barbara", "William", "Elizabeth", "James",
  "Susan", "Richard", "Margaret", "Joseph", "Patricia", "Thomas", "Mary", "Charles",
  "Nancy", "Daniel", "Betty", "Matthew", "Sandra", "Anthony", "Ashley", "Mark"
];

const LAST_INITIALS = ["S.", "M.", "K.", "B.", "T.", "H.", "P.", "R.", "L.", "D.", "W.", "C."];

const DEAL_ACTIONS = [
  "Just redeemed for a new Samsung TV!",
  "Waiting for my $750 Shop Card...",
  "Survey was easy, used it for groceries.",
  "Finally got the Executive level reward!",
  "Code arrived in email. Buying bulk TP lol.",
  "Stocking up on Kirkland protein bars.",
  "Payout confirmed. Love Costco!",
  "Took me about 20 mins to hit $250.",
  "Verification was super fast.",
  "Wow, actually worked. Gas money sorted.",
  "Doing the streaming deal for the bonus.",
  "Just upgraded to the $750 tier.",
  "Need new tires, this pays for them.",
  "Legit just paid for my entire cart.",
  "Used it at the food court. $1.50 hot dog FTW.",
  "Getting that giant teddy bear finally."
];

const AMOUNTS = ["$100", "$250", "$750"];

const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const generateRandomComment = (): Comment => {
  const isPayout = Math.random() > 0.7;
  let text = getRandomElement(DEAL_ACTIONS);
  const amount = getRandomElement(AMOUNTS);
  
  if (isPayout) {
    text = `Just got my ${amount} Shop Card! 🛒`;
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
    { id: 1, name: "System", text: "Wholesale Network connected...", time: "Now", verified: true },
    { id: 2, name: "Alex P.", text: "Just completed the last deal, waiting on $750.", time: "1m ago", verified: true },
    { id: 3, name: "Jordan M.", text: "My $250 code worked at checkout!", time: "2m ago", verified: true, amount: "$250" }
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
      <div className="bg-white rounded border border-slate-200 overflow-hidden shadow-xl">
        {/* Header */}
        <div className="bg-costco-blue text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-costco-red rounded-full animate-pulse"></div>
            <span className="text-sm font-bold tracking-wide uppercase">Live Member Activity</span>
          </div>
          <span className="text-xs text-blue-100 font-medium flex items-center gap-1">
            <ShoppingCart className="w-3 h-3" />
            {850 + Math.floor(Math.random() * 100)} shopping
          </span>
        </div>

        {/* Comments Area */}
        <div 
          ref={scrollRef}
          className="h-[300px] overflow-y-auto p-4 space-y-4 bg-slate-50 scroll-smooth"
        >
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3 animate-in slide-in-from-bottom-2 fade-in duration-500">
              <div className={`flex-shrink-0 w-8 h-8 rounded flex items-center justify-center border text-xs font-bold shadow-sm
                ${comment.amount 
                  ? 'bg-costco-red text-white border-costco-red' 
                  : 'bg-white text-costco-blue border-costco-blue'
                }`}>
                {comment.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-bold text-slate-900 truncate uppercase tracking-tight">
                    {comment.name}
                  </span>
                  {comment.verified && (
                    <CheckCircle2 className="w-3 h-3 text-costco-blue" />
                  )}
                  <span className="text-[10px] text-slate-400 ml-auto flex-shrink-0">
                    {comment.time}
                  </span>
                </div>
                <div className={`p-2.5 text-sm leading-relaxed border rounded-tr-lg rounded-br-lg rounded-bl-lg
                  ${comment.amount 
                    ? 'bg-blue-50 border-blue-100 text-slate-800' 
                    : 'bg-white border-slate-200 text-slate-600'
                  }`}>
                  {comment.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area (Fake) */}
        <div className="p-3 bg-white border-t border-slate-100">
          <div className="w-full bg-slate-100 border border-transparent rounded px-4 py-2.5 text-sm text-slate-400 flex items-center justify-between cursor-not-allowed select-none">
            <span>Verify membership to chat...</span>
            <span className="text-xs bg-slate-400 text-white px-2 py-0.5 rounded">Locked</span>
          </div>
        </div>
      </div>
    </div>
  );
};