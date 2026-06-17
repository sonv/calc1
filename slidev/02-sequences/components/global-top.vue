<script setup>
import { onMounted, ref } from 'vue'

const lang = ref('en')
const storageKey = 'calc1-slide-language'

function apply(next) {
  lang.value = next === 'vi' ? 'vi' : 'en'
  document.documentElement.setAttribute('data-course-lang', lang.value)
  try {
    localStorage.setItem(storageKey, lang.value)
  } catch (error) {}
}

onMounted(() => {
  let saved = 'en'
  try {
    saved = localStorage.getItem(storageKey) || 'en'
  } catch (error) {}
  apply(saved)
})
</script>

<template>
  <div class="slide-lang-toggle" aria-label="Language">
    <button type="button" :aria-pressed="lang === 'en'" @click="apply('en')">EN</button>
    <button type="button" :aria-pressed="lang === 'vi'" @click="apply('vi')">VI</button>
  </div>
</template>

