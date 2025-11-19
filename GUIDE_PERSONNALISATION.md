# Guide Complet de Personnalisation

Ce guide vous aide à personnaliser complètement votre site vitrine.

## 🎯 Étapes essentielles

### 1. INFORMATIONS DE CONTACT (10 min)

**Fichier à modifier :** `index.html`

Cherchez la section `<!-- Contact -->` et mettez à jour :

```html
<a href="mailto:contact@mdethique.fr">contact@mdethique.fr</a>
<!-- Remplacez par votre email -->

<a href="tel:+33612345678">+33 6 12 34 56 78</a>
<!-- Remplacez par votre téléphone -->

<p>France (Télétravail possible)</p>
<!-- Remplacez par votre localisation -->
```

Mettez aussi à jour `config.json` :
```json
"email": "votre@email.fr",
"phone": "+33 6 XX XX XX XX",
"location": "Votre Ville/Région"
```

### 2. LOGO ET BRANDING (5 min)

**Fichier :** `index.html` - Section `<nav>`

```html
<div class="logo">
    <h1>MD Éthique</h1>  <!-- Changez ceci -->
</div>
```

Remplacez "MD Éthique" par :
- Votre prénom + nom
- Votre marque personnelle
- Votre initiales stylisées

### 3. SECTION "À PROPOS" (15 min)

**Fichier :** `index.html` - Section `<!-- À Propos -->`

Personnalisez ces éléments :

```html
<h2>Qui Suis-Je ?</h2>

<p>Je suis une spécialiste en marketing digital éthique...</p>
<!-- Remplacez par votre bio -->

<p>Je crois que le marketing durable...</p>
<!-- Remplacez par votre philosophie -->

<ul class="values-list">
    <li>✓ Vos valeurs personnelles</li>
    <!-- Remplacez les 5 valeurs -->
</ul>
```

**Stats à adapter :**
```html
<div class="stat">
    <h3>50+</h3>           <!-- Vos chiffres -->
    <p>Projets réalisés</p>
</div>
```

### 4. SERVICES (20 min)

**Fichier :** `index.html` - Section `<!-- Services -->`

Les 6 services sont représentés par des `service-card`. Modifiez chacun :

```html
<div class="service-card">
    <div class="service-icon">📊</div>  <!-- Changez l'émoji -->
    <h3>Stratégie Digital</h3>           <!-- Changez le titre -->
    <p>Audit complet...</p>              <!-- Changez la description -->
    <ul class="service-features">
        <li>Votre caractéristique 1</li>
        <li>Votre caractéristique 2</li>
        <li>Votre caractéristique 3</li>
    </ul>
</div>
```

**Conseil :** Gardez maximum 6 services. Si vous en avez moins, supprimez les cards.

Les émojis courants :
- 📊 Stratégie/Analytics
- ✍️ Contenu/Écriture
- 📱 Réseaux sociaux
- 🔍 Recherche/SEO
- 💼 Business/Professionnel
- 📧 Email/Communication
- 🎨 Design/Créatif
- 🚀 Lancement/Croissance
- 👥 Communauté/Équipe

### 5. PORTFOLIO / RÉALISATIONS (20 min)

**Fichier :** `index.html` - Section `<!-- Portfolio -->`

Remplacez les 3 projets exemple. Structure d'une item :

```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <!-- Vous pouvez ajouter une vraie image -->
    </div>
    <h3>Nom du Projet</h3>
    <p>Description du projet et résultats mesurables...</p>
    <span class="tag">Catégorie 1</span>
    <span class="tag">Catégorie 2</span>
</div>
```

**Points importants :**
- Mettez les résultats mesurables (+ X%, X clients, etc.)
- Utilisez 2-3 tags pertinents
- Montrez votre valeur ajoutée

**Pour ajouter des images :**
```html
<div class="portfolio-image">
    <img src="images/projet1.jpg" alt="Description">
</div>
```

Créez un dossier `images/` et ajoutez vos images.

### 6. TARIFICATION (15 min)

**Fichier :** `index.html` - Section `<!-- Tarifs -->`

Adaptez les 3 pricing-cards :

```html
<div class="pricing-card">
    <h3>Consultation</h3>
    <p class="price">150€</p>           <!-- Votre prix -->
    <p class="duration">par heure</p>   <!-- Votre période -->
    <ul class="features">
        <li>✓ Votre caractéristique</li>
        <!-- Vos 3 caractéristiques -->
    </ul>
</div>
```

**Conseil pricing :**
- Formule 1 : Horaire/consultation
- Formule 2 : Mensuel (marquer comme "Populaire")
- Formule 3 : Sur devis (pour projets spéciaux)

### 7. RÉSEAUX SOCIAUX (5 min)

**Fichier :** `index.html` - Section `<!-- Contact -->`

```html
<div class="social-link" title="LinkedIn">in</div>
<!-- Changez href="#" par votre lien -->
```

Et mettez à jour `config.json` :
```json
"social": {
    "linkedin": "https://linkedin.com/in/votre-profil",
    "twitter": "https://twitter.com/votre-compte",
    "instagram": "https://instagram.com/votre-compte"
}
```

