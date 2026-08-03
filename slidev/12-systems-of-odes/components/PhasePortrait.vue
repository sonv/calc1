<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  kind: { type: String, default: 'saddle' },
  tone: { type: String, default: 'light' },
})

const canvasEl = ref(null)
let ctx
let raf = 0
let resizeObserver
let motionQuery
let reducedMotion = false
let width = 640
let height = 360

const palette = {
  ink: '#13201c',
  muted: '#52605b',
  line: '#d8e2dc',
  green: '#1f6f68',
  blue: '#24588f',
  gold: '#9b6a1f',
  red: '#a33830',
}

function matrixForKind(kind) {
  if (kind === 'sink') return [[-0.75, 0.18], [0.1, -0.55]]
  if (kind === 'source') return [[0.65, 0.12], [0.18, 0.5]]
  if (kind === 'spiral') return [[0.16, -1.05], [0.9, 0.16]]
  if (kind === 'center') return [[0, -1], [1, 0]]
  if (kind === 'coupled') return [[0.12, 0.85], [-0.55, -0.04]]
  return [[0.9, 0.08], [0.12, -0.7]]
}

function field(x, y) {
  const a = matrixForKind(props.kind)
  return [
    a[0][0] * x + a[0][1] * y,
    a[1][0] * x + a[1][1] * y,
  ]
}

function measure() {
  const canvas = canvasEl.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  const parentRect = canvas.parentElement?.getBoundingClientRect()
  width = Math.max(rect.width, parentRect?.width || 0, 360)
  height = Math.max(rect.height, parentRect?.height || 0, 240)
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = Math.round(width * dpr)
  canvas.height = Math.round(height * dpr)
  ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  draw(performance.now() / 1000)
}

function scale() {
  return Math.min(width, height) / 5.2
}

function px(x) {
  return width / 2 + x * scale()
}

function py(y) {
  return height / 2 - y * scale()
}

function modelX(x) {
  return (x - width / 2) / scale()
}

function modelY(y) {
  return (height / 2 - y) / scale()
}

function drawArrow(x1, y1, x2, y2, color, alpha = 0.72) {
  const angle = Math.atan2(y2 - y1, x2 - x1)
  const head = Math.max(5, Math.min(width, height) * 0.018)
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = 1.35
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(x2, y2)
  ctx.lineTo(x2 - Math.cos(angle - 0.55) * head, y2 - Math.sin(angle - 0.55) * head)
  ctx.lineTo(x2 - Math.cos(angle + 0.55) * head, y2 - Math.sin(angle + 0.55) * head)
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

function paintBackground(dark, time) {
  if (dark) {
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#041115')
    gradient.addColorStop(0.55, '#06161d')
    gradient.addColorStop(1, '#12151e')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    const glowX = width * (0.54 + Math.sin(time * 0.25) * 0.12)
    const glowY = height * (0.5 + Math.cos(time * 0.18) * 0.09)
    const glow = ctx.createRadialGradient(glowX, glowY, 10, glowX, glowY, Math.max(width, height) * 0.72)
    glow.addColorStop(0, 'rgba(88, 229, 205, 0.22)')
    glow.addColorStop(0.42, 'rgba(255, 214, 118, 0.06)')
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = glow
    ctx.fillRect(0, 0, width, height)
    return
  }

  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, width, height)
}

function drawGrid(dark) {
  const s = scale()
  ctx.save()
  ctx.strokeStyle = dark ? 'rgba(218, 255, 245, 0.13)' : 'rgba(19, 32, 28, 0.11)'
  ctx.lineWidth = 1
  for (let gx = width / 2; gx < width; gx += s) {
    ctx.beginPath()
    ctx.moveTo(gx, 0)
    ctx.lineTo(gx, height)
    ctx.stroke()
  }
  for (let gx = width / 2 - s; gx > 0; gx -= s) {
    ctx.beginPath()
    ctx.moveTo(gx, 0)
    ctx.lineTo(gx, height)
    ctx.stroke()
  }
  for (let gy = height / 2; gy < height; gy += s) {
    ctx.beginPath()
    ctx.moveTo(0, gy)
    ctx.lineTo(width, gy)
    ctx.stroke()
  }
  for (let gy = height / 2 - s; gy > 0; gy -= s) {
    ctx.beginPath()
    ctx.moveTo(0, gy)
    ctx.lineTo(width, gy)
    ctx.stroke()
  }

  ctx.strokeStyle = dark ? 'rgba(246, 250, 248, 0.4)' : 'rgba(19, 32, 28, 0.36)'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(0, height / 2)
  ctx.lineTo(width, height / 2)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(width / 2, 0)
  ctx.lineTo(width / 2, height)
  ctx.stroke()
  ctx.restore()
}

