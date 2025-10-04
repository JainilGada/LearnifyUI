import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { ArrowLeft, ArrowRight, ArrowLeft as SwipeLeft, ArrowRight as SwipeRight, RotateCcw } from 'lucide-react';
import type { Screen } from '../App';

interface ReinforcementQuizScreenProps {
  onNavigate: (screen: Screen) => void;
}

const flashcards = [
  {
    id: 1,
    question: "What does the 50% represent in the 50/30/20 rule?",
    answer: "Essential needs like housing, food, utilities, and minimum debt payments",
    category: "Budgeting Basics"
  },
  {
    id: 2,
    question: "Name three examples of 'wants' in a budget",
    answer: "Entertainment, dining out, hobbies, subscriptions, and non-essential shopping",
    category: "Budgeting Basics"
  },
  {
    id: 3,
    question: "What should you do before creating a budget?",
    answer: "Track your expenses for at least one week to understand your spending patterns",
    category: "Budget Planning"
  },
  {
    id: 4,
    question: "Why is the 20% savings rate important?",
    answer: "It builds an emergency fund, pays off debt, and creates long-term financial security",
    category: "Saving Strategies"
  },
  {
    id: 5,
    question: "How often should you review your budget?",
    answer: "Monthly to track progress and make adjustments based on changing circumstances",
    category: "Budget Management"
  }
];

export function ReinforcementQuizScreen({ onNavigate }: ReinforcementQuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [rememberedCount, setRememberedCount] = useState(0);
  const [forgottenCount, setForgottenCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentCard = flashcards[currentIndex];
  const progress = ((currentIndex + 1) / flashcards.length) * 100;

  const handleRemembered = () => {
    setRememberedCount(prev => prev + 1);
    nextCard();
  };

  const handleForgotten = () => {
    setForgottenCount(prev => prev + 1);
    nextCard();
  };

  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    } else {
      setIsComplete(true);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setRememberedCount(0);
    setForgottenCount(0);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background">
        <div className="p-6 pt-12 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full"
              onClick={() => onNavigate('home')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1>Quiz Complete! 🎉</h1>
            <div className="w-10" />
          </div>

          {/* Results */}
          <Card className="p-6 bg-gradient-to-br from-mint-green/10 to-sky-blue/10 border-mint-green/20">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-mint-green to-sky-blue rounded-full flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              
              <div>
                <h2>Memory Check Complete!</h2>
                <p className="text-muted-foreground">You remembered {rememberedCount} out of {flashcards.length} concepts!</p>
              </div>
            </div>
          </Card>

          {/* Score Breakdown */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 bg-mint-green/10 border-mint-green/20">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-mint-green rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
                <p className="text-2xl">{rememberedCount}</p>
                <p className="text-xs text-muted-foreground">Remembered</p>
              </div>
            </Card>
            
            <Card className="p-4 bg-orange-50 border-orange-200">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">↻</span>
                </div>
                <p className="text-2xl">{forgottenCount}</p>
                <p className="text-xs text-muted-foreground">Need Review</p>
              </div>
            </Card>
          </div>

          {/* Next Review Schedule */}
          <Card className="p-4 bg-sky-blue/5 border-sky-blue/20">
            <div className="space-y-2">
              <h4 className="flex items-center">
                <span className="mr-2">📅</span>
                Next Review
              </h4>
              <p className="text-sm text-muted-foreground">
                We'll remind you to review these concepts in 2 days for optimal retention
              </p>
            </div>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button 
              className="w-full h-12 bg-primary hover:bg-primary/90 rounded-2xl"
              onClick={() => onNavigate('home')}
            >
              Back to Dashboard
            </Button>
            
            <Button 
              variant="outline"
              className="w-full h-12 border-border rounded-2xl"
              onClick={resetQuiz}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Review Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
          <h1 className="text-lg">Memory Check 🧠</h1>
          <div className="w-10" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Card {currentIndex + 1} of {flashcards.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Instructions */}
      <div className="p-6 pb-4">
        <Card className="p-4 bg-sky-blue/5 border-sky-blue/20">
          <div className="text-center space-y-2">
            <h3 className="text-sm">How it works</h3>
            <p className="text-xs text-muted-foreground">
              Read the question, think about the answer, then tap to reveal. 
              Mark if you remembered it correctly.
            </p>
          </div>
        </Card>
      </div>

      {/* Flashcard */}
      <div className="px-6 pb-6">
        <Card className="min-h-[300px] p-6 bg-gradient-to-br from-white to-gray-50 border-2 border-primary/10 relative overflow-hidden">
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
              {currentCard.category}
            </span>
          </div>

          <div className="flex flex-col justify-center h-full min-h-[250px] space-y-6">
            {/* Question */}
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white">Q</span>
                </div>
                <h2 className="text-lg leading-relaxed">{currentCard.question}</h2>
              </div>
            </div>

            {/* Answer (conditionally shown) */}
            {showAnswer && (
              <div className="space-y-4 border-t border-border pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-mint-green rounded-full flex items-center justify-center mb-4">
                    <span className="text-white">A</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{currentCard.answer}</p>
                </div>
              </div>
            )}

            {/* Reveal/Action Buttons */}
            <div className="text-center">
              {!showAnswer ? (
                <Button 
                  className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-2xl"
                  onClick={() => setShowAnswer(true)}
                >
                  Reveal Answer
                </Button>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Did you remember this correctly?</p>
                  <div className="flex space-x-3 justify-center">
                    <Button 
                      className="px-6 py-3 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-2xl flex items-center space-x-2"
                      onClick={handleForgotten}
                    >
                      <SwipeLeft className="w-4 h-4" />
                      <span>Need Review</span>
                    </Button>
                    
                    <Button 
                      className="px-6 py-3 bg-mint-green hover:bg-mint-green/90 text-white rounded-2xl flex items-center space-x-2"
                      onClick={handleRemembered}
                    >
                      <span>Got It!</span>
                      <SwipeRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>

      {/* Navigation */}
      <div className="px-6 pb-6">
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            size="sm"
            disabled={currentIndex === 0}
            onClick={prevCard}
            className="rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          
          <div className="text-center space-y-1">
            <div className="flex space-x-2">
              {flashcards.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              {rememberedCount} remembered • {forgottenCount} need review
            </p>
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            disabled={currentIndex === flashcards.length - 1}
            onClick={nextCard}
            className="rounded-full"
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}