### 8. FORMULAIRE DE CONTACT (10 min)

**Important :** Le formulaire fonctionne localement mais N'envoie pas vraiment les messages.

Pour activer l'envoi, choisissez une option :

#### Option A : Formspree (Recommandé - Gratuit)

1. Allez sur https://formspree.io/
2. Créez un compte
3. Créez un nouveau formulaire et obtenez votre ID
4. Modifiez dans `index.html` :

```html
<form action="https://formspree.io/f/VotreID" method="POST">
    <!-- Gardez le reste du formulaire identique -->
</form>
```

#### Option B : Netlify Forms (Si vous déployez sur Netlify)

Ajoutez simplement l'attribut `netlify` :

```html
<form class="contact-form" netlify>
    <!-- Vos champs -->
</form>
```

#### Option C : Backend personnalisé

Si vous avez un serveur, créez une API pour traiter les formulaires.

---

## 🎨 PERSONNALISATION VISUELLE

### Couleurs

**Fichier :** `styles/main.css` - Section `:root {}`

```css
:root {
    --color-primary: #2d5a8c;          /* Couleur principale (bleu) */
    --color-primary-dark: #1e3f5a;     /* Plus foncé */
    --color-primary-light: #4a7ba7;    /* Plus clair */
    --color-accent: #e74c3c;           /* Accent (rouge) */
    --color-success: #27ae60;          /* Succès (vert) */
}
```

Pour changer complètement les couleurs, modifiez ces 5 variables.

**Générateurs de palettes :**
- https://coolors.co/
- https://color.adobe.com/

### Typographie

Dans `styles/main.css` :

```css
--font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-heading: 'Georgia', serif;
```

Changez les fonts. Optionsgratuites sur Google Fonts.

### Images

Pour ajouter une photo :

1. Créez un dossier `images/`
2. Placez vos images dedans
3. Dans `index.html`, remplacez les SVG par :

```html
<img src="images/photo.jpg" alt="Description">
```

---

## 📱 SECTIONS OPTIONNELLES À AJOUTER

### Témoignages clients

Copiez cette structure après la section Services :

```html
<section id="temoignages" class="testimonials">
    <div class="container">
        <h2>Avis de Mes Clients</h2>
        <div class="testimonials-grid">
            <div class="testimonial">
                <p class="quote">"Excellent travail, très professionnel !"</p>
                <p class="author">- Jean Dupont, CEO TechCorp</p>
            </div>
            <!-- Ajoutez 3-5 témoignages -->
        </div>
    </div>
</section>
```

Et ajoutez le CSS dans `main.css` :

```css
.testimonials {
    background: var(--color-bg-light);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.testimonial {
    background: white;
    padding: var(--spacing-lg);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
}

.quote {
    font-style: italic;
    color: var(--color-text-light);
    margin-bottom: var(--spacing-md);
}

.author {
    font-weight: 600;
    color: var(--color-primary);
}
```

### Blog / Articles

Créez un dossier `blog/` avec des fichiers HTML séparés.

### FAQ

```html
<section id="faq" class="faq">
    <div class="container">
        <h2>Questions Fréquentes</h2>
        <div class="faq-items">
            <div class="faq-item">
                <h3>Quelle est votre délai de réponse ?</h3>
                <p>Je réponds généralement sous 24h...</p>
            </div>
        </div>
    </div>
</section>
```

---

## ✅ CHECKLIST AVANT PUBLICATION

- [ ] Toutes les infos de contact mises à jour
- [ ] Logo/branding personnalisé
- [ ] Section "À Propos" rewritten
- [ ] Services adaptés à votre offre
- [ ] Portfolio avec vos vrais projets
- [ ] Tarification à jour
- [ ] Réseaux sociaux liés
- [ ] Formulaire de contact configuré
- [ ] Pas de lorem ipsum restant
- [ ] Images/photos appropriées
- [ ] Liens testé sur mobile
- [ ] Google Analytics configuré (optionnel)

---

## 🚀 DÉPLOIEMENT

Après personnalisation :

### Sur Netlify (Recommandé)
1. Connectez votre dossier `/plateforme-web` à Netlify
2. Déploiement automatique après chaque modification

### Sur GitHub Pages
1. Créez un repo sur GitHub
2. Poussez votre code
3. Activez GitHub Pages dans les paramètres

### Domaine personnalisé
Achetez un domaine (.fr, .com, etc.) et configurez-le chez votre hébergeur.

---

## 🆘 AIDE & SUPPORT

**Questions courantes :**

Q: Comment ajouter plus de services ?
R: Dupliquez une `service-card` et modifiez le contenu.

Q: Puis-je changer la mise en page ?
R: Oui, modifiez `styles/main.css`. Basique HTML/CSS.

Q: Comment ajouter des vraies images ?
R: Créez un dossier `images/`, ajoutez vos images, remplacez les SVG.

Q: Mon formulaire ne marche pas ?
R: Configurez-le avec Formspree ou Netlify Forms (voir section ci-dessus).

---

**Bonne chance avec votre site ! 🚀**
