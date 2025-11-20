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
  "Sarah", "Mike", "Jessica", "David", "Ashley", "Chris", "Amanda", "Robert", 
  "Jennifer", "James", "Mary", "John", "Patricia", "Michael", "Linda", "William",
  "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas",
  "Karen", "Charles", "Lisa", "Christopher", "Nancy", "Daniel", "Betty", "Matthew"
];

const LAST_INITIALS = ["J.", "R.", "T.", "B.", "W.", "M.", "P.", "S.", "H.", "K.", "L.", "C."];

const DEAL_ACTIONS = [
  "Just finished the gaming deal!",
  "Waiting for my $1000 to hit...",
  "Did the streaming trial, super easy.",
  "Finally reached the Level 5 reward!",
  "My $750 code just arrived in email.",
  "Anyone else doing the app download deals?",
  "Payout confirmed. Thanks Walmart!",
  "Took me about 20 mins to hit $500.",
  "Verification was instant this time.",
  "Wow, actually worked. $100 added.",
  "Doing the finance deal for the bonus.",
  "Just upgraded to the $1000 tier.",
  "Do I need to do all 3 premium deals?",
  "Legit just paid for my groceries with this."
];

const AMOUNTS = ["$100", "$250", "$500", "$750", "$1000"];

const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const generateRandomComment = (): Comment => {
  const isPayout = Math.random() > 0.7;
  let text = getRandomElement(DEAL_ACTIONS);
  const amount = getRandomElement(AMOUNTS);
  
  if (isPayout) {
    text = `Just cashed out my ${amount} reward! 💸`;
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
    { id: 1, name: "System", text: "Live deal activity feed connected...", time: "Now", verified: true },
    { id: 2, name: "Alex M.", text: "Just completed the 3rd deal, going for $1000!", time: "1m ago", verified: true },
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
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-slate-700">Live Deal Activity</span>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            {1200 + Math.floor(Math.random() * 100)} users online
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
                  ? 'bg-emerald-100 border-emerald-200 text-emerald-700' 
                  : 'bg-blue-50 border-blue-100 text-blue-600'
                }`}>
                {comment.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-bold text-slate-900 truncate">
                    {comment.name}
                  </span>
                  {comment.verified && (
                    <CheckCircle2 className="w-3 h-3 text-[#0071dc]" />
                  )}
                  <span className="text-[10px] text-slate-400 ml-auto flex-shrink-0">
                    {comment.time}
                  </span>
                </div>
                <div className={`p-2.5 rounded-r-xl rounded-bl-xl text-sm leading-relaxed shadow-sm border
                  ${comment.amount 
                    ? 'bg-emerald-50 border-emerald-100 text-emerald-900' 
                    : 'bg-slate-50 border-slate-100 text-slate-600'
                  }`}>
                  {comment.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area (Fake) */}
        <div className="p-3 bg-slate-50 border-t border-slate-100">
          <div className="w-full bg-white border border-slate-200 rounded-full px-4 py-2.5 text-sm text-slate-400 flex items-center justify-between cursor-not-allowed select-none">
            <span>Complete deals to join chat...</span>
            <span className="text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-500">Locked</span>
          </div>
        </div>
      </div>
    </div>
  );
};