function drawVectorField(dark) {
  const step = Math.max(46, Math.min(width, height) / 6.8)
  const color = dark ? '#7ef0df' : palette.green
  for (let x = step * 0.8; x < width; x += step) {
    for (let y = step * 0.7; y < height; y += step) {
      const mx = modelX(x)
      const my = modelY(y)
      const [u, v] = field(mx, my)
      const mag = Math.hypot(u, v)
      if (mag < 0.001) continue
      const length = Math.min(step * 0.38, step * (0.16 + mag * 0.09))
      const x2 = x + (u / mag) * length
      const y2 = y - (v / mag) * length
      drawArrow(x - (u / mag) * length * 0.32, y + (v / mag) * length * 0.32, x2, y2, color, dark ? 0.42 : 0.46)
    }
  }
}

function drawTrajectory(seedX, seedY, color, alpha, time, direction = 1) {
  let x = seedX
  let y = seedY
  const dt = 0.035 * direction
  const steps = props.tone === 'dark' ? 150 : 96
  const pulse = props.tone === 'dark' ? Math.sin(time * 1.1 + seedX * 2.1 + seedY) * 0.08 : 0

  ctx.save()
  ctx.strokeStyle = color
  ctx.globalAlpha = alpha + pulse
  ctx.lineWidth = props.tone === 'dark' ? 2 : 1.45
  ctx.beginPath()
  ctx.moveTo(px(x), py(y))
  for (let i = 0; i < steps; i += 1) {
    const [u, v] = field(x, y)
    x += u * dt
    y += v * dt
    if (Math.abs(x) > 4.3 || Math.abs(y) > 4.3) break
    ctx.lineTo(px(x), py(y))
  }
  ctx.stroke()
  ctx.restore()
}

function drawTrajectories(dark, time) {
  const seeds = [
    [-2.2, -1.4], [-1.6, 1.35], [-0.8, -2.0], [0.85, 1.7],
    [1.5, -1.25], [2.15, 1.1], [-2.35, 0.35], [2.4, -0.15],
    [-0.25, 2.1], [0.28, -2.15],
  ]
  const colors = dark ? ['#ffd676', '#7ef0df', '#8db9ff'] : [palette.gold, palette.blue, palette.green]
  seeds.forEach(([x, y], index) => {
    const drift = reducedMotion ? 0 : Math.sin(time * 0.22 + index) * 0.08
    drawTrajectory(x + drift, y - drift, colors[index % colors.length], dark ? 0.64 : 0.58, time, 1)
    drawTrajectory(x + drift, y - drift, colors[(index + 1) % colors.length], dark ? 0.28 : 0.2, time, -1)
  })
}

function drawLabels(dark) {
  const labelColor = dark ? 'rgba(246, 250, 248, 0.72)' : palette.muted
  ctx.save()
  ctx.fillStyle = labelColor
  ctx.font = `${Math.max(11, Math.min(width, height) * 0.035)}px Inter, system-ui, sans-serif`
  ctx.fillText('x', width - 22, height / 2 - 8)
  ctx.fillText('y', width / 2 + 8, 22)
  ctx.restore()
}

function drawEquilibrium(dark) {
  ctx.save()
  ctx.fillStyle = dark ? '#ffffff' : palette.red
  ctx.strokeStyle = dark ? 'rgba(255, 214, 118, 0.85)' : 'rgba(163, 56, 48, 0.25)'
  ctx.lineWidth = 5
  ctx.beginPath()
  ctx.arc(width / 2, height / 2, 5.5, 0, Math.PI * 2)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(width / 2, height / 2, 3.3, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

function draw(time) {
  if (!ctx) return
  const dark = props.tone === 'dark'
  paintBackground(dark, time)
  drawGrid(dark)
  drawVectorField(dark)
  drawTrajectories(dark, time)
  drawEquilibrium(dark)
  drawLabels(dark)
}

function animate(now) {
  draw(now / 1000)
  if (!reducedMotion) raf = window.requestAnimationFrame(animate)
}

function start() {
  window.cancelAnimationFrame(raf)
  draw(performance.now() / 1000)
  if (!reducedMotion) raf = window.requestAnimationFrame(animate)
}

function applyMotionPreference() {
  reducedMotion = Boolean(motionQuery?.matches)
  start()
}

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  motionQuery.addEventListener?.('change', applyMotionPreference)
  reducedMotion = motionQuery.matches
  measure()
  resizeObserver = new ResizeObserver(measure)
  resizeObserver.observe(canvasEl.value)
  window.addEventListener('resize', measure)
  window.setTimeout(measure, 250)
  window.setTimeout(measure, 900)
  start()
})

onBeforeUnmount(() => {
  window.cancelAnimationFrame(raf)
  resizeObserver?.disconnect()
  window.removeEventListener('resize', measure)
  motionQuery?.removeEventListener?.('change', applyMotionPreference)
})

watch(() => [props.kind, props.tone], start)
</script>

<template>
  <canvas ref="canvasEl" class="phase-canvas" :data-phase-kind="kind" :data-phase-tone="tone" aria-hidden="true"></canvas>
</template>
