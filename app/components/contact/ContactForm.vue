<script setup lang="ts">
import { ref } from 'vue'
import { useEmail } from '~/composables/useEmail'

const { sendMail } = useEmail()
const form = ref({
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  objet: '',
  message: ''
})

const isSubmitting = ref(false)
const showModal = ref(false)
const modalType = ref<'success' | 'error'>('success')
const modalMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true

  try {
    await sendMail(form.value)

    modalType.value = 'success'
    modalMessage.value = 'Message envoyé avec succès !'
    showModal.value = true

    // Reset
    form.value = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      objet: '',
      message: ''
    }
  } catch (error) {
    console.error(error)
    modalType.value = 'error'
    modalMessage.value = "Erreur lors de l'envoi du message. Veuillez réessayer."
    showModal.value = true
  }

  isSubmitting.value = false
}

const closeModal = () => {
  showModal.value = false
}

</script>

<template>
  <form class="space-y-6 bg-white p-8 rounded-xl border border-gray-300 shadow-lg" @submit.prevent="handleSubmit" >
    <!-- Nom et Prénom -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <input
          v-model="form.nom"
          type="text"
          placeholder="Nom"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
        >
      </div>
      <div>
        <input
          v-model="form.prenom"
          type="text"
          placeholder="Prénom"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
        >
      </div>
    </div>

    <!-- Email -->
    <div>
      <input
        v-model="form.email"
        type="email"
        placeholder="Email"
        required
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
      >
    </div>

    <!-- Téléphone -->
    <div>
      <input
        v-model="form.telephone"
        type="tel"
        placeholder="Numéro de téléphone"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
      >
    </div>

    <!-- Objet -->
    <div>
      <input
        v-model="form.objet"
        type="text"
        placeholder="Objet"
        required
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
      >
    </div>

    <!-- Message -->
    <div>
      <textarea
        v-model="form.message"
        placeholder="Votre message..."
        rows="6"
        required
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
      />
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
    </button>
  </form>

  <!-- Notification Modal -->
  <NotificationModal
    :show="showModal"
    :type="modalType"
    :message="modalMessage"
    @close="closeModal"
  />
</template>

