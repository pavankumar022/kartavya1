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
    <section className="py-8 md:py-16 lg:py-20 px-4 bg-beige-pale">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-3 md:mb-6 text-dark-gray">
          How it Works
        </h2>
        <p className="text-center text-dark-gray mb-6 md:mb-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-4">
          Simple steps to make your community better
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-white/40"
            >
              <div
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center"
                style={{ color: step.textColor === '#E4552C' ? '#8B0000' : step.textColor }}
              >
                {step.number}
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-2 md:mb-3 text-dark-gray">
                {step.title}
              </h3>
              <p className="text-dark-gray text-center leading-relaxed text-sm md:text-base lg:text-lg">
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

