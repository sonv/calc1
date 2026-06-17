<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  kind: { type: String, default: 'inv' },
})

const canvasEl = ref(null)
let ctx
let raf = 0
let resizeObserver
let width = 640
let height = 280

const palette = {
  ink: '#13201c',
  muted: '#52605b',
  line: '#cdd8d2',
  green: '#1f6f68',
  blue: '#24588f',
  gold: '#9b6a1f',
  red: '#a33830',
}

// Sequence definitions: n starts at 1.
const seqDefs = {
  inv: { f: (n) => 1 / n, limit: 0, label: 'a_n = 1/n', N: 18, ymin: -0.15, ymax: 1.15 },
  ratio: { f: (n) => n / (n + 1), limit: 1, label: 'a_n = n/(n+1)', N: 18, ymin: -0.1, ymax: 1.2 },
  alt: { f: (n) => (n % 2 === 0 ? 1 : -1), limit: null, label: 'a_n = (-1)^n', N: 16, ymin: -1.4, ymax: 1.4 },
  altinv: { f: (n) => (n % 2 === 0 ? 1 : -1) / n, limit: 0, label: 'a_n = (-1)^n / n', N: 18, ymin: -1.2, ymax: 1.2 },
}

function measure() {
  const canvas = canvasEl.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  width = Math.max(rect.width, 320)
  height = Math.max(rect.height, 200)
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = Math.round(width * dpr)
  canvas.height = Math.round(height * dpr)
  ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  draw()
}

function frame(ymin, ymax) {
  return { left: 44, right: width - 16, top: 16, bottom: height - 28, ymin, ymax }
}

function drawAxes(fr, xmaxLabel) {
  ctx.strokeStyle = palette.line
  ctx.lineWidth = 1
  // y zero line
  const y0 = mapY(0, fr)
  ctx.beginPath()
  ctx.moveTo(fr.left, fr.top)
  ctx.lineTo(fr.left, fr.bottom)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(fr.left, y0)
  ctx.lineTo(fr.right, y0)
  ctx.stroke()
  ctx.fillStyle = palette.muted
  ctx.font = '11px Inter, system-ui, sans-serif'
  ctx.fillText('0', fr.left - 14, y0 + 4)
  if (xmaxLabel) ctx.fillText('n', fr.right - 6, y0 + 16)
}

function mapX(n, fr, N) {
  return fr.left + ((n - 1) / (N - 1)) * (fr.right - fr.left)
}
function mapY(v, fr) {
  return fr.bottom - ((v - fr.ymin) / (fr.ymax - fr.ymin)) * (fr.bottom - fr.top)
}

function drawLimitLine(L, fr, color) {
  if (L === null || L === undefined) return
  const y = mapY(L, fr)
  ctx.save()
  ctx.strokeStyle = color
  ctx.setLineDash([6, 5])
  ctx.lineWidth = 1.6
  ctx.beginPath()
  ctx.moveTo(fr.left, y)
  ctx.lineTo(fr.right, y)
  ctx.stroke()
  ctx.restore()
  ctx.fillStyle = color
  ctx.font = '12px Inter, system-ui, sans-serif'
  ctx.fillText('L = ' + L, fr.right - 52, y - 6)
}

function dot(x, y, color, r = 3.4) {
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.fill()
}

function drawSequence(def) {
  const fr = frame(def.ymin, def.ymax)
  ctx.clearRect(0, 0, width, height)
  drawAxes(fr, true)
  // epsilon band around limit
  if (def.limit !== null) {
    const eps = (def.ymax - def.ymin) * 0.08
    ctx.fillStyle = 'rgba(31, 111, 104, 0.10)'
    const yTop = mapY(def.limit + eps, fr)
    const yBot = mapY(def.limit - eps, fr)
    ctx.fillRect(fr.left, yTop, fr.right - fr.left, yBot - yTop)
  }
  drawLimitLine(def.limit, fr, palette.gold)
  for (let n = 1; n <= def.N; n += 1) {
    const x = mapX(n, fr, def.N)
    const y = mapY(def.f(n), fr)
    ctx.strokeStyle = 'rgba(36, 88, 143, 0.25)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(x, mapY(0, fr))
    ctx.lineTo(x, y)
    ctx.stroke()
    dot(x, y, palette.blue)
  }
}

function drawSqueeze() {
  const N = 18
  const fr = frame(-1.15, 1.15)
  ctx.clearRect(0, 0, width, height)
  drawAxes(fr, true)
  drawLimitLine(0, fr, palette.gold)
  const upper = (n) => 1 / n
  const lower = (n) => -1 / n
  const mid = (n) => Math.sin(n) / n
  const series = [
    { f: upper, color: palette.gold },
    { f: lower, color: palette.blue },
    { f: mid, color: palette.green },
  ]
  // envelopes as faint curves
  series.forEach((s) => {
    ctx.strokeStyle = s.color + '66'
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let n = 1; n <= N; n += 1) {
      const x = mapX(n, fr, N)
      const y = mapY(s.f(n), fr)
      if (n === 1) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
  })
  series.forEach((s) => {
    for (let n = 1; n <= N; n += 1) {
      dot(mapX(n, fr, N), mapY(s.f(n), fr), s.color, s.color === palette.green ? 3.6 : 2.6)
    }
  })
}

function drawSin1x() {
  const fr = frame(-1.25, 1.25)
  ctx.clearRect(0, 0, width, height)
  // axes (x from 0 to 0.6)
  const xmin = 0
  const xmax = 0.6
  const y0 = mapY(0, fr)
  ctx.strokeStyle = palette.line
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(fr.left, fr.top)
  ctx.lineTo(fr.left, fr.bottom)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(fr.left, y0)
  ctx.lineTo(fr.right, y0)
  ctx.stroke()
  ctx.fillStyle = palette.muted
  ctx.font = '11px Inter, system-ui, sans-serif'
  ctx.fillText('0', fr.left - 12, y0 + 14)
  ctx.fillText('x', fr.right - 8, y0 + 16)
  drawLimitLine(0, fr, palette.line)
  // sin(1/x)
  ctx.strokeStyle = palette.green
  ctx.lineWidth = 1.7
  ctx.beginPath()
  const steps = 1400
  let started = false
  for (let i = 0; i <= steps; i += 1) {
    const x = xmin + (i / steps) * (xmax - xmin)
    if (x <= 0.0025) continue
    const v = Math.sin(1 / x)
    const px = fr.left + ((x - xmin) / (xmax - xmin)) * (fr.right - fr.left)
    const py = mapY(v, fr)
    if (!started) { ctx.moveTo(px, py); started = true } else ctx.lineTo(px, py)
  }
  ctx.stroke()
}

function draw() {
  if (!ctx) return
  if (props.kind === 'squeeze') return drawSqueeze()
  if (props.kind === 'sin1x') return drawSin1x()
  const def = seqDefs[props.kind] || seqDefs.inv
  drawSequence(def)
}

onMounted(() => {
  measure()
  resizeObserver = new ResizeObserver(measure)
  resizeObserver.observe(canvasEl.value)
  window.addEventListener('resize', measure)
  window.setTimeout(measure, 250)
  window.setTimeout(measure, 800)
})

onBeforeUnmount(() => {
  window.cancelAnimationFrame(raf)
  resizeObserver?.disconnect()
  window.removeEventListener('resize', measure)
})

watch(() => props.kind, draw)
</script>

<template>
  <canvas ref="canvasEl" class="seq-canvas" :data-seq-kind="kind" aria-hidden="true"></canvas>
</template>
