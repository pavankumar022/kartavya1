import { useState } from 'react'
import ClickBubbleEffect from './ClickBubbleEffect'

const Navbar = ({ currentPage, onNavigate, sidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'feed', label: 'Feed' },
    { id: 'report', label: 'Report Issue' },
    { id: 'leaderboard', label: 'Leaderboard' },
    { id: 'profile', label: 'Profile' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="w-full px-3 sm:px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-dark-red rounded-lg flex items-center justify-center text-white font-bold text-xl md:text-2xl">
              K
            </div>
            <span className="text-xl md:text-2xl font-bold text-dark-gray">Kartavya</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center font-nav">
            <div className="flex items-center gap-4 lg:gap-6 bg-white border border-gray-200 rounded-full px-6 lg:px-8 py-2 shadow-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-2 lg:px-3 py-2 rounded-full text-base lg:text-xl font-semibold transition-all ${
                    currentPage === item.id
                      ? 'bg-dark-red text-white shadow'
                      : 'text-dark-gray hover:text-dark-red'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            <ClickBubbleEffect>
              <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                className="hidden sm:block px-4 md:px-6 lg:px-8 py-2 md:py-3 bg-dark-red text-white rounded-lg font-semibold text-sm md:text-base hover:bg-dark-red-light transition-colors shadow-md"
              >
                {isLoggedIn ? 'Logout' : 'Log In / Sign Up'}
              </button>
            </ClickBubbleEffect>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-dark-gray p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 font-nav">
          <div className="px-3 py-2 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setIsMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold ${
                  currentPage === item.id
                    ? 'bg-dark-red text-white'
                    : 'text-dark-gray hover:bg-gray-100'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
            <button
              onClick={() => {
                setIsLoggedIn(!isLoggedIn)
                setIsMenuOpen(false)
              }}
              className="w-full text-left px-4 py-3 rounded-lg text-base font-semibold bg-dark-red text-white"
            >
              {isLoggedIn ? 'Logout' : 'Log In / Sign Up'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

