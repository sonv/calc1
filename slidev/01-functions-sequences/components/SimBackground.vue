<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  kind: {
    type: String,
    default: 'fluid',
  },
})

const canvasEl = ref(null)
let ctx
let width = 960
let height = 540
let raf = 0
let resizeObserver
let motionQuery
let reducedMotion = false
let particles = []

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

function resetParticle(particle, index) {
  const band = index % 4
  particle.x = Math.random() * width
  particle.y = (height * (band + 0.5)) / 4 + (Math.random() - 0.5) * height * 0.2
  particle.speed = 0.8 + Math.random() * 1.6
  particle.alpha = 0.16 + Math.random() * 0.36
  particle.phase = Math.random() * Math.PI * 2
}

function seedParticles() {
  const baseCount = props.kind === 'fluid' ? width * height / 3900 : width * height / 8200
  const count = clamp(Math.round(baseCount), props.kind === 'fluid' ? 130 : 55, props.kind === 'fluid' ? 260 : 120)
  particles = Array.from({ length: count }, (_, index) => {
    const particle = { x: 0, y: 0, speed: 1, alpha: 0.2, phase: 0 }
    resetParticle(particle, index)
    return particle
  })
}

function measureCanvas() {
  const canvas = canvasEl.value
  if (!canvas) return

  const rect = canvas.getBoundingClientRect()
  const parentRect = canvas.parentElement?.getBoundingClientRect()
  width = Math.max(rect.width, parentRect?.width || 0, 960)
  height = Math.max(rect.height, parentRect?.height || 0, 540)

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = Math.round(width * dpr)
  canvas.height = Math.round(height * dpr)
  ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  seedParticles()
  draw(performance.now() / 1000)
}

function paintBase(top, bottom, glow, time) {
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, top)
  gradient.addColorStop(0.58, '#071116')
  gradient.addColorStop(1, bottom)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  const glowX = width * (0.62 + Math.sin(time * 0.21) * 0.12)
  const glowY = height * (0.42 + Math.cos(time * 0.17) * 0.1)
  const radial = ctx.createRadialGradient(glowX, glowY, 20, glowX, glowY, width * 0.78)
  radial.addColorStop(0, glow)
  radial.addColorStop(0.48, 'rgba(255, 255, 255, 0.025)')
  radial.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.fillStyle = radial
  ctx.fillRect(0, 0, width, height)

  ctx.save()
  ctx.globalAlpha = 0.13
  ctx.strokeStyle = '#d7fff3'
  ctx.lineWidth = 1
  const gap = Math.max(width, height) / 12
  for (let x = -gap; x < width + gap; x += gap) {
    ctx.beginPath()
    ctx.moveTo(x + Math.sin(time + x * 0.01) * 10, 0)
    ctx.lineTo(x - height * 0.22, height)
    ctx.stroke()
  }
  for (let y = gap; y < height; y += gap) {
    ctx.beginPath()
    ctx.moveTo(0, y + Math.cos(time + y * 0.01) * 8)
    ctx.lineTo(width, y - width * 0.12)
    ctx.stroke()
  }
  ctx.restore()
}

