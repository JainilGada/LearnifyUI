import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Brain, Target, Zap } from 'lucide-react';
import type { Screen } from '../App';

interface WelcomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-sky-blue to-purple">
      <div className="w-full max-w-sm space-y-8">
        {/* Logo */}
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-white rounded-3xl flex items-center justify-center shadow-2xl">
            <Brain className="w-12 h-12 text-purple" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-white">Learnify.AI</h1>
            <p className="text-white/90">Learn anything, every day!</p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4">
          <Card className="p-5 bg-white/15 backdrop-blur border-white/30">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-mint-green rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white">Set Goals</h3>
                <p className="text-white/80">Track your learning progress</p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-white/15 backdrop-blur border-white/30">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white">AI Powered</h3>
                <p className="text-white/80">Personalized learning experience</p>
              </div>
            </div>
          </Card>

          <Card className="p-5 bg-white/15 backdrop-blur border-white/30">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white">Daily Streaks</h3>
                <p className="text-white/80">Build consistent learning habits</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button 
            className="w-full h-16 bg-white text-purple rounded-3xl shadow-2xl"
            onClick={() => onNavigate('choose-goal')}
          >
            Get Started
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full h-14 border-white/40 text-white bg-white/15 backdrop-blur rounded-2xl hover:bg-white/25"
            onClick={() => onNavigate('signin')}
          >
            Sign In
          </Button>
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-white/80">
            Join thousands of learners worldwide
          </p>
        </div>
      </div>
    </div>
  );
}