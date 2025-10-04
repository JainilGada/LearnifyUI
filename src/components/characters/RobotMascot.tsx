import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface RobotMascotProps {
  mood?: 'happy' | 'excited' | 'thinking' | 'celebrating';
  size?: 'small' | 'medium' | 'large';
  message?: string;
  showMessage?: boolean;
  onClick?: () => void;
}

function RobotMascot({ 
  mood = 'happy', 
  size = 'medium', 
  message = '', 
  showMessage = false,
  onClick 
}: RobotMascotProps) {
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const [showSpeechBubble, setShowSpeechBubble] = useState(showMessage);

  useEffect(() => {
    if (showMessage && message) {
      setShowSpeechBubble(true);
      // Auto-hide message after 5 seconds
      const timer = setTimeout(() => {
        setShowSpeechBubble(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showMessage, message]);

  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16', 
    large: 'w-24 h-24'
  };

  const animations = {
    idle: {
      y: [0, -5, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    excited: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    celebrating: {
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const moodColors = {
    happy: 'from-blue-400 to-cyan-400',
    excited: 'from-purple-400 to-pink-400',
    thinking: 'from-green-400 to-blue-400',
    celebrating: 'from-yellow-400 to-orange-400'
  };

  const moodEmojis = {
    happy: '😊',
    excited: '🤩',
    thinking: '🤔',
    celebrating: '🎉'
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Speech Bubble */}
      {showSpeechBubble && message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="bg-white rounded-2xl px-4 py-2 shadow-lg border-2 border-purple-200 max-w-xs">
            <p className="text-sm text-gray-800 text-center">{message}</p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Robot Body */}
      <motion.div
        className={`${sizeClasses[size]} relative cursor-pointer`}
        animate={mood === 'celebrating' ? animations.celebrating : mood === 'excited' ? animations.excited : animations.idle}
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Robot Main Body */}
        <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${moodColors[mood]} shadow-2xl border-4 border-white relative overflow-hidden`}>
          {/* Robot Face */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-2xl animate-pulse">
              {moodEmojis[mood]}
            </div>
          </div>
          
          {/* Glowing Effect */}
          <div className="absolute inset-0 rounded-2xl bg-white opacity-20 animate-pulse"></div>
          
          {/* Robot Antenna */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-4 bg-gray-300 rounded-full relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
            </div>
          </div>
          
          {/* Side Elements */}
          <div className="absolute top-2 -left-1 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-2 -right-1 w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Sparkle Effects */}
        {mood === 'celebrating' && (
          <>
            <motion.div
              className="absolute -top-2 -left-2 text-yellow-400 text-lg"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -right-2 text-pink-400 text-lg"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              🌟
            </motion.div>
          </>
        )}
      </motion.div>
      
      {/* Robot Name */}
      {size === 'large' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-2 text-white text-sm font-medium text-center"
        >
          Robby 🤖
        </motion.div>
      )}
    </div>
  );
}

export { RobotMascot };