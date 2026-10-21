<script setup>
const highlights = [
  { number: '01', title: 'Creative problem solving', text: 'Break a challenge into clear steps and practical choices.' },
  { number: '02', title: 'AI-assisted development', text: 'Use AI tools with direction, review, and hands-on validation.' },
  { number: '03', title: 'Responsive web design', text: 'Shape layouts that work across screens and devices.' },
  { number: '04', title: 'Testing & debugging', text: 'Inspect behavior, find issues, refine, and test again.' },
]
</script>

<template>
  <section id="about" class="about-section section-wrap section-space" aria-labelledby="about-title">
    <div class="section-heading reveal">
      <p class="eyebrow"><span class="section-index">01</span> THE PERSON BEHIND THE PIXELS</p>
      <h2 id="about-title">A curious builder<br /><span>with a human focus.</span></h2>
    </div>
    <div class="about-grid">
      <div class="about-main reveal">
        <p class="about-lead">I'm Jeffrey Davila, an AI-Assisted Web Developer passionate about transforming ideas into functional, responsive, and user-friendly digital experiences.</p>
        <p>I work with HTML, CSS, JavaScript, SQL, and Vue.js, using AI-assisted coding tools to support development, improve productivity, and troubleshoot technical challenges.</p>
        <p>My approach combines structured prompting, code review, browser testing, debugging, and continuous improvement to build websites and web applications that meet real user needs.</p>
        <div class="objective-card"><span class="objective-mark" aria-hidden="true">↗</span><div><p class="eyebrow">MY PROFESSIONAL OBJECTIVE</p><p>To contribute as an AI-Assisted Web Developer by combining foundational web development knowledge with AI-powered development workflows to create reliable, visually engaging, and practical digital solutions. I aim to continuously strengthen my coding, debugging, database, and front-end development skills while delivering meaningful results for clients and teams.</p></div></div>
      </div>
      <div class="about-highlights" aria-label="Development strengths">
        <article v-for="item in highlights" :key="item.number" class="highlight-card reveal">
          <span class="highlight-number">{{ item.number }}</span><div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div><span class="highlight-arrow" aria-hidden="true">↗</span>
        </article>
      </div>
    </div>
  </section>
</template>
