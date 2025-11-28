import { useState, useEffect } from 'react'

const ClickBubbleEffect = ({ children, className = '' }) => {
  const [bubbles, setBubbles] = useState([])

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const colors = ['#E4552C', '#1C7C3B', '#FBE9DD', '#F8E2D4']
    const bubbleCount = 4 + Math.floor(Math.random() * 3) // 4-6 bubbles
    const newBubbles = Array.from({ length: bubbleCount }, (_, i) => {
      const angle = (Math.PI * 2 * i) / bubbleCount
      const distance = 15 + Math.random() * 10
      return {
        id: Date.now() + i,
        x,
        y,
        color: colors[Math.floor(Math.random() * colors.length)],
        translateX: Math.cos(angle) * distance,
        translateY: Math.sin(angle) * distance,
      }
    })

    setBubbles(newBubbles)
  }

  useEffect(() => {
    if (bubbles.length > 0) {
      const timer = setTimeout(() => {
        setBubbles([])
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [bubbles])

  return (
    <div className={`relative ${className}`} onClick={handleClick}>
      {children}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute pointer-events-none z-50 bubble-animation"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: '8px',
            height: '8px',
            backgroundColor: bubble.color,
            borderRadius: '50%',
            ['--tx']: `${bubble.translateX}px`,
            ['--ty']: `${bubble.translateY}px`,
          }}
        />
      ))}
    </div>
  )
}

export default ClickBubbleEffect

