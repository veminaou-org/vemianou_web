<script setup lang="ts">
import type { Article } from '~/types';
import { computed } from 'vue'

const props = defineProps<{
  article: Article
}>()

const formattedDate = computed(() => {
  if (!props.article.publishedAt && !props.article.createdAt) {
    return ''
  }

  const dateToFormat = props.article.publishedAt || props.article.createdAt
  
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateToFormat))
})
</script>

<template>
    <div class="overflow-hidden">
        <!-- Image -->
        <div class="w-full h-48 overflow-hidden">
            <img 
            :src="article.cover.url" 
            :alt="article.title"
            class="w-full h-full rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            >
        </div>

        <!-- Content -->
        <div class="py-6">
            <!-- Author and Date -->
            <p class="text-primary text-sm mb-3">
                {{ article.author }} - {{ formattedDate }}
            </p>

            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-text mb-3 line-clamp-2">
                {{ article.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-text text-sm mb-4 line-clamp-1 leading-relaxed">
                {{ article.description }}
            </p>

            <!-- Read More Button -->
            <NuxtLink 
                :to="`/articles/${article.slug}`"
                class="inline-flex items-center gap-2 bg-primary/30 rounded-full px-3 py-2 text-primary font-semibold text-sm hover:scale-110 transition-transform duration-200 ml-1"
                >
                Lire plus
                <Icon name="mdi:chevron-right" class="w-5 h-5" />
            </NuxtLink>
        </div>
    </div>
</template>