function drawArrow(x1, y1, x2, y2, color, alpha = 0.75) {
  const angle = Math.atan2(y2 - y1, x2 - x1)
  const head = 8
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = 1.5
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

function drawFluid(time) {
  paintBase('#031817', '#072b33', 'rgba(75, 231, 201, 0.22)', time)

  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  particles.forEach((particle, index) => {
    const previousX = particle.x
    const previousY = particle.y
    const curl = Math.sin(particle.y * 0.012 + time * 0.9) * 1.6
      + Math.cos(particle.x * 0.008 - time * 0.65) * 1.3
      + Math.sin((particle.x + particle.y) * 0.006 + particle.phase) * 0.7
    const radius = Math.sin(particle.x * 0.006 + time * 0.55) * 0.45 + 1
    particle.x += Math.cos(curl) * particle.speed * 2.2
    particle.y += Math.sin(curl) * particle.speed * radius * 1.5

    if (particle.x < -30 || particle.x > width + 30 || particle.y < -30 || particle.y > height + 30) {
      resetParticle(particle, index)
      particle.x = Math.random() > 0.5 ? -10 : width + 10
    }

    ctx.strokeStyle = `rgba(97, 241, 211, ${particle.alpha})`
    ctx.lineWidth = 1.1
    ctx.beginPath()
    ctx.moveTo(previousX, previousY)
    ctx.lineTo(particle.x, particle.y)
    ctx.stroke()
  })

  for (let i = 0; i < 7; i += 1) {
    const y = height * (0.18 + i * 0.1)
    ctx.strokeStyle = `rgba(255, 214, 124, ${0.08 + i * 0.01})`
    ctx.lineWidth = 1.4
    ctx.beginPath()
    for (let x = -60; x <= width + 60; x += 18) {
      const wave = Math.sin(x * 0.012 + time * 0.8 + i) * height * 0.045
      const drift = Math.cos(x * 0.006 - time * 0.4 + i) * height * 0.03
      if (x === -60) ctx.moveTo(x, y + wave + drift)
      else ctx.lineTo(x, y + wave + drift)
    }
    ctx.stroke()
  }
  ctx.restore()
}

function drawWave(y, amplitude, color, phase, alpha) {
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.strokeStyle = color
  ctx.lineWidth = 2.2
  ctx.beginPath()
  for (let x = -10; x <= width + 10; x += 8) {
    const value = Math.sin(x * 0.028 + phase) * amplitude
    const envelope = 0.72 + Math.sin(x * 0.007 + phase * 0.24) * 0.18
    const nextY = y + value * envelope
    if (x === -10) ctx.moveTo(x, nextY)
    else ctx.lineTo(x, nextY)
  }
  ctx.stroke()
  ctx.restore()
}

function drawMaxwell(time) {
  paintBase('#061323', '#121520', 'rgba(87, 190, 255, 0.22)', time)
  const centerY = height * 0.52
  const phase = -time * 2.2

  drawWave(centerY - height * 0.09, height * 0.075, '#67ddff', phase, 0.88)
  drawWave(centerY + height * 0.07, height * 0.065, '#ffd676', phase + Math.PI / 2, 0.82)
  drawWave(centerY, height * 0.035, '#b7fff0', phase + Math.PI, 0.46)

  for (let x = 60; x < width; x += 72) {
    const e = Math.sin(x * 0.028 + phase)
    const b = Math.cos(x * 0.028 + phase)
    drawArrow(x, centerY - height * 0.19, x, centerY - height * 0.19 - e * height * 0.095, '#67ddff', 0.72)
    drawArrow(x, centerY + height * 0.2, x + b * width * 0.035, centerY + height * 0.2, '#ffd676', 0.68)
  }

  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  particles.forEach((particle, index) => {
    particle.x += 0.45 + particle.speed * 0.35
    particle.y += Math.sin(time * 1.3 + particle.phase + particle.x * 0.01) * 0.26
    if (particle.x > width + 20) {
      particle.x = -20
      particle.y = height * (0.18 + Math.random() * 0.64)
    }
    ctx.fillStyle = index % 2 === 0 ? `rgba(102, 221, 255, ${particle.alpha})` : `rgba(255, 214, 118, ${particle.alpha})`
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, 1.7, 0, Math.PI * 2)
    ctx.fill()
  })
  ctx.restore()
}

function drawQuantum(time) {
  paintBase('#07151d', '#171022', 'rgba(127, 225, 211, 0.2)', time)
  const center = width * (0.48 + Math.sin(time * 0.28) * 0.12)
  const baseY = height * 0.55
  const sigma = width * 0.16

  ctx.save()
  ctx.globalCompositeOperation = 'lighter'
  for (let r = width * 0.05; r < width * 0.42; r += width * 0.055) {
    const pulse = (r + time * 22) % (width * 0.42)
    ctx.strokeStyle = `rgba(130, 247, 226, ${0.12 * (1 - pulse / (width * 0.42))})`
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.ellipse(center, baseY, pulse * 1.45, pulse * 0.72, 0, 0, Math.PI * 2)
    ctx.stroke()
  }

  const probability = ctx.createLinearGradient(0, baseY - height * 0.24, 0, baseY + height * 0.22)
  probability.addColorStop(0, 'rgba(126, 237, 221, 0.34)')
  probability.addColorStop(1, 'rgba(255, 212, 118, 0.03)')
  ctx.fillStyle = probability
  ctx.beginPath()
  ctx.moveTo(0, baseY)
  for (let x = 0; x <= width; x += 6) {
    const gaussian = Math.exp(-((x - center) ** 2) / (2 * sigma ** 2))
    const value = Math.sin(x * 0.06 - time * 4.6) * gaussian * height * 0.2
    ctx.lineTo(x, baseY + value)
  }
  ctx.lineTo(width, baseY)
  ctx.closePath()
  ctx.fill()

  ctx.strokeStyle = '#7ef0df'
  ctx.lineWidth = 2.4
  ctx.beginPath()
  for (let x = 0; x <= width; x += 5) {
    const gaussian = Math.exp(-((x - center) ** 2) / (2 * sigma ** 2))
    const value = Math.sin(x * 0.06 - time * 4.6) * gaussian * height * 0.2
    if (x === 0) ctx.moveTo(x, baseY + value)
    else ctx.lineTo(x, baseY + value)
  }
  ctx.stroke()

  particles.forEach((particle) => {
    particle.phase += 0.012
    const orbit = 18 + Math.sin(particle.phase + time) * 9
    const x = center + Math.cos(particle.phase * 2.1) * sigma * 0.78 + Math.sin(time + particle.phase) * orbit
    const y = baseY + Math.sin(particle.phase * 1.7) * height * 0.16
    ctx.fillStyle = `rgba(255, 214, 118, ${particle.alpha})`
    ctx.beginPath()
    ctx.arc(x, y, 1.5 + particle.alpha * 3, 0, Math.PI * 2)
    ctx.fill()
  })
  ctx.restore()
}

