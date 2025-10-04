import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { 
  Home, 
  BookOpen, 
  Trophy, 
  User, 
  Play, 
  Brain, 
  Target,
  Star,
  Flame,
  ChevronRight,
  Grid3X3
} from 'lucide-react';
import type { Screen, User as UserType, Lesson, Quiz } from '../App';

interface HomeDashboardProps {
  user: UserType;
  onNavigate: (screen: Screen) => void;
  onStartLesson: (lesson: Lesson) => void;
  onStartQuiz: (quiz: Quiz) => void;
}

const mockLesson: Lesson = {
  id: 'budgeting-101',
  title: 'Budgeting 101',
  topic: 'Personal Finance',
  content: 'Learn the fundamentals of creating and managing a personal budget. We\'ll cover the 50/30/20 rule, tracking expenses, and building sustainable spending habits.',
  steps: [
    'Track your expenses for one week',
    'Categorize your spending into needs vs wants', 
    'Allocate 50% for needs, 30% for wants, 20% for savings'
  ],
  xpReward: 15
};

const mockQuiz: Quiz = {
  id: 'daily-reinforcement',
  lessonId: 'budgeting-101',
  questions: [
    {
      id: '1',
      question: 'What percentage should you allocate for needs in the 50/30/20 rule?',
      options: ['30%', '50%', '20%', '40%'],
      correctAnswer: 1,
      xpReward: 10
    },
    {
      id: '2', 
      question: 'Which category should emergency savings fall under?',
      options: ['Needs', 'Wants', 'Savings', 'Investments'],
      correctAnswer: 2,
      xpReward: 10
    }
  ]
};

export function HomeDashboard({ user, onNavigate, onStartLesson, onStartQuiz }: HomeDashboardProps) {
  const progressPercentage = (user.xp % 500) / 5;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-blue to-purple p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1>Hello, {user.name}!</h1>
            <p className="opacity-90">Ready to learn something new?</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => onNavigate('profile')}
          >
            <User className="w-6 h-6" />
          </Button>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="bg-white/15 backdrop-blur border-white/30 p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 mr-1" />
              <span>{user.xp}</span>
            </div>
            <p className="text-xs opacity-80">Total XP</p>
          </Card>
          
          <Card className="bg-white/15 backdrop-blur border-white/30 p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Flame className="w-5 h-5 mr-1" />
              <span>{user.streak}</span>
            </div>
            <p className="text-xs opacity-80">Day Streak</p>
          </Card>
          
          <Card className="bg-white/15 backdrop-blur border-white/30 p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 mr-1" />
              <span>{user.level}</span>
            </div>
            <p className="text-xs opacity-80">Level</p>
          </Card>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Level {user.level}</span>
            <span>{user.xp % 500}/500 XP</span>
          </div>
          <Progress value={progressPercentage} className="bg-white/20" />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            className="h-20 flex flex-col space-y-2 bg-gradient-to-br from-mint-green to-sky-blue text-white"
            onClick={() => onStartLesson(mockLesson)}
          >
            <Play className="w-6 h-6" />
            <span>Start Lesson</span>
          </Button>
          
          <Button
            className="h-20 flex flex-col space-y-2 bg-gradient-to-br from-purple to-accent text-white"
            onClick={() => onStartQuiz(mockQuiz)}
          >
            <Brain className="w-6 h-6" />
            <span>Daily Quiz</span>
          </Button>
        </div>

        {/* Current Goal */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2>Current Goal</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('choose-goal')}
            >
              Change
            </Button>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-mint-green rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3>{user.selectedGoal}</h3>
              <p className="text-muted-foreground">Continue your learning journey</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </Card>

        {/* Recent Activities */}
        <Card className="p-6">
          <h2 className="mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {user.completedTopics.map((topic, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-mint-green rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p>{topic}</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
                </div>
                <span className="text-mint-green">+15 XP</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-6">
          <h2 className="mb-4">Your Badges</h2>
          <div className="grid grid-cols-1 gap-3">
            {user.badges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-muted rounded-lg">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex justify-around">
          <Button variant="ghost" size="sm" className="flex flex-col space-y-1">
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex flex-col space-y-1"
            onClick={() => onNavigate('leaderboard')}
          >
            <Trophy className="w-5 h-5" />
            <span className="text-xs">Leaderboard</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex flex-col space-y-1"
            onClick={() => onNavigate('profile')}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex flex-col space-y-1"
            onClick={() => onNavigate('admin')}
          >
            <Grid3X3 className="w-5 h-5" />
            <span className="text-xs">More</span>
          </Button>
        </div>
      </div>
      
      {/* Bottom spacing for fixed nav */}
      <div className="h-20"></div>
    </div>
  );
}