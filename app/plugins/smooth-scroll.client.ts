import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtPlugin(() => {
  const router = useRouter()
  const route = useRoute()

  // Fonction pour scroller vers une section
  const scrollToSection = (hash: string) => {
    if (!hash) return

    // Retirer le # du hash
    const id = hash.replace('#', '')
    const element = document.getElementById(id)

    if (element) {
      // Calculer la position avec un offset pour le header fixe
      const headerHeight = 80 // Hauteur du header (h-20 = 80px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Fonction pour attendre que l'élément soit disponible dans le DOM
  const waitForElement = (id: string, maxAttempts = 20, delay = 50): Promise<HTMLElement | null> => {
    return new Promise((resolve) => {
      let attempts = 0
      const checkElement = () => {
        const element = document.getElementById(id)
        if (element) {
          resolve(element)
        } else if (attempts < maxAttempts) {
          attempts++
          setTimeout(checkElement, delay)
        } else {
          resolve(null)
        }
      }
      checkElement()
    })
  }

  // Gérer le scroll après navigation
  const handleRouteChange = async (to: RouteLocationNormalized) => {
    // Attendre que le DOM soit mis à jour
    await nextTick()
    
    if (to.hash) {
      // Attendre que l'élément soit disponible dans le DOM
      const id = to.hash.replace('#', '')
      await waitForElement(id)
      
      // Petit délai supplémentaire pour s'assurer que la page est complètement rendue
      setTimeout(() => {
        scrollToSection(to.hash)
      }, 150)
    } else {
      // Si pas de hash, scroller en haut de la page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  // Écouter les changements de route
  router.afterEach((to) => {
    handleRouteChange(to)
  })

  // Gérer le hash initial si présent au chargement
  if (route.hash) {
    // Attendre que la page soit complètement chargée
    const initScroll = async () => {
      const id = route.hash.replace('#', '')
      await waitForElement(id, 30, 100)
      setTimeout(() => {
        scrollToSection(route.hash)
      }, 300)
    }

    if (document.readyState === 'complete') {
      initScroll()
    } else {
      window.addEventListener('load', initScroll)
    }
  }
})

