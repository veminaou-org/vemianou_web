<script setup lang="ts">
import { useSeo } from '~/composables/useSeo'

useSeo({
  title: 'Contactez-nous',
  description: 'Contactez l\'Association Vémianou pour toute question, demande d\'information ou pour participer à nos actions. Nous sommes à votre écoute pour construire ensemble un meilleur avenir au Togo.',
  keywords: 'contact Association Vémianou, adresse, email, téléphone, Togo, association',
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
