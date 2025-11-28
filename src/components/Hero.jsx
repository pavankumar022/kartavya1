import { useState } from 'react'
import ClickBubbleEffect from './ClickBubbleEffect'

const Hero = ({ onNavigate }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section 
      className="relative min-h-[70vh] flex items-center justify-center hero-deep-pattern py-20 px-4 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor Glow Effect */}
      <div 
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(218, 165, 32, 0.3), rgba(184, 134, 11, 0.2), transparent)',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Ashoka Chakra Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative group">
          {/* Glassmorphism Container */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-white/10 shadow-2xl transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-[0_0_80px_rgba(218,165,32,0.4)]" />
          
          <svg className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-20 transition-all duration-500 group-hover:opacity-35 group-hover:drop-shadow-[0_0_50px_rgba(218,165,32,0.9)]" viewBox="0 0 200 200">
            {/* Ashoka Chakra - Golden Color */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="#DAA520" strokeWidth="3"/>
            <circle cx="100" cy="100" r="70" fill="none" stroke="#DAA520" strokeWidth="2"/>
            {/* 24 Spokes */}
            {[...Array(24)].map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const x1 = 100 + 30 * Math.cos(angle);
              const y1 = 100 + 30 * Math.sin(angle);
              const x2 = 100 + 70 * Math.cos(angle);
              const y2 = 100 + 70 * Math.sin(angle);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#DAA520" strokeWidth="2.5"/>;
            })}
            <circle cx="100" cy="100" r="10" fill="#DAA520"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight drop-shadow-lg">
          <span className="text-white">Kartavya</span>
          <span className="text-white/80"> – </span>
          <span className="text-green-secondary">Be the Change</span>
          <span className="text-white"> Bharat Needs</span>
        </h1>

        {/* Description */}
        <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          AI-powered civic-tech platform for reporting and resolving community issues.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <ClickBubbleEffect>
            <button
              onClick={() => onNavigate('report')}
              className="px-10 py-5 bg-white/15 text-white rounded-2xl font-bold text-xl hover:bg-white/25 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 backdrop-blur-lg border border-white/30"
            >
              Report an Issue
            </button>
          </ClickBubbleEffect>

          <ClickBubbleEffect>
            <button
              onClick={() => onNavigate('leaderboard')}
              className="px-10 py-5 bg-white/80 text-dark-gray rounded-2xl font-bold text-xl border border-white/60 hover:bg-white transition-all shadow-lg hover:shadow-2xl backdrop-blur-lg"
            >
              View Leaderboard
            </button>
          </ClickBubbleEffect>
        </div>

        {/* Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-white via-green-secondary to-white rounded-full shadow-lg"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

