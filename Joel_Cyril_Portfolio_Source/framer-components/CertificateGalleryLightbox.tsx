// Source of the current custom Framer certificate viewer.
// Framer's canvas controls populate its items[] property.
import * as React from "react"
import { createPortal } from "react-dom"
import { addPropertyControls, ControlType } from "framer"

interface Certificate { image: string; title: string; subtitle: string }
interface Props { items?: Certificate[]; style?: React.CSSProperties }

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 */
export default function CertificateGallery(props: Props) {
    const { items = [], style } = props
    const data = (Array.isArray(items) ? items : []).filter(x => x && x.image)
    const [active, setActive] = React.useState<number | null>(null)
    const [mobile, setMobile] = React.useState(false)
    const [ready, setReady] = React.useState(false)
    const host = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => { setReady(true) }, [])
    React.useEffect(() => {
        const h = host.current
        if (!h) return
        const recalc = () => setMobile(h.clientWidth < 570)
        const obs = typeof ResizeObserver !== "undefined" ? new ResizeObserver(recalc) : null
        obs?.observe(h)
        recalc()
        return () => obs?.disconnect()
    }, [])
    React.useEffect(() => {
        if (active === null) return
        const old = document.body.style.overflow
        document.body.style.overflow = "hidden"
        const keyboard = (event: KeyboardEvent) => {
            if (event.key === "Escape") setActive(null)
            if (event.key === "ArrowRight") setActive(i => i === null ? null : (i + 1) % data.length)
            if (event.key === "ArrowLeft") setActive(i => i === null ? null : (i - 1 + data.length) % data.length)
        }
        document.addEventListener("keydown", keyboard)
        return () => {
            document.removeEventListener("keydown", keyboard)
            document.body.style.overflow = old
        }
    }, [active, data.length])
    const actionStyle: React.CSSProperties = {
        border: "1px solid #6B5447", borderRadius: 24, color: "#F9F2E8",
        background: "#241C18", font: "600 14px Inter, sans-serif", cursor: "pointer",
        padding: "10px 16px"
    }
    const current = active === null ? null : data[active]
    return (
        <div ref={host} style={{ width: "100%", display: "block", ...style }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: mobile ? "repeat(2,minmax(0,1fr))" : "repeat(3,minmax(0,1fr))",
                gap: mobile ? 10 : 16, width: "100%"
            }}>
                {data.map((item, index) => (
                    <button key={index} type="button" onClick={() => setActive(index)}
                        aria-label={"Open " + item.title + " full view"}
                        style={{ appearance: "none", cursor: "zoom-in", textAlign: "left",
                            padding: mobile ? 9 : 11, borderRadius: 12,
                            border: "1px solid #393029", background: "#171410",
                            color: "#F9F2E8", width: "100%", minWidth: 0, display: "flex",
                            flexDirection: "column", gap: 8, overflow: "hidden" }}>
                        <img alt={item.title} src={item.image} loading="lazy"
                            style={{ width: "100%", height: mobile ? 112 : 172,
                                borderRadius: 8, objectFit: "contain",
                                background: "#2E2620", display: "block" }} />
                        <strong style={{ fontFamily: "'DM Serif Display',Georgia,serif",
                            fontWeight: 400, fontSize: mobile ? 15 : 20,
                            lineHeight: 1.18, overflowWrap: "break-word" }}>{item.title}</strong>
                        <span style={{ fontFamily: "Inter,sans-serif",
                            fontSize: mobile ? 11 : 12, lineHeight: 1.45, color: "#B5AAA0",
                            overflowWrap: "break-word" }}>{item.subtitle}</span>
                    </button>
                ))}
            </div>
            {ready && current && createPortal(
                <div role="dialog" aria-modal="true" aria-label={current.title}
                    onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null) }}
                    style={{ position: "fixed", inset: 0, zIndex: 2147483645,
                        display: "flex", flexDirection: "column", alignItems: "center",
                        justifyContent: "center", padding: mobile ? 12 : 28,
                        background: "rgba(7,6,5,0.94)", boxSizing: "border-box" }}>
                    <div style={{ width: "100%", maxWidth: 1100, maxHeight: "95vh",
                        display: "flex", flexDirection: "column", overflow: "hidden",
                        borderRadius: 16, border: "1px solid #6B4A3A",
                        background: "#14110F", padding: mobile ? 12 : 20,
                        boxSizing: "border-box", gap: 13, boxShadow: "0 25px 75px rgba(0,0,0,.75)" }}>
                        <div style={{ display: "flex", alignItems: "center",
                            justifyContent: "space-between", gap: 12 }}>
                            <div style={{ minWidth: 0, fontFamily: "Inter,sans-serif",
                                fontWeight: 600, color: "#FF7D57", fontSize: mobile ? 12 : 15 }}>
                                {String((active || 0) + 1).padStart(2, "0")} / {data.length}
                            </div>
                            <button type="button" onClick={() => setActive(null)}
                                aria-label="Close certificate viewer" style={actionStyle}>Close ✕</button>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center",
                            minHeight: 0, flex: "1 1 auto", overflow: "hidden" }}>
                            <img src={current.image} alt={current.title} style={{
                                display: "block", maxWidth: "100%", maxHeight: mobile ? "64vh" : "72vh",
                                width: "auto", height: "auto", objectFit: "contain" }}/>
                        </div>
                        <div style={{ fontFamily: "'DM Serif Display', Georgia, serif",
                            fontSize: mobile ? 18 : 24, lineHeight: 1.25, color: "#F9F2E8" }}>{current.title}</div>
                        <div style={{ display: "flex", gap: 10, alignItems: "center",
                            justifyContent: "space-between" }}>
                            <span style={{ color: "#B5AAA0", fontFamily: "Inter,sans-serif",
                                fontSize: 12, flex: 1, minWidth: 0 }}>{current.subtitle}</span>
                            <button type="button" onClick={() => setActive(i => i === null ? null : (i - 1 + data.length) % data.length)}
                                aria-label="Previous certificate" style={actionStyle}>‹</button>
                            <button type="button" onClick={() => setActive(i => i === null ? null : (i + 1) % data.length)}
                                aria-label="Next certificate" style={actionStyle}>›</button>
                        </div>
                    </div>
                </div>, document.body
            )}
        </div>
    )
}

addPropertyControls(CertificateGallery, {
    items: {
        type: ControlType.Array, title: "Certificates",
        control: {
            type: ControlType.Object,
            controls: {
                image: { type: ControlType.Image, title: "Photo" },
                title: { type: ControlType.String, title: "Title", defaultValue: "Certificate" },
                subtitle: { type: ControlType.String, title: "Details", defaultValue: "" }
            }
        }
    }
})
