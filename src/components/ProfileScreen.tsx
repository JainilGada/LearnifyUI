import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Switch } from './ui/switch';
import { 
  ArrowLeft, 
  Star, 
  Flame, 
  Trophy, 
  Settings, 
  Bell, 
  User, 
  LogOut,
  ChevronRight,
  Calendar,
  Target,
  BookOpen,
  Award
} from 'lucide-react';
import type { Screen, User as UserType } from '../App';

interface ProfileScreenProps {
  user: UserType;
  onNavigate: (screen: Screen) => void;
}

export function ProfileScreen({ user, onNavigate }: ProfileScreenProps) {
  const completionRate = Math.round((user.completedTopics.length / 4) * 100); // Assuming 4 total topics

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-accent p-6 pt-12 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full text-white hover:bg-white/20"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-white">Profile</h1>
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full text-white hover:bg-white/20"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        {/* Profile Info */}
        <div className="text-center space-y-4">
          <Avatar className="w-20 h-20 mx-auto border-4 border-white/20">
            <AvatarImage src="" alt={user.name} />
            <AvatarFallback className="bg-white text-primary text-2xl">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <h2 className="text-white text-xl">{user.name}</h2>
            <p className="text-white/80 text-sm">Learning enthusiast</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-white" />
              </div>
              <p className="text-white text-lg">{user.level}</p>
              <p className="text-white/70 text-xs">Level</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-2">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <p className="text-white text-lg">{user.streak}</p>
              <p className="text-white/70 text-xs">Day Streak</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-2">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <p className="text-white text-lg">{user.xp}</p>
              <p className="text-white/70 text-xs">Total XP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 -mt-6">
        {/* Progress Overview */}
        <Card className="p-6 bg-white shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3>Learning Progress</h3>
              <span className="text-sm text-muted-foreground">{completionRate}% complete</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span>Current Goal</span>
                </span>
                <span className="text-muted-foreground">{user.selectedGoal}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-mint-green" />
                  <span>Lessons Completed</span>
                </span>
                <span className="text-muted-foreground">{user.completedTopics.length}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-purple" />
                  <span>Days Learning</span>
                </span>
                <span className="text-muted-foreground">24 days</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3>Achievements</h3>
              <Button variant="ghost" size="sm" className="text-primary">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {user.badges.slice(0, 4).map((badge, index) => (
                <div key={index} className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                  <div className="text-center space-y-2">
                    <div className="w-8 h-8 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs">{badge}</p>
                      <p className="text-xs text-muted-foreground">Earned</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Settings */}
        <Card className="p-6">
          <div className="space-y-4">
            <h3>Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Push Notifications</p>
                    <p className="text-xs text-muted-foreground">Daily reminders and updates</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm">Study Reminders</p>
                    <p className="text-xs text-muted-foreground">8:00 PM daily</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Button 
                variant="ghost" 
                className="w-full justify-between p-0 h-auto"
              >
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">Account Settings</span>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Learning Stats */}
        <Card className="p-6 bg-gradient-to-r from-sky-blue/5 to-purple/5 border-sky-blue/20">
          <div className="space-y-4">
            <h3>This Week's Stats</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center space-y-1">
                <p className="text-2xl text-sky-blue">47</p>
                <p className="text-xs text-muted-foreground">Minutes learned</p>
              </div>
              
              <div className="text-center space-y-1">
                <p className="text-2xl text-purple">85%</p>
                <p className="text-xs text-muted-foreground">Quiz accuracy</p>
              </div>
              
              <div className="text-center space-y-1">
                <p className="text-2xl text-mint-green">3</p>
                <p className="text-xs text-muted-foreground">Lessons completed</p>
              </div>
              
              <div className="text-center space-y-1">
                <p className="text-2xl text-orange-500">5</p>
                <p className="text-xs text-muted-foreground">Days active</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Logout */}
        <Card className="p-4">
          <Button 
            variant="ghost" 
            className="w-full justify-center text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </Card>

        {/* App Info */}
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground">Learnify.AI v1.0.0</p>
          <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
            <Button variant="link" className="p-0 h-auto text-xs">Privacy Policy</Button>
            <span>•</span>
            <Button variant="link" className="p-0 h-auto text-xs">Terms of Service</Button>
          </div>
        </div>
      </div>

      {/* Bottom Spacing for Navigation */}
      <div className="h-20"></div>
    </div>
  );
}