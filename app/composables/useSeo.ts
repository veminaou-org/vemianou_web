export const useSeo = (options: {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  keywords?: string
  noindex?: boolean
}) => {
  const config = useRuntimeConfig()
  const route = useRoute()
  
  const siteUrl = config.public.siteUrl || 'https://vemianou.org'
  const defaultImage = `${siteUrl}/images/logo.png`
  
  const title = options.title || 'Association Vémianou - Pour un meilleur avenir'
  const description = options.description || 'L\'Association Vémianou œuvre pour la promotion de la paix, de l\'unité et du vivre-ensemble au Togo.'
  const image = options.image || defaultImage
  const url = options.url || `${siteUrl}${route.path}`
  const type = options.type || 'website'
  const keywords = options.keywords || 'Association Vémianou, Togo, paix, unité, vivre-ensemble, solidarité, éducation, sensibilisation'
  
  useHead({
    title,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords,
      },
      {
        name: 'robots',
        content: options.noindex ? 'noindex, nofollow' : 'index, follow',
      },
      // Open Graph
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: image,
      },
      {
        property: 'og:url',
        content: url,
      },
      {
        property: 'og:type',
        content: type,
      },
      // Twitter Card
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: image,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: url,
      },
    ],
  })
}

