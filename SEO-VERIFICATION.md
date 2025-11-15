# Guide de Vérification SEO - Association Vémianou

## 1. Vérification des Meta Tags dans le Navigateur

### Méthode 1 : Code Source
1. Ouvrez votre site en production (ou en dev avec `pnpm run dev`)
2. Clic droit → "Afficher le code source de la page" (ou Ctrl+U)
3. Vérifiez la présence de :
   - `<title>` avec le titre de la page
   - `<meta name="description">`
   - `<meta property="og:title">`, `og:description`, `og:image`
   - `<meta name="twitter:card">`
   - `<link rel="canonical">`
   - Scripts JSON-LD avec `application/ld+json`

### Méthode 2 : Outils de Développement
1. Ouvrez les DevTools (F12)
2. Onglet "Elements" → Cherchez dans `<head>`
3. Ou utilisez la console : `document.querySelector('meta[name="description"]')?.content`

## 2. Outils de Test en Ligne

### Google Rich Results Test
- URL : https://search.google.com/test/rich-results
- Teste les données structurées (JSON-LD)
- Vérifie que Google comprend votre contenu

### Google Mobile-Friendly Test
- URL : https://search.google.com/test/mobile-friendly
- Vérifie la compatibilité mobile

### Facebook Sharing Debugger
- URL : https://developers.facebook.com/tools/debug/
- Teste l'aperçu Open Graph
- Permet de forcer le rafraîchissement du cache

### Twitter Card Validator
- URL : https://cards-dev.twitter.com/validator
- Teste l'aperçu des cartes Twitter

### LinkedIn Post Inspector
- URL : https://www.linkedin.com/post-inspector/
- Teste l'aperçu LinkedIn

## 3. Vérification du Sitemap

### Accéder au sitemap
- URL : `https://vemianou.org/sitemap.xml`
- Vérifiez que toutes les pages sont listées
- Vérifiez les dates de modification

### Soumettre à Google Search Console
1. Créez un compte sur https://search.google.com/search-console
2. Ajoutez votre propriété (site)
3. Soumettez le sitemap : `https://vemianou.org/sitemap.xml`

## 4. Outils d'Audit SEO

### Lighthouse (Chrome DevTools)
1. Ouvrez Chrome DevTools (F12)
2. Onglet "Lighthouse"
3. Cochez "SEO"
4. Cliquez "Analyze page load"
5. Vérifiez le score SEO (objectif : 90+)

### PageSpeed Insights
- URL : https://pagespeed.web.dev/
- Entrez l'URL de votre site
- Consultez le rapport SEO

### SEO Site Checkup
- URL : https://seositecheckup.com/
- Audit complet gratuit

### Screaming Frog SEO Spider
- Téléchargeable : https://www.screamingfrog.co.uk/seo-spider/
- Analyse complète du site (gratuit jusqu'à 500 URLs)

## 5. Vérification des Données Structurées

### Test JSON-LD
1. Ouvrez le code source
2. Cherchez `<script type="application/ld+json">`
3. Copiez le JSON
4. Validez sur : https://validator.schema.org/

### Google Search Console - Améliorations
- Section "Améliorations" → "Données structurées"
- Vérifie les erreurs et avertissements

## 6. Checklist de Vérification

### ✅ Meta Tags
- [ ] Title unique sur chaque page
- [ ] Description unique (150-160 caractères)
- [ ] Open Graph tags présents
- [ ] Twitter Cards présents
- [ ] URL canonique définie

### ✅ Données Structurées
- [ ] Organization schema sur la page d'accueil
- [ ] WebSite schema sur la page d'accueil
- [ ] Article schema sur les pages d'articles
- [ ] Validation sans erreurs

### ✅ Technique
- [ ] Sitemap.xml accessible
- [ ] Robots.txt configuré
- [ ] URLs propres (sans paramètres inutiles)
- [ ] Site responsive (mobile-friendly)
- [ ] Temps de chargement acceptable

### ✅ Contenu
- [ ] Titres H1 uniques par page
- [ ] Structure de titres logique (H1, H2, H3)
- [ ] Images avec attributs alt
- [ ] Liens internes présents

## 7. Commandes Utiles pour Tester Localement

```bash
# Démarrer le serveur de développement
npm run dev

# Vérifier le sitemap localement
curl http://localhost:3000/sitemap.xml

# Vérifier robots.txt
curl http://localhost:3000/robots.txt
```

## 8. Monitoring Continu

### Google Search Console
- Surveillez les performances de recherche
- Vérifiez les erreurs d'indexation
- Consultez les requêtes de recherche

### Google Analytics
- Suivez le trafic organique
- Analysez les pages les plus visitées
- Identifiez les sources de trafic

## 9. Tests Spécifiques par Page

### Page d'Accueil
- Vérifiez Organization schema
- Vérifiez WebSite schema
- Meta tags avec description principale

### Pages d'Articles
- Vérifiez Article schema
- Image Open Graph de l'article
- Date de publication dans les meta tags

### Pages Légales
- Vérifiez que les meta tags sont présents
- Pas de noindex (sauf si nécessaire)

## 10. Outils de Prévisualisation

### Open Graph Preview
- https://www.opengraph.xyz/
- Aperçu de votre page sur les réseaux sociaux

### Meta Tags Checker
- https://metatags.io/
- Vérification complète des meta tags

