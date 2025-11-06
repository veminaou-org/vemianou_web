<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  objet: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulation d'envoi
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  console.log('Formulaire soumis:', form.value)
  
  // Réinitialiser le formulaire
  form.value = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    objet: '',
    message: ''
  }
  
  isSubmitting.value = false
  alert('Message envoyé avec succès !')
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
</template>

