import React, { useState } from 'react';
import { motion } from 'motion/react';

interface CelebrationDragonProps {
  isVisible?: boolean;
  celebrationType?: 'achievement' | 'quiz' | 'lesson' | 'level-up';
  onAnimationComplete?: () => void;
  size?: 'small' | 'medium' | 'large';
}

function CelebrationDragon({ 
  isVisible = false, 
  celebrationType = 'achievement',
  onAnimationComplete,
  size = 'medium'
}: CelebrationDragonProps) {
  
  const sizeClasses = {
    small: 'text-6xl',
    medium: 'text-8xl',
    large: 'text-12xl'
  };

  const celebrationMessages = {
    achievement: "🎉 Amazing work! 🎉",
    quiz: "🧠 Quiz Master! 🧠", 
    lesson: "📚 Lesson Complete! 📚",
    'level-up': "⭐ Level Up! ⭐"
  };

  const celebrationColors = {
    achievement: 'from-purple-500 to-pink-500',
    quiz: 'from-blue-500 to-cyan-500',
    lesson: 'from-green-500 to-emerald-500',
    'level-up': 'from-yellow-500 to-orange-500'
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      exit={{ scale: 0, opacity: 0, rotate: 180 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100 
      }}
      onAnimationComplete={onAnimationComplete}
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
    >
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black"
      />
      
      {/* Celebration Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Dragon Character */}
        <motion.div
          className={`${sizeClasses[size]} mb-4`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🐉
        </motion.div>
        
        {/* Celebration Message */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`bg-gradient-to-r ${celebrationColors[celebrationType]} text-white px-8 py-4 rounded-3xl shadow-2xl text-center`}
        >
          <h2 className="text-2xl font-bold mb-2">
            {celebrationMessages[celebrationType]}
          </h2>
          <div className="flex justify-center space-x-2 text-xl">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⭐
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🎯
            </motion.span>
            <motion.span
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⭐
            </motion.span>
          </div>
        </motion.div>
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -100, -200],
                x: [0, (Math.random() - 0.5) * 100],
                rotate: [0, 360],
                scale: [1, 0.5, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            >
              {['✨', '🌟', '💫', '⭐'][Math.floor(Math.random() * 4)]}
            </motion.div>
          ))}
        </div>
        
        {/* Confetti Rain */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'][Math.floor(Math.random() * 7)]
              }}
              animate={{
                y: [-100, 800],
                x: [0, (Math.random() - 0.5) * 200],
                rotate: [0, 360]
              }}
              transition={{
                duration: 4,
                delay: i * 0.1,
                ease: "linear"
              }}
            />
          ))}
        </div>
        
        {/* Fire Breath Effect */}
        <motion.div
          className="absolute top-16 left-1/2 transform -translate-x-1/2"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="text-4xl">🔥</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export { CelebrationDragon };