function drawRelativity(time) {
  paintBase('#050910', '#14111d', 'rgba(255, 214, 118, 0.16)', time)
  const centerX = width * 0.55
  const centerY = height * 0.5
  const horizon = Math.min(width, height) * 0.115

  ctx.save()
  ctx.translate(centerX, centerY)
  ctx.globalCompositeOperation = 'lighter'

  for (let i = 0; i < 15; i += 1) {
    const radius = horizon * (1.35 + i * 0.34)
    const alpha = 0.15 * (1 - i / 16)
    ctx.strokeStyle = `rgba(124, 233, 219, ${alpha})`
    ctx.lineWidth = 1.1
    ctx.beginPath()
    ctx.ellipse(0, 0, radius * 1.55, radius * 0.58, Math.sin(time * 0.15) * 0.08, 0, Math.PI * 2)
    ctx.stroke()
  }

  for (let i = 0; i < 18; i += 1) {
    const angle = (i / 18) * Math.PI * 2 + time * 0.08
    ctx.strokeStyle = 'rgba(218, 255, 245, 0.12)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(Math.cos(angle) * horizon * 1.4, Math.sin(angle) * horizon * 0.5)
    ctx.quadraticCurveTo(
      Math.cos(angle) * width * 0.16,
      Math.sin(angle) * height * 0.1,
      Math.cos(angle) * width * 0.62,
      Math.sin(angle) * height * 0.28,
    )
    ctx.stroke()
  }

  const disk = ctx.createRadialGradient(0, 0, horizon * 0.7, 0, 0, horizon * 4.2)
  disk.addColorStop(0, 'rgba(255, 245, 201, 0.0)')
  disk.addColorStop(0.22, 'rgba(255, 214, 118, 0.78)')
  disk.addColorStop(0.42, 'rgba(255, 132, 79, 0.36)')
  disk.addColorStop(1, 'rgba(255, 132, 79, 0)')

  ctx.save()
  ctx.rotate(-0.18 + Math.sin(time * 0.25) * 0.04)
  ctx.scale(1.75, 0.46)
  ctx.fillStyle = disk
  ctx.beginPath()
  ctx.arc(0, 0, horizon * 4.5, 0, Math.PI * 2)
  ctx.arc(0, 0, horizon * 1.25, 0, Math.PI * 2, true)
  ctx.fill()
  ctx.restore()

  const lens = ctx.createRadialGradient(0, 0, 0, 0, 0, horizon * 1.35)
  lens.addColorStop(0, '#020407')
  lens.addColorStop(0.72, '#020407')
  lens.addColorStop(1, 'rgba(255, 214, 118, 0.44)')
  ctx.fillStyle = lens
  ctx.beginPath()
  ctx.arc(0, 0, horizon * 1.35, 0, Math.PI * 2)
  ctx.fill()

  particles.forEach((particle, index) => {
    particle.phase += 0.01 + particle.speed * 0.002
    const radius = horizon * (1.7 + (index % 18) * 0.13)
    const angle = particle.phase + time * (0.16 + particle.speed * 0.02)
    const x = Math.cos(angle) * radius * 1.75
    const y = Math.sin(angle) * radius * 0.48
    ctx.fillStyle = `rgba(255, 235, 176, ${particle.alpha})`
    ctx.beginPath()
    ctx.arc(x, y, 1.2 + particle.alpha * 2.4, 0, Math.PI * 2)
    ctx.fill()
  })

  ctx.restore()
}

