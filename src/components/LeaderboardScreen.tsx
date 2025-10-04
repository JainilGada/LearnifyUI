import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ArrowLeft, 
  Trophy, 
  Star, 
  Flame, 
  Crown, 
  Medal,
  Users,
  Share,
  Gift
} from 'lucide-react';
import type { Screen, User as UserType } from '../App';

interface LeaderboardScreenProps {
  user: UserType;
  onNavigate: (screen: Screen) => void;
}

const globalLeaderboard = [
  { rank: 1, name: 'Sarah Chen', xp: 2890, streak: 45, avatar: 'S', level: 6 },
  { rank: 2, name: 'Alex Rodriguez', xp: 2650, streak: 32, avatar: 'A', level: 5 },
  { rank: 3, name: 'Maya Patel', xp: 2340, streak: 28, avatar: 'M', level: 5 },
  { rank: 4, name: 'David Kim', xp: 2180, streak: 22, avatar: 'D', level: 4 },
  { rank: 5, name: 'Emma Wilson', xp: 1890, streak: 19, avatar: 'E', level: 4 },
  { rank: 6, name: 'Jainil', xp: 1250, streak: 12, avatar: 'J', level: 3 },
  { rank: 7, name: 'Ryan Foster', xp: 1180, streak: 15, avatar: 'R', level: 3 },
  { rank: 8, name: 'Lily Zhang', xp: 980, streak: 8, avatar: 'L', level: 2 },
];

const friendsLeaderboard = [
  { rank: 1, name: 'Alex Rodriguez', xp: 2650, streak: 32, avatar: 'A', level: 5 },
  { rank: 2, name: 'Maya Patel', xp: 2340, streak: 28, avatar: 'M', level: 5 },
  { rank: 3, name: 'Jainil', xp: 1250, streak: 12, avatar: 'J', level: 3 },
  { rank: 4, name: 'Ryan Foster', xp: 1180, streak: 15, avatar: 'R', level: 3 },
  { rank: 5, name: 'Lily Zhang', xp: 980, streak: 8, avatar: 'L', level: 2 },
];

export function LeaderboardScreen({ user, onNavigate }: LeaderboardScreenProps) {
  const [activeTab, setActiveTab] = useState('global');
  
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="text-muted-foreground">{rank}</span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-400';
      case 3:
        return 'bg-gradient-to-r from-amber-400 to-yellow-500';
      default:
        return 'bg-muted';
    }
  };

  const renderLeaderboard = (data: typeof globalLeaderboard) => (
    <div className="space-y-3">
      {data.map((participant, index) => {
        const isCurrentUser = participant.name === user.name;
        
        return (
          <Card 
            key={index} 
            className={`p-4 ${
              isCurrentUser 
                ? 'bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30' 
                : 'bg-white'
            } ${index < 3 ? 'shadow-lg' : 'shadow-sm'}`}
          >
            <div className="flex items-center space-x-4">
              {/* Rank */}
              <div className="flex-shrink-0 w-8 text-center">
                {getRankIcon(participant.rank)}
              </div>
              
              {/* Avatar */}
              <Avatar className={`w-12 h-12 ${index < 3 ? getRankColor(participant.rank) : ''}`}>
                <AvatarImage src="" alt={participant.name} />
                <AvatarFallback className={index < 3 ? 'text-white' : ''}>
                  {participant.avatar}
                </AvatarFallback>
              </Avatar>
              
              {/* User Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <p className={`truncate ${isCurrentUser ? 'text-primary' : ''}`}>
                    {participant.name}
                  </p>
                  {isCurrentUser && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      You
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                  <span className="flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Level {participant.level}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Flame className="w-3 h-3 text-orange-400" />
                    <span>{participant.streak} days</span>
                  </span>
                </div>
              </div>
              
              {/* XP */}
              <div className="text-right">
                <p className="text-sm">{participant.xp.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">XP</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );

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
          <h1 className="text-white">Leaderboard</h1>
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full text-white hover:bg-white/20"
          >
            <Share className="w-5 h-5" />
          </Button>
        </div>

        {/* Current User Rank */}
        <Card className="p-4 bg-white/10 backdrop-blur border-white/20">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">{user.name.charAt(0)}</span>
              </div>
              <div>
                <p>Your Rank</p>
                <p className="text-white/70 text-sm">#6 Globally</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl">{user.xp}</p>
              <p className="text-white/70 text-sm">XP</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Content */}
      <div className="p-6 -mt-6 space-y-6">
        {/* Weekly Challenge */}
        <Card className="p-6 bg-gradient-to-r from-mint-green/10 to-sky-blue/10 border-mint-green/20">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-mint-green" />
                <h3>Weekly Challenge</h3>
              </div>
              <span className="text-xs bg-mint-green/20 text-mint-green px-2 py-1 rounded-full">
                3 days left
              </span>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Complete 5 lessons this week to earn 50 bonus XP!
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-mint-green h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="text-xs text-muted-foreground">3/5</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Leaderboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-muted">
            <TabsTrigger value="global" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Global</span>
            </TabsTrigger>
            <TabsTrigger value="friends" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Friends</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="global" className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3>Top Learners</h3>
              <span className="text-xs text-muted-foreground">Updated hourly</span>
            </div>
            {renderLeaderboard(globalLeaderboard)}
          </TabsContent>
          
          <TabsContent value="friends" className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3>Your Friends</h3>
              <Button 
                size="sm" 
                variant="outline"
                className="rounded-full h-8 px-4 text-xs"
              >
                <Users className="w-3 h-3 mr-1" />
                Add Friends
              </Button>
            </div>
            {renderLeaderboard(friendsLeaderboard)}
          </TabsContent>
        </Tabs>

        {/* Invite Friends */}
        <Card className="p-6 bg-gradient-to-r from-purple/10 to-accent/10 border-purple/20">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple to-accent rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-white" />
            </div>
            
            <div>
              <h3>Invite Friends</h3>
              <p className="text-sm text-muted-foreground">
                Earn 20 XP for each friend who joins through your link!
              </p>
            </div>
            
            <Button className="bg-gradient-to-r from-purple to-accent text-white rounded-2xl px-8">
              Invite Friends → +20 XP
            </Button>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-6">
          <div className="space-y-4">
            <h3>Recent Achievements</h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">Top 10% This Week</p>
                  <p className="text-xs text-muted-foreground">You're in the top performers!</p>
                </div>
                <span className="text-xs text-muted-foreground">2d ago</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Flame className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">10 Day Streak</p>
                  <p className="text-xs text-muted-foreground">Consistent learning pays off!</p>
                </div>
                <span className="text-xs text-muted-foreground">3d ago</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Spacing */}
      <div className="h-20"></div>
    </div>
  );
}