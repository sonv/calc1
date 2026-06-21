<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  kind: { type: String, default: 'secant' },
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

// frame: maps math coords [xmin,xmax]x[ymin,ymax] into the canvas
function frame(xmin, xmax, ymin, ymax) {
  return { left: 40, right: width - 16, top: 16, bottom: height - 26, xmin, xmax, ymin, ymax }
}
function mapX(x, fr) {
  return fr.left + ((x - fr.xmin) / (fr.xmax - fr.xmin)) * (fr.right - fr.left)
}
function mapY(v, fr) {
  return fr.bottom - ((v - fr.ymin) / (fr.ymax - fr.ymin)) * (fr.bottom - fr.top)
}

function axes(fr, xlabel = 'x', ylabel = 'y') {
  ctx.strokeStyle = palette.line
  ctx.lineWidth = 1
  const x0 = mapX(0, fr)
  const y0 = mapY(0, fr)
  // x-axis
  ctx.beginPath()
  ctx.moveTo(fr.left, y0)
  ctx.lineTo(fr.right, y0)
  ctx.stroke()
  // y-axis
  ctx.beginPath()
  ctx.moveTo(x0, fr.top)
  ctx.lineTo(x0, fr.bottom)
  ctx.stroke()
  ctx.fillStyle = palette.muted
  ctx.font = '11px Inter, system-ui, sans-serif'
  ctx.fillText(xlabel, fr.right - 8, y0 + 14)
  ctx.fillText(ylabel, x0 + 6, fr.top + 10)
}

function plot(fn, fr, color, lw = 2, xmin, xmax) {
  const a = xmin === undefined ? fr.xmin : xmin
  const b = xmax === undefined ? fr.xmax : xmax
  ctx.strokeStyle = color
  ctx.lineWidth = lw
  ctx.beginPath()
  const steps = 600
  let started = false
  for (let i = 0; i <= steps; i += 1) {
    const x = a + (i / steps) * (b - a)
    const v = fn(x)
    if (!isFinite(v) || v < fr.ymin - 2 || v > fr.ymax + 2) { started = false; continue }
    const px = mapX(x, fr)
    const py = mapY(v, fr)
    if (!started) { ctx.moveTo(px, py); started = true } else ctx.lineTo(px, py)
  }
  ctx.stroke()
}

function dot(x, y, color, r = 4, fill = true) {
  ctx.lineWidth = 2
  ctx.strokeStyle = color
  ctx.fillStyle = fill ? color : '#ffffff'
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  if (fill) ctx.fill()
  else { ctx.fill(); ctx.stroke() }
}

function dashedLine(x1, y1, x2, y2, color) {
  ctx.save()
  ctx.strokeStyle = color
  ctx.setLineDash([5, 4])
  ctx.lineWidth = 1.4
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.restore()
}

// --- Tangent as a limit of secants on y = x^2 at a = 1 ---
function drawSecant() {
  const fr = frame(-0.4, 2.6, -0.5, 5.2)
  ctx.clearRect(0, 0, width, height)
  axes(fr)
  const f = (x) => x * x
  plot(f, fr, palette.green, 2.2)
  const a = 1
  const Pa = { x: mapX(a, fr), y: mapY(f(a), fr) }
  // secant lines for several h, fading toward the tangent
  const hs = [1.4, 0.9, 0.5]
  hs.forEach((h, i) => {
    const xb = a + h
    const slope = (f(xb) - f(a)) / h
    const line = (x) => f(a) + slope * (x - a)
    ctx.globalAlpha = 0.32 + i * 0.12
    plot(line, fr, palette.blue, 1.4)
    dot(mapX(xb, fr), mapY(f(xb), fr), palette.blue, 3)
    ctx.globalAlpha = 1
  })
  // tangent line: slope 2
  const tan = (x) => f(a) + 2 * (x - a)
  plot(tan, fr, palette.gold, 2.4)
  dot(Pa.x, Pa.y, palette.red, 4.5)
  ctx.fillStyle = palette.muted
  ctx.font = '12px Inter, system-ui, sans-serif'
  ctx.fillText('P(1,1)', Pa.x + 8, Pa.y + 4)
  ctx.fillStyle = palette.gold
  ctx.fillText('tangent: slope 2', mapX(1.5, fr), mapY(0.7, fr))
}

// --- Corner: y = |x|, not differentiable at 0 ---
function drawCorner() {
  const fr = frame(-2.2, 2.2, -0.4, 2.2)
  ctx.clearRect(0, 0, width, height)
  axes(fr)
  plot((x) => Math.abs(x), fr, palette.green, 2.4)
  dot(mapX(0, fr), mapY(0, fr), palette.red, 4.5)
  ctx.fillStyle = palette.muted
  ctx.font = '12px Inter, system-ui, sans-serif'
  ctx.fillText("slope -1", mapX(-1.7, fr), mapY(1.7, fr))
  ctx.fillText("slope +1", mapX(0.7, fr), mapY(1.7, fr))
  ctx.fillStyle = palette.red
  ctx.fillText('corner at 0', mapX(0.15, fr), mapY(0.15, fr))
}

