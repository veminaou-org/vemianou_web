<script setup lang="ts">
const articles = [
  {
    id: 1,
    image: '/images/gallery/image1.png',
    author: 'Irène de SOUZA',
    date: '15 Oct 2024',
    title: 'Journée de sensibilisation à l\'éducation des filles',
    description: 'Retour sur notre journée de sensibilisation dans les écoles publiques de Lomé pour promouvoir l\'éducation des filles et lutter contre les abandons scolaires.',
    slug: 'journee-sensibilisation-education-filles'
  },
  {
    id: 2,
    image: '/images/gallery/image2.png',
    author: 'Association VEMIANOU',
    date: '8 Oct 2024',
    title: 'Distribution de dons aux familles en difficulté',
    description: 'Notre association a organisé une distribution de vivres et de matériel scolaire aux familles défavorisées dans la région de Kara.',
    slug: 'distribution-dons-familles'
  },
  {
    id: 3,
    image: '/images/gallery/image3.png',
    author: 'Équipe VEMIANOU',
    date: '1 Oct 2024',
    title: 'Forum sur la paix et la cohésion sociale',
    description: 'Plus de 200 participants ont assisté à notre forum sur la paix, l\'unité et le vivre-ensemble à Sokodé.',
    slug: 'forum-paix-cohesion-sociale'
  },
  {
    id: 4,
    image: '/images/gallery/image1.png',
    author: 'Irène de SOUZA',
    date: '25 Sep 2024',
    title: 'Formation des jeunes aux valeurs citoyennes',
    description: 'Lancement de notre programme de formation des jeunes leaders aux valeurs de paix, de tolérance et de fraternité.',
    slug: 'formation-jeunes-valeurs-citoyennes'
  },
  {
    id: 5,
    image: '/images/gallery/image2.png',
    author: 'Association VEMIANOU',
    date: '18 Sep 2024',
    title: 'Événement culturel : célébration de la diversité togolaise',
    description: 'Un événement culturel réussi avec des danses, chants et expositions mettant en valeur la richesse culturelle du Togo.',
    slug: 'evenement-culturel-diversite-togolaise'
  },
  {
    id: 6,
    image: '/images/gallery/image3.png',
    author: 'Équipe VEMIANOU',
    date: '10 Sep 2024',
    title: 'Campagne de sensibilisation contre la violence',
    description: 'Notre campagne de sensibilisation contre la violence et pour la résolution pacifique des conflits a touché plus de 500 personnes.',
    slug: 'campagne-sensibilisation-contre-violence'
  }
]
</script>

<template>
  <section id="articles" class="bg-white py-16 px-8 lg:px-0 lg:w-4/5 mx-auto">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <h2 class="text-3xl font-bold text-gray-text mb-12">
        Articles
      </h2>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <ArticleCard 
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>

      <!-- Pagination -->
      <div class="flex justify-center items-center gap-3">
        <!-- Page 1 (Active) -->
        <button class="w-10 h-10 rounded-lg bg-red-200 text-primary font-semibold">
          1
        </button>
        
        <!-- Page 2 -->
        <button class="text-gray-text hover:text-primary transition-colors font-medium">
          2
        </button>
        
        <!-- Page 3 -->
        <button class="text-gray-text hover:text-primary transition-colors font-medium">
          3
        </button>
        
        <!-- Ellipsis -->
        <span class="text-gray-text">...</span>
        
        <!-- Page 8 -->
        <button class="text-gray-text hover:text-primary transition-colors font-medium">
          8
        </button>
        
        <!-- Page 9 -->
        <button class="text-gray-text hover:text-primary transition-colors font-medium">
          9
        </button>
        
        <!-- Page 10 -->
        <button class="text-gray-text hover:text-primary transition-colors font-medium">
          10
        </button>
      </div>
    </div>
  </section>
</template>

