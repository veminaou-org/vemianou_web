<script setup lang="ts">
import { usePageSeo } from '~/composables/usePageSeo'

usePageSeo({
  title: 'Contact',
  description:
    "Contactez l’Association Vémianou pour en savoir plus sur ses actions de sensibilisation et ses projets solidaires au Togo.",
  ogType: 'website',
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <ContactHero />

    <!-- Contact Section -->
    <section class="bg-white py-16 px-8 md:px-12 lg:w-3/4 mx-auto">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <!-- Left Column - Contact Info -->
          <ContactInfo />

          <!-- Right Column - Contact Form -->
          <ContactForm />
        </div>
      </div>
    </section>
  </div>
</template>
