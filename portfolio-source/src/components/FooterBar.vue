<script setup>
import { site } from '../data/site.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer section-wrap">
    <a class="wordmark footer-mark" href="#/home"><span class="wordmark-icon">JD<span>.</span></span><span class="wordmark-name">{{ site.name }}</span></a>
    <p>Designed with care. Built with curiosity.</p>
    <a class="back-top" href="#/home">Home <span aria-hidden="true">↑</span></a>
    <small>© {{ year }} Jeffrey Davila</small>
  </footer>
</template>
