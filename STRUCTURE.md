# Structure du Projet

Voici l'organisation complète de votre site vitrine.

## 📁 Hiérarchie des fichiers

```
plateforme-web/
│
├── index.html                 # 🎯 Page d'accueil principale
├── blog.html                  # 📝 Page blog (optionnel)
│
├── styles/
│   ├── main.css              # Styles principaux
│   └── responsive.css        # Styles responsive mobile
│
├── scripts/
│   └── main.js               # JavaScript interactif
│
├── images/                   # 📷 (À créer) Vos images/photos
│   ├── photo-profile.jpg
│   ├── projet1.jpg
│   ├── projet2.jpg
│   └── ...
│
├── package.json              # Config npm
├── config.json               # Configuration du site
│
├── README.md                 # Guide principal
├── GUIDE_PERSONNALISATION.md # Comment personnaliser
├── STRUCTURE.md              # Ce fichier
└── .gitignore                # Fichiers à ignorer pour Git

```

## 📄 Fichiers HTML

### index.html (Page d'accueil)
- **Navbar** : Navigation sticky avec logo
- **Hero** : Section d'accueil impactante
- **About** : Présentation personnelle
- **Services** : 6 services avec descriptions
- **Portfolio** : 3 derniers projets
- **Pricing** : 3 formules tarifaires
- **Contact** : Formulaire + infos
- **Footer** : Pied de page avec engagement éthique

### blog.html (Page blog)
- **Blog Hero** : Header de la section blog
- **Articles** : Grille d'articles
- **Newsletter** : Formulaire d'inscription

## 🎨 Fichiers CSS

### styles/main.css
Contient :
- Variables CSS (couleurs, espacements, shadows)
- Reset et éléments communs
- Styles pour chaque section
- Animations et transitions
- Layout desktop (1200px+)

### styles/responsive.css
Contient :
- Adaptations tablette (768px - 1199px)
- Adaptations mobile (< 768px)
- Styles impression (print)
- Accessibilité (prefers-reduced-motion)
- Mode sombre (prefers-color-scheme: dark)

## ⚙️ Fichiers JavaScript

### scripts/main.js
Fonctionnalités :
- **Navigation** : Menu hamburger mobile
- **Formulaire** : Validation et soumission
- **Scroll** : Navigation active au scroll
- **Animations** : Intersection Observer
- **Notifications** : Messages de succès/erreur
- **Notifications** : Smooth scroll

## 📋 Fichiers de Configuration

### package.json
```json
{
  "name": "marketing-digital-ethique",
  "scripts": {
    "dev": "http-server . -c-1 -p 3000"
  }
}
```

### config.json
Contient toutes les données :
- Infos du site
- Services
- Portfolio
- Tarification
- Réseaux sociaux

**Avantage** : Centralise les infos pour futures améliorations.

## 🚀 Démarrage du projet

### Installation locale
```bash
cd /root/plateforme-web
npm install -g http-server  # Une seule fois
npm run dev                  # Ou: http-server . -p 3000
```

Visitez : `http://localhost:3000`

### Déploiement en ligne

**Option 1 : Netlify (Recommandé)**
```bash
npm install -g netlify-cli
netlify deploy
```

**Option 2 : GitHub Pages**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/votreusername/votresite.git
git push -u origin main
```

**Option 3 : Hébergement classique**
- FTP/SFTP vers votre serveur
- Tous les fichiers statiques

## 📱 Responsive Design

Le site s'adapte automatiquement à :

- **Desktop** (1200px+) : Layout complet
- **Tablette** (768px-1199px) : Layout adapté
- **Mobile** (< 768px) : Menu hamburger, une colonne

Tous les éléments sont testés sur ces breakpoints.

## 🔄 Flux de travail

### Modification locale
1. Modifiez `index.html` ou les styles
2. Actualisez le navigateur
3. Les changements sont visibles immédiatement

### Avant publication
1. Testez sur mobile/tablette
2. Vérifiez tous les liens
3. Testez le formulaire (si configuré)
4. Testez la vitesse (Google PageSpeed Insights)

### Après déploiement
1. Testez l'URL en ligne
2. Configurez Google Analytics
3. Configurez les redirects 301 si besoin
4. Surveillez les erreurs (console, logs)

## 📊 Performances

**Optimisations déjà en place :**
- CSS minifiée pour production possible
- JS asynchrone et non-bloquant
- SVG optimisés (plus léger que PNG)
- Lazy loading images si nécessaire
- Mobile-first responsive design

**À ajouter :**
- Compression d'images (Tinypng, ImageOptim)
- CDN pour les assets (Cloudflare, AWS CloudFront)
- Caching navigateur
- Minification des fichiers

## 🔒 Sécurité

**En place :**
- Pas de données sensibles en dur
- Validation du formulaire côté client
- HTTPS recommandé (automatique sur Netlify)

**À configurer :**
- CSP (Content Security Policy)
- CORS si API personnalisée
- WAF (Web Application Firewall) - optionnel

## 🎯 Prochaines étapes

1. **Personnaliser** : Voir GUIDE_PERSONNALISATION.md
2. **Tester localement** : `npm run dev`
3. **Ajouter images** : Créer dossier `images/`
4. **Configurer formulaire** : Formspree ou Netlify
5. **Déployer** : Netlify, GitHub Pages, ou serveur
6. **Promouvoir** : LinkedIn, newsletters, SEO

## 📚 Ressources utiles

- **Design** : https://coolors.co/ (Couleurs)
- **Fonts** : https://fonts.google.com/ (Typographies)
- **Icons** : https://emojipedia.org/ (Emojis)
- **Images** : https://unsplash.com/ (Photos libres)
- **Validation** : https://validator.w3.org/ (HTML/CSS)
- **SEO** : https://pagespeed.web.dev/ (Performance)

---

**Bon développement ! 🚀**
