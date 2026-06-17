<script setup>
import renderMathInElement from 'katex/contrib/auto-render'
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const lang = ref('en')
const storageKey = 'calc1-slide-language'
const route = useRoute()
let renderTimer = 0
let observer
let rendering = false

function renderLooseMathNow() {
  const root = document.querySelector('#app')
  if (!root || rendering) return
  rendering = true
  try {
    renderMathInElement(root, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '\\[', right: '\\]', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
      ],
      ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
      ignoredClasses: ['katex', 'katex-display'],
      throwOnError: false,
    })
  } finally {
    window.setTimeout(() => {
      rendering = false
    }, 0)
  }
}

function queueLooseMathRender() {
  nextTick(() => {
    window.requestAnimationFrame(renderLooseMathNow)
    window.setTimeout(renderLooseMathNow, 100)
    window.setTimeout(renderLooseMathNow, 350)
    window.setTimeout(renderLooseMathNow, 800)
  })
}

function throttleLooseMathRender() {
  window.clearTimeout(renderTimer)
  renderTimer = window.setTimeout(renderLooseMathNow, 60)
}

function apply(next) {
  lang.value = next === 'vi' ? 'vi' : 'en'
  document.documentElement.setAttribute('data-course-lang', lang.value)
  try {
    localStorage.setItem(storageKey, lang.value)
  } catch (error) {}
  queueLooseMathRender()
}

onMounted(() => {
  let saved = 'en'
  try {
    saved = localStorage.getItem(storageKey) || 'en'
  } catch (error) {}
  apply(saved)
  const root = document.querySelector('#app')
  if (root) {
    observer = new MutationObserver(throttleLooseMathRender)
    observer.observe(root, { childList: true, subtree: true })
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.clearTimeout(renderTimer)
})

watch(() => route.fullPath, queueLooseMathRender)
</script>

<template>
  <div class="slide-lang-toggle" aria-label="Language">
    <button type="button" :aria-pressed="lang === 'en'" @click="apply('en')">EN</button>
    <button type="button" :aria-pressed="lang === 'vi'" @click="apply('vi')">VI</button>
  </div>
</template>
