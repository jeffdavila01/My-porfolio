<script setup>
import { computed, ref } from 'vue'
import { Code2, Database, GitBranch, LayoutDashboard, PanelsTopLeft, Sparkles } from '@lucide/vue'
import SkillCategoryCard from '../components/SkillCategoryCard.vue'
import { skillCategories } from '../data/skills.js'

const selected = ref('all')
const icons = { code: Code2, database: Database, tools: GitBranch, systems: LayoutDashboard, web: PanelsTopLeft, automation: Sparkles }
const visibleCategories = computed(() => selected.value === 'all' ? skillCategories : skillCategories.filter(category => category.id === selected.value))
</script>

<template>
  <section id="skills" class="skills-section section-wrap section-space" aria-labelledby="skills-title">
    <div class="section-heading section-heading-row reveal"><div><p class="eyebrow"><span class="section-index">02</span> THE TOOLKIT</p><h2 id="skills-title">Technical<br /><span>skills.</span></h2></div><p class="section-side-note">My technical skills span web development, database management, automation, and AI-assisted software development.</p></div>
    <div class="technical-intro"><p>From responsive interfaces to backend and automation concepts, this is the toolkit I'm building with and continuing to explore.</p><p class="technical-context-note">Project use, technical areas, and development interests are labeled individually.</p></div>
    <div class="technical-filters" role="group" aria-label="Filter technical skills by category"><button type="button" :aria-pressed="selected === 'all'" aria-controls="technical-categories" @click="selected = 'all'">All skills</button><button v-for="category in skillCategories" :key="category.id" type="button" :aria-pressed="selected === category.id" aria-controls="technical-categories" @click="selected = category.id">{{ category.shortLabel }}</button></div>
    <p class="visually-hidden" role="status">{{ selected === 'all' ? 'Showing all skill categories' : `Showing ${visibleCategories[0].title}` }}</p>
    <div id="technical-categories" class="technical-categories" :class="{ 'technical-single-category': selected !== 'all' }"><SkillCategoryCard v-for="category in visibleCategories" :key="category.id" :category="category" :icon="icons[category.icon]" /></div>
  </section>
</template>
