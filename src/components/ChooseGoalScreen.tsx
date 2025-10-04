import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, DollarSign, Code, MessageSquare, ArrowRight } from 'lucide-react';
import type { Screen, User } from '../App';

interface ChooseGoalScreenProps {
  onNavigate: (screen: Screen) => void;
  onGoalSelect: (updates: Partial<User>) => void;
}

const goals = [
  {
    id: 'personal-finance',
    title: 'Personal Finance',
    description: 'Master budgeting, saving, and investing',
    icon: DollarSign,
    color: 'bg-mint-green',
    progress: 0,
    lessons: '12 lessons',
    difficulty: 'Beginner'
  },
  {
    id: 'python-basics',
    title: 'Python Basics',
    description: 'Learn programming fundamentals',
    icon: Code,
    color: 'bg-sky-blue',
    progress: 0,
    lessons: '15 lessons',
    difficulty: 'Beginner'
  },
  {
    id: 'english-communication',
    title: 'English Communication',
    description: 'Improve speaking and writing skills',
    icon: MessageSquare,
    color: 'bg-purple',
    progress: 0,
    lessons: '10 lessons',
    difficulty: 'Intermediate'
  }
];

export function ChooseGoalScreen({ onNavigate, onGoalSelect }: ChooseGoalScreenProps) {
  const handleGoalSelect = (goal: typeof goals[0]) => {
    onGoalSelect({ selectedGoal: goal.title });
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <Button 
          variant="ghost" 
          size="icon"
          className="rounded-full"
          onClick={() => onNavigate('welcome')}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1>Choose Your Goal</h1>
        <div className="w-10" />
      </div>

      <div className="p-6 space-y-6">
        {/* Welcome Message */}
        <div className="text-center space-y-2">
          <h2>What would you like to learn? 🎯</h2>
          <p className="text-muted-foreground">Choose a goal to get started with personalized lessons</p>
        </div>

        {/* Goal Cards */}
        <div className="space-y-4">
          {goals.map((goal) => {
            const IconComponent = goal.icon;
            return (
              <Card 
                key={goal.id}
                className="p-6 hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02] border-2 hover:border-primary/20"
                onClick={() => handleGoalSelect(goal)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${goal.color} rounded-2xl flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3>{goal.title}</h3>
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                    
                    <p className="text-muted-foreground text-sm">{goal.description}</p>
                    
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="bg-muted px-2 py-1 rounded-full">{goal.lessons}</span>
                      <span className="bg-muted px-2 py-1 rounded-full">{goal.difficulty}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Popular Badge */}
        <div className="relative">
          <div className="absolute -top-8 left-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full">
              ⭐ Most Popular
            </span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-4">
          <Button 
            className="w-full h-14 bg-gradient-to-r from-primary to-accent text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => onNavigate('home')}
          >
            Start Learning
          </Button>
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            You can change your goal anytime in settings
          </p>
          <div className="flex items-center justify-center space-x-1">
            <span className="text-xs">🔥</span>
            <span className="text-xs text-muted-foreground">Join 50K+ active learners</span>
          </div>
        </div>
      </div>
    </div>
  );
}