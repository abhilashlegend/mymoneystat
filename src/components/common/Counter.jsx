import { useEffect, useRef, useState } from 'react'

export default function Counter({ end = 0, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const from = 0
            const to = Number(end)

            const step = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              const value = Math.floor(progress * (to - from) + from)
              setCount(value)
              if (progress < 1) requestAnimationFrame(step)
              else setCount(to)
            }

            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <h1 ref={ref} className="display-4 text-white">
      {count}
    </h1>
  )
}
