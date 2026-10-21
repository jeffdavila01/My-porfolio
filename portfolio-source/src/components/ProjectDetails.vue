<script setup>
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'

const props = defineProps({ project: { type: Object, default: null }, open: { type: Boolean, default: false } })
const emit = defineEmits(['close'])
const dialog = ref(null)
const imageFailed = ref(false)
const screenshot = computed(() => {
  const image = props.project?.image
  return !image || /^(https?:|data:)/.test(image) ? image : `${import.meta.env.BASE_URL}${image.replace(/^\.?\//, '')}`
})
watch(() => props.project?.image, () => { imageFailed.value = false })
let previousOverflow

function unlockScroll() {
  if (previousOverflow !== undefined) {
    document.body.style.overflow = previousOverflow
    previousOverflow = undefined
  }
}

function closeDialog() {
  if (dialog.value?.open) dialog.value.close()
}
function handleNativeClose() {
  // Ignore queued close events if a newer navigation has reopened the dialog.
  if (dialog.value?.open) return
  unlockScroll()
  if (props.open) emit('close')
}
function handleBackdropClick(event) {
  if (event.target !== dialog.value) return
  const bounds = dialog.value.getBoundingClientRect()
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog()
}
watch(() => props.open, async (isOpen) => {
  await nextTick()
  if (!dialog.value) return
  if (isOpen !== props.open) return
  if (isOpen && !dialog.value.open) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.value.showModal()
  }
  if (!isOpen) {
    if (dialog.value.open) dialog.value.close()
    unlockScroll()
  }
}, { immediate: true })
onUnmounted(unlockScroll)
</script>

<template>
  <dialog ref="dialog" class="project-dialog" aria-labelledby="project-dialog-title" @click="handleBackdropClick" @close="handleNativeClose">
    <button class="dialog-close" type="button" aria-label="Close project details" @click="closeDialog">×</button>
    <template v-if="project"><p class="eyebrow">{{ project.category }}</p><h2 id="project-dialog-title">{{ project.title }}</h2><p class="dialog-description">{{ project.details }}</p>
      <a v-if="screenshot && !imageFailed" class="dialog-screenshot-link" :href="screenshot" target="_blank" rel="noopener noreferrer" :aria-label="`Open full screenshot of ${project.title} in a new tab`"><img class="dialog-screenshot" :src="screenshot" :alt="`${project.title} screenshot`" decoding="async" @error="imageFailed = true" /><span>Open full screenshot ↗</span></a>
      <div v-if="project.technologies.length" class="dialog-block"><h3>Technologies</h3><ul class="tag-list"><li v-for="technology in project.technologies" :key="technology">{{ technology }}</li></ul></div>
      <div v-if="project.features.length" class="dialog-block"><h3>Features</h3><ul><li v-for="feature in project.features" :key="feature">{{ feature }}</li></ul></div>
      <div class="dialog-actions"><a v-if="project.liveUrl" class="button button-primary" :href="project.liveUrl" target="_blank" rel="noopener noreferrer">Open live website <span aria-hidden="true">↗</span></a><a v-if="project.githubUrl" class="button button-quiet" :href="project.githubUrl" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a></div>
    </template>
  </dialog>
</template>
