Au début je pensais qu'il fallait tout faire en une seule éxécution,
- Démarrage  de l'app
- Sonarqube
- SonarScanner

Vous m'avez dit que non donc voici les étapes à suivre.

## 1. Démarrage de l'app et sonarqube
- `docker-compose -f sonarqube-docker-compose.yml up `

## 2. Générer un token pour l'authentification de sonarScanner
- Aller sur http://localhost:9000
- Se connecter avec les identifiants par défaut (admin/admin)
- Aller dans "My Account" > "Security" > "Generate Tokens"
- Donner un nom au token et cliquer sur "Generate"
- Copier le token généré
- Coller le token dans le .env
- Sourcer le .env `source .env` (au cas où)

## 3. Lancer le sonarScanner
- `docker-compose -f scanner-docker-compose.yml up`