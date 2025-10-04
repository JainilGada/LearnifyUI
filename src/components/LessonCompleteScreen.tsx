import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Star, Trophy, Home, RefreshCw } from 'lucide-react';
import type { Screen } from '../App';

interface LessonCompleteScreenProps {
  onNavigate: (screen: Screen) => void;
  onAddXP: (amount: number) => void;
}

export function LessonCompleteScreen({ onNavigate, onAddXP }: LessonCompleteScreenProps) {
  const [xpEarned] = useState(30); // Total XP from lesson + quiz
  const [newBadge] = useState('Budget Beginner');

  useEffect(() => {
    onAddXP(xpEarned);
  }, [xpEarned, onAddXP]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 p-6">
      <div className="max-w-md mx-auto pt-20 space-y-8">
        {/* Success Icon */}
        <div className="text-center">
          <div className="w-24 h-24 mx-auto bg-mint-green rounded-full flex items-center justify-center shadow-xl mb-6">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-mint-green mb-2">Congratulations!</h1>
          <p className="text-muted-foreground">You've completed the lesson successfully!</p>
        </div>

        {/* Results Cards */}
        <div className="space-y-4">
          {/* XP Earned */}
          <Card className="p-6 text-center bg-gradient-to-r from-mint-green/10 to-sky-blue/10 border-mint-green/20">
            <div className="flex items-center justify-center mb-3">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <h2>XP Earned</h2>
            </div>
            <div className="text-3xl text-mint-green mb-2">+{xpEarned}</div>
            <p className="text-muted-foreground">Experience Points</p>
          </Card>

          {/* New Badge */}
          <Card className="p-6 text-center bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <div className="flex items-center justify-center mb-3">
              <Trophy className="w-6 h-6 text-yellow-600 mr-2" />
              <h2>New Badge Unlocked!</h2>
            </div>
            <div className="w-16 h-16 mx-auto bg-yellow-500 rounded-full flex items-center justify-center mb-3">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-yellow-700">{newBadge}</h3>
            <p className="text-muted-foreground">Keep up the great work!</p>
          </Card>

          {/* Performance Summary */}
          <Card className="p-6">
            <h2 className="mb-4">Lesson Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Lesson Progress</span>
                <span className="text-mint-green">100%</span>
              </div>
              <div className="flex justify-between">
                <span>Quiz Score</span>
                <span className="text-mint-green">80%</span>
              </div>
              <div className="flex justify-between">
                <span>Time Spent</span>
                <span>8 minutes</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button 
            className="w-full h-14 bg-gradient-to-r from-mint-green to-sky-blue text-white"
            onClick={() => onNavigate('home')}
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Button>
          
          <Button 
            variant="outline"
            className="w-full h-14"
            onClick={() => onNavigate('reinforcement')}
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Practice More
          </Button>
        </div>

        {/* Encouragement */}
        <Card className="p-6 text-center bg-gradient-to-r from-purple/5 to-accent/5">
          <h3 className="mb-2">Great Job!</h3>
          <p className="text-muted-foreground">
            You're making excellent progress. Keep learning to unlock more achievements and reach your goals!
          </p>
        </Card>
      </div>
    </div>
  );
}