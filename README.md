# Portfolio - Ewen Larrieu

Portfolio professionnel de développeur web full stack.

## 🚀 Technologies utilisées

- **Frontend** : HTML5, CSS3, JavaScript
- **Backend** : Node.js, Express
- **Email** : Nodemailer
- **Autres** : CORS, Dotenv

## 📦 Installation locale

```bash
# Cloner le repository
git clone https://github.com/ewenlarrieu/Portfolio.git
cd Portfolio

# Installer les dépendances
npm install

# Créer un fichier .env avec les variables suivantes :
# EMAIL_USER=votre-email@gmail.com
# EMAIL_PASS=votre-mot-de-passe-application
# EMAIL_TO=email-destinataire@gmail.com
# PORT=3000

# Lancer le serveur
npm start
```

Le site sera accessible sur `http://localhost:3000`

## 🌐 Déploiement sur Render

### Étape 1 : Préparer le repository

- Assurez-vous que `.env` est dans `.gitignore` ✅
- Commit et push vers GitHub

```bash
git add .
git commit -m "Préparation pour déploiement"
git push origin main
```

### Étape 2 : Créer un service sur Render

1. Aller sur [render.com](https://render.com) et se connecter avec GitHub
2. Cliquer sur **"New"** → **"Web Service"**
3. Sélectionner le repository **Portfolio**
4. Configuration :
   - **Name** : `portfolio-ewen` (ou autre nom)
   - **Region** : Europe (Frankfurt) ou US
   - **Branch** : `main` ou `master`
   - **Build Command** : `npm install`
   - **Start Command** : `npm start`
   - **Instance Type** : Free

### Étape 3 : Configurer les variables d'environnement

Dans l'onglet **Environment**, ajouter :

| Variable     | Valeur                                            |
| ------------ | ------------------------------------------------- |
| `EMAIL_USER` | `ewenlarrieu200515@gmail.com`                     |
| `EMAIL_PASS` | `bkkt ucqo iqsw eipu`                             |
| `EMAIL_TO`   | `ewenlarrieu200515@gmail.com`                     |
| `PORT`       | (laisser vide, Render le définit automatiquement) |

### Étape 4 : Déployer

Cliquer sur **"Create Web Service"** et attendre le déploiement (2-3 minutes).

Render fournira une URL type : `https://portfolio-ewen.onrender.com`

## 📧 Configuration Gmail

Pour que le formulaire de contact fonctionne, il faut générer un **mot de passe d'application Gmail** :

1. Aller sur [myaccount.google.com](https://myaccount.google.com)
2. Sécurité → Validation en deux étapes (activer)
3. Mots de passe d'application → Générer
4. Utiliser ce mot de passe dans `EMAIL_PASS`

## 🔧 Structure du projet

```
Portfolio/
├── Components/       # Composants réutilisables (navbar, footer)
├── Home/            # Page d'accueil
├── Projects/        # Page projets
├── Contact/         # Page contact + formulaire
├── server.js        # Serveur Express
├── package.json     # Dépendances
└── .env            # Variables d'environnement (local uniquement)
```

## 📝 Licence

ISC - Ewen Larrieu © 2025
