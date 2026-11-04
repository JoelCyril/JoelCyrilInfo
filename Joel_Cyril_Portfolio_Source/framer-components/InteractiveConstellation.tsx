// Source of the current custom Framer background component.
// Import/paste into a Framer code component; requires Framer's package.
import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
    style?: React.CSSProperties
    accent: string
    density: number
    strength: number
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function ReactiveConstellation(props: Props) {
    const { style, accent = "#FF5D35", density = 65, strength = 0.86 } = props
    const surface = React.useRef<HTMLDivElement>(null)
    const canvas = React.useRef<HTMLCanvasElement>(null)
    React.useEffect(() => {
        const host = surface.current
        const element = canvas.current
        if (!host || !element) return
        const ctx = element.getContext("2d")
        if (!ctx) return
        let w = 1, h = 1, scale = 1, raf = 0, inView = true
        const mouse = { x: -9999, y: -9999, active: false }
        const reduced = typeof window.matchMedia === "function" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        const raw = /^#[0-9a-fA-F]{6}$/.test(accent) ? accent : "#FF5D35"
        const rgb = [1, 3, 5].map(i => parseInt(raw.slice(i, i + 2), 16))
        const color = (a: number) => "rgba(" + rgb.join(",") + "," + a + ")"
        const dots = Array.from({ length: Math.max(20, Math.min(density, 130)) }, (_, i) => ({
            px: ((i * 0.61803398875 + 0.06) % 1),
            py: ((i * 0.38196601125 + 0.27) % 1),
            phase: i * 1.94,
            radius: i % 9 === 0 ? 2.2 : (i % 3 === 0 ? 1.35 : 0.9)
        }))
        function resize() {
            const r = host!.getBoundingClientRect()
            w = Math.max(1, Math.round(r.width))
            h = Math.max(1, Math.round(r.height))
            scale = Math.min(window.devicePixelRatio || 1, 2)
            element!.width = Math.round(w * scale)
            element!.height = Math.round(h * scale)
            element!.style.width = w + "px"
            element!.style.height = h + "px"
            ctx!.setTransform(scale, 0, 0, scale, 0, 0)
            paint(0)
        }
        function pointerMove(e: PointerEvent) {
            const r = host!.getBoundingClientRect()
            mouse.x = e.clientX - r.left
            mouse.y = e.clientY - r.top
            mouse.active = mouse.x >= 0 && mouse.y >= 0 && mouse.x <= r.width && mouse.y <= r.height
            if (reduced) paint(0)
        }
        function paint(t: number) {
            ctx!.clearRect(0, 0, w, h)
            ctx!.lineWidth = 1
            for (let x = 24; x <= w; x += 54) {
                ctx!.strokeStyle = color(0.043 * strength)
                ctx!.beginPath()
                ctx!.moveTo(x, 0)
                ctx!.lineTo(x, h)
                ctx!.stroke()
            }
            for (let y = 24; y <= h; y += 54) {
                ctx!.strokeStyle = color(0.043 * strength)
                ctx!.beginPath()
                ctx!.moveTo(0, y)
                ctx!.lineTo(w, y)
                ctx!.stroke()
            }
            if (mouse.active) {
                const halo = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 215)
                halo.addColorStop(0, color(0.145 * strength))
                halo.addColorStop(0.3, color(0.055 * strength))
                halo.addColorStop(1, color(0))
                ctx!.fillStyle = halo
                ctx!.fillRect(mouse.x - 215, mouse.y - 215, 430, 430)
            }
            const sec = t / 1000
            for (const dot of dots) {
                let x = dot.px * w + (reduced ? 0 : Math.sin(sec * 0.35 + dot.phase) * 8)
                let y = dot.py * h + (reduced ? 0 : Math.cos(sec * 0.29 + dot.phase) * 6)
                let near = 0
                if (mouse.active) {
                    const dx = x - mouse.x, dy = y - mouse.y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 150 && dist > 0.01) {
                        near = 1 - dist / 150
                        x += dx / dist * near * 18
                        y += dy / dist * near * 18
                        ctx!.strokeStyle = color(near * 0.27 * strength)
                        ctx!.beginPath()
                        ctx!.moveTo(x, y)
                        ctx!.lineTo(mouse.x, mouse.y)
                        ctx!.stroke()
                    }
                }
                const flicker = reduced ? 0.8 : (0.7 + Math.sin(sec * 0.8 + dot.phase) * 0.24)
                ctx!.fillStyle = color((0.2 + near * 0.67) * flicker * strength)
                ctx!.beginPath()
                ctx!.arc(x, y, dot.radius + near * 1.5, 0, Math.PI * 2)
                ctx!.fill()
            }
        }
        let prev = 0
        function tick(time: number) {
            if (inView && time - prev >= 26) {
                paint(time)
                prev = time
            }
            raf = requestAnimationFrame(tick)
        }
        const obs = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null
        obs?.observe(host)
        const viewObs = typeof IntersectionObserver !== "undefined"
            ? new IntersectionObserver(entries => { inView = Boolean(entries[0]?.isIntersecting) }) : null
        viewObs?.observe(host)
        window.addEventListener("resize", resize)
        window.addEventListener("pointermove", pointerMove, { passive: true })
        resize()
        if (!reduced) raf = requestAnimationFrame(tick)
        return () => {
            cancelAnimationFrame(raf)
            obs?.disconnect()
            viewObs?.disconnect()
            window.removeEventListener("resize", resize)
            window.removeEventListener("pointermove", pointerMove)
        }
    }, [accent, density, strength])
    return (
        <div ref={surface} aria-hidden="true" style={{
            width: "100%", height: "100%", position: "relative", overflow: "hidden",
            pointerEvents: "none",
            background: "radial-gradient(ellipse at 84% 24%, rgba(255,93,53,0.085), transparent 42%), radial-gradient(ellipse at 6% 76%, rgba(238,94,43,0.075), transparent 48%)",
            ...style
        }}>
            <canvas ref={canvas} style={{
                position: "absolute", inset: 0, width: "100%", height: "100%", display: "block"
            }}/>
        </div>
    )
}
addPropertyControls(ReactiveConstellation, {
    accent: { type: ControlType.Color, title: "Accent", defaultValue: "#FF5D35" },
    density: { type: ControlType.Number, title: "Particles", defaultValue: 65, min: 20, max: 130, step: 5 },
    strength: { type: ControlType.Number, title: "Intensity", defaultValue: 0.86, min: 0.2, max: 1.4, step: 0.05 }
})
