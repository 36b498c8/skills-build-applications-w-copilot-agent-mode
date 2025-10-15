from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from octofit_tracker.models import Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Lösche alle Daten
        get_user_model().objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Beispielteams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Beispielbenutzer
        User = get_user_model()
        ironman = User.objects.create_user(username='ironman', email='ironman@marvel.com', password='pass', team=marvel)
        captain = User.objects.create_user(username='captainamerica', email='cap@marvel.com', password='pass', team=marvel)
        batman = User.objects.create_user(username='batman', email='batman@dc.com', password='pass', team=dc)
        superman = User.objects.create_user(username='superman', email='superman@dc.com', password='pass', team=dc)

        # Beispielaktivitäten
        Activity.objects.create(user=ironman, type='Run', duration=30)
        Activity.objects.create(user=batman, type='Swim', duration=45)

        # Beispiel-Workouts
        Workout.objects.create(name='Pushups', description='Pushups for strength')
        Workout.objects.create(name='Sprints', description='Sprints for speed')

        # Beispiel-Leaderboard
        Leaderboard.objects.create(team=marvel, points=100)
        Leaderboard.objects.create(team=dc, points=90)

        self.stdout.write(self.style.SUCCESS('Testdaten erfolgreich eingefügt!'))
