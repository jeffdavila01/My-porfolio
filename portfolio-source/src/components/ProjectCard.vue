<script setup>
import { computed, ref, watch } from 'vue'
const props = defineProps({ project: { type: Object, required: true } })
const emit = defineEmits(['details'])
const imageFailed = ref(false)
watch(() => props.project.image, () => { imageFailed.value = false })
const initials = computed(() => props.project.title.split(/\s+/).slice(0, 2).map(word => word[0]).join(''))
const previewImage = computed(() => {
  const image = props.project.image
  return !image || /^(https?:|data:)/.test(image) ? image : `${import.meta.env.BASE_URL}${image.replace(/^\.?\//, '')}`
})
</script>

<template>
  <article class="project-card reveal" :class="{ 'project-card-featured': project.featured, 'project-card-placeholder': !project.liveUrl }">
    <button class="project-preview" type="button" :aria-label="`View details for ${project.title}`" @click="emit('details', project)">
      <div class="browser-frame" :class="`browser-${project.id}`">
        <div class="browser-bar"><span></span><span></span><span></span><i></i><b>PROJECT PREVIEW</b></div>
        <img v-if="previewImage && !imageFailed" class="project-screenshot" :src="previewImage" :alt="`${project.title} screenshot`" loading="lazy" decoding="async" @error="imageFailed = true" />
        <div v-else class="preview-placeholder"><span class="preview-orbit"></span><span class="preview-placeholder-mark">{{ initials }}</span><strong>{{ project.title }}</strong><small>Screenshot coming soon</small></div>
      </div>
      <span class="preview-open" aria-hidden="true">↗</span>
    </button>
    <div class="project-info"><div class="project-meta"><span>{{ project.category }}</span><span v-if="project.featured" class="featured-label">FEATURED</span><span v-else class="project-status">{{ project.liveUrl ? 'LIVE' : 'IN PROGRESS' }}</span></div>
      <h3>{{ project.title }}</h3><p>{{ project.description }}</p>
      <div v-if="project.technologies.length" class="project-stack"><span v-for="technology in project.technologies" :key="technology">{{ technology }}</span></div>
      <div class="project-actions"><a v-if="project.liveUrl" class="project-link" :href="project.liveUrl" target="_blank" rel="noopener noreferrer">Live website <span aria-hidden="true">↗</span></a><a v-if="project.githubUrl" class="project-link project-link-muted" :href="project.githubUrl" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a><button class="details-button" type="button" @click="emit('details', project)">View details <span aria-hidden="true">→</span></button></div>
    </div>
  </article>
</template>
