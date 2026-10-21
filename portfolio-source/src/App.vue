<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import SkillsGrid from './sections/SkillsGrid.vue'
import WorkflowTimeline from './sections/WorkflowTimeline.vue'
import ProjectShowcase from './sections/ProjectShowcase.vue'
import AIAssistedSection from './sections/AIAssistedSection.vue'
import ContactSection from './sections/ContactSection.vue'
import ResumeSection from './sections/ResumeSection.vue'
import FooterBar from './components/FooterBar.vue'
import { pageTitles, resolveRoute } from './data/routes.js'
import { site } from './data/site.js'

const theme = ref('dark')
const currentHash = ref(window.location.hash)
const route = computed(() => resolveRoute(currentHash.value))
const activePage = computed(() => route.value.page)
const main = ref(null)
const navigationOpen = ref(false)
const pages = { home: HeroSection, about: AboutSection, skills: SkillsGrid, workflow: WorkflowTimeline, projects: ProjectShowcase, resume: ResumeSection, contact: ContactSection }
let revealObserver

function applyTheme(nextTheme) {
  theme.value = nextTheme
  document.documentElement.dataset.theme = nextTheme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', nextTheme === 'light' ? '#f7f4ff' : '#110d22')
}
function toggleTheme() {
  const next = theme.value === 'light' ? 'dark' : 'light'
  applyTheme(next)
  try { localStorage.setItem('jeffrey-portfolio-theme', next) } catch { /* Storage is optional. */ }
}
function syncRoute() { currentHash.value = window.location.hash }
function observeReveals() {
  revealObserver?.disconnect()
  const elements = main.value?.querySelectorAll('.reveal') || []
  if (!revealObserver) elements.forEach(element => element.classList.add('is-visible'))
  else elements.forEach(element => revealObserver.observe(element))
}
function updateTitle() {
  document.title = `${pageTitles[activePage.value]} | ${site.name} — ${site.title}`
}
watch(activePage, async () => {
  updateTitle()
  await nextTick()
  observeReveals()
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  main.value?.focus({ preventScroll: true })
})
onMounted(() => {
  let savedTheme
  try { savedTheme = localStorage.getItem('jeffrey-portfolio-theme') } catch { /* Use the system preference. */ }
  applyTheme(['dark', 'light'].includes(savedTheme) ? savedTheme : window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target) }
      })
    }, { threshold: 0.12 })
  }
  observeReveals()
  updateTitle()
  window.addEventListener('hashchange', syncRoute)
})
onUnmounted(() => {
  revealObserver?.disconnect()
  window.removeEventListener('hashchange', syncRoute)
})
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main" :inert="navigationOpen" @click.prevent="main?.focus()">Skip to content</a>
    <NavigationBar :theme="theme" :active-section="activePage" @toggle-theme="toggleTheme" @menu-state="navigationOpen = $event" />
    <main id="main" ref="main" tabindex="-1" :inert="navigationOpen" :aria-label="`${pageTitles[activePage]} page`">
      <div :key="activePage" class="route-page">
        <h1 v-if="activePage !== 'home'" class="visually-hidden">{{ pageTitles[activePage] }}</h1>
        <component :is="pages[activePage]" />
        <AIAssistedSection v-if="activePage === 'about'" />
      </div>
    </main>
    <FooterBar :inert="navigationOpen" />
  </div>
</template>
