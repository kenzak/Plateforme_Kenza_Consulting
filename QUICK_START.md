# ⚡ Quick Start - Démarrer en 5 Minutes

Commencez à utiliser votre site vitrine tout de suite !

## 🎯 Étape 1 : Tester Localement (2 min)

```bash
cd /root/plateforme-web
npm install -g http-server  # Une seule fois
npm run dev
```

Ouvrez : **http://localhost:3000** dans votre navigateur

Vous verrez votre site complet !

## ✏️ Étape 2 : Vos Premières Modifications (2 min)

### Changez votre nom/marque

**Fichier :** `index.html`

Ligne ~25 :
```html
<div class="logo">
    <h1>MD Éthique</h1>  ← Remplacez par VOTRE NOM
</div>
```

**Résultat :** Rechargez la page, votre nom apparaît en haut.

### Changez vos infos de contact

**Fichier :** `index.html`

Cherchez la section `<!-- Contact -->` (vers la fin) et remplacez :
```html
<a href="mailto:contact@mdethique.fr">contact@mdethique.fr</a>
→ Votre email

<a href="tel:+33612345678">+33 6 12 34 56 78</a>
→ Votre téléphone
```

**Résultat :** Les clics sur email/téléphone ouvrent votre vraie adresse.

## 🎨 Étape 3 : Personnalisez votre Logo Visuel (1 min)

Le site a un SVG basique pour l'image d'accueil. Vous pouvez :

**Option A :** Ajouter votre photo
- Créez un dossier `images/`
- Ajoutez votre photo `images/hero.jpg`
- Remplacez le SVG par :
```html
<div class="hero-image">
    <img src="images/hero.jpg" alt="Votre photo">
</div>
```

**Option B :** Garder le SVG (plus rapide)
- Aucun changement nécessaire

## 📝 Les 3 Sections À Personnaliser en Priorité

### 1️⃣ À PROPOS (5 min)

Fichier : `index.html` ~ Ligne 120

```html
<p>Je suis une spécialiste en marketing digital éthique...</p>
```

Remplacez par VOTRE BIO.

### 2️⃣ SERVICES (5 min)

Fichier : `index.html` ~ Ligne 160

Chaque "service-card" = un service.
- Changez l'émoji
- Changez le titre
- Changez la description
- Changez les 3 caractéristiques

Gardez les 6 services ou supprimez ceux que vous ne proposez pas.

### 3️⃣ TARIFS (5 min)

Fichier : `index.html` ~ Ligne 300

Changez les 3 prix et les caractéristiques de chaque formule.

## 🚀 Étape 4 : Déployer en 5 Min

### Option A : Netlify (Recommandé - le plus simple)

1. Allez sur **https://netlify.com**
2. Créez un compte GitHub/Google gratuit
3. Cliquez "Add new site" → "Deploy manually"
4. Glissez-déposez votre dossier `/plateforme-web`

**Voilà ! Votre site est en ligne** avec une URL comme `https://votrenomdusite.netlify.app`

### Option B : GitHub Pages (Gratuit)

1. Créez un compte GitHub
2. Créez un nouveau repo public
3. Poussez vos fichiers
4. Allez dans Settings → Pages → Activez GitHub Pages

### Option C : Hébergement classique

Utilisez FileZilla ou votre FTP préféré pour envoyer les fichiers à votre hébergeur.

## 🔗 Étape 5 : Configurer le Formulaire de Contact

**Important :** Le formulaire ne fonctionne que si vous le configurez !

### Solution Simple : Formspree (Recommandé)

1. Allez sur **https://formspree.io/**
2. Créez un compte gratuit
3. Créez un nouveau formulaire, obtenez votre ID
4. Dans `index.html`, modifiez la balise `<form>` (vers ligne 360) :

**Avant :**
```html
<form class="contact-form" id="contactForm">
```

**Après :**
```html
<form action="https://formspree.io/f/VOTRE_ID_ICI" method="POST" class="contact-form">
```

Remplacez `VOTRE_ID_ICI` par votre vrai ID Formspree.

**Résultat :** Quand quelqu'un clique "Envoyer", vous recevez un email !

## 📱 Vérifiez que ça marche sur Mobile

```bash
# Votre site tourne sur http://localhost:3000
# Depuis votre téléphone sur le même WiFi :
# Allez à : http://[VOTRE_IP]:3000
```

Ou utilisez les outils du navigateur (F12 → Toggle device toolbar).

## ✅ Checklist de Base

- [ ] Remplacé "MD Éthique" par votre nom
- [ ] Mis vos infos de contact (email/tél)
- [ ] Mis à jour votre bio
- [ ] Adapté les services
- [ ] Mis à jour les tarifs
- [ ] Testé sur mobile
- [ ] Déployé sur Netlify/GitHub
- [ ] Configuré le formulaire (optionnel mais recommandé)

## 🆘 Ça ne marche pas ?

**Le site ne s'affiche pas ?**
```bash
# Vérifiez que le serveur tourne
npm run dev
# Allez à http://localhost:3000
```

**Les changements n'apparaissent pas ?**
- Videz le cache (Ctrl+Shift+R ou Cmd+Shift+R)
- Attendez quelques secondes après modification

**Le formulaire n'envoie pas ?**
- Avez-vous configuré Formspree ? (voir Étape 5)
- Vérifiez la console (F12) pour les erreurs

**Erreurs CSS/design bizarre ?**
- Vérifiez que le dossier `styles/` existe
- Les fichiers `main.css` et `responsive.css` sont présents

## 💡 Conseils Rapides

1. **Gardez l'authenticité** : Utilisez vos VRAIS chiffres/projets
2. **Photos professionelles** : Ajoutez une photo de vous si possible
3. **Testez sur mobile** : C'est où sont la plupart des visiteurs
4. **Liens vers vos réseaux** : LinkedIn, Twitter, Instagram
5. **Mises à jour régulières** : Ajoutez des articles au blog

## 📚 Pour Plus de Détails

- **Personnalisation avancée** : Lire `GUIDE_PERSONNALISATION.md`
- **Structure technique** : Lire `STRUCTURE.md`
- **Questions générales** : Lire `README.md`

## 🎉 Vous êtes Prêt !

Votre site vitrine professionnel est prêt.

Prochaines étapes :
1. ✅ Déployer en ligne
2. ✅ Partager votre URL
3. ✅ Continuer à le personnaliser
4. ✅ Ajouter du contenu régulier

**Bonne chance dans votre marketing digital éthique ! 🚀**

---

**Questions ?** Consultez les autres fichiers README ou cherchez en ligne.
Vous avez un projet HTML/CSS/JS simple et moderne = facile à modifier !
