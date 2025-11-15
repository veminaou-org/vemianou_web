<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'

useSeo({
  title: 'Galerie',
  description: 'Découvrez les photos et images des activités et événements de l\'Association Vémianou. Explorez nos actions pour la paix, l\'unité et le vivre-ensemble au Togo.',
  keywords: 'galerie photos, Association Vémianou, événements, activités, Togo, photos association',
})
</script>

<template>
  <div>

    <GalleryHero/>
    <PhotoGrid/>
  </div>
</template>

