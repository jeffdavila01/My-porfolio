<script setup>
const skills = [
  { name: 'HTML5', group: 'CORE TECHNOLOGY', symbol: '5', className: 'skill-html', description: 'Semantic structure and page development.' },
  { name: 'CSS3', group: 'CORE TECHNOLOGY', symbol: '✳', className: 'skill-css', description: 'Responsive layouts, animation, Grid, and Flexbox.' },
  { name: 'JavaScript', group: 'CORE TECHNOLOGY', symbol: 'JS', className: 'skill-js', description: 'Website interactivity and application logic.' },
  { name: 'SQL', group: 'CORE TECHNOLOGY', symbol: '⌘', className: 'skill-sql', description: 'Queries, data organization, and relational fundamentals.' },
  { name: 'Vue.js', group: 'CORE TECHNOLOGY', symbol: 'V', className: 'skill-vue', description: 'Component-based interfaces and reactive applications.' },
  { name: 'AI-assisted development', group: 'CAPABILITY', symbol: '✳', className: 'skill-ai', description: 'Structured prompts, code review, testing, and iteration.' },
  { name: 'Responsive UI', group: 'CAPABILITY', symbol: '▤', className: 'skill-ui', description: 'Turning interface designs into working layouts.' },
  { name: 'Git & GitHub', group: 'CAPABILITY', symbol: '⑂', className: 'skill-git', description: 'Version control and collaborative workflows.' },
]
</script>

<template>
  <section id="skills" class="skills-section section-wrap section-space" aria-labelledby="skills-title">
    <div class="section-heading section-heading-row reveal">
      <div><p class="eyebrow"><span class="section-index">02</span> THE TOOLKIT</p><h2 id="skills-title">Technologies<br /><span>& tools.</span></h2></div>
      <p class="section-side-note">A growing toolkit for shaping useful, thoughtful digital experiences.</p>
    </div>
    <div class="skills-grid">
      <article v-for="(skill, index) in skills" :key="skill.name" class="skill-card reveal" :class="[skill.className, `skill-position-${index + 1}`]">
        <div class="skill-card-top"><span class="skill-symbol" aria-hidden="true">{{ skill.symbol }}</span><span class="skill-group">{{ skill.group }}</span></div>
        <div><h3>{{ skill.name }}</h3><p>{{ skill.description }}</p></div>
        <span class="skill-card-corner" aria-hidden="true">↗</span>
      </article>
    </div>
  </section>
</template>
