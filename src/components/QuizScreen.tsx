import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import type { Screen, Quiz } from '../App';

interface QuizScreenProps {
  quiz: Quiz | null;
  currentQuestionIndex: number;
  onNavigate: (screen: Screen) => void;
  onNextQuestion: () => void;
  onQuizComplete: (xp: number) => void;
}

export function QuizScreen({ 
  quiz, 
  currentQuestionIndex, 
  onNavigate, 
  onNextQuestion, 
  onQuizComplete 
}: QuizScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  if (!quiz) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>No quiz available</p>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setScore(prev => prev + currentQuestion.xpReward);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onQuizComplete(score);
      onNavigate('lesson-complete');
    } else {
      onNextQuestion();
      // Reset for next question
      setSelectedAnswer(null);
      setIsAnswered(false);
      setIsCorrect(false);
      setShowFeedback(false);
    }
  };

  const getOptionStyle = (index: number) => {
    if (!isAnswered) {
      return selectedAnswer === index 
        ? 'bg-primary text-primary-foreground' 
        : 'bg-card hover:bg-muted';
    }
    
    if (index === currentQuestion.correctAnswer) {
      return 'bg-mint-green text-white';
    }
    
    if (index === selectedAnswer && !isCorrect) {
      return 'bg-destructive text-destructive-foreground';
    }
    
    return 'bg-muted';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-blue to-purple p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1>Quiz Time</h1>
          <div className="w-6" />
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
            <span>Score: {score} XP</span>
          </div>
          <Progress value={progress} className="bg-white/20" />
        </div>
      </div>

      {/* Question Content */}
      <div className="p-6 space-y-6">
        <Card className="p-6">
          <h2 className="mb-6">{currentQuestion.question}</h2>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={`w-full h-auto p-4 text-left justify-start ${getOptionStyle(index)}`}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
              >
                <span className="w-6 h-6 rounded-full border-2 border-current mr-3 flex items-center justify-center flex-shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </Button>
            ))}
          </div>
        </Card>

        {/* Feedback */}
        {showFeedback && (
          <Card className={`p-6 ${isCorrect ? 'bg-mint-green/10 border-mint-green' : 'bg-destructive/10 border-destructive'}`}>
            <div className="flex items-center space-x-3">
              {isCorrect ? (
                <CheckCircle className="w-6 h-6 text-mint-green" />
              ) : (
                <XCircle className="w-6 h-6 text-destructive" />
              )}
              <div>
                <h3 className={isCorrect ? 'text-mint-green' : 'text-destructive'}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </h3>
                <p className="text-muted-foreground">
                  {isCorrect 
                    ? `Great job! You earned ${currentQuestion.xpReward} XP.`
                    : `The correct answer is ${currentQuestion.options[currentQuestion.correctAnswer]}.`
                  }
                </p>
              </div>
            </div>
          </Card>
        )}

        {/* Next Button */}
        {showFeedback && (
          <Button 
            className="w-full h-14"
            onClick={handleNext}  
          >
            {isLastQuestion ? 'Complete Quiz' : 'Next Question'}
          </Button>
        )}
      </div>
    </div>
  );
}