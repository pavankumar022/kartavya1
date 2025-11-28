const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E4552C" />
              <stop offset="100%" stopColor="#FF6B45" />
            </linearGradient>
          </defs>
          {/* Brain outer shape */}
          <path d="M32 8C25.5 8 20 12.5 18 18.5C16 18 14 19.5 14 22.5C14 23.5 14.3 24.4 14.8 25.2C13.2 26.8 12 29.3 12 32C12 35.5 14 38.5 17 40C17 46.5 22 52 28.5 54C29.5 54.6 30.7 55 32 55C33.3 55 34.5 54.6 35.5 54C42 52 47 46.5 47 40C50 38.5 52 35.5 52 32C52 29.3 50.8 26.8 49.2 25.2C49.7 24.4 50 23.5 50 22.5C50 19.5 48 18 46 18.5C44 12.5 38.5 8 32 8Z" fill="url(#aiGradient)" opacity="0.9"/>
          {/* Neural network nodes */}
          <circle cx="32" cy="20" r="3" fill="white" opacity="0.9"/>
          <circle cx="22" cy="28" r="2.5" fill="white" opacity="0.8"/>
          <circle cx="42" cy="28" r="2.5" fill="white" opacity="0.8"/>
          <circle cx="20" cy="40" r="2.5" fill="white" opacity="0.8"/>
          <circle cx="32" cy="38" r="3" fill="white" opacity="0.9"/>
          <circle cx="44" cy="40" r="2.5" fill="white" opacity="0.8"/>
          <circle cx="32" cy="48" r="2.5" fill="white" opacity="0.8"/>
          {/* Neural connections */}
          <path d="M32 20L22 28M32 20L42 28M22 28L20 40M42 28L44 40M32 38L20 40M32 38L44 40M32 38L32 48" stroke="white" strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
          {/* Pulse effect circles */}
          <circle cx="32" cy="32" r="15" stroke="#E4552C" strokeWidth="2" opacity="0.3" fill="none"/>
          <circle cx="32" cy="32" r="10" stroke="#E4552C" strokeWidth="1.5" opacity="0.5" fill="none"/>
        </svg>
      ),
      title: 'AI Analysis',
      description: 'Advanced AI automatically categorizes and prioritizes issues for faster resolution.',
    },
    {
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="locationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C7C3B" />
              <stop offset="100%" stopColor="#2A9D5A" />
            </linearGradient>
            <radialGradient id="pulseGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#1C7C3B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1C7C3B" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* GPS pulse rings */}
          <circle cx="32" cy="32" r="28" fill="url(#pulseGradient)" opacity="0.3"/>
          <circle cx="32" cy="32" r="20" fill="url(#pulseGradient)" opacity="0.4"/>
          {/* Location pin shadow */}
          <ellipse cx="32" cy="54" rx="8" ry="3" fill="#000000" opacity="0.15"/>
          {/* Main location pin */}
          <path d="M32 10C23.2 10 16 17.2 16 26C16 38 32 52 32 52C32 52 48 38 48 26C48 17.2 40.8 10 32 10Z" fill="url(#locationGradient)" stroke="#1C7C3B" strokeWidth="2"/>
          {/* Inner circle detail */}
          <circle cx="32" cy="26" r="8" fill="white" opacity="0.3"/>
          <circle cx="32" cy="26" r="6" fill="white" stroke="#1C7C3B" strokeWidth="2.5"/>
          <circle cx="32" cy="26" r="3" fill="#1C7C3B"/>
          {/* Coordinate lines */}
          <line x1="32" y1="22" x2="32" y2="30" stroke="#1C7C3B" strokeWidth="1.5" opacity="0.6"/>
          <line x1="28" y1="26" x2="36" y2="26" stroke="#1C7C3B" strokeWidth="1.5" opacity="0.6"/>
        </svg>
      ),
      title: 'Precise Location',
      description: 'GPS-enabled location detection ensures issues reach the right authorities.',
    },
    {
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#FFA500" />
              <stop offset="100%" stopColor="#8B0000" />
            </linearGradient>
          </defs>
          {/* Glow effect */}
          <circle cx="32" cy="32" r="24" fill="#FFD700" opacity="0.15"/>
          <circle cx="32" cy="32" r="18" fill="#FFA500" opacity="0.2"/>
          {/* Main star badge */}
          <path d="M32 8L37.5 21.5L52 23.5L42 33L44.5 47.5L32 40.5L19.5 47.5L22 33L12 23.5L26.5 21.5L32 8Z" fill="url(#starGradient)" stroke="#8B0000" strokeWidth="2"/>
          {/* Inner star */}
          <path d="M32 18L35 26L43 27L37.5 32.5L39 40.5L32 36L25 40.5L26.5 32.5L21 27L29 26L32 18Z" fill="white" opacity="0.4"/>
          {/* Center circle */}
          <circle cx="32" cy="30" r="8" fill="#8B0000" stroke="white" strokeWidth="2"/>
          {/* Trophy/achievement icon inside */}
          <path d="M32 26V34M29 34H35" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M28 28H36" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
          {/* Sparkle effects */}
          <circle cx="20" cy="16" r="2" fill="#FFD700"/>
          <circle cx="44" cy="16" r="2" fill="#FFD700"/>
          <circle cx="48" cy="32" r="1.5" fill="#FFA500"/>
          <circle cx="16" cy="32" r="1.5" fill="#FFA500"/>
        </svg>
      ),
      title: 'Gamification',
      description: 'Earn points, badges, and climb the leaderboard by actively participating.',
    },
    {
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E4552C" />
              <stop offset="100%" stopColor="#C73E1D" />
            </linearGradient>
          </defs>
          {/* Building shadow */}
          <rect x="16" y="58" width="32" height="2" fill="#000000" opacity="0.1" rx="1"/>
          {/* Main building */}
          <rect x="16" y="20" width="32" height="38" fill="url(#buildingGradient)" rx="2" stroke="#C73E1D" strokeWidth="2"/>
          {/* Building dome/top */}
          <path d="M16 20C16 20 20 12 32 12C44 12 48 20 48 20" fill="#E4552C" stroke="#C73E1D" strokeWidth="2"/>
          <circle cx="32" cy="12" r="3" fill="#FFD700" stroke="#FFA500" strokeWidth="1.5"/>
          {/* Windows grid */}
          <rect x="22" y="26" width="5" height="5" fill="white" opacity="0.7" rx="1"/>
          <rect x="30" y="26" width="5" height="5" fill="white" opacity="0.7" rx="1"/>
          <rect x="38" y="26" width="5" height="5" fill="white" opacity="0.7" rx="1"/>
          <rect x="22" y="34" width="5" height="5" fill="white" opacity="0.7" rx="1"/>
          <rect x="30" y="34" width="5" height="5" fill="white" opacity="0.7" rx="1"/>
          <rect x="38" y="34" width="5" height="5" fill="white" opacity="0.7" rx="1"/>
          {/* Door */}
          <rect x="27" y="46" width="10" height="12" fill="white" opacity="0.8" rx="1"/>
          <circle cx="35" cy="52" r="1" fill="#E4552C"/>
          {/* Pillars */}
          <rect x="20" y="20" width="3" height="38" fill="white" opacity="0.2"/>
          <rect x="41" y="20" width="3" height="38" fill="white" opacity="0.2"/>
          {/* Shield overlay */}
          <path d="M32 8C32 8 40 10 40 16C40 24 32 28 32 28C32 28 24 24 24 16C24 10 32 8 32 8Z" fill="white" opacity="0.15" stroke="white" strokeWidth="1.5"/>
        </svg>
      ),
      title: 'Authorities Integration',
      description: 'Direct connection with government officials for transparent communication.',
    },
    {
      icon: (
        <svg className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A9D5A" />
              <stop offset="100%" stopColor="#1C7C3B" />
            </linearGradient>
          </defs>
          {/* Security shield background */}
          <path d="M32 6C32 6 44 10 44 18C44 32 32 42 32 42C32 42 20 32 20 18C20 10 32 6 32 6Z" fill="#1C7C3B" opacity="0.15"/>
          {/* Lock body shadow */}
          <rect x="20" y="32" width="24" height="22" fill="#000000" opacity="0.1" rx="3"/>
          {/* Lock body */}
          <rect x="18" y="30" width="28" height="24" fill="url(#lockGradient)" rx="3" stroke="#1C7C3B" strokeWidth="2.5"/>
          {/* Lock shackle */}
          <path d="M26 30V20C26 16.7 28.7 14 32 14C35.3 14 38 16.7 38 20V30" stroke="#1C7C3B" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M26 30V20C26 16.7 28.7 14 32 14C35.3 14 38 16.7 38 20V30" stroke="#2A9D5A" strokeWidth="2" strokeLinecap="round" fill="none"/>
          {/* Lock detail - keyhole */}
          <circle cx="32" cy="40" r="4" fill="white" opacity="0.9"/>
          <rect x="31" y="42" width="2" height="6" fill="white" opacity="0.9" rx="1"/>
          {/* Decorative secure elements */}
          <circle cx="24" y="36" r="1.5" fill="white" opacity="0.5"/>
          <circle cx="40" y="36" r="1.5" fill="white" opacity="0.5"/>
          <circle cx="24" y="48" r="1.5" fill="white" opacity="0.5"/>
          <circle cx="40" y="48" r="1.5" fill="white" opacity="0.5"/>
          {/* Digital security lines */}
          <line x1="22" y1="52" x2="26" y2="52" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
          <line x1="38" y1="52" x2="42" y2="52" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
          {/* Lock highlight */}
          <rect x="20" y="32" width="3" height="20" fill="white" opacity="0.2" rx="1"/>
        </svg>
      ),
      title: 'Secure Authentication',
      description: 'Your data is protected with industry-standard security measures.',
    },
  ]

  return (
    <section className="py-8 md:py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-3 md:mb-6 text-dark-gray">
          Features
        </h2>
        <p className="text-center text-dark-gray mb-6 md:mb-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium px-4">
          Everything you need to make a difference
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all border border-white/40 bg-white/60 backdrop-blur-xl"
            >
              <div className="flex justify-center mb-3 md:mb-4">{feature.icon}</div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 text-dark-gray text-center">
                {feature.title}
              </h3>
              <p className="text-dark-gray leading-relaxed text-xs md:text-sm lg:text-base text-center">
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

