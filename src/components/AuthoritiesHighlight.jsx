import ClickBubbleEffect from './ClickBubbleEffect'

const AuthoritiesHighlight = ({ onNavigate }) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-secondary to-blue-600">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Connect with Government Authorities
        </h2>
        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto font-medium">
          Direct access to officials working for your community. Track issues, get updates, and see real-time statistics.
        </p>
        <ClickBubbleEffect>
          <button
            onClick={() => onNavigate('authorities')}
            className="px-10 py-5 bg-white/70 text-green-secondary rounded-2xl font-bold text-xl hover:bg-white shadow-lg backdrop-blur-md border border-white/40 transition-all"
          >
            Explore Authorities →
          </button>
        </ClickBubbleEffect>
      </div>
    </section>
  )
}

export default AuthoritiesHighlight

