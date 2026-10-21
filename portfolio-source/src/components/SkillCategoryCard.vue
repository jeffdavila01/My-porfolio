<script setup>
defineProps({ category: { type: Object, required: true }, icon: { type: [Object, Function], required: true } })
const assetUrl = path => `${import.meta.env.BASE_URL}${path.replace(/^\.?\//, '')}`
</script>

<template>
  <article class="technical-category" :aria-labelledby="`skill-category-${category.id}`">
    <header class="technical-category-heading"><span class="technical-category-icon"><component :is="icon" :size="22" aria-hidden="true" /></span><div><h3 :id="`skill-category-${category.id}`">{{ category.title }}</h3><p>{{ category.introduction }}</p></div></header>
    <ul class="technical-skill-list"><li v-for="skill in category.skills" :key="skill.name"><div class="technical-skill-row"><span v-if="skill.image" class="technical-language-icon"><img :src="assetUrl(skill.image)" alt="" width="34" height="34" loading="lazy" decoding="async" /></span><div class="technical-skill-copy"><div class="technical-skill-title"><h4>{{ skill.name }}</h4><span class="technical-skill-context" :class="{ 'context-project': skill.context === 'Used in projects' }">{{ skill.context }}</span></div><p>{{ skill.description }}</p></div></div></li></ul>
  </article>
</template>
