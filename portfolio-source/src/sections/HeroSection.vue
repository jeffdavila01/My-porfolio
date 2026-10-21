<script setup>
import { ArrowDown, ArrowUpRight, Code2, Sparkles } from '@lucide/vue'

const profilePhoto = `${import.meta.env.BASE_URL}images/jeffrey-davila-profile.png`

function handlePointerMove(event) {
  if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return
  const bounds = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
  event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
}
</script>

<template>
  <section id="home" class="hero-section section-wrap" aria-labelledby="hero-title" @pointermove="handlePointerMove">
    <div class="hero-copy">
      <p class="eyebrow hero-eyebrow"><span class="eyebrow-dot"></span> AI-ASSISTED WEB DEVELOPER</p>
      <h1 id="hero-title">Jeffrey<br /><span>Davila<span class="hero-period">.</span></span></h1>
      <p class="hero-statement">Turning ideas into <span>interactive</span> digital experiences.</p>
      <p class="hero-description">I build modern, responsive websites and practical web applications by combining web development fundamentals, AI-assisted workflows, creative problem-solving, and hands-on testing.</p>
      <div class="hero-actions">
        <a class="button button-primary" href="#/projects">Explore my projects <ArrowUpRight :size="15" aria-hidden="true" /></a>
        <a class="button button-quiet" href="#/contact">Contact me <ArrowDown :size="14" aria-hidden="true" /></a>
      </div>
      <p class="hero-note"><Sparkles :size="13" aria-hidden="true" /> Thoughtful code. Useful experiences.</p>
    </div>
    <div class="hero-visual" aria-label="Portrait of Jeffrey Davila">
      <div class="orbit orbit-one"></div>
      <div class="orbit orbit-two"></div>
      <div class="portrait-frame">
        <div class="portrait-glow"></div>
        <img class="profile-photo" :src="profilePhoto" alt="Jeffrey Davila smiling in a warm indoor setting" @error="$event.target.classList.add('photo-unavailable')" />
        <div class="portrait-fallback" aria-hidden="true">JD<span>.</span></div>
      </div>
      <div class="float-card float-card-code"><span class="float-icon"><Code2 :size="16" aria-hidden="true" /></span><span><b>Code with purpose</b><small>Web · UI · Applications</small></span></div>
      <div class="float-card float-card-ai"><span class="float-icon spark-icon"><Sparkles :size="16" aria-hidden="true" /></span><span><b>AI-assisted</b><small>Human-directed</small></span></div>
      <div class="hero-visual-caption"><span class="caption-line"></span><span>CREATIVE TECHNOLOGY / 01</span></div>
    </div>
    <a class="scroll-cue" href="#/about"><span>GET TO KNOW ME</span><i><ArrowDown :size="13" aria-hidden="true" /></i></a>
  </section>
</template>
