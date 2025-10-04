import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { SignInScreen } from './components/SignInScreen';
import { ChooseGoalScreen } from './components/ChooseGoalScreen';
import { HomeDashboard } from './components/HomeDashboard';
import { LessonScreen } from './components/LessonScreen';
import { QuizScreen } from './components/QuizScreen';
import { LessonCompleteScreen } from './components/LessonCompleteScreen';
import { ReinforcementQuizScreen } from './components/ReinforcementQuizScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { AdminDashboard } from './components/AdminDashboard';

export type Screen = 
  | 'welcome' 
  | 'signin' 
  | 'choose-goal' 
  | 'home' 
  | 'lesson' 
  | 'quiz' 
  | 'lesson-complete' 
  | 'reinforcement' 
  | 'profile' 
  | 'leaderboard'
  | 'admin';

export interface User {
  name: string;
  xp: number;
  streak: number;
  level: number;
  badges: string[];
  selectedGoal: string;
  completedTopics: string[];
}

export interface Lesson {
  id: string;
  title: string;
  topic: string;
  content: string;
  steps: string[];
  xpReward: number;
}

export interface Quiz {
  id: string;
  lessonId: string;
  questions: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    xpReward: number;
  }>;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [user, setUser] = useState<User>({
    name: 'Jainil',
    xp: 1250,
    streak: 12,
    level: 3,
    badges: ['Budget Beginner', 'Quick Learner', 'Streak Master'],
    selectedGoal: 'Personal Finance',
    completedTopics: ['Introduction to Budgeting']
  });

  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const startLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
    setCurrentScreen('lesson');
  };

  const startQuiz = (quiz: Quiz) => {
    setCurrentQuiz(quiz);
    setCurrentQuestionIndex(0);
    setCurrentScreen('quiz');
  };

  const updateUser = (updates: Partial<User>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const addXP = (amount: number) => {
    setUser(prev => ({
      ...prev,
      xp: prev.xp + amount,
      level: Math.floor((prev.xp + amount) / 500) + 1
    }));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNavigate={navigateToScreen} />;
      case 'signin':
        return <SignInScreen onNavigate={navigateToScreen} />;
      case 'choose-goal':
        return <ChooseGoalScreen onNavigate={navigateToScreen} onGoalSelect={updateUser} />;
      case 'home':
        return (
          <HomeDashboard 
            user={user} 
            onNavigate={navigateToScreen} 
            onStartLesson={startLesson}
            onStartQuiz={startQuiz}
          />
        );
      case 'lesson':
        return (
          <LessonScreen 
            lesson={currentLesson} 
            onNavigate={navigateToScreen} 
            onStartQuiz={startQuiz}
          />
        );
      case 'quiz':
        return (
          <QuizScreen 
            quiz={currentQuiz}
            currentQuestionIndex={currentQuestionIndex}
            onNavigate={navigateToScreen}
            onNextQuestion={() => setCurrentQuestionIndex(prev => prev + 1)}
            onQuizComplete={addXP}
          />
        );
      case 'lesson-complete':
        return <LessonCompleteScreen onNavigate={navigateToScreen} onAddXP={addXP} />;
      case 'reinforcement':
        return <ReinforcementQuizScreen onNavigate={navigateToScreen} />;
      case 'profile':
        return <ProfileScreen user={user} onNavigate={navigateToScreen} />;
      case 'leaderboard':
        return <LeaderboardScreen user={user} onNavigate={navigateToScreen} />;
      case 'admin':
        return <AdminDashboard onNavigate={navigateToScreen} />;
      default:
        return <WelcomeScreen onNavigate={navigateToScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderScreen()}
    </div>
  );
}