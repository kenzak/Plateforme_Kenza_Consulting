# 📷 Comment Ajouter Vos Images

Guide complet pour ajouter des images professionnelles à votre site.

## 📁 Créer le Dossier Images

```bash
# Dans le dossier plateforme-web
mkdir images
```

Vous devriez avoir :
```
plateforme-web/
├── index.html
├── images/          ← Nouveau dossier
│   ├── photo-profil.jpg
│   ├── projet1.jpg
│   └── ...
├── styles/
├── scripts/
└── ...
```

## 🖼️ Ajouter une Photo de Profil

### Dans la Section "À Propos"

**Fichier :** `index.html` ~ Ligne 130-150

**Avant :**
```html
<div class="about-text">
    <p>Je suis une spécialiste...</p>
    <!-- Pas de photo ici -->
</div>
```

**Après :**
```html
<div class="about-text">
    <img src="images/photo-profil.jpg" alt="Photo de profil" class="profile-photo">
    <p>Je suis une spécialiste...</p>
</div>
```

### Ajouter le CSS pour la photo

**Fichier :** `styles/main.css` ~ À ajouter après `.about-text {`

```css
.profile-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: var(--spacing-lg);
    box-shadow: var(--shadow-lg);
    border: 3px solid var(--color-primary);
}
```

### Résultat
Votre photo s'affiche en cercle avec une ombre professionnelle.

## 🎯 Ajouter des Photos aux Projets Portfolio

**Fichier :** `index.html` ~ Ligne 250-280 (Section Portfolio)

**Avant :**
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <svg viewBox="0 0 300 200">
            <!-- SVG placeholder -->
        </svg>
    </div>
    <h3>Rebranding Entreprise Tech</h3>
    ...
</div>
```

**Après :**
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <img src="images/projet1.jpg" alt="Rebranding Entreprise Tech">
    </div>
    <h3>Rebranding Entreprise Tech</h3>
    ...
</div>
```

Faites la même chose pour les 3 projets.

## 🖼️ Ajouter une Image Hero (Section Accueil)

**Fichier :** `index.html` ~ Ligne 105-115

**Avant :**
```html
<div class="hero-image">
    <svg viewBox="0 0 500 500">
        <!-- SVG placeholder -->
    </svg>
</div>
```

**Après :**
```html
<div class="hero-image">
    <img src="images/hero.jpg" alt="Hero image" style="width: 100%; border-radius: 8px;">
</div>
```

## 📸 Conseils pour les Photos

### Taille des Fichiers
- **Hero image** : 800x600 px minimum
- **Portfolio items** : 600x400 px minimum
- **Profile photo** : 400x400 px minimum

**Optimisez vos images :**
- Utilisez https://tinypng.com/ pour compresser
- Format : JPEG pour photos, PNG pour logos
- Taille finale : < 200KB par image

### Qualité
- Photos bien éclairées
- Fond neutre ou légèrement flou
- Couleurs cohérentes avec votre site
- Pas de watermarks visibles

### Format
- Portrait pour photo profil (4/3 ou carré)
- Paysage pour projets/hero (16/9)
- Tous les formats modernes (JPEG, PNG, WebP)

## 🎨 Utiliser des Images Gratuites

Si vous n'avez pas de photos professionnelles :

- **Unsplash** : https://unsplash.com/ (Libre de droits)
- **Pexels** : https://www.pexels.com/ (Libre de droits)
- **Pixabay** : https://pixabay.com/ (Libre de droits)
- **Burst** : https://burst.shopify.com/ (Business-focused)

Cherchez : "Marketing", "Business woman", "Desk", "Office", etc.

## 📱 Adapter les Images pour Mobile

Les images s'adaptent automatiquement grâce au CSS responsive.

**Pour tester :**
```bash
npm run dev
# Ouvrez http://localhost:3000 sur votre téléphone
# Vérifiez que les images s'affichent bien
```

## ✅ Checklist d'Images

- [ ] Dossier `images/` créé
- [ ] Photos de bonne qualité ajoutées
- [ ] Fichiers compressés (< 200KB)
- [ ] Noms de fichiers clairs (pas d'espaces)
- [ ] `alt` text descriptif pour l'accessibilité
- [ ] Testé sur mobile et desktop

## 🚨 Problèmes Courants

### "L'image ne s'affiche pas"
- Vérifiez que le chemin est correct : `images/nom-fichier.jpg`
- Vérifiez la casse : `Images/` ≠ `images/`
- Vérifiez que le fichier existe dans le dossier

### "L'image est déformée"
- Utilisez `object-fit: cover;` pour les carrés
- Utilisez `object-fit: contain;` pour les ratios spéciaux
- Redimensionnez votre image à la bonne taille

### "L'image est trop lourde"
- Compressez avec TinyPNG
- Réduisez la résolution
- Utilisez WebP au lieu de JPEG

## 🎬 Ajouter des Vidéos (Optionnel)

Pour un portfolio, vous pouvez ajouter une vidéo YouTube :

```html
<div class="portfolio-image">
    <iframe width="100%" height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="Titre" frameborder="0">
    </iframe>
</div>
```

Remplacez `VIDEO_ID` par l'ID de votre vidéo YouTube.

## 💾 Organiser vos Images

Conseil d'organisation :

```
images/
├── profile/
│   └── photo-profil.jpg
├── portfolio/
│   ├── projet1.jpg
│   ├── projet2.jpg
│   └── projet3.jpg
├── hero/
│   └── hero.jpg
└── services/
    ├── service1.jpg
    └── ...
```

Puis utilisez : `src="images/profile/photo-profil.jpg"`

## 🔄 Remplacer des Images Existantes

Pour changer une image :
1. Gardez le même nom de fichier
2. Remplacez le fichier dans le dossier `images/`
3. Videz le cache navigateur (Ctrl+Shift+R)

## 🌐 Hébergement des Images

Quand vous déployez sur Netlify/GitHub :
- Toutes les images du dossier `images/` sont envoyées automatiquement
- Aucune configuration spéciale nécessaire

## ⚡ Performance

**Pour garder votre site rapide :**
- Max 5-10 images sur la page d'accueil
- Utilisez des formats modernes (WebP)
- Activez la compression côté serveur
- Utilisez un CDN (Cloudflare, Netlify)

---

**Vous êtes prêt à ajouter vos images ! 🎨**

Questions ? Consultez le GUIDE_PERSONNALISATION.md pour plus de détails.
