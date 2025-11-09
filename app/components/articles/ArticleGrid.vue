<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Article } from '~/types'

interface StrapiPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

interface StrapiFindResponse<T> {
  data: T[]
  meta: {
    pagination: StrapiPagination
  }
}

const PAGE_SIZE = 9

const currentPage = ref(1)

const { find } = useStrapi()

const { data: response, pending } = await useAsyncData<StrapiFindResponse<Article>>(
  'articles-list',
  async () => {
    const result = await find<Article>('articles', {
      populate: ['cover'],
      sort: ['publishedAt:desc'],
      pagination: {
        page: currentPage.value,
        pageSize: PAGE_SIZE,
      },
    })

    return result as StrapiFindResponse<Article>
  },
  {
    watch: [currentPage],
    default: () => ({
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: PAGE_SIZE,
          pageCount: 1,
          total: 0,
        },
      },
    }),
  },
)

const articles = computed(() => response.value?.data ?? [])
const pagination = computed(() => response.value?.meta?.pagination)

const totalPages = computed(() => pagination.value?.pageCount ?? 1)
const totalItems = computed(() => pagination.value?.total ?? 0)

const pages = computed(() =>
  Array.from({ length: totalPages.value }, (_, index) => index + 1),
)

const changePage = (page: number) => {
  if (page < 1 || page > totalPages.value || page === currentPage.value) {
    return
  }

  currentPage.value = page
}
</script>

<template>
  <section id="articles" class="bg-white py-16 px-8 lg:px-0 lg:w-4/5 mx-auto">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-text mb-12">
        Articles
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <ArticleCard 
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />

        <div
          v-if="!articles.length && !pending"
          class="col-span-full text-center text-gray-500"
        >
          Aucun article disponible pour le moment.
        </div>

        <div
          v-if="pending"
          class="col-span-full flex justify-center"
        >
          <span class="text-gray-400 text-sm">Chargement des articles…</span>
        </div>
      </div>

      <div
        v-if="totalItems > PAGE_SIZE"
        class="flex justify-center items-center gap-2"
      >
        <button
          class="px-3 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors disabled:opacity-40 disabled:hover:text-gray-600 disabled:hover:border-gray-200"
          :disabled="currentPage === 1"
          @click="changePage(currentPage - 1)"
        >
          Précédent
        </button>

        <button
          v-for="page in pages"
          :key="page"
          class="w-10 h-10 rounded-lg font-semibold transition-colors"
          :class="page === currentPage
            ? 'bg-primary text-white'
            : 'text-gray-text hover:text-primary hover:bg-primary/10'"
          @click="changePage(page)"
        >
          {{ page }}
        </button>

        <button
          class="px-3 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors disabled:opacity-40 disabled:hover:text-gray-600 disabled:hover:border-gray-200"
          :disabled="currentPage === totalPages"
          @click="changePage(currentPage + 1)"
        >
          Suivant
        </button>
      </div>
    </div>
  </section>
</template>

