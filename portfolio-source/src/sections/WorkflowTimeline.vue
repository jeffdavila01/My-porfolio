<script setup>
const steps = [
  { number: '01', title: 'Plan & prompt', text: 'Understand the requirements, identify features, choose technologies, and shape a clear prompt.' },
  { number: '02', title: 'Generate & build', text: 'Use AI-assisted tools to help develop an initial implementation and connect its parts.' },
  { number: '03', title: 'Run & preview', text: 'Run locally, inspect the interface, and check whether the expected features are present.' },
  { number: '04', title: 'Test & debug', text: 'Use browser tools and logs to find errors, layout problems, and unexpected behavior.' },
  { number: '05', title: 'Refine & retest', text: 'Correct issues, improve responsiveness, and retest the experience.' },
  { number: '06', title: 'Deploy & verify', text: 'When authorized, publish with a suitable host and verify the live site.' },
  { number: '07', title: 'Deliver & improve', text: 'Finish with a review, clear handoff, and a path for future improvements.' },
]
</script>

<template>
  <section id="workflow" class="workflow-section section-wrap section-space" aria-labelledby="workflow-title">
    <div class="section-heading section-heading-row reveal">
      <div><p class="eyebrow"><span class="section-index">03</span> HOW I WORK</p><h2 id="workflow-title">From idea to<br /><span>working website.</span></h2></div>
      <p class="section-side-note">Clear instructions, generated code, manual validation, and continuous improvement.</p>
    </div>
    <ol class="workflow-list">
      <li v-for="step in steps" :key="step.number" class="workflow-step reveal">
        <span class="workflow-number">{{ step.number }}</span><div class="workflow-content"><span class="workflow-connector" aria-hidden="true"></span><h3>{{ step.title }}</h3><p>{{ step.text }}</p></div>
      </li>
    </ol>
  </section>
</template>
