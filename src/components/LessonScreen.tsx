import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { ArrowLeft, CheckCircle, Circle } from 'lucide-react';
import type { Screen, Lesson, Quiz } from '../App';

interface LessonScreenProps {
  lesson: Lesson | null;
  onNavigate: (screen: Screen) => void;
  onStartQuiz: (quiz: Quiz) => void;
}

const mockQuiz: Quiz = {
  id: 'budgeting-quiz',
  lessonId: 'budgeting-101',
  questions: [
    {
      id: '1',
      question: 'What is the first step in creating a budget?',
      options: ['Set financial goals', 'Track your expenses', 'Calculate income', 'Pay bills'],
      correctAnswer: 1,
      xpReward: 10
    },
    {
      id: '2',
      question: 'In the 50/30/20 rule, what does the 20% represent?',
      options: ['Entertainment', 'Housing', 'Savings', 'Food'],
      correctAnswer: 2,
      xpReward: 10
    },
    {
      id: '3',
      question: 'Which category is considered a "need"?',
      options: ['Netflix subscription', 'Rent payment', 'Dining out', 'Gym membership'],
      correctAnswer: 1,
      xpReward: 10
    }
  ]
};

export function LessonScreen({ lesson, onNavigate, onStartQuiz }: LessonScreenProps) {
  if (!lesson) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>No lesson selected</p>
      </div>
    );
  }

  const progress = 100; // For demo, showing complete lesson

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border p-4 pt-12">
        <div className="flex items-center justify-between mb-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg">{lesson.topic}</h1>
          <div className="w-10" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Lesson Title */}
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📚</span>
              </div>
              <h2>{lesson.title}</h2>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="bg-muted px-2 py-1 rounded-full">5 min read</span>
              <span className="bg-muted px-2 py-1 rounded-full">+{lesson.xpReward} XP</span>
            </div>
          </div>
        </Card>

        {/* Lesson Content */}
        <Card className="p-6">
          <div className="space-y-4">
            <h3>What you'll learn</h3>
            <p className="text-muted-foreground leading-relaxed">
              {lesson.content}
            </p>
          </div>
        </Card>

        {/* Steps */}
        <Card className="p-6">
          <div className="space-y-4">
            <h3>Steps to Success</h3>
            <div className="space-y-3">
              {lesson.steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{step}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Key Concepts */}
        <Card className="p-6 bg-mint-green/5 border-mint-green/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg">💡</span>
              <h3>Key Takeaway</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The 50/30/20 rule is a simple budgeting framework: allocate 50% of your income to needs, 
              30% to wants, and 20% to savings and debt repayment. This helps ensure you live within 
              your means while building financial security.
            </p>
          </div>
        </Card>

        {/* Interactive Elements */}
        <Card className="p-6 bg-sky-blue/5 border-sky-blue/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🎯</span>
              <h3>Quick Check</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Can you name the three categories in the 50/30/20 rule?
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-white p-2 rounded-lg text-center border">Needs (50%)</div>
              <div className="bg-white p-2 rounded-lg text-center border">Wants (30%)</div>
              <div className="bg-white p-2 rounded-lg text-center border">Savings (20%)</div>
            </div>
          </div>
        </Card>

        {/* Continue Button */}
        <div className="pt-4">
          <Button 
            className="w-full h-14 bg-gradient-to-r from-primary to-accent text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => onStartQuiz(mockQuiz)}
          >
            Continue to Quiz 🧠
          </Button>
        </div>

        {/* Lesson Stats */}
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            Great job! You've completed this lesson
          </p>
          <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
            <span>📖 Reading: 5 min</span>
            <span>🎯 Quiz: 2 min</span>
          </div>
        </div>
      </div>
    </div>
  );
}