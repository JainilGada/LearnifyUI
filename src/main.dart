// main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(const LearnifyApp());
}

class LearnifyApp extends StatelessWidget {
  const LearnifyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Learnify.AI',
      theme: ThemeData(
        primaryColor: const Color(0xFF4F9DDE),
        scaffoldBackgroundColor: const Color(0xFFFAFAFA),
        colorScheme: ColorScheme.light(
          primary: const Color(0xFF4F9DDE),
          secondary: const Color(0xFF9B5DE5),
          surface: Colors.white,
          background: const Color(0xFFFAFAFA),
        ),
        fontFamily: 'SF Pro Display',
      ),
      home: const WelcomeScreen(),
    );
  }
}

// models/user.dart
class User {
  final String name;
  final int xp;
  final int streak;
  final int level;
  final List<String> badges;
  final String selectedGoal;
  final List<String> completedTopics;

  User({
    required this.name,
    required this.xp,
    required this.streak,
    required this.level,
    required this.badges,
    required this.selectedGoal,
    required this.completedTopics,
  });
}

// models/lesson.dart
class Lesson {
  final String id;
  final String title;
  final String topic;
  final String content;
  final List<String> steps;
  final int xpReward;

  Lesson({
    required this.id,
    required this.title,
    required this.topic,
    required this.content,
    required this.steps,
    required this.xpReward,
  });
}

// models/quiz.dart
class QuizQuestion {
  final String id;
  final String question;
  final List<String> options;
  final int correctAnswer;
  final int xpReward;

  QuizQuestion({
    required this.id,
    required this.question,
    required this.options,
    required this.correctAnswer,
    required this.xpReward,
  });
}

class Quiz {
  final String id;
  final String lessonId;
  final List<QuizQuestion> questions;

  Quiz({
    required this.id,
    required this.lessonId,
    required this.questions,
  });
}

// screens/welcome_screen.dart
class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Color(0xFF4F9DDE),
              Color(0xFF9B5DE5),
            ],
          ),
        ),
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Logo
                Container(
                  width: 96,
                  height: 96,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(24),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withOpacity(0.2),
                        blurRadius: 20,
                        offset: Offset(0, 10),
                      ),
                    ],
                  ),
                  child: Icon(
                    Icons.psychology,
                    size: 48,
                    color: Color(0xFF9B5DE5),
                  ),
                ),
                SizedBox(height: 32),
                Text(
                  'Learnify.AI',
                  style: TextStyle(
                    fontSize: 32,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
                SizedBox(height: 8),
                Text(
                  'Learn anything, every day!',
                  style: TextStyle(
                    fontSize: 16,
                    color: Colors.white.withOpacity(0.9),
                  ),
                ),
                SizedBox(height: 48),
                
                // Feature Cards
                _buildFeatureCard(
                  icon: Icons.track_changes,
                  title: 'Set Goals',
                  subtitle: 'Track your learning progress',
                  color: Color(0xFF10B981),
                ),
                SizedBox(height: 16),
                _buildFeatureCard(
                  icon: Icons.auto_awesome,
                  title: 'AI Powered',
                  subtitle: 'Personalized learning experience',
                  color: Color(0xFFF59E0B),
                ),
                SizedBox(height: 16),
                _buildFeatureCard(
                  icon: Icons.local_fire_department,
                  title: 'Daily Streaks',
                  subtitle: 'Build consistent learning habits',
                  color: Color(0xFFFF6B6B),
                ),
                SizedBox(height: 48),
                
                // Action Buttons
                ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => ChooseGoalScreen()),
                    );
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.white,
                    foregroundColor: Color(0xFF9B5DE5),
                    minimumSize: Size(double.infinity, 64),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(24),
                    ),
                    elevation: 8,
                  ),
                  child: Text(
                    'Get Started',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
                SizedBox(height: 16),
                OutlinedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => SignInScreen()),
                    );
                  },
                  style: OutlinedButton.styleFrom(
                    foregroundColor: Colors.white,
                    side: BorderSide(color: Colors.white.withOpacity(0.4)),
                    minimumSize: Size(double.infinity, 56),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                    backgroundColor: Colors.white.withOpacity(0.15),
                  ),
                  child: Text(
                    'Sign In',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
                SizedBox(height: 24),
                Text(
                  'Join thousands of learners worldwide',
                  style: TextStyle(
                    color: Colors.white.withOpacity(0.8),
                    fontSize: 14,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildFeatureCard({
    required IconData icon,
    required String title,
    required String subtitle,
    required Color color,
  }) {
    return Container(
      padding: EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.15),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: Colors.white.withOpacity(0.3),
          width: 1,
        ),
      ),
      child: Row(
        children: [
          Container(
            width: 48,
            height: 48,
            decoration: BoxDecoration(
              color: color,
              borderRadius: BorderRadius.circular(12),
            ),
            child: Icon(icon, color: Colors.white, size: 24),
          ),
          SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 16,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                SizedBox(height: 4),
                Text(
                  subtitle,
                  style: TextStyle(
                    color: Colors.white.withOpacity(0.8),
                    fontSize: 14,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// screens/sign_in_screen.dart
class SignInScreen extends StatelessWidget {
  const SignInScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xFFFAFAFA),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black87),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text(
          'Sign In',
          style: TextStyle(color: Colors.black87),
        ),
        centerTitle: true,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              SizedBox(height: 32),
              Text(
                'Welcome back! 👋',
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 8),
              Text(
                'Continue your learning journey',
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.black54,
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 48),
              
              // Google Sign In
              ElevatedButton.icon(
                onPressed: () {
                  Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => HomeDashboard()),
                  );
                },
                icon: Container(
                  width: 20,
                  height: 20,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [Colors.red, Colors.yellow, Colors.blue],
                    ),
                    borderRadius: BorderRadius.circular(2),
                  ),
                ),
                label: Text('Continue with Google'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.white,
                  foregroundColor: Colors.black87,
                  minimumSize: Size(double.infinity, 56),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                    side: BorderSide(color: Colors.black12),
                  ),
                  elevation: 0,
                ),
              ),
              SizedBox(height: 24),
              
              // Divider
              Row(
                children: [
                  Expanded(child: Divider()),
                  Padding(
                    padding: EdgeInsets.symmetric(horizontal: 16),
                    child: Text('or', style: TextStyle(color: Colors.black54)),
                  ),
                  Expanded(child: Divider()),
                ],
              ),
              SizedBox(height: 24),
              
              // Email Input
              TextField(
                decoration: InputDecoration(
                  labelText: 'Email',
                  prefixIcon: Icon(Icons.email_outlined),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                  filled: true,
                  fillColor: Colors.white,
                ),
              ),
              SizedBox(height: 16),
              
              // Password Input
              TextField(
                obscureText: true,
                decoration: InputDecoration(
                  labelText: 'Password',
                  prefixIcon: Icon(Icons.lock_outline),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                  filled: true,
                  fillColor: Colors.white,
                ),
              ),
              SizedBox(height: 24),
              
              // Sign In Button
              ElevatedButton(
                onPressed: () {
                  Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => HomeDashboard()),
                  );
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: Color(0xFF4F9DDE),
                  minimumSize: Size(double.infinity, 56),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
                child: Text(
                  'Sign In',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                ),
              ),
              SizedBox(height: 24),
              
              // Sign Up Link
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('Don\'t have an account? '),
                  TextButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => ChooseGoalScreen()),
                      );
                    },
                    child: Text('Sign up'),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// screens/choose_goal_screen.dart
