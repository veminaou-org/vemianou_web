<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'

useSeo({
  title: 'Accueil',
  description: 'L\'Association Vémianou œuvre pour la promotion de la paix, de l\'unité et du vivre-ensemble au Togo. À travers des actions de sensibilisation, d\'éducation et de solidarité, elle s\'engage à renforcer les liens entre les citoyens et à bâtir une société plus apaisée.',
  keywords: 'Association Vémianou, Togo, paix, unité, vivre-ensemble, solidarité, éducation, sensibilisation, actions sociales',
})

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://vemianou.org'

// Structured data for Organization
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Association Vémianou',
        description: 'L\'Association Vémianou œuvre pour la promotion de la paix, de l\'unité et du vivre-ensemble au Togo.',
        url: siteUrl,
        logo: `${siteUrl}/images/logo.png`,
        sameAs: [
          'https://www.facebook.com/profile.php?id=100089894883718',
          'https://youtube.com',
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'TG',
        },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Association Vémianou',
        url: siteUrl,
        description: 'L\'Association Vémianou œuvre pour la promotion de la paix, de l\'unité et du vivre-ensemble au Togo.',
      }),
    },
  ],
})
</script>

<template>
  <div>
    <!-- Section Hero -->
    <HeroSection />

    <!-- Section A propos -->
    <section id="a-propos" class="bg-white flex flex-col">
      <Presentation />
      <MissionVision />
      <Actions />
    </section>

    <!-- Section Articles -->
    <ArticleGrid />
  </div>
</template>