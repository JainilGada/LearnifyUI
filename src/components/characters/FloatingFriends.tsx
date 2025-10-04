import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface FloatingFriendsProps {
  count?: number;
  type?: 'mixed' | 'animals' | 'objects' | 'emojis';
  speed?: 'slow' | 'medium' | 'fast';
  size?: 'small' | 'medium' | 'large';
}

function FloatingFriends({ 
  count = 6, 
  type = 'mixed', 
  speed = 'medium',
  size = 'medium'
}: FloatingFriendsProps) {
  
  const friendSets = {
    mixed: ['🐱', '🐶', '🦊', '🐰', '🐻', '🦄', '🌟', '💫', '✨', '🎈', '🎭', '🎨'],
    animals: ['🐱', '🐶', '🦊', '🐰', '🐻', '🦄', '🐼', '🦋', '🐝', '🐠', '🦜', '🐧'],
    objects: ['🌟', '💫', '✨', '🎈', '🎭', '🎨', '📚', '🎯', '🏆', '🎊', '🎉', '💎'],
    emojis: ['😊', '🤩', '😄', '🥳', '😎', '🤗', '😍', '🤓', '😋', '🙃', '😇', '🤠']
  };

  const speedSettings = {
    slow: { duration: [4, 6], delay: [0, 3] },
    medium: { duration: [3, 5], delay: [0, 2] },
    fast: { duration: [2, 4], delay: [0, 1.5] }
  };

  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-3xl',
    large: 'text-4xl'
  };

  const friends = useMemo(() => {
    const selectedSet = friendSets[type];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: selectedSet[Math.floor(Math.random() * selectedSet.length)],
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      floatDistance: 20 + Math.random() * 40,
      duration: speedSettings[speed].duration[0] + Math.random() * (speedSettings[speed].duration[1] - speedSettings[speed].duration[0]),
      delay: Math.random() * speedSettings[speed].delay[1]
    }));
  }, [count, type, speed]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {friends.map((friend) => (
        <motion.div
          key={friend.id}
          className={`absolute ${sizeClasses[size]} opacity-30`}
          style={{
            left: `${friend.initialX}%`,
            top: `${friend.initialY}%`,
          }}
          animate={{
            y: [
              0,
              -friend.floatDistance,
              friend.floatDistance,
              0
            ],
            x: [
              0,
              friend.floatDistance * 0.3,
              -friend.floatDistance * 0.3,
              0
            ],
            rotate: [
              0,
              10,
              -10,
              0
            ],
            scale: [
              1,
              1.1,
              0.9,
              1
            ]
          }}
          transition={{
            duration: friend.duration,
            delay: friend.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.span
            animate={{
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: friend.duration * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: friend.delay + 0.5
            }}
          >
            {friend.emoji}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

export { FloatingFriends };