class ChooseGoalScreen extends StatelessWidget {
  const ChooseGoalScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final goals = [
      {
        'id': 'personal-finance',
        'title': 'Personal Finance',
        'description': 'Master budgeting, saving, and investing',
        'icon': Icons.attach_money,
        'color': Color(0xFF10B981),
        'lessons': '12 lessons',
        'difficulty': 'Beginner',
      },
      {
        'id': 'python-basics',
        'title': 'Python Basics',
        'description': 'Learn programming fundamentals',
        'icon': Icons.code,
        'color': Color(0xFF4F9DDE),
        'lessons': '15 lessons',
        'difficulty': 'Beginner',
      },
      {
        'id': 'english-communication',
        'title': 'English Communication',
        'description': 'Improve speaking and writing skills',
        'icon': Icons.chat_bubble_outline,
        'color': Color(0xFF9B5DE5),
        'lessons': '10 lessons',
        'difficulty': 'Intermediate',
      },
    ];

    return Scaffold(
      backgroundColor: Color(0xFFFAFAFA),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black87),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text(
          'Choose Your Goal',
          style: TextStyle(color: Colors.black87),
        ),
        centerTitle: true,
      ),
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: EdgeInsets.all(24),
              child: Column(
                children: [
                  Text(
                    'What would you like to learn? 🎯',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  SizedBox(height: 8),
                  Text(
                    'Choose a goal to get started with personalized lessons',
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.black54,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            ),
            Expanded(
              child: ListView.builder(
                padding: EdgeInsets.symmetric(horizontal: 24),
                itemCount: goals.length,
                itemBuilder: (context, index) {
                  final goal = goals[index];
                  return Padding(
                    padding: EdgeInsets.only(bottom: 16),
                    child: _buildGoalCard(context, goal),
                  );
                },
              ),
            ),
            Padding(
              padding: EdgeInsets.all(24),
              child: Column(
                children: [
                  ElevatedButton(
                    onPressed: () {
                      Navigator.pushReplacement(
                        context,
                        MaterialPageRoute(builder: (context) => HomeDashboard()),
                      );
                    },
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Color(0xFF4F9DDE),
                      minimumSize: Size(double.infinity, 56),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(16),
                      ),
                    ),
                    child: Text(
                      'Start Learning',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                  SizedBox(height: 16),
                  Text(
                    'You can change your goal anytime in settings',
                    style: TextStyle(
                      fontSize: 12,
                      color: Colors.black54,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  SizedBox(height: 8),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text('🔥', style: TextStyle(fontSize: 12)),
                      SizedBox(width: 4),
                      Text(
                        'Join 50K+ active learners',
                        style: TextStyle(
                          fontSize: 12,
                          color: Colors.black54,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildGoalCard(BuildContext context, Map<String, dynamic> goal) {
    return InkWell(
      onTap: () {
        // Handle goal selection
      },
      child: Container(
        padding: EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(
            color: Colors.black.withOpacity(0.1),
            width: 2,
          ),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.05),
              blurRadius: 10,
              offset: Offset(0, 4),
            ),
          ],
        ),
        child: Row(
          children: [
            Container(
              width: 48,
              height: 48,
              decoration: BoxDecoration(
                color: goal['color'],
                borderRadius: BorderRadius.circular(16),
              ),
              child: Icon(goal['icon'], color: Colors.white, size: 24),
            ),
            SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Expanded(
                        child: Text(
                          goal['title'],
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                      Icon(Icons.arrow_forward, color: Colors.black45),
                    ],
                  ),
                  SizedBox(height: 4),
                  Text(
                    goal['description'],
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.black54,
                    ),
                  ),
                  SizedBox(height: 8),
                  Row(
                    children: [
                      _buildBadge(goal['lessons']),
                      SizedBox(width: 8),
                      _buildBadge(goal['difficulty']),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildBadge(String text) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: Color(0xFFF5F5F5),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Text(
        text,
        style: TextStyle(
          fontSize: 12,
          color: Colors.black54,
        ),
      ),
    );
  }
}

// screens/home_dashboard.dart
class HomeDashboard extends StatelessWidget {
  const HomeDashboard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            // Header with gradient
            Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [Color(0xFF4F9DDE), Color(0xFF9B5DE5)],
                ),
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(24),
                  bottomRight: Radius.circular(24),
                ),
              ),
              child: Padding(
                padding: EdgeInsets.all(24),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Hello, Jainil!',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 24,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            Text(
                              'Ready to learn something new?',
                              style: TextStyle(
                                color: Colors.white.withOpacity(0.9),
                                fontSize: 14,
                              ),
                            ),
                          ],
                        ),
                        CircleAvatar(
                          backgroundColor: Colors.white.withOpacity(0.2),
                          child: Icon(Icons.person, color: Colors.white),
                        ),
                      ],
                    ),
                    SizedBox(height: 24),
                    
                    // Stats Cards
                    Row(
                      children: [
                        _buildStatCard('⭐', '1250', 'Total XP'),
                        SizedBox(width: 12),
                        _buildStatCard('🔥', '12', 'Day Streak'),
                        SizedBox(width: 12),
                        _buildStatCard('🏆', '3', 'Level'),
                      ],
                    ),
                    SizedBox(height: 24),
                    
                    // Progress Bar
                    Column(
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              'Level 3',
                              style: TextStyle(color: Colors.white),
                            ),
                            Text(
                              '250/500 XP',
                              style: TextStyle(color: Colors.white),
                            ),
                          ],
                        ),
                        SizedBox(height: 8),
                        ClipRRect(
                          borderRadius: BorderRadius.circular(8),
                          child: LinearProgressIndicator(
                            value: 0.5,
                            backgroundColor: Colors.white.withOpacity(0.2),
                            valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                            minHeight: 8,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            
            // Main Content
            Expanded(
              child: SingleChildScrollView(
                padding: EdgeInsets.all(24),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Quick Actions
                    Row(
                      children: [
                        Expanded(
                          child: _buildActionButton(
                            context,
                            'Start Lesson',
                            Icons.play_arrow,
                            [Color(0xFF10B981), Color(0xFF4F9DDE)],
                          ),
                        ),
                        SizedBox(width: 16),
                        Expanded(
                          child: _buildActionButton(
                            context,
                            'Daily Quiz',
                            Icons.psychology,
                            [Color(0xFF9B5DE5), Color(0xFFE94CA3)],
                          ),
                        ),
                      ],
                    ),
                    SizedBox(height: 24),
                    
                    // Current Goal Card
                    Text(
                      'Current Goal',
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 12),
                    Container(
                      padding: EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(16),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.05),
                            blurRadius: 10,
                            offset: Offset(0, 4),
                          ),
                        ],
                      ),
                      child: Row(
                        children: [
                          Container(
                            width: 48,
                            height: 48,
                            decoration: BoxDecoration(
                              color: Color(0xFF10B981),
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Icon(Icons.track_changes, color: Colors.white),
                          ),
                          SizedBox(width: 16),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Personal Finance',
                                  style: TextStyle(
                                    fontSize: 16,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                                Text(
                                  'Continue your learning journey',
                                  style: TextStyle(
                                    fontSize: 14,
                                    color: Colors.black54,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Icon(Icons.chevron_right, color: Colors.black45),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        currentIndex: 0,
        selectedItemColor: Color(0xFF4F9DDE),
        unselectedItemColor: Colors.black45,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.emoji_events),
            label: 'Leaderboard',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.grid_view),
            label: 'More',
          ),
        ],
      ),
    );
  }

  Widget _buildStatCard(String emoji, String value, String label) {
    return Expanded(
      child: Container(
        padding: EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white.withOpacity(0.15),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(
            color: Colors.white.withOpacity(0.3),
            width: 1,
          ),
        ),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(emoji, style: TextStyle(fontSize: 20)),
                SizedBox(width: 4),
                Text(
                  value,
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            SizedBox(height: 4),
            Text(
              label,
              style: TextStyle(
                color: Colors.white.withOpacity(0.8),
                fontSize: 12,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildActionButton(
    BuildContext context,
    String label,
    IconData icon,
    List<Color> colors,
  ) {
    return Container(
      height: 80,
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: colors),
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: colors[0].withOpacity(0.3),
            blurRadius: 10,
            offset: Offset(0, 4),
          ),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () {},
          borderRadius: BorderRadius.circular(16),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, color: Colors.white, size: 32),
              SizedBox(height: 4),
              Text(
                label,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 14,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// screens/lesson_screen.dart
class LessonScreen extends StatefulWidget {
  final Lesson lesson;
  
  const LessonScreen({Key? key, required this.lesson}) : super(key: key);

  @override
  State<LessonScreen> createState() => _LessonScreenState();
}

class _LessonScreenState extends State<LessonScreen> {
  double progress = 0.0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xFFFAFAFA),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back, color: Colors.black87),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text(
          widget.lesson.topic,
          style: TextStyle(color: Colors.black87, fontSize: 16),
        ),
        centerTitle: true,
        bottom: PreferredSize(
          preferredSize: Size.fromHeight(60),
          child: Padding(
            padding: EdgeInsets.all(16),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text('Progress', style: TextStyle(fontSize: 14)),
                    Text('${(progress * 100).toInt()}%', style: TextStyle(fontSize: 14)),
                  ],
                ),
                SizedBox(height: 8),
                ClipRRect(
                  borderRadius: BorderRadius.circular(4),
                  child: LinearProgressIndicator(
                    value: progress,
                    backgroundColor: Colors.black.withOpacity(0.1),
                    valueColor: AlwaysStoppedAnimation<Color>(Color(0xFF4F9DDE)),
                    minHeight: 8,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Lesson Title Card
            Container(
              padding: EdgeInsets.all(20),
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [
                    Color(0xFF4F9DDE).withOpacity(0.1),
                    Color(0xFF9B5DE5).withOpacity(0.1),
                  ],
                ),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(
                  color: Color(0xFF4F9DDE).withOpacity(0.2),
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Container(
                        width: 32,
                        height: 32,
                        decoration: BoxDecoration(
                          color: Color(0xFF4F9DDE),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Center(
                          child: Text('📚', style: TextStyle(fontSize: 16)),
                        ),
                      ),
                      SizedBox(width: 12),
                      Expanded(
                        child: Text(
                          widget.lesson.title,
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 16),
                  Row(
                    children: [
                      _buildInfoChip('5 min read'),
                      SizedBox(width: 8),
                      _buildInfoChip('+${widget.lesson.xpReward} XP'),
                    ],
                  ),
                ],
              ),
            ),
            SizedBox(height: 24),
            
            // Lesson Content
            _buildSectionCard(
              'What you\'ll learn',
              widget.lesson.content,
            ),
            SizedBox(height: 24),
            
            // Steps Section
            Text(
              'Steps to Success',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            SizedBox(height: 12),
            ...widget.lesson.steps.asMap().entries.map((entry) {
              return _buildStepItem(entry.key + 1, entry.value);
            }).toList(),
            SizedBox(height: 24),
            
            // Key Takeaway
            Container(
              padding: EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: Color(0xFF10B981).withOpacity(0.1),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(
                  color: Color(0xFF10B981).withOpacity(0.2),
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Text('💡', style: TextStyle(fontSize: 24)),
                      SizedBox(width: 8),
                      Text(
                        'Key Takeaway',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 12),
                  Text(
                    'The 50/30/20 rule is a simple budgeting framework: allocate 50% of your income to needs, 30% to wants, and 20% to savings and debt repayment.',
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.black87,
                      height: 1.5,
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 24),
            
            // Continue Button
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => QuizScreen(
                      quiz: Quiz(
                        id: 'quiz-1',
                        lessonId: widget.lesson.id,
                        questions: [],
                      ),
                    ),
                  ),
                );
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: Color(0xFF4F9DDE),
                minimumSize: Size(double.infinity, 56),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16),
                ),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Continue to Quiz',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  SizedBox(width: 8),
                  Text('🧠', style: TextStyle(fontSize: 18)),
                ],
              ),
            ),
            SizedBox(height: 16),
            Center(
              child: Text(
                'Great job! You\'ve completed this lesson',
                style: TextStyle(
                  fontSize: 12,
                  color: Colors.black54,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildInfoChip(String text) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      decoration: BoxDecoration(
        color: Colors.black.withOpacity(0.05),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Text(
        text,
        style: TextStyle(
          fontSize: 12,
          color: Colors.black54,
        ),
      ),
    );
  }

  Widget _buildSectionCard(String title, String content) {
    return Container(
      padding: EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.05),
            blurRadius: 10,
            offset: Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 12),
          Text(
            content,
            style: TextStyle(
              fontSize: 14,
              color: Colors.black87,
              height: 1.5,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildStepItem(int number, String text) {
    return Padding(
      padding: EdgeInsets.only(bottom: 12),
      child: Container(
        padding: EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(12),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.05),
              blurRadius: 8,
              offset: Offset(0, 2),
            ),
          ],
        ),
        child: Row(
          children: [
            Container(
              width: 32,
              height: 32,
              decoration: BoxDecoration(
                color: Color(0xFF4F9DDE),
                shape: BoxShape.circle,
              ),
              child: Center(
                child: Text(
                  '$number',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 14,
                  ),
                ),
              ),
            ),
            SizedBox(width: 12),
            Expanded(
              child: Text(
                text,
                style: TextStyle(fontSize: 14),
              ),
            ),
            Icon(
              Icons.check_circle,
              color: Color(0xFF10B981),
              size: 20,
            ),
          ],
        ),
      ),
    );
  }
}

// screens/quiz_screen.dart
class QuizScreen extends StatefulWidget {
  final Quiz quiz;
  
  const QuizScreen({Key? key, required this.quiz}) : super(key: key);

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  int currentQuestionIndex = 0;
  int? selectedAnswer;
  bool isAnswered = false;
  bool isCorrect = false;
  int score = 0;

  // Mock questions
  final List<Map<String, dynamic>> questions = [
    {
      'question': 'What percentage should you allocate for needs in the 50/30/20 rule?',
      'options': ['30%', '50%', '20%', '40%'],
      'correctAnswer': 1,
      'xpReward': 10,
    },
    {
      'question': 'Which category should emergency savings fall under?',
      'options': ['Needs', 'Wants', 'Savings', 'Investments'],
      'correctAnswer': 2,
      'xpReward': 10,
    },
  ];

  void handleAnswerSelect(int index) {
    if (isAnswered) return;
    
    setState(() {
      selectedAnswer = index;
      isAnswered = true;
      isCorrect = index == questions[currentQuestionIndex]['correctAnswer'];
      if (isCorrect) {
        score += questions[currentQuestionIndex]['xpReward'] as int;
      }
    });
  }

  void handleNext() {
    if (currentQuestionIndex < questions.length - 1) {
      setState(() {
        currentQuestionIndex++;
        selectedAnswer = null;
        isAnswered = false;
        isCorrect = false;
      });
    } else {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => LessonCompleteScreen(xpEarned: score),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final currentQuestion = questions[currentQuestionIndex];
    final progress = (currentQuestionIndex + 1) / questions.length;

    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Color(0xFF4F9DDE), Color(0xFF9B5DE5)],
          ),
        ),
        child: SafeArea(
          child: Column(
            children: [
              // Header
              Padding(
                padding: EdgeInsets.all(24),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        IconButton(
                          icon: Icon(Icons.close, color: Colors.white),
                          onPressed: () => Navigator.pop(context),
                        ),
                        Text(
                          'Quiz Time',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        SizedBox(width: 48),
                      ],
                    ),
                    SizedBox(height: 16),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          'Question ${currentQuestionIndex + 1} of ${questions.length}',
                          style: TextStyle(color: Colors.white),
                        ),
                        Text(
                          'Score: $score XP',
                          style: TextStyle(color: Colors.white),
                        ),
                      ],
                    ),
                    SizedBox(height: 8),
                    ClipRRect(
                      borderRadius: BorderRadius.circular(8),
                      child: LinearProgressIndicator(
                        value: progress,
                        backgroundColor: Colors.white.withOpacity(0.2),
                        valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                        minHeight: 8,
                      ),
                    ),
                  ],
                ),
              ),
              
              // Question Content
              Expanded(
                child: Container(
                  width: double.infinity,
                  padding: EdgeInsets.all(24),
                  decoration: BoxDecoration(
                    color: Color(0xFFFAFAFA),
                    borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(32),
                      topRight: Radius.circular(32),
                    ),
                  ),
                  child: SingleChildScrollView(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          padding: EdgeInsets.all(24),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(16),
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withOpacity(0.05),
                                blurRadius: 10,
                                offset: Offset(0, 4),
                              ),
                            ],
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                currentQuestion['question'],
                                style: TextStyle(
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold,
                                  height: 1.4,
                                ),
                              ),
                              SizedBox(height: 24),
                              ...List.generate(
                                currentQuestion['options'].length,
                                (index) => _buildOptionButton(
                                  index,
                                  currentQuestion['options'][index],
                                  currentQuestion['correctAnswer'],
                                ),
                              ),
                            ],
                          ),
                        ),
                        
                        if (isAnswered) ...[
                          SizedBox(height: 24),
                          _buildFeedbackCard(),
                          SizedBox(height: 24),
                          ElevatedButton(
                            onPressed: handleNext,
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Color(0xFF4F9DDE),
                              minimumSize: Size(double.infinity, 56),
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(16),
                              ),
                            ),
                            child: Text(
                              currentQuestionIndex < questions.length - 1
                                  ? 'Next Question'
                                  : 'Complete Quiz',
                              style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ),
                        ],
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildOptionButton(int index, String text, int correctAnswer) {
    Color? backgroundColor;
    Color? borderColor;
    
    if (!isAnswered) {
      backgroundColor = selectedAnswer == index ? Color(0xFF4F9DDE) : Colors.white;
      borderColor = selectedAnswer == index ? Color(0xFF4F9DDE) : Colors.black12;
    } else {
      if (index == correctAnswer) {
        backgroundColor = Color(0xFF10B981);
        borderColor = Color(0xFF10B981);
      } else if (index == selectedAnswer && !isCorrect) {
        backgroundColor = Color(0xFFEF4444);
        borderColor = Color(0xFFEF4444);
      } else {
        backgroundColor = Colors.black.withOpacity(0.05);
        borderColor = Colors.black12;
      }
    }

    return Padding(
      padding: EdgeInsets.only(bottom: 12),
      child: InkWell(
        onTap: () => handleAnswerSelect(index),
        borderRadius: BorderRadius.circular(12),
        child: Container(
          padding: EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: backgroundColor,
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: borderColor, width: 2),
          ),
          child: Row(
            children: [
              Container(
                width: 32,
                height: 32,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  border: Border.all(
                    color: !isAnswered || (isAnswered && backgroundColor == Colors.black.withOpacity(0.05))
                        ? Colors.black54
                        : Colors.white,
                    width: 2,
                  ),
                ),
                child: Center(
                  child: Text(
                    String.fromCharCode(65 + index),
                    style: TextStyle(
                      color: !isAnswered || (isAnswered && backgroundColor == Colors.black.withOpacity(0.05))
                          ? Colors.black87
                          : Colors.white,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),
              SizedBox(width: 12),
              Expanded(
                child: Text(
                  text,
                  style: TextStyle(
                    fontSize: 16,
                    color: !isAnswered || (isAnswered && backgroundColor == Colors.black.withOpacity(0.05))
                        ? Colors.black87
                        : Colors.white,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildFeedbackCard() {
    return Container(
      padding: EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: isCorrect
            ? Color(0xFF10B981).withOpacity(0.1)
            : Color(0xFFEF4444).withOpacity(0.1),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: isCorrect ? Color(0xFF10B981) : Color(0xFFEF4444),
          width: 2,
        ),
      ),
      child: Row(
        children: [
          Icon(
            isCorrect ? Icons.check_circle : Icons.cancel,
            color: isCorrect ? Color(0xFF10B981) : Color(0xFFEF4444),
            size: 32,
          ),
          SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  isCorrect ? 'Correct!' : 'Incorrect',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: isCorrect ? Color(0xFF10B981) : Color(0xFFEF4444),
                  ),
                ),
                SizedBox(height: 4),
                Text(
                  isCorrect
                      ? 'Great job! You earned ${questions[currentQuestionIndex]['xpReward']} XP.'
                      : 'The correct answer is ${questions[currentQuestionIndex]['options'][questions[currentQuestionIndex]['correctAnswer']]}.',
                  style: TextStyle(
                    fontSize: 14,
                    color: Colors.black87,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// screens/lesson_complete_screen.dart
class LessonCompleteScreen extends StatelessWidget {
  final int xpEarned;
  
  const LessonCompleteScreen({Key? key, required this.xpEarned}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [
              Color(0xFF4F9DDE).withOpacity(0.1),
              Color(0xFF9B5DE5).withOpacity(0.1),
            ],
          ),
        ),
        child: SafeArea(
          child: Padding(
            padding: EdgeInsets.all(24),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                // Success Icon
                Container(
                  width: 96,
                  height: 96,
                  decoration: BoxDecoration(
                    color: Color(0xFF10B981),
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(
                        color: Color(0xFF10B981).withOpacity(0.3),
                        blurRadius: 20,
                        offset: Offset(0, 10),
                      ),
                    ],
                  ),
                  child: Icon(
                    Icons.emoji_events,
                    size: 48,
                    color: Colors.white,
                  ),
                ),
                SizedBox(height: 32),
                Text(
                  'Congratulations!',
                  style: TextStyle(
                    fontSize: 32,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF10B981),
                  ),
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: 8),
                Text(
                  'You\'ve completed the lesson successfully!',
                  style: TextStyle(
                    fontSize: 16,
                    color: Colors.black54,
                  ),
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: 48),
                
                // XP Earned Card
                Container(
                  width: double.infinity,
                  padding: EdgeInsets.all(24),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [
                        Color(0xFF10B981).withOpacity(0.1),
                        Color(0xFF4F9DDE).withOpacity(0.1),
                      ],
                    ),
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(
                      color: Color(0xFF10B981).withOpacity(0.2),
                    ),
                  ),
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.star, color: Color(0xFFF59E0B), size: 24),
                          SizedBox(width: 8),
                          Text(
                            'XP Earned',
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ],
                      ),
                      SizedBox(height: 12),
                      Text(
                        '+$xpEarned',
                        style: TextStyle(
                          fontSize: 48,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFF10B981),
                        ),
                      ),
                      Text(
                        'Experience Points',
                        style: TextStyle(
                          fontSize: 14,
                          color: Colors.black54,
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 24),
                
                // New Badge Card
                Container(
                  width: double.infinity,
                  padding: EdgeInsets.all(24),
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [
                        Color(0xFFFFF7ED),
                        Color(0xFFFFEDD5),
                      ],
                    ),
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(
                      color: Color(0xFFF59E0B).withOpacity(0.3),
                    ),
                  ),
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.emoji_events, color: Color(0xFFF59E0B), size: 24),
                          SizedBox(width: 8),
                          Text(
                            'New Badge Unlocked!',
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ],
                      ),
                      SizedBox(height: 12),
                      Container(
                        width: 64,
                        height: 64,
                        decoration: BoxDecoration(
                          color: Color(0xFFF59E0B),
                          shape: BoxShape.circle,
                        ),
                        child: Icon(
                          Icons.emoji_events,
                          color: Colors.white,
                          size: 32,
                        ),
                      ),
                      SizedBox(height: 12),
                      Text(
                        'Budget Beginner',
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w600,
                          color: Color(0xFFD97706),
                        ),
                      ),
                      Text(
                        'Keep up the great work!',
                        style: TextStyle(
                          fontSize: 14,
                          color: Colors.black54,
                        ),
                      ),
                    ],
                  ),
                ),
                Spacer(),
                
                // Action Buttons
                ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).popUntil((route) => route.isFirst);
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Color(0xFF10B981),
                    minimumSize: Size(double.infinity, 56),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.home),
                      SizedBox(width: 8),
                      Text(
                        'Back to Dashboard',
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 16),
                OutlinedButton(
                  onPressed: () {},
                  style: OutlinedButton.styleFrom(
                    foregroundColor: Color(0xFF4F9DDE),
                    side: BorderSide(color: Color(0xFF4F9DDE)),
                    minimumSize: Size(double.infinity, 56),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.refresh),
                      SizedBox(width: 8),
                      Text(
                        'Practice More',
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// screens/profile_screen.dart
class ProfileScreen extends StatelessWidget {
  const ProfileScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            // Header with gradient
            Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [Color(0xFF4F9DDE), Color(0xFF9B5DE5)],
                ),
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(24),
                  bottomRight: Radius.circular(24),
                ),
              ),
              child: Padding(
                padding: EdgeInsets.all(24),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        IconButton(
                          icon: Icon(Icons.arrow_back, color: Colors.white),
                          onPressed: () => Navigator.pop(context),
                        ),
                        Text(
                          'Profile',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        IconButton(
                          icon: Icon(Icons.settings, color: Colors.white),
                          onPressed: () {},
                        ),
                      ],
                    ),
                    SizedBox(height: 24),
                    
                    // Profile Avatar
                    CircleAvatar(
                      radius: 50,
                      backgroundColor: Colors.white.withOpacity(0.2),
                      child: Text(
                        'J',
                        style: TextStyle(
                          fontSize: 40,
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                    SizedBox(height: 16),
                    Text(
                      'Jainil',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      'Learning enthusiast',
                      style: TextStyle(
                        color: Colors.white.withOpacity(0.8),
                        fontSize: 14,
                      ),
                    ),
                    SizedBox(height: 24),
                    
                    // Stats
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        _buildProfileStat('⭐', '3', 'Level'),
                        _buildProfileStat('🔥', '12', 'Day Streak'),
                        _buildProfileStat('🏆', '1250', 'Total XP'),
                      ],
                    ),
                  ],
                ),
              ),
            ),
            
            // Content
            Expanded(
              child: SingleChildScrollView(
                padding: EdgeInsets.all(24),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Learning Progress
                    Text(
                      'Learning Progress',
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 12),
                    Container(
                      padding: EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(16),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.05),
                            blurRadius: 10,
                            offset: Offset(0, 4),
                          ),
                        ],
                      ),
                      child: Column(
                        children: [
                          _buildProgressItem(
                            Icons.track_changes,
                            'Current Goal',
                            'Personal Finance',
                            Color(0xFF4F9DDE),
                          ),
                          Divider(height: 32),
                          _buildProgressItem(
                            Icons.book,
                            'Lessons Completed',
                            '1',
                            Color(0xFF10B981),
                          ),
                          Divider(height: 32),
                          _buildProgressItem(
                            Icons.calendar_today,
                            'Days Learning',
                            '24 days',
                            Color(0xFF9B5DE5),
                          ),
                        ],
                      ),
                    ),
                    SizedBox(height: 24),
                    
                    // Achievements
                    Text(
                      'Achievements',
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 12),
                    GridView.count(
                      shrinkWrap: true,
                      physics: NeverScrollableScrollPhysics(),
                      crossAxisCount: 2,
                      mainAxisSpacing: 12,
                      crossAxisSpacing: 12,
                      childAspectRatio: 1.5,
                      children: [
                        _buildAchievementCard('Budget Beginner', '🏆'),
                        _buildAchievementCard('Quick Learner', '⚡'),
                        _buildAchievementCard('Streak Master', '🔥'),
                        _buildAchievementCard('Knowledge Seeker', '📚'),
                      ],
                    ),
                    SizedBox(height: 24),
                    
                    // Settings
                    Text(
                      'Settings',
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 12),
                    Container(
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(16),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.05),
                            blurRadius: 10,
                            offset: Offset(0, 4),
                          ),
                        ],
                      ),
                      child: Column(
                        children: [
                          _buildSettingItem(
                            Icons.notifications,
                            'Push Notifications',
                            'Daily reminders and updates',
                            trailing: Switch(
                              value: true,
                              onChanged: (value) {},
                              activeColor: Color(0xFF4F9DDE),
                            ),
                          ),
                          Divider(height: 1),
                          _buildSettingItem(
                            Icons.alarm,
                            'Study Reminders',
                            '8:00 PM daily',
                            trailing: Switch(
                              value: true,
                              onChanged: (value) {},
                              activeColor: Color(0xFF4F9DDE),
                            ),
                          ),
                          Divider(height: 1),
                          _buildSettingItem(
                            Icons.person,
                            'Account Settings',
                            null,
                            trailing: Icon(Icons.chevron_right, color: Colors.black45),
                          ),
                        ],
                      ),
                    ),
                    SizedBox(height: 24),
                    
                    // This Week's Stats
                    Container(
                      padding: EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [
                            Color(0xFF4F9DDE).withOpacity(0.1),
                            Color(0xFF9B5DE5).withOpacity(0.1),
                          ],
                        ),
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(
                          color: Color(0xFF4F9DDE).withOpacity(0.2),
                        ),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'This Week\'s Stats',
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 16),
                          GridView.count(
                            shrinkWrap: true,
                            physics: NeverScrollableScrollPhysics(),
                            crossAxisCount: 2,
                            mainAxisSpacing: 16,
                            crossAxisSpacing: 16,
                            childAspectRatio: 2,
                            children: [
                              _buildWeekStat('47', 'Minutes learned', Color(0xFF4F9DDE)),
                              _buildWeekStat('85%', 'Quiz accuracy', Color(0xFF9B5DE5)),
                              _buildWeekStat('3', 'Lessons completed', Color(0xFF10B981)),
                              _buildWeekStat('5', 'Days active', Color(0xFFFF6B6B)),
                            ],
                          ),
                        ],
                      ),
                    ),
                    SizedBox(height: 24),
                    
                    // Logout Button
                    Center(
                      child: TextButton.icon(
                        onPressed: () {},
                        icon: Icon(Icons.logout, color: Colors.red),
                        label: Text(
                          'Logout',
                          style: TextStyle(
                            color: Colors.red,
                            fontSize: 16,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ),
                    SizedBox(height: 16),
                    Center(
                      child: Text(
                        'Learnify.AI v1.0.0',
                        style: TextStyle(
                          fontSize: 12,
                          color: Colors.black45,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildProfileStat(String emoji, String value, String label) {
    return Column(
      children: [
        Container(
          width: 48,
          height: 48,
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.2),
            borderRadius: BorderRadius.circular(16),
          ),
          child: Center(
            child: Text(emoji, style: TextStyle(fontSize: 24)),
          ),
        ),
        SizedBox(height: 8),
        Text(
          value,
          style: TextStyle(
            color: Colors.white,
            fontSize: 18,
            fontWeight: FontWeight.bold,
          ),
        ),
        Text(
          label,
          style: TextStyle(
            color: Colors.white.withOpacity(0.7),
            fontSize: 12,
          ),
        ),
      ],
    );
  }

  Widget _buildProgressItem(IconData icon, String title, String value, Color color) {
    return Row(
      children: [
        Icon(icon, color: color, size: 20),
        SizedBox(width: 12),
        Expanded(
          child: Text(
            title,
            style: TextStyle(fontSize: 14),
          ),
        ),
        Text(
          value,
          style: TextStyle(
            fontSize: 14,
            color: Colors.black54,
          ),
        ),
      ],
    );
  }

  Widget _buildAchievementCard(String title, String emoji) {
    return Container(
      padding: EdgeInsets.all(12),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [Color(0xFFFFF7ED), Color(0xFFFFEDD5)],
        ),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: Color(0xFFF59E0B).withOpacity(0.3),
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: 32,
            height: 32,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: [Color(0xFFF59E0B), Color(0xFFFF6B6B)],
              ),
              shape: BoxShape.circle,
            ),
            child: Center(
              child: Text(emoji, style: TextStyle(fontSize: 16)),
            ),
          ),
          SizedBox(height: 8),
          Text(
            title,
            style: TextStyle(
              fontSize: 12,
              fontWeight: FontWeight.w600,
            ),
            textAlign: TextAlign.center,
          ),
          Text(
            'Earned',
            style: TextStyle(
              fontSize: 10,
              color: Colors.black54,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSettingItem(IconData icon, String title, String? subtitle, {required Widget trailing}) {
    return ListTile(
      leading: Icon(icon, color: Colors.black54),
      title: Text(title, style: TextStyle(fontSize: 14)),
      subtitle: subtitle != null ? Text(subtitle, style: TextStyle(fontSize: 12)) : null,
      trailing: trailing,
      contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
    );
  }

  Widget _buildWeekStat(String value, String label, Color color) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          value,
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: color,
          ),
        ),
        SizedBox(height: 4),
        Text(
          label,
          style: TextStyle(
            fontSize: 11,
            color: Colors.black54,
          ),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}

// screens/leaderboard_screen.dart
class LeaderboardScreen extends StatefulWidget {
  const LeaderboardScreen({Key? key}) : super(key: key);

  @override
  State<LeaderboardScreen> createState() => _LeaderboardScreenState();
}

class _LeaderboardScreenState extends State<LeaderboardScreen> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  final List<Map<String, dynamic>> globalLeaderboard = [
    {'rank': 1, 'name': 'Sarah Chen', 'xp': 2890, 'streak': 45, 'avatar': 'S', 'level': 6},
    {'rank': 2, 'name': 'Alex Rodriguez', 'xp': 2650, 'streak': 32, 'avatar': 'A', 'level': 5},
    {'rank': 3, 'name': 'Maya Patel', 'xp': 2340, 'streak': 28, 'avatar': 'M', 'level': 5},
    {'rank': 4, 'name': 'David Kim', 'xp': 2180, 'streak': 22, 'avatar': 'D', 'level': 4},
    {'rank': 5, 'name': 'Emma Wilson', 'xp': 1890, 'streak': 19, 'avatar': 'E', 'level': 4},
    {'rank': 6, 'name': 'Jainil', 'xp': 1250, 'streak': 12, 'avatar': 'J', 'level': 3},
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            // Header
            Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [Color(0xFF4F9DDE), Color(0xFF9B5DE5)],
                ),
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(24),
                  bottomRight: Radius.circular(24),
                ),
              ),
              child: Padding(
                padding: EdgeInsets.all(24),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        IconButton(
                          icon: Icon(Icons.arrow_back, color: Colors.white),
                          onPressed: () => Navigator.pop(context),
                        ),
                        Text(
                          'Leaderboard',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        IconButton(
                          icon: Icon(Icons.share, color: Colors.white),
                          onPressed: () {},
                        ),
                      ],
                    ),
                    SizedBox(height: 16),
                    
                    // Current User Rank
                    Container(
                      padding: EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.15),
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(
                          color: Colors.white.withOpacity(0.2),
                        ),
                      ),
                      child: Row(
                        children: [
                          CircleAvatar(
                            backgroundColor: Colors.white.withOpacity(0.2),
                            child: Text('J', style: TextStyle(color: Colors.white, fontSize: 18)),
                          ),
                          SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Your Rank',
                                  style: TextStyle(color: Colors.white, fontSize: 14),
                                ),
                                Text(
                                  '#6 Globally',
                                  style: TextStyle(
                                    color: Colors.white.withOpacity(0.7),
                                    fontSize: 12,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.end,
                            children: [
                              Text(
                                '1250',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              Text(
                                'XP',
                                style: TextStyle(
                                  color: Colors.white.withOpacity(0.7),
                                  fontSize: 12,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
            
            // Tabs
            Container(
              margin: EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.black.withOpacity(0.05),
                borderRadius: BorderRadius.circular(12),
              ),
              child: TabBar(
                controller: _tabController,
                indicator: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(12),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.05),
                      blurRadius: 8,
                      offset: Offset(0, 2),
                    ),
                  ],
                ),
                labelColor: Colors.black87,
                unselectedLabelColor: Colors.black54,
                tabs: [
                  Tab(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.public, size: 16),
                        SizedBox(width: 8),
                        Text('Global'),
                      ],
                    ),
                  ),
                  Tab(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.people, size: 16),
                        SizedBox(width: 8),
                        Text('Friends'),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            
            // Content
            Expanded(
              child: TabBarView(
                controller: _tabController,
                children: [
                  _buildLeaderboardList(globalLeaderboard),
                  _buildLeaderboardList(globalLeaderboard.sublist(0, 3)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildLeaderboardList(List<Map<String, dynamic>> data) {
    return ListView.builder(
      padding: EdgeInsets.all(16),
      itemCount: data.length,
      itemBuilder: (context, index) {
        final participant = data[index];
        final isCurrentUser = participant['name'] == 'Jainil';
        
        return Padding(
          padding: EdgeInsets.only(bottom: 12),
          child: Container(
            padding: EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: isCurrentUser 
                  ? Color(0xFF4F9DDE).withOpacity(0.1)
                  : Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(
                color: isCurrentUser
                    ? Color(0xFF4F9DDE).withOpacity(0.3)
                    : Colors.black.withOpacity(0.05),
              ),
              boxShadow: [
                if (participant['rank'] <= 3)
                  BoxShadow(
                    color: _getRankColor(participant['rank']).withOpacity(0.2),
                    blurRadius: 10,
                    offset: Offset(0, 4),
                  ),
              ],
            ),
            child: Row(
              children: [
                // Rank
                Container(
                  width: 32,
                  child: _buildRankIcon(participant['rank']),
                ),
                SizedBox(width: 12),
                
                // Avatar
                CircleAvatar(
                  radius: 24,
                  backgroundColor: participant['rank'] <= 3
                      ? _getRankColor(participant['rank'])
                      : Colors.grey,
                  child: Text(
                    participant['avatar'],
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                SizedBox(width: 12),
                
                // User Info
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Flexible(
                            child: Text(
                              participant['name'],
                              style: TextStyle(
                                fontSize: 16,
                                fontWeight: FontWeight.w600,
                                color: isCurrentUser ? Color(0xFF4F9DDE) : Colors.black87,
                              ),
                              overflow: TextOverflow.ellipsis,
                            ),
                          ),
                          if (isCurrentUser) ...[
                            SizedBox(width: 8),
                            Container(
                              padding: EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                              decoration: BoxDecoration(
                                color: Color(0xFF4F9DDE).withOpacity(0.2),
                                borderRadius: BorderRadius.circular(8),
                              ),
                              child: Text(
                                'You',
                                style: TextStyle(
                                  fontSize: 10,
                                  color: Color(0xFF4F9DDE),
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                            ),
                          ],
                        ],
                      ),
                      SizedBox(height: 4),
                      Row(
                        children: [
                          Icon(Icons.star, size: 12, color: Colors.black45),
                          SizedBox(width: 4),
                          Text(
                            'Level ${participant['level']}',
                            style: TextStyle(fontSize: 12, color: Colors.black54),
                          ),
                          SizedBox(width: 12),
                          Icon(Icons.local_fire_department, size: 12, color: Colors.orange),
                          SizedBox(width: 4),
                          Text(
                            '${participant['streak']} days',
                            style: TextStyle(fontSize: 12, color: Colors.black54),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                
                // XP
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Text(
                      '${participant['xp']}',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      'XP',
                      style: TextStyle(
                        fontSize: 12,
                        color: Colors.black54,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _buildRankIcon(int rank) {
    if (rank == 1) {
      return Icon(Icons.emoji_events, color: Color(0xFFF59E0B), size: 24);
    } else if (rank == 2) {
      return Icon(Icons.emoji_events, color: Colors.grey, size: 24);
    } else if (rank == 3) {
      return Icon(Icons.emoji_events, color: Color(0xFFD97706), size: 24);
    }
    return Text(
      '$rank',
      style: TextStyle(
        fontSize: 16,
        color: Colors.black54,
        fontWeight: FontWeight.w600,
      ),
      textAlign: TextAlign.center,
    );
  }

  Color _getRankColor(int rank) {
    switch (rank) {
      case 1:
        return Color(0xFFF59E0B);
      case 2:
        return Colors.grey;
      case 3:
        return Color(0xFFD97706);
      default:
        return Colors.grey;
    }
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }
}

// widgets/custom_button.dart
class CustomButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;
  final Color? backgroundColor;
  final Color? textColor;
  final IconData? icon;
  final bool outlined;
  
  const CustomButton({
    Key? key,
    required this.text,
    required this.onPressed,
    this.backgroundColor,
    this.textColor,
    this.icon,
    this.outlined = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (outlined) {
      return OutlinedButton(
        onPressed: onPressed,
        style: OutlinedButton.styleFrom(
          foregroundColor: backgroundColor ?? Color(0xFF4F9DDE),
          side: BorderSide(color: backgroundColor ?? Color(0xFF4F9DDE)),
          minimumSize: Size(double.infinity, 56),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
          ),
        ),
        child: icon != null
            ? Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(icon),
                  SizedBox(width: 8),
                  Text(text, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600)),
                ],
              )
            : Text(text, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600)),
      );
    }
    
    return ElevatedButton(
      onPressed: onPressed,
      style: ElevatedButton.styleFrom(
        backgroundColor: backgroundColor ?? Color(0xFF4F9DDE),
        foregroundColor: textColor ?? Colors.white,
        minimumSize: Size(double.infinity, 56),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
        ),
      ),
      child: icon != null
          ? Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon),
                SizedBox(width: 8),
                Text(text, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600)),
              ],
            )
          : Text(text, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600)),
    );
  }
}
