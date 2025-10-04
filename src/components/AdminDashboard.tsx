import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  Plus, 
  Edit, 
  Trash2, 
  TrendingUp,
  Activity,
  Clock,
  Award,
  ArrowLeft
} from 'lucide-react';
import type { Screen } from '../App';

interface AdminDashboardProps {
  onNavigate: (screen: Screen) => void;
}

const mockTopics = [
  { id: 1, title: 'Personal Finance', lessons: 12, students: 234, avgScore: 87 },
  { id: 2, title: 'Python Basics', lessons: 15, students: 189, avgScore: 82 },
  { id: 3, title: 'English Communication', lessons: 10, students: 156, avgScore: 91 },
  { id: 4, title: 'Data Science Intro', lessons: 8, students: 98, avgScore: 79 },
];

const mockLessons = [
  { id: 1, title: 'Budgeting 101', topic: 'Personal Finance', type: 'Text', status: 'Published' },
  { id: 2, title: 'Investment Basics', topic: 'Personal Finance', type: 'Quiz', status: 'Draft' },
  { id: 3, title: 'Variables in Python', topic: 'Python Basics', type: 'Text', status: 'Published' },
  { id: 4, title: 'Functions Quiz', topic: 'Python Basics', type: 'Quiz', status: 'Published' },
];

const mockAnalytics = {
  totalUsers: 1247,
  activeUsers: 892,
  lessonsCompleted: 3456,
  avgQuizScore: 84.2,
  dailyActiveUsers: [45, 52, 48, 61, 55, 67, 59],
  topTopics: ['Personal Finance', 'Python Basics', 'English Communication']
};

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [isAddTopicOpen, setIsAddTopicOpen] = useState(false);
  const [isAddLessonOpen, setIsAddLessonOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-white border-r border-border p-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">📚</span>
            </div>
            <h1 className="text-lg">Learnify Admin</h1>
          </div>
          
          <nav className="space-y-2">
            <Button 
              variant={activeTab === 'overview' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('overview')}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </Button>
            
            <Button 
              variant={activeTab === 'topics' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('topics')}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Topics
            </Button>
            
            <Button 
              variant={activeTab === 'lessons' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('lessons')}
            >
              <Edit className="w-4 h-4 mr-2" />
              Lessons
            </Button>
            
            <Button 
              variant={activeTab === 'analytics' ? 'default' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('analytics')}
            >
              <Activity className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </nav>
          
          <div className="pt-6 border-t border-border">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => onNavigate('home')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to App
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl">Dashboard Overview</h2>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                Quick Actions
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-sky-blue" />
                  </div>
                  <div>
                    <p className="text-2xl">{mockAnalytics.totalUsers.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Total Users</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-mint-green/10 rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-mint-green" />
                  </div>
                  <div>
                    <p className="text-2xl">{mockAnalytics.activeUsers}</p>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-purple" />
                  </div>
                  <div>
                    <p className="text-2xl">{mockAnalytics.lessonsCompleted.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Lessons Completed</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl">{mockAnalytics.avgQuizScore}%</p>
                    <p className="text-sm text-muted-foreground">Avg Quiz Score</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="mb-4">Recent Lessons</h3>
                <div className="space-y-3">
                  {mockLessons.slice(0, 4).map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm">{lesson.title}</p>
                        <p className="text-xs text-muted-foreground">{lesson.topic}</p>
                      </div>
                      <Badge variant={lesson.status === 'Published' ? 'default' : 'secondary'}>
                        {lesson.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="mb-4">Top Performing Topics</h3>
                <div className="space-y-3">
                  {mockTopics.slice(0, 4).map((topic, index) => (
                    <div key={topic.id} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm">{topic.title}</p>
                        <p className="text-xs text-muted-foreground">{topic.students} students</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{topic.avgScore}%</p>
                        <p className="text-xs text-muted-foreground">avg score</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Topics Tab */}
        {activeTab === 'topics' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl">Topics Management</h2>
              <Dialog open={isAddTopicOpen} onOpenChange={setIsAddTopicOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Topic
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Topic</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm">Topic Title</label>
                      <Input placeholder="e.g., Personal Finance" />
                    </div>
                    <div>
                      <label className="text-sm">Description</label>
                      <Textarea placeholder="Brief description of the topic..." />
                    </div>
                    <div>
                      <label className="text-sm">Difficulty Level</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full" onClick={() => setIsAddTopicOpen(false)}>
                      Create Topic
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <div className="p-6">
                <div className="space-y-4">
                  {mockTopics.map((topic) => (
                    <div key={topic.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="space-y-1">
                        <h4>{topic.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{topic.lessons} lessons</span>
                          <span>{topic.students} students</span>
                          <span>{topic.avgScore}% avg score</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Lessons Tab */}
        {activeTab === 'lessons' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl">Lessons Management</h2>
              <Dialog open={isAddLessonOpen} onOpenChange={setIsAddLessonOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Lesson
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Lesson</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm">Lesson Title</label>
                      <Input placeholder="e.g., Budgeting 101" />
                    </div>
                    <div>
                      <label className="text-sm">Topic</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal-finance">Personal Finance</SelectItem>
                          <SelectItem value="python-basics">Python Basics</SelectItem>
                          <SelectItem value="english-communication">English Communication</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm">Content Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="text">Text Lesson</SelectItem>
                          <SelectItem value="quiz">Quiz</SelectItem>
                          <SelectItem value="flashcard">Flashcard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm">Content</label>
                      <Textarea placeholder="Lesson content or questions..." rows={4} />
                    </div>
                    <Button className="w-full" onClick={() => setIsAddLessonOpen(false)}>
                      Create Lesson
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <div className="p-6">
                <div className="space-y-4">
                  {mockLessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <h4>{lesson.title}</h4>
                          <Badge variant="outline">{lesson.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{lesson.topic}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={lesson.status === 'Published' ? 'default' : 'secondary'}>
                          {lesson.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl">Analytics Dashboard</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="mb-4">User Engagement</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Daily Active Users</span>
                    <span className="text-primary">892</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly Active Users</span>
                    <span className="text-primary">1,240</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Active Users</span>
                    <span className="text-primary">1,890</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retention Rate</span>
                    <span className="text-mint-green">73%</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="mb-4">Learning Progress</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Avg. Session Duration</span>
                    <span className="text-primary">12 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completion Rate</span>
                    <span className="text-mint-green">68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quiz Success Rate</span>
                    <span className="text-mint-green">84%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg. Streak Length</span>
                    <span className="text-orange-500">7 days</span>
                  </div>
                </div>
              </Card>
            </div>
            
            <Card className="p-6">
              <h3 className="mb-4">Topic Performance</h3>
              <div className="space-y-3">
                {mockTopics.map((topic) => (
                  <div key={topic.id} className="flex items-center justify-between">
                    <span>{topic.title}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground">{topic.students} students</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${topic.avgScore}%` }}
                        ></div>
                      </div>
                      <span className="text-sm w-12">{topic.avgScore}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}