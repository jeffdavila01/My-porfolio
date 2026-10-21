<script setup>
import { site } from '../data/site.js'
</script>

<template>
  <section id="contact" class="contact-section section-wrap section-space" aria-labelledby="contact-title">
    <div class="contact-card reveal"><div class="contact-copy"><p class="eyebrow"><span class="section-index">06</span> LET'S CONNECT</p><h2 id="contact-title">Have a project<br /><span>in mind?</span></h2><p>Let's turn your ideas into a modern, functional digital experience.</p><a v-if="site.email" class="button button-primary" :href="`mailto:${site.email}`">Email me <span aria-hidden="true">↗</span></a><a v-else class="button button-primary" :href="site.github" target="_blank" rel="noopener noreferrer">Explore my GitHub <span aria-hidden="true">↗</span></a></div>
      <div class="contact-side"><div class="contact-orb" aria-hidden="true">↗</div><p>Find me online</p><a class="social-link" :href="site.github" target="_blank" rel="noopener noreferrer"><span>GitHub</span><span aria-hidden="true">↗</span></a><a v-if="site.linkedin" class="social-link" :href="site.linkedin" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span aria-hidden="true">↗</span></a></div>
    </div>
  </section>
</template>