function drawGradient(time) {
  paintBase('#10151a', '#16231e', 'rgba(255, 214, 118, 0.18)', time)
  const centerX = width * 0.67
  const centerY = height * 0.48

  ctx.save()
  ctx.translate(centerX, centerY)
  ctx.rotate(-0.22)
  for (let i = 1; i <= 10; i += 1) {
    const alpha = 0.08 + (11 - i) * 0.018
    ctx.strokeStyle = `rgba(127, 232, 213, ${alpha})`
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.ellipse(0, 0, width * 0.05 * i, height * 0.032 * i, 0, 0, Math.PI * 2)
    ctx.stroke()
  }
  ctx.restore()

  for (let gx = width * 0.18; gx < width * 0.9; gx += width * 0.12) {
    for (let gy = height * 0.22; gy < height * 0.8; gy += height * 0.14) {
      const dx = centerX - gx
      const dy = centerY - gy
      const scale = 0.035
      drawArrow(gx, gy, gx + dx * scale, gy + dy * scale, '#5ee6cf', 0.2)
    }
  }

  const path = [
    [0.16, 0.24],
    [0.29, 0.33],
    [0.4, 0.42],
    [0.52, 0.5],
    [0.6, 0.5],
    [0.66, 0.48],
  ]
  const progress = (Math.sin(time * 0.75) + 1) / 2
  const activeSegment = progress * (path.length - 1)

  ctx.save()
  ctx.strokeStyle = '#ffd676'
  ctx.lineWidth = 3
  ctx.shadowColor = 'rgba(255, 214, 118, 0.55)'
  ctx.shadowBlur = 18
  ctx.beginPath()
  path.forEach(([px, py], index) => {
    const x = px * width
    const y = py * height
    if (index === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  })
  ctx.stroke()

  path.forEach(([px, py], index) => {
    ctx.fillStyle = index <= activeSegment + 0.8 ? '#ffd676' : 'rgba(255, 214, 118, 0.28)'
    ctx.beginPath()
    ctx.arc(px * width, py * height, 5.5, 0, Math.PI * 2)
    ctx.fill()
  })

  const segmentIndex = Math.min(Math.floor(activeSegment), path.length - 2)
  const local = activeSegment - segmentIndex
  const [x1, y1] = path[segmentIndex]
  const [x2, y2] = path[segmentIndex + 1]
  ctx.fillStyle = '#ffffff'
  ctx.beginPath()
  ctx.arc((x1 + (x2 - x1) * local) * width, (y1 + (y2 - y1) * local) * height, 7, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()

  const layers = [
    [0.11, 0.62, 3],
    [0.24, 0.62, 4],
    [0.37, 0.62, 2],
  ]
  ctx.save()
  ctx.globalAlpha = 0.42
  layers.forEach(([xBase, yBase, nodes], layerIndex) => {
    for (let i = 0; i < nodes; i += 1) {
      const x = xBase * width
      const y = (yBase - 0.16 + i * 0.1) * height
      ctx.fillStyle = layerIndex === 1 ? '#5ee6cf' : '#ffd676'
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()
      if (layerIndex > 0) {
        const previous = layers[layerIndex - 1]
        for (let j = 0; j < previous[2]; j += 1) {
          const px = previous[0] * width
          const py = (previous[1] - 0.16 + j * 0.1) * height
          ctx.strokeStyle = 'rgba(218, 255, 245, 0.18)'
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(px, py)
          ctx.lineTo(x, y)
          ctx.stroke()
        }
      }
    }
  })
  ctx.restore()
}

function draw(time) {
  if (!ctx) return
  if (props.kind === 'maxwell') drawMaxwell(time)
  else if (props.kind === 'quantum') drawQuantum(time)
  else if (props.kind === 'relativity') drawRelativity(time)
  else if (props.kind === 'gradient') drawGradient(time)
  else drawFluid(time)
}

function animate(now) {
  draw(now / 1000)
  if (!reducedMotion) {
    raf = window.requestAnimationFrame(animate)
  }
}

function start() {
  window.cancelAnimationFrame(raf)
  draw(performance.now() / 1000)
  if (!reducedMotion) {
    raf = window.requestAnimationFrame(animate)
  }
}

function applyMotionPreference() {
  reducedMotion = Boolean(motionQuery?.matches)
  start()
}

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  motionQuery.addEventListener?.('change', applyMotionPreference)
  reducedMotion = motionQuery.matches

  measureCanvas()
  resizeObserver = new ResizeObserver(measureCanvas)
  resizeObserver.observe(canvasEl.value)
  window.addEventListener('resize', measureCanvas)
  window.setTimeout(measureCanvas, 250)
  window.setTimeout(measureCanvas, 900)
  start()
})

onBeforeUnmount(() => {
  window.cancelAnimationFrame(raf)
  resizeObserver?.disconnect()
  window.removeEventListener('resize', measureCanvas)
  motionQuery?.removeEventListener?.('change', applyMotionPreference)
})

watch(() => props.kind, () => {
  seedParticles()
  start()
})
</script>

<template>
  <canvas ref="canvasEl" class="sim-canvas" :data-sim-kind="kind" aria-hidden="true"></canvas>
</template>
