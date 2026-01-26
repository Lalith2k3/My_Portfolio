/**
 * Application configuration
 * Centralized configuration for the portfolio application
 */

export const config = {
  // Site metadata
  site: {
    title: "Lalith Koushik Vanam - AI/ML & Full Stack Developer",
    description: "Software Engineer with 4+ years of experience specializing in AI/ML, RAG systems, and full-stack development",
    url: import.meta.env.VITE_SITE_URL || "https://lalithvanam.netlify.app",
    author: "Lalith Koushik Vanam"
  },

  // Navigation items
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ],

  // Animation settings
  animations: {
    scrollOffset: 100,
    transitionDuration: 300
  },

  // Contact form settings
  contact: {
    formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || null
  }
}
