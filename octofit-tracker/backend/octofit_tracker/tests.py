from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelTests(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name='TestTeam')
        self.assertEqual(team.name, 'TestTeam')

    def test_user_creation(self):
        team = Team.objects.create(name='TestTeam')
        user = User.objects.create_user(username='testuser', email='test@example.com', password='pass', team=team)
        self.assertEqual(user.email, 'test@example.com')
        self.assertEqual(user.team, team)

    def test_activity_creation(self):
        team = Team.objects.create(name='TestTeam')
        user = User.objects.create_user(username='testuser', email='test@example.com', password='pass', team=team)
        activity = Activity.objects.create(user=user, type='Run', duration=30)
        self.assertEqual(activity.type, 'Run')
        self.assertEqual(activity.duration, 30)

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Pushups', description='Pushups for strength')
        self.assertEqual(workout.name, 'Pushups')

    def test_leaderboard_creation(self):
        team = Team.objects.create(name='TestTeam')
        leaderboard = Leaderboard.objects.create(team=team, points=100)
        self.assertEqual(leaderboard.points, 100)
