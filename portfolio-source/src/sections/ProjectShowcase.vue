<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.vue'
import ProjectDetails from '../components/ProjectDetails.vue'
import { resolveRoute } from '../data/routes.js'

const selected = ref(null)

function projectFromHash() {
  const route = resolveRoute(window.location.hash)
  return projects.find(project => project.id === route.projectId) || null
}
function openProject(project) {
  selected.value = project
  window.location.hash = `/projects/${project.id}`
}
function closeProject() {
  selected.value = null
  if (resolveRoute(window.location.hash).projectId) window.location.hash = '/projects'
}
function syncDialog() {
  selected.value = projectFromHash()
}
onMounted(() => {
  window.addEventListener('hashchange', syncDialog)
  syncDialog()
})
onUnmounted(() => window.removeEventListener('hashchange', syncDialog))
</script>

<template>
  <section id="projects" class="projects-section section-wrap section-space" aria-labelledby="projects-title">
    <div class="section-heading section-heading-row reveal">
      <div><p class="eyebrow"><span class="section-index">04</span> SELECTED WORKS</p><h2 id="projects-title">Made to be<br /><span>useful.</span></h2></div>
      <p class="section-side-note">Websites, interfaces, and practical applications. New work will appear as each project is ready to share.</p>
    </div>
    <div class="projects-grid"><ProjectCard v-for="project in projects" :key="project.id" :project="project" @details="openProject" /></div>
    <ProjectDetails :project="selected" :open="Boolean(selected)" @close="closeProject" />
  </section>
</template>
