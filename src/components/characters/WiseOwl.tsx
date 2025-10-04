import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface WiseOwlProps {
  mood?: 'wise' | 'encouraging' | 'proud' | 'thinking';
  size?: 'small' | 'medium' | 'large';
  message?: string;
  showMessage?: boolean;
}

const WiseOwl: React.FC<WiseOwlProps> = ({ 
  mood = 'wise', 
  size = 'medium',
  message,
  showMessage = false
}) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [wingFlap, setWingFlap] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4000);

    const flapInterval = setInterval(() => {
      setWingFlap(true);
      setTimeout(() => setWingFlap(false), 800);
    }, 6000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(flapInterval);
    };
  }, []);

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-28 h-28',
    large: 'w-36 h-36'
  };

  const getEyeColor = () => {
    switch (mood) {
      case 'encouraging': return '#10B981';
      case 'proud': return '#F59E0B';
      case 'thinking': return '#9B5DE5';
      default: return '#4F9DDE';
    }
  };

  const getBeakRotation = () => {
    switch (mood) {
      case 'encouraging': return -2;
      case 'proud': return 0;
      case 'thinking': return 1;
      default: return 0;
    }
  };

  return (
    <div className="relative">
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{
          y: [0, -4, 0],
          rotate: mood === 'proud' ? [0, -3, 3, 0] : 0,
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 2, repeat: mood === 'proud' ? Infinity : 0 }
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
          {/* Owl body */}
          <motion.ellipse
            cx="50" cy="65" rx="25" ry="30"
            fill="url(#owlBodyGradient)"
            animate={{
              scale: mood === 'encouraging' ? [1, 1.03, 1] : 1
            }}
            transition={{ duration: 1, repeat: mood === 'encouraging' ? Infinity : 0 }}
          />
          
          {/* Owl head */}
          <motion.circle
            cx="50" cy="35" r="22"
            fill="url(#owlHeadGradient)"
            animate={{
              scale: mood === 'thinking' ? [1, 1.05, 1] : 1
            }}
            transition={{ duration: 2, repeat: mood === 'thinking' ? Infinity : 0 }}
          />
          
          {/* Ear tufts */}
          <motion.path
            d="M35,20 Q32,12 38,15 Q40,18 35,20"
            fill="url(#owlHeadGradient)"
            animate={{
              rotate: mood === 'thinking' ? [-5, 5, -5] : 0
            }}
            transition={{ duration: 1.5, repeat: mood === 'thinking' ? Infinity : 0 }}
          />
          <motion.path
            d="M65,20 Q68,12 62,15 Q60,18 65,20"
            fill="url(#owlHeadGradient)"
            animate={{
              rotate: mood === 'thinking' ? [5, -5, 5] : 0
            }}
            transition={{ duration: 1.5, repeat: mood === 'thinking' ? Infinity : 0 }}
          />
          
          {/* Wings */}
          <motion.ellipse
            cx="28" cy="60" rx="8" ry="20"
            fill="url(#wingGradient)"
            animate={{
              rotate: wingFlap ? [-10, -20, -10] : -10,
              x: wingFlap ? [-2, -4, -2] : 0
            }}
            transition={{ duration: 0.3, repeat: wingFlap ? 3 : 0 }}
          />
          <motion.ellipse
            cx="72" cy="60" rx="8" ry="20"
            fill="url(#wingGradient)"
            animate={{
              rotate: wingFlap ? [10, 20, 10] : 10,
              x: wingFlap ? [2, 4, 2] : 0
            }}
            transition={{ duration: 0.3, repeat: wingFlap ? 3 : 0 }}
          />
          
          {/* Eye circles (white background) */}
          <circle cx="42" cy="32" r="8" fill="white"/>
          <circle cx="58" cy="32" r="8" fill="white"/>
          
          {/* Eyes */}
          <motion.circle
            cx="42" cy="32" r="6"
            fill={getEyeColor()}
            animate={{
              scaleY: isBlinking ? 0.1 : 1,
              opacity: mood === 'encouraging' ? [1, 0.8, 1] : 1
            }}
            transition={{ 
              scaleY: { duration: 0.1 },
              opacity: { duration: 0.4, repeat: mood === 'encouraging' ? Infinity : 0 }
            }}
          />
          <motion.circle
            cx="58" cy="32" r="6"
            fill={getEyeColor()}
            animate={{
              scaleY: isBlinking ? 0.1 : 1,
              opacity: mood === 'encouraging' ? [1, 0.8, 1] : 1
            }}
            transition={{ 
              scaleY: { duration: 0.1 },
              opacity: { duration: 0.4, repeat: mood === 'encouraging' ? Infinity : 0 }
            }}
          />
          
          {/* Pupils */}
          <circle cx="42" cy="32" r="2" fill="white"/>
          <circle cx="58" cy="32" r="2" fill="white"/>
          
          {/* Beak */}
          <motion.path
            d="M48,38 Q50,44 52,38 Q50,40 48,38"
            fill="#F59E0B"
            animate={{
              rotate: getBeakRotation()
            }}
            style={{ transformOrigin: '50px 40px' }}
          />
          
          {/* Chest feather pattern */}
          <ellipse cx="50" cy="70" rx="12" ry="18" fill="rgba(255,255,255,0.3)"/>
          <path d="M45,60 Q50,58 55,60 Q50,62 45,60" fill="rgba(255,255,255,0.5)"/>
          <path d="M45,65 Q50,63 55,65 Q50,67 45,65" fill="rgba(255,255,255,0.5)"/>
          <path d="M45,70 Q50,68 55,70 Q50,72 45,70" fill="rgba(255,255,255,0.5)"/>
          <path d="M45,75 Q50,73 55,75 Q50,77 45,75" fill="rgba(255,255,255,0.5)"/>
          
          {/* Feet */}
          <ellipse cx="42" cy="88" rx="6" ry="3" fill="#F59E0B"/>
          <ellipse cx="58" cy="88" rx="6" ry="3" fill="#F59E0B"/>
          
          {/* Thinking bubbles (only when thinking) */}
          {mood === 'thinking' && (
            <g>
              <motion.circle
                cx="75" cy="25" r="2"
                fill="rgba(155, 93, 229, 0.6)"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              />
              <motion.circle
                cx="80" cy="20" r="1.5"
                fill="rgba(155, 93, 229, 0.4)"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <motion.circle
                cx="84" cy="16" r="1"
                fill="rgba(155, 93, 229, 0.3)"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
            </g>
          )}
          
          {/* Gradients */}
          <defs>
            <radialGradient id="owlBodyGradient" cx="50%" cy="30%">
              <stop offset="0%" stopColor="#E8F4FD"/>
              <stop offset="70%" stopColor="#9B5DE5"/>
              <stop offset="100%" stopColor="#6B46C1"/>
            </radialGradient>
            <radialGradient id="owlHeadGradient" cx="50%" cy="30%">
              <stop offset="0%" stopColor="#F3F4F6"/>
              <stop offset="70%" stopColor="#A855F7"/>
              <stop offset="100%" stopColor="#7C3AED"/>
            </radialGradient>
            <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DDD6FE"/>
              <stop offset="100%" stopColor="#8B5CF6"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Speech bubble */}
      {showMessage && message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-lg px-4 py-3 shadow-lg border-2 border-purple max-w-56"
        >
          <p className="text-sm text-center">{message}</p>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </motion.div>
      )}
    </div>
  );
};

export { WiseOwl };