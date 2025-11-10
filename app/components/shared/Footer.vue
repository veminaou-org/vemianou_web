<script setup>
  const quickLinks = [
    { name: 'A propos', path: '/#a-propos' },
    { name: 'Actions', path: '/#actions' },
    { name: 'Articles', path: '/#articles' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'Contacts', path: '/contacts' }
  ]

  const legalLinks = [
    { name: 'Conditions d\'utilisation', path: '/terms-of-use' },
    { name: 'Politique de confidentialité', path: '/privacy-policy' }
  ]

  const resourcesLinks = [
    { name: 'Youtube Playlist', path: '#' }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: 'mdi:facebook', path: 'https://www.facebook.com/profile.php?id=100089894883718' },
    { name: 'YouTube', icon: 'mdi:youtube', path: 'https://youtube.com' }
  ]

</script>

<template>
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col gap-12 md:flex-row md:justify-between">
        <!-- Brand Column -->
        <div class="space-y-4">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Association VEMIANOU" 
              class="h-16 w-auto"
            >
          </NuxtLink>

          <!-- Description -->
          <p class="text-gray-text text-sm leading-relaxed max-w-xs">
            L’Association Vémianou est une organisation togolaise engagée pour la paix, l'unité et le vivre-ensemble.
          </p>

          <!-- Social Media Icons -->
          <div class="flex items-center gap-3 pt-2">
            <a
v-for="link in socialLinks" 
              :key="link.path" 
              :href="link.path" 
              class="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link.name"
              >
              <Icon :name="link.icon" />
            </a>

          </div>
        </div>

        <!-- ASSOCIATION Column -->
        <div>
          <h3 class="text-primary font-bold text-sm uppercase mb-4">
            ASSOCIATION
          </h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink :to="link.path" class="footer-link">
                {{ link.name }}
              </NuxtLink>
            </li>
 
          </ul>
        </div>

        <!-- AIDE Column -->
        <div>
          <h3 class="text-primary font-bold text-sm uppercase mb-4">
            AIDE
          </h3>
          <ul class="space-y-3">
            <li v-for="link in legalLinks" :key="link.path">
              <NuxtLink :to="link.path" class="footer-link">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- RESSOURCES Column -->
        <div>
          <h3 class="text-primary font-bold text-sm uppercase mb-4">
            RESSOURCES
          </h3>
          <ul class="space-y-3">
            <li v-for="link in resourcesLinks" :key="link.path">
              <a 
                :href="link.path"
                class="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-gray-300 text-center text-gray-text text-sm">
        © Copyright 2025, All Rights Reserved by Vémianou
      </div>
    </div>
  </footer>
</template>

<style scoped>
.social-icon {
  @apply w-9 h-9 rounded-full bg-white border border-gray-text text-gray-text flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200;
}

.footer-link {
  @apply text-gray-text text-sm hover:text-primary transition-colors duration-200;
}
</style>
