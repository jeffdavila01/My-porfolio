<script setup>
import { Printer } from '@lucide/vue'
import { resume } from '../data/resume.js'
import { gmailComposeUrl } from '../data/site.js'
function printResume() { window.print() }
</script>

<template>
  <section id="resume" class="resume-section section-wrap section-space" aria-labelledby="resume-title">
    <div class="section-heading section-heading-row resume-heading"><div><p class="eyebrow">MY BACKGROUND</p><h2 id="resume-title">My <span>résumé.</span></h2></div><button class="button button-quiet resume-print-button" type="button" @click="printResume"><Printer :size="16" aria-hidden="true" /> Print / Save PDF</button></div>
    <article class="resume-sheet" aria-label="Jeffrey Davila résumé">
      <header class="resume-sheet-header"><h3>{{ resume.name }}</h3><p class="resume-role">{{ resume.headline }}</p><div class="resume-contact"><span>{{ resume.location }}</span><a :href="`tel:${resume.phone.replaceAll('-', '')}`">{{ resume.phone }}</a><a :href="gmailComposeUrl(resume.email)" target="_blank" rel="noopener noreferrer">{{ resume.email }}</a></div></header>
      <section class="resume-block" aria-labelledby="resume-profile"><h4 id="resume-profile">Profile</h4><p>{{ resume.profile }}</p></section>
      <section class="resume-block" aria-labelledby="resume-skills"><h4 id="resume-skills">Skills</h4><ul class="resume-skill-list"><li v-for="skill in resume.skills" :key="skill">{{ skill }}</li></ul></section>
      <section class="resume-block" aria-labelledby="resume-experience"><h4 id="resume-experience">Experience</h4><div v-for="job in resume.experience" :key="job.company" class="resume-job"><h5>{{ job.company }}</h5><p class="resume-job-role">{{ job.role }} <span>| {{ job.dates }}</span></p><ul><li v-for="item in job.responsibilities" :key="item">{{ item }}</li></ul></div></section>
      <section class="resume-block" aria-labelledby="resume-volunteer"><h4 id="resume-volunteer">Volunteer Experience</h4><div v-for="job in resume.volunteer" :key="job.company" class="resume-job"><h5>{{ job.company }}</h5><p class="resume-job-role">{{ job.role }} <span>| {{ job.dates }}</span></p><ul><li v-for="item in job.responsibilities" :key="item">{{ item }}</li></ul></div></section>
      <div class="resume-bottom-grid"><section class="resume-block" aria-labelledby="resume-education"><h4 id="resume-education">Education</h4><div v-for="education in resume.education" :key="education.school" class="resume-education"><h5>{{ education.school }}</h5><p class="resume-dates">{{ education.dates }}</p><ul v-if="education.details.length"><li v-for="item in education.details" :key="item">{{ item }}</li></ul></div></section><section class="resume-block" aria-labelledby="resume-references"><h4 id="resume-references">References</h4><div v-for="reference in resume.references" :key="reference.name" class="resume-reference"><h5>{{ reference.name }}</h5><p>{{ reference.role }} · {{ reference.company }}</p><a :href="`tel:${reference.phone}`">{{ reference.phone }}</a></div></section></div>
    </article>
  </section>
</template>