// --- Removable discontinuity ---
function drawRemovable() {
  const fr = frame(-1, 5, -0.5, 4.5)
  ctx.clearRect(0, 0, width, height)
  axes(fr)
  const a = 2
  // line y = x with a hole at x=2, and a stray value above
  plot((x) => x, fr, palette.green, 2.2, fr.xmin, a - 0.001)
  plot((x) => x, fr, palette.green, 2.2, a + 0.001, fr.xmax)
  dot(mapX(a, fr), mapY(a, fr), palette.green, 5, false) // open hole at (2,2)
  dot(mapX(a, fr), mapY(3.6, fr), palette.red, 4.5) // f(2) defined elsewhere
  ctx.fillStyle = palette.muted
  ctx.font = '12px Inter, system-ui, sans-serif'
  ctx.fillText('limit = 2', mapX(2.2, fr), mapY(2.0, fr))
  ctx.fillStyle = palette.red
  ctx.fillText('f(2) = 3.6', mapX(2.2, fr), mapY(3.65, fr))
}

// --- Jump discontinuity (sign-like step) ---
function drawJump() {
  const fr = frame(-3, 3, -1.8, 1.8)
  ctx.clearRect(0, 0, width, height)
  axes(fr)
  plot(() => -1, fr, palette.green, 2.4, fr.xmin, -0.001)
  plot(() => 1, fr, palette.green, 2.4, 0.001, fr.xmax)
  dot(mapX(0, fr), mapY(-1, fr), palette.green, 5, false)
  dot(mapX(0, fr), mapY(1, fr), palette.green, 5, false)
  dot(mapX(0, fr), mapY(0, fr), palette.red, 4.5)
  ctx.fillStyle = palette.muted
  ctx.font = '12px Inter, system-ui, sans-serif'
  ctx.fillText('left -> -1', mapX(-2.7, fr), mapY(-1.3, fr))
  ctx.fillText('right -> +1', mapX(0.6, fr), mapY(1.35, fr))
}

// --- Infinite discontinuity: y = 1/x ---
function drawInfinite() {
  const fr = frame(-3, 3, -3.2, 3.2)
  ctx.clearRect(0, 0, width, height)
  axes(fr)
  plot((x) => 1 / x, fr, palette.green, 2.2, fr.xmin, -0.06)
  plot((x) => 1 / x, fr, palette.green, 2.2, 0.06, fr.xmax)
  dashedLine(mapX(0, fr), fr.top, mapX(0, fr), fr.bottom, palette.red)
  ctx.fillStyle = palette.red
  ctx.font = '12px Inter, system-ui, sans-serif'
  ctx.fillText('x = 0', mapX(0.12, fr), fr.top + 12)
}

// --- IVT: continuous curve crosses a target value N ---
function drawIvt() {
  const fr = frame(-0.2, 3.2, -2.5, 3.5)
  ctx.clearRect(0, 0, width, height)
  axes(fr)
  // f(x) = x^3 - 3x with a root between 1.5 and 2 (f= -ish to +ish)
  const f = (x) => 0.9 * (x - 0.3) * (x - 1.6) * (x - 2.7) + 0.4
  plot(f, fr, palette.green, 2.3)
  const a = 0.6
  const b = 2.9
  // target N = 0 (x-axis), show f(a)<0<f(b)
  dot(mapX(a, fr), mapY(f(a), fr), palette.blue, 4.5)
  dot(mapX(b, fr), mapY(f(b), fr), palette.blue, 4.5)
  // a crossing c
  dashedLine(fr.left, mapY(0, fr), fr.right, mapY(0, fr), palette.gold)
  ctx.fillStyle = palette.muted
  ctx.font = '12px Inter, system-ui, sans-serif'
  ctx.fillText('f(a) < 0', mapX(a, fr) - 6, mapY(f(a), fr) + 16)
  ctx.fillText('f(b) > 0', mapX(b, fr) - 50, mapY(f(b), fr) - 8)
  ctx.fillStyle = palette.gold
  ctx.fillText('N = 0', fr.right - 50, mapY(0, fr) - 6)
}

// --- Linear approximation: curve and its tangent at a ---
function drawLin() {
  const fr = frame(-1, 6, -0.3, 3.2)
  ctx.clearRect(0, 0, width, height)
  axes(fr)
  const f = (x) => Math.sqrt(x + 3)
  const a = 1
  const fa = f(a)
  const fpa = 1 / (2 * Math.sqrt(a + 3))
  const L = (x) => fa + fpa * (x - a)
  plot(f, fr, palette.green, 2.3)
  plot(L, fr, palette.gold, 2.0)
  dot(mapX(a, fr), mapY(fa, fr), palette.red, 4.5)
  ctx.fillStyle = palette.green
  ctx.font = '12px Inter, system-ui, sans-serif'
  ctx.fillText('y = f(x)', mapX(4.3, fr), mapY(f(4.3), fr) - 8)
  ctx.fillStyle = palette.gold
  ctx.fillText('L(x): tangent at a', mapX(2.2, fr), mapY(L(2.2), fr) + 18)
  ctx.fillStyle = palette.muted
  ctx.fillText('a = 1', mapX(a, fr) - 8, mapY(0, fr) + 16)
}

function draw() {
  if (!ctx) return
  switch (props.kind) {
    case 'corner': return drawCorner()
    case 'removable': return drawRemovable()
    case 'jump': return drawJump()
    case 'infinite': return drawInfinite()
    case 'ivt': return drawIvt()
    case 'lin': return drawLin()
    default: return drawSecant()
  }
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
  <canvas ref="canvasEl" class="seq-canvas" :data-fn-kind="kind" aria-hidden="true"></canvas>
</template>
