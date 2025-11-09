<script setup lang="ts">
import { computed } from 'vue'
import type { Article } from '~/types'

const route = useRoute()
const { find } = useStrapi()

const slug = computed(() => route.params.slug as string)

const toArticleArray = (payload: unknown): Article[] => {
  if (!payload) {
    return []
  }

  if (Array.isArray(payload)) {
    return payload as Article[]
  }

  if (typeof payload === 'object' && 'data' in (payload as Record<string, unknown>)) {
    const data = (payload as { data?: unknown }).data
    if (Array.isArray(data)) {
      return data as Article[]
    }
  }

  return []
}

const { data: matchingArticles } = useAsyncData<Article[]>(
  'article-detail',
  async () => {
    const response = await find<Article>('articles', {
      populate: ['cover'],
      filters: {
        slug: {
          $eq: slug.value,
        },
      },
      pagination: {
        page: 1,
        pageSize: 1,
      },
    })

    return toArticleArray(response)
  },
  { watch: [slug] },
)

const { data: latestArticles } = useAsyncData<Article[]>(
  'article-latest',
  async () => {
    const response = await find<Article>('articles', {
      populate: ['cover'],
      sort: ['publishedAt:desc'],
      pagination: {
        page: 1,
        pageSize: 6,
      },
    })

    return toArticleArray(response)
  },
)

const article = computed<Article | null>(() => matchingArticles.value?.[0] ?? null)

const relatedArticles = computed(() => {
  const items = latestArticles.value ?? []
  if (!Array.isArray(items) || !items.length) {
    return []
  }

  return items
    .filter((item) => item.slug !== slug.value)
    .slice(0, 4)
})

const formattedPublishedDate = computed(() => {
  if (!article.value?.publishedAt) {
    return ''
  }

  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.value.publishedAt))
})

const description = computed(() => article.value?.description ?? '')
</script>

<template>
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-6 lg:px-0">
      <NuxtLink
        to="/#articles"
        class="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6"
      >
        ← Retour aux articles
      </NuxtLink>

      <div class="grid gap-32 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)]">
        <article class="overflow-hidden">
          <header class="py-10">
            <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6">
              {{ article?.title || 'Chargement en cours…' }}
            </h1>

          </header>

          <div v-if="article?.cover?.url" class="relative h-80 lg:h-[420px] overflow-hidden">
            <img
                :src="article.cover.url"
                :alt="article.title"
                class="w-full h-full object-cover"
            >
        </div>

            <div class="py-10 text-base leading-relaxed text-gray-600">
                <p v-if="description">
                    {{ description }}
                </p>

                <p v-else class="text-gray-500">
                    Le contenu de cet article sera bientôt disponible.
                </p>
          </div>
          <div>
            <div class="flex flex-wrap items-center gap-3 text-sm text-primary font-medium">
              <span>Par {{ article?.author ?? 'Équipe Communication' }}</span>
              <span class="w-1 h-1 bg-primary rounded-full" />
              <span>{{ formattedPublishedDate || 'Date à venir' }}</span>
            </div>
          </div>
        </article>

        <aside class="space-y-8">
          <div class="p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-6">Plus d’articles</h2>

            <ul class="space-y-5">
              <li v-for="related in relatedArticles" :key="related.id">
                <NuxtLink
                  :to="`/articles/${related.slug}`"
                  class="flex items-center gap-4 group"
                >
                  <div class="flex-shrink-0 flex flex-col gap-2 overflow-hidden">
                    <img
                      v-if="related.cover?.url"
                      :src="related.cover.url"
                      :alt="related.title"
                      class="w-64 h-40 object-cover transition-transform duration-200 group-hover:scale-105"
                    >
                    <p class="text-gray-800 font-semibold leading-snug text-base line-clamp-2 max-w-64 group-hover:text-primary transition-colors">
                      {{ related.title }}
                    </p>
                  </div>
                </NuxtLink>
              </li>
            </ul>

            <NuxtLink
              to="/#articles"
              class="inline-block mt-6 text-sm font-semibold text-primary hover:underline"
            >
              Voir tous les articles
            </NuxtLink>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>