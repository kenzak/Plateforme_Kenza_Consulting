# Site Vitrine - Marketing Digital Éthique

Bienvenue ! Voici votre site vitrine professionnel pour présenter vos services en marketing digital éthique.

## 📋 Contenu du site

Le site inclut les sections suivantes :

1. **Accueil (Hero)** - Présentation impactante de votre offre
2. **À Propos** - Qui êtes-vous et vos principes
3. **Services** - Les 6 services proposés
4. **Portfolio** - Vos 3 derniers projets/réalisations
5. **Tarifs** - Trois formules de tarification
6. **Contact** - Formulaire et informations de contact

## 🎨 Personnalisation

### Informations de contact
Modifiez ces éléments dans `index.html` (section Contact) :
- Email : `contact@mdethique.fr`
- Téléphone : `+33 6 12 34 56 78`
- Localisation : `France (Télétravail possible)`

### Logo et identité
Dans la section navbar, changez "MD Éthique" par votre nom ou marque.

### Services
Modifiez les 6 service-cards dans la section Services. Chaque service inclut :
- Un émoji/icône
- Titre
- Description
- Liste de 3 caractéristiques

### Portfolio
Remplacez les 3 projets exemple par vos véritables réalisations. Incluez :
- Titre du projet
- Brève description des résultats
- 2 tags (catégories)

### Tarification
Adaptez les prix dans les pricing-cards. Les trois formules proposées :
1. Consultation horaire
2. Partenariat mensuel (formule populaire)
3. Projet spécifique sur devis

### Témoignages (optionnel)
Vous pouvez ajouter une section témoignages clients en dupliquant la structure des autres sections.

## 🚀 Installation et déploiement

### Localement
```bash
# Installer http-server
npm install -g http-server

# Lancer le serveur local
npm run dev
# ou
http-server . -c-1 -p 3000
```

Visitez `http://localhost:3000`

### En ligne
Plusieurs options gratuites/payantes :

**Gratuit :**
- **Netlify** : Connectez votre dossier, déploiement automatique
- **GitHub Pages** : Poussez votre code sur GitHub
- **Vercel** : Déploiement simple et rapide

**Payant :**
- **Hébergement classique** : OVH, Hostinger, etc.
- **Domaine personnalisé** : Nécessaire pour le professionnel

## 📱 Responsive Design

Le site est entièrement responsive :
- Desktop (1200px+)
- Tablette (768px - 1199px)
- Mobile (< 768px)

## 🎯 Points clés du design

### Professionnel et moderne
- Palette de couleurs bleue (confiance, stabilité)
- Typographie élégante
- Espacement équilibré

### Éthique et transparent
- Pas de pop-ups agressifs
- Pas de promesses irréalistes
- Tarification transparente
- Section "Engagement éthique" en footer

### Pas de "communautarisme"
- Design neutre et universel
- Accent sur les services et la compétence
- Pas de symboles religieux ou cultuels
- Langage inclusif et professionnel

## 🔧 Fichiers importants

```
/root/plateforme-web/
├── index.html           # Page principale
├── styles/
│   ├── main.css        # Styles principaux
│   └── responsive.css  # Styles responsive
├── scripts/
│   └── main.js         # JavaScript interactif
├── package.json        # Configuration npm
└── README.md          # Ce fichier
```

## ⚙️ Fonctionnalités JavaScript

- Navigation responsive avec menu hamburger
- Formulaire de contact avec validation
- Menu actif au scroll
- Animations à l'apparition
- Notifications de succès/erreur
- Scroll smooth

## 🌐 SEO et métadonnées

Les balises meta incluent :
- Description pour Google
- Viewport pour mobile
- Titre optimisé

À améliorer :
- Ajouter des backlinks de qualité
- Créer du contenu régulier (blog)
- Optimiser pour les mots-clés locaux

## 💡 Conseils pour réussir

1. **Mettez à jour vos informations** : Utilisez vos vrais projets, chiffres, prix
2. **Ajoutez une photo professionnelle** : Dans "À Propos" (à mettre en place)
3. **Collectez des témoignages** : De vos clients réels
4. **Créez du contenu régulier** : Blog posts, articles LinkedIn
5. **Analyser le trafic** : Avec Google Analytics
6. **Réseaux sociaux** : Linkez à votre LinkedIn, Twitter, Instagram
7. **Email professionnel** : Utilisez un domaine personnalisé

## 🔐 Sécurité

- Le formulaire affiche un message de succès en local
- En production, utilisez un service comme Formspree, Netlify Forms, ou votre propre backend

## 📧 Intégration formulaire (important)

Le formulaire fonctionne localement mais affiche juste une notification.

**Pour fonctionner vraiment**, utilisez :

### Option 1 : Formspree (gratuit)
```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
  <!-- vos champs -->
</form>
```

### Option 2 : Netlify Forms (gratuit sur Netlify)
Ajoutez simplement `netlify` à votre form.

### Option 3 : Backend personnalisé
Créez votre propre API pour gérer les soumissions.

## 📊 Statistiques

Champs dans "À Propos" que vous pouvez personnaliser :
- "50+ Projets réalisés"
- "5+ Années d'expérience"
- "98% Clients satisfaits"

## 🎯 Objectifs du site

- Présenter votre expertise
- Générer des leads qualifiés
- Établir la confiance
- Montrer votre professionnalisme
- Faciliter le contact

---

**Créé avec ❤️ pour votre succès professionnel**

Besoin d'aide ? N'hésitez pas à demander des modifications !
