import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { ArrowLeft, Mail } from 'lucide-react';
import type { Screen } from '../App';

interface SignInScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function SignInScreen({ onNavigate }: SignInScreenProps) {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="w-full max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-8">
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full"
            onClick={() => onNavigate('welcome')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1>Sign In</h1>
          <div className="w-10" />
        </div>

        <div className="space-y-6">
          {/* Welcome Message */}
          <div className="text-center space-y-2">
            <h2>Welcome back! 👋</h2>
            <p className="text-muted-foreground">Continue your learning journey</p>
          </div>

          {/* Google Sign In */}
          <Card className="p-4">
            <Button 
              className="w-full h-12 bg-white border border-border text-foreground hover:bg-gray-50 rounded-xl"
              onClick={() => onNavigate('home')}
            >
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded"></div>
                <span>Continue with Google</span>
              </div>
            </Button>
          </Card>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">or</span>
            </div>
          </div>

          {/* Email Form */}
          <Card className="p-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email"
                  className="pl-10 h-12 rounded-xl"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm">Password</label>
              <Input 
                id="password"
                type="password" 
                placeholder="Enter your password"
                className="h-12 rounded-xl"
              />
            </div>
            
            <Button 
              className="w-full h-12 bg-primary hover:bg-primary/90 rounded-xl"
              onClick={() => onNavigate('home')}
            >
              Sign In
            </Button>
          </Card>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Don't have an account?{' '}
              <Button 
                variant="link" 
                className="p-0 h-auto text-primary"
                onClick={() => onNavigate('choose-goal')}
              >
                Sign up
              </Button>
            </p>
          </div>

          {/* Terms */}
          <p className="text-xs text-muted-foreground text-center">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}