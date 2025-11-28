import ClickBubbleEffect from './ClickBubbleEffect'

const Hero = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center hero-deep-pattern py-20 px-4 text-white">
      <div className="max-w-5xl mx-auto text-center">
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

