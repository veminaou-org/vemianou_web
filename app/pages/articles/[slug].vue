<script setup lang="ts">
import type { Article } from '~/types'
import { useSeo } from '~/composables/useSeo'

const route = useRoute()
const { find } = useStrapi()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://vemianou.org'

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
  'article-seo',
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

const article = computed<Article | null>(() => matchingArticles.value?.[0] ?? null)

// SEO for article page
const articleTitle = computed(() => article.value?.title || 'Article')
const articleDescription = computed(() => article.value?.description || 'Découvrez cet article de l\'Association Vémianou sur la paix, l\'unité et le vivre-ensemble au Togo.')
const articleImage = computed(() => {
  if (article.value?.cover?.url) {
    return article.value.cover.url.startsWith('http') 
      ? article.value.cover.url 
      : `${siteUrl}${article.value.cover.url}`
  }
  return `${siteUrl}/images/logo.png`
})
const articleUrl = computed(() => `${siteUrl}${route.path}`)

useSeo({
  title: articleTitle.value,
  description: articleDescription.value,
  image: articleImage.value,
  url: articleUrl.value,
  type: 'article',
  keywords: `article, Association Vémianou, ${articleTitle.value}, Togo, paix, unité`,
})

// Article structured data
watch([article], () => {
  if (article.value) {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.value.title,
            description: article.value.description || '',
            image: articleImage.value,
            datePublished: article.value.publishedAt || '',
            dateModified: article.value.updatedAt || article.value.publishedAt || '',
            author: {
              '@type': 'Organization',
              name: 'Association Vémianou',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Association Vémianou',
              logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/images/logo.png`,
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': articleUrl.value,
            },
          }),
        },
      ],
    })
  }
}, { immediate: true })
</script>

<template>
    <ArticleDetails/>
</template>