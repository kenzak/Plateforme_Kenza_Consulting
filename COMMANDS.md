# 💻 Commandes Utiles

Référence rapide des commandes pour gérer votre site.

## 🚀 Développement Local

### Démarrer le serveur
```bash
npm run dev
# Ouvrir : http://localhost:3000
```

### Arrêter le serveur
```bash
# Ctrl + C dans le terminal
```

### Installer dépendances (une seule fois)
```bash
npm install -g http-server
```

## 🔍 Tester le Site

### Sur votre machine
```bash
# Depuis un navigateur
http://localhost:3000

# Depuis la console
open http://localhost:3000    # macOS
start http://localhost:3000   # Windows
xdg-open http://localhost:3000 # Linux
```

### Sur votre téléphone (WiFi)
```bash
# 1. Trouvez votre IP locale
ipconfig getifaddr en0  # macOS
ipconfig                # Windows
hostname -I             # Linux

# 2. Accédez depuis téléphone
http://[VOTRE_IP]:3000
```

## 📁 Gestion Fichiers

### Créer un dossier
```bash
mkdir images
mkdir blog
```

### Lister les fichiers
```bash
# Tous les fichiers
ls -la

# Seulement les fichiers modifiés récemment
ls -lt

# Structure arborescente
tree          # Si installé
find . -type f | sort
```

### Taille des fichiers
```bash
# Taille d'un fichier
du -h index.html

# Taille d'un dossier
du -sh styles/

# Taille totale du site
du -sh .
```

## 🔧 Git (Optionnel)

### Initialiser Git
```bash
git init
git add .
git commit -m "Initial commit"
```

### Créer un repo GitHub
```bash
git remote add origin https://github.com/votreusername/votresite.git
git branch -M main
git push -u origin main
```

### Mettre à jour
```bash
git add .
git commit -m "Description des changements"
git push
```

### Voir l'état
```bash
git status
git log --oneline
```

## 🚀 Déploiement

### Netlify Deploy
```bash
npm install -g netlify-cli
cd /root/plateforme-web
netlify deploy --prod
```

### Netlify Connect (Recommandé)
```bash
# Via interface web
# 1. github.com → New repo
# 2. netlify.app → Connect to Git
# 3. Auto-deploy activé
```

## 📦 Optimisation

### Compresser images
```bash
# Avec ImageMagick (si installé)
convert image.jpg -quality 85 image-small.jpg

# Avec ffmpeg (si installé)
ffmpeg -i image.jpg -q:v 2 image-optimized.jpg
```

### Vérifier taille HTML
```bash
wc -l index.html        # Nombre de lignes
du -h index.html        # Taille du fichier
gzip -9 < index.html | wc -c  # Taille compressée
```

## 🔍 Vérification & Validation

### Valider HTML
```bash
# Via W3C (en ligne)
# https://validator.w3.org/

# Via npm (si installé)
npm install -g html-validate
html-validate index.html
```

### Vérifier liens
```bash
# Chercher tous les liens
grep -o 'href="[^"]*"' index.html

# Vérifier un lien spécifique
curl -I https://exemple.com
```

### SEO basique
```bash
# Compter les titres
grep -o '<h[1-6]' index.html | sort | uniq -c

# Vérifier les images sans alt
grep '<img' index.html | grep -v 'alt='

# Chercher des mots clés
grep -c "marketing" index.html
```

## 📊 Statistiques

### Lignes de code
```bash
# Par fichier
wc -l *.html *.css *.js

# Total
find . -name '*.html' -o -name '*.css' -o -name '*.js' | xargs wc -l

# Par type
find . -name '*.html' | xargs wc -l  # HTML
find . -name '*.css' | xargs wc -l   # CSS
find . -name '*.js' | xargs wc -l    # JavaScript
```

### Taille totale
```bash
# Taille de tout le projet
du -sh .

# Avec détail
du -h .

# Fichiers les plus lourds
find . -type f -exec ls -lh {} + | sort -k5 -h -r | head -10
```

## 🧹 Nettoyage

### Supprimer fichiers temporaires
```bash
# Fichiers macOS
find . -name '.DS_Store' -delete

# Fichiers Windows
find . -name 'Thumbs.db' -delete

# Fichiers éditeur
find . -name '*.swp' -delete
find . -name '*~' -delete
```

### Nettoyer les fichiers
```bash
# Supprimer un fichier
rm index.html

# Supprimer un dossier
rm -r images/

# Supprimer avec confirmation
rm -i index.html
```

## 🌐 Serveur Web

### Serveurs alternatifs
```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000

# Node.js (avec Express)
npx http-server . -p 3000

# Ruby
ruby -run -ehttpd . -p3000
```

### Accéder au serveur
```bash
# En ligne
curl http://localhost:3000/index.html

# Télécharger une page
wget http://localhost:3000/index.html
```

## 📧 Email & Formulaire

### Tester le formulaire
```bash
# Envoyer un test avec curl
curl -X POST https://formspree.io/f/VOTRE_ID \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","message":"Test"}'
```

## 🎯 Bash Aliases (Optionnel)

Ajoutez à votre `~/.bashrc` ou `~/.zshrc` :

```bash
# Démarrer le serveur
alias devserver="npm run dev"

# Voir la structure
alias tree="find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'"

# Taille du projet
alias projsize="du -sh . && echo '---' && find . -type f | wc -l && echo 'files'"

# Nettoyer
alias cleanup="find . -name '.DS_Store' -delete && find . -name 'Thumbs.db' -delete"

# Git rapide
alias gs="git status"
alias ga="git add ."
alias gc="git commit -m"
alias gp="git push"
```

Puis utilisez :
```bash
devserver      # Démarre le serveur
projsize       # Infos du projet
cleanup        # Nettoie les fichiers temporaires
```

## 📋 Cheat Sheet Rapide

| Tâche | Commande |
|-------|----------|
| Démarrer | `npm run dev` |
| Tester | `http://localhost:3000` |
| Créer dossier | `mkdir nom` |
| Lister fichiers | `ls -la` |
| Voir taille | `du -h .` |
| Compter lignes | `wc -l *.html` |
| Chercher texte | `grep "texte" *.html` |
| Git status | `git status` |
| Git commit | `git commit -m "msg"` |
| Git push | `git push` |
| Deploy Netlify | `netlify deploy --prod` |

## 🆘 Troubleshooting Commandes

### "Commande non trouvée"
```bash
# Vérifier si npm est installé
npm --version

# Vérifier si http-server est installé
which http-server

# Installer http-server
npm install -g http-server
```

### "Port déjà utilisé"
```bash
# Vérifier quel process utilise le port 3000
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Arrêter le process
kill -9 [PID]  # macOS/Linux
taskkill /PID [PID] /F  # Windows

# Utiliser un autre port
http-server . -p 3001
```

### "Permission refusée"
```bash
# Pour npm -g
npm install -g --force http-server

# Pour fichiers
chmod +x script.sh  # Donner permission exécution
chmod 644 index.html  # Donner permission lecture
```

## 📚 Ressources Additionnelles

- **Bash cheat sheet** : https://devhints.io/bash
- **Git cheat sheet** : https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf
- **Linux commands** : https://linux.die.net/man/

---

**Ces commandes couvrent 99% de vos besoins.**

Bon développement ! 🚀
