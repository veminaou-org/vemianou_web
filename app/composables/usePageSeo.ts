import { computed } from 'vue'

type OgType = 'article' | 'website' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_status' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other'

interface PageSeoOptions {
  title: string
  description: string
  path?: string
  image?: string
  ogType?: OgType
  index?: boolean
}

export const usePageSeo = (options: PageSeoOptions) => {
  const route = useRoute()
  const config = useRuntimeConfig()

  const baseUrl = config.public.siteUrl ?? ''
  const currentPath = options.path ?? route.path ?? '/'
  const canonicalUrl = computed(() => {
    try {
      return new URL(currentPath, baseUrl).toString()
    } catch {
      return `${baseUrl}${currentPath}`
    }
  })

  const imageUrl = options.image
    ? (() => {
        try {
          return new URL(options.image, baseUrl).toString()
        } catch {
          return `${baseUrl}${options.image}`
        }
      })()
    : undefined

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: options.ogType ?? 'website',
    ogUrl: canonicalUrl.value,
    ogImage: imageUrl,
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterCard: imageUrl ? 'summary_large_image' : 'summary',
    twitterImage: imageUrl,
    robots: options.index === false ? 'noindex, nofollow' : 'index, follow',
  })

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl.value }],
    htmlAttrs: {
      lang: config.public.defaultLocale ?? 'fr',
    },
  })
}

