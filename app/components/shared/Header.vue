<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'A propos', path: '/#a-propos' },
  { name: 'Articles', path: '/#articles' },
  { name: 'Galerie', path: '/gallery' },
  { name: 'Contacts', path: '/contacts' }
]

const isActive = (path: string) => {
  // Gestion des ancres (ex: /#a-propos)
  if (path.includes('#')) {
    const [routePath, hash] = path.split('#')
    return route.path === (routePath || '/') && route.hash === `#${hash}`
  }
  
  if (path === '/') {
    return route.path === '/' && !route.hash
  }
  
  return route.path.startsWith(path)
}
</script>


<template>
  <header class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3">
          <img 
            src="/images/logo.png" 
            alt="Association VEMIANOU" 
            class="h-24 w-auto"
          >
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden lg:flex space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link relative py-2 text-sm transition-colors duration-200"
            :class="isActive(item.path) ? 'text-primary' : 'text-gray-text hover:text-primary'"
            >
            {{ item.name }}

            <!-- Blue underline -->
            <span 
              v-if="isActive(item.path)"
              class="absolute bottom-0 left-0 w-full h-1 bg-primary"
            />
          </NuxtLink>
        </nav>

        <!-- Mobile menu button -->
        <button
          class="lg:hidden p-2 rounded-md text-gray-text hover:text-primary hover:bg-gray-background transition-colors"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        v-show="mobileMenuOpen"
        class="lg:hidden py-4 border-t border-gray-background"
      >
        <div class="flex flex-col space-y-4">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="relative py-2 text-base font-medium transition-colors duration-200"
            :class="isActive(item.path) ? 'text-primary border-l-4 border-primary pl-4' : 'text-gray-text hover:text-primary pl-4'"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  position: relative;
  display: inline-block;
}
</style>

