# Association Vémianou - Site Web

Site web officiel de l'Association Vémianou, une organisation togolaise engagée pour la paix, l'unité et le vivre-ensemble au Togo.

## 🎯 À propos

L'Association Vémianou œuvre pour la promotion de la paix, de l'unité et du vivre-ensemble au Togo. À travers des actions de sensibilisation, d'éducation et de solidarité, elle s'engage à renforcer les liens entre les citoyens et à bâtir une société plus apaisée.

## 🛠️ Technologies

- **[Nuxt 4](https://nuxt.com/)** - Framework Vue.js
- **[Vue 3](https://vuejs.org/)** - Framework JavaScript
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS
- **[Strapi](https://strapi.io/)** - CMS Headless (via @nuxtjs/strapi)
- **[Nuxt Icon](https://github.com/nuxt/icon)** - Gestion des icônes

## 📋 Prérequis

- Node.js 18+ ou supérieur
- pnpm (recommandé), npm, yarn ou bun
- Accès à une instance Strapi pour le contenu

## 🚀 Installation

1. **Cloner le repository**
   ```bash
   git clone <repository-url>
   cd vemianou
   ```

2. **Installer les dépendances**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Configurer les variables d'environnement**
   
   Créez un fichier `.env` à la racine du projet :
   ```env
   NUXT_PUBLIC_STRAPI_URL=https://votre-strapi-url.com
   NUXT_PUBLIC_SITE_URL=https://vemianou.org
   ```

4. **Démarrer le serveur de développement**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

   Le site sera accessible sur `http://localhost:3000`

## 📜 Scripts disponibles

```bash
# Développement
pnpm dev              # Démarrer le serveur de développement

# Production
pnpm build            # Construire l'application pour la production
pnpm generate         # Générer une version statique
pnpm preview          # Prévisualiser la build de production

# Qualité de code
pnpm lint             # Vérifier le code avec ESLint
pnpm lint:fix         # Corriger automatiquement les erreurs ESLint
```

## 📁 Structure du projet

```
vemianou/
├── app/
│   ├── assets/          # Assets statiques (CSS, images)
│   ├── components/      # Composants Vue réutilisables
│   │   ├── articles/    # Composants liés aux articles
│   │   ├── contact/     # Composants de contact
│   │   ├── gallery/     # Composants de galerie
│   │   ├── landing/     # Composants de la page d'accueil
│   │   └── shared/      # Composants partagés (Header, Footer)
│   ├── composables/     # Composable Vue (useSeo, etc.)
│   ├── layouts/         # Layouts de pages
│   ├── pages/           # Pages de l'application
│   ├── plugins/         # Plugins Nuxt
│   └── types/           # Types TypeScript
├── public/              # Fichiers publics (images, robots.txt)
├── server/              # Routes serveur (API, sitemap)
│   └── routes/          # Routes API
├── nuxt.config.ts       # Configuration Nuxt
├── tailwind.config.js   # Configuration Tailwind
└── tsconfig.json        # Configuration TypeScript
```

## ⚙️ Configuration

### Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| `NUXT_PUBLIC_STRAPI_URL` | URL de l'instance Strapi | `https://localhost:1337` |
| `NUXT_PUBLIC_SITE_URL` | URL du site en production | `https://vemianou.org` |

### Configuration Strapi

Le projet est configuré pour utiliser Strapi v4. Assurez-vous que votre instance Strapi expose les collections suivantes :
- `articles` - Articles de blog
- `galleries` - Images de la galerie

## 🎨 Fonctionnalités

### SEO
- ✅ Meta tags optimisés (Open Graph, Twitter Cards)
- ✅ Données structurées JSON-LD (Schema.org)
- ✅ Sitemap XML dynamique
- ✅ Robots.txt configuré
- ✅ URLs canoniques

### Pages
- 🏠 **Accueil** - Présentation de l'association
- 📰 **Articles** - Blog avec articles dynamiques
- 📸 **Galerie** - Galerie photo des activités
- 📧 **Contact** - Formulaire de contact
- 📄 **Pages légales** - Politique de confidentialité, Conditions d'utilisation

### Composants
- Navigation responsive avec menu mobile
- Hero section avec carrousel d'images
- Cartes d'articles avec formatage de dates
- Formulaire de contact
- Footer avec liens et réseaux sociaux

## 🔍 SEO

Le site est optimisé pour le référencement avec :
- Meta tags sur toutes les pages
- Données structurées (Organization, WebSite, Article)
- Sitemap dynamique généré automatiquement
- Support Open Graph et Twitter Cards

Consultez `SEO-VERIFICATION.md` pour un guide complet de vérification SEO.

## 🚢 Déploiement

### Build de production

```bash
pnpm build
```

### Génération statique

```bash
pnpm generate
```

### Prévisualisation locale

```bash
pnpm preview
```

Pour plus d'informations sur le déploiement, consultez la [documentation Nuxt](https://nuxt.com/docs/getting-started/deployment).

## 📝 Contribution

1. Créer une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalite`)
2. Commiter vos changements (`git commit -m 'Ajout de ma fonctionnalité'`)
3. Pousser vers la branche (`git push origin feature/ma-fonctionnalite`)
4. Ouvrir une Pull Request

## 📄 Licence

Ce projet est privé et propriété de l'Association Vémianou.

## 📞 Contact

Pour toute question ou demande d'information, contactez l'Association Vémianou via le formulaire de contact sur le site.

---

**Association Vémianou** - Pour un meilleur avenir
