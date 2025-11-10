<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'

const images = [
  '/images/gallery/image1.png',
  '/images/gallery/image2.png',
  '/images/gallery/image3.png'
]

const currentIndex = ref(0)
const isTransitioning = ref(true)
let autoSlideInterval: ReturnType<typeof setInterval> | null = null

// Images avec duplication de la première à la fin pour l'effet infini
const extendedImages = computed(() => [...images, images[0]])

const translateX = computed(() => {
  return `-${currentIndex.value * 100}%`
})

const nextSlide = async () => {
  isTransitioning.value = true
  currentIndex.value++
  
  // Si on est sur la dernière image (qui est une copie de la première)
  if (currentIndex.value === images.length) {
    // Attendre que la transition se termine
    await new Promise(resolve => setTimeout(resolve, 1500))
    // Désactiver la transition
    isTransitioning.value = false
    // Revenir instantanément à la vraie première image
    await nextTick()
    currentIndex.value = 0
    // Réactiver la transition après un petit délai
    await nextTick()
    setTimeout(() => {
      isTransitioning.value = true
    }, 50)
  }
}

const prevSlide = () => {
  if (currentIndex.value === 0) {
    // Aller directement à la dernière vraie image
    isTransitioning.value = false
    currentIndex.value = images.length - 1
    setTimeout(() => {
      isTransitioning.value = true
    }, 50)
  } else {
    currentIndex.value--
  }
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 5000) // Change toutes les 5 secondes
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

const handlePrev = () => {
  stopAutoSlide()
  prevSlide()
  startAutoSlide()
}

const handleNext = () => {
  stopAutoSlide()
  nextSlide()
  startAutoSlide()
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden">
    <!-- Background Images with Slide Animation -->
    <div class="absolute inset-0 overflow-hidden">
      <div 
        class="flex h-full"
        :class="{ 'transition-transform duration-[1500ms] ease-in-out': isTransitioning }"
        :style="{ transform: `translateX(${translateX})` }"
      >
        <div
          v-for="(image, index) in extendedImages"
          :key="`slide-${index}`"
          class="w-full h-full flex-shrink-0 relative"
        >
          <img
            :src="image"
            :alt="`Hero image ${index + 1}`"
            class="w-full h-full object-cover"
          >
          <!-- Dark overlay -->
          <div class="absolute inset-0 bg-[#000000] opacity-70" />
        </div>
      </div>
    </div>

    <!-- Content Overlay - Centered -->
    <div class="relative z-10 h-full flex items-center justify-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="text-center flex flex-col items-center">
            <!-- Association text -->
            <p class="text-white text-2xl font-black md:text-5xl">
                Association
            </p>
            
            <!-- Main title -->
            <h1 class="text-6xl md:text-7xl font-black text-primary">
                VEMIANOU
            </h1>
          
            <!-- Slogan -->
            <p class="text-white text-xl font-black md:text-4xl">
                <Icon name="mdi:format-quote-open" class="w-8 h-8 text-white" />
                <span class="text-white text-xl font-black md:text-4xl">
                    Pour un meilleur avenir
                </span>
                <Icon name="mdi:format-quote-close" class="w-8 h-8 text-white" />
            </p>
          
            <!-- Description -->
            <p class="text-white text-base md:text-base leading-relaxed max-w-xl mx-auto mt-7">
                L’Association Vémianou œuvre pour la promotion de la paix, de l’unité et du vivre-ensemble au Togo.
                À travers des actions de sensibilisation, d’éducation et de solidarité, elle s’engage à renforcer 
                les liens entre les citoyens et à bâtir une société plus apaisée.
            </p>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      class="hidden md:flex absolute mx-6 left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-lg border-2 border-white bg-transparent hover:bg-white hover:bg-opacity-20 transition-all duration-200 items-center justify-center group"
      aria-label="Image précédente"
      @click="handlePrev"
      >
      <Icon 
        name="mdi:chevron-left" 
        class="w-8 h-8 text-white"
      />
    </button>

    <button
      class="hidden md:flex absolute mx-6 right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-lg border-2 border-white bg-transparent hover:bg-white hover:bg-opacity-20 transition-all duration-200 items-center justify-center group"
      aria-label="Image suivante"
      @click="handleNext"
    >
      <Icon 
        name="mdi:chevron-right" 
        class="w-8 h-8 text-white"
      />
    </button>
  </section>
</template>
