<script setup lang="ts">
import { usePageSeo } from '~/composables/usePageSeo'

usePageSeo({
  title: 'Accueil',
  description:
    "Association Vémianou œuvre pour la paix, l’unité et la solidarité au Togo à travers des actions de sensibilisation et des initiatives communautaires.",
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