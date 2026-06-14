import { useEffect } from 'react'

/**
 * Reveals elements with the `.reveal` class as they scroll into view.
 * Dependency-free (uses the native IntersectionObserver) and respects the
 * user's "prefers-reduced-motion" setting.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    // If the browser is too old or the user opts out of motion, show everything.
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const el = entry.target
          el.classList.add('is-visible')
          observer.unobserve(el)

          // Once the entrance animation finishes, strip the reveal classes so
          // the element returns to its natural state — this keeps hover
          // transforms (card lifts, etc.) working without specificity clashes.
          const cleanup = (e) => {
            if (e.target !== el) return
            el.classList.remove('reveal', 'is-visible')
            el.style.willChange = ''
            el.removeEventListener('transitionend', cleanup)
          }
          el.addEventListener('transitionend', cleanup)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
