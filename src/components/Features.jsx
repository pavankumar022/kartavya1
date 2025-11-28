const Features = () => {
  const features = [
    {
      icon: '🧠',
      title: 'AI Analysis',
      description: 'Advanced AI automatically categorizes and prioritizes issues for faster resolution.',
    },
    {
      icon: '📍',
      title: 'Precise Location',
      description: 'GPS-enabled location detection ensures issues reach the right authorities.',
    },
    {
      icon: '🎮',
      title: 'Gamification',
      description: 'Earn points, badges, and climb the leaderboard by actively participating.',
    },
    {
      icon: '🛡️',
      title: 'Authorities Integration',
      description: 'Direct connection with government officials for transparent communication.',
    },
    {
      icon: '🔒',
      title: 'Secure Authentication',
      description: 'Your data is protected with industry-standard security measures.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-dark-gray">
          Features
        </h2>
        <p className="text-center text-dark-gray mb-12 text-2xl font-medium">
          Everything you need to make a difference
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/40 bg-white/60 backdrop-blur-xl"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-dark-gray">
                {feature.title}
              </h3>
              <p className="text-dark-gray leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

