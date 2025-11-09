<script setup lang="ts">
import { computed } from 'vue'
import type { Gallery, GalleryAsset } from '~/types/Gallery'

const { find } = useStrapi()

const toGalleryArray = (payload: unknown): Gallery[] => {
  if (!payload) {
    return []
  }

  if (Array.isArray(payload)) {
    return payload as Gallery[]
  }

  if (typeof payload === 'object' && 'data' in (payload as Record<string, unknown>)) {
    const data = (payload as { data?: unknown }).data
    if (Array.isArray(data)) {
      return data as Gallery[]
    }
  }

  return []
}

const { data: galleries, pending } = useAsyncData<Gallery[]>(
  'gallery-images',
  async () => {
    const response = await find<Gallery>('galleries', {
      populate: ['Image'],
      sort: ['publishedAt:desc'],
      pagination: {
        page: 1,
        pageSize: 100,
      },
    })

    return toGalleryArray(response)
  },
)

const images = computed<GalleryAsset[]>(() =>
  (galleries.value ?? []).flatMap((gallery) => gallery.Image ?? []),
)

const getImageSrc = (image: GalleryAsset) =>
  image.formats?.medium?.url ??
  image.formats?.large?.url ??
  image.formats?.small?.url ??
  image.url
</script>

<template>
  <section class="bg-white py-16 px-6 lg:px-0 lg:w-4/5 mx-auto">
    <div class="max-w-7xl mx-auto">
      <header class="mb-12 text-center">
        <p class="text-gray-500 mt-3">
          Revivez nos actions à travers une sélection d’images marquantes.
        </p>
      </header>

      <div
        v-if="pending"
        class="py-20 text-center text-gray-400 text-sm"
      >
        Chargement de la galerie…
      </div>

      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <figure
          v-for="image in images"
          :key="image.documentId ?? image.id"
          class="overflow-hidden shadow-lg"
            >
          <img
            :src="getImageSrc(image)"
            :alt="image.alternativeText || image.name"
            class="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          >
        </figure>

        <div
          v-if="!images.length"
          class="col-span-full py-20 text-center text-gray-500"
        >
          Aucune image disponible pour le moment.
        </div>
      </div>
    </div>
  </section>
</template>