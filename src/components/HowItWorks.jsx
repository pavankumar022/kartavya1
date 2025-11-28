const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Snap & Describe',
      description: 'Take a photo and describe your civic issue in simple words.',
      icon: '📸',
      bgColor: '#E4552C',
      textColor: '#E4552C',
    },
    {
      number: '2',
      title: 'AI & Location',
      description: 'Our AI analyzes the issue and automatically detects your precise location.',
      icon: '🤖',
      bgColor: '#1C7C3B',
      textColor: '#1C7C3B',
    },
    {
      number: '3',
      title: 'Smart Routing',
      description: 'The issue is automatically routed to the relevant government authority.',
      icon: '🎯',
      bgColor: '#E4552C',
      textColor: '#E4552C',
    },
    {
      number: '4',
      title: 'Track & Earn',
      description: 'Track resolution progress and earn points for active participation.',
      icon: '⭐',
      bgColor: '#1C7C3B',
      textColor: '#1C7C3B',
    },
  ]

  return (
    <section className="py-20 px-4 bg-beige-pale">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-dark-gray">
          How it Works
        </h2>
        <p className="text-center text-dark-gray mb-12 text-2xl font-medium">
          Simple steps to make your community better
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-white/40"
            >
              <div
                className="text-5xl font-bold mb-2 text-center"
                style={{ color: step.textColor === '#E4552C' ? '#8B0000' : step.textColor }}
              >
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 text-dark-gray">
                {step.title}
              </h3>
              <p className="text-dark-gray text-center leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

