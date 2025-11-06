<script setup lang="ts">
    const actions = [
        {
            name: 'Sensibilisation',
            description: 'Organiser des campagnes de sensibilisation dans les communautés pour promouvoir la cohésion sociale et le vivre-ensemble.',
            icon: 'mdi:head-lightbulb-outline'
        },
        {
            name: 'Éducation',
            description: 'Former et sensibiliser les jeunes générations aux valeurs fondamentales de paix, d\'unité et de respect mutuel.',
            icon: 'mdi:school-outline'
        },
        {
            name: 'Événements culturels',
            description: 'Organiser des activités culturelles et sportives pour favoriser les échanges et célébrer la diversité togolaise.',
            icon: 'mdi:calendar-star-outline'
        },
        {
            name: 'Solidarité',
            description: 'Apporter un soutien matériel et moral aux personnes en difficulté pour renforcer la solidarité nationale.',
            icon: 'mdi:hand-heart-outline'
        }
    ]
</script>

<template>
  <section class="bg-[#282828] py-16 px-8 md:px-12 lg:px-20">
    <div class="max-w-7xl mx-auto">

      <!-- Title -->
      <h5 class="text-primary text-xl font-semibold mb-12">
        Nos Actions
      </h5>

      <!-- Action Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="action in actions"
          :key="action.name"
          class="border-2 border-primary bg-transparent rounded-lg p-8 flex flex-col items-center text-center hover:bg-primary hover:bg-opacity-5 transition-all duration-300"
        >
          <Icon 
            :name="action.icon" 
            class="w-16 h-16 text-primary mb-6" 
          />
          <p class="text-white text-lg font-bold mb-4">
            {{ action.name }}
          </p>
          <p class="text-white text-sm leading-relaxed opacity-90">
            {{ action.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
