<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'

interface Props {
  show: boolean
  type: 'success' | 'error'
  message: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const isVisible = ref(false)
const isAnimating = ref(false)
let autoCloseTimeout: ReturnType<typeof setTimeout> | null = null

watch(() => props.show, (newVal) => {
  // Nettoyer le timeout précédent s'il existe
  if (autoCloseTimeout) {
    clearTimeout(autoCloseTimeout)
    autoCloseTimeout = null
  }

  if (newVal) {
    isVisible.value = true
    // Petit délai pour l'animation
    setTimeout(() => {
      isAnimating.value = true
    }, 10)
    
    // Auto-fermeture après 4 secondes
    autoCloseTimeout = setTimeout(() => {
      closeModal()
    }, 4000)
  } else {
    isAnimating.value = false
    setTimeout(() => {
      isVisible.value = false
    }, 300)
  }
})

const closeModal = () => {
  // Nettoyer le timeout d'auto-fermeture
  if (autoCloseTimeout) {
    clearTimeout(autoCloseTimeout)
    autoCloseTimeout = null
  }
  
  isAnimating.value = false
  setTimeout(() => {
    emit('close')
  }, 300)
}

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.show) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  if (autoCloseTimeout) {
    clearTimeout(autoCloseTimeout)
  }
})

const iconName = props.type === 'success' ? 'mdi:check-circle' : 'mdi:alert-circle'
const bgColor = props.type === 'success' ? 'bg-green-50' : 'bg-red-50'
const borderColor = props.type === 'success' ? 'border-green-200' : 'border-red-200'
const iconColor = props.type === 'success' ? 'text-green-600' : 'text-red-600'
const textColor = props.type === 'success' ? 'text-green-800' : 'text-red-800'
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isVisible"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-black/50 transition-opacity duration-300"
          :class="isAnimating ? 'opacity-100' : 'opacity-0'"
        />

        <!-- Modal -->
        <div
          class="relative bg-white rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300"
          :class="isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
        >
          <!-- Content -->
          <div :class="[bgColor, borderColor, 'border-2 rounded-xl p-6']">
            <div class="flex items-start gap-4">
              <!-- Icon -->
              <div :class="[iconColor, 'flex-shrink-0']">
                <Icon :name="iconName" class="w-8 h-8" />
              </div>

              <!-- Message -->
              <div class="flex-1">
                <h3
                  class="text-lg font-semibold mb-1"
                  :class="textColor"
                >
                  {{ type === 'success' ? 'Succès !' : 'Erreur' }}
                </h3>
                <p class="text-gray-700">
                  {{ message }}
                </p>
              </div>

              <!-- Close Button -->
              <button
                class="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fermer"
                @click="closeModal"
              >
                <Icon name="mdi:close" class="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>

