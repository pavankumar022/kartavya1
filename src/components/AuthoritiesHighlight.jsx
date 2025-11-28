import ClickBubbleEffect from './ClickBubbleEffect'

const AuthoritiesHighlight = ({ onNavigate }) => {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 bg-gradient-to-r from-green-secondary to-blue-600">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4">
          Connect with Government Authorities
        </h2>
        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto font-medium px-4">
          Direct access to officials working for your community. Track issues, get updates, and see real-time statistics.
        </p>
        <ClickBubbleEffect>
          <button
            onClick={() => onNavigate('authorities')}
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-white/70 text-green-secondary rounded-xl md:rounded-2xl font-bold text-base md:text-lg lg:text-xl hover:bg-white shadow-lg backdrop-blur-md border border-white/40 transition-all"
          >
            Explore Authorities →
          </button>
        </ClickBubbleEffect>
      </div>
    </section>
  )
}

export default AuthoritiesHighlight

