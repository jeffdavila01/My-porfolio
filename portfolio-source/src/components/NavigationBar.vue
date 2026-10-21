<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { ArrowUpRight, BriefcaseBusiness, Code2, Home, Mail, Menu, Moon, Route, Sun, UserRound, X } from '@lucide/vue'
import { navigation, site } from '../data/site.js'

defineProps({ theme: { type: String, required: true }, activeSection: { type: String, required: true } })
const emit = defineEmits(['toggle-theme', 'menu-state'])
const menuOpen = ref(false)
const isCompact = ref(window.matchMedia('(max-width: 980px)').matches)
const drawer = ref(null)
const menuButton = ref(null)
const icons = { Home, About: UserRound, Skills: Code2, Workflow: Route, Projects: BriefcaseBusiness, Contact: Mail }
let mediaQuery
let previousOverflow = ''

function closeMenu(restoreFocus = false) {
  menuOpen.value = false
  if (restoreFocus && isCompact.value) nextTick(() => menuButton.value?.focus())
}
function updateViewport(event) {
  isCompact.value = event.matches
  closeMenu()
}
function handleKeydown(event) {
  if (!isCompact.value || !menuOpen.value) return
  if (event.key === 'Escape') { event.preventDefault(); closeMenu(true) }
  if (event.key !== 'Tab') return
  const elements = drawer.value?.querySelectorAll('a[href], button:not([disabled])')
  if (!elements?.length) return
  const first = elements[0]
  const last = elements[elements.length - 1]
  if (!drawer.value.contains(document.activeElement)) { event.preventDefault(); first.focus(); return }
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
}
watch(menuOpen, async (open) => {
  emit('menu-state', open && isCompact.value)
  if (open && isCompact.value) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    await nextTick()
    if (menuOpen.value && isCompact.value) drawer.value?.querySelector('button')?.focus()
  } else document.body.style.overflow = previousOverflow
})
onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 980px)')
  isCompact.value = mediaQuery.matches
  mediaQuery.addEventListener('change', updateViewport)
  document.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
  mediaQuery?.removeEventListener('change', updateViewport)
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = previousOverflow
})
</script>

<template>
  <header class="sidebar-mobile-bar" :inert="menuOpen && isCompact">
    <a class="wordmark" href="#/home" @click="closeMenu(true)"><span class="wordmark-icon">JD<span>.</span></span><span class="wordmark-name">{{ site.name }}</span></a>
    <button ref="menuButton" class="sidebar-menu-button" type="button" :aria-expanded="menuOpen" aria-controls="portfolio-sidebar" aria-label="Open navigation menu" @click="menuOpen = true"><Menu :size="20" aria-hidden="true" /></button>
  </header>
  <button v-if="isCompact && menuOpen" class="sidebar-backdrop" type="button" tabindex="-1" aria-label="Close navigation menu" @click="closeMenu(true)"></button>
  <aside id="portfolio-sidebar" ref="drawer" class="portfolio-sidebar" :class="{ 'sidebar-is-open': menuOpen }" :inert="isCompact && !menuOpen" :role="isCompact && menuOpen ? 'dialog' : undefined" :aria-modal="isCompact && menuOpen ? 'true' : undefined" aria-label="Portfolio navigation">
    <div class="sidebar-brand-row"><a class="sidebar-brand" href="#/home" @click="closeMenu(true)"><span class="wordmark-icon">JD<span>.</span></span><span><strong>{{ site.name }}</strong><small>WEB DEVELOPER</small></span></a><button class="sidebar-close-button" type="button" aria-label="Close navigation menu" @click="closeMenu(true)"><X :size="19" aria-hidden="true" /></button></div>
    <p class="sidebar-caption">EXPLORE</p>
    <nav class="sidebar-links" aria-label="Main navigation"><a v-for="item in navigation" :key="item.href" :href="item.href" :aria-current="activeSection === item.href.slice(2) ? 'page' : undefined" @click="closeMenu(true)"><component :is="icons[item.label]" :size="18" aria-hidden="true" /><span>{{ item.label }}</span><span class="sidebar-active-dot" aria-hidden="true"></span></a></nav>
    <div class="sidebar-bottom"><p>Thoughtful code.<br /><span>Useful experiences.</span></p><a v-if="site.email" class="sidebar-email" :href="`mailto:${site.email}`">Let's connect <ArrowUpRight :size="15" aria-hidden="true" /></a><button class="sidebar-theme" type="button" :aria-pressed="theme === 'light'" :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`" @click="emit('toggle-theme')"><Sun v-if="theme === 'dark'" :size="17" aria-hidden="true" /><Moon v-else :size="17" aria-hidden="true" /><span>{{ theme === 'dark' ? 'Light mode' : 'Dark mode' }}</span></button><small>© {{ new Date().getFullYear() }} Jeffrey Davila</small></div>
  </aside>
</template>
