<script setup>
import { Mail } from '@lucide/vue'
import { gmailComposeUrl, site } from '../data/site.js'
</script>

<template>
  <section id="contact" class="contact-section section-wrap section-space" aria-labelledby="contact-title">
    <div class="contact-card reveal">
      <div class="contact-copy"><p class="eyebrow"><span class="section-index">06</span> LET'S CONNECT</p><h2 id="contact-title">Have a project<br /><span>in mind?</span></h2><p>Let's turn your ideas into a modern, functional digital experience.</p><a v-if="site.email" class="button button-primary" :href="gmailComposeUrl()" target="_blank" rel="noopener noreferrer"><Mail :size="16" aria-hidden="true" /> Compose in Gmail <span aria-hidden="true">↗</span></a></div>
      <div class="contact-side"><div class="contact-orb" aria-hidden="true">↗</div><p>Get in touch</p><a v-if="site.email" class="social-link gmail-social-link" :href="gmailComposeUrl()" target="_blank" rel="noopener noreferrer"><span class="gmail-contact-mark"><Mail :size="21" aria-hidden="true" /></span><span class="gmail-contact-label"><span>Gmail</span><small>{{ site.email }}</small></span><span aria-hidden="true">↗</span></a><a v-if="site.linkedin" class="social-link" :href="site.linkedin" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span aria-hidden="true">↗</span></a></div>
    </div>
  </section>
</template>
