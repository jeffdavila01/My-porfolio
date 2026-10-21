<script setup>
const practices = [
  { number: '01', title: 'Structured prompting', text: 'Turn project requirements into clear development instructions.' },
  { number: '02', title: 'AI-generated implementations', text: 'Use AI tools to accelerate initial code and component work.' },
  { number: '03', title: 'Testing & debugging', text: 'Inspect behavior, errors, and the results in a real browser.' },
  { number: '04', title: 'Continuous refinement', text: 'Improve the implementation through testing and iteration.' },
]
</script>

<template>
  <section class="ai-section section-wrap section-space" aria-labelledby="ai-title">
    <div class="ai-intro reveal"><p class="eyebrow"><span class="section-index">05</span> A PRACTICAL PARTNERSHIP</p><h2 id="ai-title">AI-assisted.<br /><span>Human-directed.</span></h2><p>I use AI as a development assistant to turn structured requirements into working implementations. I guide the process through prompts, inspect the generated results, test functionality, investigate errors, and refine the application through repeated improvements.</p></div>
    <div class="ai-visual reveal" aria-label="A visual outline of an AI-assisted development loop">
      <div class="ai-visual-top"><span><i></i> DEVELOPMENT LOOP</span><span>CONCEPT / 05</span></div>
      <div class="ai-loop"><div class="loop-center"><span>JD<span>.</span></span><small>GUIDE<br />REVIEW<br />REFINE</small></div><div class="loop-node loop-node-one"><i>01</i><span>Prompt</span></div><div class="loop-node loop-node-two"><i>02</i><span>Build</span></div><div class="loop-node loop-node-three"><i>03</i><span>Test</span></div><div class="loop-node loop-node-four"><i>04</i><span>Improve</span></div><span class="loop-ring loop-ring-one"></span><span class="loop-ring loop-ring-two"></span></div>
      <div class="ai-visual-foot"><span>AI SUPPORTS THE PROCESS</span><span>PEOPLE DIRECT THE RESULT <b>↗</b></span></div>
    </div>
    <div class="ai-practices"><article v-for="practice in practices" :key="practice.number" class="ai-practice reveal"><span>{{ practice.number }}</span><div><h3>{{ practice.title }}</h3><p>{{ practice.text }}</p></div></article></div>
  </section>
</template>
